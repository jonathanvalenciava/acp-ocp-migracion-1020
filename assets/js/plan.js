const H={
 "1315697":{t:"Análisis de sincronización de ambientes en 1018 (develop, quality y master)",c:"1018",e:"chg",d:"Se reorienta a «Línea base de paridad de 1018 para la migración»: qué comportamiento de quality o master se migra. Ya no hay desarrollo en 1018 que planear."},
 "1315670":{t:"Homologar validación de clasificación del prestador para medicamentos (OCP)",c:"1020",e:"chg",d:"Aplica a ambos procesos; confirmar la regla de clasificación CUM vigente en Autorizaciones. Pasa a la fila 1 (entrada, prestador y encabezado), junto con la migración."},
 "1320786":{t:"Validación de clasificación del prestador para medicamentos (ACP)",c:"1020",e:"chg",d:"Igual que 1315670, para ACP. El refactor de la validación embebida en ConvenioNoEstandar se apoya en las políticas de P-01."},
 "1315657":{t:"Poblar campos de creación de prestador OCP (habilitación, sede, clasificación)",c:"1018",e:"keep",d:"Sin cambio: la creación de prestadores (POST /prestador) se queda en 1018."},
 "1315674":{t:"Grupo de prestaciones retroactivo/futuro (OCP)",c:"1020",e:"chg",d:"CA para ambos procesos. Absorbe el contenido de 1315680 (1018)."},
 "1315687":{t:"Línea de borrador / contrato retroactiva (OCP)",c:"1020",e:"chg",d:"Ambos procesos. Incluye la búsqueda de la línea (D7) y la rama de cláusula activa de Autorizaciones (D8). Absorbe 1315690."},
 "1315643":{t:"Valorización OCP por clase de servicio urgencia",c:"1020",e:"chg",d:"Deja de ser paridad con 1018: unifica la decisión SOAT o precios propios (D2) y retira la política de manual por proceso. Absorbe 1323241."},
 "1315680":{t:"Grupo de prestaciones retroactivo/futuro (OCP)",c:"1018",e:"del",w:1,d:"Se elimina: la retroactividad se hace solo en 1020 (1315674). Está en progreso: su diagnóstico de HT-808005 pasa a P-02 y a 1315674."},
 "1315690":{t:"Línea de borrador / contrato retroactiva (OCP)",c:"1018",e:"del",d:"Se elimina; la cubre 1315687 para ambos procesos."},
 "1323241":{t:"Valorización OCP por clase de servicio urgencia",c:"1018",e:"del",d:"Se elimina; la regla de urgencias vive en 1020 (P-02 tal como existe y 1315643 unificada). Ya no hay que corregir su texto copiado."},
 "1320778":{t:"Grupo de prestaciones retroactivo/futuro (ACP)",c:"1020",e:"chg",w:1,d:"Se cierra con su alcance actual: la pieza es neutral al proceso. Se agrega un CA de verificación con proceso Autorizaciones, que se ejecuta después de P-07 (grupo de prestaciones ACP)."},
 "1320780":{t:"Línea de borrador / contrato retroactiva (ACP)",c:"1020",e:"chg",d:"Ambos procesos; incluye actualizar y activar la línea existente, como hoy hace 1018. Absorbe 1320781."},
 "1320779":{t:"Grupo de prestaciones retroactivo/futuro (ACP)",c:"1018",e:"del",d:"Se elimina. El hallazgo de la búsqueda ampliada sin conectar en 1018 queda solo como referencia."},
 "1320781":{t:"Línea de borrador / contrato retroactiva (ACP)",c:"1018",e:"del",d:"Se elimina; la cubre 1320780."},
 "1315695":{t:"Línea de manual tarifario retroactiva (OCP)",c:"1020",e:"chg",d:"Ambos procesos. Absorbe 1315696 (las 6 fallas de la regla de 1018 sirven de casos de prueba)."},
 "1320782":{t:"Línea de manual tarifario retroactiva (ACP)",c:"1020",e:"chg",d:"Ambos procesos; incorpora la búsqueda y actualización de la línea existente (hoy 1020 siempre crea una nueva). Absorbe 1320783."},
 "1315696":{t:"Línea de manual tarifario retroactiva (OCP)",c:"1018",e:"del",d:"Se elimina; la cubre 1315695."},
 "1320783":{t:"Línea de manual tarifario retroactiva (ACP)",c:"1018",e:"del",d:"Se elimina; la cubre 1320782."},
 "1315638":{t:"Fecha de inicio del prestador en OCP retroactiva (actualización o mini convenio)",c:"1020",e:"chg",d:"Ambos procesos. Desaparece el riesgo de que dos componentes clasifiquen T1/T2 de forma distinta. Absorbe 1315635."},
 "1320785":{t:"Fecha de inicio del prestador en ACP retroactiva",c:"1020",e:"chg",d:"Ambos procesos. Absorbe 1320784."},
 "1315635":{t:"Fecha de inicio del prestador en OCP retroactiva (actualización o mini convenio)",c:"1018",e:"del",d:"Se elimina; la cubre 1315638. HT-973508 solo está en una rama feature de 1018 y queda como referencia."},
 "1320784":{t:"Fecha de inicio del prestador en ACP retroactiva",c:"1018",e:"del",d:"Se elimina; la cubre 1320785."},
 "P-01":{t:"Identificación del proceso, políticas por proceso y validaciones de entrada comunes",c:"1020",e:"new",dep:["1315697"],d:"Enum ProcesoConvenio; campo «proceso» opcional con valor por defecto CUENTAS_MEDICAS en el mapper; interfaces PoliticaConvenioAcp/Ocp y Map en AppContext; la política de Cuentas Médicas extrae las reglas actuales sin cambiar su comportamiento; validaciones comunes con 400 (prestador inexistente, manual tarifario no soportado, formato de fecha, especialidad, DTO) con los mensajes de 1018 (D19, D22, D23, D25); proceso en los logs."},
 "P-02":{t:"Migrar a 1020 la creación de OCP de Autorizaciones: entrada, prestador y encabezado",c:"1020",e:"new",dep:["P-01"],d:"Contrato de entrada (alias manual→definicion, codigoClaseServicio, zona especial); política OCP de Autorizaciones para la decisión de manual (D2: URGE o tarifa 0); especialidad del prestador (PATCH; 400 si falta); construcción de códigos; hoja de precios …OCP11. Paridad: rechazos V18-17 a V18-21 y V18-24, decisión de manual y códigos."},
 "P-03":{t:"Migrar a 1020 la creación de OCP de Autorizaciones: grupo de prestaciones",c:"1020",e:"new",dep:["P-02"],d:"Encabezado y detalle del grupo; prestación quirúrgica; grupos de zona especial (D3); grupo de beneficios BEN_PRESTACIONES_ARL (PEND-OCP-10); idempotencia GEN-ORA-00001. Paridad del grupo y su detalle."},
 "P-04":{t:"Migrar a 1020 la creación de OCP de Autorizaciones: manual tarifario",c:"1020",e:"new",dep:["P-02"],d:"feeschedules y feeschedulelines solo con precios propios; sufijos MED/MYM (D16); tarifa nula → 0. Paridad del manual y su línea."},
 "P-05":{t:"Migrar a 1020 la creación de OCP de Autorizaciones: línea de borrador y activación",c:"1020",e:"new",dep:["P-03","P-04"],d:"Búsqueda de la línea (D7); POST o PUT sin nulos (D9); cláusula activa según la decisión de D8; /build; respuesta 201. Paridad de punta a punta del flujo OCP."},
 "P-06":{t:"Migrar a 1020 la creación de ACP de Autorizaciones: entrada, prestador y encabezado",c:"1020",e:"new",dep:["P-01"],d:"Contrato de entrada (numeroContrato); contrato 10-9-1, manual referente y numeroContrato resueltos en OHI cuando no llegan (D4, D20); afiliación a la red (D6); porcentaje negociado (D5); contrato sin convenio vigente (D17); definiciones admitidas (D21); códigos y hoja de precios. Paridad: rechazos V18-01 a V18-13."},
 "P-07":{t:"Migrar a 1020 la creación de ACP de Autorizaciones: grupo de prestaciones",c:"1020",e:"new",dep:["P-06"],d:"Grupo y detalle con la marca prestacionACP=S (D13); prestación quirúrgica; búsqueda del grupo en el convenio vigente; idempotencia. Paridad del grupo. Habilita el CA de Autorizaciones de 1320778."},
 "P-08":{t:"Migrar a 1020 la creación de ACP de Autorizaciones: manual tarifario",c:"1020",e:"new",dep:["P-06"],d:"Línea del manual cuando hay tarifa sin manual (precios propios); MED/MYM (D16). Paridad del manual y su línea."},
 "P-09":{t:"Migrar a 1020 la creación de ACP de Autorizaciones: línea de borrador y activación",c:"1020",e:"new",dep:["P-07","P-08"],d:"Línea con providerGroup y C_PRESTADOR_EXISTE_RED (D6); búsqueda (D7); /build; respuesta 201. Paridad de punta a punta del flujo ACP."},
 "P-10":{t:"Conmutar el consumidor de Autorizaciones a 1020",c:"Gateway",e:"new",dep:["P-05","P-09"],d:"Identificar los consumidores reales de los endpoints ACP/OCP de 1018; publicar las rutas de 1020 en el gateway; el consumidor envía proceso=AUTORIZACIONES; el front sigue usando los endpoints de pre-decisión de 1018; verificar que lee prestacionACP=S escrita por 1020 y que maneja los mismos 400; validación de punta a punta en laboratorio."},
 "P-11":{t:"Retirar los flujos ACP/OCP de 1018",c:"1018",e:"new",dep:["P-10"],d:"Eliminar rutas, beans, estrategias y DTO exclusivos (unas 49 clases y 4 100 líneas, más sus pruebas). Antes, reubicar direct:encabezadosParaConsumirOHI. Conservar los endpoints de pre-decisión (/prestadoresconvenio, /prestadores, /prestacion-requiere-tarifa, /procedimiento-detallado, /prestacionesconvenidas) y POST /prestador. Regresión de autorizaciones."}};
