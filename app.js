"use strict";
/* Arsenal 前端 — 展现层唯一文件。
   纪律：data/ 只读；无结构化依据的推断必须在界面上标注；无数据处诚实留空。 */

/* ================= i18n ================= */
const I18N = {
zh:{
  subtitle:"军火库 · 调度台账",
  tabStatus:"状态", tabMesh:"Mesh", tabMatch:"Match", tabOps:"编排",
  backLatest:"回到最新", dTitle:"Mesh 版本历史",
  latest:"最新", compare:"对比", pickTwo:"再选一个版本进行对比", diffTitle:"版本对比",
  addedNodes:"新增节点", removedNodes:"移除节点", changedNodes:"属性变化",
  addedEdges:"新增关系", removedEdges:"移除关系", noDiff:"两版完全一致",
  viewingHist:"正在查看历史版本", notLatest:"（非最新）", nodes:"节点", edges:"关系",
  typeNames:{container:"容器",program:"程序",network:"网络",credential:"凭证"},
  statusNames:{active:"正常",degraded:"降级",planned:"规划中",retired:"已退役",unverified:"未核验"},
  relNames:{runs_on:"运行于",auth_with:"鉴权",connects_via:"经由连接",serves:"服务",hosts:"托管",
    routes_to:"路由至",monitors:"监控",migrates_to:"迁移至",depends_on:"依赖"},
  attrNames:{tier:"层级",ip:"内网 IP",public_ip:"公网 IP",note:"备注",role:"职责",billing:"计费",where:"存放位置"},
  // status board
  sbMeshVer:"Mesh 版本", sbNodesEdges:"节点 / 关系", sbHealth:"节点健康",
  sbLastRun:"最近一次 Run", sbDeviation:"偏差记录", sbWatch:"值得关注",
  sbUpdated:"更新于", sbHealthy:"正常", sbDegraded:"降级", sbPlanned:"规划中",
  sbDevUnit:"条", sbDevSub:"最近 run 的 deviation 条目",
  sbWatchPlanned:"规划", sbWatchDegraded:"降级",
  sbRecentRun:"最近 Run 摘要", sbRecentLog:"调度动态", sbChangelog:"版本变更",
  sbGoMesh:"进入 Mesh", sbGoMatch:"进入 Match", sbGoOps:"查看全部",
  sbRunDev:"偏差", sbRunDecisions:"关键决策",
  runStatus:{completed:"已完成",running:"进行中"},
  noRuns:"暂无 Match Run",
  footSrc:"数据源：data/*.json（前端只读）",
  // node panel
  npStatus:"状态", npRelations:"关系", npInner:"内部程序", npClose:"关闭",
  npCredentialNote:"凭证只登记名称、状态与存放位置，不显示值。",
  // mesh view
  meshTitle:"资源拓扑",
  meshLayerContainer:"容器（运行环境）", meshLayerNetwork:"网络（连接通道）",
  meshLayerCredential:"凭证（只记名称）", meshChains:"部署与访问链路",
  meshTier:{T0:"T0 · 自有设备",T1:"T1 · 自有 VPS",T2:"T2 · 外部基础设施"},
  meshNoNodes:"该层暂无节点",
  meshProgramsInside:"个程序", meshChainTypes:{routes_to:"路由",serves:"服务",migrates_to:"迁移",hosts:"托管",monitors:"监控",depends_on:"依赖"},
  // match view
  mTitle:"计划 vs 实际",
  mRunList:"Run 列表", mPlanned:"计划", mActual:"实际",
  mSteps:"步", mStarted:"开始", mEnded:"结束", mTask:"任务",
  mMeshLock:"Mesh 版本",
  mUnlocked:"未锁定（run 数据无 mesh_version 字段）",
  mSyncedAt:"同步时 registry",
  mLegendSolid:"实际步骤（实心）", mLegendPlanned:"计划步骤（虚线）",
  mLegendAligned:"计划≈实际（同心，对齐为推断）", mLegendDev:"偏差 / 计划外",
  mLegendSkipped:"被短路的计划",
  mInferBanner:"计划 ↔ 实际的对齐由文本相似度推断，无结构化依据；凡标注「推断」处均不得视为确定结论。",
  mInfer:"推断", mAligned:"对齐", mUnplanned:"计划外", mSkipped:"被短路",
  mForkTo:"分叉至", mForkFrom:"短路自",
  mDeviation:"偏差（按原数据呈现）", mDecisions:"关键决策", mLessons:"经验",
  mFinalOutput:"最终产出", mEmptyActual:"该 run 暂无实际执行记录",
  mPhaseFold:"个连续对齐步骤（点击展开）",
  mPlannedBy:"计划由", mAt:"于",
  dAction:"动作", dExecutor:"执行者", dEnv:"环境", dVia:"经由", dCredential:"凭证（仅名称）",
  dOutput:"输出", dTime:"时间", dDecidedBy:"决策者", dQuestion:"问题", dOptions:"选项", dRationale:"理由",
  mDecisionJev:"JEV 仲裁", dDecision:"决策", heroSub:"调度中枢",
  // ops view
  opsTitle:"编排总览",
  opsPrinciples:"连接原则", opsFallback:"降级梯", opsDecisionTree:"决策树",
  opsLayers:"五层模型", opsPaths:"派工路径", opsProtocol:"Inbox/Outbox 协议",
  opsDispatchPrinciples:"调度原则", opsTopology:"派工拓扑", opsHub:"中枢",
  opsConfusing:"易混淆点", opsContainerModel:"容器/程序模型",
  opsRuntimes:"Runtimes · 执行器", opsCloud:"云服务", opsTailnet:"Tailnet 设备",
  opsPlatforms:"托管平台", opsSubscriptions:"订阅", opsHarness:"Harness 角色",
  opsProjects:"项目", opsDispatchLog:"Dispatch Log",
  opsPathDirect:"直连", opsPathVia:"中转",
  thName:"名称", thTier:"层级", thBilling:"计费", thFits:"适用", thVia:"通道", thNote:"备注",
  thStatus:"状态", thQuota:"配额", thRole:"角色", thDesc:"说明", thPath:"路径",
  thCredential:"凭证（仅名称）", thWhere:"存放位置", thDate:"日期", thEvent:"事件", thExecutor:"执行者",
  showMore:"展开全部", showLess:"收起",
  since:"始于",
},
en:{
  subtitle:"Arsenal · Dispatch Ledger",
  tabStatus:"Status", tabMesh:"Mesh", tabMatch:"Match", tabOps:"Ops",
  backLatest:"Back to latest", dTitle:"Mesh version history",
  latest:"latest", compare:"Compare", pickTwo:"Pick another version to compare", diffTitle:"Version diff",
  addedNodes:"Nodes added", removedNodes:"Nodes removed", changedNodes:"Nodes changed",
  addedEdges:"Edges added", removedEdges:"Edges removed", noDiff:"The two versions are identical",
  viewingHist:"Viewing historical version", notLatest:"(not latest)", nodes:"nodes", edges:"edges",
  typeNames:{container:"Containers",program:"Programs",network:"Networks",credential:"Credentials"},
  statusNames:{active:"active",degraded:"degraded",planned:"planned",retired:"retired",unverified:"unverified"},
  relNames:{runs_on:"runs on",auth_with:"auth with",connects_via:"connects via",serves:"serves",hosts:"hosts",
    routes_to:"routes to",monitors:"monitors",migrates_to:"migrates to",depends_on:"depends on"},
  attrNames:{tier:"tier",ip:"LAN IP",public_ip:"public IP",note:"note",role:"role",billing:"billing",where:"stored in"},
  sbMeshVer:"Mesh version", sbNodesEdges:"Nodes / edges", sbHealth:"Node health",
  sbLastRun:"Latest run", sbDeviation:"Deviation entries", sbWatch:"Watch list",
  sbUpdated:"updated", sbHealthy:"active", sbDegraded:"degraded", sbPlanned:"planned",
  sbDevUnit:"", sbDevSub:"deviation entries of the latest run",
  sbWatchPlanned:"planned", sbWatchDegraded:"degraded",
  sbRecentRun:"Latest run digest", sbRecentLog:"Dispatch activity", sbChangelog:"Version changelog",
  sbGoMesh:"Open Mesh", sbGoMatch:"Open Match", sbGoOps:"View all",
  sbRunDev:"deviations", sbRunDecisions:"decisions",
  runStatus:{completed:"completed",running:"running"},
  noRuns:"No match runs yet",
  footSrc:"Source: data/*.json (read-only for the frontend)",
  npStatus:"Status", npRelations:"Relations", npInner:"Programs inside", npClose:"Close",
  npCredentialNote:"Credentials are listed by name, status and storage location only — never values.",
  meshTitle:"Resource topology",
  meshLayerContainer:"Containers (runtime environments)", meshLayerNetwork:"Networks (links)",
  meshLayerCredential:"Credentials (names only)", meshChains:"Deployment & access chains",
  meshTier:{T0:"T0 · own devices",T1:"T1 · own VPS",T2:"T2 · external infra"},
  meshNoNodes:"No nodes in this layer",
  meshProgramsInside:"programs", meshChainTypes:{routes_to:"route",serves:"serve",migrates_to:"migration",hosts:"hosting",monitors:"monitoring",depends_on:"dependency"},
  mTitle:"Planned vs Actual",
  mRunList:"Runs", mPlanned:"Planned", mActual:"Actual",
  mSteps:"steps", mStarted:"Started", mEnded:"Ended", mTask:"Task",
  mMeshLock:"Mesh version",
  mUnlocked:"not pinned (run data has no mesh_version field)",
  mSyncedAt:"registry at sync time",
  mLegendSolid:"Actual step (solid)", mLegendPlanned:"Planned step (dashed)",
  mLegendAligned:"planned≈actual (concentric; alignment is inferred)", mLegendDev:"deviation / unplanned",
  mLegendSkipped:"short-circuited plan",
  mInferBanner:"Planned ↔ actual alignment is inferred from text similarity with no structured evidence. Anything tagged “inferred” must not be read as a confirmed conclusion.",
  mInfer:"inferred", mAligned:"aligned", mUnplanned:"unplanned", mSkipped:"short-circuited",
  mForkTo:"forks to", mForkFrom:"short-circuits",
  mDeviation:"Deviation (rendered as recorded)", mDecisions:"Key decisions", mLessons:"Lessons",
  mFinalOutput:"Final output", mEmptyActual:"No actual execution recorded for this run",
  mPhaseFold:"consecutive aligned steps (click to expand)",
  mPlannedBy:"planned by", mAt:"at",
  dAction:"Action", dExecutor:"Executor", dEnv:"Environment", dVia:"Via", dCredential:"Credential (name only)",
  dOutput:"Output", dTime:"Time", dDecidedBy:"Decided by", dQuestion:"Question", dOptions:"Options", dRationale:"Rationale",
  mDecisionJev:"JEV arbitration", dDecision:"Decision", heroSub:"dispatch hub",
  opsTitle:"Orchestration overview",
  opsPrinciples:"Connection principles", opsFallback:"Fallback ladder", opsDecisionTree:"Decision tree",
  opsLayers:"Five-layer model", opsPaths:"Dispatch paths", opsProtocol:"Inbox/Outbox protocol",
  opsDispatchPrinciples:"Dispatch principles", opsTopology:"Dispatch topology", opsHub:"Hub",
  opsConfusing:"Commonly confused", opsContainerModel:"Container/program model",
  opsRuntimes:"Runtimes", opsCloud:"Cloud services", opsTailnet:"Tailnet devices",
  opsPlatforms:"Hosting platforms", opsSubscriptions:"Subscriptions", opsHarness:"Harness roles",
  opsProjects:"Projects", opsDispatchLog:"Dispatch log",
  opsPathDirect:"direct", opsPathVia:"via",
  thName:"Name", thTier:"Tier", thBilling:"Billing", thFits:"Fits", thVia:"Via", thNote:"Note",
  thStatus:"Status", thQuota:"Quota", thRole:"Role", thDesc:"Description", thPath:"Path",
  thCredential:"Credential (name only)", thWhere:"Stored in", thDate:"Date", thEvent:"Event", thExecutor:"Executor",
  showMore:"Show all", showLess:"Show less",
  since:"since",
}};
function detectLang(){
  try{
    const tz=(Intl.DateTimeFormat().resolvedOptions().timeZone||"");
    if(/^Asia\/(Shanghai|Chongqing|Harbin|Urumqi|Kashgar)/i.test(tz)) return "zh";
  }catch(e){}
  return String(navigator.language||"").toLowerCase().indexOf("zh")===0?"zh":"en";
}
let LANG=localStorage.getItem("arsenal-lang")||detectLang();
const t=k=>(I18N[LANG]&&I18N[LANG][k])||I18N.zh[k]||k;
function applyI18n(){
  document.querySelectorAll("[data-i]").forEach(el=>{ el.textContent=t(el.dataset.i); });
  document.getElementById("langbtn").textContent=LANG==="zh"?"EN":"中文";
  document.documentElement.lang=LANG==="zh"?"zh-CN":"en";
}

