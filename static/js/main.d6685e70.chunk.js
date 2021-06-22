(this["webpackJsonpreact-weater-forecast"]=this["webpackJsonpreact-weater-forecast"]||[]).push([[0],{217:function(e,n,t){},236:function(e,n,t){"use strict";t.r(n);var r,a=t(0),c=t(39),i=t.n(c),o=t(8),l=t(6),d=t(4),u=t(3),s=t(1),p=u.default.div(r||(r=Object(d.a)(["\n  display: flex;\n  flex-direction: ",";\n  align-items: ",";\n  justify-content: ",";\n  margin: 0px;\n"])),(function(e){return e.direction||"row"}),(function(e){return e.align||"stretch"}),(function(e){return e.justify||"stretch"}));var b,j,x,f,h,O,g,m,v,y,w,k,E,S,C=function(e){return Object(s.jsx)(p,Object(l.a)({},e))},R=t(41),T=function(e){return Object(s.jsxs)(R.a,Object(l.a)(Object(l.a)({speed:2,width:270,height:187,viewBox:"0 0 270 187",backgroundColor:"rgba(255, 255, 255, 0.2)",foregroundColor:"rgba(255, 255, 255, 0.4)"},e),{},{children:[Object(s.jsx)("rect",{x:"35",y:"2",rx:"10",ry:"10",width:"110",height:"20"}),Object(s.jsx)("rect",{x:"155",y:"2",rx:"10",ry:"10",width:"60",height:"20"}),Object(s.jsx)("rect",{x:"10",y:"40",rx:"10",ry:"10",width:"250",height:"70"}),Object(s.jsx)("rect",{x:"85",y:"122",rx:"10",ry:"10",width:"100",height:"18"}),Object(s.jsx)("rect",{x:"10",y:"148",rx:"10",ry:"10",width:"250",height:"25"})]}))},D=u.default.div(b||(b=Object(d.a)(["\n  text-align: center;\n  max-width: 300px;\n  margin: 0px auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  @media (max-width: 768px) {\n    margin-top: 15px;\n  }\n"]))),_=u.default.p(j||(j=Object(d.a)(["\n  font-size: 20px;\n"]))),W=u.default.p(x||(x=Object(d.a)(["\n  font-size: 72px;\n  font-weight: 200;\n"]))),z=u.default.img(f||(f=Object(d.a)(["\n  object-fit: cover;\n  object-position: center;\n  width: 120px;\n  margin: -10px;\n"]))),L=u.default.p(h||(h=Object(d.a)(["\n  font-size: 20px;\n  margin-bottom: 15px;\n"]))),H=u.default.div(O||(O=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  & span {\n    margin-right: 7px;\n  }\n  & span:last-child {\n    margin-right: 0px;\n  }\n"]))),A=u.default.div(g||(g=Object(d.a)(["\n  flex: 1 1 33%;\n  background: url(",") center left no-repeat;\n  background-size: 25px;\n  padding-left: 20px;\n"])),(function(e){return e.icon})),M=u.default.div(m||(m=Object(d.a)(["\n  flex: 1 1 33%;\n  background: url(",") center left no-repeat;\n  background-size: 25px;\n  padding-left: 20px;\n"])),(function(e){return e.icon})),U=u.default.div(v||(v=Object(d.a)(["\n  flex: 1 1 33%;\n  background: url(",") center left no-repeat;\n  background-size: 25px;\n  padding-left: 20px;\n"])),(function(e){return e.icon})),G=t.p+"static/media/thermometer.922bfccc.svg",F=t.p+"static/media/wind.7e665b0a.svg",Y=t.p+"static/media/witness.b6c0cb3a.svg",B=function(){var e=Object(o.d)((function(e){return e.currentWeather})),n=e.country,t=e.city,r=e.description,a=e.feelsLike,c=e.icon,i=e.temperature,l=e.visibility,d=e.wind,u=e.isLoaded;return Object(s.jsx)(D,{children:u?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(_,{children:[t,", ",n]}),Object(s.jsxs)(C,{align:"center",justify:"space-around",children:[Object(s.jsx)(z,{src:"http://openweathermap.org/img/wn/".concat(c,"@4x.png"),alt:"weather icon"}),Object(s.jsxs)(W,{children:[Math.round(i),"\xb0"]})]}),Object(s.jsx)(L,{children:r}),Object(s.jsxs)(H,{children:[Object(s.jsxs)(A,{icon:G,children:[Object(s.jsx)("div",{children:"Feels like"})," ",Object(s.jsxs)("div",{children:[Math.round(a),"\xb0"]})]}),Object(s.jsxs)(M,{icon:F,children:[Object(s.jsx)("div",{children:"Wind"})," ",Math.round(d)," km\\h"]}),Object(s.jsxs)(U,{icon:Y,children:[Object(s.jsx)("div",{children:"Visibility"})," ",l/1e3," km"]})]})]}):Object(s.jsx)(T,{})})},I="GET_DAILY_WEATHER",N=" GET_DAILY_WEATHER_SUCCESS",V=" GET_DAILY_WEATHER_ERROR",P="SET_ACTIVE_DAY",q="SET_COORDS_BY_SEARCH",J=function(e){return{type:I,payload:e}},K=function(e){return{type:N,payload:e}},Q=function(e){return{type:V,payload:e}},X=function(e){return{type:q,payload:e}},Z=u.default.div(y||(y=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 15px 10px 10px;\n  min-width: 95px;\n  width: 120px;\n  cursor: pointer;\n  border-radius: 10px;\n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  &.active {\n    background-color: rgba(255, 255, 255, 0.3);\n    position: relative;\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -20px;\n      left: calc(50% - 13px);\n      border: 13px solid transparent;\n      border-top: 7px solid rgba(255, 255, 255, 0.3);\n    }\n  }\n  transition: 0.1s backround-color all;\n\n  margin: 0px;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\n  @media (max-width: 768px) {\n    width: 80px;\n    padding: 5px;\n  }\n"]))),$=u.default.p(w||(w=Object(d.a)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n"]))),ee=u.default.img(k||(k=Object(d.a)(["\n  object-fit: cover;\n  object-position: center;\n  width: 70px;\n  height: 70px;\n  margin: -10px 0px -10px -15px;\n"]))),ne=u.default.p(E||(E=Object(d.a)(["\n  font-size: 24px;\n  margin-top: 10px;\n  & span {\n    font-size: 14px;\n    color: rgba(255, 255, 255, 0.5);\n  }\n  margin-bottom: 10px;\n"]))),te=u.default.p(S||(S=Object(d.a)(["\n  text-align: center;\n"])));var re,ae,ce,ie,oe,le,de,ue,se,pe,be,je,xe,fe,he,Oe,ge,me,ve,ye,we,ke,Ee,Se,Ce,Re,Te,De,_e,We,ze,Le,He=function(e){var n=e.active,t=e.date,r=e.icon,a=e.maxTemp,c=e.minTemp,i=e.description,o=e.onDayClick;return Object(s.jsxs)(Z,{className:n?"active":"",onClick:function(){return o()},children:[Object(s.jsxs)($,{children:[t[0]," ",t[2]]}),Object(s.jsx)(ee,{src:r}),Object(s.jsxs)(ne,{children:[a,"\xb0 ",Object(s.jsxs)("span",{children:[" ",c,"\xb0"]})]}),Object(s.jsx)(te,{children:i})]})},Ae=function(e){return Object(s.jsxs)(R.a,Object(l.a)(Object(l.a)({speed:2,width:145,height:175,viewBox:"0 0 145 175",backgroundColor:"rgba(255, 255, 255, 0.2)",foregroundColor:"rgba(255, 255, 255, 0.4)",style:{flex:"0 0 135px"}},e),{},{children:[Object(s.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"100",height:"20"}),Object(s.jsx)("rect",{x:"0",y:"30",rx:"10",ry:"10",width:"120",height:"110"}),Object(s.jsx)("rect",{x:"0",y:"150",rx:"10",ry:"10",width:"120",height:"20"})]}))},Me=u.default.div(re||(re=Object(d.a)(["\n  max-width: 1000px;\n  overflow-y: hidden;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  margin: 0px auto;\n"]))),Ue=u.default.h2(ae||(ae=Object(d.a)(["\n  font-size: 18px;\n"]))),Ge=u.default.div(ce||(ce=Object(d.a)(["\n  overflow-y: hidden;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  padding: 2px 2px 10px 0px;\n"]))),Fe=Object(a.memo)((function(){var e=Object(o.c)(),n=function(n){return function(t){return e((r=new Date(1e3*n.dt).toDateString(),{type:P,payload:r}));var r}},t=Object(o.d)((function(e){return e.dailyWeather.days})),r=Object(o.d)((function(e){return e.dailyWeather.activeDay.date})),c=Object(o.d)((function(e){return e.dailyWeather.isLoaded})),i=Object(o.d)((function(e){return e.dailyWeather.coords.lat})),l=Object(o.d)((function(e){return e.dailyWeather.coords.lon}));return Object(a.useEffect)((function(){i&&null!==i&&l&&null!==l&&e(J({latBySearch:i,lonBySearch:l}))}),[e,i,l]),Object(s.jsxs)(Me,{children:[Object(s.jsx)(Ue,{children:"Daily"}),Object(s.jsx)(Ge,{children:Object(s.jsx)(C,{justify:"space-between",children:c?null===t||void 0===t?void 0:t.slice(0,5).map((function(e){var t=r===new Date(1e3*e.dt).toDateString();return Object(s.jsx)(He,{onDayClick:n(e),active:t,date:new Date(1e3*e.dt).toDateString().split(" "),icon:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),maxTemp:Math.ceil(e.temp.max),minTemp:Math.floor(e.temp.min),description:e.weather[0].description},e.dt)})):Array(5).fill(Object(s.jsx)(Ae,{}))})})]})})),Ye=t(25),Be=t(27),Ie=u.default.div(ie||(ie=Object(d.a)(["\n  margin-bottom: 25px;\n  overflow: hidden;\n"]))),Ne=u.default.h2(oe||(oe=Object(d.a)(["\n  margin-bottom: 25px;\n"]))),Ve=u.default.button(le||(le=Object(d.a)(["\n  border: none;\n  background-color: ",";\n  padding: 5px;\n  height: 35px;\n  width: 100px;\n  border-radius: 10px;\n  font-size: 12px;\n  &:hover {\n    font-weight: 600;\n  }\n  cursor: pointer;\n  margin-right: 15px;\n  font-weight: ",";\n  color: #ffffff;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  outline: none;\n  text-transform: uppercase;\n  transition: 0.1s background-color all;\n"])),(function(e){return e.active?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.2)"}),(function(e){return e.active?600:500})),Pe=u.default.div(de||(de=Object(d.a)(["\n  overflow-y: hidden;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),qe=u.default.div(ue||(ue=Object(d.a)(["\n  display: flex;\n  justify-content: ",";\n"])),(function(e){var n=e.isLoaded,t=e.justify;return n?t:"center"})),Je=u.default.p(se||(se=Object(d.a)(["\n  font-size: 18px;\n  margin: 20px 0px;\n"]))),Ke=u.default.div(pe||(pe=Object(d.a)(["\n  min-height: 212px;\n"]))),Qe=Object(a.memo)((function(e){Be.b.color="rgba(255, 255, 255, 0.8)",Be.b.font.family="'Montserrat', 'sans-serif'",Be.b.font.weight=500;var n={labels:e.data.map((function(e){return"00"===e.time?"12 am":e.time<12?e.time+" am":e.time+" pm"})),scaleFontColor:"#ffffff",datasets:[{label:"temperature",data:e.data.map((function(e){return e.temperature})),fill:!0,backgroundColor:"rgba(255, 255, 255, 0.2)",borderColor:"rgba(255, 255, 255, 0.5)"}]};return Object(s.jsx)(Ke,{children:Object(s.jsx)(Be.a,{data:n,options:{defaultFontColor:"#FFFFFF",maintainAspectRatio:!1},width:1200,height:212})})})),Xe=function(e){return new Date(1e3*e).toTimeString().substring(0,5)},Ze=u.default.div(be||(be=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 10px 10px 5px;\n  min-width: 80px;\n  flex: 0 1 110px;\n  opacity: 0.3;\n  position: relative;\n  animation: 0.5s slidein forwards;\n  background-color: rgba(255, 255, 255, 0.07);\n  border-radius: 12px;\n  margin-right: 25px;\n\n  &:last-child{\n    margin-right: 0px;\n  }\n\n  @keyframes slidein {\n    100% {\n      opacity: 1;\n    }\n  }\n"]))),$e=u.default.img(je||(je=Object(d.a)(["\n  object-fit: cover;\n  object-position: center;\n  width: 70px;\n  height: 70px;\n  margin: -15px 0px -12px 0px;\n"]))),en=u.default.p(xe||(xe=Object(d.a)(["\n  font-size: 20px;\n  margin-bottom: 7px;\n"]))),nn=u.default.p(fe||(fe=Object(d.a)(["\n  font-size: 14px;\n  margin-bottom: 10px;\n  min-height: 33px;\n  height: 45px;\n  max-width: 60px;\n  text-align: center;\n"]))),tn=u.default.p(he||(he=Object(d.a)(["\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 5px;\n  background: url(",") left/cover no-repeat;\n  background-size: 16px;\n  padding-left: 22px;\n"])),(function(e){return e.icon})),rn=u.default.p(Oe||(Oe=Object(d.a)(["\n  color: rgba(255, 255, 255, 0.7);\n  margin-bottom: 8px;\n  background: url(",") left/cover no-repeat;\n  background-size: 18px;\n  padding-left: 22px;\n"])),(function(e){return e.icon})),an=u.default.p(ge||(ge=Object(d.a)(["\n  font-size: 14px;\n  font-weight: 500;\n"]))),cn=t.p+"static/media/humidity.5d5fdecd.svg",on=function(e){var n=e.icon,t=e.temperature,r=e.description,a=e.precipitation,c=e.wind,i=e.time;return Object(s.jsxs)(Ze,{children:[Object(s.jsx)($e,{src:n}),Object(s.jsxs)(en,{children:[t,"\xb0"]}),Object(s.jsx)(nn,{children:r}),Object(s.jsx)(tn,{icon:cn,children:"".concat(a,"%")}),Object(s.jsx)(rn,{icon:F,children:"".concat(c," km/h")}),Object(s.jsxs)(an,{children:["00"===i?"12":i,i<12?" am":" pm"]})]})},ln=u.default.div(me||(me=Object(d.a)(["\n  min-height: 212px;\n"]))),dn=u.default.p(ve||(ve=Object(d.a)(["\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 3px;\n"]))),un=u.default.div(ye||(ye=Object(d.a)(["\n  padding-top: 5px;\n  margin-right: 25px;\n  font-size: 24px;\n  line-height: 30px;\n  min-width: 130px;\n\n  @media (max-width: 768px) {\n    font-size: 17px;\n    display: block;\n    margin-right: 10px;\n  }\n"]))),sn=u.default.div(we||(we=Object(d.a)(["\n  padding-top: 5px;\n  font-size: 24px;\n  line-height: 30px;\n  min-width: 130px;\n\n  @media (max-width: 768px) {\n    font-size: 17px;\n    display: block;\n  }\n"]))),pn=u.default.div(ke||(ke=Object(d.a)(["\n  padding-left: 43px;\n  background: ",";\n  background-size: 32px;\n"])),(function(e){var n=e.backgroundUrl;return n&&"url(".concat(n,") left/cover no-repeat")})),bn=Object(u.default)(pn)(Ee||(Ee=Object(d.a)(["\n  margin: 5px 20px 15px 0px;\n"]))),jn=Object(u.default)(pn)(Se||(Se=Object(d.a)(["\n  margin: 5px 0px 15px 0px;\n"]))),xn=Object(u.default)(pn)(Ce||(Ce=Object(d.a)(["\n  margin: 5px 20px 15px 0px;\n"]))),fn=Object(u.default)(pn)(Re||(Re=Object(d.a)(["\n  margin: 5px 0px 15px 0px;\n"]))),hn=Object(a.memo)((function(){var e,n,t,r,a=Object(o.d)((function(e){return e.dailyWeather.activeDay.date})),c=Object(o.d)((function(e){return e.dailyWeather.days})).filter((function(e){return new Date(1e3*e.dt).toDateString()===a})),i=Xe(null===(e=c[0])||void 0===e?void 0:e.sunset),l=Xe(null===(n=c[0])||void 0===n?void 0:n.sunrise),d=Xe(null===(t=c[0])||void 0===t?void 0:t.moonset),u=Xe(null===(r=c[0])||void 0===r?void 0:r.moonrise);return Object(s.jsx)(ln,{children:Object(s.jsxs)(C,{children:[Object(s.jsxs)(un,{children:[Object(s.jsx)(dn,{children:"Sunrise"}),Object(s.jsxs)(bn,{backgroundUrl:"https://image.flaticon.com/icons/png/512/728/728123.png",children:[l," AM"]}),Object(s.jsx)(dn,{children:"Sunset"}),Object(s.jsxs)(jn,{backgroundUrl:"https://image.flaticon.com/icons/png/512/728/728124.png",children:[i," PM"]})]}),Object(s.jsxs)(sn,{children:[Object(s.jsx)(dn,{children:"Moonrise"}),Object(s.jsxs)(xn,{backgroundUrl:"https://image.flaticon.com/icons/png/512/728/728098.png",children:[u," PM"]}),Object(s.jsx)(dn,{children:"Moonset"}),Object(s.jsxs)(fn,{backgroundUrl:"https://image.flaticon.com/icons/png/512/728/728099.png",children:[d," AM"]})]})]})})})),On=(t(217),function(){return Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"lds-roller",children:[Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{}),Object(s.jsx)("div",{})]})})}),gn=Object(a.memo)((function(){var e=Object(o.d)((function(e){return e.dailyWeather.activeDay.date})),n=Object(o.d)((function(e){return e.hourlyWeather.isLoaded})),t=Object(o.d)((function(e){return e.hourlyWeather.hours})).filter((function(n){return new Date(1e3*n.dt).toDateString()===e})),r=Object(a.useState)("Hourly"),c=Object(Ye.a)(r,2),i=c[0],l=c[1];return Object(s.jsxs)(Ie,{children:[Object(s.jsx)(Ne,{children:Object(s.jsxs)(C,{children:[Object(s.jsx)(Ve,{active:"Hourly"===i,onClick:function(){return l("Hourly")},children:"Hourly"}),Object(s.jsx)(Ve,{active:"Summary"===i,onClick:function(){return l("Summary")},children:"Summary"}),Object(s.jsx)(Ve,{active:"Details"===i,onClick:function(){return l("Details")},children:"Details"})]})}),Object(s.jsx)(Pe,{children:n?t.length>0?"Hourly"===i?Object(s.jsx)(qe,{isLoaded:n,justify:t.length<6?"start":"space-between",children:t.map((function(e){return Object(s.jsx)(on,{icon:"http://openweathermap.org/img/wn/".concat(e.weather[0].icon,"@2x.png"),temperature:Math.round(e.main.temp),description:e.weather[0].description,precipitation:e.main.humidity,wind:Math.round(e.wind.speed),time:Xe(e.dt).substring(0,2)},e.dt)}))}):"Summary"===i?Object(s.jsx)(Qe,{data:t.map((function(e){return{time:Xe(e.dt).substring(0,2),temperature:e.main.temp}}))}):Object(s.jsx)(hn,{}):Object(s.jsx)(Je,{children:"Sorry, no weather for the next 3 hours"}):Object(s.jsx)(On,{})})]})})),mn="GET_CURRENT_WEATHER",vn="GET_CURRENT_WEATHER_SUCCESS",yn="GET_CURRENT_WEATHER_ERROR",wn=function(e){return{type:mn,payload:e}},kn=function(e){return{type:vn,payload:e}},En=u.default.input(Te||(Te=Object(d.a)(["\n  min-width: 250px;\n  max-width: 400px;\n  height: 25px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border: none;\n  outline: none;\n  color: #fff;\n  font-weigth: 500;\n  padding: 3px 10px;\n  background: url(",") calc(100% - 15px) center no-repeat;\n  background-size: 17px;\n  border: 2px solid rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.5);\n  }\n"])),(function(e){return e.icon})),Sn=u.default.div(De||(De=Object(d.a)(["\n  text-align: center;\n"]))),Cn=u.default.p(_e||(_e=Object(d.a)(["\n  font-size: 10px;\n  color: #ec6e4c;\n  margin-top: 4px;\n  margin-bottom: -15px;\n"]))),Rn=t.p+"static/media/search.d80850ce.svg",Tn="SET_SEARCH_CITY",Dn=function(){var e=Object(a.useRef)(),n=Object(a.useState)(""),t=Object(Ye.a)(n,2),r=t[0],c=t[1],i=Object(o.c)(),l=function(e){var n;e.preventDefault(),c(""),i((n=r.trim(),{type:Tn,payload:n}))},d=Object(o.d)((function(e){return e.currentWeather.error}));return Object(s.jsxs)(Sn,{children:[Object(s.jsx)("form",{onSubmit:function(e){l(e)},children:Object(s.jsx)(En,{ref:e,icon:Rn,type:"text",onChange:function(){c(e.current.value)},value:r,placeholder:"Search for location"})}),d?Object(s.jsx)(Cn,{children:"no results found"}):""]})},_n=t.p+"static/media/background.faf3718a.jpg",Wn=u.default.div(We||(We=Object(d.a)(["\n  min-height: 100vh;\n  overflow: hidden;\n  background: url(",") top/cover no-repeat;\n  padding: 0px 15px;\n"])),_n),zn=u.default.div(ze||(ze=Object(d.a)(["\n  margin: 0 auto;\n  max-width: 1200px;\n"]))),Ln="GET_HOURLY_WEATHER",Hn="GET_HOURLY_WEATHER_SUCCESS",An="GET_HOURLY_WEATHER_ERROR",Mn=function(e){return{type:Ln,payload:e}},Un=function(e){return{type:Hn,payload:e}},Gn=function(e){return{type:An,payload:e}},Fn="GET_POSITION",Yn=function(e){return{type:Fn,payload:e}},Bn=Object(a.memo)((function(){var e=Object(o.c)(),n=Object(o.d)((function(e){return e.position}),o.b),t=n.lat,r=n.lon,c=Object(o.d)((function(e){return e.search.searchCity}));return Object(a.useEffect)((function(){e((function(e){navigator.geolocation.getCurrentPosition((function(n){return e(Yn({lat:n.coords.latitude,lon:n.coords.longitude}))}),(function(){e(Yn({lat:55.751244,lon:37.618423}))}))})),t&&r&&null===c&&(e(wn({lat:t,lon:r})),e(J({lat:t,lon:r})),e(Mn({lat:t,lon:r}))),null!==c&&function(n){e(wn({lat:null,lon:null,searchValue:n})),e(Mn({lat:null,lon:null,searchValue:n}))}(c)})),Object(s.jsx)(Wn,{children:Object(s.jsxs)(zn,{children:[Object(s.jsx)(B,{}),Object(s.jsx)(Dn,{}),Object(s.jsx)(Fe,{}),Object(s.jsx)(gn,{})]})})})),In=t(94),Nn=t.n(In),Vn=Object(u.createGlobalStyle)(Le||(Le=Object(d.a)(["\n  ","\n  body {\n    font-family: 'Montserrat', sans-serif;\n    color: rgba(255, 255, 255, 0.8);\n    font-size: 14px;\n    font-weight: 500;\n  }\n  p {\n    margin: 0;\n  }\n  input[type=\"text\"], textarea {\n    &:focus {\n      background-color: rgba(255, 255, 255, 0.1); \n    }\n    transition: 0.1s ease all;\n  }\n"])),Nn.a),Pn=t(21),qn=t(98),Jn=t(10),Kn=t.n(Jn),Qn=t(11),Xn=t(95),Zn=t.n(Xn).a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),$n={getCurrentWeather:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Zn.get("weather?".concat(null!==e&&null!==n?"lat="+e+"&lon="+n:"").concat(null!==t?"&q="+t:"","&units=metric&appid=34f0fb637a40be39e56e907408b59746")).then((function(e){return e.data})).catch((function(){return 404}))},getDailyWeather:function(e,n){return Zn.get("onecall?lat=".concat(e,"&lon=").concat(n,"&exclude=minutely,alerts,current&units=metric&appid=34f0fb637a40be39e56e907408b59746")).then((function(e){return e.data}))},getHourlyWeather:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Zn.get("forecast?".concat(null!==e&&null!==n?"lat="+e+"&lon="+n:"").concat(null!==t&&t?"q="+t:"","&units=metric&appid=34f0fb637a40be39e56e907408b59746")).then((function(e){return e.data}))}},et=Kn.a.mark(tt),nt=Kn.a.mark(at);function tt(){return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qn.d)(mn,at);case 2:case"end":return e.stop()}}),et)}var rt=function(e){var n=e.lat,t=e.lon,r=e.searchValue;return $n.getCurrentWeather(n,t,r)};function at(e){var n,t;return Kn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(Qn.b)(rt,n);case 4:return t=r.sent,r.next=7,Object(Qn.c)(kn(t));case 7:return r.next=9,Object(Qn.c)(X(t.coord));case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(1),r.t0.message,r.next=16,Object(Qn.c)({type:yn});case 16:case"end":return r.stop()}}),nt,null,[[1,11]])}var ct=Kn.a.mark(ot),it=Kn.a.mark(dt);function ot(){return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qn.d)(I,dt);case 2:case"end":return e.stop()}}),ct)}var lt=function(e){var n=e.lat,t=e.lon,r=e.searchValue;return $n.getDailyWeather(n,t,r)};function dt(e){var n,t;return Kn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(Qn.b)(lt,{lat:n.lat||n.latBySearch,lon:n.lon||n.lonBySearch});case 4:return t=r.sent,r.next=7,Object(Qn.c)(K(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Qn.c)(Q());case 13:case"end":return r.stop()}}),it,null,[[1,9]])}var ut=Kn.a.mark(pt),st=Kn.a.mark(jt);function pt(){return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qn.d)(Ln,jt);case 2:case"end":return e.stop()}}),ut)}var bt=function(e){var n=e.lat,t=e.lon,r=e.searchValue;return $n.getHourlyWeather(n,t,r)};function jt(e){var n,t;return Kn.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.payload,r.prev=1,r.next=4,Object(Qn.b)(bt,n);case 4:return t=r.sent,r.next=7,Object(Qn.c)(Un(t));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(Qn.c)(Gn());case 13:case"end":return r.stop()}}),st,null,[[1,9]])}var xt=Kn.a.mark(ft);function ft(){return Kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Qn.a)([tt(),ot(),pt()]);case 2:case"end":return e.stop()}}),xt)}var ht=t(96),Ot={country:null,city:null,temperature:null,icon:null,description:null,feelsLike:null,wind:null,visibility:null,isLoaded:!1,error:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ot,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case mn:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!1});case vn:return Object(l.a)(Object(l.a)({},e),{},{country:r.sys.country,city:r.name,temperature:r.main.temp,icon:r.weather[0].icon,description:r.weather[0].description,feelsLike:r.main.feels_like,wind:r.wind.speed,visibility:r.visibility,error:!1,isLoaded:!0});case yn:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!0,error:!0});default:return e}},mt={lat:null,lon:null},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case Fn:return Object(l.a)(Object(l.a)({},e),{},{lat:r.lat,lon:r.lon});default:return e}},yt=t(97),wt=t(9),kt={days:[],activeDay:{date:(new Date).toDateString()},coords:{lat:null,lon:null},isLoaded:!1,error:!1},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case I:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!1});case N:return Object(l.a)(Object(l.a)({},e),{},{days:Object(wt.a)(r.daily),error:!1,isLoaded:!0});case V:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!0,error:!0});case P:return Object(l.a)(Object(l.a)({},e),{},{activeDay:{date:r}});case q:return Object(l.a)(Object(l.a)({},e),{},{coords:{lat:r.lat,lon:r.lon}});default:return e}},St={hours:[],isLoaded:!1,error:!1},Ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case Ln:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!1});case Hn:return{hours:r.list,isLoaded:!0,error:!1};case An:return Object(l.a)(Object(l.a)({},e),{},{isLoaded:!0,error:!0});default:return e}},Rt={searchCity:null},Tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Rt,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case Tn:return Object(l.a)(Object(l.a)({},e),{},{searchCity:r});default:return e}},Dt=Object(Pn.combineReducers)({currentWeather:gt,position:vt,dailyWeather:Et,hourlyWeather:Ct,search:Tt}),_t=Object(qn.a)(),Wt=[_t,yt.a],zt=Object(Pn.createStore)(Dt,Object(ht.composeWithDevTools)(Pn.applyMiddleware.apply(void 0,Wt)));_t.run(ft);var Lt=zt;i.a.render(Object(s.jsxs)(o.a,{store:Lt,children:[Object(s.jsx)(Vn,{}),Object(s.jsx)(Bn,{})]}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.d6685e70.chunk.js.map