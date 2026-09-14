/* Ganesha — standalone PWA. All data lives in this phone's localStorage. */

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const DEFAULT_WEEKDAY_HABITS = [
  { id: "wd2_1", name: "7:30 AM — 🌅 Wake up 📵" },
  { id: "wd2_2", name: "7:30–8:00 AM — 🙏 Prayer + Freshen up + Breakfast + Get ready" },
  { id: "wd2_3", name: "8:00–9:00 AM — 🚌 Travel → 🗣️ English / 🤖 ML videos / Revision" },
  { id: "wd2_4", name: "9:00 AM–5:00 PM — 🎓 College → Classes + Semester studies" },
  { id: "wd2_5", name: "5:00–6:00 PM — 🚌 Travel → Rest / 🗣️ English listening" },
  { id: "wd2_6", name: "6:00–9:30 PM — 😴 Sleep" },
  { id: "wd2_7", name: "9:30–10:00 PM — 🍽️ Dinner + Freshen up + Prepare for study" },
  { id: "wd2_8", name: "10:00 PM–12:00 AM — 🤖 AI/ML ⭐" },
  { id: "wd2_9", name: "12:00–1:30 AM — 📚 Semester Studies ⭐" },
  { id: "wd2_10", name: "1:30–2:45 AM — 💻 Project ⭐" },
  { id: "wd2_11", name: "2:45–3:45 AM — 🧠 DSA" },
  { id: "wd2_12", name: "3:45–4:30 AM — 🎯 Aptitude" },
  { id: "wd2_13", name: "4:30–5:15 AM — 🔬 Tech/ML Research" },
  { id: "wd2_14", name: "5:15–5:45 AM — 🤖 AI/ML Revision / Practice" },
  { id: "wd2_15", name: "5:45–6:00 AM — 📝 Review + Plan Tomorrow" },
  { id: "wd2_16", name: "6:00–7:30 AM — 😴 Sleep" },
];
const DEFAULT_WEEKEND_HABITS = [
  { id: "we2_1", name: "7:30 AM — 🌅 Wake up 📵" },
  { id: "we2_2", name: "7:30–8:00 AM — 🙏 Prayer + Freshen up + Breakfast" },
  { id: "we2_3", name: "8:00–9:00 AM — 🗣️ English → Speaking + Vocabulary + Listening" },
  { id: "we2_4", name: "9:00–11:00 AM — 🤖 AI/ML ⭐ → Coding + Practice" },
  { id: "we2_5", name: "11:00 AM–1:00 PM — 💻 Project ⭐" },
  { id: "we2_6", name: "1:00–2:00 PM — 🍽️ Lunch + Personal time" },
  { id: "we2_7", name: "2:00–3:30 PM — 📚 Semester Studies ⭐ → Subjects + Notes + Revision" },
  { id: "we2_8", name: "3:30–5:00 PM — 🧠 DSA ⭐ → Concepts + Coding Problems" },
  { id: "we2_9", name: "5:00–6:00 PM — 🎯 Aptitude → Practice + Shortcuts" },
  { id: "we2_10", name: "6:00–9:30 PM — 😴 Sleep" },
  { id: "we2_11", name: "9:30–10:00 PM — 🍽️ Dinner + Freshen up" },
  { id: "we2_12", name: "10:00 PM–12:00 AM — 🤖 AI/ML ⭐ → Hands-on Practice" },
  { id: "we2_13", name: "12:00–1:30 AM — 🔬 Tech/ML Research ⭐ → New technologies + Papers + Industry Trends" },
  { id: "we2_14", name: "1:30–3:00 AM — 💻 Project ⭐" },
  { id: "we2_15", name: "3:00–4:00 AM — 🧠 DSA → Coding Practice" },
  { id: "we2_16", name: "4:00–5:00 AM — 📚 Semester Studies → Revision / Pending Work" },
  { id: "we2_17", name: "5:00–5:30 AM — 🗣️ English → Speaking Practice" },
  { id: "we2_18", name: "5:30–6:00 AM — 📝 Weekly Review + Plan Next Week" },
  { id: "we2_19", name: "6:00–7:30 AM — 😴 Sleep" },
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
  "Discipline is choosing between what you want now and what you want most.",
  "The class you almost skipped might hold the one thing you needed.",
  "Small, boring, consistent effort beats big, occasional bursts.",
  "Nobody sees the 6 AM version of you. That's exactly why it matters.",
  "You don't rise to the level of your goals. You fall to the level of your habits.",
  "A quiet mind learns faster than a loud one.",
  "Today's lecture is tomorrow's advantage, if you actually pay attention.",
  "Discipline is remembering what you want, even when you don't feel like it.",
  "Your notes today are a letter to the version of you who forgets.",
  "Consistency isn't glamorous. Neither is a strong foundation.",
  "The habit of showing up outlasts the mood to show up.",
  "You don't need a perfect day. You need one honest hour of focus.",
  "Silence teaches what noise never can, pay attention to it.",
  "The student who listens twice and speaks once learns fastest.",
  "Observation is a skill. Practice it in every class, every conversation.",
  "Humility keeps the door to learning open. Ego shuts it.",
  "What you avoid today usually waits for you tomorrow, heavier.",
  "Procrastination doesn't remove the task. It just adds interest to the debt.",
  "Every skill you're avoiding is a skill someone else is practicing right now.",
  "The gap between where you are and where you want to be is called discipline.",
  "You don't need to feel ready. You need to start anyway.",
  "One focused hour beats three distracted ones.",
  "Today's small inconvenience is tomorrow's shortcut.",
  "Attention is the currency of learning. Spend it wisely today.",
  "The best notes are taken by the most humble listener in the room.",
  "You're not behind. You're exactly where your effort has placed you.",
  "Growth is quiet. It rarely announces itself in the moment.",
  "Discipline feels heavy today and light in a year. Laziness is the opposite.",
  "Nobody becomes skilled by accident. Show up on purpose.",
  "The comfortable choice and the useful choice are rarely the same one.",
  "Study like the exam is tomorrow, even when it's a month away.",
  "The person who asks 'why' the most, learns the most.",
  "Your attention span is your most valuable college resource, protect it.",
  "Today isn't for proving you're smart. It's for becoming smarter.",
  "The lecture you find boring might be the one you need the most.",
  "Consistency compounds quietly until one day it's undeniable.",
  "You don't need permission to take today seriously.",
  "A distracted student and a disciplined one attend the same class, only one learns.",
  "Every missed deadline was once a day that felt like there was plenty of time.",
  "Stop waiting to feel motivated. Start, and motivation will catch up.",
  "The version of you that studies today is building the version that succeeds later.",
  "You can't get back today. Spend it like it matters, because it does.",
  "It's not about being the smartest in the room. It's about being the most consistent.",
  "Nobody remembers the day you didn't feel like it. They remember what you built anyway.",
  "Confusion is not failure. It's the first step of understanding.",
  "The quiet effort you put in today is invisible until it isn't.",
  "Discipline is a private decision with a public result.",
  "A humble learner asks more questions than a proud expert.",
  "You are one focused week away from feeling completely different about your progress.",
  "The habit of finishing what you start is rarer, and more valuable, than talent.",
  "Today's small task, done well, is tomorrow's confidence.",
  "Your future career is being built in today's ordinary classroom.",
  "Learning never insults you for not knowing. Only pride does.",
  "You don't need a breakthrough today. You need a decent, honest effort.",
  "The most successful people you'll meet weren't the loudest in class. They were the most consistent.",
  "Every expert's first attempt looked exactly like your current one, clumsy and unsure.",
  "Discomfort today, in a classroom or in practice, is just growth wearing a disguise.",
  "You're not too far behind to start. You're just late to begin, which is not the same thing.",
  "The habit of showing up on hard days is what separates results from excuses.",
  "Today's distractions are loud. Today's opportunities are quiet. Choose which one you listen to.",
  "A humble mind grows. A proud mind stalls.",
  "The best time to focus was an hour ago. The next best time is now.",
  "You don't need to impress anyone today. You need to improve, quietly.",
  "Every skill that looks effortless was once painfully awkward to practice.",
  "Listening well is a form of respect, for the subject, and for yourself.",
  "The work you do when no one's watching decides who you become when everyone is.",
  "You are allowed to be a beginner. You are not allowed to quit because of it.",
  "Discipline isn't punishment. It's how you keep a promise to your future self.",
  "The lecture ends. What you do with it doesn't have to.",
  "Progress hides in ordinary Tuesdays, not just big moments.",
  "You don't need to know the whole path today. You need the next honest step.",
  "The habit of finishing small tasks builds the confidence to finish big ones.",
  "A curious question is worth more than a confident guess.",
  "Today's effort is a deposit into an account only you can see the balance of.",
  "Nobody is born disciplined. It's built one uncomfortable choice at a time.",
  "Stay a student of everything, even the things you think you already understand.",
  "The classroom teaches the subject. Attention teaches everything else.",
  "You are building a career one unremarkable weekday at a time, don't underestimate it.",
  "Silence during a lecture is not empty, it's where understanding happens.",
  "What feels repetitive today is what feels natural next year.",
  "The most dangerous words in learning are 'I already know this.'",
  "You don't have to enjoy every subject to respect what it teaches you.",
  "A day of honest effort is worth more than a week of good intentions.",
  "Your discipline today is a quiet promise kept to someone who isn't watching, you.",
  "Understanding takes longer than memorizing, but it lasts longer too.",
  "The habit of paying attention is rarer than the habit of being smart.",
  "You're not just attending college. You're assembling the person who leaves it.",
  "Today's ordinary effort is tomorrow's extraordinary result, give it time.",
  "The next five minutes of focus matter more than yesterday's five wasted hours.",
  "You don't need to be the fastest learner. You need to be the one who doesn't stop.",
  "A closed notebook teaches nothing. Neither does a closed mind.",
  "The habit you build on an ordinary Wednesday is the one that shows up when it counts.",
  "Self-improvement isn't a single decision. It's hundreds of small ones, repeated.",
  "You don't improve by feeling ready. You improve by doing the uncomfortable thing anyway.",
  "The best investment you'll ever make is in the person you're becoming.",
  "Improvement compounds. A slightly better version of you today becomes a very different person in a year.",
  "The goal isn't to be perfect today. It's to be a little better than yesterday's version of you.",
  "Self-improvement without patience just becomes self-criticism.",
  "You don't need a new plan every week. You need to actually follow the one you already have.",
  "Getting a little better at something today is invisible. Getting a little better every day for a year is not.",
  "Success is rarely one big moment. It's a thousand unremarkable days nobody was watching.",
  "The people who look successful overnight usually spent years being unseen first.",
  "Define your own version of success before someone else defines it for you.",
  "Success without character is just a louder kind of failure.",
  "You don't need to be first. You need to be the one who didn't quit.",
  "Real success is being the same disciplined person whether or not anyone is watching.",
  "The success you're chasing is being built right now, in the boring part nobody applauds.",
  "Respect isn't demanded. It's earned quietly through consistency.",
  "Respect follows competence. Build the skill, and the respect tends to follow.",
  "People respect results more than promises. Let your work speak first.",
  "Self-respect is refusing to lower your standards just because today is hard.",
  "You'll earn more respect from one honest year of effort than from a lifetime of talking about it.",
  "The classmate who quietly outworks everyone earns more respect than the one who talks about working hard.",
  "Respect starts with respecting your own time enough to actually use it.",
  "Money follows value. Build the skill first, and give it a reason to follow.",
  "Financial freedom starts with a skill, not a shortcut.",
  "The income you want tomorrow is being built by the skills you practice today.",
  "Every skill you master today is a future source of income you haven't unlocked yet.",
  "Wanting to earn more isn't wrong. Wanting it without building the ability to deserve it is.",
  "The best financial plan for a student is becoming genuinely good at something valuable.",
  "A degree opens a door. What you actually learned decides which room you end up in.",
  "Protecting your study time from distraction isn't selfish, it's necessary.",
  "Saying no to a distraction today is saying yes to the person you're trying to become.",
  "You're allowed to prioritize your goals sometimes. That's self-respect, not selfishness.",
  "Guarding your energy for what matters isn't cruelty, it's discipline.",
  "You can't give your best to anything if you never protect any time for yourself.",
  "Choosing focused work over constant availability to everyone isn't selfish, it's necessary.",
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
  "Rest is not the enemy of progress. Wasted hours are.",
  "A weekend well spent quietly outworks five weekdays of good intentions.",
  "Helping at home today is not a distraction from your goals, it's part of who you're becoming.",
  "The people who love you are also part of the life you're working to build.",
  "Free time reveals character. What you do when no one's checking on you is who you really are.",
  "A single unplanned Saturday, repeated every week, quietly becomes a wasted year.",
  "You can rest and still make progress. It's not one or the other.",
  "The weekend didn't ask to be wasted. You chose that, and you can choose differently.",
  "Family time today is not time lost from your future, it's part of the reason for it.",
  "Some days you build skills. Other days you build the relationships that make the skills worth having.",
  "Appreciate today as it is, not as a lesser version of some imagined better day.",
  "The comfort of doing nothing feels good for an hour and empty by evening.",
  "You are allowed to slow down. You are not allowed to disappear into the couch for two full days.",
  "A tired body still deserves rest. A distracted mind still owes itself some effort.",
  "Nobody hands you extra hours. A free day is one you already earned, don't waste it.",
  "The difference between a good week and an average one is usually just the weekend.",
  "Your responsibilities at home are not obstacles to your dreams. They're proof of your character.",
  "One relaxed morning is healthy. One relaxed weekend, every weekend, is a pattern worth noticing.",
  "Life is not only the goal ahead. It's also the ordinary Sunday you're currently living through.",
  "Missed opportunities rarely announce themselves. They just quietly become 'what if.'",
  "You don't have to fill every hour with productivity. You do have to stop pretending rest and scrolling are the same thing.",
  "The version of you a year from now is being shaped by what you do with today's free hours.",
  "Difficult seasons don't last, but what you build during them does.",
  "A weekend spent on your project is a quiet advantage nobody else sees yet.",
  "You are not behind because you rested. You'd only be behind if you never got back up.",
  "Take care of your family today, that is not separate from taking care of your future.",
  "The hours you're 'saving' by doing nothing aren't being saved. They're being spent on nothing.",
  "Appreciating life means noticing today, not just chasing tomorrow.",
  "A hard week deserves real rest, not guilt, and not two wasted days either.",
  "You don't need to prove anything today. You need to use today, gently but honestly.",
  "The weekend project you keep postponing isn't getting easier by waiting.",
  "Loneliness lies. It tells you that you're the only one struggling. You're not.",
  "One day, this difficult stretch will just be a story you tell about how you didn't quit.",
  "Rest with intention. Waste happens when you rest without noticing you're doing it.",
  "Your family's sacrifices are part of your responsibility to finish what you started.",
  "A Sunday spent learning something new is worth more than it feels like right now.",
  "You can't get back a wasted weekend. You can only decide the next one goes differently.",
  "The best time to fix a wasted week is the very next free day you get.",
  "Struggling quietly and still showing up is its own kind of strength.",
  "A life fully planned leaves no room for living it, leave space to actually enjoy today.",
  "The extra hours you have today are not a break from your goals. They're a chance to get ahead of them.",
  "Circumstances test you. They don't define you, unless you let them.",
  "Some of your best growth will happen on ordinary weekends nobody else notices.",
  "You are not required to be productive every second. You are required to be honest about which hours you're wasting.",
  "A single Saturday used well can undo a week of feeling behind.",
  "Family responsibility today is not a delay to your dreams. It's part of the reason they matter.",
  "The comfort of 'I'll do it tomorrow' has quietly stolen more weekends than anything else.",
  "You don't need permission to rest. You do need honesty about whether it's rest or avoidance.",
  "This difficult period is shaping a stronger version of you, even on days it doesn't feel like it.",
  "Appreciate the people around you today, success means less without them.",
  "A free day used with intention is worth more than a busy week used without it.",
  "You're allowed to enjoy today without feeling guilty about tomorrow's work.",
  "The habit of using weekends wisely is often what separates steady progress from stalled dreams.",
  "Loneliness feels permanent. It rarely is.",
  "Every hard year eventually becomes a chapter you're proud you survived.",
  "You don't need a perfect weekend. You need one that isn't completely wasted.",
  "Take a real break today, then take real action tomorrow. Both matter.",
  "The life you want is built in the hours nobody's forcing you to use well.",
  "Your current struggle has an expiration date, even when it doesn't feel like it.",
  "Don't mistake exhaustion for laziness. Rest properly, then return properly.",
  "A quiet Sunday spent on your goals is a secret advantage over a loud Monday full of regret.",
  "You are the only one who can turn today's free hours into tomorrow's progress.",
  "Family, rest, and ambition aren't competing for your time, they're all part of the same life you're building.",
  "This weekend won't come back. Neither will the next one. Use at least one of them well.",
  "You don't have to earn rest through suffering. You just have to be honest about needing it.",
  "The version of you that keeps showing up on hard weekends is the version that eventually wins.",
  "One difficult day doesn't cancel out ten good ones. Don't let it convince you otherwise.",
  "A wasted weekend whispers 'it's just one day.' Ten wasted weekends later, it wasn't.",
  "You can love your family and still carve out an hour for your own future today.",
  "Appreciating life sometimes just means noticing you made it through a hard week.",
  "The extra hours of a free day are a gift you gave yourself by surviving the week, don't waste the gift.",
  "Responsibility isn't a burden stealing your time. It's proof that people are counting on you, and you're showing up.",
  "This isn't the life you'll always have. Notice it, even the hard parts, while you're building something better.",
  "A single honest hour of work today can outweigh an entire wasted afternoon of guilt about not working.",
  "You are stronger today than you were during your last hard season. That's not nothing.",
  "The weekend doesn't owe you rest or productivity. You decide, honestly, what you actually need right now.",
  "Missed opportunities usually looked like ordinary free afternoons at the time.",
  "Difficult circumstances build patience you didn't know you had, use it well today.",
  "You don't need to escape your responsibilities today. You need thirty honest minutes for yourself inside them.",
  "A life well-lived includes naps, family dinners, and unfinished to-do lists, don't chase a life with none of those.",
  "The hardest part of a difficult season is usually just today. Get through today.",
  "You can rest today without forgetting why you started this in the first place.",
  "A weekend spent connecting with family is not time away from your goals, it's part of what makes them worth reaching.",
  "The gap between a wasted Sunday and a useful one is usually just thirty minutes of starting anyway.",
  "You're allowed to enjoy the life you have today while still building the one you want tomorrow.",
  "Remember why you started, not to guilt yourself, but to remind yourself it still matters.",
  "Two rested days can prepare you better than five anxious ones, if the rest is honest.",
  "The people waiting for you at home are not behind your dream. They're part of it.",
  "Self-improvement doesn't pause on the weekend, it just looks different, quieter, more personal.",
  "The person you become is shaped as much by your Sundays as your Mondays.",
  "A weekend spent reflecting honestly on the week is its own kind of self-improvement.",
  "You don't need a new version of yourself overnight. You need small honest adjustments, repeated.",
  "Improvement isn't only about doing more. Sometimes it's about doing less of what isn't working.",
  "Rest properly this weekend so the improved version of you actually shows up on Monday.",
  "Taking care of yourself first isn't selfish, it's what makes you capable of taking care of anyone else.",
  "A little healthy selfishness with your time now prevents a lot of regret later.",
  "You can't pour from an empty cup. Refill yourself before you try to refill everyone else.",
  "Choosing your own growth over everyone else's approval is not selfish, it's necessary.",
  "It's not selfish to rest. It's unsustainable to expect yourself to run on empty forever.",
  "Protecting one hour for yourself this weekend doesn't take away from your family, it makes you more present for them.",
  "You are allowed to want things for yourself, even while showing up for everyone else.",
  "Success that costs you every relationship along the way isn't success, it's a trade you'll regret.",
  "Success looks different resting on a Sunday than it does grinding through a Tuesday, both are part of it.",
  "The success you want later is being quietly funded by the ordinary weekends you don't waste now.",
  "Real success includes the people who were there before you had any of it.",
  "You can want success and still enjoy today. Neither has to wait for the other.",
  "Chasing success at the cost of your family isn't ambition, it's a miscalculation.",
  "Respect at home is earned the same way respect anywhere is, by showing up reliably.",
  "The respect you get from your family is often quieter, and more permanent, than the kind you chase outside it.",
  "You earn more respect helping without being asked than by announcing how hard you work.",
  "Self-respect means keeping your word to yourself, even on a lazy Saturday.",
  "Respect isn't just what others give you. It's also what you give yourself when no one's watching.",
  "The people who respect you most probably aren't impressed by achievements, they're impressed by who you are on an ordinary day.",
  "Financial freedom is a long game, played mostly on ordinary days like this one.",
  "Wanting to earn more for your family is not greed, it's responsibility, pursue it with skill, not shortcuts.",
  "Money you understand how to manage matters more than money you simply have.",
  "The habit of saving and planning, practiced quietly this weekend, matters more than any single paycheck.",
  "Earning more means less if you never learn to value what you already have.",
  "A weekend spent building a real skill is a better investment than a weekend spent chasing a shortcut to money.",
];

