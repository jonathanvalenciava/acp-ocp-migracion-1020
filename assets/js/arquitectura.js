const facts=[
 ["H1","Dos endpoints REST síncronos en 1018","Ninguna ruta interna los invoca; el consumidor es externo (casi seguro el front de autorizaciones). Responden 201 vacío.","RutaCrearPrestacionACP.java:98 · RutaCrearConvenioOCP.java:119"],
 ["H2","Los contratos de 1020 son copia de los de 1018","ACP: 1020 agrega dos opcionales. OCP: 1020 no tiene codigoClaseServicio y usa definicion en vez de manual.","SolicitudConvenioAcpDto · ConvenioNoEstandarDto"],
 ["H3","Contrato tolerante y consumidor indiferente","Los DTO de 1020 ignoran campos desconocidos; 937-ms descarta la respuesta y se traga los errores.","ConvenioNoEstandarRepositoryAdapter:12-38"],
 ["H4","Reglas comunes ya presentes en 1020","Porcentaje negociado (SOAT, +100), especialidad en el prestador, marca prestacionACP=S, GEN-ORA-00001.","CalcularPorcentajeNegociadoUseCase · PrestadorConvenioUseCase:50"],
 ["H5","Sin puntos de extensión por proceso","Cableado manual en AppContext; reglas de Cuentas Médicas mezcladas con las genéricas.","AppContext.java:31-166 · DefinicionManualTarifacionOcpUseCase:38"],
 ["H6","El discriminador origen ya se intentó","Vivió el 2 y el 3 de oct sin commit; se retiró por una razón de consumidores, no por un defecto técnico.","PEND-OCP-02"],
 ["H7","Mismas entidades, mismos códigos","Duplicar los constructores de códigos ya creó entidades paralelas en OHI.","PEND-OCP-05 · decisión 5 nov"],
 ["H8","Retroactividad de 1018 fuera de master","Está en quality/develop; la de la fecha del prestador (HT-973508) solo en una rama feature; la búsqueda ampliada ACP se descarta.","RutaCrearPrestacionACP.java:130"],
 ["H9","Las validaciones previas viven en lugares distintos","En CM, 14 de ellas están en el orquestador 937-ms; en Autorizaciones, en consultas de 1018 que usa el front y dentro de los flujos ACP/OCP.","insumos/validaciones-previas-*.md"]];
document.getElementById("facts").innerHTML=facts.map(f=>`<div class="card fact"><div class="fi">${f[0]}</div><div><h3>${f[1]}</h3><p>${f[2]}</p><code>${f[3]}</code></div></div>`).join("");

const ctr={
 ACP:{p18:"POST /v1/salud/crear-prestacion-acp",p20:"POST /v1/salud/crear-prestacion-acp",r18:"201 vacío",r20:"201 {mensaje, esQuirurgico}",
  f:[["codigoPrestacion","b"],["manualPrestacion","b"],["codigoPrestador","b"],["fechaPrestacionServicio","b"],["numeroContrato","b"],["tarifa","b"],["manualTarifario","b"],["porcentaje","b"],["clasificacionPrestador","20"],["manualReferente","20"]]},
 OCP:{p18:"POST /v1/salud/convenio-ocp",p20:"POST /v1/salud/crear-convenio",r18:"201 vacío",r20:"200 vacío",
  f:[["codigoPrestador","b"],["prestacion.codigo","b"],["prestacion.manual → definicion","r"],["fechaPrestacionServicio","b"],["tarifa","b"],["manualTarifacion","b"],["porcentaje","b"],["tipoPrestador","b"],["codigoContrato","b"],["descripcionContrato","b"],["esQuirurgico","b"],["codigoEspecialidad","b"],["esZonaEspecial","b"],["esGrupoZonaEspecialCMoQXRec25","b"],["esGrupoZonaEspecialADRec15","b"],["codigoClaseServicio","18"]]}};
