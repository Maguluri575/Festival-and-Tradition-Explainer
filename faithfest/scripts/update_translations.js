const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, '..', 'public', 'app.js');
let content = fs.readFileSync(appJsPath, 'utf8');

// Build the comprehensive DICT
const TELUGU_DICT = {
  // Navigation & Core Actions
  "Back": "వెనుకకు",
  "Navigate to previous page": "మునుపటి పేజీకి వెళ్లండి",
  "Go Back": "వెనుకకు వెళ్లండి",
  "Explore": "అన్వేషించండి",
  "Calendar": "క్యాలెండర్",
  "Map": "మ్యాప్",
  "Compare": "పోల్చండి",
  "Saved": "సేవ్ చేయబడినవి",
  "Admin": "అడ్మిన్",
  "Login": "లాగిన్",
  "Logout": "లాగౌట్",
  "CMS": "CMS",
  "All religions": "అన్ని మతాలు",
  "All religions →": "అన్ని మతాలు →",
  "All categories": "అన్ని వర్గాలు",
  "Festival": "పండుగ",
  "Holy Day": "పవిత్ర దినం",
  "Religious Observance": "మతపరమైన ఆచారం",
  "Cultural Celebration": "సాంస్కృతిక వేడుక",
  "Search": "వెతకండి",
  "No results": "ఫలితాలు లేవు",
  "Try another search or filter.": "మరొక శోధన లేదా ఫిల్టర్‌ని ప్రయత్నించండి.",
  "Date varies": "తేదీ మారుతుంది",
  "Varies": "మారుతుంది",
  "Multiple regions": "బహుళ ప్రాంతాలు",
  "Multiple": "బహుళ ప్రాంతాలు",
  "Global": "ప్రపంచవ్యాప్తం",
  "Festival information": "పండుగ సమాచారం",

  // Landing Page
  "CULTURE · HISTORY · LEARNING": "సంస్కృతి · చరిత్ర · అభ్యాసం",
  "Discover the stories behind the world's <em>festivals.</em>": "ప్రపంచ <em>పండుగల</em> వెనుక ఉన్న కథలను కనుగొనండి.",
  "Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.": "ఈ గౌరవప్రదమైన డిజిటల్ వారసత్వ ప్లాట్‌ఫారమ్ ద్వారా సంప్రదాయాలు, చరిత్ర, ఆహారం, వస్త్రధారణ, సంగీతం మరియు ఆచారాలను అన్వేషించండి.",
  "Explorer login": "ఎక్స్‌ప్లోరర్ లాగిన్",
  "Explorer login <span>→</span>": "ఎక్స్‌ప్లోరర్ లాగిన్ <span>→</span>",
  "Admin login": "అడ్మిన్ లాగిన్",
  "Admin login <span>→</span>": "అడ్మిన్ లాగిన్ <span>→</span>",
  "✓ Database-driven": "✓ డేటాబేస్ ఆధారితం",
  "✓ Source-aware": "✓ ప్రామాణిక మూలాలు",
  "✓ Multilingual-ready": "✓ బహుభాషా సౌలభ్యం",
  "Explore.<br>Understand.<br>Respect.": "అన్వేషించండి.<br>అర్థం చేసుకోండి.<br>గౌరవించండి.",
  "Religious & cultural heritage explorer": "మత & సాంస్కృతిక వారసత్వ అన్వేషణ",
  "Religions": "మతాలు",
  "Published entries": "ప్రచురిత అంశాలు",

  // Explorer Page
  "EXPLORE": "అన్వేషణ",
  "Festival Explorer": "పండుగల అన్వేషకుడు",
  "Search the real FaithFest database. Choose a religion first or combine filters.": "ఫెయిత్‌ఫెస్ట్ డేటాబేస్‌ను అన్వేషించండి. ముందుగా మతాన్ని ఎంచుకోండి లేదా ఫిల్టర్లను ఉపయోగించండి.",
  "Search festival, region or description…": "పండుగ, ప్రాంతం లేదా వివరణ కోసం వెతకండి…",
  "Explore Festivals": "పండుగలను అన్వేషించండి",
  "Festival Not Found": "పండుగ కనుగొనబడలేదు",

  // Home Page
  "CHOOSE A PATH": "మార్గాన్ని ఎంచుకోండి",
  "Explore by religion": "మతం వారీగా అన్వేషించండి",
  "Hinduism first · Islam second · Christianity third": "మొదట హిందూమతం · రెండవది ఇస్లాం · మూడవది క్రైస్తవం",
  "CALENDAR": "క్యాలెండర్",
  "Upcoming & calendar data": "రాబోయే పండుగలు & క్యాలెండర్ వివరాలు",
  "Open calendar →": "క్యాలెండర్ తెరవండి →",

  // Religion Details
  "RELIGION": "మతం",
  "ENTRIES": "నమోదులు",
  "festivals & observances": "పండుగలు & ఆచారాలు",
  "No published entries yet": "ఇంకా ప్రచురించబడిన అంశాలు లేవు",
  "The religion is configured, but festival content has not been published.": "ఈ మతం సిద్ధం చేయబడింది, కానీ పండుగల సమాచారం ఇంకా ప్రచురించబడలేదు.",
  "Hinduism": "హిందూమతం",
  "Islam": "ఇస్లాం",
  "Christianity": "క్రైస్తవం",
  "A broad family of traditions with diverse festivals, observances and regional practices.": "వివిధ పండుగలు, ఆచారాలు మరియు ప్రాంతీయ సంప్రదాయాలతో కూడిన విస్తృత సనాతన ధర్మం.",
  "A global faith with important holy days, months and festivals whose dates often follow the Islamic lunar calendar.": "ఇస్లామిక్ చంద్రమాన క్యాలెండర్‌ను అనుసరించే పవిత్ర దినాలు, మాసాలు మరియు పండుగలతో కూడిన విశ్వవ్యాప్త విశ్వాసం.",
  "A global Christian tradition with major holy days and festivals observed in different ways across denominations and regions.": "వివిధ తెగలు మరియు ప్రాంతాలలో ప్రత్యేక రీతుల్లో జరుపుకునే ప్రధాన పవిత్ర దినాలు మరియు పండుగలతో కూడిన ప్రపంచ క్రైస్తవ సంప్రదాయం.",

  // Festival Details Page
  "Save festival": "పండుగను సేవ్ చేయండి",
  "Saved": "సేవ్ చేయబడింది",
  "View on Map": "మ్యాప్‌లో చూడండి",
  "Listen": "వినండి",
  "Remind": "గుర్తు చేయండి",
  "Learning mode →": "అభ్యాస మోడ్ →",
  "Quiz →": "క్విజ్ →",
  "Report issue": "సమస్యను నివేదించండి",
  "REGION": "ప్రాంతం",
  "DATE": "తేదీ",
  "DURATION": "వ్యవధి",
  "History & origin": "చరిత్ర & మూలాలు",
  "HISTORICAL TIMELINE": "చారిత్రక కాలక్రమం",
  "Religious / cultural significance": "మతపరమైన / సాంస్కృతిక ప్రాముఖ్యత",
  "How it is celebrated": "ఎలా జరుపుకుంటారు",
  "Modern celebration": "ఆధునిక వేడుక",
  "TRADITIONAL FOOD": "సాంప్రదాయ ఆహారం",
  "TRADITIONAL CLOTHING": "సాంప్రదాయ వస్త్రధారణ",
  "MUSIC & DANCE": "సంగీతం & నృత్యం",
  "DECORATIONS & SYMBOLS": "అలంకరణలు & చిహ్నాలు",
  "REGIONAL VARIATIONS": "ప్రాంతీయ వైవిధ్యాలు",
  "GALLERY & EXPLAINER VIDEO": "చిత్రమాలిక & వివరణాత్మక వీడియో",
  "SOURCES & REFERENCES": "మూలాలు & ఆధారాలు",
  "COMPARE": "పోల్చండి",
  "Compare festivals": "పండుగలను పోల్చండి",
  "Compare factual cultural attributes without ranking religions.": "మతాల మధ్య తారతమ్యాలు లేకుండా సాంస్కృతిక అంశాలను మాత్రమే నిష్పాక్షికంగా పోల్చండి.",
  "Open comparison": "పోలికను తెరవండి",
  "Open source ↗": "మూలాన్ని తెరవండి ↗",
  "Rituals": "ఆచారాలు",
  "Food": "ఆహారం",
  "Clothing": "దుస్తులు",
  "Music": "సంగీతం",
  "Significance": "ప్రాముఖ్యత",
  "Celebration": "వేడుక",
  "History": "చరిత్ర",
  "Introduction": "పరిచయం",
  "Regional variations": "ప్రాంతీయ వైవిధ్యాలు",
  "Information will be added through the verified content workflow.": "ధృవీకరించబడిన కంటెంట్ ప్రక్రియ ద్వారా సమాచారం జోడించబడుతుంది.",
  "No timeline entries have been published yet.": "ఇంకా కాలక్రమ వివరాలు ప్రచురించబడలేదు.",
  "Food content is ready to be added by the administrator.": "ఆహార వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.",
  "Clothing content is ready to be added by the administrator.": "వస్త్రధారణ వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.",
  "Music and dance content is ready to be added by the administrator.": "సంగీత మరియు నృత్య వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.",
  "Decoration and symbol content is ready to be added by the administrator.": "అలంకరణ మరియు చిహ్నాల వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.",
  "Regional variations are ready to be added through the content workflow.": "ప్రాంతీయ వైవిధ్యాలు త్వరలో జోడించబడతాయి.",
  "Verified gallery media can be added by an administrator.": "ధృవీకరించబడిన ఫోటోలు అడ్మిన్ ద్వారా జోడించబడతాయి.",
  "Authorized explainer videos can be added here.": "వివరణాత్మక వీడియోలు ఇక్కడ జోడించబడతాయి.",
  "No verified references published yet.": "ఇంకా ధృవీకరించబడిన ఆధారాలు ప్రచురించబడలేదు.",

  // Dynamic Calendar
  "DYNAMIC CALENDAR": "డైనమిక్ క్యాలెండర్",
  "Festival calendar": "పండుగల క్యాలెండర్",
  "Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.": "క్యాలెండర్ ఈవెంట్‌లు డేటాబేస్ మరియు హిందూ క్యాలెండర్ డేటాసెట్ నుండి పొందబడ్డాయి. చంద్రమాన మరియు మారే తేదీలు యథాతథంగా నమోదు చేయబడ్డాయి.",
  "Search calendar event…": "క్యాలెండర్ ఈవెంట్‌ను వెతకండి…",
  "Filter": "ఫిల్టర్",
  "Open festival →": "పండుగను చూడండి →",
  "No calendar matches": "సరిపోలే క్యాలెండర్ ఈవెంట్‌లు లేవు",

  // Map Page
  "GEOGRAPHIC FESTIVAL EXPLORER": "భౌగోళిక పండుగల అన్వేషణ",
  "Festival Explorer Map": "పండుగల అన్వేషణ మ్యాప్",
  "Explore every religious and cultural celebration in FaithFest across Hinduism, Islam, and Christianity, connected directly to sacred temples, mosques, churches, pilgrimage routes, and historic venues.": "హిందూమతం, ఇస్లాం మరియు క్రైస్తవ మతాలలోని పవిత్ర దేవాలయాలు, మసీదులు, చర్చిలు, తీర్థయాత్రా మార్గాలు మరియు చారిత్రక వేదికలతో అనుసంధానించబడిన పండుగలను అన్వేషించండి.",
  "Near Me": "నా సమీపంలో",
  "Reset Filters": "ఫిల్టర్లను రీసెట్ చేయండి",
  "Search festival name, sacred place, city, or country...": "పండుగ పేరు, పవిత్ర స్థలం, నగరం లేదా దేశం కోసం వెతకండి...",
  "All Religions (Hinduism, Islam, Christianity)": "అన్ని మతాలు (హిందూమతం, ఇస్లాం, క్రైస్తవం)",
  "All Associated Festivals": "అన్ని సంబంధిత పండుగలు",
  "Filter Place Type:": "ప్రదేశ రకం వారీగా ఫిల్టర్ చేయండి:",
  "All Sites": "అన్ని ప్రదేశాలు",
  "Places of Worship": "ఆరాధనా స్థలాలు",
  "Pilgrimage Destinations": "తీర్థయాత్రా స్థలాలు",
  "Famous Celebration Sites": "ప్రసిద్ధ వేడుకల ప్రదేశాలు",
  "Cultural Heritage": "సాంస్కృతిక వారసత్వం",
  "Fit View": "మొత్తం మ్యాప్ చూడండి",
  "Locate Me": "నా స్థానాన్ని గుర్తించండి",
  "All Festivals": "అన్ని పండుగలు",
  "Sacred Sites": "పవిత్ర స్థలాలు",
  "All Website Festivals": "అన్ని వెబ్‌సైట్ పండుగలు",
  "Verified Sacred Sites": "ధృవీకరించబడిన పవిత్ర స్థలాలు",
  "Explore Festival Details →": "పండుగ వివరాలను అన్వేషించండి →",
  "Locate on Map": "మ్యాప్‌లో గుర్తించండి",
  "Get Directions ↗": "మార్గం పొందండి ↗",
  "Explore Details": "వివరాలను అన్వేషించండి",
  "Celebration Destination:": "వేడుక జరిగే ప్రదేశం:",

  // Compare Page
  "EDUCATIONAL COMPARISON": "విద్యాపరమైన పోలిక",
  "Religion": "మతం",
  "Region": "ప్రాంతం",
  "Typical date": "సాధారణ తేదీ",
  "Duration": "వ్యవధి",

  // Learning & Quiz
  "LEARNING MODE": "అభ్యాస మోడ్",
  "Study the festival step by step.": "పండుగ గురించి దశలవారీగా అధ్యయనం చేయండి.",
  "STEP": "దశ",
  "Next step →": "తదుపరి దశ →",
  "Complete learning": "అభ్యాసం పూర్తి చేయండి",
  "Final quiz →": "తుది క్విజ్ →",
  "Content not published yet.": "సమాచారం ఇంకా ప్రచురించబడలేదు.",
  "KNOWLEDGE CHECK": "జ్ఞాన పరీక్ష",
  "quiz": "క్విజ్",
  "Answer the questions based on the published festival content.": "ప్రచురించిన పండుగ సమాచారం ఆధారంగా ప్రశ్నలకు సమాధానమివ్వండి.",
  "QUESTION": "ప్రశ్న",
  "Submit quiz": "క్విజ్ సమర్పించండి",
  "Quiz not published yet": "క్విజ్ ఇంకా ప్రచురించబడలేదు",
  "An administrator can add questions for this festival.": "అడ్మినిస్ట్రేటర్ ఈ పండుగ కోసం ప్రశ్నలను జోడించవచ్చు.",
  "Login to submit and save quiz results": "క్విజ్ ఫలితాలను సేవ్ చేయడానికి లాగిన్ అవ్వండి",
  "Score": "స్కోరు",

  // Saved / Favorites
  "YOUR COLLECTION": "మీ సేకరణ",
  "Saved festivals": "సేవ్ చేయబడిన పండుగలు",
  "Your persistent festival collection.": "మీరు భద్రపరుచుకున్న పండుగల వ్యక్తిగత జాబితా.",
  "No saved festivals yet": "ఇంకా సేవ్ చేయబడిన పండుగలు లేవు",
  "Open a festival and choose \"Save festival\".": "ఏదైనా పండుగను తెరిచి \"పండుగను సేవ్ చేయండి\" ఎంచుకోండి.",
  "Open a festival and choose “Save festival”.": "ఏదైనా పండుగను తెరిచి \"పండుగను సేవ్ చేయండి\" ఎంచుకోండి.",
  "Removed from favorites": "ఇష్టమైన వాటి నుండి తీసివేయబడింది",
  "Saved to favorites": "ఇష్టమైన వాటిలో సేవ్ చేయబడింది",
  "Reminder preference saved": "గుర్తుచేసే ప్రాధాన్యత సేవ్ చేయబడింది",

  // Auth & Footer
  "Explorer Login": "ఎక్స్‌ప్లోరర్ లాగిన్",
  "Create your account": "మీ ఖాతాను సృష్టించండి",
  "Create Explorer Account": "కొత్త ఖాతాను సృష్టించండి",
  "Sign in to Explore": "అన్వేషించడానికి సైన్ ఇన్ చేయండి",
  "Sign in with Google": "Google తో సైన్ ఇన్ చేయండి",
  "or continue with email": "లేదా ఈమెయిల్‌తో కొనసాగించండి",
  "Full Name / Admin Identity": "పూర్తి పేరు / అడ్మిన్ వివరాలు",
  "Email Address": "ఈమెయిల్ చిరునామా",
  "Password (8+ characters)": "పాస్‌వర్డ్ (8+ అక్షరాలు)",
  "Need an account? Register": "ఖాతా లేదా? నమోదు చేసుకోండి",
  "Already registered? Login": "ఇప్పటికే నమోదయ్యారా? లాగిన్ అవ్వండి",
  "Interactive Religious Festival & Cultural Heritage Explorer": "ఇంటరాక్టివ్ మతపరమైన పండుగలు & సాంస్కృతిక వారసత్వ అన్వేషణ",
  "Educational • Neutral • Source-based": "విద్యాపరమైనది • తటస్థమైనది • ఆధారపూర్వకమైనది",

  // 82 Festivals Translations
  "Diwali": "దీపావళి",
  "Pongal": "పొంగల్",
  "Holi": "హోలీ",
  "Maha Shivaratri": "మహా శివరాత్రి",
  "Eid-ul-Fitr": "ఈద్ ఉల్-ఫితర్",
  "Eid al-Fitr": "ఈద్ ఉల్-ఫితర్",
  "Ramadan": "రమదాన్ (రంజాన్)",
  "Eid-ul-Zuha (Eid-ul-Azha)": "ఈద్ ఉల్-అదా (బక్రీద్)",
  "Eid al-Adha": "ఈద్ ఉల్-అదా (బక్రీద్)",
  "Milad-Un-Nabi": "మిలాద్-ఉన్-నబీ",
  "Mawlid al-Nabi": "మిలాద్-ఉన్-నబీ",
  "Muharram": "మొహర్రం",
  "Shab-e-Barat": "షబ్-ఎ-బరాత్",
  "Shab-e-Miraj": "షబ్-ఎ-మేరాజ్",
  "Christmas": "క్రిస్మస్",
  "Easter": "ఈస్టర్",
  "Easter Sunday": "ఈస్టర్ ఆదివారం",
  "Good Friday": "గుడ్ ఫ్రైడే",
  "Pentecost": "పెంతెకోస్తు",
  "Islamic New Year": "ఇస్లామిక్ నూతన సంవత్సరం",
  "Islamic New Year — 1 Muharram": "ఇస్లామిక్ నూతన సంవత్సరం — 1 మొహర్రం",
  "Navratri": "నవరాత్రి",
  "Ganesh Chaturthi": "వినాయక చవితి (గణేష్ చతుర్థి)",
  "Janmashtami": "కృష్ణాష్టమి (జన్మాష్టమి)",
  "Krishna Janmashtami": "శ్రీకృష్ణ జన్మాష్టమి",
  "Rama Navami": "శ్రీరామ నవమి",
  "Raksha Bandhan": "రక్షా బంధన్ (రాఖీ)",
  "Dussehra": "దసరా (విజయదశమి)",
  "Vasant Panchami": "వసంత పంచమి",
  "Guru Purnima": "గురు పౌర్ణమి",
  "Onam": "ఓనం",
  "Chhath Puja": "ఛట్ పూజ",
  "Karwa Chauth": "కర్వా చౌత్",
  "Akshaya Tritiya": "అక్షయ తృతీయ",
  "Makara Sankranti": "మకర సంక్రాంతి",
  "Makar Sankranti": "మకర సంక్రాంతి",
  "Nag Panchami": "నాగ పంచమి",
  "Sharad Purnima": "శరద్ పూర్ణిమ",
  "Dhanteras": "ధంతేరస్",
  "Hanuman Jayanti": "హనుమాన్ జయంతి",
  "Ugadi": "ఉగాది",
  "Gudi Padwa": "గుడి పడ్వా",
  "Thaipusam": "తైపూసం",
  "Narasimha Jayanti": "నరసింహ జయంతి",
  "Vat Savitri Vrat": "వట సావిత్రి వ్రతం",
  "Jagannath Rath Yatra": "జగన్నాథ రథయాత్ర",
  "Varalakshmi Vratam": "వరలక్ష్మీ వ్రతం",
  "Hartalika Teej": "హర్తాళికా తీజ్",
  "Vishwakarma Puja": "విశ్వకర్మ పూజ",
  "Durga Puja": "దుర్గా పూజ",
  "Govardhan Puja": "గోవర్ధన పూజ",
  "Bhai Dooj": "భాయ్ దూజ్ (భగినీ హస్తభోజనం)",
  "Karthigai Deepam": "కార్తీక దీపం",
  "Vaikuntha Ekadashi": "వైకుంఠ ఏకాదశి",
  "Bathukamma": "బతుకమ్మ",
  "Vishu": "విషు",
  "Bihu": "బిహు",
  "Bonalu": "బోనాలు",
  "Karthika Purnima": "కార్తీక పౌర్ణమి",
  "Shigmo": "శిగ్మో",
  "Epiphany": "ప్రత్యక్షీకరణ పండుగ (ఎపిఫనీ)",
  "Feast of the Epiphany": "ప్రత్యక్షీకరణ పండుగ (ఎపిఫనీ)",
  "Ash Wednesday": "విభూతి బుధవారం (యాష్ వెడ్నెస్ డే)",
  "Palm Sunday": "మట్టల ఆదివారం (పామ్ సండే)",
  "Maundy Thursday": "పరిశుద్ధ గురువారం",
  "Holy Saturday": "పరిశుద్ధ శనివారం",
  "Ascension of Jesus": "ఏసుక్రీస్తు పరలోకారారోహణ పండుగ",
  "Trinity Sunday": "త్రిత్వ ఆదివారం",
  "Feast of the Assumption": "మరియమాత స్వర్గారోపణ పండుగ",
  "All Saints' Day": "సర్వ సంతుల పండుగ (ఆల్ సెయింట్స్ డే)",
  "All Souls' Day": "సర్వ విశ్వాసుల మృతుల దినం",
  "Feast of the Annunciation": "మంగళవార్త పండుగ",
  "Feast of the Transfiguration": "రూపాంతర పండుగ",
  "Feast of Saint Thomas the Apostle": "పునీత తోమా అపొస్తలుని పండుగ",
  "Advent": "ఆగమనం (అడ్వెంట్)",
  "Feast of the Immaculate Conception": "అమలోద్భవ మరియమాత పండుగ",
  "Corpus Christi": "క్రీస్తు దివ్యశరీర పండుగ",
  "Laylat al-Qadr": "షబ్-ఎ-ఖద్ర్ (లైలతుల్ ఖద్ర్)",
  "Hajj": "హజ్ యాత్ర",
  "Ashura": "ఆషూరా",
  "Isra and Mi'raj": "ఇస్రా మరియు మిరాజ్",
  "Nuzul al-Qur'an": "నుజుల్ అల్-ఖురాన్"
};

