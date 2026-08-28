/* Streko — standalone PWA. All data lives in this phone's localStorage. */

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const DEFAULT_WEEKDAY_HABITS = [
  { id: "wd1", name: "5:45 AM — Wake up" },
  { id: "wd2", name: "5:45–6:00 — Prayer + freshen up" },
  { id: "wd3", name: "6:00–7:00 — 📚 Semester studies ⭐" },
  { id: "wd4", name: "7:00–8:00 — Breakfast + get ready + help Mom" },
  { id: "wd5", name: "8:00–9:00 — 🚌 Travel → English / ML videos / revision" },
  { id: "wd6", name: "9:00–5:00 — 🎓 College → focus on classes + semester" },
  { id: "wd7", name: "5:00–6:00 — 🚌 Travel → rest / English listening" },
  { id: "wd8", name: "6:00–7:00 — 🏠 Help Mom + dinner/housework" },
  { id: "wd9", name: "7:00–8:30 — 🤖 AI/ML / Project ⭐" },
  { id: "wd10", name: "8:30–9:00 — Dinner + break" },
  { id: "wd11", name: "9:00–9:30 — 💻 DSA/Aptitude (alternate days)" },
  { id: "wd12", name: "9:30–9:45 — Review + plan tomorrow" },
  { id: "wd13", name: "9:45–10:30 — Relax / prepare for sleep" },
  { id: "wd14", name: "10:30 PM — 😴 Sleep" },
];
const DEFAULT_WEEKEND_HABITS = [
  { id: "we1", name: "🌅 6:00 AM — Wake up + prayer + freshen up" },
  { id: "we2", name: "🧘 6:15–6:30 — Yoga/exercise" },
  { id: "we3", name: "🏠 6:30–8:30 — Help Mom + cooking/cleaning + breakfast" },
  { id: "we4", name: "🤖 9:00–11:00 — AI/ML learning ⭐" },
  { id: "we5", name: "☕ 11:00–11:30 — Break" },
  { id: "we6", name: "💻 11:30–1:00 — Project / coding" },
  { id: "we7", name: "🍛 1:00–2:30 — Lunch + rest" },
  { id: "we8", name: "🧠 2:30–3:30 — DSA / Aptitude (alternate days)" },
  { id: "we9", name: "🗣️ 3:30–4:00 — English speaking" },
  { id: "we10", name: "🏠 4:00–6:00 — Mom + housework + personal time" },
  { id: "we11", name: "🔬 6:00–7:00 — Tech/ML research" },
  { id: "we12", name: "🌙 7:00–9:00 — Dinner + family + relax" },
  { id: "we13", name: "📖 9:00–9:30 — Revise what you learned" },
  { id: "we14", name: "🙏 9:30–9:45 — Prayer + plan tomorrow" },
  { id: "we15", name: "😴 10:30 PM — Sleep" },
];
const WEEKDAY_THOUGHTS = [
  "Stay calm. Listen. Observe. Learn. Then act.",
  "Today, choose progress over showing that you already know.",
  "Don't compare your chapter 3 with someone else's chapter 20.",
  "Your college day is not just attendance; it is an investment in your future.",
  "Learn something today that your future self will thank you for.",
  "Don't think you know everything. Stay curious enough to learn something new every day.",
  "Listen more. Observe more. Speak when you have something meaningful to say.",
  "Being a beginner is not weakness. Refusing to learn is.",
  "You don't need to know everything. You need to keep learning.",
  "Ask questions without shame. Every expert was once confused.",
  "Work silently. Let your progress introduce you.",
  "Don't chase motivation. Build discipline.",
];
const WEEKEND_THOUGHTS = [
  "A free day is not an empty day. It is extra time to build the life you want.",
  "Rest when you need it, but don't let comfort steal the day.",
  "While others are waiting for Monday, use Saturday and Sunday to move ahead.",
  "You asked for more time. Now you have it. What will you do with it?",
  "Your circumstances won't change by wishing. They change when your daily actions change.",
  "One day your family may look back at these difficult years. Make sure they remember that you didn't give up.",
  "Don't waste the opportunity hidden inside an ordinary day.",
  "A difficult life is not a reason to stop; it is a reason to become stronger.",
  "You may not have everything you want today, but you still have today to build it.",
  "Don't let loneliness convince you that you are incapable. Build yourself anyway.",
  "Your current situation is a chapter, not your entire story.",
  "Keep going quietly. Your circumstances can change.",
  "You don't need more time. You need to stop wasting the time you already have.",
  "Remember why you started. Your goal is bigger than today's laziness.",
];