const st={b:["Igual","c-new","="],"20":["Solo 1020","c-acc","+"],"18":["Solo 1018","c-alt","−"],r:["Renombrado","c-chg","↔"]};
const col={b:"var(--new)","20":"var(--accent)","18":"var(--alt)",r:"var(--chg)"};
document.getElementById("ctrs").innerHTML=Object.entries(ctr).map(([k,c])=>{
 const n=c.f.length,cnt={};c.f.forEach(x=>cnt[x[1]]=(cnt[x[1]]||0)+1);
 const pct=Math.round(100*(cnt.b||0)/n);
 return `<div class="card"><div class="panel-h"><h3>${k}</h3><span class="chip c-new"><i>${pct}%</i>campos iguales</span></div>
 <div class="meter" style="margin-bottom:16px">${["b","r","20","18"].filter(s=>cnt[s]).map(s=>`<div data-tip="${st[s][0]}: ${cnt[s]} de ${n} campos" style="flex:${cnt[s]};background:${col[s]}"></div>`).join("")}</div>
 <div class="endpoint"><div class="r"><span class="k">1018</span><code>${c.p18}</code><span class="muted">${c.r18}</span></div><div class="r"><span class="k">1020</span><code>${c.p20}</code><span class="muted">${c.r20}</span></div></div>
 <div class="ctr h"><span>Campo</span><span>1018</span><span>1020</span><span>Estado</span></div>
 ${c.f.map(([f,s])=>`<div class="ctr"><span class="f">${f}</span><span class="tick ${s==="20"?"n":"y"}">${s==="20"?"—":"✓"}</span><span class="tick ${s==="18"?"n":"y"}">${s==="18"?"—":"✓"}</span><span><span class="chip ${st[s][1]}"><i>${st[s][2]}</i>${st[s][0]}</span></span></div>`).join("")}</div>`}).join("");