const TAMIL_DICT = {
  "Back": "பின்செல்",
  "Navigate to previous page": "முந்தைய பக்கத்திற்குச் செல்லவும்",
  "Go Back": "பின்னே செல்",
  "Explore": "ஆராய்",
  "Calendar": "நாட்காட்டி",
  "Map": "வரைபடம்",
  "Compare": "ஒப்பிடு",
  "Saved": "சேமிக்கப்பட்டவை",
  "Admin": "நிர்வாகி",
  "Login": "உள்நுழை",
  "Logout": "வெளியேறு",
  "CMS": "CMS",
  "All religions": "அனைத்து மதங்கள்",
  "All religions →": "அனைத்து மதங்கள் →",
  "All categories": "அனைத்து வகைகள்",
  "Festival": "திருவிழா",
  "Holy Day": "புனித நாள்",
  "Religious Observance": "மத அனுசரிப்பு",
  "Cultural Celebration": "கலாச்சார கொண்டாட்டம்",
  "Search": "தேடுங்கள்",
  "No results": "முடிவுகள் இல்லை",
  "Try another search or filter.": "வேறொரு தேடல் அல்லது வடிப்பானை முயற்சிக்கவும்.",
  "Date varies": "தேதி மாறுபடும்",
  "Varies": "மாறுபடும்",
  "Multiple regions": "பல பகுதிகள்",
  "Multiple": "பல பகுதிகள்",
  "Global": "உலகளாவிய",
  "Festival information": "பண்டிகை தகவல்",
  "CULTURE · HISTORY · LEARNING": "கலாச்சாரம் · வரலாறு · கற்றல்",
  "Discover the stories behind the world's <em>festivals.</em>": "உலகின் <em>பண்டிகைகளின்</em> பின்னணியில் உள்ள கதைகளை கண்டறியவும்.",
  "Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.": "பயன்பாட்டின் மூலம் பாரம்பரியம் மற்றும் வரலாற்றை ஆராயுங்கள்.",
  "Explorer login": "பயனர் உள்நுழைவு",
  "Explorer login <span>→</span>": "பயனர் உள்நுழைவு <span>→</span>",
  "Admin login": "நிர்வாகி உள்நுழைவு",
  "Admin login <span>→</span>": "நிர்வாகி உள்நுழைவு <span>→</span>",
  "✓ Database-driven": "✓ தரவுத்தளம்",
  "✓ Source-aware": "✓ மூலங்கள்",
  "✓ Multilingual-ready": "✓ பன்மொழி",
  "Explore.<br>Understand.<br>Respect.": "ஆராயுங்கள்.<br>புரிந்து கொள்ளுங்கள்.<br>மதியுங்கள்.",
  "Religious & cultural heritage explorer": "கலாச்சார ஆய்வாளர்",
  "Religions": "மதங்கள்",
  "Published entries": "பதிவுகள்",
  "EXPLORE": "ஆராய்",
  "Festival Explorer": "திருவிழா ஆய்வாளர்",
  "Search the real FaithFest database. Choose a religion first or combine filters.": "ஃபெய்த்ஃபெஸ்ட் தரவுத்தளத்தில் தேடுங்கள். ஒரு மதத்தைத் தேர்ந்தெடுக்கவும் அல்லது வடிப்பான்களை இணைக்கவும்.",
  "Search festival, region or description…": "பண்டிகை, பிராந்தியம் அல்லது விளக்கத்தைத் தேடுங்கள்…",
  "Explore Festivals": "பண்டிகைகளை ஆராயுங்கள்",
  "CHOOSE A PATH": "ஒரு வழியைத் தேர்ந்தெடுக்கவும்",
  "Explore by religion": "மதம் வாரியாக ஆராயுங்கள்",
  "Hinduism first · Islam second · Christianity third": "முதலில் இந்து மதம் · இரண்டாவதாக இஸ்லாம் · மூன்றாவதாக கிறிஸ்தவம்",
  "CALENDAR": "நாட்காட்டி",
  "Upcoming & calendar data": "வரவிருக்கும் நிகழ்வுகள் & நாட்காட்டி",
  "Open calendar →": "நாட்காட்டியைத் திறக்கவும் →",
  "RELIGION": "மதம்",
  "ENTRIES": "பதிவுகள்",
  "festivals & observances": "பண்டிகைகள் & நிகழ்வுகள்",
  "Hinduism": "இந்து மதம்",
  "Islam": "இஸ்லாம்",
  "Christianity": "கிறிஸ்தவம்",
  "Save festival": "பண்டிகையைச் சேமிக்கவும்",
  "Saved": "சேமிக்கப்பட்டது",
  "View on Map": "வரைபடத்தில் காண்க",
  "Listen": "கேளுங்கள்",
  "Remind": "நினைவூட்டு",
  "Learning mode →": "கற்றல் முறை →",
  "Quiz →": "வினாடி வினா →",
  "Report issue": "பிரச்சனையைப் புகாரளி",
  "REGION": "பிராந்தியம்",
  "DATE": "தேதி",
  "DURATION": "கால அளவு",
  "History & origin": "வரலாறு மற்றும் தோற்றம்",
  "HISTORICAL TIMELINE": "வரலாற்று காலவரிசை",
  "Religious / cultural significance": "மத / கலாச்சார முக்கியத்துவம்",
  "How it is celebrated": "எவ்வாறு கொண்டாடப்படுகிறது",
  "Modern celebration": "நவீன கொண்டாட்டம்",
  "TRADITIONAL FOOD": "பாரம்பரிய உணவு",
  "TRADITIONAL CLOTHING": "பாரம்பரிய உடை",
  "MUSIC & DANCE": "இசை & நடனம்",
  "DECORATIONS & SYMBOLS": "அலங்காரங்கள் & சின்னங்கள்",
  "REGIONAL VARIATIONS": "பிராந்திய வேறுபாடுகள்",
  "GALLERY & EXPLAINER VIDEO": "படத்தொகுப்பு & விளக்க வீடியோ",
  "SOURCES & REFERENCES": "ஆதாரங்கள் & குறிப்புகள்",
  "COMPARE": "ஒப்பிடு",
  "Compare festivals": "பண்டிகைகளை ஒப்பிடுங்கள்",
  "Compare factual cultural attributes without ranking religions.": "மதங்களை ஒப்பிடாமல் உண்மையான கலாச்சார பண்புகளை மட்டும் ஒப்பிடுங்கள்.",
  "Open comparison": "ஒப்பீட்டைத் திறக்கவும்",
  "DYNAMIC CALENDAR": "டைனமிக் நாட்காட்டி",
  "Festival calendar": "பண்டிகை நாட்காட்டி",
  "GEOGRAPHIC FESTIVAL EXPLORER": "புவியியல் பண்டிகை ஆய்வாளர்",
  "Festival Explorer Map": "பண்டிகை ஆய்வு வரைபடம்",
  "LEARNING MODE": "கற்றல் முறை",
  "KNOWLEDGE CHECK": "அறிவு சோதனை",
  "YOUR COLLECTION": "உங்கள் தொகுப்பு",
  "Saved festivals": "சேமிக்கப்பட்ட பண்டிகைகள்",
  "Interactive Religious Festival & Cultural Heritage Explorer": "மதப் பண்டிகைகள் & கலாச்சார பாரம்பரியத்தை ஆராயும் தளம்",
  "Educational • Neutral • Source-based": "கல்வி சார்ந்தது • நடுநிலையானது • ஆதாரப்பூர்வமானது",
  "Diwali": "தீபாவளி",
  "Pongal": "பொங்கல்",
  "Holi": "ஹோலி",
  "Maha Shivaratri": "மகா சிவராத்திரி",
  "Eid-ul-Fitr": "ஈகைத் திருநாள்",
  "Eid al-Fitr": "ஈகைத் திருநாள்",
  "Ramadan": "ரம்ஜான்",
  "Eid-ul-Zuha (Eid-ul-Azha)": "பக்ரீத்",
  "Eid al-Adha": "பக்ரீத்",
  "Christmas": "கிறிஸ்துமஸ்",
  "Easter": "ஈஸ்டர்",
  "Good Friday": "புனித வெள்ளி",
  "Advent": "வருகைக் காலம் (அட்வென்ட்)",
  "Akshaya Tritiya": "அட்சய திருதியை",
  "All Saints' Day": "அனைத்து புனிதர்கள் பெருவிழா"
};

