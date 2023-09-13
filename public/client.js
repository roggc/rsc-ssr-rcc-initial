"use strict";

import m from "/react-dom.development.js";

var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
export const createRoot = function (c, o) {
  i.usingClientEntryPoint = true;
  try {
    return m.createRoot(c, o);
  } finally {
    i.usingClientEntryPoint = false;
  }
};
export const hydrateRoot = function (c, h, o) {
  i.usingClientEntryPoint = true;
  try {
    return m.hydrateRoot(c, h, o);
  } finally {
    i.usingClientEntryPoint = false;
  }
};
