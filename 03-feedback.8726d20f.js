function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,u,f,a,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(T,t),l?y(e):u}function S(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-c>=i}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-a);return d?v(n,i-(e-c)):n}(e))}function h(e){return f=void 0,p&&o?y(e):(o=r=void 0,u)}function w(){var e=g(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(d)return f=setTimeout(T,t),y(a)}return void 0===f&&(f=setTimeout(T,t)),u}return t=b(t)||0,m(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},w.flush=function(){return void 0===f?u:h(g())},w}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form input"),S=document.querySelector(".feedback-form textarea"),T={};!function(e){const t=JSON.parse(localStorage.getItem("feedback"));t&&(console.log(t),S.value=t.message,j.value=t.email)}(),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback")})),y.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,console.log(T);const t=JSON.stringify(T);console.log(t),localStorage.setItem("feedback",t)}),500));
//# sourceMappingURL=03-feedback.8726d20f.js.map