/* ---------- date helpers ---------- */
function pad(n){ return String(n).padStart(2,"0"); }
function dateKey(d){ return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function keyToDate(key){ const [y,m,d]=key.split("-").map(Number); const dt=new Date(y,m-1,d); dt.setHours(0,0,0,0); return dt; }
function isWeekendDate(d){ return d.getDay()===0; }
function addDays(d,n){ const nd=new Date(d); nd.setDate(nd.getDate()+n); return nd; }
function daysInMonth(year,month){ return new Date(year, month+1, 0).getDate(); }
function esc(s){ const d=document.createElement("div"); d.innerText=s; return d.innerHTML; }
function getTimeRemainingText(){
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1, 0, 0, 0, 0);
  let diffMs = midnight - now;
  if(diffMs < 0) diffMs = 0;
  const totalMin = Math.floor(diffMs / 60000);
  const hh = Math.floor(totalMin / 60);
  const mm = totalMin % 60;
  return hh > 0 ? `${hh}h ${pad(mm)}m left` : `${mm}m left`;
}

/* ---------- storage ---------- */
const LS = {
  get(key, fallback){ try{ const v=localStorage.getItem(key); return v===null? fallback : JSON.parse(v);}catch(e){ return fallback; } },
  set(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} },
  del(key){ try{ localStorage.removeItem(key); }catch(e){} },
};