const cls={pro:["Propia del proceso","var(--alt)","c-alt","!"],igual:["Igual en ambos","var(--new)","c-new","="],brecha:["Brecha, defecto o técnica","var(--accent)","c-acc","↻"],ctr:["Contrato o consumidor","var(--keep)","c-keep","·"]};
const D=[
 ["D1","Contrato OCP","/convenio-ocp; prestacion.manual; codigoClaseServicio obligatorio (quality)","/crear-convenio; prestacion.definicion; sin clase","ctr","Alias manual → definicion y codigoClaseServicio opcional"],
 ["D2","CUPS: SOAT o precios propios","Clase URGE o tarifa 0","Homologación SOAT (SOAT_PTS / SOAT_GQX)","pro","Política por proceso en la migración; 1315643 la unifica"],
 ["D3","Zona especial","Bandera del consumidor; se consulta aunque no sea CUPS","Solo si el prestador es de zona especial","brecha","Confirmar en la matriz de paridad"],
 ["D4","Manual referente ACP","Se consulta en OHI (área 10-9-1)","Llega en manualReferente","brecha","Regla por dato: si no llega, se consulta"],
 ["D5","Porcentaje ACP","SOAT 100 y +100","Igual (CalcularPorcentajeNegociadoUseCase)","igual","Reutilizar"],
 ["D6","Red del prestador ACP","providergroupaffiliations + C_PRESTADOR_EXISTE_RED","Modela providerGroup; constante sin uso","brecha","Cerrar para ambos procesos"],
 ["D7","Búsqueda de la línea de borrador","Grupo + prestador (+ contrato y manual en ACP)","Por código","brecha","Unificar en 1020 y probar que encuentra la misma línea"],
 ["D8","Cláusula activa OCP","PUT providerpricingclauses + build","No existe","brecha","Decidir en 1315687 para ambos procesos"],
 ["D9","Forma del PUT de la línea","Campos parciales sin {\"value\":…}","Forma del legacy sin nulos","brecha","Prevalece 1020"],
 ["D10","Idempotencia","ACP: 409 / «ya existe»","GEN-ORA-00001","brecha","Prevalece 1020; confirmar el error de OHI"],
 ["D11","Reintentos 5xx","OCP: 5 con backoff; ACP: ninguno","Ninguno","brecha","Decisión transversal (DEC-5)"],
 ["D12","Especialidad","PATCH al prestador; 400 si falta","La registra; si falta, 500","igual","Reutilizar y responder 400"],
 ["D13","Marca prestacionACP=S","La escribe ACP; la lee /prestadoresconvenio","La escribe","igual","Requisito: no romperla"],
 ["D15","Respuesta","201 vacía","ACP 201 con cuerpo; OCP 200","ctr","Unificar a 201"],
 ["D16","Sufijos MED/MYM","ACP agrega ambos; OCP: MYM prevalece","MYM prevalece","igual","Misma nomenclatura (decisión 5 nov)"],
 ["D17","Contrato ACP sin convenio vigente","numeroIdSinSufijo + 0 + sucursal","DA2 corregido","brecha","Confirmar en la matriz de paridad"],
 ["D18","Fallo de ACP/OCP","Lo decide el front","La radicación continúa (937-ms)","ctr","Fuera de 1020"],
 ["D19","Existencia del prestador","400 en ACP y OCP (V18-04, V18-21)","1020 no valida: en OCP sigue creando; 937-ms omite sin error (VCM-05)","brecha","Validar en 1020 para ambos (400)"],
 ["D20","Contrato 10-9-1 y numeroContrato","ACP lo resuelve en el flujo y filtra convenios (V18-05, V18-08)","Lo resuelve 937-ms y lo envía (VCM-11, VCM-14)","brecha","Regla por dato: si no llega, 1020 lo consulta"],
 ["D21","Definiciones admitidas en ACP","Admite SURACUPS y *PROPIO* (V18-13)","Solo CUPS o CUM (VCM-17)","pro","Decisión de negocio: unificar o pasar a la política (por confirmar)"],
 ["D22","Manual tarifario no soportado","400 «no configurado» (V18-12)","Excepción (500)","brecha","400 para ambos"],
 ["D23","Contrato de errores","400 con mensajes que el front interpreta","500 en DTO y especialidad (VCM-15, VCM-21)","ctr","Conservar códigos y mensajes de 1018; 400 para ambos"],
 ["D24","Pre-decisión ACP/OCP","El front consulta endpoints de 1018 (V18-28 a 40)","La hace 937-ms (VCM-08 a 13)","ctr","Se queda en el consumidor: en 1018 para Autorizaciones"],
 ["D25","Formato de la fecha","400 con dd/MM/yyyy tolerante (V18-06)","Solo @NotBlank","brecha","Validar el formato en 1020 (400)"]];
const tv={comun:["Común","c-new","="],dato:["Por dato","c-acc","↻"],pol:["Política","c-alt","!"],cons:["Consumidor","c-keep","·"],neg:["Decisión de negocio","c-chg","?"]};
const V=[
 ["Contrato de entrada y errores","En el flujo, 400","Errores ERROR-OHI","1020: 500","comun","400 con los mensajes de 1018 (D23)"],
 ["Existencia del prestador","En el flujo, 400","Error","937-ms omite; 1020 no valida","comun","400 (D19)"],
 ["Sede principal y clasificación","No","ERROR-OHI-016/017/029","937-ms","cons","Se queda en el consumidor de CM"],
 ["Afiliación a la red","En el flujo ACP (cambia el contrato) y en la pre-decisión","Filtro de contractedproviders","937-ms","dato","Si el contrato no llega resuelto (D6)"],
 ["Prestación ya convenida","Pre-decisión (front)","Sí","937-ms","cons","Se queda en el consumidor"],
 ["Contrato 10-9-1 y manual referente","En el flujo ACP","Sí","937-ms lo envía","dato","Si no llega (D4, D20)"],
 ["Decisión ACP u OCP","Pre-decisión (front)","Sí","937-ms","cons","Se queda en el consumidor (D24)"],
 ["Zona especial","El front envía la bandera","Sí","937-ms envía la bandera","cons","Igual: dato de entrada"],
 ["Definiciones admitidas en ACP","SURACUPS y PROPIO admitidos","—","1020: solo CUPS/CUM","neg","Unificar o política (D21)"],
 ["Clasificación CUM del prestador","No la valida","ACP 3 y OCP 4","1020 ACP 3; OCP eliminada","neg","Decidir en 1315670/1320786"],
 ["Especialidad CUPS en OCP","400 + PATCH","No","937-ms la completa; 1020: 500 + registro","comun","400 + registro"],
 ["Clase de servicio (urgencias)","URGE o tarifa 0","Homologación","Homologación","pol","Política hasta 1315643 (D2)"],
 ["Manual tarifario soportado","400","—","Excepción","comun","400 (D22)"],
 ["Fechas","Formato (400)","Nula: ERROR-OHI-024; futura: se omite","937-ms; 1020: solo @NotBlank","comun","Formato 400 (D25); futura en el consumidor"],
 ["Exención RIPS y líneas que entran","No aplica","Sí","937-ms","cons","Se queda en el consumidor de CM"]];
