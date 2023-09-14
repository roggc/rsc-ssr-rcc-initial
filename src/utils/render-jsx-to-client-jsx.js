export async function renderJSXToClientJSX(jsx, key = null) {
  if (
    typeof jsx === "string" ||
    typeof jsx === "number" ||
    typeof jsx === "boolean" ||
    jsx == null
  ) {
    // Don't need to do anything special with these types.
    return jsx;
  } else if (Array.isArray(jsx)) {
    // Process each item in an array.
    return await Promise.all(
      jsx.map(
        async (child, i) =>
          await renderJSXToClientJSX(
            child,
            i + (typeof child.type === "string" ? "_" + child.type : "")
          )
      )
    );
  } else if (typeof jsx === "object") {
    if (jsx.$$typeof === Symbol.for("react.element")) {
      if (jsx.type === Symbol.for("react.fragment")) {
        return {
          ...jsx,
          props: await renderJSXToClientJSX(jsx.props),
          key: key ?? jsx.key,
        };
      } else if (typeof jsx.type === "string") {
        // This is a component like <div />.
        // Go over its props to make sure they can be turned into JSON.
        return {
          ...jsx,
          props: await renderJSXToClientJSX(jsx.props),
          key: key ?? jsx.key,
        };
      } else if (typeof jsx.type === "function") {
        // This is a custom React component (like <Footer />).
        // Call its function, and repeat the procedure for the JSX it returns.
        const Component = jsx.type;
        const props = jsx.props;
        if (Object.keys(props).some((k) => k === "__isClient__")) {
          return {
            ...jsx,
            type: { file: jsx.props.__isClient__ },
            props: await renderJSXToClientJSX(
              Object.fromEntries(
                Object.entries(jsx.props).filter(
                  ([key]) => key !== "__isClient__"
                )
              )
            ),
            key: key ?? jsx.key,
          };
        } else {
          const returnedJsx = await Component(props);
          return await renderJSXToClientJSX(returnedJsx);
        }
      } else {
        throw new Error("Not implemented.");
      }
    } else {
      // This is an arbitrary object (for example, props, or something inside of them).
      // Go over every value inside, and process it too in case there's some JSX in it.
      return Object.fromEntries(
        await Promise.all(
          Object.entries(jsx).map(async ([propName, value]) => [
            propName,
            await renderJSXToClientJSX(value),
          ])
        )
      );
    }
  } else throw new Error("Not implemented");
}
