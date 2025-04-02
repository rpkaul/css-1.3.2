"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1568],{41568:function(e,t,n){n.d(t,{Vv:function(){return I},ch:function(){return b}});var r,o,a,i,c,s,u=n(89478);(r=i||(i={})).INITIAL="initial",r.PENDING="pending",r.REJECTED="rejected",r.RESOLVED="resolved",(o=c||(c={})).LOADING_STATUS="setLoadingStatus",o.RESET_OPTIONS="resetOptions",o.SET_BRAINTREE_INSTANCE="braintreeInstance",(a=s||(s={})).NUMBER="number",a.CVV="cvv",a.EXPIRATION_DATE="expirationDate",a.EXPIRATION_MONTH="expirationMonth",a.EXPIRATION_YEAR="expirationYear",a.POSTAL_CODE="postalCode";var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function f(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var p="data-react-paypal-script-id",E={DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource"},v="paypal";function m(e){return void 0===e&&(e=v),window[e]}function h(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,i=n.charAt(0).toUpperCase().concat(n.substring(1)),c="Unable to render <".concat(t," /> because window.").concat(void 0===a?v:a,".").concat(i," is undefined."),s="string"==typeof o?o:o.join(",");if(!s.includes(n)){var u=[s,n].filter(Boolean).join();c+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(u,"'}}>`.")}return c}function A(e){e[p];var t=d(e,[p+""]);return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(t)))}function y(e,t){var n,r,o,a;switch(t.type){case c.LOADING_STATUS:if("object"==typeof t.value)return l(l({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message});return l(l({},e),{loadingStatus:t.value});case c.RESET_OPTIONS:return o=e.options[p],(null==(a=self.document.querySelector("script[".concat(p,'="').concat(o,'"]')))?void 0:a.parentNode)&&a.parentNode.removeChild(a),l(l({},e),{loadingStatus:i.PENDING,options:l(l(((n={})[E.DATA_SDK_INTEGRATION_SOURCE]=E.DATA_LIBRARY_VALUE,n),t.value),((r={})[p]="".concat(A(t.value)),r))});case c.SET_BRAINTREE_INSTANCE:return l(l({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var S=(0,u.createContext)(null);function N(){var e=function(e){if("function"==typeof(null==e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}((0,u.useContext)(S));return[l(l({},e),{isInitial:e.loadingStatus===i.INITIAL,isPending:e.loadingStatus===i.PENDING,isResolved:e.loadingStatus===i.RESOLVED,isRejected:e.loadingStatus===i.REJECTED}),e.dispatch]}(0,u.createContext)({});var b=function(e){var t,n=e.className,r=e.disabled,o=void 0!==r&&r,a=e.children,i=e.forceReRender,c=d(e,["className","disabled","children","forceReRender"]),s="".concat(void 0===n?"":n," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,u.useRef)(null),v=(0,u.useRef)(null),A=N()[0],y=A.isResolved,S=A.options,P=(0,u.useState)(null),g=P[0],T=P[1],R=(0,u.useState)(!0),I=R[0],C=R[1],_=(0,u.useState)(null)[1];function D(){null!==v.current&&v.current.close().catch(function(){})}return(null===(t=v.current)||void 0===t?void 0:t.updateProps)&&v.current.updateProps({message:c.message}),(0,u.useEffect)(function(){if(!1===y)return D;var e=m(S.dataNamespace);if(void 0===e||void 0===e.Buttons)return _(function(){throw Error(h({reactComponentName:b.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:S.components,sdkDataNamespace:S[E.DATA_NAMESPACE]}))}),D;try{v.current=e.Buttons(l(l({},c),{onInit:function(e,t){T(t),"function"==typeof c.onInit&&c.onInit(e,t)}}))}catch(e){return _(function(){throw Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(e))})}return!1===v.current.isEligible()?C(!1):p.current&&v.current.render(p.current).catch(function(e){null!==p.current&&0!==p.current.children.length&&_(function(){throw Error("Failed to render <PayPalButtons /> component. ".concat(e))})}),D},f(f([y],void 0===i?[]:i,!0),[c.fundingSource],!1)),(0,u.useEffect)(function(){null!==g&&(!0===o?g.disable().catch(function(){}):g.enable().catch(function(){}))},[o,g]),u.createElement(u.Fragment,null,I?u.createElement("div",{ref:p,style:o?{opacity:.38}:{},className:s}):a)};function P(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach(function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])}),n}function g(e,t){if("object"!=typeof e||null===e)throw Error("Expected an options object.");var n=e.environment;if(n&&"production"!==n&&"sandbox"!==n)throw Error('The `environment` option must be either "production" or "sandbox".');if(void 0!==t&&"function"!=typeof t)throw Error("Expected PromisePonyfill to be a function.")}b.displayName="PayPalButtons";var T=function(e){var t=e.className,n=e.children,r=d(e,["className","children"]),o=N()[0],a=o.isResolved,i=o.options,c=(0,u.useRef)(null),s=(0,u.useState)(!0),f=s[0],p=s[1],v=(0,u.useState)(null)[1],A=function(e){var t=c.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch(function(e){null!==t&&0!==t.children.length&&v(function(){throw Error("Failed to render <PayPalMarks /> component. ".concat(e))})})};return(0,u.useEffect)(function(){if(!1!==a){var e=m(i[E.DATA_NAMESPACE]);if(void 0===e||void 0===e.Marks)return v(function(){throw Error(h({reactComponentName:T.displayName,sdkComponentKey:"marks",sdkRequestedComponents:i.components,sdkDataNamespace:i[E.DATA_NAMESPACE]}))});A(e.Marks(l({},r)))}},[a,r.fundingSource]),u.createElement(u.Fragment,null,f?u.createElement("div",{ref:c,className:void 0===t?"":t}):n)};T.displayName="PayPalMarks";var R=function(e){var t=e.className,n=e.forceReRender,r=d(e,["className","forceReRender"]),o=N()[0],a=o.isResolved,i=o.options,c=(0,u.useRef)(null),s=(0,u.useRef)(null),p=(0,u.useState)(null)[1];return(0,u.useEffect)(function(){if(!1!==a){var e=m(i[E.DATA_NAMESPACE]);if(void 0===e||void 0===e.Messages)return p(function(){throw Error(h({reactComponentName:R.displayName,sdkComponentKey:"messages",sdkRequestedComponents:i.components,sdkDataNamespace:i[E.DATA_NAMESPACE]}))});s.current=e.Messages(l({},r)),s.current.render(c.current).catch(function(e){null!==c.current&&0!==c.current.children.length&&p(function(){throw Error("Failed to render <PayPalMessages /> component. ".concat(e))})})}},f([a],void 0===n?[]:n,!0)),u.createElement("div",{ref:c,className:void 0===t?"":t})};R.displayName="PayPalMessages";var I=function(e){var t,n=e.options,r=void 0===n?{clientId:"test"}:n,o=e.children,a=e.deferLoading,s=void 0!==a&&a,d=(0,u.useReducer)(y,{options:l(l({},r),((t={})[E.DATA_JS_SDK_LIBRARY]=E.DATA_LIBRARY_VALUE,t[E.DATA_SDK_INTEGRATION_SOURCE]=E.DATA_LIBRARY_VALUE,t[p]="".concat(A(r)),t)),loadingStatus:s?i.INITIAL:i.PENDING}),f=d[0],v=d[1];return(0,u.useEffect)(function(){if(!1===s&&f.loadingStatus===i.INITIAL)return v({type:c.LOADING_STATUS,value:i.PENDING});if(f.loadingStatus===i.PENDING){var e=!0;return(function(e,t){if(void 0===t&&(t=Promise),g(e,t),"undefined"==typeof document)return t.resolve(null);var n,r,o,a,i,c=(r="sandbox"===e.environment?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js",delete e.environment,e.sdkBaseUrl&&(r=e.sdkBaseUrl,delete e.sdkBaseUrl),a=(o=Object.keys(e).filter(function(t){return void 0!==e[t]&&null!==e[t]&&""!==e[t]}).reduce(function(t,n){var r=e[n].toString();return"data"===(n=n.replace(/[A-Z]+(?![a-z])|[A-Z]/g,function(e,t){return(t?"-":"")+e.toLowerCase()})).substring(0,4)||"crossorigin"===n?t.attributes[n]=r:t.queryParams[n]=r,t},{queryParams:{},attributes:{}})).queryParams,i=o.attributes,a["merchant-id"]&&-1!==a["merchant-id"].indexOf(",")&&(i["data-merchant-id"]=a["merchant-id"],a["merchant-id"]="*"),{url:"".concat(r,"?").concat((n="",Object.keys(a).forEach(function(e){0!==n.length&&(n+="&"),n+=e+"="+a[e]}),n)),attributes:i}),s=c.url,u=c.attributes,l=u["data-namespace"]||"paypal",d=window[l];return(u["data-js-sdk-library"]||(u["data-js-sdk-library"]="paypal-js"),function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=P(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach(function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)}),a?n:null}(s,u)&&d)?t.resolve(d):(function(e,t){void 0===t&&(t=Promise),g(e,t);var n=e.url,r=e.attributes;if("string"!=typeof n||0===n.length)throw Error("Invalid url.");if(void 0!==r&&"object"!=typeof r)throw Error("Expected attributes to be an object.");return new t(function(e,t){var o,a,i,c,s,u;if("undefined"==typeof document)return e();a=(o={url:n,attributes:r,onSuccess:function(){return e()},onError:function(){return t(Error('The script "'.concat(n,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.')))}}).url,i=o.attributes,c=o.onSuccess,s=o.onError,(u=P(a,i)).onerror=s,u.onload=c,document.head.insertBefore(u,document.head.firstElementChild)})})({url:s,attributes:u},t).then(function(){var e=window[l];if(e)return e;throw Error("The window.".concat(l," global variable is not available."))})})(f.options).then(function(){e&&v({type:c.LOADING_STATUS,value:i.RESOLVED})}).catch(function(t){console.error("".concat("Failed to load the PayPal JS SDK script."," ").concat(t)),e&&v({type:c.LOADING_STATUS,value:{state:i.REJECTED,message:String(t)}})}),function(){e=!1}}},[f.options,s,f.loadingStatus]),u.createElement(S.Provider,{value:l(l({},f),{dispatch:v})},o)};function C(){}(0,u.createContext)({cardFieldsForm:null,fields:{},registerField:C,unregisterField:C})}}]);