const HINDI_DICT = {
  "Back": "पीछे",
  "Navigate to previous page": "पिछले पृष्ठ पर जाएं",
  "Go Back": "वापस जाएं",
  "Explore": "खोजें",
  "Calendar": "कैलेंडर",
  "Map": "नक्शा",
  "Compare": "तुलना करें",
  "Saved": "सहेजे गए",
  "Admin": "एडमिन",
  "Login": "लॉगिन",
  "Logout": "लॉगआउट",
  "CMS": "CMS",
  "All religions": "सभी धर्म",
  "All religions →": "सभी धर्म →",
  "All categories": "सभी श्रेणियां",
  "Festival": "त्योहार",
  "Holy Day": "पवित्र दिन",
  "Religious Observance": "धार्मिक अनुष्ठान",
  "Cultural Celebration": "सांस्कृतिक उत्सव",
  "Search": "खोजें",
  "No results": "कोई परिणाम नहीं",
  "Try another search or filter.": "अन्य खोज या फ़िल्टर का प्रयास करें।",
  "Date varies": "तिथि परिवर्तनशील",
  "Varies": "परिवर्तनशील",
  "Multiple regions": "विविध क्षेत्र",
  "Multiple": "विविध क्षेत्र",
  "Global": "वैश्विक",
  "Festival information": "त्योहार की जानकारी",
  "CULTURE · HISTORY · LEARNING": "संस्कृति · इतिहास · सीखना",
  "Discover the stories behind the world's <em>festivals.</em>": "दुनिया के <em>त्योहारों</em> के पीछे की कहानियों की खोज करें।",
  "Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.": "इस मंच के माध्यम से परंपराओं और इतिहास का अन्वेषण करें।",
  "Explorer login": "एक्सप्लोरर लॉगिन",
  "Explorer login <span>→</span>": "एक्सप्लोरर लॉगिन <span>→</span>",
  "Admin login": "एडमिन लॉगिन",
  "Admin login <span>→</span>": "एडमिन लॉगिन <span>→</span>",
  "✓ Database-driven": "✓ डेटाबेस-संचालित",
  "✓ Source-aware": "✓ स्रोत-जागरूक",
  "✓ Multilingual-ready": "✓ बहुभाषी-तैयार",
  "Explore.<br>Understand.<br>Respect.": "अन्वेषण करें।<br>समझें।<br>सम्मान करें।",
  "Religious & cultural heritage explorer": "सांस्कृतिक खोजकर्ता",
  "Religions": "धर्म",
  "Published entries": "प्रविष्टियाँ",
  "EXPLORE": "खोजें",
  "Festival Explorer": "त्योहार खोजकर्ता",
  "Search the real FaithFest database. Choose a religion first or combine filters.": "फेथफेस्ट डेटाबेस में खोजें। पहले धर्म चुनें या फ़िल्टर मिलाएं।",
  "Search festival, region or description…": "त्योहार, क्षेत्र या विवरण खोजें…",
  "Explore Festivals": "त्योहारों का अन्वेषण करें",
  "CHOOSE A PATH": "एक मार्ग चुनें",
  "Explore by religion": "धर्म के अनुसार खोजें",
  "Hinduism first · Islam second · Christianity third": "प्रथम हिन्दू धर्म · द्वितीय इस्लाम · तृतीय ईसाई धर्म",
  "CALENDAR": "कैलेंडर",
  "Upcoming & calendar data": "आगामी त्योहार व कैलेंडर डेटा",
  "Open calendar →": "कैलेंडर खोलें →",
  "RELIGION": "धर्म",
  "ENTRIES": "प्रविष्टियाँ",
  "festivals & observances": "त्योहार और अनुष्ठान",
  "Hinduism": "हिन्दू धर्म",
  "Islam": "इस्लाम",
  "Christianity": "ईसाई धर्म",
  "Save festival": "त्योहार सहेजें",
  "Saved": "सहेजा गया",
  "View on Map": "मानचित्र पर देखें",
  "Listen": "सुनें",
  "Remind": "याद दिलाएं",
  "Learning mode →": "सीखने का मोड →",
  "Quiz →": "प्रश्नोत्तरी →",
  "Report issue": "समस्या बताएं",
  "REGION": "क्षेत्र",
  "DATE": "तिथि",
  "DURATION": "अवधि",
  "History & origin": "इतिहास और उत्पत्ति",
  "HISTORICAL TIMELINE": "ऐतिहासिक समयरेखा",
  "Religious / cultural significance": "धार्मिक व सांस्कृतिक महत्व",
  "How it is celebrated": "यह कैसे मनाया जाता है",
  "Modern celebration": "आधुनिक उत्सव",
  "TRADITIONAL FOOD": "पारंपरिक व्यंजन",
  "TRADITIONAL CLOTHING": "पारंपरिक वेशभूषा",
  "MUSIC & DANCE": "संगीत और नृत्य",
  "DECORATIONS & SYMBOLS": "सजावट और प्रतीक",
  "REGIONAL VARIATIONS": "क्षेत्रीय विविधताएं",
  "GALLERY & EXPLAINER VIDEO": "गैलरी और व्याख्यात्मक वीडियो",
  "SOURCES & REFERENCES": "स्रोत और संदर्भ",
  "COMPARE": "तुलना करें",
  "Compare festivals": "त्योहारों की तुलना करें",
  "Compare factual cultural attributes without ranking religions.": "धर्मों को बिना श्रेणीबद्ध किए केवल सांस्कृतिक विशेषताओं की निष्पक्ष तुलना करें।",
  "Open comparison": "तुलना खोलें",
  "DYNAMIC CALENDAR": "डायनेमिक कैलेंडर",
  "Festival calendar": "त्योहार कैलेंडर",
  "GEOGRAPHIC FESTIVAL EXPLORER": "भौगोलिक त्योहार अन्वेषक",
  "Festival Explorer Map": "त्योहार अन्वेषण मानचित्र",
  "LEARNING MODE": "सीखने का मोड",
  "KNOWLEDGE CHECK": "ज्ञान परीक्षण",
  "YOUR COLLECTION": "आपका संग्रह",
  "Saved festivals": "सहेजे गए त्योहार",
  "Interactive Religious Festival & Cultural Heritage Explorer": "इंटरैक्टिव धार्मिक त्योहार और सांस्कृतिक विरासत अन्वेषक",
  "Educational • Neutral • Source-based": "शैक्षिक • तटस्थ • स्रोत-आधारित",
  "Diwali": "दीपावली",
  "Pongal": "पोंगल",
  "Holi": "होली",
  "Maha Shivaratri": "महाशिवरात्रि",
  "Eid-ul-Fitr": "ईद-उल-फ़ितर",
  "Eid al-Fitr": "ईद-उल-फ़ितर",
  "Ramadan": "रमज़ान",
  "Eid-ul-Zuha (Eid-ul-Azha)": "ईद-उल-अज़हा",
  "Eid al-Adha": "ईद-उल-अज़हा",
  "Christmas": "क्रिसमस",
  "Easter": "ईस्टर",
  "Good Friday": "गुड फ्राइडे",
  "Advent": "आगमन काल (एडवेंट)",
  "Akshaya Tritiya": "अक्षय तृतीया",
  "All Saints' Day": "सभी संतों का पर्व"
};

