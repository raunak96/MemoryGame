(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),c=n.n(o),i=(n(17),n(9)),l=n(5),u=n(6),d=n(8),s=n(7),h=n(1),m=n(10),f=n(2),k=n.n(f),b=(n(18),function(e){return r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement("a",null,"Memory Game")),r.a.createElement("span",null,r.a.createElement("h3",null,e.text)),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:e.onNewGame},e.bb))))}),v=(n(19),function(e){var t={};return e.showing&&(t.backgroundColor=e.backgroundColor),r.a.createElement("div",{onClick:e.onSel,className:"card-container",style:t})}),C={HIDING:0,SHOWING:1,MATCHING:2};function w(){for(var e=[],t=0;t<8;t++){var n=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),r=Math.floor(256*Math.random()),o="rgb(".concat(n,",").concat(a,",").concat(r,")");e.push({id:t,cardState:C.HIDING,backgroundColor:o}),e.push({id:15-t,cardState:C.HIDING,backgroundColor:o})}return e}var G=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(d.a)(this,Object(s.a)(t).call(this,e));var a=w();return a=k()(a),n.state={cards:a,noClick:!1,Winner:!1},n.handleNewGame=n.handleNewGame.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=this,n=function(e,t,n){return e.map(function(e){return t.includes(e.id)?Object(i.a)({},e,{cardState:n}):e})},a=this.state.cards.find(function(t){return t.id===e});if(!this.state.noClick&&a.cardState===C.HIDING){var r=!1,o=!1,c=n(this.state.cards,[e],C.SHOWING),l=c.filter(function(e){return e.cardState===C.SHOWING}),u=l.map(function(e){return e.id});if(2===l.length&&l[0].backgroundColor===l[1].backgroundColor)c=n(c,u,C.MATCHING);else if(2===l.length){var d=n(c,u,C.HIDING);return r=!0,void this.setState({cards:c,noClick:r},function(){setTimeout(function(){t.setState({cards:d,noClick:!1})},1300)})}16===c.filter(function(e){return e.cardState===C.MATCHING}).length&&(o=!0),this.setState({cards:c,noClick:r,Winner:o})}}},{key:"handleNewGame",value:function(){var e=w();e=k()(e),this.setState({cards:e,noClick:!1,Winner:!1})}},{key:"render",value:function(){var e=this,t=this.state.cards.map(function(t){return r.a.createElement(v,{key:t.id,showing:t.cardState!==C.HIDING,backgroundColor:t.backgroundColor,onSel:e.handleClick.bind(e,t.id)})});return r.a.createElement("div",null,r.a.createElement(b,{onNewGame:this.handleNewGame,text:this.state.Winner?"You Win!!  Nice Memory You Got":"",bb:this.state.Winner?"Play Again?":"New Game"}),t)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.871871ba.chunk.js.map