/* ---------- date helpers ---------- */
function pad(n){ return String(n).padStart(2,"0"); }
function dateKey(d){ return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function keyToDate(key){ const [y,m,d]=key.split("-").map(Number); const dt=new Date(y,m-1,d); dt.setHours(0,0,0,0); return dt; }
function isWeekendDate(d){ const day=d.getDay(); return day===0||day===6; }
function addDays(d,n){ const nd=new Date(d); nd.setDate(nd.getDate()+n); return nd; }
function daysInMonth(year,month){ return new Date(year, month+1, 0).getDate(); }
function hashKey(key){ let h=0; for(let i=0;i<key.length;i++){ h=(h*31+key.charCodeAt(i))|0; } return Math.abs(h); }
function esc(s){ const d=document.createElement("div"); d.innerText=s; return d.innerHTML; }

/* ---------- storage ---------- */
const LS = {
  get(key, fallback){ try{ const v=localStorage.getItem(key); return v===null? fallback : JSON.parse(v);}catch(e){ return fallback; } },
  set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} },
  del(key){ try{ localStorage.removeItem(key); }catch(e){} },
};

/* ---------- state ---------- */
const today = new Date(); today.setHours(0,0,0,0);
const todayKey = dateKey(today);
const todayIsWeekend = isWeekendDate(today);

let S = {
  habits: LS.get("streko_habits", { weekday: DEFAULT_WEEKDAY_HABITS, weekend: DEFAULT_WEEKEND_HABITS }),
  logs: LS.get("streko_logs", {}),
  thoughts: LS.get("streko_thoughts", {}),
  pin: LS.get("streko_pin", null),
  locked: false,
  editMode: false,
  viewDateKey: null,
  manualType: null,
  editingHabitId: null,
  showPinPanel: false,
  panelError: "",
  viewMonth: { year: today.getFullYear(), month: today.getMonth() },
};
S.locked = !!S.pin;
if (!S.thoughts[todayKey]) {
  const pool = todayIsWeekend ? WEEKEND_THOUGHTS : WEEKDAY_THOUGHTS;
  S.thoughts[todayKey] = pool[hashKey(todayKey) % pool.length];
  LS.set("streko_thoughts", S.thoughts);
}
if (!LS.get("streko_habits", null)) LS.set("streko_habits", S.habits);

function saveHabits(){ LS.set("streko_habits", S.habits); }
function saveLogs(){ LS.set("streko_logs", S.logs); }

/* ---------- derived getters ---------- */
function getViewDate(){ return S.viewDateKey ? keyToDate(S.viewDateKey) : today; }
function getViewKey(){ return S.viewDateKey || todayKey; }
function isViewingToday(){ return getViewKey() === todayKey; }
function getComputedType(){ const vd=getViewDate(); return S.manualType || (isWeekendDate(vd) ? "weekend" : "weekday"); }

function streakFor(habit, type){
  let count=0, cursor=new Date(today), first=true, iter=0;
  while(iter<2000){
    iter++;
    const dow=cursor.getDay();
    const scheduled = type==="weekday" ? (dow>=1&&dow<=5) : (dow===0||dow===6);
    if(scheduled){
      const key=dateKey(cursor);
      const done = !!(S.logs[key] && S.logs[key][habit.id]);
      if(first){ first=false; if(!done){ cursor=addDays(cursor,-1); continue; } }
      if(done){ count++; cursor=addDays(cursor,-1); } else break;
    } else { cursor=addDays(cursor,-1); }
    if(count>1000) break;
  }
  return count;
}