const fullDict = {
  Telugu: TELUGU_DICT,
  Tamil: TAMIL_DICT,
  Hindi: HINDI_DICT
};

// 1. Update DICT and t function
const newDictCode = `const DICT = ${JSON.stringify(fullDict)};
const t = s => {
  if (!s || state.lang === 'English') return s;
  const d = DICT[state.lang];
  if (!d) return s;
  if (d[s] !== undefined) return d[s];
  const tr = String(s).trim();
  if (d[tr] !== undefined) return d[tr];
  return s;
};

function applyGoogleTranslate(langName) {
  const codeMap = { 'English': 'en', 'Telugu': 'te', 'Tamil': 'ta', 'Hindi': 'hi' };
  const targetCode = codeMap[langName] || 'en';
  const hostname = window.location.hostname;
  if (targetCode === 'en') {
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + hostname + ';';
  } else {
    const val = '/en/' + targetCode;
    document.cookie = 'googtrans=' + val + '; path=/;';
    document.cookie = 'googtrans=' + val + '; path=/; domain=' + hostname + ';';
  }
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = targetCode === 'en' ? '' : targetCode;
    combo.dispatchEvent(new Event('change'));
  }
}

function translateCurrentPage() {
  if (state.lang && state.lang !== 'English') {
    setTimeout(() => {
      applyGoogleTranslate(state.lang);
    }, 150);
  }
}
`;

