import c from "./button.js";
const e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KButton: c
}, Symbol.toStringTag, { value: "Module" })), r = function(t) {
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    o.install && t.use(o);
  }), t;
}, l = {
  install: r
};
export {
  c as KButton,
  l as default,
  r as install
};
