(this["webpackJsonprapidapi-deploy-react"]=this["webpackJsonprapidapi-deploy-react"]||[]).push([[0],{14:function(e,t,a){e.exports=a(38)},19:function(e,t,a){},20:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(19),a(2)),i=(a(20),a(13)),u=a.n(i);var s=function(){var e=l.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),c=Object(o.a)(r,2),i=c[0],s=c[1],m=l.a.useState(""),p=Object(o.a)(m,2),d=p[0],E=p[1],h=l.a.useState(""),f=Object(o.a)(h,2),g=f[0],v=f[1],w=l.a.useState(!1),y=Object(o.a)(w,2),b=y[0],C=y[1],S=l.a.useState(!1),j=Object(o.a)(S,2),O=j[0],k=j[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Deploying React App")),l.a.createElement("main",null,l.a.createElement("h2",null,"Check Your Local Weather"),l.a.createElement("div",{className:"list-wrapper"},"Enter a place. Valid entries include:",l.a.createElement("ul",null,l.a.createElement("li",null,"city,state"),l.a.createElement("li",null,"lat,long"),l.a.createElement("li",null,"city,country"),l.a.createElement("li",null,"US / CA postal code"))),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),C(!0),k(!1),u.a.post("/api/route",{location:a}).then((function(e){var t=e.data;s(t.tempC),E(t.tempF),v(t.conditions)})).catch((function(e){k(!0),console.log(e)})).finally((function(){C(!1)}))}},l.a.createElement("fieldset",null,l.a.createElement("label",null,"Enter location",l.a.createElement("input",{type:"text",value:a,placeholder:"seattle,wa",onChange:function(e){return n(e.target.value)}})),l.a.createElement("button",{type:"submit"},"Get Weather"))),l.a.createElement("h2",null,"Current Conditions"),b&&l.a.createElement("p",{style:{color:"#CCC"}},"Fetching weather data..."),O&&l.a.createElement("p",{style:{color:"red"}},"Something went wrong..."),i&&l.a.createElement("p",null,i," degrees Celcius"),d&&l.a.createElement("p",null,d," degrees Fahrenheit"),g&&l.a.createElement("p",null,g),!a&&!b&&l.a.createElement("p",null,"Please enter a location")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.fa2aa6e4.chunk.js.map