// Replace lines 4-5
content = content.replace(/const DICT=\{[\s\S]*?\};\r?\nconst t=s=>[\s\S]*?;\r?\n/, newDictCode);

// 2. Update nav() back button text to ${t('Back')} and aria labels
content = content.replace(
  `<span>Back</span>`,
  `<span>\${t('Back')}</span>`
);
content = content.replace(
  `title="Navigate to previous page" aria-label="Go Back"`,
  `title="\${t('Navigate to previous page')}" aria-label="\${t('Go Back')}"`
);

// 3. Update setLang to trigger Google Translate and translateCurrentPage
const oldSetLang = `function setLang(v){state.lang=v;localStorage.setItem('ff_lang',v);route();}`;
const newSetLang = `function setLang(v){
  state.lang = v;
  localStorage.setItem('ff_lang', v);
  applyGoogleTranslate(v);
  route();
  translateCurrentPage();
}`;
content = content.replace(oldSetLang, newSetLang);

// 4. Update layout() to translate footer
const oldLayout = `function layout(content,cls=''){app.innerHTML=nav()+\`<main class="container \${cls}">\${content}</main><footer><div class="container foot"><b>FaithFest</b><span>Interactive Religious Festival & Cultural Heritage Explorer</span><span>Educational • Neutral • Source-based</span></div></footer>\`;window.scrollTo(0,0)}`;
const newLayout = `function layout(content,cls=''){
  app.innerHTML = nav() + \`<main class="container \${cls}">\${content}</main><footer><div class="container foot"><b>FaithFest</b><span>\${t('Interactive Religious Festival & Cultural Heritage Explorer')}</span><span>\${t('Educational • Neutral • Source-based')}</span></div></footer>\`;
  window.scrollTo(0,0);
  translateCurrentPage();
}`;
content = content.replace(oldLayout, newLayout);

// 5. Update fcard to translate category, date, name, description, region, Explore
const oldFcard = `function fcard(f){return \`<a class="festivalCard" href="#/festival/\${f.id}"><div class="fcTop"><span class="tag">\${esc(f.category)}</span><span>\${esc(f.typical_date||'Date varies')}</span></div><div class="fcIcon">\${esc(f.religion_icon||'✦')}</div><h3>\${esc(f.name)}</h3><p>\${esc(f.description||'Festival information')}</p><div class="fcMeta"><span>\${esc(f.region||'Multiple regions')}</span><span>Explore →</span></div></a>\`}`;
const newFcard = `function fcard(f){
  return \`<a class="festivalCard" href="#/festival/\${f.id}"><div class="fcTop"><span class="tag">\${esc(t(f.category))}</span><span>\${esc(t(f.typical_date||'Date varies'))}</span></div><div class="fcIcon">\${esc(f.religion_icon||'✦')}</div><h3>\${esc(t(f.name))}</h3><p>\${esc(t(f.description||'Festival information'))}</p><div class="fcMeta"><span>\${esc(t(f.region||'Multiple regions'))}</span><span>\${t('Explore')} →</span></div></a>\`;
}`;
content = content.replace(oldFcard, newFcard);

// 6. Update religionCard
const oldRelCard = `function religionCard(r,i){return \`<a class="religionHero religion-\${i}" href="#/religion/\${r.id}"><div class="religionGlow">\${r.icon}</div><div><span class="eyebrow">0\${i+1} · EXPLORE</span><h2>\${esc(r.name)}</h2><p>\${esc(r.description)}</p><span class="arrow">Explore \${esc(r.name)} →</span></div></a>\`}`;
const newRelCard = `function religionCard(r,i){
  return \`<a class="religionHero religion-\${i}" href="#/religion/\${r.id}"><div class="religionGlow">\${r.icon}</div><div><span class="eyebrow">0\${i+1} · \${t('EXPLORE')}</span><h2>\${esc(t(r.name))}</h2><p>\${esc(t(r.description))}</p><span class="arrow">\${t('Explore')} \${esc(t(r.name))} →</span></div></a>\`;
}`;
content = content.replace(oldRelCard, newRelCard);

// 7. Update home()
const oldHome = `async function home(){const [rels,fs,cal]=await Promise.all([api('/api/religions'),api('/api/festivals'),api('/api/calendar?limit=8&upcoming=true')]);const sorted=ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean);layout(\`<section class="section"><div class="sectionTitle"><div><span class="eyebrow">CHOOSE A PATH</span><h2>Explore by religion</h2></div><span class="muted">Hinduism first · Islam second · Christianity third</span></div><div class="religionGrid">\${sorted.map((r,i)=>religionCard(r,i)).join('')}</div></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">CALENDAR</span><h2>Upcoming & calendar data</h2></div><a class="textBtn" href="#/calendar">Open calendar →</a></div><div class="calendarStrip">\${cal.slice(0,5).map(x=>\`<div class="calMini"><span>\${esc(x.event_date||x.typical_date||'')}</span><b>\${esc(x.title||x.name)}</b><small>\${esc(x.religion)}</small></div>\`).join('')}</div></section>\`)}`;
const newHome = `async function home(){
  const [rels,fs,cal]=await Promise.all([api('/api/religions'),api('/api/festivals'),api('/api/calendar?limit=8&upcoming=true')]);
  const sorted=ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean);
  layout(\`<section class="section"><div class="sectionTitle"><div><span class="eyebrow">\${t('CHOOSE A PATH')}</span><h2>\${t('Explore by religion')}</h2></div><span class="muted">\${t('Hinduism first · Islam second · Christianity third')}</span></div><div class="religionGrid">\${sorted.map((r,i)=>religionCard(r,i)).join('')}</div></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">\${t('CALENDAR')}</span><h2>\${t('Upcoming & calendar data')}</h2></div><a class="textBtn" href="#/calendar">\${t('Open calendar →')}</a></div><div class="calendarStrip">\${cal.slice(0,5).map(x=>\`<div class="calMini"><span>\${esc(x.event_date||x.typical_date||'')}</span><b>\${esc(t(x.title||x.name))}</b><small>\${esc(t(x.religion))}</small></div>\`).join('')}</div></section>\`);
}`;
content = content.replace(oldHome, newHome);

// 8. Update religion(id)
const oldRelPage = `async function religion(id){const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals?religion='+id)]);const r=rels.find(x=>x.id==id);if(!r)return notFound();layout(\`\${r.name==='Hinduism'?\`<div style="position:fixed; top:50%; left:50%; width:80vh; height:80vh; margin-top:-40vh; margin-left:-40vh; z-index:-1; opacity:0.08; pointer-events:none; background:url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Sudarshana_Chakra.svg') center/contain no-repeat; animation: chakraSpin 25s linear infinite;"></div><style>@keyframes chakraSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>\`:''}<section class="pageHero"><span class="eyebrow">\${r.icon} RELIGION</span><h1>\${esc(r.name)}</h1><p>\${esc(r.description)}</p></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">\${fs.length} ENTRIES</span><h2>\${esc(r.name)} festivals & observances</h2></div><a class="textBtn" href="#/explore">All religions →</a></div>\${fs.length?\`<div class="festivalGrid">\${fs.map(fcard).join('')}</div>\`:\`<div class="empty"><h3>No published entries yet</h3><p>The religion is configured, but festival content has not been published.</p></div>\`}</section>\`)}`;
const newRelPage = `async function religion(id){
  const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals?religion='+id)]);
  const r=rels.find(x=>x.id==id);
  if(!r)return notFound();
  layout(\`\${r.name==='Hinduism'?\`<div style="position:fixed; top:50%; left:50%; width:80vh; height:80vh; margin-top:-40vh; margin-left:-40vh; z-index:-1; opacity:0.08; pointer-events:none; background:url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Sudarshana_Chakra.svg') center/contain no-repeat; animation: chakraSpin 25s linear infinite;"></div><style>@keyframes chakraSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>\`:''}<section class="pageHero"><span class="eyebrow">\${r.icon} \${t('RELIGION')}</span><h1>\${esc(t(r.name))}</h1><p>\${esc(t(r.description))}</p></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">\${fs.length} \${t('ENTRIES')}</span><h2>\${esc(t(r.name))} \${t('festivals & observances')}</h2></div><a class="textBtn" href="#/explore">\${t('All religions →')}</a></div>\${fs.length?\`<div class="festivalGrid">\${fs.map(fcard).join('')}</div>\`:\`<div class="empty"><h3>\${t('No published entries yet')}</h3><p>\${t('The religion is configured, but festival content has not been published.')}</p></div>\`}</section>\`);
}`;
content = content.replace(oldRelPage, newRelPage);

