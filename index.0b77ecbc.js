var e=document.querySelector(".tree"),t=!0,r=!1,n=void 0;try{for(var l,a=e.querySelectorAll("li")[Symbol.iterator]();!(t=(l=a.next()).done);t=!0){var i=l.value,o=document.createElement("span");o.textContent=i.firstChild.textContent,i.firstChild.textContent="",i.prepend(o)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}e.addEventListener("click",function(e){if("SPAN"===e.target.tagName){var t=e.target.parentNode.querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.0b77ecbc.js.map