/* ---------- state ---------- */
const today = new Date(); today.setHours(0,0,0,0);
const todayKey = dateKey(today);

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

/* Mon-Sat share one schedule; only Sunday is the separate "weekend" type. */
function getDayType(d){
  return isWeekendDate(d) ? "weekend" : "weekday";
}

/* Draws a thought index without repeats until the whole pool has been used once,
   then reshuffles for a fresh cycle — this is what actually prevents repeats,
   rather than relying on a hash of the date landing on different slots. */
function pickThoughtIndex(poolLen, cycleKey){
  let queue = LS.get(cycleKey, null);
  if (!Array.isArray(queue) || queue.length === 0 || queue.some((i) => i >= poolLen)) {
    queue = Array.from({ length: poolLen }, (_, i) => i);
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
  }
  const idx = queue.pop();
  LS.set(cycleKey, queue);
  return idx;
}

if (!S.thoughts[todayKey]) {
  const isWeekendToday = getDayType(today) === "weekend";
  const pool = isWeekendToday ? WEEKEND_THOUGHTS : WEEKDAY_THOUGHTS;
  const cycleKey = isWeekendToday ? "streko_thought_cycle_weekend" : "streko_thought_cycle_weekday";
  const idx = pickThoughtIndex(pool.length, cycleKey);
  S.thoughts[todayKey] = pool[idx];
  LS.set("streko_thoughts", S.thoughts);
}
if (!LS.get("streko_habits", null)) LS.set("streko_habits", S.habits);

