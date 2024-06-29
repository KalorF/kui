import { defineComponent as r, computed as u, createVNode as l, Fragment as c } from "vue";
import './assets/button.9znQ-0MQ.css';const _ = "k", o = (e) => {
  const n = e;
  return n.install = (a) => {
    a.component(n.name, e);
  }, e;
}, f = (e) => `${_}-${e}`, y = Array.isArray, k = (e) => typeof e == "string", m = (e) => e !== null && typeof e == "object";
function d(...e) {
  const n = [];
  for (let a = 0; a < e.length; a++) {
    const t = e[a];
    if (t) {
      if (k(t))
        n.push(t);
      else if (y(t))
        for (let s = 0; s < t.length; s++) {
          const b = d(t[s]);
          b && n.push(b);
        }
      else if (m(t))
        for (const s in t)
          t[s] && n.push(s);
    }
  }
  return n.join(" ");
}
const i = {
  "btn-base": "kui-btn-base",
  "btn-base_primary": "kui-btn-base_primary",
  "btn-base_primary_disabled": "kui-btn-base_primary_disabled",
  "btn-base_secondary": "kui-btn-base_secondary",
  "btn-base_secondary_disabled": "kui-btn-base_secondary_disabled",
  "btn-base_success": "kui-btn-base_success",
  "btn-base_success_disabled": "kui-btn-base_success_disabled",
  "btn-base_danger": "kui-btn-base_danger",
  "btn-base_danger_disabled": "kui-btn-base_danger_disabled",
  "btn-base_warning": "kui-btn-base_warning",
  "btn-base_warning_disabled": "kui-btn-base_warning_disabled",
  "btn-base_info": "kui-btn-base_info",
  "btn-base_info_disabled": "kui-btn-base_info_disabled",
  "btn-base_large": "kui-btn-base_large",
  "btn-base_small": "kui-btn-base_small",
  "btn-base_default": "kui-btn-base_default",
  "btn-base_tiny": "kui-btn-base_tiny"
}, g = {
  type: {
    type: String,
    default: "primary"
  },
  size: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  class: {
    type: String,
    default: ""
  },
  style: {
    type: Object,
    default: () => ({})
  }
}, p = /* @__PURE__ */ r({
  compatConfig: {
    MODE: 3
  },
  name: f("button"),
  props: {
    ...g
  },
  emits: ["click"],
  setup(e, {
    slots: n,
    emit: a
  }) {
    const t = u(() => {
      const s = e.size, b = e.type;
      return d({
        [i["btn-base"]]: !0,
        [i[`btn-base_${s}`]]: !0,
        [i[`btn-base_${b}`]]: !0,
        [i[`btn-base_${b}_disabled`]]: e.disabled
      }) + (e.class ? ` ${e.class}` : "");
    });
    return () => {
      var s;
      return l(c, null, [l("button", {
        style: e.style,
        onClick: () => a("click"),
        disabled: e.disabled,
        class: t.value
      }, [(s = n.default) == null ? void 0 : s.call(n)])]);
    };
  }
}), N = o(p);
export {
  N as default
};
