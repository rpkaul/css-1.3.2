(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2923],{15677:function(e,n,t){Promise.resolve().then(t.bind(t,81943))},39957:function(e,n,t){"use strict";var a=t(10401),i=t(78441),r=t(30054),o=t(73727),l=t(8523),s=t(27094),u=t(82613);n.Z=e=>{let{open:n,children:t,action:c,handleClose:d,isLoading:m,actionText:p}=e;return(0,a.jsx)(i.R,{isOpen:n,onOpenChange:!m&&d||void 0,classNames:{backdrop:"z-[20000]",wrapper:"z-[20000]"},children:(0,a.jsx)(r.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.k,{className:"flex flex-col gap-1",children:"Confirmation"}),(0,a.jsx)(l.I,{children:t}),(0,a.jsxs)(s.R,{children:[(0,a.jsx)(u.A,{color:"primary",variant:"light",onPress:e,isLoading:m,children:"Cancel"}),(0,a.jsx)(u.A,{color:"primary",onPress:c,isLoading:m,children:p||"Confirm"})]})]})})})}},85126:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var a=t(10401),i=t(93754),r=t(32854),o=t(56696),l=t(68784),s=t(89478),u=(e,n)=>{(0,s.useEffect)(()=>{let t=t=>{let a=null==e?void 0:e.current;!a||(null==a?void 0:a.contains(t.target))||n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,n])},c=t(90296),d=e=>{let{open:n,x:t,y:d,handleCloseMenu:m,items:p}=e,f=(0,s.useRef)(null);u(f,m);let{admin:h}=(0,c.ZP)(),g=null==h?void 0:h.flags,x=p.map(e=>{let{category:n,items:t}=e;return{category:n,items:t.filter(e=>{let{flags:n}=e;return!n||n.some(e=>null==g?void 0:g.includes(e))})}});return n&&(0,a.jsx)(l.E.div,{className:"w-full max-w-[260px] border-small px-1 py-0.5 rounded-small bg-background/40 backdrop-blur-lg border-default-200 absolute z-[20000]",style:{left:t,top:d},ref:f,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.08},"aria-label":"Context menu",children:(0,a.jsx)(i.X,{variant:"flat","aria-label":"Listbox menu with sections",items:p,children:x.map(e=>{let{category:n,items:t}=e;return(0,a.jsx)(r.y,{title:n,"aria-label":n,children:t.map(e=>{let{key:n,description:t,icon:i,color:r,onClick:l}=e;return(0,a.jsx)(o.R,{description:(0,a.jsx)("span",{className:"text-foreground-700",children:t}),startContent:(0,a.jsx)(i,{"aria-label":n}),color:r||"default",onClick:()=>{l&&l(),m()},"aria-label":n,children:n},n)})},n)})})})}},75799:function(e,n,t){"use strict";var a=t(82187);n.Z=e=>a.Z.get(e).then(e=>e.data)},5942:function(e,n){"use strict";n.Z=e=>{let n=e?new Date(e):new Date;return n.toLocaleDateString()+" - "+n.toLocaleTimeString()}},90296:function(e,n,t){"use strict";t.d(n,{hY:function(){return l},jc:function(){return s}});var a=t(94711),i=t(27981),r=t(75799),o=t(82187);let l=async()=>{await (0,o.Z)("/api/auth/logout"),await (0,i.JG)("/api/auth"),a.Am.success("Logged out successfully")},s=()=>{let e=window.innerWidth/2-300,n=window.innerHeight/2-400,t=window.open("/api/auth/login/","","toolbar=no, location=no, directories=no, status=no, menubar=no, \n		  scrollbars=no, resizable=yes, copyhistory=no, width=".concat(600,", \n		  height=").concat(800,", top=").concat(n,", left=").concat(e)),r=setInterval(async()=>{t&&t.closed&&(await (0,i.JG)("/api/auth"),a.Am.success("Logged in successfully!"),clearInterval(r))},1e3)};n.ZP=()=>{let{data:e,isLoading:n,error:t}=(0,i.ZP)("/api/auth",r.Z);return e&&e.admin&&e.admin.group&&(e.admin.flags=e.admin.group.flags,e.admin.immunity=e.admin.group.immunity),{user:t||!e?null:e.user,admin:t||!e?null:e.admin,masterAdmin:!t&&!!e&&e.masterAdmin,isLoading:n}}},42594:function(e,n,t){"use strict";var a=t(89478);n.Z=()=>{let[e,n]=(0,a.useState)({open:!1,x:0,y:0,info:void 0});return{x:e.x,y:e.y,open:e.open,handleCloseMenu:()=>{n({...e,open:!1})},handleOpen:(e,t)=>{e.preventDefault();let{pageX:a,pageY:i}=e;n({open:!0,x:a,y:i,info:t})},info:e.info}}}},function(e){e.O(0,[3660,9548,4711,2613,9242,9807,2781,4529,1342,1273,7060,4015,1163,3870,8364,997,5899,8485,2845,8598,3328,1943,4370,3843,1744],function(){return e(e.s=15677)}),_N_E=e.O()}]);