/* ---------- actions ---------- */
function toggleHabit(key, habitId){
  const dayLog = { ...(S.logs[key]||{}) };
  dayLog[habitId] = !dayLog[habitId];
  S.logs = { ...S.logs, [key]: dayLog };
  saveLogs();
  render();
}
function addHabit(type){
  const input = document.getElementById("new-habit-input");
  const name = input ? input.value.trim() : "";
  if(!name) return;
  const id = `${type}-${Date.now()}`;
  S.habits = { ...S.habits, [type]: [...S.habits[type], { id, name }] };
  saveHabits();
  render();
}
function removeHabit(type, id){
  S.habits = { ...S.habits, [type]: S.habits[type].filter(h=>h.id!==id) };
  saveHabits();
  render();
}
function startEditing(id){ S.editingHabitId = id; render(); }
function commitEdit(type, id){
  const input = document.getElementById(`edit-input-${id}`);
  const trimmed = input ? input.value.trim() : "";
  if(trimmed){
    S.habits = { ...S.habits, [type]: S.habits[type].map(h=> h.id===id ? {...h, name:trimmed} : h) };
    saveHabits();
  }
  S.editingHabitId = null;
  render();
}
function cancelEdit(){ S.editingHabitId = null; render(); }
function setManualType(t){ S.manualType = t; render(); }
function toggleEditMode(){ S.editMode = !S.editMode; S.editingHabitId=null; render(); }
function goToDateKey(key){ S.viewDateKey = key; S.manualType = null; render(); }
function goPrevDay(){ goToDateKey(dateKey(addDays(getViewDate(),-1))); }
function goNextDay(){ goToDateKey(dateKey(addDays(getViewDate(),1))); }
function goToday(){ S.viewDateKey=null; S.manualType=null; render(); }
function onDateInputChange(val){ if(val) goToDateKey(val); }
function prevMonth(){ S.viewMonth = S.viewMonth.month===0 ? {year:S.viewMonth.year-1, month:11} : {year:S.viewMonth.year, month:S.viewMonth.month-1}; render(); }
function nextMonth(){
  const isCur = S.viewMonth.year===today.getFullYear() && S.viewMonth.month===today.getMonth();
  if(isCur) return;
  S.viewMonth = S.viewMonth.month===11 ? {year:S.viewMonth.year+1, month:0} : {year:S.viewMonth.year, month:S.viewMonth.month+1};
  render();
}

/* PIN */
function openPinPanel(){ S.showPinPanel = true; S.panelError=""; render(); }
function closePinPanel(){ S.showPinPanel = false; render(); }
function savePinFromPanel(){
  const p1 = document.getElementById("panel-pin1").value;
  const p2 = document.getElementById("panel-pin2").value;
  if(!/^\d{4,6}$/.test(p1)){ S.panelError="PIN must be 4–6 digits"; render(); return; }
  if(p1!==p2){ S.panelError="PINs don't match"; render(); return; }
  S.pin = p1;
  LS.set("streko_pin", p1);
  S.showPinPanel = false;
  render();
}
function removePin(){
  S.pin = null;
  LS.del("streko_pin");
  S.showPinPanel = false;
  S.locked = false;
  render();
}
function lockNow(){
  S.showPinPanel = false;
  if(S.pin){ S.locked = true; render(); }
}
function onUnlockInput(el){
  const val = el.value.replace(/\D/g,"").slice(0, (S.pin||"").length || 6);
  el.value = val;
  const errEl = document.getElementById("pin-error");
  if(val.length === (S.pin||"").length){
    if(val === S.pin){
      S.locked = false;
      render();
    } else {
      if(errEl) errEl.style.display = "block";
      setTimeout(()=>{ el.value=""; }, 350);
    }
  } else if(errEl){
    errEl.style.display = "none";
  }
}

/* ---------- chart scroll thumb ---------- */
function updateThumb(){
  const el = document.getElementById("chart-scroll");
  const thumb = document.getElementById("chart-thumb");
  const track = document.getElementById("chart-track");
  if(!el || !thumb || !track) return;
  const cw = el.clientWidth, sw = el.scrollWidth, sl = el.scrollLeft;
  if(sw <= cw + 1){ track.style.display = "none"; return; }
  track.style.display = "block";
  const widthPct = (cw/sw)*100;
  const maxLeft = 100 - widthPct;
  const leftPct = maxLeft * (sl/(sw-cw));
  thumb.style.width = widthPct + "%";
  thumb.style.left = leftPct + "%";
}

