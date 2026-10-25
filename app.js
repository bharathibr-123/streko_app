/* Ganesha — standalone PWA. All data lives in this phone's localStorage. */

const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const DEFAULT_WEEKDAY_HABITS = [
  { id: "wd3_1", name: "5:00 AM — 🌅 Wake up" },
  { id: "wd3_2", name: "5:00–6:30 AM — 🤖 AI/ML ⭐⭐⭐" },
  { id: "wd3_3", name: "6:30–8:00 AM — 📚 Semester Studies ⭐⭐ + Get ready + Breakfast" },
  { id: "wd3_4", name: "8:00–9:00 AM — 🚌 Travel → English / ML videos / Revision" },
  { id: "wd3_5", name: "9:00 AM–5:00 PM — 🎓 College → Classes + Semester Studies" },
  { id: "wd3_6", name: "5:00–6:00 PM — 🚌 Travel → English / Revision" },
  { id: "wd3_7", name: "6:00–6:30 PM — 💻 Project ⭐" },
  { id: "wd3_8", name: "6:30–8:00 PM — 🧠 DSA ⭐" },
  { id: "wd3_9", name: "8:00–8:30 PM — 🍽️ Dinner" },
  { id: "wd3_10", name: "8:30–9:30 PM — 🎯 Aptitude" },
  { id: "wd3_11", name: "9:30–11:30 PM — 🤖 AI/ML ⭐⭐⭐" },
  { id: "wd3_12", name: "11:30 PM–12:30 AM — 🔬 Tech/ML Research ⭐" },
  { id: "wd3_13", name: "12:30–1:00 AM — 📝 Personal tasks / whatever you need" },
  { id: "wd3_14", name: "1:00–5:00 AM — 😴 Sleep" },
];
const DEFAULT_WEEKEND_HABITS = [
  { id: "we3_1", name: "7:00 AM — 🌅 Wake up" },
  { id: "we3_2", name: "7:00–8:00 AM — 🙏 Prayer + Freshen up + Breakfast + Get ready" },
  { id: "we3_3", name: "8:00–10:00 AM — 🤖 AI/ML ⭐⭐⭐ → Learning + Coding + Practice" },
  { id: "we3_4", name: "10:00–10:30 AM — 💻 Project ⭐" },
  { id: "we3_5", name: "10:30 AM–12:00 PM — 🧠 DSA ⭐⭐ → Concepts + Coding Problems" },
  { id: "we3_6", name: "12:00–1:00 PM — 🎯 Aptitude → Practice + Shortcuts" },
  { id: "we3_7", name: "1:00–2:00 PM — 🍽️ Lunch + Personal time" },
  { id: "we3_8", name: "2:00–3:30 PM — 📚 Semester Studies ⭐⭐ → Subjects + Notes" },
  { id: "we3_9", name: "3:30–5:00 PM — 🤖 AI/ML ⭐⭐⭐ → Hands-on Practice" },
  { id: "we3_10", name: "5:00–6:00 PM — 🔬 Tech/ML Research ⭐ → Papers + New Technologies + Industry Trends" },
  { id: "we3_11", name: "6:00–7:00 PM — 💻 Project ⭐" },
  { id: "we3_12", name: "7:00–7:30 PM — 🧠 DSA → Coding Practice" },
  { id: "we3_13", name: "7:30–8:00 PM — 🍽️ Dinner" },
  { id: "we3_14", name: "8:00–10:00 PM — 🤖 AI/ML ⭐⭐⭐ → Deep Learning / Advanced ML / Projects" },
  { id: "we3_15", name: "10:00–11:00 PM — 📚 Semester Studies → Revision / Pending Work" },
  { id: "we3_16", name: "11:00 PM–12:00 AM — 🔬 Tech/ML Research / AI News" },
  { id: "we3_17", name: "12:00–1:00 AM — 🤖 AI/ML → Practice / Portfolio" },
  { id: "we3_18", name: "1:00–7:00 AM — 😴 Sleep" },
];
const THOUGHTS = [
  "Never give up on yourself.",
  "Difficult roads lead to strong minds.",
  "Keep going, even when progress is invisible.",
  "You didn't come this far to quit.",
  "One bad day doesn't define your future.",
  "Fall seven times, stand up eight.",
  "Your struggle is not your ending.",
  "Pain is temporary; regret can last longer.",
  "Keep fighting for the person you want to become.",
  "Don't stop because it's hard.",
  "Your future self is counting on you.",
  "Every setback carries a lesson.",
  "You can restart without starting from zero.",
  "Never let temporary emotions destroy permanent goals.",
  "The strongest people keep moving through uncertainty.",
  "When you feel like quitting, remember why you started.",
  "A slow journey is better than a journey abandoned.",
  "You are allowed to struggle, but keep trying.",
  "Difficult doesn't mean impossible.",
  "Your limits are not always what you think they are.",
  "Keep going until you surprise yourself.",
  "Don't surrender your dreams to a difficult day.",
  "Progress begins again when you refuse to quit.",
  "Every comeback begins with a decision.",
  "Your determination must be stronger than your excuses.",
  "The road is difficult because growth demands effort.",
  "Keep showing up, especially when nobody notices.",
  "You lose only when you stop learning and trying.",
  "Be stubborn about your goals.",
  "Never abandon yourself to please your comfort.",
  "You can feel tired and still take one small step.",
  "Your hardest chapter can teach you your greatest strength.",
  "A temporary failure is not a permanent identity.",
  "Don't quit during the chapter you haven't finished.",
  "Keep your hope alive through your actions.",
  "The person who persists has another chance to win.",
  "You don't need to feel strong to act courageously.",
  "Let your comeback be stronger than your setback.",
  "Every difficult day you overcome builds resilience.",
  "Keep moving; your story isn't finished.",
  "Your dreams deserve more than your first attempt.",
  "Don't let fear make your decisions.",
  "A difficult beginning can lead to a meaningful achievement.",
  "You can do hard things one step at a time.",
  "Refuse to let one failure become your whole story.",
  "Rest if needed, but don't abandon your purpose.",
  "Keep believing enough to take the next step.",
  "Persistence turns repeated attempts into experience.",
  "You are stronger when you learn to rise again.",
  "Never give up on becoming a better version of yourself.",
  "Discipline is choosing what matters over what feels easy.",
  "Do what needs to be done, even when you don't feel like it.",
  "Motivation starts the journey; discipline sustains it.",
  "Keep promises you make to yourself.",
  "Your habits reveal your priorities.",
  "Discipline today creates freedom tomorrow.",
  "Control your actions before they control your future.",
  "Do the work, whether anyone is watching or not.",
  "Your mood should not control your mission.",
  "Self-discipline is self-respect in action.",
  "Build routines that support your dreams.",
  "Don't negotiate with every excuse your mind creates.",
  "Be consistent with your commitments.",
  "Discipline is remembering what you want most.",
  "Make your actions stronger than your intentions.",
  "Choose progress over temporary comfort.",
  "Train your mind to finish what you start.",
  "Small disciplined actions create powerful habits.",
  "Do it now instead of repeatedly postponing it.",
  "Be the person who follows through.",
  "Your future is shaped by your daily decisions.",
  "Set boundaries with distractions.",
  "Master your schedule before it masters you.",
  "Make discipline a habit, not a punishment.",
  "Don't let laziness make decisions for your future.",
  "Build a life that doesn't depend on motivation.",
  "Finish the important task before seeking entertainment.",
  "Every time you keep a promise to yourself, trust grows.",
  "Discipline is doing the right thing repeatedly.",
  "Learn to say no to what weakens your focus.",
  "Make your goals part of your daily routine.",
  "Don't reward every impulse with attention.",
  "Be strict with your habits and kind to yourself.",
  "A disciplined mind creates intentional actions.",
  "Start on time, even when you feel unprepared.",
  "Train yourself to tolerate temporary discomfort.",
  "Your standards matter when nobody is watching.",
  "Take responsibility for your choices.",
  "Do not confuse being busy with being disciplined.",
  "Practice self-control in small moments.",
  "Keep your commitments even when the excitement fades.",
  "Discipline is built through repeated decisions.",
  "Be in control of your time, attention, and energy.",
  "Replace excuses with practical solutions.",
  "Make the important things non-negotiable.",
  "Stop waiting for the perfect mood.",
  "Your daily routine is a vote for your future.",
  "Work first; celebrate after.",
  "Choose the harder right over the easier wrong.",
  "Become someone you can depend on.",
  "Consistency beats occasional intensity.",
  "Small steps taken daily create big changes.",
  "Show up every day, even if you do less.",
  "Repetition turns effort into skill.",
  "Progress loves consistency.",
  "Don't underestimate the power of ordinary days.",
  "One focused hour repeated daily can change your life.",
  "Keep your streak alive through small actions.",
  "Consistency is a quiet form of commitment.",
  "You don't need a perfect day; you need a useful one.",
  "A little progress is still progress.",
  "Build momentum through daily action.",
  "Your future is hiding inside your daily routine.",
  "Repeated effort creates lasting improvement.",
  "Be consistent before trying to be extraordinary.",
  "A strong habit outlasts a temporary mood.",
  "Success grows from what you repeatedly practice.",
  "Keep planting seeds even before you see flowers.",
  "Daily effort compounds over time.",
  "Your small actions are never automatically meaningless.",
  "Don't break a good habit because of one imperfect day.",
  "Consistency turns knowledge into ability.",
  "The secret is often doing simple things for long enough.",
  "Progress is built one ordinary day at a time.",
  "Repeat what works.",
  "Keep your promises small enough to maintain and meaningful enough to matter.",
  "Your habits become your default behavior.",
  "Make improvement part of your lifestyle.",
  "Consistency creates opportunities for excellence.",
  "Do something today that supports tomorrow.",
  "The results may be slow, but the practice is valuable.",
  "Every repetition is another opportunity to improve.",
  "Build systems that make good habits easier.",
  "Be present for the process.",
  "Keep practicing when the novelty disappears.",
  "Success is often the result of repeated basics.",
  "A steady pace can take you a long way.",
  "Consistency gives talent more chances to develop.",
  "Do not abandon a routine just because results are delayed.",
  "Make progress your daily standard.",
  "Your effort matters even before results arrive.",
  "Focus on the next repetition, not the final destination.",
  "The ordinary things you do daily shape extraordinary outcomes.",
  "Keep your habits alive, even on difficult days.",
  "Consistency is commitment made visible.",
  "Show up for your goals before the world asks you to.",
  "A routine reduces the need to decide repeatedly.",
  "Keep building, even when the progress feels small.",
  "What you practice today influences what you can do tomorrow.",
  "Be consistent long enough to see what is possible.",
  "Protect your attention like your future depends on it.",
  "Focus on your lane.",
  "One task at a time, one step at a time.",
  "Distraction steals the time your dreams need.",
  "Decide what matters, then give it your attention.",
  "Your attention is one of your most valuable resources.",
  "Stop comparing your chapter one with someone else's chapter twenty.",
  "Focus on improvement, not applause.",
  "Be present where your progress happens.",
  "Every yes to a distraction can become a no to your priorities.",
  "Eliminate unnecessary noise.",
  "Focus is the art of choosing what deserves your energy.",
  "Do less, but do the important things well.",
  "Give your goals your best hours.",
  "Protect your mind from endless comparison.",
  "Stop checking everyone else's progress and build your own.",
  "Your direction matters more than other people's opinions.",
  "Concentration grows with practice.",
  "Turn off distractions before they turn off your progress.",
  "Focus on what you can control.",
  "Your next action matters more than your endless planning.",
  "A clear goal makes decisions easier.",
  "Don't divide your attention between every possible future.",
  "Give one meaningful task your full effort.",
  "Learn to be comfortable with focused silence.",
  "Your priorities should determine your schedule.",
  "Focus creates depth; distraction creates unfinished work.",
  "Avoid the temptation to do everything at once.",
  "Your energy is limited; spend it wisely.",
  "Keep your eyes on your chosen direction.",
  "Do not let someone else's success distract you from your work.",
  "Focus on the process instead of obsessing over the outcome.",
  "Less scrolling, more building.",
  "Less worrying, more doing.",
  "Less comparing, more improving.",
  "Clear your environment to help clear your mind.",
  "Protect your first hour from unnecessary distractions.",
  "Be intentional with every minute.",
  "Focus is a skill you can train.",
  "Your goals deserve undivided attention.",
  "Learn to finish before starting something new.",
  "Give your mind fewer things to chase.",
  "Stop multitasking when deep thinking is required.",
  "Choose direction over endless possibilities.",
  "Your priorities deserve protection.",
  "Focus on today's responsibility.",
  "Don't lose your purpose in the noise of the world.",
  "Keep your mind where your feet are.",
  "Work quietly and let your progress become visible.",
  "Direct your attention; direct your life.",
  "Dreams require effort, not just imagination.",
  "Work for the life you keep thinking about.",
  "Effort creates opportunities for improvement.",
  "Do the work that your future requires.",
  "Hard work gives your potential a chance.",
  "Your ambitions need action.",
  "Sweat through the learning curve.",
  "Nothing meaningful is built by wishing alone.",
  "Put your energy where your goals are.",
  "Work on your weaknesses without shame.",
  "Learn the basics until they become strengths.",
  "Effort is valuable even when the result isn't immediate.",
  "Be willing to do what others keep postponing.",
  "The work you avoid may be the skill you need.",
  "Practice when it's boring.",
  "Learn when it's difficult.",
  "Improve when it's uncomfortable.",
  "Let your work reflect your commitment.",
  "Your potential grows when you challenge yourself.",
  "Work hard, but work intelligently.",
  "Effort without direction can waste energy; combine both.",
  "Don't just dream bigger; build better habits.",
  "Earn your confidence through preparation.",
  "Put in the repetitions that mastery requires.",
  "Your skills improve when you deliberately practice.",
  "Every challenge is an opportunity to learn something useful.",
  "Take pride in work done with care.",
  "Let your preparation reduce your fear.",
  "Don't seek shortcuts that prevent real learning.",
  "Work for progress, not perfection.",
  "The quality of your effort matters.",
  "Challenge yourself without destroying your health.",
  "Take breaks that help you return stronger.",
  "Do the difficult work in manageable pieces.",
  "Let curiosity make your effort meaningful.",
  "Invest in skills that increase your independence.",
  "Make your work speak through its quality.",
  "Practice the things you want to become good at.",
  "Work today to expand tomorrow's possibilities.",
  "Replace wishful thinking with measurable action.",
  "Learn from mistakes instead of hiding them.",
  "Your effort is an investment in your capabilities.",
  "Do not fear the beginner stage.",
  "Every expert once had something to learn.",
  "Improve the process, not just the target.",
  "The right work repeated well creates progress.",
  "Make your effort purposeful.",
  "Work hard enough to learn what you're capable of.",
  "Build skills that remain valuable beyond applause.",
  "Let your ambition be visible in your daily effort.",
  "Be obsessed with improvement, not attention.",
  "Let your curiosity become your competitive advantage.",
  "Think deeply, learn continuously, build courageously.",
  "Chase mastery, not just recognition.",
  "Be hungry to learn and humble enough to improve.",
  "Make excellence a practice, not an occasional performance.",
  "Be passionate about the process.",
  "Your ambition needs a daily plan.",
  "Become deeply committed to your craft.",
  "Let your goals excite you enough to take action.",
  "Be relentless about learning from your mistakes.",
  "Make progress your obsession, not perfection.",
  "Build something meaningful with your time.",
  "Let curiosity take you beyond the obvious.",
  "Aim high and start where you are.",
  "Your dreams need your participation.",
  "Think beyond your current limitations.",
  "Challenge yourself to become more capable.",
  "Be driven by purpose, not by comparison.",
  "Develop a mind that keeps asking better questions.",
  "Stay hungry for knowledge.",
  "Learn something that expands your perspective every day.",
  "Become difficult to discourage by becoming willing to learn.",
  "Give your ambition structure.",
  "Turn your desire into a schedule.",
  "Think big, execute one step at a time.",
  "Make your goals important enough to prioritize.",
  "Be committed without becoming blind to feedback.",
  "Aim for excellence while accepting that you are still learning.",
  "Your curiosity can open doors your current skills cannot.",
  "Build a reputation for doing meaningful work well.",
  "Become so skilled that your confidence has a foundation.",
  "Keep raising the quality of your questions.",
  "Make learning a lifelong pursuit.",
  "Don't let comfort shrink your ambitions.",
  "Be passionate, but remain patient.",
  "Ambition without action is only a wish.",
  "Channel intense energy into sustainable effort.",
  "Become fascinated by how much you can learn.",
  "Your next level requires new skills and better habits.",
  "Stay committed to the goal while adapting the method.",
  "Let your work ethic support your ambition.",
  "Be serious about your future without hating your present.",
  "Pursue excellence, not exhaustion.",
  "Choose meaningful challenges over empty validation.",
  "Be ambitious enough to start and patient enough to improve.",
  "Build the ability to do what matters well.",
  "Let your purpose guide your intensity.",
  "Invest your passion in something you can grow.",
  "Become devoted to progress, not consumed by pressure.",
  "Success begins with taking responsibility.",
  "Win the day before worrying about the year.",
  "Small victories prepare you for bigger challenges.",
  "Define success before chasing it.",
  "Your version of success does not need everyone's approval.",
  "Learn to win through preparation.",
  "Every useful skill increases your possibilities.",
  "Success is built through choices repeated over time.",
  "Don't just chase success; develop the ability to sustain it.",
  "Be proud of progress that once seemed impossible.",
  "Measure yourself by growth, not only by outcomes.",
  "Learn to celebrate effort and evaluate results.",
  "Every failure can become useful information.",
  "Winning begins with showing up prepared.",
  "Make your next decision a step toward your goal.",
  "Success is more meaningful when it aligns with your values.",
  "Build a life you respect, not just one people admire.",
  "Let your results grow from your preparation.",
  "Become better at solving problems.",
  "The ability to learn is a powerful advantage.",
  "Don't chase shortcuts at the cost of your integrity.",
  "Keep your standards high and your ego teachable.",
  "Make your own progress worth celebrating.",
  "Learn to handle both victory and defeat with maturity.",
  "A true winner learns after losing.",
  "Compete with your previous self.",
  "Success requires patience with the process.",
  "Make smart decisions when emotions are loud.",
  "Your character matters as much as your achievements.",
  "Build confidence by keeping your word.",
  "A meaningful victory begins with a meaningful goal.",
  "Be willing to start small to build something lasting.",
  "Let setbacks improve your strategy.",
  "Success is not a single moment; it is a continuing process.",
  "Winning isn't always beating someone else.",
  "Sometimes the greatest victory is overcoming your own avoidance.",
  "Earn opportunities through preparation and persistence.",
  "Focus on becoming valuable, not merely looking successful.",
  "Your achievements should reflect real growth.",
  "Let your work ethic outlast temporary excitement.",
  "Be proud of the effort nobody saw.",
  "Measure success in skills gained as well as goals reached.",
  "Learn to adapt when your first plan fails.",
  "Make progress without sacrificing your principles.",
  "The best victory is one you can respect.",
  "Build success that supports your well-being.",
  "Keep learning after your first achievement.",
  "Success grows when preparation meets opportunity.",
  "Become someone who can handle greater responsibility.",
  "Define winning as becoming more capable and purposeful.",
  "Believe in your ability to learn.",
  "Confidence grows when you take action.",
  "You don't need permission to improve yourself.",
  "Start before you feel completely ready.",
  "Courage means acting despite fear.",
  "Your beginning does not determine your ending.",
  "Be willing to look inexperienced while learning.",
  "Trust your ability to improve through practice.",
  "Speak to yourself with respect.",
  "Don't let one person's opinion define your worth.",
  "You can be nervous and still perform well.",
  "Take up the challenge even when doubt appears.",
  "Your voice deserves to be heard.",
  "Learn to stand by your values.",
  "Confidence is built through evidence, not imagination alone.",
  "Every brave attempt expands your experience.",
  "You are allowed to learn in public.",
  "Stop waiting for everyone to understand your goals.",
  "Be comfortable being a beginner.",
  "Your mistakes do not cancel your potential.",
  "Trust the preparation you have done.",
  "Challenge negative thoughts with realistic evidence.",
  "You can improve without insulting your current self.",
  "Be proud of trying something difficult.",
  "Your worth is not measured by one result.",
  "Have the courage to ask questions.",
  "Be willing to receive feedback.",
  "Don't confuse discomfort with inability.",
  "Your confidence can grow one action at a time.",
  "Speak clearly, think carefully, and act courageously.",
  "Take responsibility without attacking yourself.",
  "You can change your approach without abandoning your goal.",
  "Be brave enough to choose your own direction.",
  "Stop shrinking your ambitions to avoid criticism.",
  "Believe in your capacity to become more skilled.",
  "Courage begins with the next honest step.",
  "Learn to recover from embarrassment.",
  "Be willing to fail while learning something worthwhile.",
  "You do not need to be perfect to be respected.",
  "Give yourself a fair chance.",
  "Your past mistakes can guide better future choices.",
  "Learn to trust yourself by following through.",
  "Be confident enough to admit what you don't know.",
  "Stand firm in your purpose and flexible in your thinking.",
  "You can be humble without underestimating yourself.",
  "Stop asking fear to approve your decisions.",
  "Choose growth even when it challenges your identity.",
  "Every new skill begins with unfamiliarity.",
  "Let courage be louder than hesitation.",
  "Become someone who tries before deciding something is impossible.",
  "Great growth takes time.",
  "Be patient with the process and honest about your effort.",
  "You cannot rush every worthwhile result.",
  "Learn to delay gratification.",
  "Choose long-term benefits over short-term impulses.",
  "Growth often happens before results become visible.",
  "Give yourself time to master difficult skills.",
  "Patience is not passivity; keep taking action.",
  "Accept what you cannot control and improve what you can.",
  "Learn to respond instead of reacting.",
  "Your emotions are real, but they don't have to make every decision.",
  "A calm mind can make better choices.",
  "Stop demanding instant results from long-term goals.",
  "Growth includes mistakes, reflection, and adjustment.",
  "Be patient without becoming complacent.",
  "Your timeline does not need to match anyone else's.",
  "Slow progress is still worth protecting.",
  "Let experience teach you what impatience cannot.",
  "Practice pausing before acting on an impulse.",
  "Self-control gives your priorities a chance.",
  "Don't let temporary frustration erase lasting progress.",
  "Learn to sit with uncertainty while taking useful action.",
  "The learning curve is part of the journey.",
  "Give difficult concepts time to become clear.",
  "Your future benefits from today's thoughtful choices.",
  "Learn to tolerate boredom without abandoning your goals.",
  "A setback is a moment to evaluate, not a reason to panic.",
  "Patience helps you stay steady when results fluctuate.",
  "Improvement is rarely a perfectly straight line.",
  "Let yourself grow at a sustainable pace.",
  "Choose thoughtful action over emotional impulse.",
  "Learn to be content with progress while aiming higher.",
  "Not every delay is a denial.",
  "Some lessons become clear only through experience.",
  "Give your plans room to adapt.",
  "Do not mistake urgency for importance.",
  "Sustainable progress is better than repeated burnout.",
  "Your mind needs rest as well as challenge.",
  "Let difficult days teach flexibility.",
  "Take responsibility for your response to setbacks.",
  "Be patient enough to practice and brave enough to change.",
  "A quiet mind can hear its priorities.",
  "Growth requires both effort and recovery.",
  "Stop measuring every day by immediate results.",
  "Trust the process, but check whether the process works.",
  "Learn to enjoy becoming better.",
  "Respect your limits while gradually expanding your abilities.",
  "The right pace is one you can sustain.",
  "Build emotional strength through thoughtful practice.",
  "Become more patient, capable, and intentional every day.",
  "Become the person your goals require you to be.",
  "Your identity is shaped by the actions you repeat.",
  "Think independently and learn continuously.",
  "Take ownership of your future.",
  "Build your character when nobody is watching.",
  "Your choices reveal what you truly prioritize.",
  "Be a student of life.",
  "Question your assumptions and test your ideas.",
  "Learn to think clearly under pressure.",
  "Your mindset matters, but your actions make it practical.",
  "Take responsibility instead of waiting to be rescued.",
  "Become useful, capable, and dependable.",
  "Protect your integrity when shortcuts look tempting.",
  "Learn to solve problems instead of blaming circumstances.",
  "Be curious enough to keep questioning.",
  "Build a mind that welcomes evidence.",
  "Your environment influences you; choose it thoughtfully.",
  "Become more interested in learning than in looking smart.",
  "Let your values guide your decisions.",
  "Make your life reflect what you say matters.",
  "Build skills that give you more choices.",
  "Don't let comfort become your entire philosophy.",
  "Keep an open mind and a strong sense of purpose.",
  "Be accountable for your actions.",
  "Your attention shapes your experience.",
  "Learn to think for yourself.",
  "Choose principles over temporary popularity.",
  "Be the same honest person in private and public.",
  "Build a reputation you don't have to explain away.",
  "Your habits are part of your personal foundation.",
  "Become more capable instead of merely appearing capable.",
  "Learn from people without losing your own judgment.",
  "Be willing to change your mind when evidence changes.",
  "Keep your curiosity stronger than your ego.",
  "Treat your time as a resource worth protecting.",
  "Create more than you consume.",
  "Turn information into understanding and understanding into action.",
  "Make your goals specific enough to guide your choices.",
  "Build a life around purpose, learning, and meaningful relationships.",
  "Let your principles survive difficult situations.",
  "Be responsible for the energy you bring into a room.",
  "Seek truth, even when it challenges your assumptions.",
  "Keep learning beyond the classroom.",
  "Become someone who adds value wherever they go.",
  "Measure your growth by your abilities and character.",
  "Make thoughtful choices before habits make them for you.",
  "Become independent in your thinking and responsible in your actions.",
  "Your future is influenced by what you repeatedly choose today.",
  "Keep becoming someone you genuinely respect.",
  "Every day is another opportunity to build a stronger, wiser you.",
  "Time waits for no one.",
  "Your future is being created by what you do today.",
  "Lost time cannot be recovered.",
  "Stop wasting today worrying about tomorrow.",
  "Every minute has a purpose; give it one.",
  "You have the same 24 hours as everyone else. Use them intentionally.",
  "One day or day one. You decide.",
  "Time is more valuable than money because you can never earn it back.",
  "Your priorities are reflected in how you spend your time.",
  "Don't spend your life preparing to start living.",
  "The time you waste today becomes the regret you feel tomorrow.",
  "You cannot change yesterday, but you can influence tomorrow.",
  "The clock keeps moving, whether you work or procrastinate.",
  "Stop waiting for the perfect time. Start with the time you have.",
  "Time spent learning is an investment in yourself.",
  "Your future self will remember what you did with today.",
  "You don't need more time; you need clearer priorities.",
  "Every distraction has an opportunity cost.",
  "Spend your time creating a life, not just consuming content.",
  "The best time to improve your life is now.",
  "Don't trade your long-term dreams for short-term entertainment.",
  "An hour of focused work can be worth hours of distracted effort.",
  "Time reveals the results of repeated choices.",
  "Respect your time enough to protect it.",
  "Your life is made of days. Don't waste them unconsciously.",
  "The right time rarely feels perfectly convenient.",
  "Stop saying \"someday\" when you can begin today.",
  "Make your hours serve your goals.",
  "Time is passing. Make your growth count.",
  "Remember: you are spending your life, not just your time.",
  "Change your thinking, and you can change your actions.",
  "Your mind can be your greatest ally or your biggest obstacle.",
  "Don't believe every negative thought you have.",
  "Think clearly. Choose wisely. Act courageously.",
  "Your mindset determines how you respond to challenges.",
  "Stop thinking about why you cannot. Explore how you can.",
  "A growth mindset turns mistakes into lessons.",
  "Your current knowledge is not the limit of your potential.",
  "Question your assumptions before accepting them as truth.",
  "Don't let temporary emotions make permanent decisions.",
  "Think independently, even when everyone thinks differently.",
  "A strong mind learns instead of making excuses.",
  "Your thoughts influence your choices, and your choices shape your habits.",
  "Train your mind to see possibilities without ignoring reality.",
  "Stop creating imaginary problems and start solving real ones.",
  "A negative thought is not a prediction.",
  "Learn to control your response, even when you cannot control the situation.",
  "The way you interpret failure influences what you do next.",
  "Think long-term when short-term pleasure tempts you.",
  "Your mind needs discipline just as your body needs exercise.",
  "Don't limit your future to what you know today.",
  "Be curious enough to question and humble enough to learn.",
  "A calm mind makes room for better decisions.",
  "Think less about looking smart and more about becoming knowledgeable.",
  "Train yourself to focus on solutions.",
  "Stop comparing your progress with someone else's journey.",
  "The quality of your questions influences the quality of your learning.",
  "Learn to think before you react.",
  "Your beliefs should be open to evidence.",
  "Build a mind that is difficult to distract and willing to grow.",
  "If everything is important, nothing is a priority.",
  "Know what matters before the world tells you what matters.",
  "Your goals deserve a place on your calendar.",
  "Stop giving your best energy to things that don't move you forward.",
  "Every yes to something unnecessary may be a no to something important.",
  "Choose your direction before increasing your speed.",
  "Don't confuse being busy with making progress.",
  "Protect your priorities from other people's distractions.",
  "Your purpose should guide your decisions.",
  "Focus on what builds your future, not just what entertains your present.",
  "Decide what you want before deciding how to spend your day.",
  "A clear purpose makes difficult choices easier.",
  "You cannot do everything, so choose what matters most.",
  "Give your dreams a deadline and your plans a routine.",
  "Stop making excuses for neglecting your own goals.",
  "Your daily actions should reflect your long-term priorities.",
  "Don't let urgent distractions replace important work.",
  "Choose meaningful progress over temporary approval.",
  "Your life becomes clearer when your priorities become clearer.",
  "Protect your time from things that don't deserve it.",
  "Know when to say no.",
  "Build your future intentionally instead of drifting into it.",
  "Stop chasing every opportunity. Choose the right ones.",
  "Your attention should follow your priorities.",
  "Make decisions based on your values, not just your feelings.",
  "You need direction more than constant motivation.",
  "Every day is an opportunity to act on what matters.",
  "Don't sacrifice your future for momentary comfort.",
  "Simplify your goals so you can focus on execution.",
  "Live by intention, not by default.",
  "Control your impulses before they control your day.",
  "Not every notification deserves your attention.",
  "Your phone should be your tool, not your master.",
  "Stop scrolling through other people's lives and start building your own.",
  "Comfort is enjoyable, but it should not control your choices.",
  "Learn to sit with boredom without reaching for your phone.",
  "Every urge does not need to become an action.",
  "You don't have to act on every feeling.",
  "Protect your attention from endless distractions.",
  "Self-control is choosing what matters over what tempts you.",
  "The ability to say no to yourself is powerful.",
  "Stop feeding habits you are trying to escape.",
  "Make distractions harder to access and good habits easier to follow.",
  "Don't let five minutes of entertainment become an hour of regret.",
  "Your attention is too valuable to give away carelessly.",
  "Learn to enjoy the present without escaping into endless entertainment.",
  "The internet can inform you or consume you. Choose deliberately.",
  "Stop checking your phone every time your mind feels uncomfortable.",
  "Build the ability to work without constant stimulation.",
  "Discipline begins with the choices nobody else sees.",
  "Don't let instant gratification steal your long-term satisfaction.",
  "Create distance between an impulse and your response.",
  "You cannot control every temptation, but you can change your environment.",
  "Train yourself to finish what you start.",
  "Stop rewarding procrastination with more distraction.",
  "Use technology intentionally instead of automatically.",
  "Every time you resist an unnecessary distraction, you practice self-control.",
  "Protect your mornings from mindless scrolling.",
  "Learn to be alone with your thoughts.",
  "Master your habits before they master your future.",
  "Become better than you were yesterday.",
  "Your future depends partly on the habits you build today.",
  "Invest in skills that no one can take away from you.",
  "Learn something today that makes tomorrow easier.",
  "Your comfort zone cannot teach you everything.",
  "Small improvements become meaningful when repeated.",
  "Don't wait for confidence; build it through action.",
  "Be willing to be bad at something before becoming good at it.",
  "The person you want to become needs your effort today.",
  "Build skills, not just dreams.",
  "Stop wishing for a different life without changing your daily actions.",
  "Your mistakes are useful when you learn from them.",
  "Become someone who can solve difficult problems.",
  "Never stop being a student.",
  "Growth requires curiosity, patience, and effort.",
  "Don't measure your worth by your current achievements.",
  "Focus on becoming capable, not merely appearing successful.",
  "Learn to adapt when your plans fail.",
  "Your greatest competition is the potential you leave unused.",
  "Don't fear starting small; fear never starting.",
  "Success is built through repeated decisions, not occasional inspiration.",
  "Your skills grow when you challenge yourself thoughtfully.",
  "The more you learn, the more possibilities you can recognize.",
  "Build a future you won't need to escape from.",
  "Make your habits support the person you want to become.",
  "Be patient with progress and honest about effort.",
  "Your current situation is a starting point, not a final verdict.",
  "Become more capable every month.",
  "Let your results reflect your learning and effort.",
  "Your future self is shaped by the choices you make repeatedly.",
  "Nobody can do your growing for you.",
  "Potential means little without action.",
  "Good intentions cannot replace consistent effort.",
  "You cannot improve what you refuse to acknowledge.",
  "Your excuses may feel comfortable, but they don't solve your problems.",
  "The world does not owe you the results you haven't worked toward.",
  "You can be talented and still lose to someone who practices more consistently.",
  "Knowing what to do is different from actually doing it.",
  "You cannot expect different results while repeating the same ineffective habits.",
  "Avoiding a problem rarely makes it disappear.",
  "You are responsible for what you do with the opportunities available to you.",
  "Waiting for motivation can become a lifetime habit.",
  "You cannot please everyone without losing sight of yourself.",
  "Not every opportunity deserves a yes.",
  "Time exposes the difference between intentions and actions.",
  "Your habits can either support your dreams or work against them.",
  "No amount of planning can replace beginning.",
  "You cannot learn everything by watching others do it.",
  "Progress requires facing what you don't yet know.",
  "Some sacrifices are necessary, but your health should not be one of them.",
  "You may be behind in one area and ahead in another. Keep building.",
  "Blaming everything else prevents you from seeing what you can change.",
  "You cannot control every outcome, only your preparation and response.",
  "Comfort can become a trap when it prevents growth.",
  "You don't need to feel ready to take the first step.",
  "The truth may be uncomfortable, but it gives you something real to work with.",
  "If you keep postponing your goals, ask yourself what you are prioritizing instead.",
  "Your habits reveal more than your promises.",
  "A dream without a plan remains difficult to act on.",
  "Your life changes when your repeated choices change.",
  "One day, today's ordinary moments will be memories.",
  "Life is happening while you are waiting for everything to be perfect.",
  "You can lose years comparing a life that was never meant to be yours.",
  "Peace begins when you stop fighting every situation you cannot control.",
  "Not every delay is a failure.",
  "Your worth does not depend on how productive you are every minute.",
  "You can be ambitious without being cruel to yourself.",
  "Some of the best growth happens quietly.",
  "Learn to appreciate the journey while working toward the destination.",
  "You don't need a perfect life to have a meaningful one.",
  "Your past explains parts of you; it does not have to define your future.",
  "Life becomes lighter when you stop carrying every opinion.",
  "Protect your peace, but don't use comfort to avoid every challenge.",
  "You can start again without hating who you used to be.",
  "The ability to learn is more useful than pretending to know everything.",
  "A meaningful life is built through choices, relationships, and purpose.",
  "Don't become so busy building your future that you forget to live today.",
  "Every ending creates space for a different beginning.",
  "You can change direction without considering your previous effort wasted.",
  "Live deliberately. Your days are too valuable to spend unconsciously.",
];

