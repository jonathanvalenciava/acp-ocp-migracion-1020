/*TABLERO:INICIO*/const TABLERO={"actualizado":"2026-11-25T17:41Z","campo":"Custom.PuntosdeEsfuerzo","historias":{"1315697":{"puntos":2,"estado":"New"},"1320778":{"puntos":5,"estado":"En progreso"},"1315674":{"puntos":5,"estado":"New"},"1320780":{"puntos":3,"estado":"New"},"1315687":{"puntos":3,"estado":"New"},"1320782":{"puntos":3,"estado":"New"},"1315695":{"puntos":3,"estado":"New"},"1315670":{"puntos":1,"estado":"New"},"1320786":{"puntos":1,"estado":"New"},"1315657":{"puntos":2,"estado":"New"},"1320785":{"puntos":null,"estado":"New"},"1315638":{"puntos":null,"estado":"New"},"1315643":{"puntos":null,"estado":"New"},"1315680":{"puntos":5,"estado":"En progreso"},"1320779":{"puntos":5,"estado":"New"},"1315690":{"puntos":3,"estado":"New"},"1315696":{"puntos":3,"estado":"New"},"1320781":{"puntos":3,"estado":"New"},"1320783":{"puntos":3,"estado":"New"},"1315635":{"puntos":null,"estado":"New"},"1320784":{"puntos":null,"estado":"New"},"1323241":{"puntos":null,"estado":"New"}},"propuestas":{"M-01":null,"M-OCP-1":null,"M-OCP-2":null,"M-OCP-3":null,"M-OCP-4":null,"M-ACP-1":null,"M-ACP-2":null,"M-ACP-3":null,"M-ACP-4":null,"M-07":null,"M-08":null,"M-09":null,"M-10":null,"M-11":null,"M-12":null,"M-13":null}};/*TABLERO:FIN*/
const H={
 "1315697":{t:"Análisis de sincronización de ambientes en 1018",c:"1018",e:"chg",f:"F0 · habilitador",d:"Actualiza su CA-04 con la ruta de esta migración y registra la decisión en el CA-05. Su aprobación habilita M-01."},
 "1315670":{t:"Clasificación del prestador para medicamentos (OCP)",c:"1020",e:"chg",f:"Entrada · OCP",d:"Los dos procesos; va junto con M-OCP-1. Confirmar si se exige CUM en Reclamaciones."},
 "1320786":{t:"Clasificación del prestador para medicamentos (ACP)",c:"1020",e:"chg",f:"Entrada · ACP",d:"Igual que 1315670; va junto con M-ACP-1."},
 "1315674":{t:"Fecha en grupo de prestaciones (OCP)",c:"1020",e:"chg",f:"Grupo · OCP",d:"Retroactividad en los dos procesos. Recibe el diseño de 1315680. El criterio de Reclamaciones espera a M-OCP-2."},
 "1320778":{t:"Fecha en grupo de prestaciones (ACP)",c:"1020",e:"chg",f:"Grupo · ACP",w:1,d:"Su avance cubre Cuentas Médicas y la pieza es neutral al proceso. El criterio de Reclamaciones se valida después de M-ACP-2."},
 "1315695":{t:"Fecha y valor en manual tarifario (OCP)",c:"1020",e:"chg",f:"Manual · OCP",d:"Los dos procesos; espera a M-OCP-3. Las 6 fallas de la regla de 1018 sirven de casos de prueba."},
 "1320782":{t:"Fecha y valor en manual tarifario (ACP)",c:"1020",e:"chg",f:"Manual · ACP",d:"Los dos procesos; espera a M-ACP-3. Busca y actualiza la línea existente."},
 "1315687":{t:"Fecha en línea de borrador o contrato (OCP)",c:"1020",e:"chg",f:"Línea · OCP",d:"Los dos procesos; espera a M-OCP-4."},
 "1315643":{t:"Valorización OCP por clase de servicio urgencia",c:"1020",e:"chg",f:"Línea · OCP",d:"Si negocio unifica la regla CUPS (DEC-1) se unifica aquí; si no, queda como política en M-OCP-3. Espera a M-OCP-4."},
 "1320780":{t:"Fecha en línea de borrador o contrato (ACP)",c:"1020",e:"chg",f:"Línea · ACP",d:"Los dos procesos; espera a M-ACP-4. Actualiza y activa la línea existente."},
 "1315638":{t:"Fecha de inicio del prestador (OCP)",c:"1020",e:"chg",f:"Prestador posterior · OCP",d:"Los dos procesos; espera a que el flujo OCP esté completo (M-OCP-4)."},
 "1320785":{t:"Fecha de inicio del prestador (ACP)",c:"1020",e:"chg",f:"Prestador posterior · ACP",d:"Los dos procesos; espera a M-ACP-4."},
 "1315657":{t:"Campos de creación del prestador OCP",c:"1018",e:"rev",f:"—",d:"Revisar el alcance: trata la creación del prestador (POST /prestador), que no se migra."},
 "1315680":{t:"Fecha en grupo de prestaciones (OCP)",c:"1018",e:"del",w:1,f:"—",d:"Pausar y luego cerrar. Su diseño pasa a 1315674."},
 "1315690":{t:"Fecha en línea de borrador o contrato (OCP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1315687."},
 "1315696":{t:"Fecha y valor en manual tarifario (OCP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1315695."},
 "1315635":{t:"Fecha de inicio del prestador (OCP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1315638."},
 "1323241":{t:"Valorización OCP por clase de servicio urgencia",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1315643. Depende de DEC-1."},
 "1320779":{t:"Fecha en grupo de prestaciones (ACP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1320778."},
 "1320781":{t:"Fecha en línea de borrador o contrato (ACP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1320780."},
 "1320783":{t:"Fecha y valor en manual tarifario (ACP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1320782."},
 "1320784":{t:"Fecha de inicio del prestador (ACP)",c:"1018",e:"del",f:"—",d:"Cerrar; la cubre 1320785."},
 "M-OCP-1":{t:"Migrar OCP de Reclamaciones: entrada, prestador y encabezado",c:"1020",e:"new",f:"Entrada · OCP",dep:["DEC-3"],o:"M-02, M-03",d:"Ruta POST /v1/salud/autorizaciones/crear-convenio con el JSON de 1018 en PDN (alias manual → definicion). Validaciones 400 con los mensajes del front: prestador inexistente, manual no soportado, fecha dd/MM/yyyy y especialidad CUPS. Códigos y hoja de precios. Paridad de la entidad con 1018."},
 "M-OCP-2":{t:"Migrar OCP de Reclamaciones: grupo de prestaciones",c:"1020",e:"new",f:"Grupo · OCP",dep:["M-OCP-1"],o:"M-06",d:"Encabezado y detalle del grupo; prestación quirúrgica; grupos de zona especial 125 y 115; grupo de beneficios OCP; idempotencia. Paridad del grupo con 1018."},
 "M-OCP-3":{t:"Migrar OCP de Reclamaciones: manual tarifario",c:"1020",e:"new",f:"Manual · OCP",dep:["M-OCP-2","DEC-1"],o:"M-05, M-06",d:"Decisión SOAT o precios propios como en PDN (tarifa 0 es SOAT), como política del proceso. Manual y su línea solo con precios propios; sufijos MED y MYM; tarifa nula como 0. Paridad del manual."},
 "M-OCP-4":{t:"Migrar OCP de Reclamaciones: línea de borrador y activación",c:"1020",e:"new",f:"Línea · OCP",dep:["M-OCP-3"],o:"M-06",d:"Búsqueda de la misma línea que 1018; POST o PUT sin nulos; cláusula activa (PUT providerpricingclauses y build); /build; 201 sin cuerpo. Paridad de punta a punta del flujo OCP."},
 "M-ACP-1":{t:"Migrar ACP de Reclamaciones: entrada, prestador y encabezado",c:"1020",e:"new",f:"Entrada · ACP",dep:["DEC-2"],o:"M-02, M-03, M-04",d:"Ruta POST /v1/salud/autorizaciones/crear-prestacion-acp con el JSON de 1018 en PDN y las validaciones 400 comunes. Manual referente, contrato 10-9-1 y numeroContrato resueltos en OHI si no llegan; red del prestador; contrato sin convenio vigente; porcentaje; definiciones según DEC-2. Códigos y hoja de precios."},
 "M-ACP-2":{t:"Migrar ACP de Reclamaciones: grupo de prestaciones",c:"1020",e:"new",f:"Grupo · ACP",dep:["M-ACP-1"],o:"M-06",d:"Grupo y detalle con la marca prestacionACP=S; prestación quirúrgica; búsqueda del grupo en el convenio vigente; idempotencia. Paridad del grupo con 1018."},
 "M-ACP-3":{t:"Migrar ACP de Reclamaciones: manual tarifario",c:"1020",e:"new",f:"Manual · ACP",dep:["M-ACP-2"],o:"M-06",d:"Línea del manual cuando hay tarifa sin manual (precios propios); sufijos MED y MYM. Paridad del manual."},
 "M-ACP-4":{t:"Migrar ACP de Reclamaciones: línea de borrador y activación",c:"1020",e:"new",f:"Línea · ACP",dep:["M-ACP-3"],o:"M-04, M-06",d:"Línea con providerGroup y C_PRESTADOR_EXISTE_RED; búsqueda de la misma línea que 1018; /build; 201 sin cuerpo. Paridad de punta a punta del flujo ACP."},
 "M-01":{t:"Backport de los hotfixes de PDN a develop y quality",c:"1018",e:"new",f:"F1 · transversal",dep:["1315697"],o:"Artefacto",d:"Merge de master en develop como Merge (no Squash) y promoción a quality; 53 conflictos. QA de paginación de más de 5000 registros, búsquedas, edición y anulación. Depende también del PR 368830."},
 "M-07":{t:"Resiliencia y observabilidad",c:"1020",e:"new",f:"F2 · transversal",dep:["DEC-5"],o:"Artefacto",d:"Timeouts hacia OHI; reintentos según DEC-5; límite de concurrencia por proceso; proceso y consumidor en logs y métricas."},
 "M-08":{t:"Exposición y configuración por ambiente",c:"1020",e:"new",f:"F2 · transversal",dep:["DEC-4"],o:"Artefacto",d:"Ruta del gateway para Reclamaciones con su propia cuota y acceso por consumidor; configuración por ambiente, con los ajustes de seguridad del detalle interno."},
 "M-09":{t:"Toggle por ambiente en el front de reclamaciones",c:"Front",e:"new",f:"F3 · transversal",dep:["M-OCP-1","M-ACP-1","M-08"],o:"Artefacto",d:"Apagado: llama a 1018 como hoy. Prendido: llama a las rutas de Reclamaciones de 1020 con el mismo request y manejo de errores. Un solo valor por ambiente."},
 "M-10":{t:"Matriz de paridad entre 1018 y 1020",c:"QA",e:"new",f:"F4 · transversal",dep:["M-OCP-4","M-ACP-4","M-07","M-08","M-09"],o:"Artefacto",d:"Todos los casos con el toggle apagado y prendido, comparando en OHI entidad por entidad. Regresión de 937-ms: radicación RIPS y carga masiva."},
 "M-11":{t:"Activación en PDN",c:"Operación",e:"new",f:"F4 · transversal",dep:["M-10"],o:"Artefacto",d:"Prender el toggle en PDN y vigilar errores y latencia. Plan de reversa: apagarlo."},
 "M-12":{t:"Retroactividad validada desde Reclamaciones",c:"QA",e:"new",f:"F5 · transversal",dep:["M-11"],o:"Artefacto",d:"Escenarios de Reclamaciones con el toggle prendido sobre las HT de retroactividad de 1020, con base en las HU 1114190 y 1114194. La retroactividad sale a PDN solo después de M-11."},
 "M-13":{t:"Retiro de ACP/OCP en 1018",c:"1018",e:"new",f:"F6 · transversal",dep:["Toggle estable en PDN"],o:"Artefacto",d:"Mover direct:encabezadosParaConsumirOHI a RutaComun antes de borrar; eliminar 62 clases y 50 de test. Se conservan las consultas de pre-decisión y POST /prestador."}};
const EF={del:["Se cierra","×","c-del"],chg:["Cambia","↻","c-chg"],rev:["En revisión","?","c-alt"],new:["Nueva","+","c-new"]};
const azOf=id=>H[id]&&H[id].e==="new"?(TABLERO.propuestas[id]||null):id;
const pts=id=>{const a=azOf(id);if(!a)return null;const r=TABLERO.historias[String(a)];return r&&typeof r.puntos==="number"?r.puntos:null};
const est=id=>{const a=azOf(id);const r=a&&TABLERO.historias[String(a)];return r?r.estado:"Propuesta"};
const pill=id=>H[id]?`<span class="idp ${H[id].e==="rev"?"keep":H[id].e}" data-tip="<b>${id}</b> · ${H[id].c}<br>${H[id].t}<br><i>${EF[H[id].e][0]}</i>"><i>${EF[H[id].e][1]}</i>${id}</span>`:`<span class="idp keep">${id}</span>`;
const PLAN=Object.keys(H).filter(k=>H[k].e!=="del");

(function sankey(){
 const svg=document.getElementById("sankey"),U=10,G=22,W=14;
 const N={a18:{c:0,l:"1018",v:11},a20:{c:0,l:"1020",v:11},anew:{c:0,l:"Propuestas nuevas",v:16},
  del:{c:1,l:"Se cierran",v:9,e:"del"},chg:{c:1,l:"Cambian",v:12,e:"chg"},rev:{c:1,l:"En revisión",v:1,e:"rev"},nw:{c:1,l:"Nuevas",v:16,e:"new"},
  n20:{c:2,l:"1020",v:21},n18:{c:2,l:"1018",v:4},nfr:{c:2,l:"Front",v:1},nqa:{c:2,l:"QA y operación",v:3}};
 const ids=e=>Object.keys(H).filter(k=>H[k].e===e),c20=ids("chg").filter(k=>H[k].c==="1020");
 const mig=["M-OCP-1","M-OCP-2","M-OCP-3","M-OCP-4","M-ACP-1","M-ACP-2","M-ACP-3","M-ACP-4","M-07","M-08"];
 const L=[["a18","del",9,"del",ids("del")],["a18","chg",1,"chg",["1315697"]],["a18","rev",1,"rev",["1315657"]],["a20","chg",11,"chg",c20],["anew","nw",16,"new",ids("new")],
  ["chg","n20",11,"chg",c20],["chg","n18",1,"chg",["1315697"]],["rev","n18",1,"rev",["1315657"]],["nw","n20",10,"new",mig],["nw","n18",2,"new",["M-01","M-13"]],["nw","nfr",1,"new",["M-09"]],["nw","nqa",3,"new",["M-10","M-11","M-12"]]];
 const X=[175,560,960],col={del:"var(--del)",chg:"var(--chg)",new:"var(--new)",rev:"var(--violet)"};
 [0,1,2].forEach(c=>{let y=30;Object.values(N).filter(n=>n.c===c).forEach(n=>{n.y=y;n.h=n.v*U;n.o=0;n.i=0;y+=n.h+G})});
 let h="";
 L.forEach(([s,t,v,e,list])=>{const a=N[s],b=N[t],w=v*U,y0=a.y+a.o+w/2,y1=b.y+b.i+w/2;a.o+=w;b.i+=w;const x0=X[a.c]+W,x1=X[b.c],m=(x0+x1)/2;
  h+=`<path class="lk" d="M${x0} ${y0}C${m} ${y0} ${m} ${y1} ${x1} ${y1}" stroke="${col[e]}" stroke-width="${w-2}" data-tip="<b>${a.l} → ${b.l}</b>: ${v} ${v===1?"historia":"historias"}<br>${list.join(" · ")}"/>`});
 Object.values(N).forEach(n=>{const fill=n.e?col[n.e]:"var(--ink)";h+=`<rect x="${X[n.c]}" y="${n.y}" width="${W}" height="${n.h}" rx="4" fill="${fill}"/>`;
  const tx=n.c===0?X[n.c]-10:X[n.c]+W+10,anchor=n.c===0?"end":"start";
  h+=`<text x="${tx}" y="${n.y+n.h/2-2}" text-anchor="${anchor}">${n.l}</text><text class="s" x="${tx}" y="${n.y+n.h/2+13}" text-anchor="${anchor}">${n.v} ${n.v===1?"historia":"historias"}</text>`});
 h+=`<text class="s" x="${X[0]+W/2}" y="16" text-anchor="middle">PLAN VIGENTE · 22 + 16</text><text class="s" x="${X[1]+W/2}" y="16" text-anchor="middle">EFECTO</text><text class="s" x="${X[2]+W/2}" y="16" text-anchor="middle">PLAN FINAL · 29</text>`;
 svg.innerHTML=h;
})();

document.getElementById("comp").innerHTML=[["Plan vigente",[["1020",11,"var(--accent)"],["1018",11,"var(--alt)"]],22],["Plan final",[["1020",21,"var(--accent)"],["1018",4,"var(--alt)"],["Front",1,"var(--violet)"],["QA y op.",3,"var(--keep)"]],29]].map(([n,parts,tot])=>
 `<div class="cb"><div class="lbl"><b>${n}</b><span class="muted">${tot} historias</span></div><div class="bar">${parts.map(p=>`<div data-tip="${n} · ${p[0]}: ${p[1]} ${p[1]===1?"historia":"historias"}" style="flex:${p[1]};background:${p[2]}">${p[1]>=4?p[0]+" · "+p[1]:p[1]}</div>`).join("")}</div></div>`).join("")+
 `<div class="legend"><span><span class="sw" style="background:var(--accent)"></span>1020</span><span><span class="sw" style="background:var(--alt)"></span>1018</span><span><span class="sw" style="background:var(--violet)"></span>Front</span><span><span class="sw" style="background:var(--keep)"></span>QA y operación</span></div>`;

const cellH=a=>a.length?`<div class="cell">${a.map(pill).join("")}</div>`:`<div class="cell empty">—</div>`;
document.getElementById("egrid").innerHTML=`<div class="hd">Entidad</div><div class="hd m">Migración · OCP</div><div class="hd m">Migración · ACP</div><div class="hd r">Retroactividad · OCP</div><div class="hd r">Retroactividad · ACP</div>`+
 [["1 · Entrada, prestador y encabezado","Ruta, validaciones 400, códigos y hoja de precios",["M-OCP-1","1315670"],["M-ACP-1","1320786"],[],[]],
  ["2 · Grupo de prestaciones","Encabezado y detalle del grupo",["M-OCP-2"],["M-ACP-2"],["1315674"],["1320778"]],
  ["3 · Manual tarifario","Solo con precios propios",["M-OCP-3"],["M-ACP-3"],["1315695"],["1320782"]],
  ["4 · Línea de borrador y activación","Cierra el flujo de punta a punta",["M-OCP-4"],["M-ACP-4"],["1315687","1315643"],["1320780"]],
  ["5 · Prestador posterior","Fecha de inicio del prestador; su creación sigue en 1018",[],[],["1315638"],["1320785"]]]
 .map(r=>`<div class="ent"><b>${r[0]}</b><span>${r[1]}</span></div>`+r.slice(2).map(cellH).join("")).join("")+
 `<div class="sep"></div><div class="ent"><b>Cuentas Médicas</b><span>La creación ya está en 1020</span></div><div class="cell empty span2" style="grid-column:span 2">Sin migración</div><div class="cell span2" style="grid-column:span 2;font-size:12.5px;color:var(--ink-2)">Las mismas HT de retroactividad, sin esperar a la migración</div>`;

const F=[["0","Decisiones","Negocio y líder técnico: DEC-1 a DEC-6",["1315697"],"var(--keep)"],["1","Backport en 1018","En paralelo con la fase 2",["M-01"],"var(--alt)"],["2","Migración de Reclamaciones","Por flujo y entidad, más lo transversal de 1020",["M-OCP-1","M-OCP-2","M-OCP-3","M-OCP-4","M-ACP-1","M-ACP-2","M-ACP-3","M-ACP-4","1315670","1320786","M-07","M-08"],"var(--accent)"],["3","Conmutación","Toggle por ambiente en el front",["M-09"],"var(--violet)"],["4","Validación y activación","Paridad y toggle en PDN",["M-10","M-11"],"var(--new)"],["5","Retroactividad","Cada entidad empieza al terminar su migración; sale a PDN después de M-11",["1315674","1320778","1315695","1320782","1315687","1315643","1320780","1315638","1320785","M-12"],"var(--chg)"],["6","Retiro en 1018","Cuando el toggle esté estable",["M-13"],"var(--del)"]];
document.getElementById("road").innerHTML=F.map(f=>`<div class="stage" style="border-top:3px solid ${f[4]}"><div class="top"><span class="e">F${f[0]}</span><span class="nm">${f[1]}</span></div><div class="ds">${f[2]}</div><div class="ids">${f[3].map(pill).join("")}${f[0]==="0"?'<span class="idp keep">DEC-1…6</span>':""}</div></div>`).join("")+
 `<div class="stage" style="border-top:3px solid var(--violet)"><div class="top"><span class="e">·</span><span class="nm">Fuera de las fases</span></div><div class="ds">Revisión de alcance</div><div class="ids">${pill("1315657")}</div></div>`;

const short=id=>{const s=H[id].t.replace("Migrar OCP de Reclamaciones: ","Migrar OCP · ").replace("Migrar ACP de Reclamaciones: ","Migrar ACP · ");return s.length>58?s.slice(0,56)+"…":s};
const ptxt=id=>{const p=pts(id);return p===null?"":`<span class="wip" style="color:var(--new);background:transparent;padding-left:0">${p} pts</span>`};
const A=[["E0","Habilitador","Ruta de trabajo en 1018",["1315697"]],["E1","Prestador válido","OCP y ACP",["1315670","1320786","1315657"]],["E2","OCP retro sin manual propio","Grupo, línea y urgencias",["1315674","1315687","1315643","1315680","1315690","1323241"]],["E3","ACP retro sin manual propio","Grupo y línea",["1320778","1320780","1320779","1320781"]],["E4","Precios propios retroactivos","Manual tarifario",["1315695","1320782","1315696","1320783"]],["E5","Prestador posterior al servicio","Fecha de inicio del prestador",["1315638","1320785","1315635","1320784"]]];
const Nw=F.map(f=>["F"+f[0],f[1],"",f[3]]).concat([["·","Fuera de las fases","revisión de alcance",["1315657"]]]);
const card=id=>{const h=H[id],cl=h.e==="rev"?"keep":h.e;return `<div class="st ${cl}" data-tip="<b>${id}</b> · ${EF[h.e][0]}<br>${h.d}"><div class="id"><span><span class="ef">${EF[h.e][1]}</span><span class="idt">${id}</span></span><span class="cmp">${h.c}</span></div><div class="ti">${short(id)}</div>${h.w?'<span class="wip">En progreso</span>':""}${ptxt(id)}</div>`};
const board=(el,P)=>document.getElementById(el).innerHTML=P.map(s=>`<div class="bst"><div class="sh2"><span class="code2">${s[0]}</span><span class="name">${s[1]}</span><span class="desc">${s[2]}</span></div><div class="cards">${s[3].map(card).join("")}</div></div>`).join("");
board("bA",A);board("bN",Nw);

(function puntos(){
 const total=PLAN.reduce((s,id)=>s+(pts(id)||0),0),estim=PLAN.filter(id=>pts(id)!==null),tabSin=PLAN.filter(id=>pts(id)===null&&azOf(id)),prop=PLAN.filter(id=>!azOf(id));
 const sin=tabSin.length+prop.length,fecha=TABLERO.actualizado.replace("T"," ").replace("Z"," UTC");
 document.getElementById("psub").innerHTML=`Sincronizado con el campo «Puntos de esfuerzo» del tablero el ${fecha}. Solo suman las historias del plan que existen en Azure y están estimadas; las propuestas suman cuando se creen.`;
 const k=(n,l,c)=>`<div class="kpi"><div class="n" style="color:${c}">${n}</div><div class="l">${l}</div></div>`;
 document.getElementById("pk").innerHTML=k(total,"puntos de esfuerzo del plan en el tablero","var(--ink)")+k(estim.length,"historias estimadas","var(--new)")+k(sin,`historias sin estimación: ${tabSin.length} en el tablero y ${prop.length} propuestas`,"var(--chg)")+k(PLAN.length,`historias del plan (${estim.length} + ${sin})`,"var(--ink)");
 document.getElementById("pchk").textContent=`${estim.length} estimadas + ${sin} sin estimación = ${estim.length+sin} de ${PLAN.length}`;
 document.getElementById("pseg").innerHTML=[[estim.length,"var(--new)","Estimadas",estim],[tabSin.length,"var(--chg)","En el tablero, sin estimación",tabSin],[prop.length,"var(--keep)","Propuestas",prop]].filter(s=>s[0]).map(s=>`<div data-tip="<b>${s[2]}</b>: ${s[0]}<br>${s[3].join(" · ")}" style="flex:${s[0]};background:${s[1]}">${s[0]}</div>`).join("");
 document.getElementById("ptab").innerHTML=PLAN.filter(id=>azOf(id)).sort((a,b)=>(pts(b)??-1)-(pts(a)??-1)).map(id=>{const p=pts(id);return `<tr><td><b>${azOf(id)}</b>${id!==azOf(id)?`<div class="muted small">${id}</div>`:""}</td><td>${H[id].t}</td><td class="small">${est(id)}</td><td>${p===null?'<span class="chip c-chg"><i>…</i>sin estimar</span>':`<b>${p}</b>`}</td></tr>`}).join("")+`<tr><td colspan="3"><b>Total del plan en el tablero</b></td><td><b>${total}</b></td></tr>`;
 document.getElementById("pprop").innerHTML=prop.map(pill).join("");
 const cl=Object.keys(H).filter(k=>H[k].e==="del"),clp=cl.reduce((s,id)=>s+(pts(id)||0),0),cle=cl.filter(id=>pts(id)!==null).length;
 document.getElementById("pcl").textContent=`${clp} puntos en ${cle} de las ${cl.length} historias que se cierran; no forman parte del total del plan.`;
 document.getElementById("pclids").innerHTML=cl.map(id=>`<span class="idp del" data-tip="<b>${id}</b> · ${H[id].t}"><i>×</i>${id} · ${pts(id)===null?"sin estimar":pts(id)+" pts"}</span>`).join("");
})();

const ord=["del","chg","rev","new"],rows=Object.entries(H).sort((a,b)=>ord.indexOf(a[1].e)-ord.indexOf(b[1].e)||a[0].localeCompare(b[0]));
let f="todas";
const tab=()=>document.getElementById("tab").innerHTML=rows.filter(r=>f==="todas"||r[1].e===f).map(([id,h])=>{const p=pts(id);return `<tr><td><b>${id}</b>${h.w?'<br><span class="wip">En progreso</span>':""}</td><td>${h.t}</td><td>${h.c}</td><td><span class="chip ${EF[h.e][2]}"><i>${EF[h.e][1]}</i>${EF[h.e][0]}</span></td><td class="small">${h.f}</td><td>${h.d}</td><td>${p===null?'<span class="muted small">—</span>':`<b>${p}</b>`}</td></tr>`}).join("");
const cnt=k=>rows.filter(r=>r[1].e===k).length;
document.getElementById("fil").innerHTML=[["todas",`Todas · ${rows.length}`],...ord.map(k=>[k,`${EF[k][0]} · ${cnt(k)}`])].map(([k,l])=>`<button data-k="${k}" class="${k==="todas"?"on":""}">${l}</button>`).join("");
document.querySelectorAll("#fil button").forEach(b=>b.onclick=()=>{f=b.dataset.k;document.querySelectorAll("#fil button").forEach(x=>x.classList.toggle("on",x===b));tab()});tab();

(function dag(){
 const svg=document.getElementById("dag"),W=150,Hh=44,X=[90,262,434,606,778];
 const n={
  "R-OCP-1":[X[0],20,"chg","1315670","va junto"],"R-OCP-2":[X[1],20,"chg","1315674","retro grupo"],"R-OCP-3":[X[2],20,"chg","1315695","retro manual"],"R-OCP-4":[X[3],20,"chg","1315687 · 1315643","retro línea y urgencias"],"R-OCP-5":[X[4],20,"chg","1315638","retro prestador"],
  "M-OCP-1":[X[0],100,"new","M-OCP-1","entrada"],"M-OCP-2":[X[1],100,"new","M-OCP-2","grupo"],"M-OCP-3":[X[2],100,"new","M-OCP-3","manual"],"M-OCP-4":[X[3],100,"new","M-OCP-4","línea y /build"],
  "M-ACP-1":[X[0],220,"new","M-ACP-1","entrada"],"M-ACP-2":[X[1],220,"new","M-ACP-2","grupo"],"M-ACP-3":[X[2],220,"new","M-ACP-3","manual"],"M-ACP-4":[X[3],220,"new","M-ACP-4","línea y /build"],
  "R-ACP-1":[X[0],300,"chg","1320786","va junto"],"R-ACP-2":[X[1],300,"chg","1320778","retro grupo"],"R-ACP-3":[X[2],300,"chg","1320782","retro manual"],"R-ACP-4":[X[3],300,"chg","1320780","retro línea"],"R-ACP-5":[X[4],300,"chg","1320785","retro prestador"],
  "M-01":[X[0],420,"new","M-01","backport 1018"],"M-07":[X[1],420,"new","M-07","resiliencia"],"M-08":[X[2],420,"new","M-08","exposición"],"M-09":[X[3],420,"new","M-09","toggle en el front"],
  "M-10":[960,160,"new","M-10","matriz de paridad"],"M-11":[1130,160,"new","M-11","activación en PDN"],"M-12":[1130,40,"new","M-12","retro desde Reclamaciones"],"M-13":[1130,300,"new","M-13","retiro en 1018"]};
 const T={"R-OCP-1":"1315670","R-OCP-2":"1315674","R-OCP-3":"1315695","R-OCP-4":"1315687","R-OCP-5":"1315638","R-ACP-1":"1320786","R-ACP-2":"1320778","R-ACP-3":"1320782","R-ACP-4":"1320780","R-ACP-5":"1320785"};
 const R=k=>[n[k][0]+W,n[k][1]+Hh/2],Lp=k=>[n[k][0],n[k][1]+Hh/2],Tp=k=>[n[k][0]+W/2,n[k][1]],Bp=k=>[n[k][0]+W/2,n[k][1]+Hh];
 const ed=(a,b,dash,t)=>{const [x0,y0]=a,[x1,y1]=b,m=(x0+x1)/2;return `<path class="ed${dash?" dash":""}" d="M${x0} ${y0}C${m} ${y0} ${m} ${y1} ${x1-4} ${y1}" marker-end="url(#am)"${t?` data-tip="${t}"`:""}/>`};
 const vd=(a,b,dash,t)=>{const [x0,y0]=a,[x1,y1]=b,s=y1<y0?4:-4;return `<path class="ed${dash?" dash":""}" d="M${x0} ${y0}L${x1} ${y1+s}" marker-end="url(#am)"${t?` data-tip="${t}"`:""}/>`};
 let h=`<defs><marker id="am" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>`;
 h+=`<text x="10" y="128" style="font-weight:800">OCP</text><text class="s" x="10" y="144">migración</text><text class="s" x="10" y="48">retro</text><text x="10" y="248" style="font-weight:800">ACP</text><text class="s" x="10" y="264">migración</text><text class="s" x="10" y="328">retro</text><text class="s" x="10" y="448">transversal</text>`;
 ["1 · Entrada","2 · Grupo","3 · Manual","4 · Línea","5 · Prestador"].forEach((s,i)=>h+=`<text class="s" x="${X[i]+W/2}" y="${i===4?82:186}" text-anchor="middle" style="font-weight:700">${s}</text>`);
 h+=`<g style="color:var(--ink-2)">`;
 ["OCP","ACP"].forEach(fl=>{for(let i=1;i<4;i++)h+=ed(R(`M-${fl}-${i}`),Lp(`M-${fl}-${i+1}`));
  const up=fl==="OCP";for(let i=1;i<=4;i++){const a=up?Tp(`M-${fl}-${i}`):Bp(`M-${fl}-${i}`),b=up?Bp(`R-${fl}-${i}`):Tp(`R-${fl}-${i}`);h+=vd(a,b,i===1,i===1?"Va junto con la entrada":"La retroactividad de la entidad espera a su migración")}
  h+=ed(R(`M-${fl}-4`),Lp(`R-${fl}-5`),0,"El prestador posterior espera al flujo completo");});
 h+=ed(R("M-OCP-4"),Lp("M-10"));h+=ed(R("M-ACP-4"),Lp("M-10"));
 h+=ed(R("M-08"),Lp("M-09"));h+=ed(R("M-09"),[n["M-10"][0]+30,n["M-10"][1]+Hh+4].map((v,i)=>v),0,"M-10 depende de M-09");
 h+=ed(R("M-10"),Lp("M-11"));h+=vd(Tp("M-11"),Bp("M-12"),0,"La retro sale a PDN después de M-11");h+=vd(Bp("M-11"),Tp("M-13"),1,"Toggle estable en PDN");
 h+=ed(R("R-OCP-5"),Lp("M-12"),1,"M-12 valida las HT de retroactividad desde Reclamaciones");
 h+=`</g>`;
 Object.entries(n).forEach(([k,[x,y,c,lab,s]])=>{const id=T[k]||k,tipT=H[id]?`<b>${k==="R-OCP-4"?"1315687 y 1315643":id}</b> · ${H[id].t}<br>${H[id].d}`:k;
  h+=`<g data-tip="${tipT.replace(/"/g,"&quot;")}"><rect class="nb ${c}" x="${x}" y="${y}" width="${W}" height="${Hh}" rx="11"/><text x="${x+12}" y="${y+19}">${lab}</text><text class="s" x="${x+12}" y="${y+35}">${s}</text></g>`});
 svg.innerHTML=h;
})();

document.getElementById("nuevasC").innerHTML=Object.entries(H).filter(([,h])=>h.e==="new").map(([id,h])=>`<div class="card nc"><div class="top"><span class="k">+ ${id}</span><span style="display:flex;gap:6px"><span class="chip">${h.c}</span><span class="chip">${h.f}</span></span></div><h3 style="margin:0">${h.t}</h3><p>${h.d}</p><div class="deps"><span class="chip ${h.o==="Artefacto"?"c-alt":"c-acc"}">${h.o==="Artefacto"?"Transversal del artefacto":"Reparte "+h.o+" del artefacto"}</span><span class="chip c-keep">sin puntos hasta crearse</span></div><div class="deps">Depende de ${h.dep.map(pill).join("")}</div></div>`).join("");

const PM=[["M-02 · Entrada de autorizaciones",["M-OCP-1","M-ACP-1"],"La ruta de cada flujo."],["M-03 · Validaciones comunes y errores 400",["M-OCP-1","M-ACP-1"],"Se implementan en la primera historia de entrada y la otra las reutiliza."],["M-04 · Reglas por dato en ACP",["M-ACP-1","M-ACP-4"],"Manual referente, contrato y red en la entrada; la línea con red en la línea de borrador."],["M-05 · Política CUPS en OCP",["M-OCP-3"],"Decisión SOAT o precios propios, como política del proceso."],["M-06 · Paridad de escritura en OHI",["M-OCP-2","M-ACP-2","M-OCP-3","M-ACP-3","M-OCP-4","M-ACP-4"],"Repartida por entidad."],["M-01, M-07 a M-13",["M-01","M-07","M-08","M-09","M-10","M-11","M-12","M-13"],"Sin cambio."],["P-02 a P-09 · plan v1 (24 nov)",["M-OCP-1","M-OCP-4","M-ACP-1","M-ACP-4"],"Misma división por entidad, ahora sobre las rutas aprobadas (P-02 a P-05 → M-OCP-1 a 4; P-06 a P-09 → M-ACP-1 a 4)."],["P-01, P-10, P-11 · plan v1",["M-OCP-1","M-ACP-1","M-08","M-09","M-10","M-11","M-13"],"P-01 se reparte en las entradas; P-10 en M-08 a M-11; P-11 es M-13."]];
document.getElementById("pmap").innerHTML=PM.map(p=>`<tr><td><b>${p[0]}</b></td><td><div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:4px">${p[1].map(pill).join("")}</div><span class="muted small">${p[2]}</span></td></tr>`).join("");

const REG=[["R-01","24 nov","Centralizar ACP/OCP en 1020: primero la creación, luego la retroactividad una sola vez"],["R-02","24 nov","Ninguna historia debe ser una migración total: división por entidad"],["R-03","24 nov","Toda historia existente enlazada a Azure; las nuevas, cuando se creen"],["R-04","25 nov","<b>Aprobado: 4 endpoints en 1020</b> (ACP y OCP × Cuentas Médicas y Reclamaciones) sobre un núcleo común"],["R-05","25 nov","Todos los ajustes y las historias nuevas, en la Feature 1299679"],["R-06","25 nov","Las tareas adicionales del artefacto, como propuestas de historia"],["R-07","25 nov","Sin cambios en el tablero hasta nueva indicación"],["R-08","25 nov","Base de paridad: PDN (master de 1018)"],["R-09","25 nov","Toggle por ambiente en el front; sin fachada en 1018"],["R-10","25 nov","Retroactividad solo en 1020; sale a PDN después de M-11"],["R-11","25 nov","La pre-decisión se queda en 1018"],["R-12","25 nov","Las rutas de 937-ms no cambian; Reclamaciones entra por /v1/salud/autorizaciones/…"],["R-13","25 nov","<b>Migración por flujo (ACP y OCP) y por entidad</b>, igual que la retroactividad"],["R-14","25 nov","<b>Primero se garantiza la creación de Reclamaciones; después, la retroactividad de cada entidad.</b> Cuentas Médicas solo necesita retroactividad"],["R-15","25 nov","Los puntos del plan son los del tablero; las propuestas suman cuando se creen"]];
document.getElementById("reg").innerHTML=REG.map(r=>`<div style="display:grid;grid-template-columns:52px 54px 1fr;gap:10px;padding:8px 0;border-bottom:1px solid var(--line);font-size:13.5px"><b>${r[0]}</b><span class="muted small">${r[1]}</span><span style="color:var(--ink-2)">${r[2]}</span></div>`).join("");
const DEC=[["DEC-1","Regla CUPS en OCP: unificar o política por proceso","Unificar en 1315643 si negocio lo acepta; si no, política en M-OCP-3","Negocio","M-OCP-3 · 1315643"],["DEC-2","Definiciones admitidas en ACP (SURACUPS y PROPIO)","Decidir con negocio antes de M-ACP-1","Negocio","M-ACP-1"],["DEC-3","Cómo identifica 1020 el proceso","Ruta propia. <b>Resuelta</b> con la aprobación de los 4 endpoints","Líder técnico","M-OCP-1 · M-ACP-1"],["DEC-4","Gateway y acceso por consumidor","Un acceso y una cuota por consumidor","Infraestructura","M-08"],["DEC-5","Reintentos ante 5xx en 1020","Pocos, con espera creciente y siempre con timeout","Líder técnico","M-07"],["DEC-6","Retroactividad parcial en develop de 1018","Revertirla: no está certificada y la definitiva vive en 1020","Líder técnico","M-01 · M-13"]];
document.getElementById("dec").innerHTML=DEC.map(d=>`<tr><td><b>${d[0]}</b></td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td><td class="small">${d[4]}</td></tr>`).join("");
const Q=[["Reintentos ante 5xx","DEC-5 (M-07)"],["Definiciones admitidas en ACP (D21)","DEC-2 (M-ACP-1)"],["Clasificación CUM en Reclamaciones","Al refinar 1315670 y 1320786"],["1320778 en progreso","Confirmar que cierra con su alcance de Cuentas Médicas y que su criterio de Reclamaciones queda después de M-ACP-2"],["Estimación de las historias","3 existentes sin puntos y 16 propuestas sin crear (sección 04)"]];
document.getElementById("qst").innerHTML=Q.map((q,i)=>`<div style="display:grid;grid-template-columns:26px 1fr 110px;gap:10px;align-items:start;padding:8px 0;border-bottom:1px solid var(--line);font-size:13.5px"><b class="muted">${i+1}</b><span><b>${q[0]}</b><br><span class="muted small">${q[1]}</span></span><span class="chip c-chg"><i>…</i>Pendiente</span></div>`).join("");