// 9. Update explore() and runExplore()
const oldExplore = `async function explore(){const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals')]);layout(\`<section class="pageHero"><span class="eyebrow">EXPLORE</span><h1>Festival Explorer</h1><p>Search the real FaithFest database. Choose a religion first or combine filters.</p></section><section class="filterPanel"><input id="q" placeholder="Search festival, region or description…"><select id="rel"><option value="">All religions</option>\${ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean).map(r=>\`<option value="\${r.id}">\${r.icon} \${r.name}</option>\`).join('')}</select><select id="cat"><option value="">All categories</option><option>Festival</option><option>Holy Day</option><option>Religious Observance</option><option>Cultural Celebration</option></select><button class="btn primary" onclick="runExplore()">Search</button></section><div id="exploreResults" class="festivalGrid">\${fs.map(fcard).join('')}</div>\`)}`;
const newExplore = `async function explore(){
  const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals')]);
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('EXPLORE')}</span><h1>\${t('Festival Explorer')}</h1><p>\${t('Search the real FaithFest database. Choose a religion first or combine filters.')}</p></section><section class="filterPanel"><input id="q" placeholder="\${t('Search festival, region or description…')}"><select id="rel"><option value="">\${t('All religions')}</option>\${ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean).map(r=>\`<option value="\${r.id}">\${r.icon} \${t(r.name)}</option>\`).join('')}</select><select id="cat"><option value="">\${t('All categories')}</option><option value="Festival">\${t('Festival')}</option><option value="Holy Day">\${t('Holy Day')}</option><option value="Religious Observance">\${t('Religious Observance')}</option><option value="Cultural Celebration">\${t('Cultural Celebration')}</option></select><button class="btn primary" onclick="runExplore()">\${t('Search')}</button></section><div id="exploreResults" class="festivalGrid">\${fs.map(fcard).join('')}</div>\`);
}`;
content = content.replace(oldExplore, newExplore);

const oldRunExplore = `async function runExplore(){const q=$('#q').value,r=$('#rel').value,c=$('#cat').value;const fs=await api(\`/api/festivals?search=\${encodeURIComponent(q)}&religion=\${r}&category=\${encodeURIComponent(c)}\`);$('#exploreResults').innerHTML=fs.length?fs.map(fcard).join(''):\`<div class="empty"><h3>No results</h3><p>Try another search or filter.</p></div>\`}`;
const newRunExplore = `async function runExplore(){
  let q = $('#q').value.trim();
  const r = $('#rel').value;
  const c = $('#cat').value;
  
  // Reverse translation check for search term if typed in localized language
  if (q && state.lang !== 'English' && DICT[state.lang]) {
    for (const [eng, loc] of Object.entries(DICT[state.lang])) {
      if (loc && loc.toLowerCase() === q.toLowerCase()) {
        q = eng;
        break;
      }
    }
  }

  const fs = await api(\`/api/festivals?search=\${encodeURIComponent(q)}&religion=\${r}&category=\${encodeURIComponent(c)}\`);
  $('#exploreResults').innerHTML = fs.length ? fs.map(fcard).join('') : \`<div class="empty"><h3>\${t('No results')}</h3><p>\${t('Try another search or filter.')}</p></div>\`;
  translateCurrentPage();
}`;
content = content.replace(oldRunExplore, newRunExplore);

// 10. Update festival(id)
content = content.replace(
  `{isFav?'♥ Saved':'♡ Save festival'}`,
  `{isFav?'♥ '+t('Saved'):'♡ '+t('Save festival')}`
);
content = content.replace(
  `href="#/map?festival_id=\${f.id}">🗺️ View on Map</a>`,
  `href="#/map?festival_id=\${f.id}">🗺️ \${t('View on Map')}</a>`
);
content = content.replace(
  `onclick="speak(\${JSON.stringify(f.name+' . '+(f.historical_information||'')+' '+(f.significance||''))})">🔊 Listen</button>`,
  `onclick="speak(\${JSON.stringify(f.name+' . '+(f.historical_information||'')+' '+(f.significance||''))})">🔊 \${t('Listen')}</button>`
);
content = content.replace(
  `onclick="setReminder(\${f.id})">🔔 Remind</button>`,
  `onclick="setReminder(\${f.id})">🔔 \${t('Remind')}</button>`
);
content = content.replace(
  `href="#/festival/\${id}/learn">Learning mode →</a>`,
  `href="#/festival/\${id}/learn">\${t('Learning mode →')}</a>`
);
content = content.replace(
  `href="#/festival/\${id}/quiz">Quiz →</a>`,
  `href="#/festival/\${id}/quiz">\${t('Quiz →')}</a>`
);
content = content.replace(
  `>🚩 Report issue</button>`,
  `>🚩 \${t('Report issue')}</button>`
);
content = content.replace(
  `<div><small>RELIGION</small><b>\${esc(f.religion)}</b></div><div><small>REGION</small><b>\${esc(f.region||'Multiple')}</b></div><div><small>DATE</small><b>\${esc(f.typical_date||'Varies')}</b></div><div><small>DURATION</small><b>\${esc(f.duration||'Varies')}</b></div>`,
  `<div><small>\${t('RELIGION')}</small><b>\${esc(t(f.religion))}</b></div><div><small>\${t('REGION')}</small><b>\${esc(t(f.region||'Multiple'))}</b></div><div><small>\${t('DATE')}</small><b>\${esc(t(f.typical_date||'Varies'))}</b></div><div><small>\${t('DURATION')}</small><b>\${esc(t(f.duration||'Varies'))}</b></div>`
);
content = content.replace(
  `infoCard('📜','History & origin',f.historical_information)`,
  `infoCard('📜',t('History & origin'),t(f.historical_information))`
);
content = content.replace(
  `<div class="sectionLabel">🕰️ HISTORICAL TIMELINE</div>`,
  `<div class="sectionLabel">🕰️ \${t('HISTORICAL TIMELINE')}</div>`
);
content = content.replace(
  `infoCard('◉','Religious / cultural significance',f.significance)`,
  `infoCard('◉',t('Religious / cultural significance'),t(f.significance))`
);
content = content.replace(
  `infoCard('🎉','How it is celebrated',f.celebration)\${infoCard('✨','Modern celebration',f.modern_celebration)}`,
  `infoCard('🎉',t('How it is celebrated'),t(f.celebration))\${infoCard('✨',t('Modern celebration'),t(f.modern_celebration))}`
);
content = content.replace(
  `<div class="sectionLabel">🍚 TRADITIONAL FOOD</div>`,
  `<div class="sectionLabel">🍚 \${t('TRADITIONAL FOOD')}</div>`
);
content = content.replace(
  `<div class="sectionLabel">👗 TRADITIONAL CLOTHING</div>`,
  `<div class="sectionLabel">👗 \${t('TRADITIONAL CLOTHING')}</div>`
);
content = content.replace(
  `<div class="sectionLabel">🎵 MUSIC & DANCE</div>`,
  `<div class="sectionLabel">🎵 \${t('MUSIC & DANCE')}</div>`
);
content = content.replace(
  `<div class="sectionLabel">🏠 DECORATIONS & SYMBOLS</div>`,
  `<div class="sectionLabel">🏠 \${t('DECORATIONS & SYMBOLS')}</div>`
);
content = content.replace(
  `<div class="sectionLabel">🗺️ REGIONAL VARIATIONS</div>`,
  `<div class="sectionLabel">🗺️ \${t('REGIONAL VARIATIONS')}</div>`
);
content = content.replace(
  `<div class="sectionLabel">📸 GALLERY & 🎥 EXPLAINER VIDEO</div>`,
  `<div class="sectionLabel">📸 \${t('GALLERY & EXPLAINER VIDEO')}</div>`
);
content = content.replace(
  `<span class="eyebrow">📚 SOURCES & REFERENCES</span>`,
  `<span class="eyebrow">📚 \${t('SOURCES & REFERENCES')}</span>`
);
content = content.replace(
  `<span class="eyebrow">COMPARE</span><h3>Compare festivals</h3><p>Compare factual cultural attributes without ranking religions.</p><a class="btn ghost full" href="#/compare">Open comparison</a>`,
  `<span class="eyebrow">\${t('COMPARE')}</span><h3>\${t('Compare festivals')}</h3><p>\${t('Compare factual cultural attributes without ranking religions.')}</p><a class="btn ghost full" href="#/compare">\${t('Open comparison')}</a>`
);
content = content.replace(
  `<span class="eyebrow">\${f.religion_icon} \${esc(f.religion)} · \${esc(f.category)}</span><h1>\${esc(f.name)}</h1><p>\${esc(f.description)}</p>`,
  `<span class="eyebrow">\${f.religion_icon} \${esc(t(f.religion))} · \${esc(t(f.category))}</span><h1>\${esc(t(f.name))}</h1><p>\${esc(t(f.description))}</p>`
);

