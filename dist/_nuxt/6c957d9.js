(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{243:function(e,t,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(66).default)("3a566921",content,!0,{sourceMap:!1})},246:function(e,t,n){"use strict";n(243)},247:function(e,t,n){var r=n(65)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n.heading[data-v-2870aa7f]{\n  padding:0.75rem;\n  font-size:1.25rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n@media (min-width: 768px){\n.heading[data-v-2870aa7f]{\n    font-size:1.875rem;\n    line-height:2.25rem\n}\n}\n@media (min-width: 1024px){\n.heading[data-v-2870aa7f]{\n    font-weight:700\n}\n}\n.name[data-v-2870aa7f]{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  padding-left:0.25rem;\n  padding-right:0.25rem;\n  text-align:center;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.value[data-v-2870aa7f]{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  text-align:center;\n  font-size:1.125rem;\n  line-height:1.75rem;\n  font-weight:600\n}\n.price[data-v-2870aa7f]{\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n  text-align:center;\n  font-size:1rem;\n  line-height:1.5rem;\n  font-weight:500\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},254:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{allcoins:[]}},created:function(){var e=this;this.$store.dispatch("crypto/Gettopcrypto").then((function(t){e.allcoins=t}))}},o=(n(246),n(43)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-screen h-auto px-3 md:px-6"},[n("div",{staticClass:"rounded-3xl bg-primarybg p-2 pb-5"},[n("h1",{staticClass:"heading"},[e._v("Top 10 Cryptocurrencies")]),e._v(" "),n("div",{staticClass:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-3"},e._l(e.allcoins,(function(t){return n("div",{key:t.id},[n("div",{staticClass:"rounded-3xl bg-secbg h-auto w-44 space-y-2 py-2"},[n("img",{staticClass:"h-14 w-14 mx-auto",attrs:{src:t.image,alt:"icon"}}),e._v(" "),n("div",{staticClass:"block"},[n("div",{staticClass:"flex justify-evenly"},[n("h1",{staticClass:"name"},[e._v(e._s(t.name))]),e._v(" "),n("h1",{staticClass:"value",class:"-"===t.price_change_percentage_24h[0]?"text-red-700":"text-green-700"},[e._v("\n                "+e._s(t.price_change_percentage_24h)+"\n              ")])]),e._v(" "),n("h1",{staticClass:"price"},[e._v("₹ "+e._s(t.current_price))])])])])})),0)])])}),[],!1,null,"2870aa7f",null);t.default=component.exports}}]);