const EF={del:["Se elimina","×","c-del"],chg:["Cambia","↻","c-chg"],new:["Nueva","+","c-new"],keep:["Sin cambio","=","c-keep"]};
const short=id=>{const t=H[id].t,m=t.match(/creación de (OCP|ACP) de Autorizaciones: (.*)$/);const s=m?`Migrar ${m[1]} · ${m[2]}`:t;return s.length>58?s.slice(0,56)+"…":s};
const pill=id=>`<span class="idp ${H[id].e}" data-tip="<b>${id}</b> · ${H[id].c}<br>${H[id].t}<br><i>${EF[H[id].e][0]}</i>"><i>${EF[H[id].e][1]}</i>${id}</span>`;

(function sankey(){
 const svg=document.getElementById("sankey"),U=10,G=22,W=14;
 const N={a18:{c:0,l:"1018",v:11},a20:{c:0,l:"1020",v:11},anew:{c:0,l:"Propuestas nuevas",v:11},
  del:{c:1,l:"Se eliminan",v:9,e:"del"},chg:{c:1,l:"Cambian",v:12,e:"chg"},keep:{c:1,l:"Sin cambio",v:1,e:"keep"},nw:{c:1,l:"Nuevas",v:11,e:"new"},
  n20:{c:2,l:"1020",v:20},n18:{c:2,l:"1018",v:3},ngw:{c:2,l:"Gateway",v:1}};
 const ids=e=>Object.keys(H).filter(k=>H[k].e===e);
 const L=[["a18","del",9,"del",ids("del")],["a18","chg",1,"chg",["1315697"]],["a18","keep",1,"keep",["1315657"]],["a20","chg",11,"chg",ids("chg").filter(k=>H[k].c==="1020")],["anew","nw",11,"new",ids("new")],
  ["chg","n20",11,"chg",ids("chg").filter(k=>H[k].c==="1020")],["chg","n18",1,"chg",["1315697"]],["keep","n18",1,"keep",["1315657"]],["nw","n20",9,"new",["P-01","P-02","P-03","P-04","P-05","P-06","P-07","P-08","P-09"]],["nw","n18",1,"new",["P-11"]],["nw","ngw",1,"new",["P-10"]]];
 const X=[175,560,960],col={del:"var(--del)",chg:"var(--chg)",new:"var(--new)",keep:"var(--keep)"};
 [0,1,2].forEach(c=>{let y=30;Object.values(N).filter(n=>n.c===c).forEach(n=>{n.y=y;n.h=n.v*U;n.o=0;n.i=0;y+=n.h+G})});
 let h="";
 L.forEach(([s,t,v,e,list])=>{const a=N[s],b=N[t],w=v*U,y0=a.y+a.o+w/2,y1=b.y+b.i+w/2;a.o+=w;b.i+=w;const x0=X[a.c]+W,x1=X[b.c],m=(x0+x1)/2;
  h+=`<path class="lk" d="M${x0} ${y0}C${m} ${y0} ${m} ${y1} ${x1} ${y1}" stroke="${col[e]}" stroke-width="${w-2}" data-tip="<b>${a.l} → ${b.l}</b>: ${v} ${v===1?"historia":"historias"}<br>${list.join(" · ")}"/>`});
 Object.values(N).forEach(n=>{const fill=n.e?col[n.e]:"var(--ink)";h+=`<rect x="${X[n.c]}" y="${n.y}" width="${W}" height="${n.h}" rx="4" fill="${fill}"/>`;
  const right=n.c===2,tx=right?X[n.c]+W+10:(n.c===0?X[n.c]-10:X[n.c]+W+10),anchor=n.c===0?"end":"start";
  h+=`<text x="${tx}" y="${n.y+n.h/2-2}" text-anchor="${anchor}">${n.l}</text><text class="s" x="${tx}" y="${n.y+n.h/2+13}" text-anchor="${anchor}">${n.v} ${n.v===1?"historia":"historias"}</text>`});
 h+=`<text class="s" x="${X[0]+W/2}" y="16" text-anchor="middle">PLAN ACTUAL · 22 + 11</text><text class="s" x="${X[1]+W/2}" y="16" text-anchor="middle">EFECTO</text><text class="s" x="${X[2]+W/2}" y="16" text-anchor="middle">PLAN PROPUESTO · 24</text>`;
 svg.innerHTML=h;
})();