/* ================= helpers ================= */
function esc(s){ return String(s==null?"":s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function $(id){ return document.getElementById(id); }
function short(s,n){ s=String(s==null?"":s); return s.length>n?s.slice(0,n-1)+"…":s; }
function fmtTime(iso){
  if(!iso) return "—";
  const m=String(iso).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  return m?`${m[1]}-${m[2]}-${m[3]} ${m[4]}:${m[5]}`:String(iso);
}
function fmtDate(iso){
  if(!iso) return "—";
  const m=String(iso).match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m?`${m[1]}-${m[2]}-${m[3]}`:String(iso);
}
const STATUS_DOT={active:"sdot-ok",degraded:"sdot-warn",planned:"sdot-planned",retired:"sdot-none",unverified:"sdot-none"};
function dot(status){ return `<span class="statusdot ${STATUS_DOT[status]||"sdot-none"}"></span>`; }
function statusTag(status){
  const cls=status==="active"?"tag-ok":status==="degraded"?"tag-warn":status==="planned"?"tag-planned":"tag-planned";
  return `<span class="tag ${cls}">${esc(t("statusNames")[status]||status||"—")}</span>`;
}
const TYPE_COLOR={container:"var(--t-container)",program:"var(--t-program)",network:"var(--t-network)",credential:"var(--t-credential)"};

/* ================= data ================= */
const DB={versions:null,registry:null,meshVersionMeta:null,history:{},runsIndex:null,runs:{},
  connections:null,dispatchLog:null,dispatchPlan:null,harness:null,projects:null,
  runtimes:null,subscriptions:null,topology:null};
async function jget(p){ const r=await fetch(p); if(!r.ok) throw new Error(p+" "+r.status); return r.json(); }
async function jtry(p){ try{ return await jget(p); }catch(e){ return null; } }
async function loadData(){
  const [versions,registry,meshVersionMeta,runsIndex,connections,dispatchLog,
    dispatchPlan,harness,projects,runtimes,subscriptions,topology]=await Promise.all([
    jget("data/versions.json"), jget("data/mesh-registry.json"), jtry("data/mesh-version.json"),
    jtry("data/match-runs/index.json"), jtry("data/connections.json"), jtry("data/dispatch-log.json"),
    jtry("data/dispatch-plan.json"), jtry("data/harness.json"), jtry("data/projects.json"),
    jtry("data/runtimes.json"), jtry("data/subscriptions.json"), jtry("data/topology.json")]);
  DB.versions=versions; DB.registry=registry; DB.meshVersionMeta=meshVersionMeta;
  DB.runsIndex=runsIndex||{runs:[]};
  DB.connections=connections; DB.dispatchLog=dispatchLog; DB.dispatchPlan=dispatchPlan;
  DB.harness=harness; DB.projects=projects; DB.runtimes=runtimes;
  DB.subscriptions=subscriptions; DB.topology=topology;
  await Promise.all((DB.runsIndex.runs||[]).map(async m=>{
    DB.runs[m.file]=await jtry("data/match-runs/"+m.file);
  }));
}
function nodeById(reg,id){ return reg.nodes.find(n=>n.id===id); }

/* ================= version logic（以 registry 实测为准） ================= */
function currentMesh(){
  // registry 文件自身声明的 mesh_version 是事实源；versions.json 仅作元数据参照
  const regV=DB.registry.mesh_version;
  const metaV=DB.versions&&DB.versions.latest;
  const vm=(DB.versions.versions||[]).find(v=>v.version===regV);
  return {
    version:regV,
    updated_at:(vm&&vm.updated_at)||(DB.meshVersionMeta&&DB.meshVersionMeta.updated_at)||"",
    nodes:DB.registry.nodes.length,
    edges:DB.registry.edges.length,
    mismatch:metaV&&metaV!==regV?metaV:null,
  };
}
function runMeshVersion(run){
  // run 顶层 mesh_version 才是锁定版本；没有就诚实标“未锁定”。
  // _sync.mesh_version 只是同步动作发生时的 registry 版本，单独如实标注。
  if(run&&run.mesh_version) return {locked:true,v:run.mesh_version,sync:(run._sync||{}).mesh_version||null};
  return {locked:false,v:null,sync:(run&&run._sync||{}).mesh_version||null};
}

/* ================= runs helpers ================= */
function actualStepsOf(run){
  const ac=run.actual_chain, ch=run.chain;
  return ((ac&&ac.length?ac:null)||(ch&&ch.length?ch:null))||[];
}
function plannedStepsOf(run){ return run.planned_chain||[]; }
function deviationEntries(run){
  const d=run&&run.deviation; if(!d) return [];
  if(Array.isArray(d)) return d.filter(Boolean);
  const out=[];
  if(d.summary) out.push(d.summary);
  (d.nodes_added||[]).forEach(x=>out.push("＋ "+x));
  (d.nodes_removed||[]).forEach(x=>out.push("－ "+x));
  if(d.note) out.push(d.note);
  return out;
}
function decisionsOf(run){ return (run&&run.decisions)||[]; }
function lessonsOf(run){ return (run&&run.lessons)||[]; }
function latestRunFile(){
  const metas=(DB.runsIndex.runs||[]).filter(m=>DB.runs[m.file]);
  if(!metas.length) return null;
  const sorted=metas.slice().sort((a,b)=>{
    const ra=DB.runs[a.file], rb=DB.runs[b.file];
    const ta=(ra&&(ra.ended_at||ra.started_at))||a.started_at||"";
    const tb=(rb&&(rb.ended_at||rb.started_at))||b.started_at||"";
    return ta<tb?-1:ta>tb?1:0;
  });
  return sorted[sorted.length-1].file;
}

/* ================= status board ================= */
function renderStatus(){
  const box=$("view-status");
  const cm=currentMesh();
  const reg=DB.registry;
  const byType={}; reg.nodes.forEach(n=>{ byType[n.type]=(byType[n.type]||0)+1; });
  const byStatus={}; reg.nodes.forEach(n=>{ byStatus[n.status]=(byStatus[n.status]||0)+1; });
  const lf=latestRunFile();
  const run=lf?DB.runs[lf]:null;
  const runMeta=lf?(DB.runsIndex.runs||[]).find(m=>m.file===lf):null;
  const devN=run?deviationEntries(run).length:0;
  const planned=reg.nodes.filter(n=>n.status==="planned");
  const degraded=reg.nodes.filter(n=>n.status==="degraded");
  const tn=t("typeNames");
  const typeStr=["container","program","network","credential"]
    .map(ty=>`${tn[ty]} ${byType[ty]||0}`).join(" · ");

  const cells=[];
  cells.push(`<div class="cell clickable" data-go="drawer">
    <div class="cl">${esc(t("sbMeshVer"))}</div>
    <div class="cv">v${esc(cm.version)}</div>
    <div class="cs">${esc(t("sbUpdated"))} ${esc(fmtTime(cm.updated_at))}${cm.mismatch?` · ⚠ versions.json latest=${esc(cm.mismatch)}`:""}</div>
  </div>`);
  cells.push(`<div class="cell clickable" data-go="mesh">
    <div class="cl">${esc(t("sbNodesEdges"))}</div>
    <div class="cv">${cm.nodes} <small>/</small> ${cm.edges}</div>
    <div class="cs">${esc(typeStr)}</div>
  </div>`);
  cells.push(`<div class="cell clickable" data-go="mesh">
    <div class="cl">${esc(t("sbHealth"))}</div>
    <div class="cv">${byStatus.active||0} <small>/</small> <span style="color:var(--warn)">${byStatus.degraded||0}</span> <small>/</small> <span style="color:var(--planned)">${byStatus.planned||0}</span></div>
    <div class="cs">${esc(t("sbHealthy"))} / ${esc(t("sbDegraded"))} / ${esc(t("sbPlanned"))}</div>
  </div>`);
  if(run){
    const st=run.status||"";
    cells.push(`<div class="cell clickable" data-go="match" data-run="${esc(lf)}">
      <div class="cl">${esc(t("sbLastRun"))}</div>
      <div class="cv">#${esc(run.match_run||"")} <small>${esc(t("runStatus")[st]||st)}</small></div>
      <div class="cs">${esc(short(run.title||"",40))}</div>
      <div class="cs faint">${esc(fmtDate(run.ended_at||run.started_at))}</div>
    </div>`);
    cells.push(`<div class="cell clickable" data-go="match" data-run="${esc(lf)}">
      <div class="cl">${esc(t("sbDeviation"))}</div>
      <div class="cv">${devN} <small>${esc(t("sbDevUnit"))}</small></div>
      <div class="cs">${esc(t("sbDevSub"))}</div>
    </div>`);
  }else{
    cells.push(`<div class="cell"><div class="cl">${esc(t("sbLastRun"))}</div><div class="cv">—</div><div class="cs">${esc(t("noRuns"))}</div></div>`);
  }
  const watchItems=[];
  planned.forEach(n=>watchItems.push(
    `<li><span class="tag tag-planned">${esc(t("sbWatchPlanned"))}</span> <b>${esc(n.name)}</b> — ${esc(short((n.attrs||{}).note||"",90))}</li>`));
  degraded.forEach(n=>watchItems.push(
    `<li><span class="tag tag-warn">${esc(t("sbWatchDegraded"))}</span> <b>${esc(n.name)}</b> — ${esc(short((n.attrs||{}).note||"",90))}</li>`));
  cells.push(`<div class="cell watch">
    <div class="cl">${esc(t("sbWatch"))} <span class="faint">(${planned.length}+${degraded.length})</span></div>
    <ul class="watchlist">${watchItems.join("")||`<li class="faint">—</li>`}</ul>
  </div>`);

  let html=`<div class="board">${cells.join("")}</div>`;

  // 第二行：最近 run 摘要 + 调度动态
  const cols=[];
  if(run){
    const pa=plannedStepsOf(run).length, ac=actualStepsOf(run).length;
    cols.push(`<div class="panel panel-pad">
      <div class="sec-head" style="margin-top:0"><h2>${esc(t("sbRecentRun"))}</h2>
        <span class="sec-note">#${esc(run.match_run||"")} · ${esc(fmtTime(run.started_at||""))}</span>
        <span style="margin-left:auto"><a href="#match" data-go="match" data-run="${esc(lf)}">${esc(t("sbGoMatch"))} →</a></span></div>
      <div class="kv"><span class="k">${esc(t("mTask"))}</span><span class="v">${esc(short(run.task||run.title||"",160))}</span></div>
      <div class="kv"><span class="k">${esc(t("mSteps"))}</span><span class="v mono">${esc(t("mPlanned"))} ${pa} · ${esc(t("mActual"))} ${ac} · ${esc(t("sbRunDev"))} ${devN} · ${esc(t("sbRunDecisions"))} ${decisionsOf(run).length}</span></div>
      ${run.final_output?`<div class="kv"><span class="k">${esc(t("mFinalOutput"))}</span><span class="v">${esc(short(run.final_output,180))}</span></div>`:""}
    </div>`);
  }
  const log=Array.isArray(DB.dispatchLog)?DB.dispatchLog:[];
  const recent=log.slice(-6).reverse();
  cols.push(`<div class="panel panel-pad">
    <div class="sec-head" style="margin-top:0"><h2>${esc(t("sbRecentLog"))}</h2>
      <span style="margin-left:auto"><a href="#ops" data-go="ops">${esc(t("sbGoOps"))} →</a></span></div>
    ${recent.length?`<ul class="loglist">${recent.map(e=>
      `<li><span class="ld">${esc(e.date||"")}</span><span class="le">${esc(short(e.event||"",110))}</span><span class="lx chip">${esc(e.executor||"")}</span></li>`).join("")}</ul>`
    :`<div class="empty">—</div>`}
  </div>`);
  html+=`<div class="grid2" style="margin-top:14px">${cols.join("")}</div>`;

  // 版本变更
  const changelog=(DB.meshVersionMeta&&DB.meshVersionMeta.changelog)||[];
  if(changelog.length){
    html+=`<div class="sec-head"><h2>${esc(t("sbChangelog"))}</h2></div>
    <div class="panel">${changelog.slice().reverse().map(c=>
      `<div class="panel-pad" style="border-bottom:1px solid var(--line)">
        <div><span class="mono" style="font-weight:700">v${esc(c.version)}</span>
          <span class="faint small mono" style="margin-left:8px">${esc(fmtTime(c.at))}</span>
          ${c.version===cm.version?` <span class="tag tag-ok">${esc(t("latest"))}</span>`:""}
          <span class="faint small" style="margin-left:8px">${esc(c.by||"")}</span></div>
        <div class="small muted" style="margin-top:4px;word-break:break-word">${esc(c.changes||"")}</div>
      </div>`).join("")}</div>`;
  }
  box.innerHTML=html;
  box.querySelectorAll("[data-go]").forEach(el=>{
    el.addEventListener("click",ev=>{
      ev.preventDefault();
      const go=el.dataset.go;
      if(go==="drawer"){ openDrawer(); return; }
      switchTab(go,{run:el.dataset.run||null});
    });
  });
}

/* ================= mesh topology（容器分层 / 项目拓扑） ================= */
function meshIndexes(reg){
  const runsOn={}, edgesFrom={}, edgesTo={};
  reg.edges.forEach(e=>{
    if(e.type==="runs_on") (runsOn[e.to]=runsOn[e.to]||[]).push(e.from);
    (edgesFrom[e.from]=edgesFrom[e.from]||[]).push(e);
    (edgesTo[e.to]=edgesTo[e.to]||[]).push(e);
  });
  return {runsOn, edgesFrom, edgesTo};
}
function progAuxLine(reg,idx,pid){
  // 程序的凭证关系与网络连接，直接来自 registry 边，不推断
  const creds=[], nets=[];
  (idx.edgesFrom[pid]||[]).forEach(e=>{
    const n=nodeById(reg,e.to);
    const nm=n?n.name:e.to;
    if(e.type==="auth_with") creds.push(nm);
    if(e.type==="connects_via") nets.push(nm);
  });
  const parts=[];
  if(creds.length) parts.push(`<b>${esc(t("relNames").auth_with)}</b> → ${esc(creds.join("、"))}`);
  if(nets.length) parts.push(`<b>${esc(t("relNames").connects_via)}</b> → ${esc(nets.join("、"))}`);
  return parts.join(" · ");
}
function renderMesh(){
  const reg=MapState.reg, box=$("view-mesh");
  const idx=meshIndexes(reg);
  const rn=t("relNames"), ct=t("meshChainTypes");
  /* ---- 层 1：容器（按 tier 分组，程序嵌在容器内） ---- */
  const containers=reg.nodes.filter(n=>n.type==="container");
  const byTier={};
  containers.forEach(c=>{ const tr=(c.attrs||{}).tier||"?"; (byTier[tr]=byTier[tr]||[]).push(c); });
  const tierOrder=Object.keys(byTier).sort((a,b)=>{
    const oa={T0:0,T1:1,T2:2}[a], ob={T0:0,T1:1,T2:2}[b];
    return (oa===undefined?9:oa)-(ob===undefined?9:ob)||(a<b?-1:1);
  });
  const chainEdgeTypes=["routes_to","serves","migrates_to","hosts","monitors","depends_on"];
  const contCard=c=>{
    const progs=(idx.runsOn[c.id]||[]).map(id=>nodeById(reg,id)).filter(Boolean);
    const outE=(idx.edgesFrom[c.id]||[]).filter(e=>e.type!=="runs_on");
    const stCls=c.status==="degraded"?" degraded":c.status==="planned"?" planned":"";
    return `<div class="contcard${stCls}">
      <div class="cc-head" data-nid="${esc(c.id)}">${dot(c.status)}<b>${esc(c.name)}</b>
        <span class="chip">${esc((c.attrs||{}).tier||"")}</span>
        <span class="cid">${esc(c.id)}</span></div>
      ${(c.attrs||{}).note?`<div class="cc-note">${esc(c.attrs.note)}</div>`:""}
      ${progs.length?`<div class="cc-progs"><div class="cph">${esc(t("typeNames").program)} (${progs.length})</div>${progs.map(p=>{
        const aux=progAuxLine(reg,idx,p.id);
        return `<div class="progrow" data-nid="${esc(p.id)}">${dot(p.status)}<span class="pr-name">${esc(p.name)}</span>
          ${p.status==="degraded"?` <span class="tag tag-warn">${esc(t("statusNames").degraded)}</span>`:""}
          ${p.status==="planned"?` <span class="tag tag-planned">${esc(t("statusNames").planned)}</span>`:""}
          ${aux?`<span class="pr-aux">${aux}</span>`:""}
        </div>`;}).join("")}</div>`:""}
      ${outE.length?`<div class="cc-edges">${outE.map(e=>{
        const tgt=nodeById(reg,e.to);
        return `<span class="chip" data-nid="${esc(e.to)}" title="${esc(e.note||"")}"><b>${esc(rn[e.type]||e.type)}</b> → ${esc(tgt?tgt.name:e.to)}</span>`;
      }).join("")}</div>`:""}
    </div>`;
  };
  let html=`<div class="sec-head"><h2>${esc(t("meshLayerContainer"))}</h2>
    <span class="sec-note">${containers.length}</span></div>`;
  tierOrder.forEach(tr=>{
    const label=(t("meshTier")||{})[tr]||tr;
    html+=`<div class="tiergroup"><div class="tierlabel"><b>${esc(label)}</b> · ${byTier[tr].length}</div>
      <div class="contgrid">${byTier[tr].map(contCard).join("")}</div></div>`;
  });
  // 未归属任何容器的程序（当前数据没有；有就诚实列出）
  const orphan=reg.nodes.filter(n=>n.type==="program"&&!(idx.runsOn[n.id]||[]).length&&!reg.edges.some(e=>e.type==="runs_on"&&e.from===n.id));
  if(orphan.length){
    html+=`<div class="tiergroup"><div class="tierlabel"><b>${esc(t("typeNames").program)}</b> · ${esc(t("meshNoNodes"))}</div>
      <div class="contgrid">${orphan.map(p=>`<div class="contcard"><div class="cc-head" data-nid="${esc(p.id)}">${dot(p.status)}<b>${esc(p.name)}</b><span class="cid">${esc(p.id)}</span></div></div>`).join("")}</div></div>`;
  }
  /* ---- 层 2：网络 ---- */
  const nets=reg.nodes.filter(n=>n.type==="network");
  html+=`<div class="sec-head"><h2>${esc(t("meshLayerNetwork"))}</h2><span class="sec-note">${nets.length}</span></div>`;
  html+=nets.length?`<div class="netgrid">${nets.map(nw=>{
    const users=(idx.edgesTo[nw.id]||[]);
    return `<div class="netcard">
      <div class="cc-head" data-nid="${esc(nw.id)}">${dot(nw.status)}<b>${esc(nw.name)}</b><span class="cid">${esc(nw.id)}</span></div>
      ${(nw.attrs||{}).note?`<div class="cc-note">${esc(nw.attrs.note)}</div>`:""}
      ${users.length?`<div class="nc-users">${users.map(e=>{
        const src=nodeById(reg,e.from);
        return `<div class="progrow" data-nid="${esc(e.from)}">${dot(src?src.status:"")}<span class="pr-name">${esc(src?src.name:e.from)}</span>
          <span class="chip" style="margin-left:6px"><b>${esc(rn[e.type]||e.type)}</b></span></div>`;}).join("")}</div>`:""}
    </div>`;}).join("")}</div>`
  :`<div class="empty">${esc(t("meshNoNodes"))}</div>`;
  /* ---- 层 3：凭证（只记名称/状态/存放位置） ---- */
  const creds=reg.nodes.filter(n=>n.type==="credential");
  html+=`<div class="sec-head"><h2>${esc(t("meshLayerCredential"))}</h2><span class="sec-note">${creds.length}</span></div>`;
  html+=creds.length?`<div class="panel tablewrap"><table class="sheet credtable"><thead><tr>
      <th>${esc(t("thName"))}</th><th>${esc(t("thStatus"))}</th><th>${esc(t("thWhere"))}</th><th>${esc(t("thNote"))}</th></tr></thead>
    <tbody>${creds.map(cd=>`<tr data-nid="${esc(cd.id)}" style="cursor:pointer">
      <td data-nid="${esc(cd.id)}">${dot(cd.status)}<b>${esc(cd.name)}</b><div class="faint mono" style="font-size:10.5px">${esc(cd.id)}</div></td>
      <td>${statusTag(cd.status)}</td>
      <td class="mono" style="font-size:11.5px">${esc((cd.attrs||{}).where||"—")}</td>
      <td class="muted">${esc((cd.attrs||{}).note||"")}</td></tr>`).join("")}</tbody></table></div>`
  :`<div class="empty">${esc(t("meshNoNodes"))}</div>`;
  /* ---- 部署与访问链路 ---- */
  const chains=reg.edges.filter(e=>chainEdgeTypes.indexOf(e.type)>=0);
  html+=`<div class="sec-head"><h2>${esc(t("meshChains"))}</h2><span class="sec-note">${chains.length}</span></div>`;
  html+=chains.length?`<div class="panel panel-pad chainlist">${chains.map(e=>{
    const a=nodeById(reg,e.from), b=nodeById(reg,e.to);
    return `<div class="chainrow">
      <span class="mono" data-nid="${esc(e.from)}" style="cursor:pointer">${esc(a?a.name:e.from)}</span>
      <span class="arrow">→</span>
      <span class="chip"><b>${esc(ct[e.type]||e.type)}</b></span>
      <span class="arrow">→</span>
      <span class="mono" data-nid="${esc(e.to)}" style="cursor:pointer">${esc(b?b.name:e.to)}</span>
      ${e.note?`<span class="faint small">${esc(e.note)}</span>`:""}
    </div>`;}).join("")}</div>`
  :`<div class="empty">${esc(t("meshNoNodes"))}</div>`;
  box.innerHTML=html;
  box.querySelectorAll("[data-nid]").forEach(elm=>{
    elm.addEventListener("click",ev=>{ ev.stopPropagation(); openNodePanel(elm.dataset.nid); });
  });
}
/* ================= match：计划 vs 实际（纵向时间线） =================
   标记语言：实心圆=实际；虚线圆=计划；对齐→同心（实心核+虚线环）；
   分歧→被短路的计划以虚线 ghost 行挂在原位，计划外的实际带 ⚡；
   实际步骤逐个保留不合并；偏差与关键决策永不折叠。
   对齐为文本相似度推断（无结构化依据），界面一律标注「推断」。 */
const ALIGN_MIN=0.5, FOLD_THRESHOLD=15;
function termsOf(s){
  return String(s||"").toLowerCase()
    .split(/[\s,，。.；;：:、！？!?"'“”‘’（）()\[\]\/\\|+\-—→・·*～~…]+/)
    .map(x=>x.trim()).filter(x=>x.length>=2);
}
function termSim(a,b){
  const A=termsOf(a), B=termsOf(b);
  if(!A.length||!B.length) return 0;
  const S=A.length<=B.length?A:B, L=A.length<=B.length?B:A;
  let n=0;
  for(const x of S){ if(L.some(u=>u.indexOf(x)>=0||x.indexOf(u)>=0)) n++; }
  return n/Math.min(A.length,B.length);
}
function stepText(s){ return [s.program,s.action].filter(Boolean).join(" "); }
function parseSeqRefs(run){
  // 从 deviation 文本解析显式引用：planned seqN / 计划步N → 被短路的计划步；
  // actual seqN / 实际 seqN → 明确标记的计划外实际步。其余对齐全靠相似度推断。
  const texts=[];
  const d=run.deviation;
  if(d){
    if(Array.isArray(d)){ for(const x of d) texts.push(x); }
    else{
      texts.push(d.summary||"");
      (d.nodes_added||[]).forEach(x=>texts.push(x));
      (d.nodes_removed||[]).forEach(x=>texts.push(x));
      texts.push(d.note||"");
    }
  }
  const skipped=new Set(), added=new Set();
  for(const tx of texts){
    let m;
    const reP=/(?:planned|计划)[^\d]{0,8}seq\s*(\d+)/gi;
    const reP2=/计划步\s*(\d+)/g;
    const reA=/(?:actual|实际)[^\d]{0,8}seq\s*(\d+)/gi;
    while((m=reP.exec(tx))) skipped.add(+m[1]);
    while((m=reP2.exec(tx))) skipped.add(+m[1]);
    while((m=reA.exec(tx))) added.add(+m[1]);
  }
  return {skipped, added};
}
function buildCompare(run){
  const planned=plannedStepsOf(run), actual=actualStepsOf(run);
  const refs=parseSeqRefs(run);
  const pairs=[], usedA=new Set();
  for(const p of planned){
    if(refs.skipped.has(p.seq)) continue;
    let best=null, bs=0;
    for(const a of actual){
      if(usedA.has(a.seq)) continue;
      const s=termSim(stepText(p),stepText(a));
      if(s>bs){ bs=s; best=a; }
    }
    if(best&&bs>=ALIGN_MIN){ pairs.push({p,a:best,sim:bs}); usedA.add(best.seq); }
  }
  const pp=new Set(), pa=new Set();
  pairs.forEach(x=>{ pp.add(x.p.seq); pa.add(x.a.seq); });
  const unplanned=actual.filter(a=>!pa.has(a.seq)).map(a=>a.seq);
  const ghosts=planned.filter(p=>!pp.has(p.seq)).map(p=>p.seq);
  // ⚡分叉：被短路的计划步 → 其之后（seq≥）最早的计划外实际步，每个实际步最多被指一次
  const links=[], linkedA=new Set();
  Array.from(refs.skipped).sort((x,y)=>x-y).forEach(ps=>{
    const tgt=unplanned.slice().sort((x,y)=>x-y).find(a=>a>=ps&&!linkedA.has(a));
    if(tgt){ links.push({p:ps,a:tgt}); linkedA.add(tgt); }
  });
  return {planned, actual, pairs, pp, pa, skipped:refs.skipped, added:refs.added, unplanned, ghosts, links};
}
const CMP={file:null,model:null};
function resolveRunFile(q){
  if(!q) return latestRunFile();
  const metas=DB.runsIndex.runs||[];
  if(DB.runs[q]) return q;
  const byFile=metas.find(m=>m.file===q||m.file==="runs/"+q||m.file.endsWith("/"+q));
  if(byFile) return byFile.file;
  const numN=parseInt(q,10);
  if(!isNaN(numN)){
    const byNum=metas.find(m=>parseInt(m.match_run,10)===numN||(DB.runs[m.file]&&parseInt(DB.runs[m.file].match_run,10)===numN));
    if(byNum) return byNum.file;
  }
  return latestRunFile();
}
function openRun(file){
  CMP.file=file;
  ROUTE.run=file;
  renderMatch();
  const q=new URLSearchParams(location.search);
  q.set("run",file);
  history.replaceState(null,"",location.pathname+"?"+q.toString()+"#match");
}
function stepChips(s){
  const chips=[];
  if(s.container_name||s.container) chips.push(`<span class="chip">${esc(t("dEnv"))}: ${esc(s.container_name||s.container)}</span>`);
  if(s.link) chips.push(`<span class="chip">${esc(t("dVia"))}: ${esc(s.link)}</span>`);
  if(s.credential) chips.push(`<span class="chip">${esc(t("dCredential"))}: ${esc(s.credential)}</span>`);
  return chips.length?`<div class="tlchips">${chips.join("")}</div>`:"";
}
function tlRow(o){
  // o: {mid, mkCls, first, last, cardCls, seqLabel, prog, time, tags, action, output, chips, extra}
  return `<div class="tlrow${o.first?" first":""}${o.last?" last":""}" id="mrow-${esc(o.mid)}">
    <div class="tlrail"><span class="mk ${o.mkCls}"></span></div>
    <div class="tlbody"><div class="tlcard${o.cardCls?" "+o.cardCls:""}">
      <div class="tlhead"><span class="seq">${esc(o.seqLabel)}</span>
        <span class="prog">${esc(o.prog||"")}</span>${o.tags||""}
        ${o.time?`<time>${esc(fmtTime(o.time))}</time>`:""}</div>
      ${o.action?`<div class="tltext">${esc(o.action)}</div>`:""}
      ${o.output?`<div class="tltext out">${esc(o.output)}</div>`:""}
      ${o.chips||""}${o.extra||""}
    </div></div></div>`;
}
function renderMatch(){
  const box=$("view-match");
  const metas=DB.runsIndex.runs||[];
  if(!metas.length){ box.innerHTML=`<div class="empty">${esc(t("noRuns"))}</div>`; return; }
  const file=resolveRunFile(ROUTE.run||CMP.file);
  CMP.file=file;
  const run=DB.runs[file];
  /* ---- run list ---- */
  const listHtml=metas.map(m=>{
    const r=DB.runs[m.file];
    const st=r?r.status:m.status;
    const pa=r?plannedStepsOf(r).length:0, ac=r?actualStepsOf(r).length:0;
    return `<div class="runitem${m.file===file?" sel":""}" data-file="${esc(m.file)}">
      <p class="rt">#${esc(r?r.match_run:m.match_run)} ${esc(short(r?r.title:m.title,54))}</p>
      <p class="rm">${esc(fmtDate((r&&r.started_at)||m.started_at))} · ${esc(t("runStatus")[st]||st||"")} · ${pa}/${ac} ${esc(t("mSteps"))}</p>
    </div>`;
  }).join("");
  if(!run){
    box.innerHTML=`<div class="matchgrid"><div class="runlist">${listHtml}</div><div class="empty">—</div></div>`;
  }else{
    const M=buildCompare(run); CMP.model=M;
    const mv=runMeshVersion(run);
    const st=run.status||"";
    /* ---- head ---- */
    const head=`<div class="runheadline"><h2>#${esc(run.match_run||"")} ${esc(run.title||"")}</h2>
        <span class="tag ${st==="completed"?"tag-ok":"tag-warn"}">${esc(t("runStatus")[st]||st)}</span></div>
      ${run.task?`<div class="kv" style="margin-top:6px"><span class="k">${esc(t("mTask"))}</span><span class="v">${esc(run.task)}</span></div>`:""}
      <div class="verline" style="margin-top:4px">
        <span>${esc(t("mStarted"))} <span class="mono">${esc(fmtTime(run.started_at))}</span></span>
        <span>${esc(t("mEnded"))} <span class="mono">${esc(fmtTime(run.ended_at))}</span></span>
        <span>${esc(t("mPlanned"))} ${M.planned.length} ${esc(t("mSteps"))} · ${esc(t("mActual"))} ${M.actual.length} ${esc(t("mSteps"))}</span>
        ${run.planned_by?`<span>${esc(t("mPlannedBy"))} ${esc(run.planned_by)}${run.planned_at?` ${esc(t("mAt"))} ${esc(fmtTime(run.planned_at))}`:""}</span>`:""}
      </div>
      <div class="verline" style="margin-top:4px">
        <span>${esc(t("mMeshLock"))}: ${mv.locked?`<b class="mono">v${esc(mv.v)}</b>`:`<b>${esc(t("mUnlocked"))}</b>`}${mv.sync?` · ${esc(t("mSyncedAt"))} <span class="mono">v${esc(mv.sync)}</span>`:""}</span>
      </div>
      ${run.note?`<div class="small muted" style="margin-top:4px">${esc(run.note)}</div>`:""}`;
    /* ---- legend ---- */
    const legend=`<div class="legend">
      <span class="li"><span class="mk mk-actual"></span>${esc(t("mLegendSolid"))}</span>
      <span class="li"><span class="mk mk-planned"></span>${esc(t("mLegendPlanned"))}</span>
      <span class="li"><span class="mk mk-aligned"></span>${esc(t("mLegendAligned"))}</span>
      <span class="li"><span class="tag tag-dev">⚡</span>${esc(t("mLegendDev"))}</span>
      <span class="li"><span class="mk mk-skipped"></span>${esc(t("mLegendSkipped"))}</span>
    </div>
    <div class="infer-note">${esc(t("mInferBanner"))}</div>`;
    /* ---- timeline rows（合并序列：实际按 seq 逐个保留；计划 ghost 插回原位） ---- */
    const pairByA=new Map(M.pairs.map(x=>[x.a.seq,x]));
    const pairByP=new Map(M.pairs.map(x=>[x.p.seq,x]));
    const linkByP=new Map(M.links.map(L=>[L.p,L.a]));
    const linkByA=new Map(M.links.map(L=>[L.a,L.p]));
    // ghost 锚点：插到“计划序中下一个已配对步骤”对应的实际行之前
    const pairedP=M.pairs.map(x=>x.p.seq).sort((a,b)=>a-b);
    const ghostAnchor=new Map();
    M.ghosts.forEach(g=>{
      const nxt=pairedP.find(ps=>ps>g);
      const anchorA=nxt!==undefined?pairByP.get(nxt).a.seq:null;
      if(anchorA!==null&&anchorA!==undefined){
        if(!ghostAnchor.has(anchorA)) ghostAnchor.set(anchorA,[]);
        ghostAnchor.get(anchorA).push(g);
      }
    });
    const trailingGhosts=M.ghosts.filter(g=>!pairedP.find(ps=>ps>g));
    const rows=[];
    rows.push({kind:"root"});
    const actualSorted=M.actual.slice().sort((a,b)=>a.seq-b.seq);
    actualSorted.forEach(a=>{
      (ghostAnchor.get(a.seq)||[]).forEach(g=>rows.push({kind:"ghost",p:M.planned.find(p=>p.seq===g)}));
      const pair=pairByA.get(a.seq);
      rows.push(pair?{kind:"aligned",p:pair.p,a,pair}: {kind:"unplanned",a});
    });
    trailingGhosts.forEach(g=>rows.push({kind:"ghost",p:M.planned.find(p=>p.seq===g)}));
    if(!M.actual.length){
      // 实际缺失：诚实空状态 + 计划原样
      M.planned.forEach(p=>rows.push({kind:"ghost",p,noSkip:true}));
    }
    /* >15 折叠：可见标记（root+aligned+unplanned+ghost）超阈值时，
       连续同 program 的 aligned 行收成 details；ghost/unplanned 永不折叠 */
    const visibleCount=1+M.pairs.length+M.unplanned.length+M.ghosts.length;
    const foldMode=visibleCount>FOLD_THRESHOLD;
    const renderRow=(r,isFirst,isLast)=>{
      if(r.kind==="root"){
        return tlRow({mid:"hero",mkCls:"mk-root",first:isFirst,cardCls:"root",
          seqLabel:"#"+(run.match_run||""),prog:"muse bot",
          tags:`<span class="tag" style="background:rgba(255,255,255,.16);color:#fff">${esc(t("heroSub")||"调度中枢")}</span>`,
          action:LANG==="zh"?"用户意图的唯一入口、验收结果的唯一出口；执行链根部。":"Sole entry of user intent and exit of acceptance results; root of the execution chain."});
      }
      if(r.kind==="ghost"){
        const p=r.p;
        const skipped=M.skipped.has(p.seq)&&!r.noSkip;
        const forkTo=linkByP.get(p.seq);
        return tlRow({mid:"p"+p.seq,mkCls:skipped?"mk-skipped":"mk-planned",first:isFirst,last:isLast,
          cardCls:"ghost",seqLabel:"P"+p.seq,prog:p.program||"",
          tags:skipped?` <span class="tag tag-planned">${esc(t("mSkipped"))}</span> ⚡`:"",
          time:p.at,action:p.action,output:p.output,chips:stepChips(p),
          extra:forkTo!==undefined?`<div class="forkline" data-jump="a${forkTo}">⚡ ${esc(t("mForkTo"))} A${forkTo} · ${esc(t("mInfer"))}</div>`:""});
      }
      if(r.kind==="aligned"){
        const {p,a}=r;
        return tlRow({mid:"m"+p.seq,mkCls:"mk-aligned",first:isFirst,last:isLast,
          seqLabel:"A"+a.seq,prog:a.program||"",
          tags:` <span class="tag tag-infer">≈ P${p.seq} ${esc(t("mAligned"))} · ${esc(t("mInfer"))}</span>`,
          time:a.at,action:a.action,output:a.output,chips:stepChips(a)});
      }
      const a=r.a;
      const forkFrom=linkByA.get(a.seq);
      return tlRow({mid:"a"+a.seq,mkCls:"mk-actual",first:isFirst,last:isLast,
        cardCls:"dev",seqLabel:"A"+a.seq,prog:a.program||"",
        tags:` <span class="tag tag-dev">⚡ ${esc(t("mUnplanned"))} · ${esc(t("mInfer"))}</span>`,
        time:a.at,action:a.action,output:a.output,chips:stepChips(a),
        extra:forkFrom!==undefined?`<div class="forkline" data-jump="p${forkFrom}">⚡ ${esc(t("mForkFrom"))} P${forkFrom} · ${esc(t("mInfer"))}</div>`:""});
    };
    let tlHtml=`<div class="tl">`;
    if(foldMode){
      // 分阶段：连续同 program 的 aligned 合并；其余原样
      let i=0, firstDone=false;
      const rendered=[];
      while(i<rows.length){
        const r=rows[i];
        if(r.kind==="aligned"){
          let j=i, prog=r.a.program||"";
          while(j<rows.length&&rows[j].kind==="aligned"&&(rows[j].a.program||"")===prog) j++;
          const group=rows.slice(i,j);
          if(group.length>=2){
            rendered.push({type:"fold",prog,group});
          }else rendered.push({type:"row",r});
          i=j;
        }else{ rendered.push({type:"row",r}); i++; }
      }
      rendered.forEach((it,idx)=>{
        const isFirst=!firstDone; 
        if(it.type==="row"){ tlHtml+=renderRow(it.r,isFirst,idx===rendered.length-1); firstDone=true; }
        else{
          tlHtml+=`<div class="tlrow${isFirst?" first":""}${idx===rendered.length-1?" last":""}">
            <div class="tlrail"><span class="mk mk-aligned"></span></div>
            <div class="tlbody"><details class="phasefold"><summary>${esc(it.prog)} × ${it.group.length} ${esc(t("mPhaseFold"))}</summary>
              ${it.group.map((g,gi)=>renderRow(g,false,gi===it.group.length-1)).join("")}
            </details></div></div>`;
          firstDone=true;
        }
      });
    }else{
      rows.forEach((r,i)=>{ tlHtml+=renderRow(r,i===0,i===rows.length-1); });
    }
    tlHtml+=`</div>`;
    if(!M.actual.length) tlHtml+=`<div class="empty">${esc(t("mEmptyActual"))}</div>`;
    /* ---- deviation / decisions / lessons / final ---- */
    let tail="";
    const devs=deviationEntries(run);
    if(devs.length){
      tail+=secHead(t("mDeviation"),String(devs.length));
      tail+=`<div class="panel panel-pad devpanel"><ul style="margin:0;padding-left:18px">${devs.map(x=>`<li style="font-size:12.5px;margin:5px 0;word-break:break-word">${esc(x)}</li>`).join("")}</ul></div>`;
    }
    const decs=decisionsOf(run);
    if(decs.length){
      tail+=secHead(t("mDecisions"),String(decs.length));
      tail+=`<div class="panel">${decs.map(d=>`<div class="panel-pad" style="border-bottom:1px solid var(--line)">
        <div style="font-weight:600;font-size:13px">${esc(d.question||"")}</div>
        <div class="kv" style="margin-top:5px"><span class="k">${esc(t("dDecision")||"决策")}</span><span class="v">${esc(d.decision||"")}</span></div>
        ${d.rationale?`<div class="kv"><span class="k">${esc(t("dRationale"))}</span><span class="v small muted">${esc(d.rationale)}</span></div>`:""}
        ${Array.isArray(d.options)&&d.options.length?`<div class="kv"><span class="k">${esc(t("dOptions"))}</span><span class="v small muted">${d.options.map(o=>esc(o)).join(" / ")}</span></div>`:""}
        <div class="small faint" style="margin-top:4px">${esc(d.decided_by||"")} · ${esc(fmtTime(d.at))}${d.jev?` · ${esc(t("mDecisionJev"))}: ${esc(typeof d.jev==="string"?d.jev:JSON.stringify(d.jev))}`:""}</div>
      </div>`).join("")}</div>`;
    }
    const lessons=lessonsOf(run);
    if(lessons.length){
      tail+=secHead(t("mLessons"),String(lessons.length));
      tail+=`<div class="panel panel-pad"><ul style="margin:0;padding-left:18px">${lessons.map(x=>`<li style="font-size:12.5px;margin:5px 0;word-break:break-word">${esc(x)}</li>`).join("")}</ul></div>`;
    }
    if(run.final_output){
      tail+=`<div class="infer-note" style="margin-top:12px"><b>${esc(t("mFinalOutput"))}</b> · ${esc(run.final_output)}</div>`;
    }
    box.innerHTML=`<div class="matchgrid">
      <div><div class="sec-head" style="margin-top:0"><h2>${esc(t("mRunList"))}</h2><span class="sec-note">${metas.length}</span></div>
        <div class="runlist">${listHtml}</div></div>
      <div style="min-width:0">${head}${legend}${tlHtml}${tail}</div>
    </div>`;
  }
  box.querySelectorAll(".runitem").forEach(elm=>{
    elm.addEventListener("click",()=>openRun(elm.dataset.file));
  });
  box.querySelectorAll("[data-jump]").forEach(elm=>{
    elm.addEventListener("click",()=>{
      const tgt=$("mrow-"+elm.dataset.jump);
      if(tgt){
        tgt.scrollIntoView({behavior:"smooth",block:"center"});
        tgt.classList.add("flash");
        setTimeout(()=>tgt.classList.remove("flash"),1600);
      }
    });
  });
  // 深链接 ?node=pN|aN|mN|hero
  if(ROUTE.node&&/^(p|a|m)\d+$|^hero$/.test(ROUTE.node)){
    const tgt=$("mrow-"+ROUTE.node);
    if(tgt){
      setTimeout(()=>{ tgt.scrollIntoView({block:"center"}); tgt.classList.add("flash");
        setTimeout(()=>tgt.classList.remove("flash"),2000); },80);
    }
    ROUTE.node=null;
  }
}
/* ================= ops（编排总览：有真实数据才画） ================= */
function secHead(title,note){
  return `<div class="sec-head"><h2>${esc(title)}</h2>${note?`<span class="sec-note">${esc(note)}</span>`:""}</div>`;
}
function sheet(heads,rows){
  return `<div class="panel tablewrap"><table class="sheet"><thead><tr>${heads.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead>
    <tbody>${rows.join("")}</tbody></table></div>`;
}
function renderOps(){
  const box=$("view-ops");
  let html="";
  /* ---- 连接原则 ---- */
  const c=DB.connections;
  if(c){
    html+=secHead(t("opsPrinciples"),c.updated||"");
    const cols=[];
    if(c.decision_tree) cols.push(`<div class="panel panel-pad"><div class="cl faint small" style="margin-bottom:4px">${esc(t("opsDecisionTree"))}</div><div style="font-size:13px">${esc(c.decision_tree)}</div></div>`);
    if(c.fallback_ladder){
      cols.push(`<div class="panel panel-pad"><div class="cl faint small" style="margin-bottom:4px">${esc(t("opsFallback"))} · ${esc(c.fallback_ladder.name||"")}</div>
        <ol style="margin:4px 0 0;padding-left:20px">${(c.fallback_ladder.steps||[]).map(s=>`<li style="font-size:12.5px;margin:3px 0">${esc(s)}</li>`).join("")}</ol></div>`);
    }
    if(cols.length) html+=`<div class="grid2">${cols.join("")}</div>`;
    if(Array.isArray(c.layers)&&c.layers.length){
      html+=`<div style="margin-top:12px">${sheet(
        [t("opsLayers"),"EN",t("thDesc"),"methods",t("thNote")],
        c.layers.map(L=>`<tr><td><b>${esc(L.name||"")}</b></td><td class="mono faint">${esc(L.en||"")}</td>
          <td>${esc(L.desc||"")}</td><td>${(L.methods||[]).map(m=>`<span class="chip">${esc(m)}</span>`).join(" ")}</td>
          <td class="muted small">${esc(L.note||"")}</td></tr>`))}</div>`;
    }
    if(c.note) html+=`<div class="infer-note">${esc(c.note)}</div>`;
  }
  /* ---- 派工拓扑 ---- */
  const tp=DB.topology;
  if(tp){
    html+=secHead(t("opsTopology"),tp.updated||"");
    if(tp.hub) html+=`<div class="panel panel-pad" style="margin-bottom:12px">
      <div><b>${esc(tp.hub.name||"")}</b> <span class="chip">${esc(tp.hub.tier||"")}</span></div>
      <div class="small muted" style="margin-top:4px">${esc(tp.hub.note||"")}</div></div>`;
    if(Array.isArray(tp.nodes)&&tp.nodes.length){
      html+=sheet([t("thName"),t("thTier"),t("thPath"),t("thCredential"),t("thNote")],
        tp.nodes.map(n=>{
          const path=n.path==="direct"
            ?`<span class="tag tag-ok">${esc(t("opsPathDirect"))}</span>`
            :`<span class="tag tag-planned">${esc(t("opsPathVia"))} ${esc(n.via||"")}</span>`;
          return `<tr><td><b>${esc(n.name||"")}</b><div class="faint mono" style="font-size:10.5px">${esc(n.id||"")}</div></td>
            <td class="mono">${esc(n.tier||"")}</td><td>${path}${n.egress?`<div class="faint small" style="margin-top:2px">${esc(n.egress)}</div>`:""}</td>
            <td class="small">${esc(n.credential||"—")}</td><td class="muted small">${esc(n.note||"")}</td></tr>`;
        }));
    }
    if(Array.isArray(tp.confusing_points)&&tp.confusing_points.length){
      html+=`<div class="panel panel-pad" style="margin-top:12px"><div class="cl faint small" style="margin-bottom:6px">${esc(t("opsConfusing"))}</div>
        <ul style="margin:0;padding-left:18px">${tp.confusing_points.map(x=>`<li style="font-size:12.5px;margin:4px 0">${esc(x)}</li>`).join("")}</ul></div>`;
    }
    const cm=tp.container_program_model;
    if(cm){
      html+=`<div class="panel panel-pad" style="margin-top:12px"><div class="cl faint small" style="margin-bottom:6px">${esc(t("opsContainerModel"))} · ${esc(cm.established||"")} ${esc(cm.by||"")}</div>
        ${["containers","programs","connectors","mapping","credential_rule"].filter(k=>cm[k]).map(k=>
          `<div class="kv"><span class="k">${esc(k)}</span><span class="v small">${esc(cm[k])}</span></div>`).join("")}</div>`;
    }
  }
  /* ---- runtimes ---- */
  const rt=DB.runtimes;
  if(rt){
    html+=secHead(t("opsRuntimes"));
    if(Array.isArray(rt.cloud)&&rt.cloud.length){
      html+=`<div class="tierlabel"><b>${esc(t("opsCloud"))}</b> · ${rt.cloud.length}</div>`;
      html+=sheet([t("thName"),t("thTier"),t("thBilling"),t("thFits"),t("thVia"),t("thNote")],
        rt.cloud.map(x=>`<tr><td><b>${esc(x.name||"")}</b></td><td class="mono">${esc(x.tier||"")}</td>
          <td class="mono small">${esc(x.billing||"")}</td><td class="small">${esc(x.fits||"")}</td>
          <td class="small muted">${esc(x.via||"")}${x.route?`<div class="faint" style="margin-top:2px">${esc(x.route)}</div>`:""}</td>
          <td class="small muted">${esc(x.note||"")}</td></tr>`));
    }
    if(Array.isArray(rt.tailnet)&&rt.tailnet.length){
      html+=`<div class="tierlabel" style="margin-top:14px"><b>${esc(t("opsTailnet"))}</b> · ${rt.tailnet.length}</div>`;
      html+=sheet([t("thName"),t("thTier"),t("thFits"),t("thVia"),t("thNote")],
        rt.tailnet.map(x=>`<tr><td><b>${esc(x.name||"")}</b></td><td class="mono">${esc(x.tier||"")}</td>
          <td class="small">${esc(x.fits||"")}</td><td class="small muted">${esc(x.via||"—")}</td>
          <td class="small muted">${esc(x.note||"")}</td></tr>`));
    }
    if(Array.isArray(rt.platforms)&&rt.platforms.length){
      html+=`<div style="margin-top:10px"><span class="small faint">${esc(t("opsPlatforms"))}:</span> ${rt.platforms.map(p=>`<span class="chip">${esc(p)}</span>`).join(" ")}</div>`;
    }
  }
  /* ---- subscriptions + harness ---- */
  const subs=DB.subscriptions, har=DB.harness;
  if((Array.isArray(subs)&&subs.length)||(Array.isArray(har)&&har.length)){
    const cols=[];
    if(Array.isArray(subs)&&subs.length){
      cols.push(`<div>${secHead(t("opsSubscriptions"))}
        <div class="panel">${subs.map(s=>`<div class="panel-pad" style="border-bottom:1px solid var(--line)">
          <div><b>${esc(s.name||"")}</b> <span class="chip">${esc(s.status||"")}</span>
            <span class="faint small" style="margin-left:6px">${esc(t("thQuota"))}: ${esc(s.quota||"—")}</span></div>
          <div class="small muted" style="margin-top:3px">${esc(s.note||"")}</div>
          ${s.quota_note?`<div class="small faint" style="margin-top:3px">${esc(s.quota_note)}</div>`:""}
          ${s.route?`<div class="small faint" style="margin-top:3px">${esc(s.route)}</div>`:""}
        </div>`).join("")}</div></div>`);
    }
    if(Array.isArray(har)&&har.length){
      cols.push(`<div>${secHead(t("opsHarness"))}
        ${sheet([t("thName"),t("thRole"),t("thDesc")],
          har.map(x=>`<tr><td><b>${esc(x.name||"")}</b></td><td class="small">${esc(x.role||"")}</td>
            <td class="small muted">${esc(x.desc||"")}</td></tr>`))}</div>`);
    }
    html+=`<div class="grid2" style="margin-top:4px">${cols.join("")}</div>`;
  }
  /* ---- 派工路径 ---- */
  const dp=DB.dispatchPlan;
  if(dp){
    html+=secHead(t("opsPaths"),dp.updated||"");
    if(Array.isArray(dp.paths)&&dp.paths.length){
      html+=`<div class="panel">${dp.paths.map(p=>`<div class="panel-pad" style="border-bottom:1px solid var(--line)">
        <div><b>${esc(p.name||"")}</b> <span class="chip">${esc(p.status||"")}</span></div>
        <div class="small muted" style="margin-top:3px">${esc(p.desc||"")}</div></div>`).join("")}</div>`;
    }
    if(dp.protocol){
      html+=`<div class="panel panel-pad" style="margin-top:12px"><div class="cl faint small" style="margin-bottom:6px">${esc(t("opsProtocol"))}</div>
        ${["inbox","outbox","rule"].filter(k=>dp.protocol[k]).map(k=>
          `<div class="kv"><span class="k">${esc(k)}</span><span class="v small">${esc(dp.protocol[k])}</span></div>`).join("")}</div>`;
    }
    if(Array.isArray(dp.principles)&&dp.principles.length){
      html+=`<div style="margin-top:12px">${sheet([t("opsDispatchPrinciples"),t("since"),t("thDesc")],
        dp.principles.map(p=>`<tr><td><b>${esc(p.name||"")}</b></td><td class="mono faint small">${esc(p.since||"")}</td>
          <td class="small muted">${esc(p.rule||"")}</td></tr>`))}</div>`;
    }
  }
  /* ---- projects ---- */
  const pj=DB.projects;
  if(Array.isArray(pj)&&pj.length){
    html+=secHead(t("opsProjects"),String(pj.length));
    html+=`<div class="panel">${pj.map(p=>`<div class="panel-pad" style="border-bottom:1px solid var(--line)">
      <div style="display:flex;align-items:baseline;gap:10px;flex-wrap:wrap">
        <b>${esc(p.name||"")}</b>${(p.status||"").length<=24?`<span class="chip">${esc(p.status||"")}</span>`:""}
        <span class="mono faint small">${esc(p.repo||"")}</span>
        ${p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener" class="small">${esc(p.url)}</a>`:""}
      </div>
      <div class="small muted" style="margin-top:3px">${esc(p.desc||"")}</div>
      ${(p.status||"").length>24?`<div class="small" style="margin-top:3px"><span class="faint">${esc(t("thStatus"))}:</span> ${esc(p.status)}</div>`:""}
      ${p.drive?`<div class="small faint" style="margin-top:3px">${esc(p.drive)}</div>`:""}
      ${p.host?`<div class="small faint" style="margin-top:3px">${esc(p.host)}</div>`:""}
    </div>`).join("")}</div>`;
  }
  /* ---- dispatch log ---- */
  const log=DB.dispatchLog;
  if(Array.isArray(log)&&log.length){
    html+=secHead(t("opsDispatchLog"),String(log.length));
    const rows=log.slice().reverse();
    const rowHtml=e=>`<li><span class="ld">${esc(e.date||"")}</span><span class="le">${esc(e.event||"")}</span><span class="lx chip">${esc(e.executor||"")}</span></li>`;
    html+=`<div class="panel panel-pad"><ul class="loglist" id="loglist">
      ${rows.slice(0,15).map(rowHtml).join("")}</ul>
      ${rows.length>15?`<ul class="loglist" id="loglist-more" hidden>${rows.slice(15).map(rowHtml).join("")}</ul>
      <button class="btn" id="logtoggle" style="margin-top:8px">${esc(t("showMore"))} (${rows.length-15})</button>`:""}
    </div>`;
  }
  box.innerHTML=html||`<div class="empty">—</div>`;
  const lt=$("logtoggle");
  if(lt) lt.addEventListener("click",()=>{
    const more=$("loglist-more");
    const open=more.hidden;
    more.hidden=!open;
    lt.textContent=open?t("showLess"):`${t("showMore")} (${more.children.length})`;
  });
}

/* ================= node detail panel ================= */
function openNodePanel(nid){
  const n=nodeById(MapState.reg,nid);
  if(!n) return;
  const tn=t("typeNames"), an=t("attrNames"), rn=t("relNames");
  const attrs=n.attrs||{};
  const attrRows=Object.keys(attrs).filter(k=>attrs[k]).map(k=>
    `<div class="kv"><span class="k">${esc(an[k]||k)}</span><span class="v">${esc(attrs[k])}</span></div>`).join("");
  const rels=MapState.reg.edges.filter(e=>e.from===nid||e.to===nid);
  const relRows=rels.map(e=>{
    const other=e.from===nid?e.to:e.from;
    const on=nodeById(MapState.reg,other);
    const dir=e.from===nid?"→":"←";
    return `<div class="relrow" data-nid="${esc(other)}"><b>${esc(rn[e.type]||e.type)}</b> ${dir} ${esc(on?on.name:other)}${e.note?` <span class="faint">· ${esc(short(e.note,60))}</span>`:""}</div>`;
  }).join("");
  let inner="";
  if(n.type==="container"){
    const progs=MapState.reg.edges.filter(e=>e.type==="runs_on"&&e.to===nid)
      .map(e=>nodeById(MapState.reg,e.from)).filter(Boolean);
    if(progs.length){
      inner=`<div class="kv"><span class="k">${esc(t("npInner"))}</span><span class="v">${progs.map(p=>
        `<span class="chip" style="cursor:pointer" data-nid="${esc(p.id)}">${dot(p.status)}${esc(p.name)}</span>`).join(" ")}</span></div>`;
    }
  }
  $("nodepanel-card").innerHTML=`
    <button class="btn close" id="npclose">✕</button>
    <h3>${esc(n.name)} <span class="typebadge" style="background:${TYPE_COLOR[n.type]}">${esc(tn[n.type]||n.type)}</span></h3>
    <div class="kv"><span class="k">ID</span><span class="v mono">${esc(n.id)}</span></div>
    <div class="kv"><span class="k">${esc(t("npStatus"))}</span><span class="v">${dot(n.status)}${esc(t("statusNames")[n.status]||n.status||"—")}</span></div>
    ${attrRows}
    ${n.type==="credential"?`<div class="infer-note">${esc(t("npCredentialNote"))}</div>`:""}
    ${inner}
    ${rels.length?`<div style="margin-top:8px;border-top:1px dashed var(--line);padding-top:8px"><div class="small faint" style="margin-bottom:4px">${esc(t("npRelations"))} (${rels.length})</div>${relRows}</div>`:""}`;
  $("nodepanel").classList.add("show");
  $("nodepanel").setAttribute("aria-hidden","false");
  $("npclose").onclick=closeNodePanel;
  $("nodepanel-card").querySelectorAll("[data-nid]").forEach(elm=>{
    elm.addEventListener("click",()=>{ openNodePanel(elm.dataset.nid); });
  });
  history.replaceState(null,"","?node="+encodeURIComponent(nid)+"#mesh");
}
function closeNodePanel(){
  $("nodepanel").classList.remove("show");
  $("nodepanel").setAttribute("aria-hidden","true");
}

/* ================= mesh state（版本查看） ================= */
const MapState={reg:null,versionLabel:"",histMode:false};
async function regFor(v){
  if(v===currentMesh().version) return DB.registry;
  if(DB.history[v]) return DB.history[v];
  const r=await jtry(`data/history/${v}/mesh-registry.json`);
  if(r){ DB.history[v]=r; return r; }
  return DB.registry;
}
async function viewVersion(v){
  MapState.reg=await regFor(v);
  MapState.versionLabel=v;
  MapState.histMode=v!==currentMesh().version;
  $("verlabel").textContent="v"+v;
  const hb=$("histbanner");
  if(MapState.histMode){
    hb.classList.add("show");
    const vm=(DB.versions.versions||[]).find(x=>x.version===v);
    $("histbanner-t").textContent=`${t("viewingHist")} v${v} ${t("notLatest")} · ${vm?vm.updated_at:""}`;
  }else hb.classList.remove("show");
  if(ROUTE.tab==="mesh") renderMesh();
}

/* ================= history drawer ================= */
let cmpSel=[];
function openDrawer(){ $("drawer").classList.add("open"); $("scrim").classList.add("show"); renderDrawer(); }
function closeDrawer(){ $("drawer").classList.remove("open"); $("scrim").classList.remove("show"); }
function renderDrawer(){
  const body=$("drawerbody");
  const vs=(DB.versions.versions||[]).slice().reverse();
  const changelog=(DB.meshVersionMeta&&DB.meshVersionMeta.changelog)||[];
  let h=vs.map(v=>{
    const cg=changelog.find(c=>c.version===v.version);
    return `<div class="vrow${v.version===MapState.versionLabel?" sel":""}" data-v="${esc(v.version)}">
      <div class="vh"><span class="vv">v${esc(v.version)}</span>
        ${v.version===DB.versions.latest?`<span class="tag tag-ok">${esc(t("latest"))}</span>`:""}
        <span style="margin-left:auto" class="cmp"><button class="btn" data-cmp="${esc(v.version)}">${esc(t("compare"))}</button></span>
      </div>
      <div class="meta">${esc(fmtTime(v.updated_at))} · ${v.nodes} ${esc(t("nodes"))} · ${v.edges} ${esc(t("edges"))}</div>
      ${cg?`<div class="chg">${esc(short(cg.changes||"",180))}</div>`:""}
    </div>`;
  }).join("");
  h+=`<div class="diffbox" id="diffbox"></div>`;
  body.innerHTML=h;
  body.querySelectorAll(".vrow").forEach(r=>{
    r.addEventListener("click",ev=>{
      if(ev.target.dataset&&ev.target.dataset.cmp) return;
      viewVersion(r.dataset.v); renderDrawer();
    });
  });
  body.querySelectorAll("[data-cmp]").forEach(b=>{
    b.addEventListener("click",ev=>{ ev.stopPropagation(); toggleCmp(b.dataset.cmp); });
  });
  renderDiffBox();
}
function toggleCmp(v){
  if(cmpSel.includes(v)) cmpSel=cmpSel.filter(x=>x!==v);
  else{ cmpSel.push(v); if(cmpSel.length>2) cmpSel.shift(); }
  renderDrawer();
}
function diffRegs(a,b){
  const am=new Map(a.nodes.map(n=>[n.id,n])), bm=new Map(b.nodes.map(n=>[n.id,n]));
  const added=[...bm.keys()].filter(k=>!am.has(k)).map(k=>bm.get(k));
  const removed=[...am.keys()].filter(k=>!bm.has(k)).map(k=>am.get(k));
  const changed=[...bm.keys()].filter(k=>{ const x=am.get(k),y=bm.get(k);
    return x&&JSON.stringify(x)!==JSON.stringify(y); }).map(k=>({from:am.get(k),to:bm.get(k)}));
  const ek=e=>e.from+">"+e.to+":"+e.type;
  const ae=new Set(a.edges.map(ek)), be=new Set(b.edges.map(ek));
  return {added,removed,changed,
    eAdded:b.edges.filter(e=>!ae.has(ek(e))), eRemoved:a.edges.filter(e=>!be.has(ek(e)))};
}
async function renderDiffBox(){
  const box=$("diffbox"); if(!box) return;
  if(cmpSel.length<2){
    box.innerHTML=`<div class="faint small">⇄ ${esc(t("pickTwo"))}</div>`;
    return;
  }
  const [va,vb]=cmpSel;
  const [ra,rb]=[await regFor(va),await regFor(vb)];
  const d=diffRegs(ra,rb);
  const li=arr=>arr.map(n=>`<li>${esc(n.name||n.id)} <span class="faint mono">${esc(n.id||"")}</span></li>`).join("");
  const le=arr=>arr.map(e=>`<li><span class="mono">${esc(e.from)} → ${esc(e.to)}</span> (${esc(e.type)})</li>`).join("");
  const has=d.added.length||d.removed.length||d.changed.length||d.eAdded.length||d.eRemoved.length;
  box.innerHTML=`<div style="font-weight:700;margin-bottom:8px">⇄ ${esc(t("diffTitle"))}: v${esc(va)} → v${esc(vb)}</div>`+
    (has?`
    ${d.added.length?`<div class="add"><b>${esc(t("addedNodes"))} (${d.added.length})</b><ul>${li(d.added)}</ul></div>`:""}
    ${d.removed.length?`<div class="del"><b>${esc(t("removedNodes"))} (${d.removed.length})</b><ul>${li(d.removed)}</ul></div>`:""}
    ${d.changed.length?`<div class="chgd"><b>${esc(t("changedNodes"))} (${d.changed.length})</b><ul>${d.changed.map(c=>`<li>${esc(c.to.name)}</li>`).join("")}</ul></div>`:""}
    ${d.eAdded.length?`<div class="add"><b>${esc(t("addedEdges"))} (${d.eAdded.length})</b><ul>${le(d.eAdded)}</ul></div>`:""}
    ${d.eRemoved.length?`<div class="del"><b>${esc(t("removedEdges"))} (${d.eRemoved.length})</b><ul>${le(d.eRemoved)}</ul></div>`:""}`
    :`<div class="add">✓ ${esc(t("noDiff"))}</div>`);
}

/* ================= router ================= */
const ROUTE={tab:"status",run:null,node:null};
const TABS=["status","mesh","match","ops"];
function currentTab(){ return ROUTE.tab; }
function switchTab(tab,opts){
  opts=opts||{};
  if(TABS.indexOf(tab)<0) tab="status";
  ROUTE.tab=tab;
  if(opts.run!==undefined) ROUTE.run=opts.run;
  document.querySelectorAll("#tabs button").forEach(b=>b.classList.toggle("on",b.dataset.tab===tab));
  TABS.forEach(x=>{ $("view-"+x).hidden=x!==tab; });
  closeNodePanel();
  const hash=tab==="status"?"":"#"+tab;
  const q=new URLSearchParams(location.search);
  if(ROUTE.run) q.set("run",ROUTE.run); else q.delete("run");
  if(ROUTE.node) q.set("node",ROUTE.node); else q.delete("node");
  const qs=q.toString();
  history.replaceState(null,"",location.pathname+(qs?"?"+qs:"")+hash);
  render();
}
function render(){
  const tab=ROUTE.tab;
  if(tab==="status") renderStatus();
  else if(tab==="mesh") renderMesh();
  else if(tab==="match") renderMatch();
  else if(tab==="ops") renderOps();
}

/* ================= chrome events ================= */
document.querySelectorAll("#tabs button").forEach(b=>{
  b.addEventListener("click",()=>switchTab(b.dataset.tab,{node:null}));
});
$("langbtn").addEventListener("click",()=>{
  LANG=LANG==="zh"?"en":"zh";
  localStorage.setItem("arsenal-lang",LANG);
  applyI18n(); render();
  $("foot-src").textContent=footText();
});
$("verpill").addEventListener("click",openDrawer);
$("drawerclose").addEventListener("click",closeDrawer);
$("scrim").addEventListener("click",closeDrawer);
$("backlatest").addEventListener("click",()=>viewVersion(currentMesh().version));
$("nodepanel").addEventListener("click",ev=>{ if(ev.target===$("nodepanel")) closeNodePanel(); });
window.addEventListener("hashchange",()=>{
  const h=(location.hash||"").replace(/^#/,"");
  if(TABS.indexOf(h)>=0&&h!==ROUTE.tab) switchTab(h);
});

function footText(){
  const cm=currentMesh();
  const sync=(DB.runsIndex&&DB.runsIndex._sync)||null;
  let s=`${t("footSrc")} · registry v${cm.version} (${cm.nodes}/${cm.edges})`;
  if(sync) s+=` · match runs ⇐ ${sync.source||""} @ ${fmtTime(sync.synced_at||"")}`;
  return s;
}

/* ================= init ================= */
(async function init(){
  applyI18n();
  try{ await loadData(); }
  catch(e){
    $("view-status").innerHTML=`<div class="empty" style="color:var(--bad)">数据加载失败 / data load failed: ${esc(e.message)}</div>`;
    return;
  }
  MapState.reg=DB.registry;
  MapState.versionLabel=currentMesh().version;
  const cm=currentMesh();
  $("verlabel").textContent="v"+cm.version;
  $("vermeta").textContent=`${cm.nodes}/${cm.edges}`;
  $("foot-src").textContent=footText();
  // 深链接：#mesh / #match / #ops / #status；?run=<file|编号>；?node=<节点id|pN|aN|mN>
  const q=new URLSearchParams(location.search);
  const h=(location.hash||"").replace(/^#/,"");
  ROUTE.run=q.get("run");
  ROUTE.node=q.get("node");
  switchTab(TABS.indexOf(h)>=0?h:(ROUTE.run||ROUTE.node?(ROUTE.run?"match":"mesh"):"status"));
  if(ROUTE.node&&/^(container|program|network|credential):/.test(ROUTE.node)){
    openNodePanel(ROUTE.node);
  }
})();