let vf="todas";
const vt=()=>document.getElementById("vtab").innerHTML=V.filter(v=>vf==="todas"||v[4]===vf).map(v=>`<tr><td><b>${v[0]}</b></td><td>${v[1]}</td><td>${v[2]}</td><td>${v[3]}</td><td><span class="chip ${tv[v[4]][1]}"><i>${tv[v[4]][2]}</i>${tv[v[4]][0]}</span><div class="muted small" style="margin-top:4px">${v[5]}</div></td></tr>`).join("");
document.getElementById("vfil").innerHTML=[["todas","Todas · "+V.length],...Object.keys(tv).map(k=>[k,tv[k][0]+" · "+V.filter(v=>v[4]===k).length])].map(([k,l])=>`<button data-k="${k}" class="${k==="todas"?"on":""}">${l}</button>`).join("");
document.querySelectorAll("#vfil button").forEach(b=>b.onclick=()=>{vf=b.dataset.k;document.querySelectorAll("#vfil button").forEach(x=>x.classList.toggle("on",x===b));vt()});vt();
const order=["pro","igual","brecha","ctr"],cnt={};D.forEach(d=>cnt[d[4]]=(cnt[d[4]]||0)+1);
document.getElementById("seg").innerHTML=order.map(k=>`<div data-tip="<b>${cls[k][0]}</b>: ${cnt[k]} · ${D.filter(d=>d[4]===k).map(d=>d[0]).join(", ")}" style="flex:${cnt[k]};background:${cls[k][1]}">${cnt[k]}</div>`).join("");
document.getElementById("seglab").innerHTML=order.map(k=>`<div style="flex:${cnt[k]}"><b>${cls[k][0]}</b>${D.filter(d=>d[4]===k).map(d=>d[0]).join(" · ")}</div>`).join("");
const DH={D1:"M-OCP-1",D2:"DEC-1 · M-OCP-3 o 1315643",D3:"M-OCP-2 · M-10",D4:"M-ACP-1",D5:"Reutilizar (M-ACP-1)",D6:"M-ACP-1 · M-ACP-4",D7:"M-OCP-4 · M-ACP-4",D8:"M-OCP-4",D9:"M-OCP-4",D10:"M-OCP-2 · M-ACP-2",D11:"DEC-5 · M-07",D12:"M-OCP-1 · M-ACP-1",D13:"M-ACP-2",D15:"M-OCP-4 · M-ACP-4",D16:"M-OCP-3 · M-ACP-3",D17:"M-ACP-1",D18:"Fuera de 1020",D19:"M-OCP-1 · M-ACP-1",D20:"M-ACP-1",D21:"DEC-2 · M-ACP-1",D22:"M-OCP-1 · M-ACP-1",D23:"M-OCP-1 · M-ACP-1",D24:"1018 (M-13 la conserva)",D25:"M-OCP-1 · M-ACP-1"};
let df="todas";
const dt=()=>document.getElementById("dtab").innerHTML=D.filter(d=>df==="todas"||d[4]===df).map(d=>`<tr><td><b>${d[0]}</b></td><td>${d[1]}</td><td>${d[2]}</td><td>${d[3]}</td><td><span class="chip ${cls[d[4]][2]}"><i>${cls[d[4]][3]}</i>${cls[d[4]][0]}</span></td><td>${d[5]}</td><td><b>${DH[d[0]]||"—"}</b></td></tr>`).join("");
document.getElementById("dfil").innerHTML=[["todas","Todas"],...order.map(k=>[k,cls[k][0]])].map(([k,l])=>`<button data-k="${k}" class="${k==="todas"?"on":""}">${l}</button>`).join("");
document.querySelectorAll("#dfil button").forEach(b=>b.onclick=()=>{df=b.dataset.k;document.querySelectorAll("#dfil button").forEach(x=>x.classList.toggle("on",x===b));dt()});dt();