/* ---------- render ---------- */
function render(){
  const app = document.getElementById("app");
  app.innerHTML = S.locked ? renderLocked() : renderMain();
  if(!S.locked){
    const scrollEl = document.getElementById("chart-scroll");
    if(scrollEl) scrollEl.addEventListener("scroll", updateThumb);
    updateThumb();
    if(S.editingHabitId){
      const el = document.getElementById(`edit-input-${S.editingHabitId}`);
      if(el){ el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
    }
  } else {
    const el = document.getElementById("pin-unlock-input");
    if(el) el.focus();
  }
}

function renderLocked(){
  return `
    <div class="card" style="padding:2.5rem 1.5rem;text-align:center;margin-top:2rem;">
      <div style="font-size:28px;">🔒</div>
      <div class="serif" style="font-size:22px;font-style:italic;margin:8px 0 4px;">Streko is locked</div>
      <div style="font-size:13px;color:var(--ink-soft);margin-bottom:20px;">Enter your PIN to continue</div>
      <input id="pin-unlock-input" type="password" inputmode="numeric" pattern="[0-9]*" autofocus
        oninput="onUnlockInput(this)"
        style="width:140px;text-align:center;font-size:26px;letter-spacing:0.5em;padding:10px 8px;" />
      <div id="pin-error" style="display:none;color:var(--weekend);font-size:12px;margin-top:8px;">Incorrect PIN, try again</div>
      <div style="margin-top:24px;">
        <button class="btn" onclick="removePin()">Forgot PIN? Reset lock</button>
      </div>
    </div>
  `;
}

function renderMain(){
  const activeType = todayIsWeekend ? "weekend" : "weekday";
  const activeHabits = S.habits[activeType];
  const doneCount = activeHabits.filter(h => S.logs[todayKey] && S.logs[todayKey][h.id]).length;
  const totalCount = activeHabits.length;
  const pct = totalCount ? Math.round((doneCount/totalCount)*100) : 0;

  const viewDate = getViewDate();
  const viewKey = getViewKey();
  const computedType = getComputedType();
  const viewHabits = S.habits[computedType];
  const viewDone = viewHabits.filter(h => S.logs[viewKey] && S.logs[viewKey][h.id]).length;
  const viewTotal = viewHabits.length;
  const viewPct = viewTotal ? Math.round((viewDone/viewTotal)*100) : 0;
  const dateLabel = today.toLocaleDateString("en-US",{weekday:"long", day:"numeric", month:"long"});
  const viewDateLabel = viewDate.toLocaleDateString("en-US",{weekday:"long", day:"numeric", month:"long"});

  const isCurMonth = S.viewMonth.year===today.getFullYear() && S.viewMonth.month===today.getMonth();
  const monthLabel = `${MONTH_NAMES[S.viewMonth.month]} ${S.viewMonth.year}`;
  const dim = daysInMonth(S.viewMonth.year, S.viewMonth.month);
  let chartBars = "";
  for(let day=1; day<=dim; day++){
    const d = new Date(S.viewMonth.year, S.viewMonth.month, day); d.setHours(0,0,0,0);
    const future = d > today;
    const wknd = isWeekendDate(d);
    const set = wknd ? S.habits.weekend : S.habits.weekday;
    const key = dateKey(d);
    const log = S.logs[key] || {};
    const doneN = set.filter(h=>log[h.id]).length;
    const totalN = set.length;
    const dp = totalN ? Math.round((doneN/totalN)*100) : 0;
    const color = wknd ? "var(--weekend)" : "var(--weekday)";
    const selected = key===viewKey;
    chartBars += `
      <div style="width:16px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;${future?"":"cursor:pointer;"}"
           ${future? "" : `onclick="goToDateKey('${key}')"`} title="${future?"Upcoming":`${d.toDateString()} · ${dp}%`}">
        <div style="width:100%;height:64px;display:flex;align-items:flex-end;">
          ${future? "" : `<div style="width:100%;height:${Math.max(dp,3)}%;background:${color};opacity:${key===todayKey?1:0.55};border-radius:3px 3px 0 0;${selected?`outline:2px solid var(--gold);outline-offset:1px;`:""}"></div>`}
        </div>
        <div style="font-size:9px;color:var(--ink-soft);margin-top:4px;">${day}</div>
      </div>`;
  }

  let habitRows = "";
  viewHabits.forEach((h, i) => {
    const done = !!(S.logs[viewKey] && S.logs[viewKey][h.id]);
    const streak = streakFor(h, computedType);
    const rowColor = computedType==="weekend" ? "var(--weekend)" : "var(--weekday)";
    const rowBg = computedType==="weekend" ? "var(--weekend-bg)" : "var(--weekday-bg)";
    const isEditingThis = S.editingHabitId === h.id;
    habitRows += `
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;${i===0?"":"border-top:1px solid var(--line);"}background:${done?rowBg:"transparent"};">
        <div onclick="toggleHabit('${viewKey}','${h.id}')" style="width:20px;height:20px;border-radius:6px;border:1.5px solid ${done?rowColor:"var(--line)"};background:${done?rowColor:"transparent"};display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer;">
          ${done? `<span style="color:#fff;font-size:12px;">✓</span>` : ""}
        </div>
        ${isEditingThis ? `
          <input id="edit-input-${h.id}" type="text" value="${esc(h.name)}"
            onkeydown="if(event.key==='Enter'){commitEdit('${computedType}','${h.id}')} if(event.key==='Escape'){cancelEdit()}"
            onblur="commitEdit('${computedType}','${h.id}')"
            style="flex:1;font-size:14px;border:1px solid var(--gold);border-radius:6px;padding:4px 8px;" />
        ` : `
          <div onclick="${S.editMode?`startEditing('${h.id}')`:`toggleHabit('${viewKey}','${h.id}')`}" style="flex:1;font-size:14px;cursor:pointer;${done?`text-decoration:line-through;color:var(--ink-soft);`:""}">${esc(h.name)}</div>
        `}
        ${!isEditingThis ? `
          <div style="display:flex;align-items:center;gap:4px;font-size:12px;color:var(--gold);font-family:ui-monospace,monospace;">🔥${streak}</div>
        ` : ""}
        ${S.editMode && !isEditingThis ? `
          <span onclick="startEditing('${h.id}')" style="cursor:pointer;color:var(--ink-soft);">✏️</span>
          <span onclick="removeHabit('${computedType}','${h.id}')" style="cursor:pointer;color:var(--ink-soft);">✕</span>
        ` : ""}
      </div>`;
  });

  return `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
      <div>
        <div class="serif" style="font-size:26px;font-style:italic;">Streko</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">${dateLabel}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="background:${todayIsWeekend?"var(--weekend-bg)":"var(--weekday-bg)"};color:${todayIsWeekend?"var(--weekend)":"var(--weekday)"};padding:6px 14px;border-radius:999px;font-size:12px;font-weight:600;text-transform:uppercase;">
          ${todayIsWeekend?"Weekend format":"Weekday format"}
        </div>
        <button class="btn" onclick="openPinPanel()" title="${S.pin?"Change or remove PIN":"Set a PIN lock"}" style="color:${S.pin?"var(--gold)":"var(--ink-soft)"};">
          ${S.pin?"🔒":"🔓"}
        </button>
      </div>
    </div>

    ${S.showPinPanel ? `
      <div class="card" style="border-color:var(--gold);padding:14px 18px;margin-bottom:16px;">
        <div style="font-size:13px;font-weight:600;margin-bottom:10px;">${S.pin?"Change PIN lock":"Set a PIN lock"}</div>
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
          <input id="panel-pin1" type="password" inputmode="numeric" placeholder="New PIN" style="flex:1;min-width:100px;" />
          <input id="panel-pin2" type="password" inputmode="numeric" placeholder="Confirm PIN" style="flex:1;min-width:100px;" />
        </div>
        ${S.panelError ? `<div style="color:var(--weekend);font-size:12px;margin-bottom:8px;">${esc(S.panelError)}</div>` : ""}
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn" style="border-color:var(--gold);background:#F3E8CE;color:#7A5A17;font-weight:600;" onclick="savePinFromPanel()">Save PIN</button>
          ${S.pin? `<button class="btn" onclick="lockNow()">Lock now</button>` : ""}
          ${S.pin? `<button class="btn" style="color:var(--weekend);" onclick="removePin()">Remove PIN</button>` : ""}
          <button class="btn" style="margin-left:auto;color:var(--ink-soft);" onclick="closePinPanel()">Close</button>
        </div>
      </div>
    ` : ""}

    <div class="card" style="padding:14px 18px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <button class="btn" onclick="prevMonth()">‹</button>
        <div style="text-align:center;">
          <div class="serif" style="font-size:16px;">${monthLabel}</div>
          <div style="font-size:10px;color:var(--ink-soft);text-transform:uppercase;">${isCurMonth?"Current month":"Tap a day to inspect"}</div>
        </div>
        <button class="btn" onclick="nextMonth()" ${isCurMonth?"disabled":""}>›</button>
      </div>
      <div id="chart-scroll" style="overflow-x:auto;padding-bottom:4px;">
        <div style="display:flex;align-items:flex-end;gap:5px;height:90px;width:${dim*20}px;min-width:100%;">
          ${chartBars}
        </div>
      </div>
      <div id="chart-track" style="height:4px;background:var(--line);border-radius:999px;margin-top:6px;position:relative;display:none;">
        <div id="chart-thumb" style="position:absolute;top:0;height:4px;border-radius:999px;background:var(--ink-soft);"></div>
      </div>
    </div>

    <div class="card" style="padding:14px 18px;display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;font-family:ui-monospace,monospace;">
      <div style="font-size:15px;">${doneCount} of ${totalCount} habits</div>
      <div style="font-size:22px;font-weight:600;color:${todayIsWeekend?"var(--weekend)":"var(--weekday)"};">${pct}% today</div>
    </div>

    <div class="card" style="border-left:3px solid var(--gold);padding:14px 18px;margin-bottom:20px;">
      <div style="display:flex;align-items:center;gap:6px;font-size:11px;text-transform:uppercase;color:var(--gold);font-weight:600;margin-bottom:8px;">✨ Thought for today · locked</div>
      <div class="serif" style="font-size:17px;line-height:1.5;font-style:italic;">"${esc(S.thoughts[todayKey] || "")}"</div>
    </div>

    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
        <div class="card" style="display:flex;gap:4px;padding:3px;">
          <button onclick="setManualType('weekday')" style="border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer;background:${computedType==="weekday"?"var(--weekday-bg)":"transparent"};color:${computedType==="weekday"?"var(--weekday)":"var(--ink-soft)"};">Weekday</button>
          <button onclick="setManualType('weekend')" style="border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:pointer;background:${computedType==="weekend"?"var(--weekend-bg)":"transparent"};color:${computedType==="weekend"?"var(--weekend)":"var(--ink-soft)"};">Weekend</button>
        </div>
        <button class="btn" onclick="toggleEditMode()" style="${S.editMode?"border-color:var(--gold);background:#F3E8CE;color:#7A5A17;":""}font-weight:600;">✏️ ${S.editMode?"Editing habits: on":"Editing habits: off"}</button>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:4px;">
          <button class="btn" onclick="goPrevDay()">‹</button>
          <input type="date" value="${viewKey}" max="${todayKey}" onchange="onDateInputChange(this.value)" style="width:auto;" />
          <button class="btn" onclick="goNextDay()" ${isViewingToday()?"disabled":""}>›</button>
        </div>
        ${!isViewingToday() ? `<button class="btn" onclick="goToday()">Back to today</button>` : ""}
      </div>

      <div style="font-size:13px;font-weight:600;color:var(--ink-soft);margin-bottom:8px;">
        ${isViewingToday()?"Today's habits":esc(viewDateLabel)} — ${viewDone} of ${viewTotal} · ${viewPct}%
      </div>

      <div class="card" style="overflow:hidden;">
        ${habitRows}
      </div>

      ${S.editMode ? `
        <div style="display:flex;gap:8px;margin-top:8px;">
          <input id="new-habit-input" type="text" placeholder="Add a ${computedType} habit" onkeydown="if(event.key==='Enter'){addHabit('${computedType}')}" />
          <button class="btn" onclick="addHabit('${computedType}')" style="flex-shrink:0;">＋</button>
        </div>
      ` : ""}
    </div>
  `;
}

render();