document.getElementById("comp").innerHTML=[["Plan actual",[["1020",11,"var(--accent)"],["1018",11,"var(--alt)"]],22],["Plan propuesto",[["1020",20,"var(--accent)"],["1018",3,"var(--alt)"],["Gateway",1,"var(--violet)"]],24]].map(([n,parts,tot])=>
 `<div class="cb"><div class="lbl"><b>${n}</b><span class="muted">${tot} historias</span></div><div class="bar">${parts.map(p=>`<div data-tip="${n} · ${p[0]}: ${p[1]} historias" style="flex:${p[1]};background:${p[2]}">${p[1]>=2?p[0]+" · "+p[1]:p[1]}</div>`).join("")}</div></div>`).join("")+
 `<div class="legend"><span><span class="sw" style="background:var(--accent)"></span>1020</span><span><span class="sw" style="background:var(--alt)"></span>1018</span><span><span class="sw" style="background:var(--violet)"></span>Gateway / consumidor</span></div>`;

const stg=(e,n,d,ids)=>`<div class="stage"><div class="top"><span class="e">${e}</span><span class="nm">${n}</span></div><div class="ds">${d}</div><div class="ids">${ids.map(pill).join("")}</div></div>`;
const ids=a=>a.map(pill).join("");
const cell=a=>a.length?`<div class="cell">${ids(a)}</div>`:`<div class="cell empty">—</div>`;
const row=(n,d,c)=>`<div class="ent"><b>${n}</b><span>${d}</span></div>`+c.map(cell).join("");
const wide=(n,d,a)=>`<div class="ent"><b>${n}</b><span>${d}</span></div><div class="cell span4">${ids(a)}</div>`;
document.getElementById("egrid").innerHTML=`<div class="hd">Entidad</div><div class="hd m">Migración · OCP</div><div class="hd m">Migración · ACP</div><div class="hd r">Retroactividad · OCP</div><div class="hd r">Retroactividad · ACP</div>`+
 wide("E0 · Habilitador","Línea base e identificación del proceso",["1315697","P-01"])+'<div class="sep"></div>'+
 row("1 · Entrada, prestador y encabezado","Contrato, validaciones, códigos y hoja de precios; validación de medicamentos",[["P-02","1315670"],["P-06","1320786"],[],[]])+
 row("2 · Grupo de prestaciones","Encabezado y detalle del grupo",[["P-03"],["P-07"],["1315674"],["1320778"]])+
 row("3 · Manual tarifario","Solo con precios propios",[["P-04"],["P-08"],["1315695"],["1320782"]])+
 row("4 · Línea de borrador y activación","Cierra el flujo de punta a punta; urgencias unificadas",[["P-05"],["P-09"],["1315687","1315643"],["1320780"]])+
 row("5 · Prestador posterior","Fecha de inicio del prestador",[[],[],["1315638"],["1320785"]])+'<div class="sep"></div>'+
 wide("Conmutación y retiro","Cuando los dos flujos están completos (filas 1 a 4)",["P-10","P-11"])+
 wide("Independiente","Creación del prestador, se queda en 1018",["1315657"]);