/* One-time migration: move existing installs onto the new Mon-Sat / Sunday-only
   schedule. Detected by old habit-id prefixes; logs/pin/thoughts are untouched,
   so streaks for the old habit ids simply stop (their ids no longer exist) while
   everything else on the phone stays exactly as it was. */
const SCHEDULE_VERSION = 2;
if (LS.get("streko_schedule_version", 1) < SCHEDULE_VERSION) {
  S.habits = { weekday: DEFAULT_WEEKDAY_HABITS, weekend: DEFAULT_WEEKEND_HABITS };
  saveHabits();
  LS.set("streko_schedule_version", SCHEDULE_VERSION);
}

function saveHabits(){ LS.set("streko_habits", S.habits); }
function saveLogs(){ LS.set("streko_logs", S.logs); }

/* ---------- derived getters ---------- */
function getViewDate(){ return S.viewDateKey ? keyToDate(S.viewDateKey) : today; }
function getViewKey(){ return S.viewDateKey || todayKey; }
function isViewingToday(){ return getViewKey() === todayKey; }
function getComputedType(){ const vd=getViewDate(); return S.manualType || getDayType(vd); }

function streakFor(habit, type){
  let count = 0;
  let cursor = new Date(today);
  let iter = 0;
  while(iter < 3660){
    iter++;
    if(getDayType(cursor) === type){
      const key = dateKey(cursor);
      const done = !!(S.logs[key] && S.logs[key][habit.id]);
      if(done){
        count++;
      } else if(key !== todayKey){
        break; // a genuinely missed past scheduled day ends the streak
      }
      // if it's today and not done yet, skip it (day isn't over) without breaking or counting
    }
    cursor = addDays(cursor, -1);
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
      <div class="serif" style="font-size:22px;font-style:italic;margin:8px 0 4px;">Ganesha is locked</div>
      <div style="font-size:13px;color:var(--ink-soft);margin-bottom:20px;">Enter your PIN to continue</div>
      <input id="pin-unlock-input" type="password" inputmode="numeric" pattern="[0-9]*" autofocus
        oninput="onUnlockInput(this)"
        style="width:140px;text-align:center;font-size:26px;letter-spacing:0.5em;padding:10px 8px;" />
      <div id="pin-error" style="display:none;color:var(--weekend);font-size:12px;margin-top:8px;">Incorrect PIN, try again</div>
    </div>
  `;
}

function renderMain(){
  const todayIsWeekend = getDayType(today) === "weekend";
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
    const wknd = getDayType(d) === "weekend";
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
  const dayLocked = !isViewingToday();
  viewHabits.forEach((h, i) => {
    const done = !!(S.logs[viewKey] && S.logs[viewKey][h.id]);
    const wrong = dayLocked && !done;
    const streak = streakFor(h, computedType);
    const isEditingThis = S.editingHabitId === h.id;
    const rowBackground = wrong ? "var(--wrong-bg)" : (done ? "var(--done-bg)" : "transparent");
    const boxBorder = wrong ? "var(--wrong)" : (done ? "var(--done)" : "var(--line)");
    const boxBg = wrong ? "var(--wrong)" : (done ? "var(--done)" : "transparent");
    const boxMark = wrong ? "✕" : (done ? "✓" : "");
    const checkboxAttr = dayLocked ? "" : `onclick="toggleHabit('${viewKey}','${h.id}')"`;
    const checkboxCursor = dayLocked ? "cursor:default;" : "cursor:pointer;";
    const labelAttr = S.editMode ? `onclick="startEditing('${h.id}')"` : (dayLocked ? "" : `onclick="toggleHabit('${viewKey}','${h.id}')"`);
    const labelCursor = (S.editMode || !dayLocked) ? "cursor:pointer;" : "cursor:default;";
    const labelColor = done ? "text-decoration:line-through;color:var(--ink-soft);" : (wrong ? "color:var(--wrong);" : "");
    habitRows += `
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;${i===0?"":"border-top:1px solid var(--line);"}background:${rowBackground};">
        <div ${checkboxAttr} style="width:20px;height:20px;border-radius:6px;border:1.5px solid ${boxBorder};background:${boxBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;${checkboxCursor}">
          ${boxMark ? `<span style="color:#fff;font-size:12px;">${boxMark}</span>` : ""}
        </div>
        ${isEditingThis ? `
          <input id="edit-input-${h.id}" type="text" value="${esc(h.name)}"
            onkeydown="if(event.key==='Enter'){commitEdit('${computedType}','${h.id}')} if(event.key==='Escape'){cancelEdit()}"
            onblur="commitEdit('${computedType}','${h.id}')"
            style="flex:1;font-size:14px;border:1px solid var(--gold);border-radius:6px;padding:4px 8px;" />
        ` : `
          <div ${labelAttr} style="flex:1;font-size:14px;${labelCursor}${labelColor}">${esc(h.name)}</div>
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
        <div class="serif" style="font-size:26px;font-style:italic;">Ganesha</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">${dateLabel}</div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <div style="background:${todayIsWeekend?"var(--weekend-bg)":"var(--weekday-bg)"};color:${todayIsWeekend?"var(--weekend)":"var(--weekday)"};padding:6px 14px;border-radius:999px;font-size:12px;font-weight:600;text-transform:uppercase;">
          ${todayIsWeekend?"Weekend format":"Weekday format"}
        </div>
        <button class="btn" onclick="openPinPanel()" title="${S.pin?"Lock now":"Set a PIN lock"}" style="color:${S.pin?"var(--gold)":"var(--ink-soft)"};">
          ${S.pin?"🔒":"🔓"}
        </button>
      </div>
    </div>

    ${S.showPinPanel ? `
      <div class="card" style="border-color:var(--gold);padding:14px 18px;margin-bottom:16px;">
        ${S.pin ? `
          <div style="font-size:13px;font-weight:600;margin-bottom:10px;">🔒 PIN lock is on</div>
          <div style="font-size:12px;color:var(--ink-soft);margin-bottom:10px;">Only the correct PIN opens this app — there's no reset or bypass option.</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn" style="border-color:var(--gold);background:#F3E8CE;color:#7A5A17;font-weight:600;" onclick="lockNow()">Lock now</button>
            <button class="btn" style="margin-left:auto;color:var(--ink-soft);" onclick="closePinPanel()">Close</button>
          </div>
        ` : `
          <div style="font-size:13px;font-weight:600;margin-bottom:10px;">Set a PIN lock</div>
          <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap;">
            <input id="panel-pin1" type="password" inputmode="numeric" placeholder="New PIN" style="flex:1;min-width:100px;" />
            <input id="panel-pin2" type="password" inputmode="numeric" placeholder="Confirm PIN" style="flex:1;min-width:100px;" />
          </div>
          ${S.panelError ? `<div style="color:var(--weekend);font-size:12px;margin-bottom:8px;">${esc(S.panelError)}</div>` : ""}
          <div style="font-size:11px;color:var(--ink-soft);margin-bottom:8px;">Once set, this PIN can't be changed or reset — only entering it correctly opens the app. Make sure you'll remember it.</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn" style="border-color:var(--gold);background:#F3E8CE;color:#7A5A17;font-weight:600;" onclick="savePinFromPanel()">Save PIN</button>
            <button class="btn" style="margin-left:auto;color:var(--ink-soft);" onclick="closePinPanel()">Close</button>
          </div>
        `}
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
        ${isViewingToday()
          ? `<div id="time-remaining-box" class="btn" style="font-weight:600;cursor:default;">⏳ ${getTimeRemainingText()}</div>`
          : `<button class="btn" onclick="goToday()">Back to today</button>`}
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

/* Keep "Time Remaining" live, and detect the local-day rollover at midnight. */
setInterval(() => {
  if (dateKey(new Date()) !== todayKey) {
    location.reload();
    return;
  }
  const el = document.getElementById("time-remaining-box");
  if (el) el.textContent = "⏳ " + getTimeRemainingText();
}, 30000);
