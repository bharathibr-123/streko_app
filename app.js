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
  dayModes: LS.get("streko_day_modes", {}),        // { "YYYY-MM-DD": "custom" } — missing means Default
  customTasks: LS.get("streko_custom_tasks", {}),  // { "YYYY-MM-DD": [{id,name}] } — each Custom day has its own list
  editMode: false,
  viewDateKey: null,
  editingHabitId: null,
  viewMonth: { year: today.getFullYear(), month: today.getMonth() },
};
LS.del("streko_pin"); // PIN lock feature removed — clear any previously saved PIN

/* Mon-Fri use the weekday schedule; Sat + Sun both use the weekend schedule (no college on Saturday). */
function getDayType(d){
  return isWeekendDate(d) ? "weekend" : "weekday";
}
/* Each day is either "default" (auto weekday/weekend list) or "custom" (its own task list).
   Choosing Custom locks that day; every day starts as Default. */
function getDayMode(key){ return S.dayModes[key] === "custom" ? "custom" : "default"; }
function getTasksFor(key){
  if(getDayMode(key) === "custom") return S.customTasks[key] || [];
  return S.habits[getDayType(keyToDate(key))];
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
function saveDayModes(){ LS.set("streko_day_modes", S.dayModes); }
function saveCustomTasks(){ LS.set("streko_custom_tasks", S.customTasks); }

/* ---------- derived getters ---------- */
/* 2 AM rule: the day still rolls over at midnight (timer + thought), but yesterday's
   tasks stay open — tickable and not marked missed — until 2:00 AM. */
const GRACE_HOUR = 2;
const yesterdayKey = dateKey(addDays(today,-1));
function graceOpen(){ return new Date().getHours() < GRACE_HOUR; }
function isDayOpen(key){ return key === todayKey || (key === yesterdayKey && graceOpen()); }
function getViewDate(){ return S.viewDateKey ? keyToDate(S.viewDateKey) : today; }
function getViewKey(){ return S.viewDateKey || todayKey; }
function isViewingToday(){ return getViewKey() === todayKey; }

/* ---------- actions ---------- */
function toggleHabit(key, habitId){
  const dayLog = { ...(S.logs[key]||{}) };
  dayLog[habitId] = !dayLog[habitId];
  S.logs = { ...S.logs, [key]: dayLog };
  saveLogs();
  render();
}
/* list = "weekday" | "weekend" (the Default lists) or "custom" (the viewed day's own list) */
function updateList(list, fn){
  if(list === "custom"){
    const key = getViewKey();
    S.customTasks = { ...S.customTasks, [key]: fn(S.customTasks[key] || []) };
    saveCustomTasks();
  } else {
    S.habits = { ...S.habits, [list]: fn(S.habits[list]) };
    saveHabits();
  }
}
function addHabit(list){
  const input = document.getElementById("new-habit-input");
  const name = input ? input.value.trim() : "";
  if(!name) return;
  const id = `${list}-${Date.now()}`;
  updateList(list, arr => [...arr, { id, name }]);
  render();
  const again = document.getElementById("new-habit-input");
  if(again) again.focus();
}
function removeHabit(list, id){
  updateList(list, arr => arr.filter(h=>h.id!==id));
  render();
}
function startEditing(id){ S.editingHabitId = id; render(); }
function commitEdit(type, id){
  const input = document.getElementById(`edit-input-${id}`);
  const trimmed = input ? input.value.trim() : "";
  if(trimmed){
    updateList(type, arr => arr.map(h=> h.id===id ? {...h, name:trimmed} : h));
  }
  S.editingHabitId = null;
  render();
}
function cancelEdit(){ S.editingHabitId = null; render(); }
function chooseCustomToday(){
  const key = getViewKey();
  if(!isDayOpen(key) || getDayMode(key) === "custom") return;
  const which = key === todayKey ? "today" : "yesterday";
  if(!confirm(`Switch ${which} to Custom?\n\nIt will be locked as a Custom day — you can't switch back to Default.`)) return;
  S.dayModes = { ...S.dayModes, [key]: "custom" };
  saveDayModes();
  S.editMode = false;
  render();
  const el = document.getElementById("new-habit-input");
  if(el) el.focus();
}
function toggleEditMode(){ S.editMode = !S.editMode; S.editingHabitId=null; render(); }
function goToDateKey(key){ S.viewDateKey = key; S.editingHabitId = null; render(); }
function goPrevDay(){ goToDateKey(dateKey(addDays(getViewDate(),-1))); }
function goNextDay(){ goToDateKey(dateKey(addDays(getViewDate(),1))); }
function goToday(){ S.viewDateKey=null; S.editingHabitId = null; render(); }
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



/* ---------- Ganesha line art (traced from the user's drawing), drawn in white like the lotuses ---------- */
const GANESHA_VB = "0 0 460 752";
const GANESHA_D = "M174.0 749.7C174.3 749.5 177.3 748.5 180.8 747.6C206.7 741.0 216.7 714.0 199.6 696.6C190.3 687.1 178.7 681.5 141.0 668.5C107.6 657.0 90.2 649.1 73.8 638.1C34.0 611.5 17.7 570.7 35.7 543.3C52.3 518.1 92.1 520.2 121.1 547.7L126.7 553.0L125.3 545.4C123.2 534.5 124.6 530.0 127.0 539.5C135.1 570.8 160.8 601.0 190.0 613.5C228.2 629.9 270.9 624.0 306.1 597.5C335.8 575.2 354.8 537.7 347.9 515.0C347.4 513.1 346.7 507.7 346.5 503.0C346.3 498.3 345.9 492.9 345.5 491.0C344.8 487.6 344.9 487.7 347.8 492.6C354.9 504.5 364.5 509.4 380.5 509.5C390.9 509.5 391.9 509.3 398.5 506.2C410.3 500.6 416.7 493.1 420.7 480.0L423.1 472.5L422.6 479.5C420.1 513.6 373.7 528.7 351.5 502.6L347.9 498.5L348.6 502.5C350.7 515.2 359.4 532.4 368.5 541.6C393.7 567.1 427.1 557.1 434.7 521.7C437.6 507.8 434.3 488.1 427.0 476.6C423.0 470.4 423.7 469.7 428.5 475.2C443.5 492.6 445.6 521.8 433.4 542.1C415.2 572.2 372.6 566.8 354.9 532.2L352.5 527.5L351.9 536.5C351.0 549.8 346.0 562.6 336.4 576.2L333.1 580.8L341.3 577.0C370.9 563.2 404.7 566.7 423.5 585.5C456.1 618.1 423.4 668.3 366.0 674.0C347.6 675.9 331.2 673.8 293.0 664.6C258.5 656.4 242.3 657.3 232.6 668.0C224.2 677.3 226.7 690.8 237.4 693.9L240.5 694.8L236.9 694.9C232.0 695.0 227.0 691.5 224.2 686.0C220.3 678.2 221.8 670.6 228.8 662.8C241.0 649.3 256.6 648.0 300.5 656.9C352.7 667.4 376.5 665.6 400.7 649.2C423.4 633.8 428.6 609.3 412.4 593.6C403.2 584.7 389.6 580.5 372.0 581.3C350.9 582.3 334.5 588.4 310.2 604.7C279.9 625.0 261.2 631.4 233.0 631.4C192.9 631.4 161.9 615.1 132.5 578.5C109.1 549.5 92.9 538.2 72.9 537.2C58.5 536.5 49.1 541.3 43.2 552.4C38.9 560.6 39.2 574.5 44.1 585.5C52.9 605.6 69.5 622.4 94.7 636.8C109.0 645.0 116.6 648.1 167.0 666.6C196.3 677.4 210.7 688.3 215.4 703.4C222.4 725.5 205.8 747.9 181.3 749.7C177.0 750.0 173.7 750.0 174.0 749.7ZM228.8 605.0C199.9 600.1 177.1 577.3 168.3 544.5C162.8 523.6 165.0 494.7 174.3 469.2C186.4 435.6 218.5 389.2 243.6 369.0C251.2 363.0 254.1 361.8 250.4 366.4C178.5 455.9 159.5 521.4 191.5 569.5C213.4 602.4 258.0 607.3 283.8 579.5C306.9 554.6 299.5 517.4 269.5 507.3L265.5 506.0L270.3 506.4C281.5 507.3 293.5 516.4 299.1 528.4C317.6 568.0 276.3 613.0 228.8 605.0ZM228.0 585.2C196.8 574.8 186.1 538.4 204.0 503.0C215.4 480.5 229.9 466.0 268.2 438.9C320.2 402.0 340.8 378.8 352.6 343.4C363.2 311.8 362.0 279.9 349.2 250.3C330.3 206.3 284.2 180.8 237.6 188.4C232.2 189.3 227.5 189.9 227.3 189.6C226.2 188.5 235.0 183.0 240.8 181.0C270.7 171.1 317.3 186.3 344.2 214.8C375.1 247.6 385.1 300.5 369.3 347.0C358.6 378.5 334.8 405.3 284.5 442.9C258.8 462.0 248.0 470.4 248.0 471.1C248.0 473.1 256.9 481.3 261.6 483.6C269.2 487.3 280.3 486.8 287.6 482.4L292.5 479.5L287.0 478.9C277.9 477.9 270.7 473.2 266.9 465.8C264.2 460.4 264.5 458.8 268.8 456.4L272.7 454.3L275.5 459.7C279.7 467.8 287.7 473.9 296.3 475.5C301.0 476.4 301.0 476.8 295.0 483.3C288.0 491.0 282.1 493.5 270.5 493.5C257.7 493.5 248.8 488.8 242.3 478.4C241.2 476.6 240.5 477.1 233.7 484.0C203.9 514.6 197.1 546.8 216.1 568.3C228.3 582.3 252.0 583.6 266.1 571.2C268.1 569.5 271.2 565.2 273.1 561.8C277.9 553.0 278.1 538.8 273.7 529.8C270.4 523.1 263.5 515.1 257.3 510.9C251.0 506.5 252.6 506.3 260.1 510.5C291.6 528.2 291.1 568.3 259.2 583.6C251.6 587.3 236.6 588.0 228.0 585.2ZM62.3 518.5C39.1 511.3 27.3 483.3 35.9 456.0C37.8 450.0 42.6 441.3 43.6 442.2C43.8 442.5 43.1 445.1 42.1 448.1C28.5 486.7 52.7 522.2 85.9 512.1C102.3 507.1 119.2 488.9 121.7 473.4C122.1 471.3 122.6 470.2 123.2 470.8C124.7 472.3 121.4 485.5 118.0 491.8C106.8 512.8 82.0 524.7 62.3 518.5ZM371.7 500.0C358.1 497.6 344.6 486.0 336.8 470.0C329.2 454.4 327.5 443.5 332.1 439.4C333.2 438.4 334.0 436.3 334.0 434.6C334.1 426.8 340.5 413.7 348.1 406.1C371.9 382.3 415.4 397.3 417.8 430.1L418.3 436.7L424.5 437.2C430.7 437.7 440.9 442.1 441.7 444.6C441.9 445.2 440.3 446.2 438.1 446.9C430.9 449.0 425.5 455.2 420.1 467.7C414.3 481.0 410.4 486.7 403.4 492.1C394.3 499.1 382.7 502.0 371.7 500.0ZM392.8 491.5C403.0 487.0 410.7 477.3 416.5 461.8C419.5 453.6 426.4 447.1 434.0 445.0C436.2 444.4 435.8 444.2 431.2 443.2C418.4 440.4 408.6 443.3 403.3 451.5C397.7 460.1 397.9 459.9 398.4 455.3C398.7 452.0 398.3 450.4 396.3 447.8C394.9 446.0 392.2 442.0 390.3 439.0C386.0 432.3 382.7 428.7 377.6 424.9C369.3 418.8 369.1 422.4 377.0 435.4C383.6 446.4 386.2 455.9 381.5 452.0C380.7 451.3 377.7 447.0 374.8 442.3C369.2 433.2 364.8 428.2 361.3 427.4C355.7 426.0 355.6 430.4 361.0 438.2C366.3 445.7 372.3 458.7 370.9 459.6C369.4 460.5 367.8 458.6 360.7 447.9C354.0 437.8 349.2 433.8 346.5 436.0C344.3 437.8 344.6 439.6 348.3 445.9C352.2 452.3 358.5 467.8 357.7 468.6C356.6 469.8 355.1 467.8 349.0 457.2C342.0 445.2 339.4 442.0 336.9 442.0C329.8 442.0 339.4 468.8 350.9 481.2C363.2 494.6 377.9 498.2 392.8 491.5ZM78.0 481.9C66.4 479.6 56.6 472.1 51.5 461.5C48.7 455.8 47.1 446.0 48.9 446.0C49.5 446.0 50.0 447.2 50.0 448.8C50.0 456.5 58.4 467.8 67.6 472.4C90.8 484.0 124.8 469.5 131.3 445.3C132.3 441.3 134.0 439.4 134.0 442.3C134.0 445.5 130.7 455.9 128.5 459.7C119.0 475.8 96.9 485.6 78.0 481.9ZM75.5 464.6C57.5 458.9 48.8 446.2 35.5 406.5C27.3 382.0 26.4 373.7 31.5 370.4C33.4 369.2 34.3 369.1 36.0 370.0C38.0 371.1 38.1 371.0 37.3 367.3C35.5 358.3 37.7 352.0 42.8 352.0C45.4 352.0 45.5 351.8 45.2 348.2C44.3 339.0 53.2 335.8 60.0 342.9C66.8 350.0 80.1 382.2 78.8 388.6C78.5 390.6 72.7 379.3 67.5 366.2C60.4 348.7 54.4 340.8 50.6 343.9C48.2 345.9 48.7 349.4 52.0 355.7C53.7 358.9 57.8 369.9 61.1 380.2C64.5 390.5 67.4 399.0 67.6 399.0C67.9 399.0 69.9 397.8 72.1 396.4C76.2 393.8 89.9 388.0 91.9 388.0C93.4 388.0 93.3 387.6 90.0 381.0C88.4 377.8 85.2 370.5 83.0 364.9C78.0 352.4 75.4 347.2 72.7 344.2C70.1 341.5 69.2 341.4 66.3 344.2L64.0 346.3L64.0 343.8C64.0 340.7 66.9 338.0 70.2 338.0C76.2 338.0 80.6 344.9 91.5 372.0C95.2 381.1 98.3 388.6 98.4 388.7C98.5 388.9 98.6 386.2 98.6 382.7C98.5 374.8 100.9 368.4 105.8 363.8C109.9 359.9 115.8 357.5 119.0 358.5C122.0 359.5 121.4 361.0 118.0 361.0C113.9 361.0 106.9 368.0 105.2 373.6C103.6 379.1 103.7 388.1 105.5 395.5C107.4 403.3 107.3 403.9 105.1 403.3C100.8 402.2 90.4 410.4 86.4 418.0C84.4 421.8 83.8 435.4 85.4 440.0L86.3 442.5L84.0 440.5C73.3 431.1 80.0 409.0 95.8 401.4C98.9 399.9 101.6 398.6 101.7 398.5C101.8 398.5 101.3 396.4 100.5 394.0C99.8 391.5 99.1 390.4 99.1 391.4C99.0 393.2 98.8 393.1 96.2 390.8L93.5 388.2L72.8 401.9C61.3 409.5 52.0 415.4 52.0 415.0C52.0 413.6 57.2 407.3 61.2 403.9L65.4 400.2L61.3 391.4C59.0 386.5 55.3 377.7 53.0 371.8C48.5 360.2 45.9 356.0 42.9 356.0C39.1 356.0 39.5 360.5 44.8 376.9C52.4 400.1 54.9 409.0 53.9 409.0C52.6 409.0 47.8 399.1 43.5 387.5C38.1 372.9 32.0 367.6 32.0 377.5C32.0 385.0 47.7 427.7 55.0 440.0C68.8 463.5 96.5 467.0 115.4 447.7C127.2 435.6 129.0 423.8 123.0 398.5C120.4 387.8 119.3 375.0 120.7 372.5C121.6 371.1 121.9 371.6 122.4 375.3C122.8 377.8 124.6 385.0 126.4 391.2C133.3 414.8 133.8 427.5 128.1 439.6C119.2 458.5 94.1 470.5 75.5 464.6ZM411.5 439.4C416.0 437.6 416.1 437.4 415.5 434.1C410.6 407.3 383.9 392.9 360.6 404.3C351.4 408.9 345.6 415.1 340.0 426.2C335.2 435.8 335.1 436.5 339.0 438.5C341.9 440.0 342.0 440.0 342.0 437.8C342.0 433.0 347.7 429.7 352.1 432.0C353.8 433.0 354.0 432.7 354.0 430.0C354.0 424.2 359.5 421.4 365.0 424.5C367.4 425.8 367.6 425.7 369.0 422.7C373.6 413.0 390.5 424.6 397.5 442.1L400.3 449.0L403.6 445.1C405.5 443.0 409.0 440.4 411.5 439.4ZM363.0 388.3C363.0 387.8 365.4 385.5 368.4 383.1C377.2 376.2 395.1 357.3 402.7 347.0C450.9 281.7 459.5 193.5 424.5 124.5C372.7 22.5 245.9 -16.6 138.1 36.0C71.6 68.5 29.0 123.0 13.8 195.2C9.2 216.7 9.0 250.0 13.3 270.0C18.1 292.6 28.6 318.7 39.2 334.3C44.8 342.5 43.3 342.5 37.2 334.3C-10.6 269.4 -9.1 181.6 41.1 106.9C105.9 10.3 239.3 -25.5 342.2 26.1C410.5 60.4 452.7 125.9 457.5 205.0C461.0 264.0 434.2 329.5 390.8 368.0C380.6 377.0 363.0 389.9 363.0 388.3ZM138.1 363.0C107.0 356.5 82.3 335.8 72.7 308.2C65.2 286.7 70.6 258.3 84.6 246.0C89.5 241.8 89.8 242.7 85.5 248.9C67.7 275.4 76.8 317.2 104.8 338.1C143.5 366.9 196.5 357.2 223.5 316.6C245.2 283.7 243.5 245.2 218.9 214.5C209.2 202.4 210.6 202.6 200.9 212.3C185.8 227.3 170.2 234.3 152.0 234.3C111.5 234.3 101.6 193.9 138.7 180.0C148.2 176.5 153.7 175.7 167.4 176.2C182.3 176.8 189.6 178.7 199.4 184.7C206.0 188.7 206.0 188.7 208.5 180.5C220.1 142.8 181.8 109.2 139.6 120.0C121.0 124.7 103.1 137.9 93.6 153.9C90.8 158.6 90.4 156.1 93.1 150.8C109.4 118.5 145.5 103.2 180.0 113.9C213.2 124.3 229.8 159.5 216.1 190.5L214.3 194.7L219.4 199.2C231.8 210.1 242.8 226.9 248.2 243.0C252.8 256.7 253.0 280.7 248.6 294.0C237.7 326.8 213.1 350.8 180.3 360.6C170.6 363.5 147.0 364.8 138.1 363.0ZM289.7 353.5C281.7 350.5 276.4 344.9 274.5 337.2C273.4 333.1 273.0 332.7 270.1 332.5C266.7 332.2 263.1 329.6 264.4 328.3C264.8 327.9 266.0 328.1 267.0 328.8C270.0 330.6 272.3 330.3 276.6 327.4C289.7 318.4 301.4 320.6 309.6 333.4C311.8 337.0 313.3 353.3 311.3 352.6C310.6 352.3 308.2 352.7 305.9 353.5C300.8 355.3 294.7 355.3 289.7 353.5ZM309.6 349.2C309.3 348.3 308.6 345.4 307.9 342.7C306.5 337.1 305.5 336.2 304.0 339.1C302.5 341.9 296.5 344.3 293.0 343.5C287.1 342.2 284.1 335.7 286.3 329.2L287.1 327.0L281.9 329.0C274.7 331.9 274.8 331.7 276.6 335.1C281.9 345.4 291.2 350.7 304.3 350.9C309.4 351.0 310.1 350.8 309.6 349.2ZM143.5 335.3C128.2 333.3 111.9 323.8 102.6 311.6C86.9 291.1 86.0 260.1 100.7 243.9C104.5 239.7 106.9 238.6 104.6 242.2C88.7 266.9 100.3 306.0 127.4 319.0C180.5 344.3 237.5 286.3 211.1 233.8C206.5 224.5 207.9 223.3 213.9 231.2C222.9 243.3 226.7 255.5 225.7 268.9C222.5 309.6 184.1 340.7 143.5 335.3ZM301.8 333.4C302.2 330.9 299.9 328.7 297.7 329.6C295.5 330.4 294.7 333.0 296.1 334.7C297.8 336.7 301.4 335.9 301.8 333.4ZM320.2 331.2C318.7 329.6 315.5 325.8 313.0 322.6C303.8 310.9 292.3 305.5 276.8 305.6C266.2 305.7 265.4 305.0 273.1 302.5C281.8 299.6 294.0 300.7 303.3 305.3C311.8 309.5 321.2 318.0 325.4 325.3C328.1 329.9 328.2 330.2 326.5 332.0C324.1 334.6 323.3 334.5 320.2 331.2ZM295.8 286.7C288.9 285.1 289.4 285.7 288.7 279.2C288.1 274.4 288.3 273.9 289.8 274.5C299.3 278.1 320.9 279.9 334.4 278.1C345.4 276.6 346.0 277.2 337.9 280.9C325.1 286.9 307.4 289.3 295.8 286.7ZM298.0 269.0C291.7 267.9 288.0 266.3 288.0 264.7C288.0 263.9 287.7 261.1 287.3 258.5L286.7 253.8L289.8 255.4C298.2 259.8 320.5 261.8 336.9 259.7C345.5 258.6 344.0 260.7 333.2 264.9C321.3 269.4 308.8 270.9 298.0 269.0ZM164.6 222.9C168.4 221.8 174.4 219.2 178.0 217.2C185.1 213.3 200.5 199.0 199.8 197.0C199.2 195.0 187.2 189.3 178.9 187.0C154.4 180.4 129.0 190.9 129.0 207.6C129.0 221.6 145.5 228.7 164.6 222.9ZM258.3 158.9C240.0 155.3 226.0 138.7 226.0 120.6C226.0 111.0 230.8 100.0 235.0 100.0C238.0 100.0 238.2 101.5 236.5 110.2C233.0 126.9 238.2 138.3 252.5 145.8C259.8 149.7 273.2 149.7 280.6 145.8C294.5 138.5 300.2 125.4 296.8 108.8C294.9 99.8 297.8 99.8 302.1 108.8C305.7 116.4 305.4 128.5 301.4 137.0C293.6 153.4 275.9 162.4 258.3 158.9ZM258.2 139.3C247.6 134.1 247.5 120.3 258.0 113.2C267.8 106.6 283.2 118.1 280.1 129.7C277.6 138.9 266.9 143.6 258.2 139.3ZM269.3 131.9C277.2 128.3 272.2 116.3 264.0 119.1C259.0 120.9 257.6 126.7 261.5 130.5C264.2 133.3 265.7 133.5 269.3 131.9Z";
function ganeshaSVG(height){
  return `<svg class="lotus ganesha" viewBox="${GANESHA_VB}" height="${height}" style="display:block;" aria-label="Ganesha"><path d="${GANESHA_D}" fill="#FFFFFF" fill-rule="evenodd"/></svg>`;
}


/* ---------- top decoration: lotus stems + leaves crossing edge to edge, twinkling dots ---------- */
function leaf(x,y,rot,len){ // simple pointed leaf with a midrib
  const l=len||16;
  return `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0 C${l*0.35} ${-l*0.42} ${l*0.75} ${-l*0.38} ${l} 0 C${l*0.75} ${l*0.38} ${l*0.35} ${l*0.42} 0 0Z"/><path d="M0 0 L${l*0.85} 0" stroke-width="0.8"/></g>`;
}
function bud(x,y,rot){
  return `<g transform="translate(${x} ${y}) rotate(${rot})"><path d="M0 0 C-6 -6 -5 -16 0 -22 C5 -16 6 -6 0 0Z"/><path d="M0 0 C-8 -3 -11 -11 -9 -16 C-4 -12 -1 -6 0 0Z"/><path d="M0 0 C8 -3 11 -11 9 -16 C4 -12 1 -6 0 0Z"/></g>`;
}
function topDecorSVG(){
  const sparks = [[38,30],[150,22],[248,58],[318,18],[372,96],[96,96],[210,128],[30,200],[352,250],[120,300],[268,350],[60,420],[338,440],[190,520],[18,600],[380,560],[250,640],[110,700]]
    .map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="${(i%3)+1.6}" fill="#fff" filter="url(#sparkGlow)"><animate attributeName="opacity" values="0.25;1;0.25" dur="${3+(i%4)*0.7}s" begin="${(i*0.37)%3}s" repeatCount="indefinite"/></circle>`).join("");
  return `
  <svg viewBox="0 0 400 760" style="position:absolute;left:0;top:0;width:100%;height:auto;z-index:-1;pointer-events:none;" aria-hidden="true">
    <defs><filter id="sparkGlow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="2.2" result="b"/><feFlood flood-color="#FFE7A0"/><feComposite in2="b" operator="in" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    <g class="lotus" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.9">
      <!-- stem 1: left edge → across under the header → right edge over the chart -->
      <path d="M-6 150 C70 118 110 196 196 178 S318 112 406 196"/>
      ${leaf(48,138,-40,18)}${leaf(92,150,25,15)}${leaf(150,186,-15,17)}${leaf(232,166,-50,16)}${leaf(286,140,20,18)}${leaf(352,154,-25,15)}
      ${bud(196,178,-8)}
      <path d="M286 140 C292 124 300 112 312 104"/>${bud(312,104,30)}
      <!-- stem 2: right edge by the chart → down across to the left, over the thought -->
      <path d="M406 446 C340 430 300 506 214 494 S84 552 -6 534"/>
      ${leaf(372,440,200,17)}${leaf(318,462,150,15)}${leaf(262,494,175,17)}${leaf(176,500,210,16)}${leaf(118,520,160,17)}${leaf(54,534,190,15)}
      <path d="M262 494 C258 512 252 524 240 534"/>${bud(240,534,-150)}
      <path d="M118 520 C112 506 104 496 92 490"/>${bud(92,490,-40)}
    </g>
    ${sparks}
  </svg>`;
}

/* ---------- shiny twinkling dots around the thought (no box, sits on the app background) ---------- */
function thoughtSparklesSVG(){
  const pts=[[6,10,2.4],[40,0,1.6],[120,6,2],[210,0,1.6],[300,4,2.4],[370,12,1.8],[396,60,2.2],[392,120,1.6],[350,152,2.4],
    [260,158,1.8],[170,154,2.2],[80,158,1.6],[14,140,2.2],[0,80,1.8],[160,30,1.4],[330,100,1.4],[60,110,1.4]];
  const dots=pts.map(([x,y,r],i)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" filter="url(#tSpark)"><animate attributeName="opacity" values="0.2;1;0.2" dur="${2.6+(i%5)*0.6}s" begin="${(i*0.41)%3}s" repeatCount="indefinite"/></circle>`).join("");
  return `
  <svg viewBox="0 0 400 160" preserveAspectRatio="none" style="position:absolute;left:-10px;top:-12px;width:calc(100% + 20px);height:calc(100% + 24px);overflow:visible;pointer-events:none;" aria-hidden="true">
    <defs><filter id="tSpark" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="2.4" result="b"/><feFlood flood-color="#FFD866"/><feComposite in2="b" operator="in" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
    ${dots}
  </svg>`;
}