// 11. Update calendar() and calendarCard()
const oldCal = `async function calendar(){const y=new Date().getFullYear();const [events,religions]=await Promise.all([api(\`/api/calendar?year=\${y}\`),api('/api/religions')]);layout(\`<section class="pageHero"><span class="eyebrow">DYNAMIC CALENDAR</span><h1>Festival calendar</h1><p>Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.</p></section><div class="filterPanel"><select id="calRel"><option value="">All religions</option>\${ORDER.map(n=>religions.find(r=>r.name===n)).filter(Boolean).map(r=>\`<option value="\${r.id}">\${r.icon} \${r.name}</option>\`).join('')}</select><input id="calSearch" placeholder="Search calendar event…"><button class="btn primary" onclick="filterCalendar()">Filter</button></div><div id="calGrid" class="calendarGrid">\${events.map(calendarCard).join('')}</div>\`)}`;
const newCal = `async function calendar(){
  const y=new Date().getFullYear();
  const [events,religions]=await Promise.all([api(\`/api/calendar?year=\${y}\`),api('/api/religions')]);
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('DYNAMIC CALENDAR')}</span><h1>\${t('Festival calendar')}</h1><p>\${t('Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.')}</p></section><div class="filterPanel"><select id="calRel"><option value="">\${t('All religions')}</option>\${ORDER.map(n=>religions.find(r=>r.name===n)).filter(Boolean).map(r=>\`<option value="\${r.id}">\${r.icon} \${t(r.name)}</option>\`).join('')}</select><input id="calSearch" placeholder="\${t('Search calendar event…')}"><button class="btn primary" onclick="filterCalendar()">\${t('Filter')}</button></div><div id="calGrid" class="calendarGrid">\${events.map(calendarCard).join('')}</div>\`);
}`;
content = content.replace(oldCal, newCal);

const oldCalCard = `function calendarCard(x){return \`<article class="calCard"><span>\${esc(x.event_date||x.typical_date||'Date varies')}</span><h3>\${esc(x.title||x.name)}</h3><b>\${esc(x.religion)}</b><p>\${esc(x.tithi||x.category||'')}</p>\${x.festival_id?\`<a href="#/festival/\${x.festival_id}">Open festival →</a>\`:''}</article>\`}`;
const newCalCard = `function calendarCard(x){
  return \`<article class="calCard"><span>\${esc(t(x.event_date||x.typical_date||'Date varies'))}</span><h3>\${esc(t(x.title||x.name))}</h3><b>\${esc(t(x.religion))}</b><p>\${esc(t(x.tithi||x.category||''))}</p>\${x.festival_id?\`<a href="#/festival/\${x.festival_id}">\${t('Open festival →')}</a>\`:''}</article>\`;
}`;
content = content.replace(oldCalCard, newCalCard);

const oldFilterCal = `async function filterCalendar(){const rel=$('#calRel').value,q=$('#calSearch').value;const y=new Date().getFullYear();const ev=await api(\`/api/calendar?year=\${y}&religion=\${rel}&search=\${encodeURIComponent(q)}\`);$('#calGrid').innerHTML=ev.length?ev.map(calendarCard).join(''):\`<div class="empty"><h3>No calendar matches</h3></div>\`}`;
const newFilterCal = `async function filterCalendar(){
  const rel=$('#calRel').value,q=$('#calSearch').value;
  const y=new Date().getFullYear();
  const ev=await api(\`/api/calendar?year=\${y}&religion=\${rel}&search=\${encodeURIComponent(q)}\`);
  $('#calGrid').innerHTML=ev.length?ev.map(calendarCard).join(''):\`<div class="empty"><h3>\${t('No calendar matches')}</h3></div>\`;
  translateCurrentPage();
}`;
content = content.replace(oldFilterCal, newFilterCal);

// 12. Update mapPage header strings
content = content.replace(
  `<span class="eyebrow">🗺️ GEOGRAPHIC FESTIVAL EXPLORER</span>`,
  `<span class="eyebrow">🗺️ \${t('GEOGRAPHIC FESTIVAL EXPLORER')}</span>`
);
content = content.replace(
  `<h1>Festival Explorer Map</h1>`,
  `<h1>\${t('Festival Explorer Map')}</h1>`
);
content = content.replace(
  `Explore every religious and cultural celebration in FaithFest across Hinduism, Islam, and Christianity, connected directly to sacred temples, mosques, churches, pilgrimage routes, and historic venues.`,
  `\${t('Explore every religious and cultural celebration in FaithFest across Hinduism, Islam, and Christianity, connected directly to sacred temples, mosques, churches, pilgrimage routes, and historic venues.')}`
);
content = content.replace(
  `id="geoBtn">📍 Near Me</button>`,
  `id="geoBtn">📍 \${t('Near Me')}</button>`
);
content = content.replace(
  `onclick="resetMapFilters()">↺ Reset Filters</button>`,
  `onclick="resetMapFilters()">↺ \${t('Reset Filters')}</button>`
);
content = content.replace(
  `placeholder="Search festival name, sacred place, city, or country..."`,
  `placeholder="\${t('Search festival name, sacred place, city, or country...')}"`
);
content = content.replace(
  `<option value="">All Religions (Hinduism, Islam, Christianity)</option>`,
  `<option value="">\${t('All Religions (Hinduism, Islam, Christianity)')}</option>`
);
content = content.replace(
  `<option value="">All Associated Festivals</option>`,
  `<option value="">\${t('All Associated Festivals')}</option>`
);
content = content.replace(
  `Filter Place Type:</span>`,
  `\${t('Filter Place Type:')}</span>`
);
content = content.replace(
  `>All Sites</button>`,
  `>\${t('All Sites')}</button>`
);
content = content.replace(
  `>🏛️ Places of Worship</button>`,
  `>🏛️ \${t('Places of Worship')}</button>`
);
content = content.replace(
  `>✨ Pilgrimage Destinations</button>`,
  `>✨ \${t('Pilgrimage Destinations')}</button>`
);
content = content.replace(
  `>🎉 Famous Celebration Sites</button>`,
  `>🎉 \${t('Famous Celebration Sites')}</button>`
);
content = content.replace(
  `>📜 Cultural Heritage</button>`,
  `>📜 \${t('Cultural Heritage')}</button>`
);
content = content.replace(
  `title="Zoom to fit all markers">⛶ Fit View</button>`,
  `title="\${t('Fit View')}">⛶ \${t('Fit View')}</button>`
);
content = content.replace(
  `title="Find places near current location">🎯 Locate Me</button>`,
  `title="\${t('Locate Me')}">🎯 \${t('Locate Me')}</button>`
);
content = content.replace(
  `🎉 All Festivals (<span id="festivalsTabCount">0</span>)`,
  `🎉 \${t('All Festivals')} (<span id="festivalsTabCount">0</span>)`
);
content = content.replace(
  `📍 Sacred Sites (<span id="sitesTabCount">0</span>)`,
  `📍 \${t('Sacred Sites')} (<span id="sitesTabCount">0</span>)`
);
content = content.replace(
  `<h2 id="sidebarListTitle">All Website Festivals</h2>`,
  `<h2 id="sidebarListTitle">\${t('All Website Festivals')}</h2>`
);
content = content.replace(
  `Explore Festival Details →</a>`,
  `\${t('Explore Festival Details →')}</a>`
);
content = content.replace(
  `>🎯 Locate on Map</button>`,
  `>🎯 \${t('Locate on Map')}</button>`
);
content = content.replace(
  `>🧭 Get Directions ↗</a>`,
  `>🧭 \${t('Get Directions ↗')}</a>`
);
content = content.replace(
  `>Explore Details</button>`,
  `>\${t('Explore Details')}</button>`
);
content = content.replace(
  `<span class="festLocLabel">Celebration Destination:</span>`,
  `<span class="festLocLabel">\${t('Celebration Destination:')}</span>`
);

// 13. Update favorites(), learn(), quiz(), compare(), doCompare()
const oldFav = `async function favorites(){if(!state.user)return location.hash='#/login';const fs=await api('/api/favorites');layout(\`<section class="pageHero"><span class="eyebrow">YOUR COLLECTION</span><h1>Saved festivals</h1><p>Your persistent festival collection.</p></section>\${fs.length?\`<div class="festivalGrid">\${fs.map(fcard).join('')}</div>\`:\`<div class="empty"><h3>No saved festivals yet</h3><p>Open a festival and choose “Save festival”.</p></div>\`}\`)}`;
const newFav = `async function favorites(){
  if(!state.user)return location.hash='#/login';
  const fs=await api('/api/favorites');
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('YOUR COLLECTION')}</span><h1>\${t('Saved festivals')}</h1><p>\${t('Your persistent festival collection.')}</p></section>\${fs.length?\`<div class="festivalGrid">\${fs.map(fcard).join('')}</div>\`:\`<div class="empty"><h3>\${t('No saved festivals yet')}</h3><p>\${t('Open a festival and choose "Save festival".')}</p></div>\`}\`);
}`;
content = content.replace(oldFav, newFav);

