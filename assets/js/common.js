const tip=document.getElementById("tip");
document.addEventListener("mousemove",e=>{const t=e.target.closest("[data-tip]");if(!t){tip.classList.remove("on");return}tip.innerHTML=t.dataset.tip;tip.classList.add("on");const x=Math.min(e.clientX+14,innerWidth-tip.offsetWidth-10),y=Math.min(e.clientY+14,innerHeight-tip.offsetHeight-10);tip.style.left=x+"px";tip.style.top=y+"px"});
const root=document.documentElement;
document.getElementById("theme").onclick=()=>{root.dataset.theme=root.dataset.theme==="dark"?"light":"dark";localStorage.setItem("acp-theme",root.dataset.theme)};
const AZ="https://dev.azure.com/SuraColombia/Gerencia_Tecnologia_Egv_Aseguramiento/_workitems/edit/";
const WI=new Set("1295311 1299679 1315635 1315638 1315643 1315657 1315670 1315674 1315680 1315687 1315690 1315695 1315696 1315697 1320778 1320779 1320780 1320781 1320782 1320783 1320784 1320785 1320786 1323241 808005 848172 848182 949976 973508 984987 1281475 1286504 1286505 1114190 1114193 1114194 1337793".split(" "));
let linking=false;
function linkify(){
 if(linking)return;linking=true;
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const p=n.parentElement;if(!p||p.closest("a,script,style,svg,code,pre,#tip,.endpoint"))return NodeFilter.FILTER_REJECT;return /\b\d{6,7}\b/.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}});
 const ns=[];while(w.nextNode())ns.push(w.currentNode);
 ns.forEach(n=>{const parts=n.nodeValue.split(/(\b\d{6,7}\b)/);if(!parts.some((s,i)=>i%2&&WI.has(s)))return;const f=document.createDocumentFragment();
  parts.forEach((s,i)=>{if(i%2&&WI.has(s)){const a=document.createElement("a");a.href=AZ+s;a.target="_blank";a.rel="noopener";a.className="wi";a.title="Abrir "+s+" en Azure DevOps";a.textContent=s;f.appendChild(a)}else if(s)f.appendChild(document.createTextNode(s))});n.replaceWith(f)});
 linking=false;
}
linkify();
new MutationObserver(()=>{if(!linking)linkify()}).observe(document.body,{childList:true,subtree:true});