const A=[["E0","Habilitador","Ruta de trabajo en 1018",["1315697"]],["E1","Prestador válido","OCP y ACP",["1315670","1320786","1315657"]],["E2","OCP retro sin manual propio","Grupo, línea y urgencias",["1315674","1315687","1315643","1315680","1315690","1323241"]],["E3","ACP retro sin manual propio","Grupo y línea",["1320778","1320780","1320779","1320781"]],["E4","Precios propios retroactivos","Manual tarifario",["1315695","1320782","1315696","1320783"]],["E5","Prestador posterior al servicio","Fecha de inicio del prestador",["1315638","1320785","1315635","1320784"]]];
const Nw=[["E0","Habilitador","Línea base e identificación del proceso",["1315697","P-01"]],["M1","Entrada, prestador y encabezado","Migración OCP y ACP",["P-02","P-06","1315670","1320786"]],["M2","Grupo de prestaciones","Migración y luego retro",["P-03","P-07","1315674","1320778"]],["M3","Manual tarifario","Migración y luego retro",["P-04","P-08","1315695","1320782"]],["M4","Línea de borrador y activación","Migración y luego retro, con urgencias",["P-05","P-09","1315687","1320780","1315643"]],["M5","Conmutación y retiro","Consumidor a 1020 y retiro de 1018",["P-10","P-11"]],["R4","Prestador posterior","Fecha de inicio del prestador",["1315638","1320785"]],["·","Independiente","Creación del prestador (1018)",["1315657"]]];
const card=id=>{const h=H[id];return `<div class="st ${h.e}" data-tip="<b>${id}</b> · ${EF[h.e][0]}<br>${h.d}"><div class="id"><span><span class="ef">${EF[h.e][1]}</span><span class="idt">${id}</span></span><span class="cmp">${h.c}</span></div><div class="ti">${short(id)}</div>${h.w?'<span class="wip">En progreso</span>':""}</div>`};
const board=(el,P)=>document.getElementById(el).innerHTML=P.map(s=>`<div class="bst"><div class="sh2"><span class="code2">${s[0]}</span><span class="name">${s[1]}</span><span class="desc">${s[2]}</span></div><div class="cards">${s[3].map(card).join("")}</div></div>`).join("");
board("bA",A);board("bN",Nw);