/* ---------- white sketched lotus (decoration) ---------- */
function lotusSVG(size, style){
  return `<svg class="lotus" viewBox="0 0 100 72" width="${size}" height="${size*0.72}" style="${style||""}" aria-hidden="true">
    <g fill="none" stroke="#FFFFFF" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">
      <path d="M50 18 C41 31 41 47 50 58 C59 47 59 31 50 18Z"/>
      <path d="M50 58 C40 54 32 44 30 29 C40 33 47 44 50 58Z"/>
      <path d="M50 58 C60 54 68 44 70 29 C60 33 53 44 50 58Z"/>
      <path d="M50 58 C36 61 22 55 13 42 C28 41 42 47 50 58Z"/>
      <path d="M50 58 C64 61 78 55 87 42 C72 41 58 47 50 58Z"/>
      <path d="M26 65 Q50 72 74 65"/>
    </g></svg>`;
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
  const todayIsCustom = getDayMode(todayKey) === "custom";

  const viewDate = getViewDate();
  const viewKey = getViewKey();
  const viewIsCustom = getDayMode(viewKey) === "custom";
  /* which list the add/rename/remove actions target for the viewed day */
  const listId = viewIsCustom ? "custom" : getDayType(viewDate);
  const viewHabits = getTasksFor(viewKey);
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
    const key = dateKey(d);
    const isCustomDay = getDayMode(key) === "custom";
    const set = getTasksFor(key);
    const log = S.logs[key] || {};
    const doneN = set.filter(h=>log[h.id]).length;
    const totalN = set.length;
    const dp = totalN ? Math.round((doneN/totalN)*100) : 0;
    chartPts.push({ key, day, dp, future, label: `${d.toLocaleDateString("en-US",{weekday:"short", day:"numeric", month:"short"})} · ${isCustomDay?"Custom":"Default"} · ${dp}%` });
    const x = cx(day-1), y = cy(dp);
    if(!future){
      linePts += `${x.toFixed(1)},${y.toFixed(1)} `;
      const color = "var(--dot)";
      const isToday = key===todayKey;
      dots += isCustomDay
        ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isToday?3.8:3}" style="fill:#FFFFFF;stroke:${color};stroke-width:2;"/>`
        : `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${isToday?4.2:3.2}" style="fill:${color};stroke:var(--dot-edge);stroke-width:0.8;"/>`;
      if(key===viewKey) dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.5" style="fill:none;stroke:var(--navy);stroke-width:2;"/>`;
    }
    if(day===1 || day===dim || day%5===0){
      if(!(day>=dim-1 && day!==dim && dim-day<3)){
        xLabels += `<text x="${x.toFixed(1)}" y="${CH-6}" text-anchor="middle" style="font-size:9px;fill:var(--ink-soft);">${day}</text>`;
      }
    }
  }
  /* Whole line turns green if the latest move was upward, red if downward (flat keeps the last direction). */
  const seen = chartPts.filter(p => !p.future).map(p => p.dp);
  let trendUp = true;
  for(let i = seen.length-1; i > 0; i--){ if(seen[i] !== seen[i-1]){ trendUp = seen[i] > seen[i-1]; break; } }
  const lineColor = trendUp ? "var(--up)" : "var(--down)";
  CHART = { W: CW, padL, padR, dim, pts: chartPts, cx, cy, down: false, idx: -1 };
  const grid = [0,50,100].map(p =>
    `<line x1="${padL}" x2="${CW-padR}" y1="${cy(p).toFixed(1)}" y2="${cy(p).toFixed(1)}" style="stroke:var(--line);stroke-width:1;${p===50?"stroke-dasharray:3 3;":""}"/>` +
    `<text x="${padL-5}" y="${(cy(p)+3).toFixed(1)}" text-anchor="end" style="font-size:9px;fill:var(--ink-soft);">${p}</text>`
  ).join("");
  const lineChart = `
    <svg id="line-chart" viewBox="0 0 ${CW} ${CH}" style="display:block;width:100%;height:auto;touch-action:pan-y;user-select:none;-webkit-user-select:none;" role="img" aria-label="Daily completion percentage for ${monthLabel}">
      ${grid}
      ${linePts ? `<polyline points="${linePts.trim()}" style="fill:none;stroke:${lineColor};stroke-width:2;stroke-linejoin:round;stroke-linecap:round;"/>` : ""}
      ${dots}
      ${xLabels}
      <g id="chart-preview" style="display:none;pointer-events:none;">
        <line id="chart-preview-line" x1="0" x2="0" y1="${padT}" y2="${CH-padB}" style="stroke:var(--gold);stroke-width:1;"/>
        <circle id="chart-preview-dot" cx="0" cy="0" r="5" style="fill:none;stroke:var(--gold);stroke-width:2;"/>
      </g>
      <rect x="0" y="0" width="${CW}" height="${CH}" style="fill:transparent;cursor:pointer;"
            onpointerdown="chartDown(event)" onpointermove="chartMove(event)" onpointerup="chartUp(event)" onpointercancel="chartCancel(event)"/>
    </svg>
    <div id="chart-readout" style="min-height:15px;margin-top:2px;text-align:center;font-size:11px;color:var(--ink-soft);"></div>
    <div style="display:flex;justify-content:center;gap:14px;font-size:10px;color:var(--ink-soft);margin-top:2px;">
      <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--dot);border:1px solid var(--dot-edge);box-sizing:border-box;margin-right:4px;"></span>Default</span>
      <span><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#fff;border:2px solid var(--dot);box-sizing:border-box;margin-right:4px;"></span>Custom</span>
    </div>`;

  let habitRows = "";
  const dayLocked = !isDayOpen(viewKey);
  viewHabits.forEach((h, i) => {
    const done = !!(S.logs[viewKey] && S.logs[viewKey][h.id]);
    const wrong = dayLocked && !done;
    const isEditingThis = S.editingHabitId === h.id;
    const rowBackground = "transparent"; // rows stay white whether done or not
    const boxBorder = wrong ? "var(--wrong)" : (done ? "var(--done)" : "#A88A5A");
    const boxBg = wrong ? "var(--wrong)" : (done ? "var(--done)" : "transparent");
    const boxMark = wrong ? "✕" : (done ? "✓" : "");
    const checkboxAttr = dayLocked ? "" : `onclick="toggleHabit('${viewKey}','${h.id}')"`;
    const checkboxCursor = dayLocked ? "cursor:default;" : "cursor:pointer;";
    const labelAttr = S.editMode ? `onclick="startEditing('${h.id}')"` : (dayLocked ? "" : `onclick="toggleHabit('${viewKey}','${h.id}')"`);
    const labelCursor = (S.editMode || !dayLocked) ? "cursor:pointer;" : "cursor:default;";
    const labelColor = done ? "text-decoration:line-through;" : ""; // only ticked tasks are struck through
    habitRows += `
      <div class="row" style="display:flex;align-items:center;gap:12px;padding:12px 4px;${i===0?"":"border-top:1px solid var(--line);"}background:${rowBackground};">
        <div ${checkboxAttr} style="width:20px;height:20px;border-radius:6px;border:1.5px solid ${boxBorder};background:${boxBg};display:flex;align-items:center;justify-content:center;flex-shrink:0;${checkboxCursor}">
          ${boxMark ? `<span style="color:#fff;font-size:12px;">${boxMark}</span>` : ""}
        </div>
        ${isEditingThis ? `
          <input id="edit-input-${h.id}" type="text" value="${esc(h.name)}"
            onkeydown="if(event.key==='Enter'){commitEdit('${listId}','${h.id}')} if(event.key==='Escape'){cancelEdit()}"
            onblur="commitEdit('${listId}','${h.id}')"
            style="flex:1;font-size:14px;border:1px solid var(--gold);border-radius:6px;padding:4px 8px;" />
        ` : `
          <div ${labelAttr} style="flex:1;font-size:14px;${labelCursor}${labelColor}">${esc(h.name)}</div>
        `}
        ${S.editMode && !isEditingThis ? `
          <span onclick="startEditing('${h.id}')" style="cursor:pointer;color:var(--ink-soft);">✏️</span>
          <span onclick="removeHabit('${listId}','${h.id}')" style="cursor:pointer;color:var(--ink-soft);">✕</span>
        ` : ""}
      </div>`;
  });

  return `
    ${topDecorSVG()}
    <div style="position:relative;display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
      ${lotusSVG(58, "position:absolute;left:50%;top:-4px;transform:translateX(-50%);opacity:0.95;")}
      <span class="spark" style="left:40%;top:6px;"></span><span class="spark" style="left:64%;top:40px;"></span><span class="spark" style="left:47%;top:50px;"></span>
      <div style="position:relative;">
        <div class="serif" style="font-size:26px;font-style:italic;">Ganesha</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:2px;">${dateLabel}</div>
      </div>
      <div style="position:relative;margin-top:-4px;margin-right:6px;height:58px;">${ganeshaSVG(62)}</div>
    </div>

    ${(isViewingToday() && graceOpen() && (getTasksFor(yesterdayKey).filter(h => !(S.logs[yesterdayKey] && S.logs[yesterdayKey][h.id])).length) > 0) ? `
      <div onclick="goToDateKey('${yesterdayKey}')" class="card flat" style="cursor:pointer;display:flex;align-items:center;gap:12px;padding:12px 16px;margin-bottom:16px;border-left:3px solid var(--navy);">
        <div style="font-size:22px;">🌙</div>
        <div style="flex:1;">
          <div style="font-size:13px;font-weight:700;">Yesterday is open until 2 AM</div>
          <div style="font-size:12px;">${getTasksFor(yesterdayKey).filter(h => !(S.logs[yesterdayKey] && S.logs[yesterdayKey][h.id])).length} task${(getTasksFor(yesterdayKey).filter(h => !(S.logs[yesterdayKey] && S.logs[yesterdayKey][h.id])).length)===1?"":"s"} left — tap to finish</div>
        </div>
        <div style="font-size:20px;">›</div>
      </div>` : ""}

    <div class="card flat" style="padding:14px 18px;margin-bottom:16px;">
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

    <div class="card flat" style="padding:14px 18px;margin-bottom:16px;text-align:center;font-size:15px;font-weight:600;letter-spacing:0.3px;color:var(--navy);">
      Be Serious - No excuses - Stay Focused
    </div>

    <div style="position:relative;padding:14px 18px;margin:18px 0 24px;color:var(--ink);">
      ${thoughtSparklesSVG()}
      <div class="serif" style="position:relative;font-size:18px;line-height:1.5;font-style:italic;color:#000;text-align:center;">"${esc(S.thoughts[todayKey] || "")}"</div>
    </div>

    <div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:10px;">
        <div class="card" style="display:flex;gap:4px;padding:3px;align-items:center;">
          <button ${(!dayLocked && !viewIsCustom) ? "" : "disabled"} style="border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:default;background:${!viewIsCustom?"var(--weekday-bg)":"transparent"};color:${!viewIsCustom?"var(--ink)":"#9AA3AD"};">${(!viewIsCustom && dayLocked)?"🔒 ":""}Default</button>
          <button ${(!dayLocked && !viewIsCustom) ? `onclick="chooseCustomToday()"` : "disabled"} style="border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:600;cursor:${(!dayLocked && !viewIsCustom)?"pointer":"default"};background:${viewIsCustom?"var(--weekend-bg)":"transparent"};color:${viewIsCustom?"var(--ink)":((!dayLocked)?"var(--ink)":"#9AA3AD")};">${viewIsCustom?"🔒 ":""}Custom</button>
        </div>
        <button class="btn" onclick="toggleEditMode()" style="${S.editMode?"border-color:var(--navy);background:var(--weekday-bg);":""}font-weight:600;">✏️ ${S.editMode?"Editing habits: on":"Editing habits: off"}</button>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px;">
        <div style="display:flex;align-items:center;gap:4px;">
          <button class="btn" onclick="goPrevDay()">‹</button>
          <input type="date" value="${viewKey}" max="${todayKey}" onchange="onDateInputChange(this.value)" style="width:auto;" />
          <button class="btn" onclick="goNextDay()" ${isViewingToday()?"disabled":""}>›</button>
        </div>
        ${isViewingToday()
          ? `<div id="time-remaining-box" style="font-size:13px;font-weight:700;padding:7px 2px;">⏳ ${getTimeRemainingText()}</div>`
          : `<button class="btn" onclick="goToday()">Back to today</button>`}
      </div>

      <div style="font-size:13px;font-weight:600;color:var(--ink-soft);margin-bottom:8px;">
        ${isViewingToday()?"Today's habits":esc(viewDateLabel)}${(viewKey===yesterdayKey && graceOpen())?` <span>· open until 2 AM</span>`:""} — ${viewDone} of ${viewTotal} · ${viewPct}%
      </div>

      <div class="card flat" style="overflow:hidden;">
        ${habitRows || `<div style="padding:16px;font-size:13px;color:var(--ink-soft);text-align:center;">${(viewIsCustom && !dayLocked) ? "Custom day — add your tasks below with ＋" : "No tasks for this day"}</div>`}
      </div>

      ${(S.editMode || (viewIsCustom && !dayLocked)) ? `
        <div style="display:flex;gap:8px;margin-top:8px;">
          <input id="new-habit-input" type="text" placeholder="${viewIsCustom ? "Add a task" : `Add a Default habit (${getDayType(viewDate)} list)`}" onkeydown="if(event.key==='Enter'){addHabit('${listId}')}" />
          <button class="btn" onclick="addHabit('${listId}')" style="flex-shrink:0;">＋</button>
        </div>
      ` : ""}
    </div>
  `;
}

render();
let LAST_GRACE = graceOpen();

/* Keep "Time Remaining" live, and detect the local-day rollover at midnight. */
setInterval(() => {
  if (dateKey(new Date()) !== todayKey) {
    location.reload();
    return;
  }
  const g = graceOpen();
  if (g !== LAST_GRACE) { LAST_GRACE = g; render(); return; }
  const el = document.getElementById("time-remaining-box");
  if (el) el.textContent = "⏳ " + getTimeRemainingText();
}, 30000);
