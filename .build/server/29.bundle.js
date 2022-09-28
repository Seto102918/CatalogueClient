"use strict";exports.id=29,exports.ids=[29],exports.modules={29:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var r=a(689),l=a(661),n=a(167),c=a.n(n),o=a(175);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,l,n=[],c=!0,o=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);c=!0);}catch(e){o=!0,l=e}finally{try{c||null==a.return||a.return()}finally{if(o)throw l}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var m=(0,r.lazy)((function(){return a.e(452).then(a.bind(a,452))})),d=(0,r.lazy)((function(){return a.e(330).then(a.bind(a,330))}));const u=function(){var e=(0,l.useNavigate)(),t=(0,l.useParams)(),a=s((0,r.useState)(t.kode),2),n=a[0],i=a[1],u=s((0,r.useState)({_id:"",kode:"...",warna:"...",harga:"...",favorit:!1,kategori:"",urlArray:[]}),2),p=u[0],g=u[1],h=s((0,r.useState)([]),2),f=h[0],w=h[1],b=s((0,r.useState)(new Array(4).fill({_id:"",kode:"...",warna:"...",harga:"...",favorit:!1,kategori:"",urlArray:[]})),2),y=b[0],v=b[1],x=s((0,r.useState)(!0),2),E=x[0],R=x[1];return(0,r.useEffect)((function(){console.log(n),document.body.style.cursor="wait";var t,a=c().CancelToken.source(),r=o.h+"api/v1/gown/kode/"+n;return c().get(r,{cancelToken:a.token}).then((function(e){g(e.data.gownFound[0]),v(e.data.recommended),w(e.data.gownFound[0].urlArray)})).catch((function(t){t.response&&500===t.response.status&&e("/404",{kode:n})})).finally((function(){t=setTimeout((function(){R(!1),document.body.style.cursor="default"}),1e3)})),function(){a.cancel(),clearTimeout(t),document.body.style.cursor="default"}}),[n]),React.createElement("div",{className:"Gown_Main"},React.createElement("header",{className:" position-relative shadow-sm px-3",style:{backgroundRepeat:"no-repeat",backgroundSize:"cover",background:"url('/content/gownorsuitheader.webp')"}},React.createElement("h2",{className:"display-2 text-white d-flex justify-content-center overflow-hidden position-relative align-items-center mb-0 text-center py-5 placeholder-glow",style:{textTransform:"uppercase",zIndex:"10"}},"Gowns / Suits"),React.createElement("div",{className:"bg-dark position-absolute top-0 start-0 end-0 bottom-0 bg-opacity-50 backdrop_blur",style:{zIndex:"0"}})),React.createElement("main",{className:"mt-4 row m-2 mx-sm-3 px-sm-3 mx-md-4 px-lg-4 mx-lg-5 px-lg-5 row-cols-1 row-cols-lg-2 mb-4 overflow-visible"},React.createElement("div",{className:"d-flex align-items-center p-1"},React.createElement(r.Suspense,{fallback:React.createElement("div",{className:"card bg-dark bg-opacity-25 container-fluid rounded position-relative","aria-hidden":"true",style:{aspectRatio:"1"}},React.createElement("div",{className:"loaderParent d-flex position-absolute top-50 start-50 translate-middle p-3"},React.createElement("div",{className:"loader"}),React.createElement("div",{className:"loader"}),React.createElement("div",{className:"loader"})))},React.createElement(d,{urlArrayId:f}))),React.createElement("div",{className:" mt-md-2 col mt-lg-0 row row-cols-1 row-cols-md-2 row-cols-lg-1 align-content-between m-0 p-0 px-2 ps-lg-4 overflow-visible"},React.createElement("div",{className:"col p-2 ps-0"},React.createElement("h1",{className:"display-3 m-0 placeholder-glow",style:{fontWeight:"400"}},E||"..."===(null==p?void 0:p.kode)?React.createElement("span",{className:"placeholder col-2"}):"".concat(p.kode)),React.createElement("h3",{className:"display-5 m-0 placeholder-glow",style:{fontWeight:"400"}},E||"..."===(null==p?void 0:p.harga)?React.createElement("span",{className:"placeholder col-10"}):React.createElement("span",null,"Rp ".concat(isNaN(p.harga)?"Error":p.harga.toLocaleString("id-ID",{minimumFractionDigits:0})))),React.createElement("hr",{className:"bg-dark rounded",style:{height:"5px"}}),React.createElement("h4",{className:"placeholder-glow ms-2"},E||"..."===(null==p?void 0:p.warna)?React.createElement("span",{className:"placeholder col-4"}):"Warna: ".concat(p.warna))),React.createElement("div",{className:"col bg-dark bg-opacity-25 rounded d-flex flex-column align-items-center justify-content-center py-lg-3 py-xl-5 overflow-visible p-4 boxshadow"},React.createElement("h5",{className:"text-center h4 text-white px-3 mb-2 mb-lg-4"},"To book(?) this gown, please",React.createElement("br",null),"contact us through..."),React.createElement("div",{className:"row row-cols-1 overflow-visible justify-content-center px-3"},React.createElement("a",{href:"https://linktr.ee/dsistaluxurybridal",target:"_blank",rel:"noreferrer",title:"Our WhatsApp",className:"col scaleOnHover row text-white btn btn-dark mt-2 mt-lg-0 m-lg-2 py-3 ",style:{transition:"0.2s"}},React.createElement("label",{className:"mb-1"},"WhatsApp"),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",fill:"white",className:"bi bi-whatsapp",viewBox:"0 0 16 16"},React.createElement("path",{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}))),React.createElement("a",{href:"https://instagram.com/dsistaluxury_bridal?igshid=YmMyMTA2M2Y=",target:"_blank",rel:"noreferrer",title:"Our Instagram",className:"col scaleOnHover row text-white btn btn-dark mt-2 mt-lg-0 m-lg-2 py-3",style:{transition:"0.2s"}},React.createElement("label",{className:"mb-1"},"Instagram"),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"52",height:"52",fill:"white",className:"bi bi-instagram",viewBox:"0 0 16 16"},React.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}))))))),React.createElement("section",{className:"mx-2 mx-sm-3 px-sm-3 mx-md-4 px-lg-4 mx-lg-5 px-lg-5 overflow-visible my-4"},React.createElement("h3",{className:"mx-2 p-1"},"What You Might Like..."),React.createElement(r.Suspense,{fallback:React.createElement("div",{className:"mx-2 bg-dark rounded bg-opacity-50 d-flex justify-content-center align-items-center",style:{heigth:"7rem"}},React.createElement("h1",{className:"text-white p-5"},"Loading..."))},y.length>0?React.createElement("div",{className:"row row-cols-2 row-cols-lg-4 overflow-visible mx-2"},y.map((function(e,a){return React.createElement(m,{gaun:e,key:a,params:t.id,setKode:i})}))):React.createElement("h5",{className:"bg-dark bg-opacity-25 rounded p-4 py-5 text-center text-white mx-2"},"Sorry... ",React.createElement("br",null),"No recommendation exists for this gown"))))}}};