const oldLearn = `async function learn(id){const f=await api('/api/festivals/'+id);const steps=[['Introduction',f.description],['History',f.historical_information],['Significance',f.significance],['Celebration',f.celebration],['Food',(f.foods||[]).map(x=>x.name).join(', ')],['Clothing',(f.clothing||[]).map(x=>x.name).join(', ')],['Music',(f.music||[]).map(x=>x.name).join(', ')],['Regional variations',(f.regions||[]).map(x=>x.region+': '+x.celebration_style).join(' ')]];let prog=0;if(state.user){const p=await api('/api/progress');const x=p.find(a=>a.festival_id==id);prog=x?.step||0}layout(\`<section class="pageHero"><span class="eyebrow">LEARNING MODE</span><h1>\${esc(f.name)}</h1><p>Study the festival step by step.</p><div class="progress"><i style="width:\${Math.round((prog/steps.length)*100)}%"></i></div></section><section class="learnWrap"><div class="learnSteps">\${steps.map((s,i)=>\`<button class="learnStep \${i===prog?'active':''}" onclick="showStep(\${i})"><span>0\${i+1}</span>\${esc(s[0])}</button>\`).join('')}<a class="learnStep" href="#/festival/\${id}/quiz"><span>09</span>Final quiz →</a></div><article id="learnContent" class="contentCard learnContent"><span class="eyebrow">STEP \${String(prog+1).padStart(2,'0')}</span><h2>\${esc(steps[prog]?.[0]||steps[0][0])}</h2><p>\${esc(steps[prog]?.[1]||steps[0][1]||'Content not published yet.')}</p><button class="btn primary" onclick="nextStep(\${id},\${prog},\${steps.length})">\${prog>=steps.length-1?'Complete learning':'Next step →'}</button></article></section>\`);window.__learn=steps;window.__learnId=id}`;
const newLearn = `async function learn(id){
  const f=await api('/api/festivals/'+id);
  const steps=[[t('Introduction'),t(f.description)],[t('History'),t(f.historical_information)],[t('Significance'),t(f.significance)],[t('Celebration'),t(f.celebration)],[t('Food'),(f.foods||[]).map(x=>t(x.name)).join(', ')],[t('Clothing'),(f.clothing||[]).map(x=>t(x.name)).join(', ')],[t('Music'),(f.music||[]).map(x=>t(x.name)).join(', ')],[t('Regional variations'),(f.regions||[]).map(x=>t(x.region)+': '+x.celebration_style).join(' ')]];
  let prog=0;
  if(state.user){const p=await api('/api/progress');const x=p.find(a=>a.festival_id==id);prog=x?.step||0}
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('LEARNING MODE')}</span><h1>\${esc(t(f.name))}</h1><p>\${t('Study the festival step by step.')}</p><div class="progress"><i style="width:\${Math.round((prog/steps.length)*100)}%"></i></div></section><section class="learnWrap"><div class="learnSteps">\${steps.map((s,i)=>\`<button class="learnStep \${i===prog?'active':''}" onclick="showStep(\${i})"><span>0\${i+1}</span>\${esc(s[0])}</button>\`).join('')}<a class="learnStep" href="#/festival/\${id}/quiz"><span>09</span>\${t('Final quiz →')}</a></div><article id="learnContent" class="contentCard learnContent"><span class="eyebrow">\${t('STEP')} \${String(prog+1).padStart(2,'0')}</span><h2>\${esc(steps[prog]?.[0]||steps[0][0])}</h2><p>\${esc(steps[prog]?.[1]||steps[0][1]||t('Content not published yet.'))}</p><button class="btn primary" onclick="nextStep(\${id},\${prog},\${steps.length})">\${prog>=steps.length-1?t('Complete learning'):t('Next step →')}</button></article></section>\`);
  window.__learn=steps;window.__learnId=id;
}`;
content = content.replace(oldLearn, newLearn);

const oldQuiz = `async function quiz(id){const [f,qs]=await Promise.all([api('/api/festivals/'+id),api('/api/quiz/'+id)]);layout(\`<section class="pageHero"><span class="eyebrow">KNOWLEDGE CHECK</span><h1>\${esc(f.name)} quiz</h1><p>Answer the questions based on the published festival content.</p></section><form id="quizForm" class="quizWrap">\${qs.length?qs.map((q,i)=>\`<section class="contentCard"><div class="sectionLabel">QUESTION \${i+1}</div><h3>\${esc(q.question)}</h3>\${q.options.map((o,j)=>\`<label class="quizOption"><input type="radio" name="q\${q.id}" value="\${j}" required> \${esc(o)}</label>\`).join('')}</section>\`).join('')+\`<button class="btn primary">Submit quiz</button>\`:\`<div class="empty"><h3>Quiz not published yet</h3><p>An administrator can add questions for this festival.</p></div>\`}</form>\`);if(qs.length)$('#quizForm').onsubmit=async e=>{e.preventDefault();if(!state.user){toast('Login to submit and save quiz results');return}const answers={};qs.forEach(q=>{answers[q.id]=Number(new FormData(e.target).get('q'+q.id))});const r=await api('/api/quiz/'+id,{method:'POST',body:JSON.stringify({answers})});toast(\`Score \${r.score}/\${r.total} (\${r.percentage}%)\`);location.hash=\`#/festival/\${id}\`}}`;
const newQuiz = `async function quiz(id){
  const [f,qs]=await Promise.all([api('/api/festivals/'+id),api('/api/quiz/'+id)]);
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('KNOWLEDGE CHECK')}</span><h1>\${esc(t(f.name))} \${t('quiz')}</h1><p>\${t('Answer the questions based on the published festival content.')}</p></section><form id="quizForm" class="quizWrap">\${qs.length?qs.map((q,i)=>\`<section class="contentCard"><div class="sectionLabel">\${t('QUESTION')} \${i+1}</div><h3>\${esc(q.question)}</h3>\${q.options.map((o,j)=>\`<label class="quizOption"><input type="radio" name="q\${q.id}" value="\${j}" required> \${esc(o)}</label>\`).join('')}</section>\`).join('')+\`<button class="btn primary">\${t('Submit quiz')}</button>\`:\`<div class="empty"><h3>\${t('Quiz not published yet')}</h3><p>\${t('An administrator can add questions for this festival.')}</p></div>\`}</form>\`);
  if(qs.length)$('#quizForm').onsubmit=async e=>{e.preventDefault();if(!state.user){toast(t('Login to submit and save quiz results'));return}const answers={};qs.forEach(q=>{answers[q.id]=Number(new FormData(e.target).get('q'+q.id))});const r=await api('/api/quiz/'+id,{method:'POST',body:JSON.stringify({answers})});toast(\`\${t('Score')} \${r.score}/\${r.total} (\${r.percentage}%)\`);location.hash=\`#/festival/\${id}\`}
}`;
content = content.replace(oldQuiz, newQuiz);

const oldComp = `async function compare(){const fs=await api('/api/festivals');layout(\`<section class="pageHero"><span class="eyebrow">EDUCATIONAL COMPARISON</span><h1>Compare festivals</h1><p>Compare factual cultural attributes only. This is not a ranking.</p></section><section class="comparePick"><select id="a">\${fs.map(f=>\`<option value="\${f.id}">\${esc(f.religion)} — \${esc(f.name)}</option>\`).join('')}</select><select id="b">\${fs.map((f,i)=>\`<option value="\${f.id}" \${i===1?'selected':''}>\${esc(f.religion)} — \${esc(f.name)}</option>\`).join('')}</select><button class="btn primary" onclick="doCompare()">Compare</button></section><div id="compareOut"></div>\`)}`;
const newComp = `async function compare(){
  const fs=await api('/api/festivals');
  layout(\`<section class="pageHero"><span class="eyebrow">\${t('EDUCATIONAL COMPARISON')}</span><h1>\${t('Compare festivals')}</h1><p>\${t('Compare factual cultural attributes only. This is not a ranking.')}</p></section><section class="comparePick"><select id="a">\${fs.map(f=>\`<option value="\${f.id}">\${esc(t(f.religion))} — \${esc(t(f.name))}</option>\`).join('')}</select><select id="b">\${fs.map((f,i)=>\`<option value="\${f.id}" \${i===1?'selected':''}>\${esc(t(f.religion))} — \${esc(t(f.name))}</option>\`).join('')}</select><button class="btn primary" onclick="doCompare()">\${t('Compare')}</button></section><div id="compareOut"></div>\`);
}`;
content = content.replace(oldComp, newComp);

const oldDoComp = `async function doCompare(){const [a,b]=await Promise.all([api('/api/festivals/'+$('#a').value),api('/api/festivals/'+$('#b').value)]);const rows=[['Religion',a.religion,b.religion],['Category',a.category,b.category],['Region',a.region,b.region],['Typical date',a.typical_date,b.typical_date],['Duration',a.duration,b.duration],['Significance',a.significance,b.significance],['Celebration',a.celebration,b.celebration]];$('#compareOut').innerHTML=\`<div class="compareTable"><div></div><h3>\${esc(a.name)}</h3><h3>\${esc(b.name)}</h3>\${rows.map(r=>\`<div><b>\${esc(r[0])}</b></div><div>\${esc(r[1])}</div><div>\${esc(r[2])}</div>\`).join('')}</div>\`}`;
const newDoComp = `async function doCompare(){
  const [a,b]=await Promise.all([api('/api/festivals/'+$('#a').value),api('/api/festivals/'+$('#b').value)]);
  const rows=[[t('Religion'),t(a.religion),t(b.religion)],[t('Category'),t(a.category),t(b.category)],[t('Region'),t(a.region),t(b.region)],[t('Typical date'),t(a.typical_date),t(b.typical_date)],[t('Duration'),t(a.duration),t(b.duration)],[t('Significance'),a.significance,b.significance],[t('Celebration'),a.celebration,b.celebration]];
  $('#compareOut').innerHTML=\`<div class="compareTable"><div></div><h3>\${esc(t(a.name))}</h3><h3>\${esc(t(b.name))}</h3>\${rows.map(r=>\`<div><b>\${esc(r[0])}</b></div><div>\${esc(r[1])}</div><div>\${esc(r[2])}</div>\`).join('')}</div>\`;
  translateCurrentPage();
}`;
content = content.replace(oldDoComp, newDoComp);

// 14. Initialize Google Translate on startup if saved language is not English
if (!content.includes('// Initialize translation on startup')) {
  content += `\n// Initialize translation on startup
if (state.lang && state.lang !== 'English') {
  setTimeout(() => {
    applyGoogleTranslate(state.lang);
  }, 300);
}
`;
}

fs.writeFileSync(appJsPath, content, 'utf8');
console.log('Successfully updated app.js with comprehensive multilingual support!');