/* ---------- date helpers ---------- */
function pad(n){ return String(n).padStart(2,"0"); }
function dateKey(d){ return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`; }
function keyToDate(key){ const [y,m,d]=key.split("-").map(Number); const dt=new Date(y,m-1,d); dt.setHours(0,0,0,0); return dt; }
function isWeekendDate(d){ const day=d.getDay(); return day===0||day===6; }
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
  editMode: false,
  viewDateKey: null,
  manualType: null,
  editingHabitId: null,
  viewMonth: { year: today.getFullYear(), month: today.getMonth() },
};
LS.del("streko_pin"); // PIN lock feature removed — clear any previously saved PIN

/* Mon-Fri use the weekday schedule; Sat + Sun both use the weekend schedule (no college on Saturday). */
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

if (!S.thoughts[todayKey] || !THOUGHTS.includes(S.thoughts[todayKey])) {
  const idx = pickThoughtIndex(THOUGHTS.length, "streko_thought_cycle_v2");
  S.thoughts[todayKey] = THOUGHTS[idx];
  LS.set("streko_thoughts", S.thoughts);
}
if (!LS.get("streko_habits", null)) LS.set("streko_habits", S.habits);

/* One-time migration: move existing installs onto the current schedule.
   Detected by a version counter; logs/thoughts are untouched,
   so streaks for old habit ids simply stop (their ids no longer exist) while
   everything else on the phone stays exactly as it was. */
const SCHEDULE_VERSION = 3;
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

/* ---------- line chart touch handling ---------- */
let CHART = null;
function chartIndexFromEvent(e){
  const svg = document.getElementById("line-chart");
  if(!svg || !CHART) return -1;
  const r = svg.getBoundingClientRect();
  const x = ((e.clientX - r.left) / r.width) * CHART.W;
  const plotW = CHART.W - CHART.padL - CHART.padR;
  let i = Math.round(((x - CHART.padL) / plotW) * (CHART.dim - 1));
  i = Math.max(0, Math.min(CHART.dim - 1, i));
  while(i > 0 && CHART.pts[i].future) i--;   // snap back to the latest day that has happened
  return CHART.pts[i].future ? -1 : i;
}
function chartShowPreview(i){
  const p = CHART.pts[i];
  const x = CHART.cx(i), y = CHART.cy(p.dp);
  const g = document.getElementById("chart-preview");
  const ln = document.getElementById("chart-preview-line");
  const dt = document.getElementById("chart-preview-dot");
  const ro = document.getElementById("chart-readout");
  if(!g || !ln || !dt) return;
  g.style.display = "block";
  ln.setAttribute("x1", x); ln.setAttribute("x2", x);
  dt.setAttribute("cx", x); dt.setAttribute("cy", y);
  if(ro) ro.textContent = p.label;
}
function chartDown(e){
  if(!CHART) return;
  CHART.down = true;
  try{ e.target.setPointerCapture(e.pointerId); }catch(err){}
  const i = chartIndexFromEvent(e);
  if(i >= 0){ CHART.idx = i; chartShowPreview(i); }
}
function chartMove(e){
  if(!CHART || !CHART.down) return;
  const i = chartIndexFromEvent(e);
  if(i >= 0 && i !== CHART.idx){ CHART.idx = i; chartShowPreview(i); }
}
function chartUp(e){
  if(!CHART || !CHART.down) return;
  CHART.down = false;
  const i = chartIndexFromEvent(e);
  const pick = i >= 0 ? i : CHART.idx;
  if(pick >= 0) goToDateKey(CHART.pts[pick].key);
}
function chartCancel(){
  if(!CHART) return;
  CHART.down = false; CHART.idx = -1;
  const g = document.getElementById("chart-preview");
  const ro = document.getElementById("chart-readout");
  if(g) g.style.display = "none";
  if(ro) ro.textContent = "";
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
  app.innerHTML = renderMain();
  const scrollEl = document.getElementById("chart-scroll");
  if(scrollEl) scrollEl.addEventListener("scroll", updateThumb);
  updateThumb();
  if(S.editingHabitId){
    const el = document.getElementById(`edit-input-${S.editingHabitId}`);
    if(el){ el.focus(); el.setSelectionRange(el.value.length, el.value.length); }
  }
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
  /* Line chart: one point per day, drawn to fit the card width (no scrolling). */
  const CW = 320, CH = 112, padL = 26, padR = 10, padT = 8, padB = 22;
  const plotW = CW - padL - padR, plotH = CH - padT - padB;
  const cx = (i) => padL + (dim > 1 ? (i/(dim-1))*plotW : 0);
  const cy = (p) => padT + (1 - p/100)*plotH;
  const chartPts = [];
  let linePts = "", dots = "", xLabels = "";
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
    chartPts.push({ key, day, dp, future, label: `${d.toLocaleDateString("en-US",{weekday:"short", day:"numeric", month:"short"})} · ${dp}%` });
    const x = cx(day-1), y = cy(dp);
    if(!future){
      linePts += `${x.toFixed(1)},${y.toFixed(1)} `;
      const color = wknd ? "var(--weekend)" : "var(--weekday)";
      const isToday = key===todayKey;
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isToday?4:2.6}" style="fill:${color};"/>`;
      if(key===viewKey) dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.5" style="fill:none;stroke:var(--gold);stroke-width:2;"/>`;
    }
    if(day===1 || day===dim || day%5===0){
      if(!(day>=dim-1 && day!==dim && dim-day<3)){
        xLabels += `<text x="${x.toFixed(1)}" y="${CH-6}" text-anchor="middle" style="font-size:9px;fill:var(--ink-soft);">${day}</text>`;
      }
    }
  }
  CHART = { W: CW, padL, padR, dim, pts: chartPts, cx, cy, down: false, idx: -1 };
  const grid = [0,50,100].map(p =>
    `<line x1="${padL}" x2="${CW-padR}" y1="${cy(p).toFixed(1)}" y2="${cy(p).toFixed(1)}" style="stroke:var(--line);stroke-width:1;${p===50?"stroke-dasharray:3 3;":""}"/>` +
    `<text x="${padL-5}" y="${(cy(p)+3).toFixed(1)}" text-anchor="end" style="font-size:9px;fill:var(--ink-soft);">${p}</text>`
  ).join("");
  const lineChart = `
    <svg id="line-chart" viewBox="0 0 ${CW} ${CH}" style="display:block;width:100%;height:auto;touch-action:pan-y;user-select:none;-webkit-user-select:none;" role="img" aria-label="Daily completion percentage for ${monthLabel}">
      ${grid}
      ${linePts ? `<polyline points="${linePts.trim()}" style="fill:none;stroke:var(--ink-soft);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round;opacity:0.7;"/>` : ""}
      ${dots}
      ${xLabels}
      <g id="chart-preview" style="display:none;pointer-events:none;">
        <line id="chart-preview-line" x1="0" x2="0" y1="${padT}" y2="${CH-padB}" style="stroke:var(--gold);stroke-width:1;"/>
        <circle id="chart-preview-dot" cx="0" cy="0" r="5" style="fill:none;stroke:var(--gold);stroke-width:2;"/>
      </g>
      <rect x="0" y="0" width="${CW}" height="${CH}" style="fill:transparent;cursor:pointer;"
            onpointerdown="chartDown(event)" onpointermove="chartMove(event)" onpointerup="chartUp(event)" onpointercancel="chartCancel(event)"/>
    </svg>
    <div id="chart-readout" style="min-height:15px;margin-top:2px;text-align:center;font-size:11px;color:var(--ink-soft);"></div>`;

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
      <div style="background:${todayIsWeekend?"var(--weekend-bg)":"var(--weekday-bg)"};color:${todayIsWeekend?"var(--weekend)":"var(--weekday)"};padding:6px 14px;border-radius:999px;font-size:12px;font-weight:600;text-transform:uppercase;">
        ${todayIsWeekend?"Weekend format":"Weekday format"}
      </div>
    </div>

    <div class="card" style="padding:14px 18px;margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <button class="btn" onclick="prevMonth()">‹</button>
        <div style="text-align:center;">
          <div class="serif" style="font-size:16px;">${monthLabel}</div>
          <div style="font-size:10px;color:var(--ink-soft);text-transform:uppercase;">${isCurMonth?"Current month":"Tap a day to inspect"}</div>
        </div>
        <button class="btn" onclick="nextMonth()" ${isCurMonth?"disabled":""}>›</button>
      </div>
      ${lineChart}
    </div>

    <div class="card" style="padding:14px 18px;margin-bottom:16px;text-align:center;font-size:15px;font-weight:600;letter-spacing:0.3px;color:${todayIsWeekend?"var(--weekend)":"var(--weekday)"};">
      Be Serious - No excuses - Stay Focused
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