const crit=[
 ["Reutilización",2,5,"A copia orquestadores o depende de compartirlos","Núcleo único; la variación es una política"],
 ["Riesgo sobre entidades de OHI",2,5,"Dos constructores de códigos posibles","Un solo constructor de códigos"],
 ["Contrato",2,5,"Dos contratos casi idénticos y choque de path ACP","Un contrato por flujo con campos opcionales"],
 ["Compatibilidad con 937-ms",5,5,"Sin cambio","Sin cambio (valor por defecto)"],
 ["Tratamiento de divergencias",2,4,"Cada ruta arrastra su variante","Obliga a unificar o pasar a política"],
 ["Retroactividad",3,5,"Una o dos veces según se comparta el núcleo","Una sola vez para ambos procesos"],
 ["Cobertura de ramas",2,4,"Con copia se cubre todo dos veces","Ramas aisladas en políticas pequeñas"],
 ["Gateway y observabilidad",5,3,"Autorizar y medir por ruta","Proceso en logs; sin restricción por proceso"],
 ["Aislamiento entre procesos",5,3,"Natural","Depende de la disciplina de la política"]];
(function(){
 const svg=document.getElementById("dumb"),L=300,R=1060,T=40,rh=42,x=v=>L+(v-1)*(R-L)/4;let h="";
 [1,2,3,4,5].forEach(v=>{h+=`<line class="gridl" x1="${x(v)}" x2="${x(v)}" y1="${T-14}" y2="${T+rh*crit.length-14}"/><text class="ax" x="${x(v)}" y="${T-22}" text-anchor="middle">${v}</text>`});
 crit.forEach((c,i)=>{const y=T+i*rh+8,a=x(c[1]),b=x(c[2]);
  h+=`<text x="${L-18}" y="${y+4}" text-anchor="end">${c[0]}</text>`;
  if(a!==b)h+=`<line class="bar" x1="${Math.min(a,b)}" x2="${Math.max(a,b)}" y1="${y}" y2="${y}"/>`;
  const off=a===b?7:0;
  h+=`<g data-tip="<b>A · ${c[1]}</b> — ${c[3]}"><circle cx="${a-off}" cy="${y}" r="16" fill="transparent"/><circle cx="${a-off}" cy="${y}" r="8" fill="var(--alt)" stroke="var(--surface)" stroke-width="2"/></g>`;
  h+=`<g data-tip="<b>B · ${c[2]}</b> — ${c[4]}"><circle cx="${b+off}" cy="${y}" r="16" fill="transparent"/><circle cx="${b+off}" cy="${y}" r="8" fill="var(--accent)" stroke="var(--surface)" stroke-width="2"/></g>`;
  if(i===0){h+=`<text x="${a}" y="${y-14}" text-anchor="middle" style="fill:var(--ink);font-weight:650">A</text><text x="${b}" y="${y-14}" text-anchor="middle" style="fill:var(--ink);font-weight:650">B</text>`}});
 const sa=crit.reduce((s,c)=>s+c[1],0),sb=crit.reduce((s,c)=>s+c[2],0),yt=T+crit.length*rh+18;
 h+=`<text x="${L-18}" y="${yt}" text-anchor="end" style="fill:var(--ink);font-weight:700">Total (de 45)</text><text x="${L}" y="${yt}" style="fill:var(--ink);font-weight:700">A ${sa} · B ${sb}</text>`;
 svg.innerHTML=h;
})();