const ord=["del","chg","new","keep"],rows=Object.entries(H).sort((a,b)=>ord.indexOf(a[1].e)-ord.indexOf(b[1].e)||a[0].localeCompare(b[0]));
let f="todas";
const tab=()=>document.getElementById("tab").innerHTML=rows.filter(r=>f==="todas"||r[1].e===f).map(([id,h])=>`<tr><td><b>${id}</b>${h.w?'<br><span class="wip">En progreso</span>':""}</td><td>${h.t}</td><td>${h.c}</td><td><span class="chip ${EF[h.e][2]}"><i>${EF[h.e][1]}</i>${EF[h.e][0]}</span></td><td>${h.d}</td></tr>`).join("");
const cnt=k=>rows.filter(r=>r[1].e===k).length;
document.getElementById("fil").innerHTML=[["todas",`Todas · ${rows.length}`],...ord.map(k=>[k,`${EF[k][0]} · ${cnt(k)}`])].map(([k,l])=>`<button data-k="${k}" class="${k==="todas"?"on":""}">${l}</button>`).join("");
document.querySelectorAll("#fil button").forEach(b=>b.onclick=()=>{f=b.dataset.k;document.querySelectorAll("#fil button").forEach(x=>x.classList.toggle("on",x===b));tab()});tab();

document.getElementById("nuevasC").innerHTML=Object.entries(H).filter(([,h])=>h.e==="new").map(([id,h])=>`<div class="card nc"><div class="top"><span class="k">+ ${id}</span><span class="chip">${h.c}</span></div><h3 style="margin:0">${h.t}</h3><p>${h.d}</p><div class="deps">Depende de ${h.dep.map(pill).join("")}</div></div>`).join("");
