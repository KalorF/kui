import { defineComponent as r, computed as u, createVNode as l, Fragment as c } from "vue";
const _ = "k", o = (e) => {
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
  N as KButton
};

        (function() {
          try {
              var elementStyle = document.createElement('style');
              elementStyle.innerText = ".kui-btn-base{background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px;outline:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.kui-btn-base:hover{opacity:.8}.kui-btn-base_primary{background-color:#007bff;border-color:#007bff;color:#fff}.kui-btn-base_primary_disabled{background-color:#007bff;border-color:#007bff;color:#fff;cursor:not-allowed}.kui-btn-base_secondary{background-color:#6c757d;border-color:#6c757d;color:#fff}.kui-btn-base_secondary_disabled{background-color:#6c757d;border-color:#6c757d;color:#fff;cursor:not-allowed}.kui-btn-base_success{background-color:#28a745;border-color:#28a745;color:#fff}.kui-btn-base_success_disabled{background-color:#28a745;border-color:#28a745;color:#fff;cursor:not-allowed}.kui-btn-base_danger{background-color:#dc3545;border-color:#dc3545;color:#fff}.kui-btn-base_danger_disabled{background-color:#dc3545;border-color:#dc3545;color:#fff;cursor:not-allowed}.kui-btn-base_warning{background-color:#ffc107;border-color:#ffc107;color:#fff}.kui-btn-base_warning_disabled{background-color:#ffc107;border-color:#ffc107;color:#fff;cursor:not-allowed}.kui-btn-base_info{background-color:#17a2b8;border-color:#17a2b8;color:#fff}.kui-btn-base_info_disabled{background-color:#17a2b8;border-color:#17a2b8;color:#fff;cursor:not-allowed}.kui-btn-base_large{height:40px;padding:0 20px}.kui-btn-base_small{height:30px;padding:0 15px}.kui-btn-base_default{height:35px;padding:0 17px}.kui-btn-base_tiny{height:25px;padding:0 10px}\n"
              document.head.appendChild(elementStyle)
          } catch(error) {
            console.error(error, 'unable to concat style inside the bundled file')
          }
        })()