const $ = s => document.querySelector(s);
const getApp = () => document.getElementById('app') || document.querySelector('#app');
const app = { get innerHTML() { return getApp()?.innerHTML || ''; }, set innerHTML(val) { const el = getApp(); if (el) el.innerHTML = val; } };
const ORDER = ['Hinduism', 'Islam', 'Christianity'];
function safeJson(str, fallback) { try { return str ? JSON.parse(str) : fallback; } catch { return fallback; } }
let state = {
  user: safeJson(localStorage.getItem('ff_user'), null),
  token: localStorage.getItem('ff_token') || '',
  lang: localStorage.getItem('ff_lang') || 'English'
};
const DICT = {"Telugu":{"Back":"వెనుకకు","Navigate to previous page":"మునుపటి పేజీకి వెళ్లండి","Go Back":"వెనుకకు వెళ్లండి","Explore":"అన్వేషించండి","Calendar":"క్యాలెండర్","Map":"మ్యాప్","Compare":"పోల్చండి","Saved":"సేవ్ చేయబడింది","Admin":"అడ్మిన్","Login":"లాగిన్","Logout":"లాగౌట్","CMS":"CMS","All religions":"అన్ని మతాలు","All religions →":"అన్ని మతాలు →","All categories":"అన్ని వర్గాలు","Festival":"పండుగ","Holy Day":"పవిత్ర దినం","Religious Observance":"మతపరమైన ఆచారం","Cultural Celebration":"సాంస్కృతిక వేడుక","Search":"వెతకండి","No results":"ఫలితాలు లేవు","Try another search or filter.":"మరొక శోధన లేదా ఫిల్టర్‌ని ప్రయత్నించండి.","Date varies":"తేదీ మారుతుంది","Varies":"మారుతుంది","Multiple regions":"బహుళ ప్రాంతాలు","Multiple":"బహుళ ప్రాంతాలు","Global":"ప్రపంచవ్యాప్తం","Festival information":"పండుగ సమాచారం","CULTURE · HISTORY · LEARNING":"సంస్కృతి · చరిత్ర · అభ్యాసం","Discover the stories behind the world's <em>festivals.</em>":"ప్రపంచ <em>పండుగల</em> వెనుక ఉన్న కథలను కనుగొనండి.","Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.":"ఈ గౌరవప్రదమైన డిజిటల్ వారసత్వ ప్లాట్‌ఫారమ్ ద్వారా సంప్రదాయాలు, చరిత్ర, ఆహారం, వస్త్రధారణ, సంగీతం మరియు ఆచారాలను అన్వేషించండి.","Explorer login":"ఎక్స్‌ప్లోరర్ లాగిన్","Explorer login <span>→</span>":"ఎక్స్‌ప్లోరర్ లాగిన్ <span>→</span>","Admin login":"అడ్మిన్ లాగిన్","Admin login <span>→</span>":"అడ్మిన్ లాగిన్ <span>→</span>","✓ Database-driven":"✓ డేటాబేస్ ఆధారితం","✓ Source-aware":"✓ ప్రామాణిక మూలాలు","✓ Multilingual-ready":"✓ బహుభాషా సౌలభ్యం","Explore.<br>Understand.<br>Respect.":"అన్వేషించండి.<br>అర్థం చేసుకోండి.<br>గౌరవించండి.","Religious & cultural heritage explorer":"మత & సాంస్కృతిక వారసత్వ అన్వేషణ","Religions":"మతాలు","Published entries":"ప్రచురిత అంశాలు","EXPLORE":"అన్వేషణ","Festival Explorer":"పండుగల అన్వేషకుడు","Search the real FaithFest database. Choose a religion first or combine filters.":"ఫెయిత్‌ఫెస్ట్ డేటాబేస్‌ను అన్వేషించండి. ముందుగా మతాన్ని ఎంచుకోండి లేదా ఫిల్టర్లను ఉపయోగించండి.","Search festival, region or description…":"పండుగ, ప్రాంతం లేదా వివరణ కోసం వెతకండి…","Explore Festivals":"పండుగలను అన్వేషించండి","Festival Not Found":"పండుగ కనుగొనబడలేదు","CHOOSE A PATH":"మార్గాన్ని ఎంచుకోండి","Explore by religion":"మతం వారీగా అన్వేషించండి","Hinduism first · Islam second · Christianity third":"మొదట హిందూమతం · రెండవది ఇస్లాం · మూడవది క్రైస్తవం","CALENDAR":"క్యాలెండర్","Upcoming & calendar data":"రాబోయే పండుగలు & క్యాలెండర్ వివరాలు","Open calendar →":"క్యాలెండర్ తెరవండి →","RELIGION":"మతం","ENTRIES":"నమోదులు","festivals & observances":"పండుగలు & ఆచారాలు","No published entries yet":"ఇంకా ప్రచురించబడిన అంశాలు లేవు","The religion is configured, but festival content has not been published.":"ఈ మతం సిద్ధం చేయబడింది, కానీ పండుగల సమాచారం ఇంకా ప్రచురించబడలేదు.","Hinduism":"హిందూమతం","Islam":"ఇస్లాం","Christianity":"క్రైస్తవం","Save festival":"పండుగను సేవ్ చేయండి","View on Map":"మ్యాప్‌లో చూడండి","Listen":"వినండి","Remind":"గుర్తు చేయండి","Learning mode →":"అభ్యాస మోడ్ →","Quiz →":"క్విజ్ →","Report issue":"సమస్యను నివేదించండి","REGION":"ప్రాంతం","DATE":"తేదీ","DURATION":"వ్యవధి","History & origin":"చరిత్ర & మూలాలు","HISTORICAL TIMELINE":"చారిత్రక కాలక్రమం","Religious / cultural significance":"మతపరమైన / సాంస్కృతిక ప్రాముఖ్యత","How it is celebrated":"ఎలా జరుపుకుంటారు","Modern celebration":"ఆధునిక వేడుక","TRADITIONAL FOOD":"సాంప్రదాయ ఆహారం","TRADITIONAL CLOTHING":"సాంప్రదాయ వస్త్రధారణ","MUSIC & DANCE":"సంగీతం & నృత్యం","DECORATIONS & SYMBOLS":"అలంకరణలు & చిహ్నాలు","REGIONAL VARIATIONS":"ప్రాంతీయ వైవిధ్యాలు","GALLERY & EXPLAINER VIDEO":"చిత్రమాలిక & వివరణాత్మక వీడియో","SOURCES & REFERENCES":"మూలాలు & ఆధారాలు","COMPARE":"పోల్చండి","Compare festivals":"పండుగలను పోల్చండి","Compare factual cultural attributes without ranking religions.":"మతాల మధ్య తారతమ్యాలు లేకుండా సాంస్కృతిక అంశాలను మాత్రమే నిష్పాక్షికంగా పోల్చండి.","Open comparison":"పోలికను తెరవండి","Open source ↗":"మూలాన్ని తెరవండి ↗","Rituals":"ఆచారాలు","Food":"ఆహారం","Clothing":"దుస్తులు","Music":"సంగీతం","Significance":"ప్రాముఖ్యత","Celebration":"వేడుక","History":"చరిత్ర","Introduction":"పరిచయం","Regional variations":"ప్రాంతీయ వైవిధ్యాలు","Information will be added through the verified content workflow.":"ధృవీకరించబడిన కంటెంట్ ప్రక్రియ ద్వారా సమాచారం జోడించబడుతుంది.","No timeline entries have been published yet.":"ఇంకా కాలక్రమ వివరాలు ప్రచురించబడలేదు.","Food content is ready to be added by the administrator.":"ఆహార వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.","Clothing content is ready to be added by the administrator.":"వస్త్రధారణ వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.","Music and dance content is ready to be added by the administrator.":"సంగీత మరియు నృత్య వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.","Decoration and symbol content is ready to be added by the administrator.":"అలంకరణ మరియు చిహ్నాల వివరాలు అడ్మిన్ ద్వారా త్వరలో చేర్చబడతాయి.","Regional variations are ready to be added through the content workflow.":"ప్రాంతీయ వైవిధ్యాలు త్వరలో జోడించబడతాయి.","Verified gallery media can be added by an administrator.":"ధృవీకరించబడిన ఫోటోలు అడ్మిన్ ద్వారా జోడించబడతాయి.","Authorized explainer videos can be added here.":"వివరణాత్మక వీడియోలు ఇక్కడ జోడించబడతాయి.","No verified references published yet.":"ఇంకా ధృవీకరించబడిన ఆధారాలు ప్రచురించబడలేదు.","DYNAMIC CALENDAR":"డైనమిక్ క్యాలెండర్","Festival calendar":"పండుగల క్యాలెండర్","Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.":"క్యాలెండర్ ఈవెంట్‌లు డేటాబేస్ మరియు హిందూ క్యాలెండర్ డేటాసెట్ నుండి పొందబడ్డాయి.","Search calendar event…":"క్యాలెండర్ ఈవెంట్‌ను వెతకండి…","Filter":"ఫిల్టర్","Open festival →":"పండుగను చూడండి →","No calendar matches":"సరిపోలే క్యాలెండర్ ఈవెంట్‌లు లేవు","GEOGRAPHIC FESTIVAL EXPLORER":"భౌగోళిక పండుగల అన్వేషణ","Festival Explorer Map":"పండుగల అన్వేషణ మ్యాప్","Near Me":"నా సమీపంలో","Reset Filters":"ఫిల్టర్లను రీసెట్ చేయండి","Search festival name, sacred place, city, or country...":"పండుగ పేరు, పవిత్ర స్థలం, నగరం లేదా దేశం కోసం వెతకండి...","All Religions (Hinduism, Islam, Christianity)":"అన్ని మతాలు (హిందూమతం, ఇస్లాం, క్రైస్తవం)","All Associated Festivals":"అన్ని సంబంధిత పండుగలు","Filter Place Type:":"ప్రదేశ రకం వారీగా ఫిల్టర్ చేయండి:","All Sites":"అన్ని ప్రదేశాలు","Places of Worship":"ఆరాధనా స్థలాలు","Pilgrimage Destinations":"తీర్థయాత్రా స్థలాలు","Famous Celebration Sites":"ప్రసిద్ధ వేడుకల ప్రదేశాలు","Cultural Heritage":"సాంస్కృతిక వారసత్వం","Fit View":"మొత్తం మ్యాప్ చూడండి","Locate Me":"నా స్థానాన్ని గుర్తించండి","All Festivals":"అన్ని పండుగలు","Sacred Sites":"పవిత్ర స్థలాలు","All Website Festivals":"అన్ని వెబ్‌సైట్ పండుగలు","Verified Sacred Sites":"ధృవీకరించబడిన పవిత్ర స్థలాలు","Explore Festival Details →":"పండుగ వివరాలను అన్వేషించండి →","Locate on Map":"మ్యాప్‌లో గుర్తించండి","Get Directions ↗":"మార్గం పొందండి ↗","Explore Details":"వివరాలను అన్వేషించండి","Celebration Destination:":"వేడుక జరిగే ప్రదేశం:","EDUCATIONAL COMPARISON":"విద్యాపరమైన పోలిక","Religion":"మతం","Category":"వర్గం","Region":"ప్రాంతం","Typical date":"సాధారణ తేదీ","Duration":"వ్యవధి","LEARNING MODE":"అభ్యాస మోడ్","Study the festival step by step.":"పండుగ గురించి దశలవారీగా అధ్యయనం చేయండి.","STEP":"దశ","Next step →":"తదుపరి దశ →","Complete learning":"అభ్యాసం పూర్తి చేయండి","Final quiz →":"తుది క్విజ్ →","Content not published yet.":"సమాచారం ఇంకా ప్రచురించబడలేదు.","KNOWLEDGE CHECK":"జ్ఞాన పరీక్ష","quiz":"క్విజ్","Answer the questions based on the published festival content.":"ప్రచురించిన పండుగ సమాచారం ఆధారంగా ప్రశ్నలకు సమాధానమివ్వండి.","QUESTION":"ప్రశ్న","Submit quiz":"క్విజ్ సమర్పించండి","Quiz not published yet":"క్విజ్ ఇంకా ప్రచురించబడలేదు","Login to submit and save quiz results":"క్విజ్ ఫలితాలను సేవ్ చేయడానికి లాగిన్ అవ్వండి","Score":"స్కోరు","YOUR COLLECTION":"మీ సేకరణ","Saved festivals":"సేవ్ చేయబడిన పండుగలు","Your persistent festival collection.":"మీరు భద్రపరుచుకున్న పండుగల వ్యక్తిగత జాబితా.","No saved festivals yet":"ఇంకా సేవ్ చేయబడిన పండుగలు లేవు","Open a festival and choose \"Save festival\".":"ఏదైనా పండుగను తెరిచి \"పండుగను సేవ్ చేయండి\" ఎంచుకోండి.","Removed from favorites":"సేవ్ చేయబడిన వాటి నుండి తీసివేయబడింది","Saved to favorites":"సేవ్ చేయబడిన వాటికి జోడించబడింది","Reminder preference saved":"గుర్తుచేసే ప్రాధాన్యత సేవ్ చేయబడింది","Explorer Login":"ఎక్స్‌ప్లోరర్ లాగిన్","Create your account":"మీ ఖాతాను సృష్టించండి","Create Explorer Account":"కొత్త ఖాతాను సృష్టించండి","Sign in to Explore":"అన్వేషించడానికి సైన్ ఇన్ చేయండి","Sign in with Google":"Google తో సైన్ ఇన్ చేయండి","or continue with email":"లేదా ఈమెయిల్‌తో కొనసాగించండి","Full Name / Admin Identity":"పూర్తి పేరు / అడ్మిన్ వివరాలు","Email Address":"ఈమెయిల్ చిరునామా","Password (8+ characters)":"పాస్‌వర్డ్ (8+ అక్షరాలు)","Need an account? Register":"ఖాతా లేదా? నమోదు చేసుకోండి","Already registered? Login":"ఇప్పటికే నమోదయ్యారా? లాగిన్ అవ్వండి","Interactive Religious Festival & Cultural Heritage Explorer":"ఇంటరాక్టివ్ మతపరమైన పండుగలు & సాంస్కృతిక వారసత్వ అన్వేషణ","Educational • Neutral • Source-based":"విద్యాపరమైనది • తటస్థమైనది • ఆధారపూర్వకమైనది","Diwali":"దీపావళి","Pongal":"పొంగల్","Holi":"హోలీ","Maha Shivaratri":"మహా శివరాత్రి","Eid-ul-Fitr":"ఈద్ ఉల్-ఫితర్","Ramadan":"రమదాన్ (రంజాన్)","Eid-ul-Zuha (Eid-ul-Azha)":"ఈద్ ఉల్-అదా (బక్రీద్)","Milad-Un-Nabi":"మిలాద్-ఉన్-నబీ","Muharram":"మొహర్రం","Shab-e-Barat":"షబ్-ఎ-బరాత్","Shab-e-Miraj":"షబ్-ఎ-మేరాజ్","Christmas":"క్రిస్మస్","Easter":"ఈస్టర్","Good Friday":"గుడ్ ఫ్రైడే","Pentecost":"పెంతెకోస్తు","Eid al-Fitr":"ఈద్ ఉల్-ఫితర్","Eid al-Adha":"ఈద్ ఉల్-అదా","Islamic New Year":"ఇస్లామిక్ నూతన సంవత్సరం","Navratri":"నవరాత్రి","Ganesh Chaturthi":"వినాయక చవితి","Janmashtami":"కృష్ణాష్టమి","Rama Navami":"శ్రీరామ నవమి","Raksha Bandhan":"రక్షా బంధన్ (రాఖీ)","Dussehra":"దసరా (విజయదశమి)","Vasant Panchami":"వసంత పంచమి","Guru Purnima":"గురు పౌర్ణమి","Onam":"ఓనం","Chhath Puja":"ఛట్ పూజ","Karwa Chauth":"కర్వా చౌత్","Akshaya Tritiya":"అక్షయ తృతీయ","Makara Sankranti":"మకర సంక్రాంతి","Makar Sankranti":"మకర సంక్రాంతి","Nag Panchami":"నాగ పంచమి","Sharad Purnima":"శరద్ పూర్ణిమ","Dhanteras":"ధంతేరస్","Hanuman Jayanti":"హనుమాన్ జయంతి","Ugadi":"ఉగాది","Gudi Padwa":"గుడి పడ్వా","Thaipusam":"తైపూసం","Narasimha Jayanti":"నరసింహ జయంతి","Vat Savitri Vrat":"వట సావిత్రి వ్రతం","Jagannath Rath Yatra":"జగన్నాథ రథయాత్ర","Varalakshmi Vratam":"వరలక్ష్మీ వ్రతం","Krishna Janmashtami":"శ్రీకృష్ణ జన్మాష్టమి","Hartalika Teej":"హర్తాళికా తీజ్","Vishwakarma Puja":"విశ్వకర్మ పూజ","Durga Puja":"దుర్గా పూజ","Govardhan Puja":"గోవర్ధన పూజ","Bhai Dooj":"భాయ్ దూజ్","Karthigai Deepam":"కార్తీక దీపం","Vaikuntha Ekadashi":"వైకుంఠ ఏకాదశి","Bathukamma":"బతుకమ్మ","Vishu":"విషు","Bihu":"బిహు","Bonalu":"బోనాలు","Karthika Purnima":"కార్తీక పౌర్ణమి","Shigmo":"శిగ్మో","Epiphany":"ప్రత్యక్షీకరణ పండుగ (ఎపిఫనీ)","Ash Wednesday":"విభూతి బుధవారం","Palm Sunday":"మట్టల ఆదివారం","Maundy Thursday":"పరిశుద్ధ గురువారం","Holy Saturday":"పరిశుద్ధ శనివారం","Easter Sunday":"ఈస్టర్ ఆదివారం","Ascension of Jesus":"ఏసుక్రీస్తు పరలోకారారోహణ పండుగ","Trinity Sunday":"త్రిత్వ ఆదివారం","Feast of the Assumption":"మరియమాత స్వర్గారోపణ పండుగ","All Saints' Day":"సర్వ సంతుల పండుగ (ఆల్ సెయింట్స్ డే)","All Souls' Day":"సర్వ విశ్వాసుల మృతుల దినం","Feast of the Annunciation":"మంగళవార్త పండుగ","Feast of the Transfiguration":"రూపాంతర పండుగ","Feast of Saint Thomas the Apostle":"పునీత తోమా అపొస్తలుని పండుగ","Advent":"ఆగమనం (అడ్వెంట్)","Feast of the Immaculate Conception":"అమలోద్భవ మరియమాత పండుగ","Corpus Christi":"క్రీస్తు దివ్యశరీర పండుగ","Laylat al-Qadr":"షబ్-ఎ-ఖద్ర్ (లైలతుల్ ఖద్ర్)","Hajj":"హజ్ యాత్ర","Islamic New Year — 1 Muharram":"ఇస్లామిక్ నూతన సంవత్సరం — 1 మొహర్రం","Ashura":"ఆషూరా","Mawlid al-Nabi":"మిలాద్-ఉన్-నబీ","Isra and Mi'raj":"ఇస్రా మరియు మిరాజ్","Nuzul al-Qur'an":"నుజుల్ అల్-ఖురాన్","Feast of the Epiphany":"ప్రత్యక్షీకరణ పండుగ","Stop":"ఆపండి","Reminded":"గుర్తు చేయబడింది","Set a Reminder":"రిమైండర్ సెట్ చేయండి","Add to Google Calendar":"గూగుల్ క్యాలెండర్‌కు జోడించండి","Download Calendar (.ics)":"క్యాలెండర్‌ను డౌన్‌లోడ్ చేయండి (.ics)","Browser Notification":"బ్రౌజర్ నోటిఫికేషన్","Report an issue or suggestion":"సమస్య లేదా సూచనను నివేదించండి","Submit Report":"నివేదికను సమర్పించండి","Cancel":"రద్దు చేయండి","Close":"మూసివేయి","Previous step":"← మునుపటి దశ","Complete learning & take Quiz →":"అభ్యాసాన్ని పూర్తి చేసి క్విజ్ తీసుకోండి →","Retake Quiz":"క్విజ్ మళ్లీ ప్రయత్నించండి","Back to Festival":"పండుగకు తిరిగి వెళ్లండి","Audio stopped":"ఆడియో ఆపబడింది","Issue Type":"సమస్య రకం","Details & Corrections":"వివరాలు & దిద్దుబాట్లు","Save in FaithFest Reminders":"FaithFest రిమైండర్లలో సేవ్ చేయండి","Download":"డౌన్‌లోడ్","Enable":"ప్రారంభించండి","Open ↗":"తెరువు ↗"},"Hindi":{"Back":"पीछे","Navigate to previous page":"पिछले पृष्ठ पर जाएं","Go Back":"वापस जाएं","Explore":"खोजें","Calendar":"कैलेंडर","Map":"नक्शा","Compare":"तुलना करें","Saved":"सहेजा गया","Admin":"एडमिन","Login":"लॉगिन","Logout":"लॉगआउट","CMS":"CMS","All religions":"सभी धर्म","All religions →":"सभी धर्म →","All categories":"सभी श्रेणियां","Festival":"त्योहार","Holy Day":"पवित्र दिन","Religious Observance":"धार्मिक अनुष्ठान","Cultural Celebration":"सांस्कृतिक उत्सव","Search":"खोजें","No results":"कोई परिणाम नहीं","Try another search or filter.":"अन्य खोज या फ़िल्टर का प्रयास करें।","Date varies":"तिथि परिवर्तनशील","Varies":"परिवर्तनशील","Multiple regions":"विविध क्षेत्र","Multiple":"विविध क्षेत्र","Global":"वैश्विक","Festival information":"त्योहार की जानकारी","CULTURE · HISTORY · LEARNING":"संस्कृति · इतिहास · सीखना","Discover the stories behind the world's <em>festivals.</em>":"दुनिया के <em>त्योहारों</em> के पीछे की कहानियों की खोज करें।","Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.":"इस मंच के माध्यम से परंपराओं, इतिहास, भोजन, वेशभूषा, संगीत और महत्वपूर्ण रीति-रिवाजों का अन्वेषण करें।","Explorer login":"एक्सप्लोरर लॉगिन","Explorer login <span>→</span>":"एक्सप्लोरर लॉगिन <span>→</span>","Admin login":"एडमिन लॉगिन","Admin login <span>→</span>":"एडमिन लॉगिन <span>→</span>","✓ Database-driven":"✓ डेटाबेस-संचालित","✓ Source-aware":"✓ स्रोत-जागरूक","✓ Multilingual-ready":"✓ बहुभाषी-तैयार","Explore.<br>Understand.<br>Respect.":"अन्वेषण करें।<br>समझें।<br>सम्मान करें।","Religious & cultural heritage explorer":"सांस्कृतिक खोजकर्ता","Religions":"धर्म","Published entries":"प्रविष्टियाँ","EXPLORE":"खोजें","Festival Explorer":"त्योहार खोजकर्ता","Search the real FaithFest database. Choose a religion first or combine filters.":"फेथफेस्ट डेटाबेस में खोजें। पहले धर्म चुनें या फ़िल्टर मिलाएं।","Search festival, region or description…":"त्योहार, क्षेत्र या विवरण खोजें…","Explore Festivals":"त्योहारों का अन्वेषण करें","Festival Not Found":"त्योहार नहीं मिला","CHOOSE A PATH":"एक मार्ग चुनें","Explore by religion":"धर्म के अनुसार खोजें","Hinduism first · Islam second · Christianity third":"प्रथम हिन्दू धर्म · द्वितीय इस्लाम · तृतीय ईसाई धर्म","CALENDAR":"कैलेंडर","Upcoming & calendar data":"आगामी त्योहार व कैलेंडर डेटा","Open calendar →":"कैलेंडर खोलें →","RELIGION":"धर्म","ENTRIES":"प्रविष्टियाँ","festivals & observances":"त्योहार और अनुष्ठान","No published entries yet":"अभी तक कोई प्रविष्टि प्रकाशित नहीं हुई","The religion is configured, but festival content has not been published.":"धर्म कॉन्फ़िगर किया गया है, लेकिन त्योहार सामग्री अभी तक प्रकाशित नहीं हुई है।","Hinduism":"हिन्दू धर्म","Islam":"इस्लाम","Christianity":"ईसाई धर्म","Save festival":"त्योहार सहेजें","View on Map":"मानचित्र पर देखें","Listen":"सुनें","Remind":"याद दिलाएं","Learning mode →":"सीखने का मोड →","Quiz →":"प्रश्नोत्तरी →","Report issue":"समस्या बताएं","REGION":"क्षेत्र","DATE":"तिथि","DURATION":"अवधि","History & origin":"इतिहास और उत्पत्ति","HISTORICAL TIMELINE":"ऐतिहासिक समयरेखा","Religious / cultural significance":"धार्मिक व सांस्कृतिक महत्व","How it is celebrated":"यह कैसे मनाया जाता है","Modern celebration":"आधुनिक उत्सव","TRADITIONAL FOOD":"पारंपरिक व्यंजन","TRADITIONAL CLOTHING":"पारंपरिक वेशभूषा","MUSIC & DANCE":"संगीत और नृत्य","DECORATIONS & SYMBOLS":"सजावट और प्रतीक","REGIONAL VARIATIONS":"क्षेत्रीय विविधताएं","GALLERY & EXPLAINER VIDEO":"गैलरी और व्याख्यात्मक वीडियो","SOURCES & REFERENCES":"स्रोत और संदर्भ","COMPARE":"तुलना करें","Compare festivals":"त्योहारों की तुलना करें","Compare factual cultural attributes without ranking religions.":"धर्मों को बिना श्रेणीबद्ध किए केवल सांस्कृतिक विशेषताओं की निष्पक्ष तुलना करें।","Open comparison":"तुलना खोलें","Open source ↗":"स्रोत देखें ↗","Rituals":"रीति-रिवाज","Food":"भोजन","Clothing":"वस्त्र","Music":"संगीत","Significance":"महत्व","Celebration":"उत्सव","History":"इतिहास","Introduction":"परिचय","Regional variations":"क्षेत्रीय विविधताएं","DYNAMIC CALENDAR":"डायनेमिक कैलेंडर","Festival calendar":"त्योहार कैलेंडर","Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.":"कैलेंडर कार्यक्रम एप्लिकेशन डेटाबेस और हिन्दू कैलेंडर डेटासेट से लिए गए हैं।","Search calendar event…":"कैलेंडर ईवेंट खोजें…","Filter":"फ़िल्टर करें","Open festival →":"त्योहार देखें →","No calendar matches":"कोई कैलेंडर मेल नहीं मिला","GEOGRAPHIC FESTIVAL EXPLORER":"भौगोलिक त्योहार अन्वेषक","Festival Explorer Map":"त्योहार अन्वेषण मानचित्र","Near Me":"मेरे पास","Reset Filters":"फ़िल्टर रीसेट करें","Search festival name, sacred place, city, or country...":"त्योहार, पवित्र स्थान, शहर या देश का नाम खोजें...","All Religions (Hinduism, Islam, Christianity)":"सभी धर्म (हिन्दू धर्म, इस्लाम, ईसाई धर्म)","All Associated Festivals":"सभी संबंधित त्योहार","Filter Place Type:":"स्थान के प्रकार से फ़िल्टर करें:","All Sites":"सभी स्थान","Places of Worship":"पूजा स्थल","Pilgrimage Destinations":"तीर्थ स्थल","Famous Celebration Sites":"प्रसिद्ध उत्सव स्थल","Cultural Heritage":"सांस्कृतिक विरासत","Fit View":"पूर्ण मानचित्र देखें","Locate Me":"मेरी स्थिति जानें","All Festivals":"सभी त्योहार","Sacred Sites":"पवित्र स्थल","All Website Festivals":"वेबसाइट के सभी त्योहार","Verified Sacred Sites":"सत्यापित पवित्र स्थल","Explore Festival Details →":"त्योहार का विवरण देखें →","Locate on Map":"मानचित्र पर खोजें","Get Directions ↗":"दिशा-निर्देश प्राप्त करें ↗","Explore Details":"विवरण देखें","Celebration Destination:":"उत्सव स्थल:","EDUCATIONAL COMPARISON":"शैक्षिक तुलना","Religion":"धर्म","Category":"श्रेणी","Region":"क्षेत्र","Typical date":"सामान्य तिथि","Duration":"अवधि","LEARNING MODE":"सीखने का मोड","Study the festival step by step.":"त्योहार का चरण-दर-चरण अध्ययन करें।","STEP":"चरण","Next step →":"अगला कदम →","Complete learning":"सीखना पूरा करें","Final quiz →":"अंतिम प्रश्नोत्तरी →","Content not published yet.":"सामग्री अभी प्रकाशित नहीं हुई है।","KNOWLEDGE CHECK":"ज्ञान परीक्षण","quiz":"प्रश्नोत्तरी","Answer the questions based on the published festival content.":"प्रकाशित त्योहार सामग्री के आधार पर प्रश्नों के उत्तर दें।","QUESTION":"प्रश्न","Submit quiz":"प्रश्नोत्तरी जमा करें","Quiz not published yet":"प्रश्नोत्तरी अभी प्रकाशित नहीं हुई","Login to submit and save quiz results":"परिणाम सहेजने के लिए लॉगिन करें","Score":"स्कोर","YOUR COLLECTION":"आपका संग्रह","Saved festivals":"सहेजे गए त्योहार","Your persistent festival collection.":"आपका व्यक्तिगत सहेजा गया त्योहार संग्रह।","No saved festivals yet":"अभी तक कोई त्योहार सहेजा नहीं गया","Open a festival and choose \"Save festival\".":"किसी त्योहार को खोलें और \"त्योहार सहेजें\" चुनें।","Removed from favorites":"सहेजे गए से हटाया गया","Saved to favorites":"सहेजे गए में जोड़ा गया","Reminder preference saved":"रिमाइंडर प्राथमिकता सहेजी गई","Explorer Login":"खोजकर्ता लॉगिन","Create your account":"अपना खाता बनाएं","Create Explorer Account":"नया खोजकर्ता खाता बनाएं","Sign in to Explore":"अन्वेषण के लिए साइन इन करें","Sign in with Google":"Google से साइन इन करें","or continue with email":"या ईमेल से जारी रखें","Full Name / Admin Identity":"पूरा नाम / एडमिन पहचान","Email Address":"ईमेल पता","Password (8+ characters)":"पासवर्ड (8+ अक्षर)","Need an account? Register":"खाता नहीं है? पंजीकरण करें","Already registered? Login":"पहले से पंजीकृत हैं? लॉगिन करें","Interactive Religious Festival & Cultural Heritage Explorer":"इंटरैक्टिव धार्मिक त्योहार और सांस्कृतिक विरासत अन्वेषक","Educational • Neutral • Source-based":"शैक्षिक • तटस्थ • स्रोत-आधारित","Diwali":"दीपावली","Pongal":"पोंगल","Holi":"होली","Maha Shivaratri":"महाशिवरात्रि","Eid-ul-Fitr":"ईद-उल-फ़ितर","Ramadan":"रमज़ान","Eid-ul-Zuha (Eid-ul-Azha)":"ईद-उल-अज़हा (बकरीद)","Milad-Un-Nabi":"मिलाद-उन-नबी","Muharram":"मोहर्रम","Shab-e-Barat":"शब-ए-बारात","Shab-e-Miraj":"शब-ए-मेराज","Christmas":"क्रिसमस","Easter":"ईस्टर","Good Friday":"गुड फ्राइडे","Pentecost":"पिन्तेकुस्त","Eid al-Fitr":"ईद-अल-फ़ितर","Eid al-Adha":"ईद-अल-अज़हा","Islamic New Year":"इस्लामी नया साल","Navratri":"नवरात्रि","Ganesh Chaturthi":"गणेश चतुर्थी","Janmashtami":"जन्माष्टमी","Rama Navami":"राम नवमी","Raksha Bandhan":"रक्षाबंधन","Dussehra":"दशहरा (विजयादशमी)","Vasant Panchami":"वसंत पंचमी","Guru Purnima":"गुरु पूर्णिमा","Onam":"ओणम","Chhath Puja":"छठ पूजा","Karwa Chauth":"करवा चौथ","Akshaya Tritiya":"अक्षय तृतीया","Makara Sankranti":"मकर संक्रांति","Makar Sankranti":"मकर संक्रांति","Nag Panchami":"नाग पंचमी","Sharad Purnima":"शरद पूर्णिमा","Dhanteras":"धनतेरस","Hanuman Jayanti":"हनुमान जयंती","Ugadi":"उगादी","Gudi Padwa":"गुड़ी पड़वा","Thaipusam":"थाईपूसम","Narasimha Jayanti":"नरसिंह जयंती","Vat Savitri Vrat":"वट सावित्री व्रत","Jagannath Rath Yatra":"जगन्नाथ रथ यात्रा","Varalakshmi Vratam":"वरलक्ष्मी व्रत","Krishna Janmashtami":"कृष्ण जन्माष्टमी","Hartalika Teej":"हरतालिका तीज","Vishwakarma Puja":"विश्वकर्मा पूजा","Durga Puja":"दुर्गा पूजा","Govardhan Puja":"गोवर्धन पूजा","Bhai Dooj":"भाई दूज","Karthigai Deepam":"कार्तिक दीपम","Vaikuntha Ekadashi":"वैकुंठ एकादशी","Bathukamma":"बथुकम्मा","Vishu":"विषु","Bihu":"बिहू","Bonalu":"बोनालू","Karthika Purnima":"कार्तिक पूर्णिमा","Shigmo":"शिग्मो","Epiphany":"प्रभु प्रकाश पर्व (एपीफनी)","Ash Wednesday":"राख का बुधवार (ऐश वेडनसडे)","Palm Sunday":"खजूर का इतवार (पाम संडे)","Maundy Thursday":"पवित्र बृहस्पतिवार","Holy Saturday":"पवित्र शनिवार","Easter Sunday":"ईस्टर संडे","Ascension of Jesus":"स्वर्गारोहण पर्व","Trinity Sunday":"त्रित्व रविवार","Feast of the Assumption":"माता मरियम का स्वर्गारोहण पर्व","All Saints' Day":"सभी संतों का पर्व (ऑल सेंट्स डे)","All Souls' Day":"सभी मृत आत्माओं का दिन","Feast of the Annunciation":"देवदूत संवाद पर्व (अन्नंशिएशन)","Feast of the Transfiguration":"रूपांतरण पर्व","Feast of Saint Thomas the Apostle":"संत थॉमस प्रेरित का पर्व","Advent":"आगमन काल (एडवेंट)","Feast of the Immaculate Conception":"निष्कलंक गर्भाधान पर्व","Corpus Christi":"कॉर्पस क्रिस्टी","Laylat al-Qadr":"शब-ए-क़द्र (लैलत-उल-क़द्र)","Hajj":"हज यात्रा","Islamic New Year — 1 Muharram":"इस्लामी नया साल — 1 मोहर्रम","Ashura":"आशूरा","Mawlid al-Nabi":"ईद मिलाद-उन-नबी","Isra and Mi'raj":"इस्रा और मेराज","Nuzul al-Qur'an":"नुज़ूल अल-क़ुरआन","Feast of the Epiphany":"प्रभु प्रकाश पर्व","Stop":"रोकें","Reminded":"याद दिलाया","Set a Reminder":"रिमाइंडर सेट करें","Add to Google Calendar":"गूगल कैलेंडर में जोड़ें","Download Calendar (.ics)":"कैलेंडर डाउनलोड करें (.ics)","Browser Notification":"ब्राउज़र सूचना","Report an issue or suggestion":"समస్య या सुझाव बताएं","Submit Report":"रिपोर्ट सबमिट करें","Cancel":"रद्द करें","Close":"बंद करें","Previous step":"← पिछला चरण","Complete learning & take Quiz →":"सीखना पूरा करें और प्रश्नोत्तरी दें →","Retake Quiz":"प्रश्नोत्तरी दोबारा दें","Back to Festival":"त्योहार पर वापस जाएं","Audio stopped":"ऑडियो बंद किया गया","Issue Type":"समस्या का प्रकार","Details & Corrections":"विवरण एवं सुधार","Save in FaithFest Reminders":"FaithFest रिमाइंडर में सहेजें","Download":"डाउनलोड","Enable":"सक्षम करें","Open ↗":"खोलें ↗"},"Tamil":{"Back":"பின்செல்","Navigate to previous page":"முந்தைய பக்கத்திற்குச் செல்லவும்","Go Back":"பின்னே செல்","Explore":"ஆராய்","Calendar":"நாட்காட்டி","Map":"வரைபடம்","Compare":"ஒப்பிடு","Saved":"சேமிக்கப்பட்டது","Admin":"நிர்வாகி","Login":"உள்நுழை","Logout":"வெளியேறு","CMS":"CMS","All religions":"அனைத்து மதங்கள்","All religions →":"அனைத்து மதங்கள் →","All categories":"அனைத்து வகைகள்","Festival":"திருவிழா","Holy Day":"புனித நாள்","Religious Observance":"மத அனுசரிப்பு","Cultural Celebration":"கலாச்சார கொண்டாட்டம்","Search":"தேடுங்கள்","No results":"முடிவுகள் இல்லை","Try another search or filter.":"வேறொரு தேடல் அல்லது வடிப்பானை முயற்சிக்கவும்.","Date varies":"தேதி மாறுபடும்","Varies":"மாறுபடும்","Multiple regions":"பல பகுதிகள்","Multiple":"பல பகுதிகள்","Global":"உலகளாவிய","Festival information":"பண்டிகை தகவல்","CULTURE · HISTORY · LEARNING":"கலாச்சாரம் · வரலாறு · கற்றல்","Discover the stories behind the world's <em>festivals.</em>":"உலகின் <em>பண்டிகைகளின்</em> பின்னணியில் உள்ள கதைகளை கண்டறியவும்.","Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.":"பயன்பாட்டின் மூலம் பாரம்பரியம் மற்றும் வரலாற்றை ஆராயுங்கள்.","Explorer login":"பயனர் உள்நுழைவு","Explorer login <span>→</span>":"பயனர் உள்நுழைவு <span>→</span>","Admin login":"நிர்வாகி உள்நுழைவு","Admin login <span>→</span>":"நிர்வாகி உள்நுழைவு <span>→</span>","✓ Database-driven":"✓ தரவுத்தளம்","✓ Source-aware":"✓ மூலங்கள்","✓ Multilingual-ready":"✓ பன்மொழி","Explore.<br>Understand.<br>Respect.":"ஆராயுங்கள்.<br>புரிந்து கொள்ளுங்கள்.<br>மதியுங்கள்.","Religious & cultural heritage explorer":"கலாச்சார ஆய்வாளர்","Religions":"மதங்கள்","Published entries":"பதிவுகள்","EXPLORE":"ஆராய்","Festival Explorer":"திருவிழா ஆய்வாளர்","Search the real FaithFest database. Choose a religion first or combine filters.":"ஃபெய்த்ஃபெஸ்ட் தரவுத்தளத்தில் தேடுங்கள். ஒரு மதத்தைத் தேர்ந்தெடுக்கவும் அல்லது வடிப்பான்களை இணைக்கவும்.","Search festival, region or description…":"பண்டிகை, பிராந்தியம் அல்லது விளக்கத்தைத் தேடுங்கள்…","Explore Festivals":"பண்டிகைகளை ஆராயுங்கள்","Festival Not Found":"பண்டிகை கிடைக்கவில்லை","CHOOSE A PATH":"ஒரு வழியைத் தேர்ந்தெடுக்கவும்","Explore by religion":"மதம் வாரியாக ஆராயுங்கள்","Hinduism first · Islam second · Christianity third":"முதலில் இந்து மதம் · இரண்டாவதாக இஸ்லாம் · மூன்றாவதாக கிறிஸ்தவம்","CALENDAR":"நாட்காட்டி","Upcoming & calendar data":"வரவிருக்கும் நிகழ்வுகள் & நாட்காட்டி","Open calendar →":"நாட்காட்டியைத் திறக்கவும் →","RELIGION":"மதம்","ENTRIES":"பதிவுகள்","festivals & observances":"பண்டிகைகள் & நிகழ்வுகள்","No published entries yet":"இன்னும் பதிவுகள் வெளியிடப்படவில்லை","The religion is configured, but festival content has not been published.":"மதம் கட்டமைக்கப்பட்டுள்ளது, ஆனால் பண்டிகை தகவல்கள் இன்னும் வெளியிடப்படவில்லை.","Hinduism":"இந்து மதம்","Islam":"இஸ்லாம்","Christianity":"கிறிஸ்தவம்","Save festival":"பண்டிகையைச் சேமிக்கவும்","View on Map":"வரைபடத்தில் காண்க","Listen":"கேளுங்கள்","Remind":"நினைவூட்டு","Learning mode →":"கற்றல் முறை →","Quiz →":"வினாடி வினா →","Report issue":"பிரச்சனையைப் புகாரளி","REGION":"பிராந்தியம்","DATE":"தேதி","DURATION":"கால அளவு","History & origin":"வரலாறு மற்றும் தோற்றம்","HISTORICAL TIMELINE":"வரலாற்று காலவரிசை","Religious / cultural significance":"மத / கலாச்சார முக்கியத்துவம்","How it is celebrated":"எவ்வாறு கொண்டாடப்படுகிறது","Modern celebration":"நவீன கொண்டாட்டம்","TRADITIONAL FOOD":"பாரம்பரிய உணவு","TRADITIONAL CLOTHING":"பாரம்பரிய உடை","MUSIC & DANCE":"இசை & நடனம்","DECORATIONS & SYMBOLS":"அலங்காரங்கள் & சின்னங்கள்","REGIONAL VARIATIONS":"பிராந்திய வேறுபாடுகள்","GALLERY & EXPLAINER VIDEO":"படத்தொகுப்பு & விளக்க வீடியோ","SOURCES & REFERENCES":"ஆதாரங்கள் & குறிப்புகள்","COMPARE":"ஒப்பிடு","Compare festivals":"பண்டிகைகளை ஒப்பிடுங்கள்","Compare factual cultural attributes without ranking religions.":"மதங்களை ஒப்பிடாமல் உண்மையான கலாச்சார பண்புகளை மட்டும் ஒப்பிடுங்கள்.","Open comparison":"ஒப்பீட்டைத் திறக்கவும்","Open source ↗":"ஆதாரத்தைத் திற ↗","Rituals":"சடங்குகள்","Food":"உணவு","Clothing":"ஆடை","Music":"இசை","Significance":"முக்கியத்துவம்","Celebration":"கொண்டாட்டம்","History":"வரலாறு","Introduction":"அறிமுகம்","Regional variations":"பிராந்திய வேறுபாடுகள்","DYNAMIC CALENDAR":"டைனமிக் நாட்காட்டி","Festival calendar":"பண்டிகை நாட்காட்டி","Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.":"நாட்காட்டி நிகழ்வுகள் தரவுத்தளத்திலிருந்தும் இந்து நாட்காட்டி தொகுப்பிலிருந்தும் பெறப்படுகின்றன.","Search calendar event…":"நாட்காட்டி நிகழ்வைத் தேடுங்கள்…","Filter":"வடிகட்டு","Open festival →":"பண்டிகையைத் திறக்கவும் →","No calendar matches":"பொருந்தும் நிகழ்வுகள் இல்லை","GEOGRAPHIC FESTIVAL EXPLORER":"புவியியல் பண்டிகை ஆய்வாளர்","Festival Explorer Map":"பண்டிகை ஆய்வு வரைபடம்","Near Me":"எனக்கு அருகில்","Reset Filters":"வடிப்பான்களை மீட்டமை","Search festival name, sacred place, city, or country...":"பண்டிகை, புண்ணிய தலம், ஊர் அல்லது நாட்டைத் தேடுங்கள்...","All Religions (Hinduism, Islam, Christianity)":"அனைத்து மதங்கள் (இந்து மதம், இஸ்லாம், கிறிஸ்தவம்)","All Associated Festivals":"அனைத்து தொடர்புடைய பண்டிகைகள்","Filter Place Type:":"இட வகை வாரியாக வடிகட்டு:","All Sites":"அனைத்து இடங்கள்","Places of Worship":"வழிபாட்டு தலங்கள்","Pilgrimage Destinations":"புனித யாத்திரை தலங்கள்","Famous Celebration Sites":"பிரபலமான திருவிழா இடங்கள்","Cultural Heritage":"கலாச்சார பாரம்பரியம்","Fit View":"முழு வரைபடம் பார்","Locate Me":"என் இருப்பிடம்","All Festivals":"அனைத்து பண்டிகைகள்","Sacred Sites":"புனித தலங்கள்","All Website Festivals":"வலைத்தளத்தின் அனைத்து பண்டிகைகள்","Verified Sacred Sites":"சரிபார்க்கப்பட்ட புனித தலங்கள்","Explore Festival Details →":"பண்டிகை விவரங்களை ஆராயுங்கள் →","Locate on Map":"வரைபடத்தில் காட்டு","Get Directions ↗":"வழிசெலுத்தல் பெற ↗","Explore Details":"விவரங்களை ஆராயுங்கள்","Celebration Destination:":"கொண்டாட்ட இடம்:","EDUCATIONAL COMPARISON":"கல்விசார் ஒப்பீடு","Religion":"மதம்","Category":"வகை","Region":"பிராந்தியம்","Typical date":"வழக்கமான தேதி","Duration":"கால அளவு","LEARNING MODE":"கற்றல் முறை","Study the festival step by step.":"பண்டிகையை படிப்படியாகப் படியுங்கள்.","STEP":"படி","Next step →":"அடுத்த படி →","Complete learning":"கற்றலை முடிக்கவும்","Final quiz →":"இறுதி வினாடி வினா →","Content not published yet.":"தகவல்கள் இன்னும் வெளியிடப்படவில்லை.","KNOWLEDGE CHECK":"அறிவு சோதனை","quiz":"வினாடி வினா","Answer the questions based on the published festival content.":"வெளியிடப்பட்ட தகவலின் அடிப்படையில் கேள்விகளுக்கு பதிலளிக்கவும்.","QUESTION":"கேள்வி","Submit quiz":"வினாடி வினாவைச் சமர்ப்பிக்கவும்","Quiz not published yet":"வினாடி வினா இன்னும் வெளியிடப்படவில்லை","Login to submit and save quiz results":"முடிவுகளைச் சேமிக்க உள்நுழையவும்","Score":"மதிப்பெண்","YOUR COLLECTION":"உங்கள் தொகுப்பு","Saved festivals":"சேமிக்கப்பட்ட பண்டிகைகள்","Your persistent festival collection.":"உங்கள் நிலையான பண்டிகை தொகுப்பு.","No saved festivals yet":"இன்னும் பண்டிகைகள் சேமிக்கப்படவில்லை","Open a festival and choose \"Save festival\".":"ஒரு பண்டிகையைத் திறந்து \"பண்டிகையைச் சேமிக்கவும்\" என்பதைத் தேர்ந்தெடுக்கவும்.","Removed from favorites":"சேமிக்கப்பட்டவற்றிலிருந்து நீக்கப்பட்டது","Saved to favorites":"சேமிக்கப்பட்டவைகளில் சேர்க்கப்பட்டது","Reminder preference saved":"நினைவூட்டல் சேமிக்கப்பட்டது","Explorer Login":"ஆய்வாளர் உள்நுழைவு","Create your account":"உங்கள் கணக்கை உருவாக்கவும்","Create Explorer Account":"புதிய கணக்கை உருவாக்கவும்","Sign in to Explore":"ஆராய உள்நுழையவும்","Sign in with Google":"Google மூலம் உள்நுழையவும்","or continue with email":"அல்லது மின்னஞ்சல் மூலம் தொடரவும்","Full Name / Admin Identity":"முழு பெயர் / நிர்வாகி தகவல்","Email Address":"மின்னஞ்சல் முகவரி","Password (8+ characters)":"கடவுச்சொல் (8+ எழுத்துகள்)","Need an account? Register":"கணக்கு இல்லையா? பதிவு செய்யவும்","Already registered? Login":"ஏற்கனவே கணக்கு உள்ளதா? உள்நுழையவும்","Interactive Religious Festival & Cultural Heritage Explorer":"மதப் பண்டிகைகள் & கலாச்சார பாரம்பரியத்தை ஆராயும் தளம்","Educational • Neutral • Source-based":"கல்வி சார்ந்தது • நடுநிலையானது • ஆதாரப்பூர்வமானது","Diwali":"தீபாவளி","Pongal":"பொங்கல்","Holi":"ஹோலி","Maha Shivaratri":"மகா சிவராத்திரி","Eid-ul-Fitr":"ஈகைத் திருநாள் (ஈத் அல்-பித்ர்)","Ramadan":"ரமலான் (நோன்பு)","Eid-ul-Zuha (Eid-ul-Azha)":"பக்ரீத் (ஈத் அல்-அதா)","Milad-Un-Nabi":"மீலாதுன் நபி","Muharram":"மொஹர்ரம்","Shab-e-Barat":"ஷபே பராத்","Shab-e-Miraj":"ஷபே மிஃராஜ்","Christmas":"கிறிஸ்துமஸ்","Easter":"ஈஸ்டர்","Good Friday":"புனித வெள்ளி","Pentecost":"பெந்தெகொஸ்தே","Eid al-Fitr":"ஈத் அல்-பித்ர்","Eid al-Adha":"ஈத் அல்-அதா","Islamic New Year":"இஸ்லாமிய புத்தாண்டு","Navratri":"நவராத்திரி","Ganesh Chaturthi":"விநாயகர் சதுர்த்தி","Janmashtami":"கிருஷ்ண ஜெயந்தி","Rama Navami":"ராம நவமி","Raksha Bandhan":"ரக்ஷா பந்தன்","Dussehra":"தசரா (விஜயதசமி)","Vasant Panchami":"வசந்த பஞ்சமி","Guru Purnima":"குரு பூர்ணிமா","Onam":"ஓணம்","Chhath Puja":"சத் பூஜை","Karwa Chauth":"கர்வா சௌத்","Akshaya Tritiya":"அட்சய திருதியை","Makara Sankranti":"மகர சங்கராந்தி","Makar Sankranti":"மகர சங்கராந்தி","Nag Panchami":"நாக பஞ்சமி","Sharad Purnima":"சரத் பூர்ணிமா","Dhanteras":"தன்தேரஸ்","Hanuman Jayanti":"ஹனுமான் ஜெயந்தி","Ugadi":"யுகாதி","Gudi Padwa":"குடி பட்வா","Thaipusam":"தைப்பூசம்","Narasimha Jayanti":"நரசிம்ம ஜெயந்தி","Vat Savitri Vrat":"வட சாவித்திரி விரதம்","Jagannath Rath Yatra":"ஜெகந்நாதர் ரத யாத்திரை","Varalakshmi Vratam":"வரலட்சுமி விரதம்","Krishna Janmashtami":"ஸ்ரீகிருஷ்ண ஜெயந்தி","Hartalika Teej":"ஹர்தாலிகா தீஜ்","Vishwakarma Puja":"விஸ்வகர்மா பூஜை","Durga Puja":"துர்கா பூஜை","Govardhan Puja":"கோவர்த்தன பூஜை","Bhai Dooj":"பாய் தூஜ்","Karthigai Deepam":"கார்த்திகை தீபம்","Vaikuntha Ekadashi":"வைகுண்ட ஏகாதசி","Bathukamma":"பதுகம்மா","Vishu":"விஷு","Bihu":"பிஹு","Bonalu":"போனாலு","Karthika Purnima":"கார்த்திகை பௌர்ணமி","Shigmo":"ஷிக்மோ","Epiphany":"காட்சிப் பெருவிழா","Ash Wednesday":"சாம்பல் புதன்","Palm Sunday":"குருத்தோலை ஞாயிறு","Maundy Thursday":"புனித வியாழன்","Holy Saturday":"புனித சனி","Easter Sunday":"ஈஸ்டர் ஞாயிறு","Ascension of Jesus":"இயேசுவின் விண்ணேற்றம்","Trinity Sunday":"மூவொரு இறைவன் பெருவிழா","Feast of the Assumption":"மரியாவின் விண்ணேற்பு பெருவிழா","All Saints' Day":"அனைத்து புனிதர்கள் நாள்","All Souls' Day":"அனைத்து ஆன்மாக்கள் நாள்","Feast of the Annunciation":"மங்கள வார்த்தை திருநாள்","Feast of the Transfiguration":"மறுரூப திருநாள்","Feast of Saint Thomas the Apostle":"புனித தோமையார் பெருவிழா","Advent":"வருகைக் காலம் (அட்வென்ட்)","Feast of the Immaculate Conception":"அமல உற்பவ திருநாள்","Corpus Christi":"கிறிஸ்துவின் திருவுடல் பெருவிழா","Laylat al-Qadr":"லைலத்துல் கத்ர்","Hajj":"ஹஜ் புனிதப் பயணம்","Islamic New Year — 1 Muharram":"இஸ்லாமிய புத்தாண்டு — 1 மொஹர்ரம்","Ashura":"ஆஷூரா","Mawlid al-Nabi":"மீலாதுன் நபி","Isra and Mi'raj":"இஸ்ரா & மிஃராஜ்","Nuzul al-Qur'an":"நுஸுலுல் குர்ஆன்","Feast of the Epiphany":"பிரபுவின் காட்சிப் பெருவிழா","Stop":"நிறுத்து","Reminded":"நினைவூட்டப்பட்டது","Set a Reminder":"நினைவூட்டலை அமைக்கவும்","Add to Google Calendar":"கூகிள் காலெண்டரில் சேர்க்கவும்","Download Calendar (.ics)":"காலெண்டரைப் பதிவிறக்கவும் (.ics)","Browser Notification":"உலாவி அறிவிப்பு","Report an issue or suggestion":"பிரச்சனை அல்லது ஆலோசனையைப் புகாரளி","Submit Report":"அறிக்கையைச் சமர்ப்பிக்கவும்","Cancel":"ரத்துசெய்","Close":"மூடு","Previous step":"← முந்தைய படி","Complete learning & take Quiz →":"கற்றலை முடித்து வினாடி வினா எடுக்கவும் →","Retake Quiz":"மீண்டும் வினாடி வினா எடுக்கவும்","Back to Festival":"பண்டிகைக்குத் திரும்பு","Audio stopped":"ஆடியோ நிறுத்தப்பட்டது","Issue Type":"பிரச்சனை வகை","Details & Corrections":"விவரங்கள் & திருத்தங்கள்","Save in FaithFest Reminders":"FaithFest நினைவூட்டல்களில் சேமிக்கவும்","Download":"பதிவிறக்கு","Enable":"செயல்படுத்து","Open ↗":"திறக்க ↗"}};
const FEST_DESCS = {"Telugu":{"Diwali":"దీపావళి భారతదేశంలో అత్యంత వైభవంగా జరుపుకునే వెలుగుల పండుగ, ఇది చీకటిపై వెలుగు, చెడుపై మంచి సాధించిన విజయానికి ప్రతీక.","Pongal":"పొంగల్ అనేది ప్రకృతి, సూర్యభగవానుడు, రైతులు మరియు పశువులకు కృతజ్ఞతలు తెలిపే ప్రముఖ తమిళ పంట పండుగ.","Holi":"హోలీ అనేది రంగులు, ఆనందం మరియు వసంత రుతువు రాకను సూచించే సంప్రదాయ హిందూ పండుగ.","Maha Shivaratri":"మహా శివరాత్రి పరమశివుడికి అంకితం చేయబడిన పవిత్రమైన రాత్రి, భక్తులు ఉపవాసం మరియు జాగరణతో ప్రార్థిస్తారు.","Eid-ul-Fitr":"రమదాన్ పవిత్ర మాసపు ఉపవాసాలు ముగిసిన తర్వాత జరుపుకునే ఆనందోత్సవాల పండుగ.","Ramadan":"ఇస్లామిక్ క్యాలెండర్‌లో 9వ పవిత్ర మాసం, ముస్లింలు ఉపవాసం, ప్రార్థనలు మరియు దానధర్మాలు ఆచరిస్తారు.","Eid-ul-Zuha (Eid-ul-Azha)":"ఇబ్రహీం ప్రవక్త త్యాగాన్ని స్మరిస్తూ జరుపుకునే త్యాగాల పండుగ.","Milad-Un-Nabi":"మహమ్మద్ ప్రవక్త జన్మదినాన్ని పురస్కరించుకుని భక్తిశ్రద్ధలతో జరుపుకునే పవిత్ర దినం.","Muharram":"ఇస్లామిక్ నూతన సంవత్సరం ప్రారంభం మరియు కర్బలా మైదానంలో హుస్సేన్ బలిదానాన్ని స్మరించే పవిత్ర మాసం.","Shab-e-Barat":"పాప క్షమాపణ మరియు ప్రార్థనల రాత్రిగా పరిగణించబడే ముస్లింల పవిత్ర రాత్రి.","Shab-e-Miraj":"మహమ్మద్ ప్రవక్త ఆకాశయానం మరియు దైవ సాన్నిధ్యాన్ని స్మరించే ఆధ్యాత్మిక రాత్రి.","Christmas":"ఏసుక్రీస్తు జన్మదినాన్ని ప్రపంచవ్యాప్తంగా ఆనందోత్సాహాలతో జరుపుకునే ప్రధాన క్రైస్తవ పండుగ.","Easter":"ఏసుక్రీస్తు పునరుత్థానాన్ని (మరణాన్ని జయించి లేచుటను) జరుపుకునే క్రైస్తవ విశ్వాసపు ప్రధాన పండుగ.","Good Friday":"మానవాళి పాప పరిహారార్థం ఏసుక్రీస్తు సిలువ మరణాన్ని స్మరించే పవిత్రమైన ఉపవాస దినం.","Pentecost":"శిష్యులపై పరిశుద్ధాత్మ దిగివచ్చిన పవిత్ర దినాన్ని స్మరించే క్రైస్తవ పండుగ.","Eid al-Fitr":"రమదాన్ ఉపవాసాల పరిసమాప్తిని సూచించే ఆనందకరమైన పండుగ.","Eid al-Adha":"హజ్ తీర్థయాత్ర సమయంలో దైవభక్తి మరియు త్యాగాన్ని సూచించే బక్రీద్ పండుగ.","Islamic New Year":"హిజ్రీ చంద్రమాన క్యాలెండర్ ప్రారంభాన్ని సూచించే పవిత్ర దినం.","Navratri":"దుర్గాదేవి మరియు శక్తి స్వరూపాలను ఆరాధిస్తూ తొమ్మిది రాత్రులు జరుపుకునే పవిత్ర ఉత్సవం.","Ganesh Chaturthi":"విఘ్నాలను తొలగించే గణపతి దేవుని జన్మదినాన్ని వైభవంగా జరుపుకునే ఉత్సవం.","Janmashtami":"శ్రీకృష్ణ భగవానుని దివ్య జన్మదినాన్ని భక్తిప్రపత్తులతో జరుపుకునే పండుగ.","Rama Navami":"మర్యాదా పురుషోత్తముడైన శ్రీరాముని జన్మదినం మరియు సీతారాముల కళ్యాణ మహోత్సవం.","Raksha Bandhan":"అన్నాచెల్లెళ్ల అనురాగం, ప్రేమ మరియు రక్షణకు ప్రతీకగా నిలిచే రాఖీ పండుగ.","Dussehra":"చెడుపై మంచి సాధించిన విజయాన్ని సూచించే విజయదశమి పండుగ.","Vasant Panchami":"సరస్వతీ దేవిని ఆరాధించే మరియు వసంత రుతువు రాకను ఆహ్వానించే పండుగ.","Guru Purnima":"గురువుల మార్గదర్శకత్వం, జ్ఞానం మరియు వేదవ్యాస మహర్షిని గౌరవించే పవిత్ర దినం.","Onam":"కేరళ సంస్కృతి, బలి చక్రవర్తి రాక మరియు సమృద్ధిని సూచించే పంటల పండుగ.","Chhath Puja":"సూర్యభగవానుడు మరియు ఛటీ మాతకు అర్ఘ్యం సమర్పించే పవిత్రమైన ఉపవాస వ్రతం.","Karwa Chauth":"భర్త ఆయురారోగ్యాల కోసం వివాహిత మహిళలు రోజంతా ఉపవాసం ఉండి చంద్రుని చూసి విరమించే వ్రతం.","Akshaya Tritiya":"అక్షయమైన సంపద, సమృద్ధి మరియు శుభకార్యాలకు అత్యంత పవిత్రమైన రోజుగా పరిగణించబడుతుంది.","Makara Sankranti":"సూర్యుడు మకర రాశిలోకి ప్రవేశించే పుణ్యకాలం మరియు పంటల సమృద్ధిని జరుపుకునే పండుగ.","Makar Sankranti":"సూర్యుడు మకర రాశిలోకి ప్రవేశించే పుణ్యకాలం మరియు పంటల సమృద్ధిని జరుపుకునే పండుగ.","Nag Panchami":"నాగదేవతలకు పాలు సమర్పించి భక్తిశ్రద్ధలతో పూజించే సంప్రదాయ పండుగ.","Sharad Purnima":"చంద్రుని అమృత కిరణాలు వెదజల్లే రాత్రి, లక్ష్మీదేవి అనుగ్రహం కోసం చేసే పూజ.","Dhanteras":"ధన్వంతరి మరియు లక్ష్మీదేవిని ఆరాధిస్తూ కొత్త వస్తువులు కొనుగోలు చేసే శుభదినం.","Hanuman Jayanti":"శక్తి, భక్తి మరియు ధైర్యానికి మారుపేరైన ఆంజనేయ స్వామి జన్మోత్సవం.","Ugadi":"తెలుగు మరియు కన్నడ ప్రజల సాంప్రదాయ నూతన సంవత్సర పండుగ, షడ్రుచుల ఉగాది పచ్చడి ప్రత్యేకం.","Gudi Padwa":"మహారాష్ట్ర ప్రజల సాంప్రదాయ నూతన సంవత్సర వేడుక.","Thaipusam":"మురుగన్ (సుబ్రహ్మణ్య స్వామి) దైవిక శక్తిని ఆరాధిస్తూ కావడి మొక్కులు తీర్చుకునే పండుగ.","Narasimha Jayanti":"భక్త ప్రహ్లాదుని రక్షించడానికి విష్ణుమూర్తి నరసింహావతారమెత్తిన పవిత్ర దినం.","Vat Savitri Vrat":"మర్రి చెట్టును పూజిస్తూ సతీ సావిత్రి పాతివ్రత్యాన్ని స్మరించే సౌభాగ్య వ్రతం.","Jagannath Rath Yatra":"పూరీలో జగన్నాథుడు, బలభద్రుడు, సుభద్రల దివ్య రథోత్సవ యాత్ర.","Varalakshmi Vratam":"సకల సంపదలు, సౌభాగ్యాల కోసం వరలక్ష్మీ దేవిని పూజించే ప్రసిద్ధ శ్రావణ వ్రతం.","Krishna Janmashtami":"శ్రీకృష్ణ పరమాత్మ జన్మదినం, ఉట్టి కొట్టడం మరియు భజనలతో సంబరం.","Hartalika Teej":"శివపార్వతుల అనుగ్రహం కోసం మహిళలు ఆచరించే ఉపవాస వ్రతం.","Vishwakarma Puja":"సృష్టికర్త మరియు శిల్పకళా బ్రహ్మ అయిన విశ్వకర్మను గౌరవించే దినం.","Durga Puja":"మహిషాసురమర్దిని అయిన దుర్గామాత విజయానికి ప్రతీకగా జరిగే శరదృతువు పండుగ.","Govardhan Puja":"ఇంద్రుని గర్వాన్ని అణచి గోవర్ధన గిరిని ఎత్తిన శ్రీకృష్ణుని లీలను స్మరించే పూజ.","Bhai Dooj":"సోదర సోదరీమణుల మధ్య ఉన్న ప్రేమానుబంధాన్ని బలపరిచే సంప్రదాయ పండుగ.","Karthigai Deepam":"జ్యోతిస్వరూపుడైన పరమశివుడిని ఆరాధిస్తూ వెలిగించే తమిళ దీపోత్సవం.","Vaikuntha Ekadashi":"వైకుంఠ ద్వారాలు తెరుచుకునే పవిత్ర దినం, శ్రీమహావిష్ణువు ఉత్తరద్వార దర్శనం.","Bathukamma":"తెలంగాణ సంస్కృతి, ప్రకృతి మరియు వివిధ రకాల పూలతో గౌరీదేవిని పూజించే పూల పండుగ.","Vishu":"కేరళ నూతన సంవత్సరం, ఉదయాన్నే విష్ణువు ప్రతిమను మంగళకరంగా దర్శించే విషుక్కణి.","Bihu":"అస్సాం సంస్కృతి, పంటల చక్రం మరియు రుతువుల మార్పును సూచించే నృత్య పండుగ.","Bonalu":"తెలంగాణలో గ్రామదేవత అయిన మహాంకాళి అమ్మవారికి నైవేద్యం సమర్పించే ఆషాఢ జాతర.","Karthika Purnima":"కార్తీక మాసపు పౌర్ణమి, నదీ స్నానాలు, దీపారాధనలు మరియు శివకేశవుల ఆరాధన.","Shigmo":"గోవా సంస్కృతిలో వసంత రుతువు రాకను సూచించే జానపద రంగుల పండుగ.","Epiphany":"జ్ఞానులకు బాలయేసు దర్శనమిచ్చిన సంఘటనను స్మరించే క్రైస్తవ పండుగ.","Ash Wednesday":"లెంట్ ఉపవాస దినాల ప్రారంభాన్ని సూచించే పశ్చాత్తాప దినం.","Palm Sunday":"ఏసుక్రీస్తు జెరూసలేం నగర ప్రవేశాన్ని కొబ్బరి మట్టలతో స్వాగతించిన జ్ఞాపకార్థ దినం.","Maundy Thursday":"ఏసుక్రీస్తు శిష్యులతో చేసిన చివరి విందు మరియు పాదాలు కడిగిన సంఘటనను స్మరించే దినం.","Holy Saturday":"సిలువ మరణం తర్వాత మరియు పునరుత్థానానికి ముందు రోజు ప్రార్థనా దినం.","Easter Sunday":"ఏసుక్రీస్తు మరణాన్ని జయించి సజీవుడై లేచిన మహోన్నత ఆనంద దినం.","Ascension of Jesus":"పునరుత్థానుడైన ఏసుక్రీస్తు పరలోకానికి ఆరోహణమైన సంఘటన జ్ఞాపకార్థం.","Trinity Sunday":"తండ్రి, కుమార, పరిశుద్ధాత్మ అనే త్రియేక దేవుని మర్మమును ధ్యానించే దినం.","Feast of the Assumption":"పరిశుద్ధ మరియమాత శరీరధారియై స్వర్గానికి కొనిపోబడిన పవిత్ర పండుగ.","All Saints' Day":"తెలిసిన మరియు తెలియని సర్వ క్రైస్తవ పునీతుల గౌరవార్థం జరుపుకునే దినం.","All Souls' Day":"మరణించిన విశ్వాసుల ఆత్మశాంతి కోసం ప్రార్థించే ప్రత్యేక పవిత్ర దినం.","Feast of the Annunciation":"గాబ్రియేలు దూత మరియమాతకు ఏసుక్రీస్తు జనన శుభవార్త తెలిపిన జ్ఞాపకార్థ దినం.","Feast of the Transfiguration":"కొండపై శిష్యుల ఎదుట ఏసుక్రీస్తు దివ్య తేజస్సుతో రూపాంతరం చెందిన అద్భుతం.","Feast of Saint Thomas the Apostle":"భారతదేశానికి సువార్తను తీసుకొచ్చిన తోమా అపొస్తలుని స్మృతి దినం.","Advent":"క్రిస్మస్ పండుగకు ముందు నాలుగు వారాల ఆధ్యాత్మిక సిద్ధపాటు మరియు నిరీక్షణ కాలం.","Feast of the Immaculate Conception":"మరియమాత ఎటువంటి జన్మపాపం లేకుండా గర్భం దాల్చిన పవిత్ర విశ్వాస దినం.","Corpus Christi":"పరిశుద్ధ ప్రసాదంలో ఏసుక్రీస్తు నిజమైన శరీర-రక్తాల ఉనికిని ఆరాధించే పండుగ.","Laylat al-Qadr":"పవిత్ర ఖురాన్ అవతరించిన వెయ్యి నెలల కన్నా శ్రేష్ఠమైన దివ్య రాత్రి.","Hajj":"ఇస్లాం ఐదు స్తంభాలలో ఒకటైన మక్కా పవిత్ర కాబా దర్శన వార్షిక తీర్థయాత్ర.","Islamic New Year — 1 Muharram":"హిజ్రీ శకం నూతన సంవత్సరపు తొలి రోజు పవిత్ర ప్రారంభం.","Ashura":"మొహర్రం పదవ రోజు, కర్బలా అమరవీరుల త్యాగాన్ని స్మరించే పవిత్ర దినం.","Mawlid al-Nabi":"మహమ్మద్ ప్రవక్త జన్మదిన పురస్కారంగా జరుపుకునే పవిత్ర దినం.","Isra and Mi'raj":"మహమ్మద్ ప్రవక్త మక్కా నుండి జెరూసలేం మరియు ఆకాశాలకు చేసిన రాత్రి ప్రయాణం.","Nuzul al-Qur'an":"రమదాన్ మాసంలో పవిత్ర ఖురాన్ అవతరించిన రోజును స్మరించుకునే దినం.","Feast of the Epiphany":"లోకరక్షకుడైన ఏసుక్రీస్తు సర్వలోకానికి ప్రత్యక్షమైన పవిత్ర దినం."},"Hindi":{"Diwali":"दीपावली भारत के सबसे प्रमुख त्योहारों में से एक है, जो अंधकार पर प्रकाश और बुराई पर अच्छाई की विजय का प्रतीक है।","Pongal":"पोंगल एक प्रमुख तमिल फसल उत्सव है जो सूर्य देव, प्रकृति, किसानों और मवेशियों के प्रति कृतज्ञता व्यक्त करता है।","Holi":"होली रंगों और वसंत ऋतु का उल्लासमय हिन्दू त्योहार है, जो प्रह्लाद और होलिका की कथा से भी जुड़ा है।","Maha Shivaratri":"महाशिवरात्रि भगवान शिव को समर्पित एक महान रात्रि है, जिसमें भक्त उपवास, प्रार्थना और रात्रि जागरण करते हैं।","Eid-ul-Fitr":"रमज़ान के पवित्र महीने के रोज़े पूरे होने की खुशी में मनाया जाने वाला प्रमुख इस्लामी त्योहार।","Ramadan":"इस्लामी कैलेंडर का नौवां पवित्र महीना, जिसमें मुसलमान रोज़ा, नमाज़ और दान-पुण्य करते हैं।","Eid-ul-Zuha (Eid-ul-Azha)":"हज़रत इब्राहिम के बलिदान और अल्लाह के प्रति आज्ञाकारिता की याद में मनाया जाने वाला त्योहार।","Milad-Un-Nabi":"पैगंबर मुहम्मद के जन्मदिवस की स्मृति में श्रद्धापूर्वक मनाया जाने वाला पावन पर्व।","Muharram":"इस्लामी नववर्ष का पहला महीना और कर्बला में हज़रत इमाम हुसैन की शहादत की याद का दिन।","Shab-e-Barat":"प्रार्थना, क्षमा और अल्लाह की रहमत की रात के रूप में मनाई जाने वाली पवित्र रात।","Shab-e-Miraj":"पैगंबर मुहम्मद की पावन आध्यात्मिक यात्रा (इस्रा और मेराज) की स्मृति का पर्व।","Christmas":"प्रभु ईसा मसीह के जन्म की स्मृति में विश्वभर में हर्षोल्लास से मनाया जाने वाला पर्व।","Easter":"प्रभु ईसा मसीह के पुनरुत्थान की स्मृति में मनाया जाने वाला ईसाई धर्म का केंद्रीय पर्व।","Good Friday":"मानव कल्याण के लिए प्रभु ईसा मसीह के क्रूस पर बलिदान की याद में मनाया जाने वाला पवित्र दिन।","Pentecost":"प्रेरितों पर पवित्र आत्मा के अवतरण की स्मृति में मनाया जाने वाला ईसाई पर्व।","Eid al-Fitr":"रमज़ान के रोज़े पूर्ण होने पर मनाया जाने वाला उल्लासमय त्योहार।","Eid al-Adha":"हज यात्रा के दौरान त्याग और समर्पण की याद में मनाया जाने वाला पर्व।","Islamic New Year":"हिजरी चंद्र कैलेंडर की शुरुआत का प्रतीक पवित्र दिन।","Navratri":"मां दुर्गा और शक्ति की उपासना का नौ रातों का पावन महापर्व।","Ganesh Chaturthi":"विघ्नहर्ता भगवान गणेश के जन्मोत्सव का पावन और भव्य त्योहार।","Janmashtami":"भगवान श्रीकृष्ण के जन्मोत्सव पर मनाया जाने वाला पावन पर्व।","Rama Navami":"मर्यादा पुरुषोत्तम भगवान श्री राम के अवतरण दिवस का पावन पर्व।","Raksha Bandhan":"भाई-बहन के अटूट प्रेम और परस्पर रक्षा के संकल्प का पावन त्योहार।","Dussehra":"अधर्म पर धर्म और बुराई पर अच्छाई की विजय का प्रतीक महापर्व।","Vasant Panchami":"विद्या की देवी मां सरस्वती की पूजा और वसंत के आगमन का पर्व।","Guru Purnima":"अज्ञान के अंधकार को दूर करने वाले गुरुओं के प्रति कृतज्ञता का दिन।","Onam":"केरल का प्रमुख फसल उत्सव और राजा बलि के स्वागत का सांस्कृतिक महापर्व।","Chhath Puja":"सूर्य देव और छठी मैया की उपासना का अत्यंत पवित्र और कठिन व्रत।","Karwa Chauth":"सुहागिन महिलाओं द्वारा पति की लंबी आयु और सुखद दांपत्य के लिए रखा जाने वाला व्रत।","Akshaya Tritiya":"अक्षय पुण्य, समृद्धि और नए कार्यों के शुभारंभ के लिए अत्यंत शुभ दिन।","Makara Sankranti":"सूर्य के मकर राशि में प्रवेश और नई फसल की खुशी का पावन पर्व।","Makar Sankranti":"सूर्य के मकर राशि में प्रवेश और नई फसल की खुशी का पावन पर्व।","Nag Panchami":"नाग देवता के पूजन और प्रकृति के प्रति सम्मान का पारंपरिक पर्व।","Sharad Purnima":"मां लक्ष्मी के आगमन और चंद्रमा की अमृतमयी किरणों का पावन पर्व।","Dhanteras":"आरोग्य के देवता धन्वंतरि और मां लक्ष्मी की आराधना का दिन।","Hanuman Jayanti":"अतुलित बल और रामभक्ति के प्रतीक श्री हनुमान का पावन जन्मोत्सव।","Ugadi":"दक्कन क्षेत्र का पारंपरिक नववर्ष, जीवन के छह स्वादों के समन्वय का प्रतीक।","Gudi Padwa":"महाराष्ट्र का पारंपरिक नववर्ष और विजय पताका (गुड़ी) फहराने का पावन दिन।","Thaipusam":"भगवान मुरुगन को समर्पित तमिल श्रद्धालुओं का आस्था और कावड़ पर्व।","Narasimha Jayanti":"भक्त प्रह्लाद की रक्षा हेतु भगवान विष्णु के नृसिंह अवतार का दिवस।","Vat Savitri Vrat":"वट वृक्ष की पूजा और सावित्री के त्याग से जुड़ा अखंड सौभाग्य का व्रत।","Jagannath Rath Yatra":"पुरी में भगवान जगन्नाथ, बलभद्र और सुभद्रा जी की भव्य रथयात्रा।","Varalakshmi Vratam":"सुख, समृद्धि और सौभाग्य के लिए देवी वरलक्ष्मी की विशेष पूजा।","Krishna Janmashtami":"भगवान श्रीकृष्ण के जन्म की मध्यरात्रि का पावन उत्सव।","Hartalika Teej":"भगवान शिव और मां पार्वती के मिलन की स्मृति में सुहाग का कठिन व्रत।","Vishwakarma Puja":"सृजन व वास्तुकला के देव विश्वकर्मा और औजारों-मशीनों के पूजन का दिन।","Durga Puja":"मां दुर्गा की महिषासुर पर विजय का भव्य और उल्लासमय महापर्व।","Govardhan Puja":"इंद्र के अहंकार को तोड़कर गोवर्धन पर्वत उठाने वाले श्रीकृष्ण की लीला का पर्व।","Bhai Dooj":"बहन द्वारा भाई के माथे पर तिलक लगाकर उसकी लंबी आयु की कामना का पर्व।","Karthigai Deepam":"भगवान शिव के ज्योति स्वरूप के सम्मान में दीपों का दिव्य तमिल त्योहार।","Vaikuntha Ekadashi":"वैकुंठ के कपाट खुलने का दिन, भगवान विष्णु की विशेष आराधना का पर्व।","Bathukamma":"तेलंगाना का प्रसिद्ध पुष्प उत्सव, जिसमें प्रकृति और मां गौरी की पूजा होती है।","Vishu":"केरल का पारंपरिक नववर्ष, जिसमें सुबह मंगल दर्शन (विषुकणी) की परंपरा है।","Bihu":"असम का मुख्य सांस्कृतिक और फसल उत्सव, जो ऋतु परिवर्तन का स्वागत करता है।","Bonalu":"तेलंगाना का पारंपरिक लोक उत्सव, जिसमें मां महाकाली को भोग अर्पित किया जाता है।","Karthika Purnima":"कार्तिक मास की पावन पूर्णिमा, दीपदान और पवित्र नदियों में स्नान का महापर्व।","Shigmo":"गोवा का पारंपरिक वसंत उत्सव, जिसमें लोकनृत्य और रंगों की धूम होती है।","Epiphany":"बालक ईसा मसीह के संसार के समक्ष प्रकट होने की स्मृति का पावन दिन।","Ash Wednesday":"ईसाई धर्म में 40 दिनों के उपवास काल (लेंट) की शुरुआत का दिन।","Palm Sunday":"यरूशलेम में ईसा मसीह के विजयी प्रवेश की स्मृति का पवित्र रविवार।","Maundy Thursday":"प्रभु ईसा मसीह के अंतिम भोज (लास्ट सपर) की स्मृति का पवित्र दिन।","Holy Saturday":"ईसा मसीह के क्रूस पर बलिदान और पुनरुत्थान के बीच का ध्यान और प्रार्थना का दिन।","Easter Sunday":"ईसा मसीह के पुनरुत्थान की खुशी में मनाया जाने वाला सबसे बड़ा पावन दिन।","Ascension of Jesus":"प्रभु ईसा मसीह के धरती से स्वर्गारोहण की स्मृति का पावन दिन।","Trinity Sunday":"पिता, पुत्र और पवित्र आत्मा के त्रित्व रूप की आराधना का दिन।","Feast of the Assumption":"माता मरियम के सदेह स्वर्गारोहण के उपलक्ष्य में मनाया जाने वाला पर्व।","All Saints' Day":"ईश्वर के सभी ज्ञात और अज्ञात संतों के सम्मान में मनाया जाने वाला पर्व।","All Souls' Day":"दिवंगत आत्माओं की शांति और मुक्ति के लिए प्रार्थना का दिन।","Feast of the Annunciation":"स्वर्गदूत द्वारा माता मरियम को ईसा मसीह के जन्म की शुभ सूचना का दिन।","Feast of the Transfiguration":"पर्वत पर शिष्यों के समक्ष ईसा मसीह के दिव्य तेज में रूपांतरित होने का स्मरण।","Feast of Saint Thomas the Apostle":"भारत में मसीही संदेश लाने वाले प्रेरित संत थॉमस का पावन पर्व।","Advent":"क्रिसमस से पहले चार सप्ताह की तैयारी, आशा और प्रार्थना का काल।","Feast of the Immaculate Conception":"माता मरियम के निष्कलंक और पापरहित गर्भाधान का पावन कैथोलिक पर्व।","Corpus Christi":"परमप्रसाद में ईसा मसीह की वास्तविक उपस्थिति का उत्सव।","Laylat al-Qadr":"पवित्र क़ुरआन के अवतरण की रात, जो हज़ार महीनों से अधिक उत्तम मानी जाती है।","Hajj":"इस्लाम के पांच बुनियादी स्तंभों में शामिल मक्का की वार्षिक पवित्र तीर्थयात्रा।","Islamic New Year — 1 Muharram":"हिजरी संवत के नए वर्ष का पहला दिन और पवित्र शुरुआत।","Ashura":"मोहर्रम की 10वीं तारीख, सच्चाई और कर्बला के बलिदान की याद का दिन।","Mawlid al-Nabi":"पैगंबर हज़रत मुहम्मद के जन्मदिवस की स्मृति का पावन दिन।","Isra and Mi'raj":"पैगंबर मुहम्मद की मक्का से यरूशलेम और स्वर्ग की दिव्य रात्रि यात्रा।","Nuzul al-Qur'an":"रमज़ान के महीने में पवित्र क़ुरआन के अवतरण की स्मृति का दिन।","Feast of the Epiphany":"संसार के उद्धारकर्ता ईसा मसीह के प्रकटीकरण का महान दिवस।"},"Tamil":{"Diwali":"தீபாவளி என்பது இருளின் மீது ஒளியின் வெற்றியையும், தீமையின் மீது நன்மையின் வெற்றியையும் கொண்டாடும் ஒளித் திருவிழா ஆகும்.","Pongal":"பொங்கல் என்பது விவசாயம், சூரியன், இயற்கை மற்றும் கால்நடைகளுக்கு நன்றி செலுத்தும் ஒரு முக்கிய தமிழ் அறுவடைத் திருவிழா ஆகும்.","Holi":"ஹோலி என்பது வண்ணங்கள் மற்றும் வசந்த காலத்தின் வருகையைக் கொண்டாடும் ஒரு மகிழ்ச்சியான இந்து பண்டிகையாகும்.","Maha Shivaratri":"மகா சிவராத்திரி என்பது சிவபெருமானுக்கு அர்ப்பணிக்கப்பட்ட புனித இரவு, இதில் பக்தர்கள் விரதமிருந்து பிரார்த்தனை செய்கின்றனர்.","Eid-ul-Fitr":"புனித ரமலான் மாதத்தின் நோன்பு நிறைவடைவதைக் குறிக்கும் மகிழ்ச்சியான பண்டிகை.","Ramadan":"இஸ்லாமிய ஆண்டின் ஒன்பதாவது புனித மாதம், நோன்பு, பிரார்த்தனை மற்றும் ஈகைக்கு அர்ப்பணிக்கப்பட்டது.","Eid-ul-Zuha (Eid-ul-Azha)":"இறைவனின் கட்டளைக்காக இப்ராஹீம் நபியின் தியாகத்தை நினைவுகூரும் தியாகத் திருநாள்.","Milad-Un-Nabi":"முகமது நபியின் பிறந்த நாளை நினைவுகூரும் புனிதமான கொண்டாட்டம்.","Muharram":"இஸ்லாமிய புத்தாண்டின் தொடக்கம் மற்றும் இமாம் ஹுசைனின் தியாகத்தை நினைவுகூரும் மாதம்.","Shab-e-Barat":"பாவமன்னிப்பு மற்றும் நற்காரியங்களுக்கான புனிதமான பிரார்த்தனை இரவு.","Shab-e-Miraj":"முகமது நபியின் விண்ணுலகப் பயணத்தை நினைவுகூரும் ஆன்மீக இரவு.","Christmas":"இயேசு கிறிஸ்துவின் பிறப்பைக் கொண்டாடும் ஒரு முக்கிய உலகளாவிய கிறிஸ்தவப் பெருவிழா.","Easter":"இயேசு கிறிஸ்துவின் உயிர்த்தெழுதலைக் கொண்டாடும் கிறிஸ்தவத்தின் மையத் திருவிழா.","Good Friday":"இயேசு கிறிஸ்துவின் சிலுவை மரணத்தை நினைவுகூரும் புனிதமான தியான மற்றும் பிரார்த்தனை நாள்.","Pentecost":"சீடர்கள் மீது தூய ஆவி இறங்கி வந்ததை நினைவுகூரும் கிறிஸ்தவ திருநாள்.","Eid al-Fitr":"ரமலான் நோன்பு முடிந்ததும் கொண்டாடப்படும் மகிழ்ச்சியான பெருநாள்.","Eid al-Adha":"ஹஜ் பயணத்தின் போது கொண்டாடப்படும் தியாகப் பெருநாள்.","Islamic New Year":"ஹிஜ்ரி சந்திர நாட்காட்டியின் புதிய ஆண்டின் தொடக்கம்.","Navratri":"சக்தி தேவியைப் போற்றும் ஒன்பது இரவு பக்தித் திருவிழா.","Ganesh Chaturthi":"முழுமுதற் கடவுளான விநாயகப் பெருமானின் அவதாரத் திருநாள்.","Janmashtami":"கண்ணன் அவதரித்த திருநாளைக் கொண்டாடும் பக்தித் திருவிழா.","Rama Navami":"ஸ்ரீ ராமரின் அவதார தினத்தைக் கொண்டாடும் புனித நாள்.","Raksha Bandhan":"சகோதர-சகோதரி பாசத்தையும் பாதுகாப்பையும் போற்றும் திருவிழா.","Dussehra":"தீமையின் வீழ்ச்சியையும் நன்மையின் வெற்றியையும் குறிக்கும் விஜயதசமி.","Vasant Panchami":"சரஸ்வதி தேவி வழிபாடு மற்றும் வசந்த கால வரவேற்பு நாள்.","Guru Purnima":"ஞானம் புகட்டும் குருவை போற்றி வணங்கும் பௌர்ணமி திருநாள்.","Onam":"கேரளத்தின் பாரம்பரிய அறுவடைத் திருநாள் மற்றும் மகாபலி வரவேற்பு விழா.","Chhath Puja":"சூரிய பகவானையும் ஆறுகளையும் போற்றும் புனிதமான விரத வழிபாடு.","Karwa Chauth":"கணவரின் நீண்ட ஆயுளுக்காக பெண்கள் மேற்கொள்ளும் பாரம்பரிய விரதம்.","Akshaya Tritiya":"அழியாத நன்மையும் தொடர் வளமும் தரும் மங்கலகரமான புண்ணிய நாள்.","Makara Sankranti":"சூரியன் தனுசு ராசியிலிருந்து மகர ராசிக்கு நகரும் சுப திருநாள்.","Makar Sankranti":"சூரியன் மகர ராசியில் நுழையும் புண்ணிய காலம்.","Nag Panchami":"நாக தேவதைகளை வணங்கி பால் நைவேத்தியம் செய்யும் புனித நாள்.","Sharad Purnima":"அமுத நிலவு இரவில் லட்சுமி தேவியை வழிபடும் சிறப்பான நாள்.","Dhanteras":"ஆரோக்கியமும் செல்வமும் பெருக இறைவனை வணங்கும் மங்கல நாள்.","Hanuman Jayanti":"வீரமும் பக்தியும் நிறைந்த ஆஞ்சநேயரின் புனித ஜெயந்தி திருநாள்.","Ugadi":"தெலுங்கு மற்றும் கன்னட மக்களின் புத்தாண்டு மற்றும் அறுசுவை பச்சடி தினம்.","Gudi Padwa":"மகாராஷ்டிர மக்களின் பாரம்பரிய புத்தாண்டு கொண்டாட்டம்.","Thaipusam":"முருகப்பெருமானுக்கு காவடி எடுத்து பக்தர்கள் நேர்த்திக்கடன் செலுத்தும் திருவிழா.","Narasimha Jayanti":"பக்த பிரகலாதனை காக்க நரசிம்மர் அவதரித்த திவ்ய திருநாள்.","Vat Savitri Vrat":"ஆலமரத்தை சுற்றி வந்து பெண்கள் மாங்கல்ய பலத்துக்காக இயற்றும் நோன்பு.","Jagannath Rath Yatra":"பூரி ஜெகந்நாதரின் பிரசித்தி பெற்ற தேர் திருவிழா.","Varalakshmi Vratam":"சகல ஐஸ்வர்யங்களும் பெற வரலட்சுமி தாயாரை வணங்கும் விரதம்.","Krishna Janmashtami":"கண்ணன் அவதரித்த நன்னாளை போற்றும் பக்தித் திருநாள்.","Hartalika Teej":"சிவன்-பார்வதி அருளுக்காக பெண்கள் கடைபிடிக்கும் விரதம்.","Vishwakarma Puja":"கலை மற்றும் தொழிற்கருவிகளை போற்றி வழிபடும் தெய்வீக நாள்.","Durga Puja":"துர்கா தேவியின் வெற்றியைக் கொண்டாடும் வரலாற்று சிறப்புமிக்க திருவிழா.","Govardhan Puja":"கோவர்த்தன மலையை தூக்கி மக்களை காத்த கண்ணனை போற்றும் பூஜை.","Bhai Dooj":"சகோதர உறவை போற்றும் இனிமையான பண்டிகை.","Karthigai Deepam":"திருவண்ணாமலையில் ஜோதி வடிவாக இறைவன் திகழும் மகா தீபத் திருவிழா.","Vaikuntha Ekadashi":"சொர்க்க வாசல் திறக்கப்பட்டு பெருமாளை தரிசிக்கும் உன்னத திருநாள்.","Bathukamma":"இயற்கை மலர்களால் அலங்கரித்து தாயை வழிபடும் தெலங்கானா மலர்த் திருவிழா.","Vishu":"கேரள பாரம்பரிய புத்தாண்டு மற்றும் மங்கலப் பொருட்கள் தரிசன நன்னாள்.","Bihu":"அசாமிய மக்களின் பருவக்கால மற்றும் அறுவடைத் திருவிழா.","Bonalu":"தெலங்கானாவில் அம்மனுக்கு நைவேத்தியம் படைக்கும் பக்தித் திருவிழா.","Karthika Purnima":"தீபங்கள் ஏற்றி சிவபெருமானையும் விஷ்ணுவையும் வணங்கும் புனித நாள்.","Shigmo":"கோவாவின் பாரம்பரிய வசந்த கால வண்ணமயமான திருவிழா.","Epiphany":"ஞானிகளுக்கு குழந்தை இயேசு காட்சியளித்ததை கொண்டாடும் திருநாள்.","Ash Wednesday":"கிறிஸ்தவ தவக்காலத்தின் தொடக்கத்தைக் குறிக்கும் தவ நாள்.","Palm Sunday":"இயேசு எருசலேமுக்குள் நுழைந்ததை நினைவுகூரும் புனித நாள்.","Maundy Thursday":"இயேசுவின் இறுதி இராவுணவு மற்றும் சீடர்களின் பாதங்களை கழுவிய நாள்.","Holy Saturday":"சிலுவை மரணத்திற்குப் பின் உயிர்த்தெழுதலை எதிர்நோக்கும் நாள்.","Easter Sunday":"இயேசுவின் உயிர்த்தெழுதலைக் கொண்டாடும் மாபெரும் திருநாள்.","Ascension of Jesus":"இயேசு கிறிஸ்து விண்ணகத்திற்கு எழுந்தருளியதை போற்றும் நாள்.","Trinity Sunday":"தந்தை, மகன், தூய ஆவி என்ற தத்துவத்தை தியானிக்கும் திருநாள்.","Feast of the Assumption":"அன்னை மரியாள் விண்ணகத்திற்கு எடுத்துக்கொள்ளப்பட்ட திருநாள்.","All Saints' Day":"தெரிந்த மற்றும் தெரியாத அனைத்து புனிதர்களையும் போற்றும் நாள்.","All Souls' Day":"மறைந்த விசுவாசிகளின் ஆன்மா இளைப்பாறுதலுக்கான நாள்.","Feast of the Annunciation":"வானதூதர் கபிரியேல் அன்னை மரியாளுக்கு நற்செய்தி அறிவித்த நாள்.","Feast of the Transfiguration":"மலையில் இயேசு சீடர்கள் முன் ஒளிமயமாக மறுரூபமான நிகழ்ச்சி.","Feast of Saint Thomas the Apostle":"இந்தியாவில் நற்செய்தி அறிவித்த திருத்தூதர் தோமையாரின் விழா.","Advent":"கிறிஸ்துமஸ் பெருவிழாவிற்கு முந்தைய நான்கு வார தயாரிப்பு காலம்.","Feast of the Immaculate Conception":"அன்னை மரியாள் பாவக்கறையின்றி கருவுற்றதை போற்றும் பெருவிழா.","Corpus Christi":"நற்கருணையில் இயேசுவின் திருவுடலையும் திருஇரத்தத்தையும் போற்றும் விழா.","Laylat al-Qadr":"புனித குர்ஆன் அருளப்பட்ட ஆயிரம் மாதங்களை விட சிறந்த அருள் இரவு.","Hajj":"இஸ்லாத்தின் கடமைகளில் ஒன்றான மக்காவுக்கான வருடாந்திர புனிதப் பயணம்.","Islamic New Year — 1 Muharram":"புதிய ஹிஜ்ரி ஆண்டின் முதல் நாள் தொடக்கம்.","Ashura":"மொஹர்ரம் பத்தாம் நாளில் கடைபிடிக்கப்படும் புனித தியாக தினம்.","Mawlid al-Nabi":"முகமது நபியின் புனித பிறந்த நாள் விழா.","Isra and Mi'raj":"முகமது நபியின் மக்கா முதல் ஜெருசலேம் மற்றும் விண்ணகப் பயணம்.","Nuzul al-Qur'an":"புனித குர்ஆன் அருளப்பட்ட நாளை நினைவுகூரும் சிறப்பு நாள்.","Feast of the Epiphany":"இயேசு கிறிஸ்து உலகிற்கு வெளிப்படுத்தப்பட்ட பெருவிழா."}};

const t = s => {
  if (!s || state.lang === 'English') return s;
  const d = DICT[state.lang];
  if (!d) return s;
  if (d[s] !== undefined) return d[s];
  const tr = String(s).trim();
  if (d[tr] !== undefined) return d[tr];
  return s;
};

function getLocalizedFestivalDesc(festName, defaultDesc) {
  if (!festName || state.lang === 'English') return defaultDesc || '';
  const d = FEST_DESCS[state.lang];
  if (d && d[festName]) return d[festName];
  return t(defaultDesc) || defaultDesc || '';
}

function setLang(v) {
  state.lang = v;
  localStorage.setItem('ff_lang', v);
  
  // Clean up any legacy third-party translation cookies immediately
  try {
    const host = window.location.hostname;
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + host + ';';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + host + ';';
  } catch(e) {}

  // Synchronously re-render entire view in fraction of a millisecond
  route();
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
async function api(path, opt = {}) {
  const h = { 'Content-Type': 'application/json', ...(opt.headers || {}) };
  if (state.token) h.Authorization = 'Bearer ' + state.token;
  const r = await fetch(path, { ...opt, headers: h });
  const d = await r.json().catch(() => ({ error: 'Invalid response' }));
  if (!r.ok) throw Error(d.error || 'Request failed');
  return d;
}

function openAdminLogin(e) {
  if (e) e.preventDefault();
  if (location.hash === '#/admin') {
    if (!state.user || state.user.role !== 'admin') {
      authPage('login');
    } else {
      admin();
    }
  } else {
    location.hash = '#/admin';
  }
}

function openCmsDashboard(tab = 'festivals') {
  if (typeof closeAdminModal === 'function') closeAdminModal();
  if (typeof setAdminTab === 'function') adminCurrentTab = tab;
  if (location.hash === '#/admin') {
    admin();
  } else {
    location.hash = '#/admin';
  }
}

function viewFestivalPublic(event, id) {
  if (event && (event.ctrlKey || event.metaKey || event.button === 1)) {
    window.open('/#/festival/' + id, '_blank');
    event.preventDefault();
    return;
  }
  if (event) event.preventDefault();
  if (typeof closeAdminModal === 'function') closeAdminModal();
  location.hash = '#/festival/' + id;
}

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    location.hash = '#/';
  }
}

function nav() {
  const isAdmActive = location.hash === '#/admin';
  const isAuthPage = location.hash === '#/login' || location.hash === '#/register' || (location.hash === '#/admin' && (!state.user || state.user.role !== 'admin'));
  const isLanding = !location.hash || location.hash === '#/' || location.hash === '#';

  const backBtnHtml = !isLanding ? `
   <button type="button" class="globalBackBtn" onclick="goBack()" title="${t('Navigate to previous page')}" aria-label="${t('Go Back')}">
    <span class="backArrow">←</span>
    <span>${t('Back')}</span>
   </button>
  ` : '';

  if (isAuthPage) {
    return `<header class="nav"><div class="container navin" style="justify-content:flex-start;"><div style="display:flex; align-items:center; gap:14px;">${backBtnHtml}<a class="brand" href="#/"><span class="brandmark">✦</span><span>Faith<span>Fest</span></span></a></div></div></header>`;
  }
  return `<header class="nav"><div class="container navin"><div style="display:flex; align-items:center; gap:14px;">${backBtnHtml}<a class="brand" href="#/"><span class="brandmark">✦</span><span>Faith<span>Fest</span></span></a></div><nav><a href="#/explore">${t('Explore')}</a><a href="#/calendar">${t('Calendar')}</a><a href="#/map">${t('Map')}</a><a href="#/compare">${t('Compare')}</a><a href="#/ai-guide" class="aiGuideNavLink ${location.hash === '#/ai-guide' ? 'active' : ''}">✨ ${t('AI Guide')}</a>${state.user ? `<a href="#/favorites">${t('Saved')}</a>` : ''}${state.user?.role === 'admin' ? `<a href="#/admin" onclick="openCmsDashboard('festivals');event.preventDefault();" class="cmsNavBtn ${isAdmActive ? 'active' : ''}" title="Admin CMS Portal"><span class="cmsNavIcon">✦</span> CMS</a>` : ''}</nav><div class="navActions"><select class="notranslate navLangSelect" onchange="setLang(this.value)" aria-label="Language"><option ${state.lang === 'English' ? 'selected' : ''}>English</option><option ${state.lang === 'Tamil' ? 'selected' : ''}>Tamil</option><option ${state.lang === 'Telugu' ? 'selected' : ''}>Telugu</option><option ${state.lang === 'Hindi' ? 'selected' : ''}>Hindi</option></select>${state.user ? `<span style="font-size:13px;color:var(--muted);font-weight:600;">${esc(state.user.name)}</span><button class="iconBtn" onclick="logout()" title="Logout">↪</button>` : `<a class="btn primary sm" href="#/login">${t('Login')}</a>`}</div></div></header>`;
}

function layout(content, cls = '') {
  app.innerHTML = nav() + `<main class="container ${cls}">${content}</main><footer><div class="container foot"><b>FaithFest</b><span>${t('Interactive Religious Festival & Cultural Heritage Explorer')}</span><span>${t('Educational • Neutral • Source-based')}</span></div></footer>`;
  window.scrollTo(0, 0);
}

function toast(m) {
  const el = document.createElement('div');
  el.className = 'toast';
  el.textContent = m;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2600);
}

function logout(){state.user=null;state.token='';localStorage.removeItem('ff_user');localStorage.removeItem('ff_token');location.hash='#/';}
function religionCard(r,i){
  return `<a class="religionHero religion-${i}" href="#/religion/${r.id}"><div class="religionGlow">${r.icon}</div><div><span class="eyebrow">0${i+1} · ${t('EXPLORE')}</span><h2>${esc(t(r.name))}</h2><p>${esc(t(r.description))}</p><span class="arrow">${t('Explore')} ${esc(t(r.name))} →</span></div></a>`;
}
function fcard(f){
  const desc = getLocalizedFestivalDesc(f.name, f.description);
  return `<a class="festivalCard" href="#/festival/${f.id}"><div class="fcTop"><span class="tag">${esc(t(f.category))}</span><span>${esc(t(f.typical_date||'Date varies'))}</span></div><div class="fcIcon">${esc(f.religion_icon||'✦')}</div><h3>${esc(t(f.name))}</h3><p>${esc(desc||t('Festival information'))}</p><div class="fcMeta"><span>${esc(t(f.region||'Multiple regions'))}</span><span>${t('Explore')} →</span></div></a>`;
}
async function landing(){
  let rels = [{ id: 1, name: 'Hinduism' }, { id: 2, name: 'Islam' }, { id: 3, name: 'Christianity' }];
  try {
    const fetched = await api('/api/religions');
    if (Array.isArray(fetched) && fetched.length > 0) rels = fetched;
  } catch(e) {}
  app.innerHTML=`<main style="position:relative; overflow-x:hidden; background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('/bg.jpg') center/cover no-repeat; min-height: 100vh; display:flex; align-items:center; width:100%;"><div style="position:absolute; top:2rem; right:2rem; z-index:100"><select class="notranslate" onchange="setLang(this.value)" aria-label="Language" style="padding:0.75rem 1.5rem; border-radius:30px; border:1px solid rgba(255,255,255,0.3); background:rgba(0,0,0,0.3); color:#fff; backdrop-filter:blur(10px); font-weight:600; font-family:inherit; cursor:pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: all 0.2s ease;"><option style="color:#000" ${state.lang==='English'?'selected':''}>English</option><option style="color:#000" ${state.lang==='Tamil'?'selected':''}>Tamil</option><option style="color:#000" ${state.lang==='Telugu'?'selected':''}>Telugu</option><option style="color:#000" ${state.lang==='Hindi'?'selected':''}>Hindi</option></select></div><div style="max-width:1200px; margin:0 auto; width:100%; padding:0 2rem; position:relative;"><section class="hero" style="display:flex;align-items:center;position:relative"><div class="heroCopy" style="position:relative; z-index:10;"><span class="eyebrow" style="display:inline-block; padding:0.5rem 1rem; background:rgba(255,255,255,0.15); backdrop-filter:blur(8px); border-radius:20px; font-weight:700; font-size:0.85rem; letter-spacing:1px; margin-bottom:2rem; color:#fff; border:1px solid rgba(255,255,255,0.2);">${t('CULTURE · HISTORY · LEARNING')}</span><h1 style="font-size: clamp(3rem, 5vw, 4.5rem); line-height:1.1; font-weight:800; letter-spacing:-1.5px; margin:0 0 1.5rem 0; color:#fff; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">${t("Discover the stories behind the world's <em>festivals.</em>")}</h1><p style="font-size:1.25rem; line-height:1.6; color:#eee; max-width:600px; margin:0 0 2.5rem 0; text-shadow: 0 1px 4px rgba(0,0,0,0.4);">${t("Explore traditions, history, food, clothing, music, regional practices and important observances through one respectful digital heritage platform.")}</p><div class="heroActions" style="display:flex; gap:1.25rem; align-items:center; flex-wrap:wrap;"><a class="btn primary explorerHeroBtn" id="heroExplorerLoginBtn" href="#/login" style="padding:1rem 2.4rem; font-size:1.15rem; border-radius:50px; box-shadow: 0 10px 25px rgba(0,0,0,0.25); display:inline-flex; align-items:center; gap:0.5rem; background:#4338ca; color:#fff; border:none; text-decoration:none; cursor:pointer;">${t('Explorer login')} <span>→</span></a><a class="btn adminHeroBtn" id="heroAdminLoginBtn" href="#/admin" onclick="openAdminLogin(event)" style="padding:1rem 2.2rem; font-size:1.15rem; border-radius:50px; box-shadow: 0 10px 25px rgba(0,0,0,0.25); display:inline-flex; align-items:center; gap:0.6rem; background:rgba(255,255,255,0.18); color:#fff; border:1px solid rgba(255,255,255,0.45); backdrop-filter:blur(10px); text-decoration:none; font-weight:700; cursor:pointer;">🛡️ ${t('Admin login')} <span>→</span></a></div></div><div class="heroVisual" style="position:relative; z-index:1;"><div class="heroCardMain" style="background:rgba(255,255,255,0.1); backdrop-filter:blur(15px); border:1px solid rgba(255,255,255,0.2); color:#fff; box-shadow:0 20px 40px rgba(0,0,0,0.2);"><span style="color:rgba(255,255,255,0.7);">FAITHFEST</span><strong style="color:#fff;">${t('Explore.<br>Understand.<br>Respect.')}</strong><small style="color:rgba(255,255,255,0.7);">${t('Religious & cultural heritage explorer')}</small></div><div class="floatingCard" style="background:rgba(255,255,255,0.9); box-shadow:0 10px 30px rgba(0,0,0,0.2); border:none;"><b>${rels.length}</b><span style="color:#555;">${t('Religions')}</span></div></div></section></div></main>`;window.scrollTo(0,0)}
async function home(){
  const [rels,fs,cal]=await Promise.all([api('/api/religions'),api('/api/festivals'),api('/api/calendar?limit=8&upcoming=true')]);
  const sorted=ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean);
  layout(`<section class="section"><div class="sectionTitle"><div><span class="eyebrow">${t('CHOOSE A PATH')}</span><h2>${t('Explore by religion')}</h2></div><span class="muted">${t('Hinduism first · Islam second · Christianity third')}</span></div><div class="religionGrid">${sorted.map((r,i)=>religionCard(r,i)).join('')}</div></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">${t('CALENDAR')}</span><h2>${t('Upcoming & calendar data')}</h2></div><a class="textBtn" href="#/calendar">${t('Open calendar →')}</a></div><div class="calendarStrip">${cal.slice(0,5).map(x=>`<div class="calMini"><span>${esc(x.event_date||x.typical_date||'')}</span><b>${esc(t(x.title||x.name))}</b><small>${esc(t(x.religion))}</small></div>`).join('')}</div></section>`);
}
async function religion(id){
  const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals?religion='+id)]);
  const r=rels.find(x=>x.id==id);
  if(!r)return notFound();
  layout(`${r.name==='Hinduism'?`<div style="position:fixed; top:50%; left:50%; width:80vh; height:80vh; margin-top:-40vh; margin-left:-40vh; z-index:-1; opacity:0.08; pointer-events:none; background:url('https://upload.wikimedia.org/wikipedia/commons/4/4b/Sudarshana_Chakra.svg') center/contain no-repeat; animation: chakraSpin 25s linear infinite;"></div><style>@keyframes chakraSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>`:''}<section class="pageHero"><span class="eyebrow">${r.icon} ${t('RELIGION')}</span><h1>${esc(t(r.name))}</h1><p>${esc(t(r.description))}</p></section><section class="section"><div class="sectionTitle"><div><span class="eyebrow">${fs.length} ${t('ENTRIES')}</span><h2>${esc(t(r.name))} ${t('festivals & observances')}</h2></div><a class="textBtn" href="#/explore">${t('All religions →')}</a></div>${fs.length?`<div class="festivalGrid">${fs.map(fcard).join('')}</div>`:`<div class="empty"><h3>${t('No published entries yet')}</h3><p>${t('The religion is configured, but festival content has not been published.')}</p></div>`}</section>`);
}
async function explore(){
  const [rels,fs]=await Promise.all([api('/api/religions'),api('/api/festivals')]);
  layout(`<section class="pageHero"><span class="eyebrow">${t('EXPLORE')}</span><h1>${t('Festival Explorer')}</h1><p>${t('Search the real FaithFest database. Choose a religion first or combine filters.')}</p></section><section class="filterPanel"><input id="q" placeholder="${t('Search festival, region or description…')}"><select id="rel"><option value="">${t('All religions')}</option>${ORDER.map(n=>rels.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}">${r.icon} ${t(r.name)}</option>`).join('')}</select><select id="cat"><option value="">${t('All categories')}</option><option value="Festival">${t('Festival')}</option><option value="Holy Day">${t('Holy Day')}</option><option value="Religious Observance">${t('Religious Observance')}</option><option value="Cultural Celebration">${t('Cultural Celebration')}</option></select><button class="btn primary" onclick="runExplore()">${t('Search')}</button></section><div id="exploreResults" class="festivalGrid">${fs.map(fcard).join('')}</div>`);
}
async function runExplore(){
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

  const fs = await api(`/api/festivals?search=${encodeURIComponent(q)}&religion=${r}&category=${encodeURIComponent(c)}`);
  $('#exploreResults').innerHTML = fs.length ? fs.map(fcard).join('') : `<div class="empty"><h3>${t('No results')}</h3><p>${t('Try another search or filter.')}</p></div>`;
  
}
function infoCard(icon,title,text){return `<section class="contentCard"><div class="sectionLabel">${icon} ${title}</div><p>${esc(text||'Information will be added through the verified content workflow.')}</p></section>`}
async function festival(id){
 try{
  const f = await api('/api/festivals/' + id);
  window.__activeFestival = f;

  let isFav = false;
  if (state.user) {
    try {
      const favs = await api('/api/favorites');
      isFav = favs.some(x => x.id === f.id);
    } catch {}
  } else {
    const guestFavs = JSON.parse(localStorage.getItem('ff_guest_favs') || '[]');
    isFav = guestFavs.includes(f.id);
  }

  let isReminded = false;
  if (state.user) {
    try {
      const rems = await api('/api/reminders');
      isReminded = rems.some(x => x.festival_id === f.id);
    } catch {}
  } else {
    const guestRems = JSON.parse(localStorage.getItem('ff_reminders') || '[]');
    isReminded = guestRems.includes(f.id);
  }

  const adminBanner = state.user?.role === 'admin' ? `
   <div class="adminPreviewBanner">
    <div>
     <b>🛠️ Administrator Preview</b>
     <span style="margin-left:8px;">Status: <span class="statusPill ${f.status||'published'}">${(f.status||'published').replace('_',' ').toUpperCase()}</span></span>
     <small class="muted" style="margin-left:8px;">Festival ID: #${f.id}</small>
    </div>
    <div style="display:flex; gap:8px;">
     <button class="btn ghost sm" onclick="openCmsDashboard('festivals')">← Return to CMS</button>
     <button class="btn primary sm" onclick="openFestivalDetailsModal(${f.id})">✏️ Edit Details in CMS</button>
    </div>
   </div>
  ` : '';

  layout(adminBanner + `<section class="festivalHero"><div><span class="eyebrow">${f.religion_icon} ${esc(t(f.religion))} · ${esc(t(f.category))}</span><h1>${esc(t(f.name))}</h1><p>${esc(getLocalizedFestivalDesc(f.name, f.description))}</p><div class="heroActions"><button id="heroFavBtn" class="btn ${isFav ? 'primary' : 'ghost'}" onclick="toggleFav(${f.id}, this)">${isFav ? '♥ ' + t('Saved') : '♡ ' + t('Save festival')}</button><a class="btn ghost" href="#/map?festival_id=${f.id}">🗺️ ${t('View on Map')}</a><button id="heroListenBtn" class="btn ghost" onclick="toggleSpeak(${f.id}, this)">🔊 ${t('Listen')}</button><button id="heroRemindBtn" class="btn ${isReminded ? 'primary' : 'ghost'}" onclick="openReminderModal(${f.id})">${isReminded ? '🔔 ' + t('Reminded') : '🔔 ' + t('Remind')}</button><a class="btn ghost" href="#/festival/${id}/learn">${t('Learning mode →')}</a><a class="btn ghost" href="#/festival/${id}/quiz">${t('Quiz →')}</a><button class="btn ghost" onclick="openReportModal(${f.id}, '${esc(f.name).replace(/'/g, "\\'")}')">🚩 ${t('Report issue')}</button></div></div><div class="factPanel"><div><small>${t('RELIGION')}</small><b>${esc(t(f.religion))}</b></div><div><small>${t('REGION')}</small><b>${esc(t(f.region||'Multiple'))}</b></div><div><small>${t('DATE')}</small><b>${esc(t(f.typical_date||'Varies'))}</b></div><div><small>${t('DURATION')}</small><b>${esc(t(f.duration||'Varies'))}</b></div></div></section><div class="contentLayout"><div><div id="history">${infoCard('📜',t('History & origin'),t(f.historical_information))}<section class="contentCard"><div class="sectionLabel">🕰️ ${t('HISTORICAL TIMELINE')}</div><div class="timeline">${(f.history||[]).length?f.history.map(x=>`<div class="timelineItem"><span>${esc(x.period)}</span><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p></div>`).join(''):`<p class="muted">${t('No timeline entries have been published yet.')}</p>`}</div></section></div><div id="significance">${infoCard('◉',t('Religious / cultural significance'),t(f.significance))}</div><div id="celebration">${infoCard('🎉',t('How it is celebrated'),t(f.celebration))}${infoCard('✨',t('Modern celebration'),t(f.modern_celebration))}</div><div id="culture"><section class="contentCard"><div class="sectionLabel">🍚 ${t('TRADITIONAL FOOD')}</div><div class="miniGrid">${(f.foods||[]).length?f.foods.map(x=>`<article><span class="miniIcon">🍚</span><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p><small>${esc(x.region||'')}</small></article>`).join(''):'<p class="muted">Food content is ready to be added by the administrator.</p>'}</div></section><section class="contentCard"><div class="sectionLabel">👗 ${t('TRADITIONAL CLOTHING')}</div><div class="miniGrid">${(f.clothing||[]).length?f.clothing.map(x=>`<article><span class="miniIcon">👗</span><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p><small>${esc(x.region||'')}</small></article>`).join(''):'<p class="muted">Clothing content is ready to be added by the administrator.</p>'}</div></section><section class="contentCard"><div class="sectionLabel">🎵 ${t('MUSIC & DANCE')}</div><div class="miniGrid">${(f.music||[]).length?f.music.map(x=>`<article><span class="miniIcon">🎵</span><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p><small>${esc(x.kind||'')}</small></article>`).join(''):'<p class="muted">Music and dance content is ready to be added by the administrator.</p>'}</div></section><section class="contentCard"><div class="sectionLabel">🏠 ${t('DECORATIONS & SYMBOLS')}</div><div class="miniGrid">${[...(f.decorations||[]),...(f.symbols||[])].length?[...(f.decorations||[]),...(f.symbols||[])].map(x=>`<article><span class="miniIcon">🏠</span><h3>${esc(x.name)}</h3><p>${esc(x.description)}</p><small>${esc(x.meaning||'')}</small></article>`).join(''):'<p class="muted">Decoration and symbol content is ready to be added by the administrator.</p>'}</div></section><section class="contentCard"><div class="sectionLabel">🗺️ ${t('REGIONAL VARIATIONS')}</div><div class="regionList">${(f.regions||[]).length?f.regions.map(x=>`<article><b>${esc(x.region)}, ${esc(x.country)}</b><p>${esc(x.celebration_style)}</p><small>Rituals: ${esc(x.rituals||'—')} · Food: ${esc(x.foods||'—')} · Clothing: ${esc(x.clothing||'—')}</small></article>`).join(''):'<p class="muted">Regional variations are ready to be added through the content workflow.</p>'}</div></section></div><div id="media"><section class="contentCard"><div class="sectionLabel">📸 ${t('GALLERY & EXPLAINER VIDEO')}</div><div class="mediaGrid">${(f.media||[]).length?f.media.map(m=>m.type==='image'?`<figure><img src="${esc(m.url)}" alt="${esc(m.alt_text||m.caption||f.name)}"><figcaption>${esc(m.caption||'')}</figcaption></figure>`:`<a class="videoTile" href="${esc(m.url)}" target="_blank" rel="noopener">▶ ${esc(m.caption||'Open authorized video')}</a>`).join(''):`<div class="mediaEmpty">📸 Verified gallery media can be added by an administrator.</div><div class="mediaEmpty">🎥 Authorized explainer videos can be added here.</div>`}</div></section></div></div><aside class="sideRail"><section class="sideCard"><span class="eyebrow">📚 ${t('SOURCES & REFERENCES')}</span><div style="margin-top:1rem;display:flex;flex-direction:column;gap:1rem">${(f.references||[]).length?f.references.map(x=>`<div class="source" style="display:flex;flex-direction:column;gap:0.25rem"><b>${esc(x.source_name)}</b><span class="muted" style="font-size:0.85rem">${esc(x.source_type||'Source')} · ${esc(x.verification_status||'')}</span>${x.url?`<a href="${esc(x.url)}" target="_blank" rel="noopener" style="font-size:0.9rem;text-decoration:none">Open source ↗</a>`:''}</div>`).join(''):'<p class="muted">No verified references published yet.</p>'}</div></section><section class="sideCard"><span class="eyebrow">${t('COMPARE')}</span><h3>${t('Compare festivals')}</h3><p>${t('Compare factual cultural attributes without ranking religions.')}</p><a class="btn ghost full" href="#/compare">${t('Open comparison')}</a></section></aside></div>`);
 }catch(err){
  layout(`<div class="empty page404">
   <h1>Festival Not Found</h1>
   <p>${esc(err.message||'This festival could not be loaded or has not been published yet.')}</p>
   <div style="margin-top:20px; display:flex; gap:12px; justify-content:center;">
    <a class="btn primary" href="#/explore">Explore Festivals</a>
    ${state.user?.role==='admin'?`<button class="btn ghost" onclick="openCmsDashboard('festivals')">Return to CMS Dashboard</button>`:''}
   </div>
  </div>`);
 }
}
async function reportContent(festivalId, festivalName){
 if(!state.user){toast('Please login to report content');return location.hash='#/login';}
 const reason=prompt(`Report an issue or correction for ${festivalName}:`);
 if(!reason||!reason.trim())return;
 try{
  await api('/api/reports',{method:'POST',body:JSON.stringify({festival_id:festivalId,reason:reason.trim()})});
  toast('Report submitted for administrator review. Thank you!');
 }catch(e){toast(e.message);}
}
async function calendar(){
  const y=new Date().getFullYear();
  const [events,religions]=await Promise.all([api(`/api/calendar?year=${y}`),api('/api/religions')]);
  layout(`<section class="pageHero"><span class="eyebrow">${t('DYNAMIC CALENDAR')}</span><h1>${t('Festival calendar')}</h1><p>${t('Calendar events come from the application database and the supplied Hindu calendar dataset. Lunar and variable dates are kept as source data rather than guessed.')}</p></section><div class="filterPanel"><select id="calRel"><option value="">${t('All religions')}</option>${ORDER.map(n=>religions.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}">${r.icon} ${t(r.name)}</option>`).join('')}</select><input id="calSearch" placeholder="${t('Search calendar event…')}"><button class="btn primary" onclick="filterCalendar()">${t('Filter')}</button></div><div id="calGrid" class="calendarGrid">${events.map(calendarCard).join('')}</div>`);
}
function calendarCard(x){
  return `<article class="calCard"><span>${esc(t(x.event_date||x.typical_date||'Date varies'))}</span><h3>${esc(t(x.title||x.name))}</h3><b>${esc(t(x.religion))}</b><p>${esc(t(x.tithi||x.category||''))}</p>${x.festival_id?`<a href="#/festival/${x.festival_id}">${t('Open festival →')}</a>`:''}</article>`;
}
async function filterCalendar(){
  const rel=$('#calRel').value,q=$('#calSearch').value;
  const y=new Date().getFullYear();
  const ev=await api(`/api/calendar?year=${y}&religion=${rel}&search=${encodeURIComponent(q)}`);
  $('#calGrid').innerHTML=ev.length?ev.map(calendarCard).join(''):`<div class="empty"><h3>${t('No calendar matches')}</h3></div>`;
  
}
// ============================================================================
// FESTIVAL EXPLORER MAP — INTERACTIVE GEOGRAPHIC & CULTURAL EXPLORATION SYSTEM
// ============================================================================

let mapInstance = null;
let mapMarkersLayer = null;
let mapLocationsData = [];
let mapFestivalsList = [];
let mapActiveLocationId = null;
let mapUserCoords = null; // {lat, lng, name}
let mapFilters = {
 religion: '',
 festival_id: '',
 place_type: '',
 search: '',
 city: '',
 nearbyOnly: false
};
let mapSidebarTab = 'festivals'; // 'festivals' or 'sites'
let mapFestivalsWithLocs = [];

async function mapPage(){
 // Extract optional query parameters from hash (e.g. #/map?festival_id=42 or #/map?religion=Hinduism)
 const hashParts = (location.hash.split('?')[1] || '').split('&');
 mapFilters = { religion: '', festival_id: '', place_type: '', search: '', city: '', nearbyOnly: false };
 hashParts.forEach(part => {
  const [k, v] = part.split('=');
  if(k === 'festival_id' && v) mapFilters.festival_id = decodeURIComponent(v);
  if(k === 'religion' && v) mapFilters.religion = decodeURIComponent(v);
  if(k === 'city' && v) mapFilters.city = decodeURIComponent(v);
  if(k === 'search' && v) mapFilters.search = decodeURIComponent(v);
 });

 layout(`
  <div class="mapHeaderHero">
   <div style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
    <div>
     <span class="eyebrow">🗺️ ${t('GEOGRAPHIC FESTIVAL EXPLORER')}</span>
     <h1>${t('Festival Explorer Map')}</h1>
     <p class="muted" style="max-width:760px; font-size:16px; margin:0;">
      Explore every religious and cultural celebration in FaithFest across Hinduism, Islam, and Christianity, connected directly to sacred temples, mosques, churches, pilgrimage routes, and historic venues.
     </p>
    </div>
    <div style="display:flex; gap:10px; align-items:center;">
     <button class="btn ghost sm" onclick="triggerGeolocationPrompt()" id="geoBtn">📍 ${t('Near Me')}</button>
     <button class="btn ghost sm" onclick="resetMapFilters()">↺ ${t('Reset Filters')}</button>
    </div>
   </div>
  </div>

  <section class="mapToolbar">
   <div class="mapToolbarRow1">
    <div class="mapSearchWrap">
     <span class="mapSearchIcon">🔍</span>
     <input type="text" id="mapSearchInput" class="mapSearchInput" placeholder="${t('Search festival name, sacred place, city, or country...')}" value="${esc(mapFilters.search)}" oninput="onMapSearchInput(this.value)">
    </div>
    
    <select id="mapReligionFilter" class="mapFilterSelect" onchange="onMapReligionChange(this.value)" aria-label="Filter by Religion">
     <option value="">${t('All Religions (Hinduism, Islam, Christianity)')}</option>
     <option value="Hinduism" ${mapFilters.religion.toLowerCase()==='hinduism'?'selected':''}>🕉️ Hinduism</option>
     <option value="Islam" ${mapFilters.religion.toLowerCase()==='islam'?'selected':''}>☪️ Islam</option>
     <option value="Christianity" ${mapFilters.religion.toLowerCase()==='christianity'?'selected':''}>✝️ Christianity</option>
    </select>

    <select id="mapFestivalFilter" class="mapFilterSelect" onchange="onMapFestivalChange(this.value)" aria-label="Filter by Festival">
     <option value="">${t('All Associated Festivals')}</option>
     <!-- Dynamically filled -->
    </select>
   </div>

   <div class="mapToolbarRow2">
    <div class="mapPillsGroup">
     <span style="font-size:13px; font-weight:700; color:var(--muted); margin-right:4px;">${t('Filter Place Type:')}</span>
     <button class="mapFilterPill ${!mapFilters.place_type?'active':''}" onclick="setPlaceTypeFilter('')">${t('All Sites')}</button>
     <button class="mapFilterPill ${mapFilters.place_type==='place_of_worship'?'active':''}" onclick="setPlaceTypeFilter('place_of_worship')">🏛️ ${t('Places of Worship')}</button>
     <button class="mapFilterPill ${mapFilters.place_type==='pilgrimage_destination'?'active':''}" onclick="setPlaceTypeFilter('pilgrimage_destination')">✨ ${t('Pilgrimage Destinations')}</button>
     <button class="mapFilterPill ${mapFilters.place_type==='famous_celebration_location'?'active':''}" onclick="setPlaceTypeFilter('famous_celebration_location')">🎉 ${t('Famous Celebration Sites')}</button>
     <button class="mapFilterPill ${mapFilters.place_type==='cultural_heritage_site'?'active':''}" onclick="setPlaceTypeFilter('cultural_heritage_site')">📜 ${t('Cultural Heritage')}</button>
    </div>
    <div id="mapActiveFilterStatus" style="font-size:13px; color:var(--muted); font-weight:600;"></div>
   </div>
  </section>

  <div class="mapExplorerLayout">
   <div class="mapViewportContainer">
    <div class="mapOverlayBadge" id="mapCountBadge">
     <span>📍</span> Loading festivals and cultural sites...
    </div>
    <div class="mapControlsFloating">
     <button class="mapFloatBtn" onclick="fitAllMapMarkers()" title="${t('Fit View')}">⛶ ${t('Fit View')}</button>
     <button class="mapFloatBtn" onclick="triggerGeolocationPrompt()" title="${t('Locate Me')}">🎯 ${t('Locate Me')}</button>
    </div>
    <div id="festivalMap"></div>
   </div>

   <aside class="mapSidebar">
    <div class="mapSidebarTabs">
     <button class="mapSidebarTabBtn ${mapSidebarTab==='festivals'?'active':''}" id="tabBtnFestivals" onclick="switchMapSidebarTab('festivals')">
      🎉 ${t('All Festivals')} (<span id="festivalsTabCount">0</span>)
     </button>
     <button class="mapSidebarTabBtn ${mapSidebarTab==='sites'?'active':''}" id="tabBtnSites" onclick="switchMapSidebarTab('sites')">
      📍 ${t('Sacred Sites')} (<span id="sitesTabCount">0</span>)
     </button>
    </div>

    <div class="mapSidebarHeader">
     <h2 id="sidebarListTitle">${t('All Website Festivals')}</h2>
     <small class="muted" id="sidebarListCount">0 festivals</small>
    </div>
    <div class="mapSidebarList" id="mapSidebarList">
     <div class="empty"><p>Loading festivals and places...</p></div>
    </div>
   </aside>
  </div>

  <div id="locationDetailModalRoot"></div>
 `);

 await initMapModule();
}

function switchMapSidebarTab(tab){
 mapSidebarTab = tab;
 const tabF = $('#tabBtnFestivals');
 const tabS = $('#tabBtnSites');
 if(tabF) tabF.classList.toggle('active', tab === 'festivals');
 if(tabS) tabS.classList.toggle('active', tab === 'sites');

 const title = $('#sidebarListTitle');
 if(title) title.textContent = tab === 'festivals' ? 'All Website Festivals' : 'Verified Sacred Sites';

 renderActiveSidebarView();
}

async function initMapModule(){
 try {
  // Load festivals for filter dropdown
  mapFestivalsList = await api('/api/festivals');
  populateFestivalFilterDropdown();

  // Initialize Leaflet Map
  const mapElement = document.getElementById('festivalMap');
  if(!mapElement) return;

  if(window.L){
   if(mapInstance){
    mapInstance.remove();
    mapInstance = null;
   }
   mapInstance = L.map('festivalMap', {
    center: [22.0, 78.0],
    zoom: 4,
    minZoom: 2,
    maxZoom: 18,
    scrollWheelZoom: true
   });

   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
    maxZoom: 19
   }).addTo(mapInstance);

   mapMarkersLayer = L.layerGroup().addTo(mapInstance);
  }

  // Fetch both locations and festival records from backend
  await loadMapLocations();
 } catch(err){
  console.error('Map init error:', err);
  toast('Could not load map: ' + err.message);
 }
}

function populateFestivalFilterDropdown(){
 const sel = $('#mapFestivalFilter');
 if(!sel) return;
 let opts = '<option value="">All Associated Festivals</option>';
 let filtered = mapFestivalsList;
 if(mapFilters.religion){
  filtered = filtered.filter(f => f.religion.toLowerCase() === mapFilters.religion.toLowerCase());
 }
 filtered.forEach(f => {
  const isSelected = String(f.id) === String(mapFilters.festival_id);
  opts += `<option value="${f.id}" ${isSelected?'selected':''}>${f.religion_icon||'✦'} ${esc(f.name)}</option>`;
 });
 sel.innerHTML = opts;
}

async function loadMapLocations(){
 const listContainer = $('#mapSidebarList');
 if(listContainer) listContainer.innerHTML = '<div class="empty"><p>Searching festivals & verified celebration locations...</p></div>';

 let locUrl = '/api/locations?';
 let festUrl = '/api/festivals/with-locations?';
 const params = [];
 if(mapFilters.religion) params.push('religion=' + encodeURIComponent(mapFilters.religion));
 if(mapFilters.festival_id) params.push('festival_id=' + encodeURIComponent(mapFilters.festival_id));
 if(mapFilters.place_type) params.push('place_type=' + encodeURIComponent(mapFilters.place_type));
 if(mapFilters.search) params.push('search=' + encodeURIComponent(mapFilters.search));
 if(mapFilters.city) params.push('city=' + encodeURIComponent(mapFilters.city));
 
 const queryString = params.join('&');
 locUrl += queryString;
 festUrl += queryString;

 if(mapUserCoords){
  locUrl += `&lat=${mapUserCoords.lat}&lng=${mapUserCoords.lng}`;
  if(mapFilters.nearbyOnly) locUrl += '&nearby=true&radius=1000';
 }

 try {
  const [locations, festivalsWithLocs] = await Promise.all([
   api(locUrl),
   api(festUrl)
  ]);

  mapLocationsData = locations;
  mapFestivalsWithLocs = festivalsWithLocs;

  renderMapMarkers();
  renderActiveSidebarView();
  updateMapStats();
 } catch(err){
  if(listContainer) listContainer.innerHTML = `<div class="empty"><h3>Error loading map data</h3><p>${esc(err.message)}</p></div>`;
 }
}

function renderActiveSidebarView(){
 if(mapSidebarTab === 'festivals'){
  renderFestivalsSidebar();
 } else {
  renderLocationsSidebar();
 }
}

function renderMapMarkers(){
 if(!mapInstance || !mapMarkersLayer) return;
 mapMarkersLayer.clearLayers();

 if(!mapLocationsData.length) return;

 const bounds = L.latLngBounds();

 mapLocationsData.forEach(loc => {
  const lat = Number(loc.latitude);
  const lng = Number(loc.longitude);
  if(isNaN(lat) || isNaN(lng)) return;

  const religionLower = (loc.religion || '').toLowerCase();
  let markerClass = 'markerHindu';
  let iconSymbol = '🕉️';
  if(religionLower === 'islam') { markerClass = 'markerIslam'; iconSymbol = '☪️'; }
  else if(religionLower === 'christianity') { markerClass = 'markerChristian'; iconSymbol = '✝️'; }

  const customIcon = L.divIcon({
   className: `customMapMarker ${markerClass}`,
   html: `<span>${iconSymbol}</span>`,
   iconSize: [38, 38],
   iconAnchor: [19, 19],
   popupAnchor: [0, -20]
  });

  const marker = L.marker([lat, lng], { icon: customIcon });

  // Rich Leaflet Popup
  const popupHtml = `
   <div class="popupCardHeader" style="background-image:url('${esc(loc.image_url||'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=600')}');">
    <div class="popupCardHeaderContent">
     <b>${esc(loc.name)}</b>
     <span>📍 ${esc(loc.city)}, ${esc(loc.country)}</span>
    </div>
   </div>
   <div class="popupCardBody">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
     <span class="locationTypePill ${getPlaceTypeClass(loc.place_type)}">${formatPlaceType(loc.place_type)}</span>
     <small style="font-weight:700; color:var(--muted);">${getReligionEmoji(loc.religion)} ${esc(loc.religion)}</small>
    </div>
    <p>${esc(loc.description)}</p>
    ${loc.festivals && loc.festivals.length ? `
     <div style="font-size:11px; font-weight:700; color:var(--muted); margin-bottom:4px;">ASSOCIATED CELEBRATION FESTIVALS:</div>
     <div class="popupFestivalsList">
      ${loc.festivals.map(f => `<a class="popupFestTag" href="#/festival/${f.id}" title="Click to view festival details">🎉 ${esc(f.name)} →</a>`).join('')}
     </div>
    ` : ''}
    <div class="popupActions">
     <button class="btn ghost sm" onclick="openLocationDetailModal(${loc.id})">Place Details →</button>
     <a class="btn primary sm btnDirectionsLink" href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" rel="noopener">🧭 Directions ↗</a>
    </div>
   </div>
  `;

  marker.bindPopup(popupHtml);
  marker.on('click', () => {
   if(mapSidebarTab === 'sites'){
    highlightSidebarCard(loc.id);
   }
  });

  mapMarkersLayer.addLayer(marker);
  bounds.extend([lat, lng]);
 });

 if(mapLocationsData.length > 0 && mapInstance){
  mapInstance.fitBounds(bounds, { padding: [50, 50], maxZoom: 14 });
  if (mapFilters.festival_id) {
    const layers = mapMarkersLayer.getLayers();
    if (layers.length > 0 && layers[0].openPopup) {
      setTimeout(() => layers[0].openPopup(), 400);
    }
  }
 } else if (mapFilters.festival_id && mapInstance) {
  toast('Observed in diverse homes, communities & sacred places worldwide.');
 }
}

function renderFestivalsSidebar(){
 const listContainer = $('#mapSidebarList');
 if(!listContainer) return;

 if(!mapFestivalsWithLocs.length){
  listContainer.innerHTML = `
   <div class="empty" style="padding:40px 20px;">
    <h3>No matching festivals found</h3>
    <p>Try clearing your search query or selecting a different religion.</p>
    <button class="btn ghost sm" style="margin-top:12px;" onclick="resetMapFilters()">Reset All Filters</button>
   </div>
  `;
  return;
 }

 listContainer.innerHTML = mapFestivalsWithLocs.map(f => {
  const hasLoc = f.has_location && f.locations && f.locations.length > 0;
  const primaryLoc = hasLoc ? f.locations[0] : null;
  const defaultThumb = 'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=300';
  const imgUrl = f.image_url || defaultThumb;

  return `
   <article class="festivalMapCard ${hasLoc ? 'hasMappedLocation' : 'noMappedLocation'}" id="festCard-${f.id}">
    <div class="festCardMediaWrap">
     <img class="festCardThumb" src="${esc(imgUrl)}" alt="${esc(f.name)}" loading="lazy" onerror="this.src='${defaultThumb}'">
     <span class="festCardRelPill">${getReligionEmoji(f.religion)} ${esc(f.religion)}</span>
    </div>

    <div class="festCardBody">
     <div class="festCardHeaderRow">
      <h3 class="festCardTitle">${esc(f.name)}</h3>
      ${hasLoc ? `
       <span class="festCardBadge badgeHasLoc">📍 Mapped (${f.locations.length})</span>
      ` : `
       <span class="festCardBadge badgeNoLoc">⚠️ Location not available</span>
      `}
     </div>

     <p class="festCardDesc">${esc(f.short_description || f.description || '')}</p>

     ${hasLoc ? `
      <div class="festCardLocsList">
       <span class="festLocLabel">${t('Celebration Destination:')}</span>
       <div class="festLocItems">
        ${f.locations.map(l => `
         <button class="festLocPillBtn" onclick="panToFestivalLocation(${l.id}, ${l.latitude}, ${l.longitude})" title="View on map">
          📍 <b>${esc(l.name)}</b> (${esc(l.city || l.country)})
         </button>
        `).join('')}
       </div>
      </div>
     ` : `
      <div class="festUnmappedNotice">
       <span>Observed in diverse homes, communities & local congregations.</span>
       ${auth?.user?.role === 'admin' ? `
        <button class="adminLinkBtn" onclick="openAddLocationModalForFestival(${f.id}, '${esc(f.name).replace(/'/g, "\\'")}', '${esc(f.religion)}')">+ Add / Verify Location</button>
       ` : ''}
      </div>
     `}

     <div class="festCardActions">
      <a class="btn ghost sm" href="#/festival/${f.id}" title="View full history, rituals, and gallery">${t('Explore Festival Details →')}</a>
      ${hasLoc ? `
       <button class="btn primary sm" onclick="panToFestivalLocation(${primaryLoc.id}, ${primaryLoc.latitude}, ${primaryLoc.longitude})">🎯 ${t('Locate on Map')}</button>
      ` : `
       <button class="btn ghost sm disabled" onclick="toast('This festival is celebrated globally/locally; no fixed pilgrimage coordinate is registered.')" title="No fixed geographic coordinate">📍 Locate on Map</button>
      `}
     </div>
    </div>
   </article>
  `;
 }).join('');
}

function panToFestivalLocation(locId, lat, lng){
 if(!mapInstance) return;
 const latNum = Number(lat);
 const lngNum = Number(lng);
 if(isNaN(latNum) || isNaN(lngNum)) return;

 mapInstance.setView([latNum, lngNum], 14, { animate: true });

 if(mapMarkersLayer){
  mapMarkersLayer.eachLayer(layer => {
   if(layer.getLatLng && Math.abs(layer.getLatLng().lat - latNum) < 0.0001 && Math.abs(layer.getLatLng().lng - lngNum) < 0.0001){
    layer.openPopup();
   }
  });
 }
}

function openAddLocationModalForFestival(festId, festName, religion){
 if(auth?.user?.role !== 'admin'){
  toast('Admin authorization required to register locations.');
  return;
 }
 openAddLocationModal();
 setTimeout(() => {
  const relSel = document.querySelector('select[name="religion"]');
  if(relSel && religion) relSel.value = religion;
  const cb = document.querySelector(`input[name="festival_ids"][value="${festId}"]`);
  if(cb) cb.checked = true;
  toast(`Creating location for ${festName}`);
 }, 150);
}

function renderLocationsSidebar(){
 const listContainer = $('#mapSidebarList');
 if(!listContainer) return;

 if(!mapLocationsData.length){
  listContainer.innerHTML = `
   <div class="empty" style="padding:40px 20px;">
    <h3>No matching locations found</h3>
    <p>Try clearing filters or searching for another sacred place, city, or celebration.</p>
    <button class="btn ghost sm" style="margin-top:12px;" onclick="resetMapFilters()">Reset All Filters</button>
   </div>
  `;
  return;
 }

 listContainer.innerHTML = mapLocationsData.map(loc => {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`;
  const isSelected = loc.id === mapActiveLocationId;

  return `
   <article class="locationItemCard ${isSelected?'active':''}" id="locCard-${loc.id}" onclick="selectLocationOnMap(${loc.id})">
    <div class="locationCardTop">
     <h3 class="locationCardTitle">${esc(loc.name)}</h3>
     <span class="locationTypePill ${getPlaceTypeClass(loc.place_type)}">${formatPlaceType(loc.place_type)}</span>
    </div>

    <div class="locationCardMeta">
     <span>📍 ${esc(loc.city)}${loc.state?`, ${esc(loc.state)}`:''}, ${esc(loc.country)}</span>
     <span>•</span>
     <span style="font-weight:700; color:var(--ink);">${getReligionEmoji(loc.religion)} ${esc(loc.religion)}</span>
     ${loc.distance_km !== undefined ? `<span>•</span><span style="color:#2563eb; font-weight:700;">🚗 ${loc.distance_km} km away</span>` : ''}
    </div>

    <p class="locationCardDesc">${esc(loc.description)}</p>

    ${loc.festivals && loc.festivals.length ? `
     <div class="locationFestsPills">
      ${loc.festivals.map(f => `<a class="festBadge" href="#/festival/${f.id}" onclick="event.stopPropagation()">${f.icon||'✦'} ${esc(f.name)}</a>`).join('')}
     </div>
    ` : ''}

    <div class="locationCardActions" onclick="event.stopPropagation()">
     <button class="btn ghost sm" style="flex:1;" onclick="openLocationDetailModal(${loc.id})">${t('Explore Details')}</button>
     <a class="btn primary sm btnDirectionsLink" style="flex:1;" href="${directionsUrl}" target="_blank" rel="noopener">🧭 ${t('Get Directions ↗')}</a>
    </div>
   </article>
  `;
 }).join('');
}

function selectLocationOnMap(locId){
 mapActiveLocationId = locId;
 const loc = mapLocationsData.find(x => x.id === locId);
 if(!loc || !mapInstance) return;

 highlightSidebarCard(locId);

 const lat = Number(loc.latitude);
 const lng = Number(loc.longitude);
 mapInstance.setView([lat, lng], 14, { animate: true });

 // Open popup on matching marker
 if(mapMarkersLayer){
  mapMarkersLayer.eachLayer(layer => {
   if(layer.getLatLng && layer.getLatLng().lat === lat && layer.getLatLng().lng === lng){
    layer.openPopup();
   }
  });
 }
}

function highlightSidebarCard(locId){
 document.querySelectorAll('.locationItemCard').forEach(c => c.classList.remove('active'));
 const card = document.getElementById('locCard-' + locId);
 if(card){
  card.classList.add('active');
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
 }
}

function updateMapStats(){
 const badge = $('#mapCountBadge');
 const sidebarTitle = $('#sidebarListTitle');
 const sidebarCount = $('#sidebarListCount');
 const filterStatus = $('#mapActiveFilterStatus');
 const fCountBadge = $('#festivalsTabCount');
 const sCountBadge = $('#sitesTabCount');

 const festCount = mapFestivalsWithLocs.length;
 const locCount = mapLocationsData.length;

 if(fCountBadge) fCountBadge.textContent = festCount;
 if(sCountBadge) sCountBadge.textContent = locCount;

 if(mapSidebarTab === 'festivals'){
  if(badge) badge.innerHTML = `<span>🎉</span> Showing <b>${festCount}</b> website festivals across <b>${locCount}</b> verified places`;
  if(sidebarCount) sidebarCount.textContent = `${festCount} ${festCount===1?'festival':'festivals'}`;
 } else {
  if(badge) badge.innerHTML = `<span>📍</span> Showing <b>${locCount}</b> verified sacred locations`;
  if(sidebarCount) sidebarCount.textContent = `${locCount} ${locCount===1?'site':'sites'}`;
 }

 let activeTexts = [];
 if(mapFilters.religion) activeTexts.push(mapFilters.religion);
 if(mapFilters.festival_id){
  const f = mapFestivalsList.find(x => String(x.id) === String(mapFilters.festival_id));
  if(f) activeTexts.push(`Festival: ${f.name}`);
 }
 if(mapFilters.place_type) activeTexts.push(formatPlaceType(mapFilters.place_type));
 if(mapFilters.nearbyOnly) activeTexts.push('Near Your Location');

 if(filterStatus){
  filterStatus.textContent = activeTexts.length ? `Filtering: ${activeTexts.join(' • ')}` : 'Showing all website festivals across Hinduism, Islam & Christianity';
 }
}

function fitAllMapMarkers(){
 if(!mapInstance || !mapMarkersLayer || !mapLocationsData.length) return;
 const bounds = L.latLngBounds();
 mapLocationsData.forEach(loc => {
  bounds.extend([loc.latitude, loc.longitude]);
 });
 mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
}

// Filter triggers
let mapSearchTimeout = null;
function onMapSearchInput(val){
 clearTimeout(mapSearchTimeout);
 mapSearchTimeout = setTimeout(() => {
  mapFilters.search = val;
  loadMapLocations();
 }, 300);
}

function onMapReligionChange(rel){
 mapFilters.religion = rel;
 populateFestivalFilterDropdown();
 loadMapLocations();
}

function onMapFestivalChange(fid){
 mapFilters.festival_id = fid;
 loadMapLocations();
}

function setPlaceTypeFilter(type){
 mapFilters.place_type = type;
 document.querySelectorAll('.mapFilterPill').forEach(p => {
  const isMatch = (!type && p.textContent.includes('All Sites')) || (type && p.getAttribute('onclick')?.includes(type));
  p.classList.toggle('active', !!isMatch);
 });
 loadMapLocations();
}

function resetMapFilters(){
 mapFilters = { religion: '', festival_id: '', place_type: '', search: '', city: '', nearbyOnly: false };
 const searchInp = $('#mapSearchInput');
 if(searchInp) searchInp.value = '';
 const relSel = $('#mapReligionFilter');
 if(relSel) relSel.value = '';
 const festSel = $('#mapFestivalFilter');
 if(festSel) festSel.value = '';
 populateFestivalFilterDropdown();
 setPlaceTypeFilter('');
 if(location.hash.includes('?')) location.hash = '#/map';
 loadMapLocations();
}

// Geolocation Handling
function triggerGeolocationPrompt(){
 if(!navigator.geolocation){
  const city = prompt('Geolocation is not supported by your browser. Enter a city or region to search manually:');
  if(city && city.trim()){
   mapFilters.city = city.trim();
   loadMapLocations();
  }
  return;
 }

 toast('Detecting your approximate location...');
 navigator.geolocation.getCurrentPosition(
  pos => {
   mapUserCoords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
   mapFilters.nearbyOnly = true;
   toast('📍 Current location detected! Sorting nearby places...');
   
   if(mapInstance){
    const userMarker = L.circleMarker([mapUserCoords.lat, mapUserCoords.lng], {
     radius: 10,
     fillColor: '#3b82f6',
     color: '#ffffff',
     weight: 3,
     opacity: 1,
     fillOpacity: 0.9
    }).addTo(mapInstance);
    userMarker.bindPopup('<b>📍 Your Current Location</b>').openPopup();
   }

   loadMapLocations();
  },
  err => {
   console.warn('Geolocation denied or failed:', err);
   const manualCity = prompt('Location access was denied or unavailable. Enter a city to find nearby festival destinations:');
   if(manualCity && manualCity.trim()){
    mapFilters.city = manualCity.trim();
    loadMapLocations();
   }
  },
  { timeout: 10000, enableHighAccuracy: false }
 );
}

// Detailed Location Modal
async function openLocationDetailModal(locId){
 const modalRoot = $('#locationDetailModalRoot');
 if(!modalRoot) return;

 try {
  const loc = await api('/api/locations/' + locId);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${loc.latitude},${loc.longitude}`;

  modalRoot.innerHTML = `
   <div class="locationModalBackdrop" onclick="closeLocationModal(event)">
    <div class="locationModalDialog" onclick="event.stopPropagation()">
     <button class="locationModalClose" onclick="closeLocationModal()" title="Close">&times;</button>
     
     <div class="locationModalHeader" style="background-image:url('${esc(loc.image_url||'https://images.unsplash.com/photo-1548625361-195fe5795df5?w=800')}');">
      <div class="locationModalHeaderContent">
       <span class="locationTypePill ${getPlaceTypeClass(loc.place_type)}" style="margin-bottom:8px; display:inline-block;">${formatPlaceType(loc.place_type)}</span>
       <h2 style="font-size:28px; margin:4px 0; font-weight:850; color:#fff;">${esc(loc.name)}</h2>
       <div style="font-size:14px; opacity:0.9;">
        📍 ${esc(loc.address || `${loc.city}, ${loc.country}`)}
       </div>
      </div>
     </div>

     <div class="locationModalBody">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
       <div>
        <span style="font-size:13px; font-weight:700; color:var(--muted);">RELIGIOUS TRADITION:</span>
        <b style="font-size:16px; margin-left:8px;">${getReligionEmoji(loc.religion)} ${esc(loc.religion)}</b>
       </div>
       <div style="display:flex; gap:8px;">
        <a class="btn primary btnDirections" href="${directionsUrl}" target="_blank" rel="noopener">
         🧭 Get Directions (Google Maps)
        </a>
        ${loc.source_url ? `
         <a class="btn ghost sm" href="${esc(loc.source_url)}" target="_blank" rel="noopener">
          🌐 Official Reference ↗
         </a>
        ` : ''}
       </div>
      </div>

      <div class="locSectionBlock">
       <h4>📜 Cultural & Historical Importance</h4>
       <p>${esc(loc.description)}</p>
      </div>

      ${loc.seasonal_notes ? `
       <div class="locSectionBlock" style="border-left:4px solid #f59e0b; background:#fffbeb;">
        <h4 style="color:#b45309;">✨ Festival Celebrations & Seasonal Timing</h4>
        <p style="color:#92400e;">${esc(loc.seasonal_notes)}</p>
       </div>
      ` : ''}

      <div class="locSectionBlock">
       <h4>🎉 Associated Festivals & Observances</h4>
       ${loc.festivals && loc.festivals.length ? `
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px; margin-top:10px;">
         ${loc.festivals.map(f => `
          <a href="#/festival/${f.id}" onclick="closeLocationModal()" style="display:flex; align-items:center; gap:10px; padding:12px; border-radius:12px; background:#fff; border:1px solid var(--line); text-decoration:none; color:var(--ink); transition:all 0.2s ease;">
           <span style="font-size:24px;">${f.religion_icon||'✦'}</span>
           <div>
            <b style="font-size:14px; display:block;">${esc(f.name)}</b>
            <small class="muted">${esc(f.typical_date||f.category||'Festival')}</small>
           </div>
          </a>
         `).join('')}
        </div>
       ` : `<p class="muted">No direct festival relation records mapped yet.</p>`}
      </div>

      <div class="locSectionBlock" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
       <div>
        <small class="muted" style="display:block;">GEOGRAPHIC COORDINATES</small>
        <code>Latitude: ${loc.latitude.toFixed(4)}, Longitude: ${loc.longitude.toFixed(4)}</code>
       </div>
       <div>
        <small class="muted" style="display:block;">CONTENT STATUS</small>
        <span class="statusPill ${loc.verification_status||'published'}">${(loc.verification_status||'published').toUpperCase()}</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  `;
 } catch(e){
  toast(e.message);
 }
}

function closeLocationModal(e){
 const root = $('#locationDetailModalRoot');
 if(root) root.innerHTML = '';
}

// Helpers
function formatPlaceType(type){
 const map = {
  place_of_worship: 'Place of Worship',
  pilgrimage_destination: 'Pilgrimage Destination',
  famous_celebration_location: 'Famous Celebration Site',
  cultural_heritage_site: 'Cultural Heritage Site'
 };
 return map[type] || 'Heritage Site';
}
function getPlaceTypeClass(type){
 const map = {
  place_of_worship: 'typeWorship',
  pilgrimage_destination: 'typePilgrimage',
  famous_celebration_location: 'typeCelebration',
  cultural_heritage_site: 'typeHeritage'
 };
 return map[type] || 'typeHeritage';
}
function getReligionEmoji(rel){
 const r = (rel||'').toLowerCase();
 if(r==='hinduism') return '🕉️';
 if(r==='islam') return '☪️';
 if(r==='christianity') return '✝️';
 return '✦';
}

async function favorites(){
  let fs = [];
  if (state.user) {
    try { fs = await api('/api/favorites'); } catch {}
  } else {
    const guestIds = JSON.parse(localStorage.getItem('ff_guest_favs') || '[]');
    if (guestIds.length > 0) {
      try {
        const all = await api('/api/festivals');
        fs = all.filter(f => guestIds.includes(f.id));
      } catch {}
    }
  }
  layout(`<section class="pageHero"><span class="eyebrow">${t('YOUR COLLECTION')}</span><h1>${t('Saved festivals')}</h1><p>${t('Your persistent festival collection.')}</p></section>${fs.length ? `<div class="festivalGrid">${fs.map(fcard).join('')}</div>` : `<div class="empty"><h3>${t('No saved festivals yet')}</h3><p>${t('Open a festival and choose "Save festival".')}</p><a class="btn primary" href="#/explore" style="margin-top:16px;">${t('Explore Festivals')}</a></div>`}`);
}

let currentListenBtn = null;
let currentUtterance = null;

function stopSpeaking(){
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentListenBtn) {
    currentListenBtn.classList.remove('speakingActive');
    currentListenBtn.innerHTML = '🔊 ' + t('Listen');
    currentListenBtn = null;
  }
  currentUtterance = null;
}

function toggleSpeak(id, btn){
  if (!('speechSynthesis' in window)) {
    toast('Voice playback is not supported in this browser');
    return;
  }
  
  if (window.speechSynthesis.speaking) {
    const wasSame = (currentListenBtn === btn);
    stopSpeaking();
    if (wasSame) {
      toast(t('Audio stopped'));
      return;
    }
  }
  
  const f = window.__activeFestival;
  if (!f) return;
  
  const localizedDesc = getLocalizedFestivalDesc(f.name, f.description);
  const localizedName = t(f.name);
  const localizedSig = f.significance ? t(f.significance) : '';
  const textToRead = localizedName + '. ' + localizedDesc + '. ' + localizedSig;
  
  const u = new SpeechSynthesisUtterance(textToRead);
  
  const langCodes = {
    'Telugu': 'te-IN',
    'Hindi': 'hi-IN',
    'Tamil': 'ta-IN',
    'English': 'en-US'
  };
  const targetCode = langCodes[state.lang] || 'en-US';
  u.lang = targetCode;
  
  const voices = window.speechSynthesis.getVoices() || [];
  const voice = voices.find(v => v.lang === targetCode || v.lang.startsWith(targetCode.slice(0, 2)));
  if (voice) u.voice = voice;
  
  u.rate = 0.95;
  u.pitch = 1.0;
  
  u.onstart = () => {
    currentListenBtn = btn;
    btn.classList.add('speakingActive');
    btn.innerHTML = '⏹ ' + t('Stop');
  };
  
  u.onend = () => {
    stopSpeaking();
  };
  
  u.onerror = () => {
    stopSpeaking();
  };
  
  currentListenBtn = btn;
  currentUtterance = u;
  window.speechSynthesis.speak(u);
}

async function toggleFav(id, btn){
  const btnEl = btn || document.getElementById('heroFavBtn');
  let isFav = false;
  
  if (state.user) {
    try {
      const favs = await api('/api/favorites');
      const was = favs.some(x => x.id === id);
      await api('/api/favorites/' + id, { method: was ? 'DELETE' : 'POST' });
      isFav = !was;
    } catch(err) {
      toast('Could not update favorites: ' + err.message);
      return;
    }
  } else {
    let guestFavs = JSON.parse(localStorage.getItem('ff_guest_favs') || '[]');
    if (guestFavs.includes(id)) {
      guestFavs = guestFavs.filter(x => x !== id);
      isFav = false;
    } else {
      guestFavs.push(id);
      isFav = true;
    }
    localStorage.setItem('ff_guest_favs', JSON.stringify(guestFavs));
  }
  
  if (btnEl) {
    btnEl.className = 'btn ' + (isFav ? 'primary' : 'ghost');
    btnEl.innerHTML = isFav ? '♥ ' + t('Saved') : '♡ ' + t('Save festival');
  }
  toast(isFav ? '♥ ' + t('Saved to favorites') : t('Removed from favorites'));
}

async function openReminderModal(id){
  const f = window.__activeFestival || (await api('/api/festivals/' + id));
  if (!f) return;
  
  let eventDate = '';
  try {
    const calMatches = await api('/api/calendar?search=' + encodeURIComponent(f.name));
    const found = calMatches.find(c => c.festival_id === f.id || (c.title && c.title.toLowerCase().includes(f.name.toLowerCase())));
    if (found && found.event_date) {
      eventDate = found.event_date;
    }
  } catch {}
  
  if (!eventDate) {
    const now = new Date();
    eventDate = now.getFullYear() + '-11-08';
  }

  const gCalTitle = encodeURIComponent(f.name + ' - FaithFest Celebration');
  const gCalDesc = encodeURIComponent(f.name + ' (' + f.religion + ')\n\n' + f.description + '\n\nTypical Date: ' + (f.typical_date || '') + '\nDuration: ' + (f.duration || '') + '\n\nFaithFest: ' + location.origin + '/#/festival/' + f.id);
  const gCalLoc = encodeURIComponent(f.region || f.country || 'Global');
  
  const dateFormatted = eventDate.replace(/-/g, '');
  const gCalDates = dateFormatted + 'T090000Z/' + dateFormatted + 'T180000Z';
  const gCalUrl = 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + gCalTitle + '&dates=' + gCalDates + '&details=' + gCalDesc + '&location=' + gCalLoc;
  
  closeFfModal();
  
  const modalWrap = document.createElement('div');
  modalWrap.id = 'ffModalContainer';
  modalWrap.className = 'ffModalOverlay';
  modalWrap.innerHTML = `
    <div class="ffModalBox" onclick="event.stopPropagation()">
      <div class="ffModalHeader">
        <h3>🔔 ${t('Set a Reminder')}</h3>
        <button class="ffModalClose" onclick="closeFfModal()">×</button>
      </div>
      
      <div style="margin-bottom:16px;">
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
          <span style="font-size:26px;">${f.religion_icon || '✦'}</span>
          <div>
            <h4 style="margin:0; font-size:18px;">${esc(t(f.name))}</h4>
            <small class="muted">${esc(t(f.religion))} · ${esc(t(f.typical_date || 'Date varies'))}</small>
          </div>
        </div>
        <p style="font-size:14px; color:var(--text); margin:8px 0 0;">
          Never miss a holy observance. Choose your preferred real-time reminder method:
        </p>
      </div>
      
      <div class="reminderCardsList">
        <a class="reminderOptionCard" href="${gCalUrl}" target="_blank" rel="noopener" onclick="onReminderTriggered(${f.id}, 'Google Calendar')">
          <div style="display:flex; align-items:center; gap:12px;">
            <span class="reminderOptionIcon">📅</span>
            <div class="reminderOptionText">
              <h4>${t('Add to Google Calendar')}</h4>
              <p>Add to Google Calendar with date, timings & background</p>
            </div>
          </div>
          <span class="btn ghost sm reminderActionBtn">${t('Open ↗')}</span>
        </a>

        <div class="reminderOptionCard" onclick="downloadFestivalIcs(${f.id})">
          <div style="display:flex; align-items:center; gap:12px;">
            <span class="reminderOptionIcon">📥</span>
            <div class="reminderOptionText">
              <h4>${t('Download Calendar (.ics)')}</h4>
              <p>For Apple Calendar, Outlook, Android & iPhone</p>
            </div>
          </div>
          <button class="btn ghost sm reminderActionBtn">${t('Download')}</button>
        </div>

        <div class="reminderOptionCard" onclick="enableBrowserNotification(${f.id})">
          <div style="display:flex; align-items:center; gap:12px;">
            <span class="reminderOptionIcon">🔔</span>
            <div class="reminderOptionText">
              <h4>${t('Browser Notification')}</h4>
              <p>Instant browser reminder alerts on this device</p>
            </div>
          </div>
          <button class="btn ghost sm reminderActionBtn">${t('Enable')}</button>
        </div>
      </div>
      
      <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px; border-top:1px solid var(--line); padding-top:16px;">
        <button class="btn ghost sm" onclick="saveInAppReminder(${f.id})">
          ✓ ${t('Save in FaithFest Reminders')}
        </button>
        <button class="btn ghost sm" onclick="closeFfModal()">${t('Close')}</button>
      </div>
    </div>
  `;
  
  modalWrap.onclick = closeFfModal;
  document.body.appendChild(modalWrap);
}

function closeFfModal(){
  const m = document.getElementById('ffModalContainer');
  if (m) m.remove();
}

function onReminderTriggered(id, mode){
  markReminderState(id);
  toast('✓ Added to ' + mode + '! Reminder active.');
  setTimeout(closeFfModal, 600);
}

function markReminderState(id){
  let rems = JSON.parse(localStorage.getItem('ff_reminders') || '[]');
  if (!rems.includes(id)) {
    rems.push(id);
    localStorage.setItem('ff_reminders', JSON.stringify(rems));
  }
  const btn = document.getElementById('heroRemindBtn');
  if (btn) {
    btn.className = 'btn primary';
    btn.innerHTML = '🔔 ' + t('Reminded');
  }
}

async function saveInAppReminder(id){
  try {
    await api('/api/reminders', { method: 'POST', body: JSON.stringify({ festival_id: id, reminder_days: 7 }) });
  } catch(e){}
  markReminderState(id);
  toast('✓ Reminder preference saved!');
  closeFfModal();
}

function downloadFestivalIcs(id){
  const f = window.__activeFestival;
  if (!f) return;
  
  const now = new Date();
  const yr = now.getFullYear();
  const dtStamp = now.toISOString().replace(/[-:]/g,'').split('.')[0] + 'Z';
  const startDt = yr + '1108T090000Z';
  const endDt = yr + '1108T180000Z';
  
  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//FaithFest Digital Heritage//Festival Reminder//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:faithfest-' + f.id + '-' + yr + '@faithfest.local',
    'DTSTAMP:' + dtStamp,
    'DTSTART:' + startDt,
    'DTEND:' + endDt,
    'SUMMARY:' + f.name + ' - FaithFest Celebration',
    'DESCRIPTION:' + f.name + ' (' + f.religion + ') - ' + (f.typical_date || '') + '\\n' + f.description,
    'LOCATION:' + (f.region || f.country || 'Global'),
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ];
  
  const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = f.name.replace(/\s+/g, '_') + '_reminder.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  onReminderTriggered(id, 'Calendar (.ics)');
}

async function enableBrowserNotification(id){
  if (!('Notification' in window)) {
    toast('Notifications are not supported in this browser.');
    return;
  }
  
  const f = window.__activeFestival;
  const triggerAlert = () => {
    try {
      new Notification('FaithFest: ' + (f?.name || 'Festival') + ' Reminder', {
        body: 'Alert: ' + (f?.name || '') + ' (' + (f?.typical_date || 'Upcoming') + ') is marked in your FaithFest reminders.',
        icon: '/favicon.ico'
      });
    } catch {}
    onReminderTriggered(id, 'Browser Alerts');
  };

  if (Notification.permission === 'granted') {
    triggerAlert();
  } else if (Notification.permission !== 'denied') {
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      triggerAlert();
    } else {
      toast('Notification permission was not granted.');
    }
  } else {
    toast('Notifications are blocked in your browser settings.');
  }
}

function openReportModal(id, festivalName){
  closeFfModal();
  
  const modalWrap = document.createElement('div');
  modalWrap.id = 'ffModalContainer';
  modalWrap.className = 'ffModalOverlay';
  modalWrap.innerHTML = `
    <div class="ffModalBox" onclick="event.stopPropagation()">
      <div class="ffModalHeader">
        <h3>🚩 ${t('Report issue')}</h3>
        <button class="ffModalClose" onclick="closeFfModal()">×</button>
      </div>
      
      <p style="font-size:14px; color:var(--text); margin:0 0 16px;">
        Help our content editorial team maintain respectful, accurate, and source-verified cultural heritage data for <b>${esc(festivalName)}</b>.
      </p>
      
      <form id="reportIssueForm" onsubmit="submitReportIssueForm(event, ${id})">
        <div class="reportFormGroup">
          <label>${t('Issue Type')}:</label>
          <select id="reportCategory" required>
            <option value="Incorrect date or calendar information">Incorrect date or calendar information</option>
            <option value="Factual or historical inaccuracy">Factual or historical inaccuracy</option>
            <option value="Spelling, translation or grammatical error">Spelling, translation or grammatical error</option>
            <option value="Missing regional variation or sacred tradition">Missing regional variation or sacred tradition</option>
            <option value="Cultural sensitivity or inappropriate content">Cultural sensitivity or inappropriate content</option>
            <option value="Other feedback or suggestion">Other feedback or suggestion</option>
          </select>
        </div>

        <div class="reportFormGroup">
          <label>${t('Details & Corrections')}:</label>
          <textarea id="reportDetails" rows="4" placeholder="Please describe the correction or issue in detail..." required></textarea>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:20px; border-top:1px solid var(--line); padding-top:16px;">
          <button type="button" class="btn ghost sm" onclick="closeFfModal()">${t('Cancel')}</button>
          <button type="submit" class="btn primary sm">🚩 ${t('Submit Report')}</button>
        </div>
      </form>
    </div>
  `;
  
  modalWrap.onclick = closeFfModal;
  document.body.appendChild(modalWrap);
}

async function submitReportIssueForm(e, festivalId){
  e.preventDefault();
  const category = document.getElementById('reportCategory').value;
  const details = (document.getElementById('reportDetails').value || '').trim();
  if (!details) {
    toast('Please enter details of the issue.');
    return;
  }
  
  const fullReason = category + ': ' + details;
  
  try {
    await api('/api/reports', {
      method: 'POST',
      body: JSON.stringify({ festival_id: festivalId, reason: fullReason })
    });
    toast('✓ Report submitted for editorial review. Thank you!');
    closeFfModal();
  } catch(err) {
    toast('Failed to submit report: ' + err.message);
  }
}

async function learn(id){
  const f = await api('/api/festivals/' + id);
  window.__learnFestival = f;
  const steps = [
    [t('Introduction'), getLocalizedFestivalDesc(f.name, f.description)],
    [t('History & origin'), t(f.historical_information || '')],
    [t('Religious / cultural significance'), t(f.significance || '')],
    [t('How it is celebrated'), t(f.celebration || '')],
    [t('Traditional food'), (f.foods || []).map(x => t(x.name)).join(', ')],
    [t('Traditional clothing'), (f.clothing || []).map(x => t(x.name)).join(', ')],
    [t('Music & dance'), (f.music || []).map(x => t(x.name)).join(', ')],
    [t('Regional variations'), (f.regions || []).map(x => t(x.region) + ': ' + x.celebration_style).join(' ')]
  ];
  
  let prog = 0;
  if (state.user) {
    try {
      const p = await api('/api/progress');
      const x = p.find(a => a.festival_id == id);
      prog = x?.step || 0;
    } catch {}
  } else {
    const guestProg = JSON.parse(localStorage.getItem('ff_guest_progress') || '{}');
    prog = guestProg[id] || 0;
  }
  if (prog >= steps.length) prog = steps.length - 1;

  window.__learn = steps;
  window.__learnId = id;

  const pct = Math.round(((prog + 1) / steps.length) * 100);

  layout(`
    <section class="pageHero">
      <span class="eyebrow">${t('LEARNING MODE')} · ${esc(t(f.religion))}</span>
      <h1>${esc(t(f.name))}</h1>
      <p>${t('Study the festival step by step.')}</p>
      <div class="progress"><i id="learnProgressBar" style="width:${pct}%"></i></div>
    </section>
    <section class="learnWrap">
      <div class="learnSteps">
        ${steps.map((s, i) => `
          <button class="learnStep ${i === prog ? 'active' : ''}" onclick="showStep(${i})">
            <span>0${i + 1}</span>${esc(s[0])}
          </button>
        `).join('')}
        <a class="learnStep" href="#/festival/${id}/quiz"><span>09</span>${t('Final quiz →')}</a>
      </div>
      <article id="learnContent" class="contentCard learnContent">
      </article>
    </section>
  `);
  
  showStep(prog);
}

function showStep(i){
  const steps = window.__learn;
  if (!steps || !steps[i]) return;
  const s = steps[i];
  const total = steps.length;
  
  const pBar = document.getElementById('learnProgressBar');
  if (pBar) {
    pBar.style.width = Math.round(((i + 1) / total) * 100) + '%';
  }

  document.querySelectorAll('.learnStep').forEach((x, n) => {
    x.classList.toggle('active', n === i);
  });

  const prevBtn = i > 0 ? `<button class="btn ghost" onclick="showStep(${i - 1})">${t('Previous step')}</button>` : '';
  const isFinal = (i >= total - 1);
  const nextBtn = `<button class="btn primary" onclick="nextStep(${window.__learnId}, ${i}, ${total})">${isFinal ? t('Complete learning & take Quiz →') : t('Next step →')}</button>`;

  const container = document.getElementById('learnContent');
  if (container) {
    container.innerHTML = `
      <span class="eyebrow">${t('STEP')} ${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
      <h2>${esc(s[0])}</h2>
      <p style="font-size:16px; line-height:1.6; margin:16px 0 24px;">${esc(s[1] || t('Information will be added through the verified content workflow.'))}</p>
      <div style="display:flex; gap:12px; align-items:center;">
        ${prevBtn}
        ${nextBtn}
      </div>
    `;
  }
}

async function nextStep(id, i, total){
  const completed = (i >= total - 1);
  
  if (state.user) {
    try {
      await api('/api/progress', {
        method: 'POST',
        body: JSON.stringify({ festival_id: id, step: Math.min(i + 1, total), completed })
      });
    } catch {}
  } else {
    const guestProg = JSON.parse(localStorage.getItem('ff_guest_progress') || '{}');
    guestProg[id] = Math.min(i + 1, total);
    localStorage.setItem('ff_guest_progress', JSON.stringify(guestProg));
  }

  if (completed) {
    toast('🎉 Learning completed! Ready for the quiz.');
    location.hash = '#/festival/' + id + '/quiz';
  } else {
    showStep(i + 1);
  }
}

async function quiz(id){
  const [f, qs] = await Promise.all([api('/api/festivals/' + id), api('/api/quiz/' + id)]);
  window.__activeQuizFestival = f;
  window.__activeQuizQuestions = qs;

  layout(`
    <section class="pageHero">
      <span class="eyebrow">${t('KNOWLEDGE CHECK')} · ${esc(t(f.religion))}</span>
      <h1>${esc(t(f.name))} ${t('quiz')}</h1>
      <p>${t('Answer the questions based on the published festival content.')}</p>
    </section>
    
    <div id="quizScorecardContainer"></div>

    <form id="quizForm" class="quizWrap">
      ${qs.length ? qs.map((q, i) => `
        <section class="contentCard" id="quizQuestionCard_${q.id}">
          <div class="sectionLabel">${t('QUESTION')} ${i + 1}</div>
          <h3 style="margin:8px 0 16px;">${esc(q.question)}</h3>
          <div class="quizOptionsGroup" id="quizOptions_${q.id}">
            ${q.options.map((o, j) => `
              <label class="quizOption" id="quizLabel_${q.id}_${j}">
                <input type="radio" name="q${q.id}" value="${j}" required>
                <span>${esc(o)}</span>
              </label>
            `).join('')}
          </div>
          <div id="quizFeedback_${q.id}"></div>
        </section>
      `).join('') + `
        <div id="quizActionButtons" style="display:flex; gap:12px; margin-top:20px;">
          <button type="submit" class="btn primary" id="quizSubmitBtn">${t('Submit quiz')}</button>
          <a class="btn ghost" href="#/festival/${id}">${t('Back to Festival')}</a>
        </div>
      ` : `
        <div class="empty">
          <h3>${t('Quiz not published yet')}</h3>
          <p>${t('An administrator can add questions for this festival.')}</p>
          <a class="btn primary" href="#/festival/${id}" style="margin-top:16px;">${t('Back to Festival')}</a>
        </div>
      `}
    </form>
  `);

  if (qs.length) {
    document.getElementById('quizForm').onsubmit = async (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('quizSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Grading answers...';
      }

      const answers = {};
      qs.forEach(q => {
        answers[q.id] = Number(new FormData(e.target).get('q' + q.id));
      });

      try {
        const r = await api('/api/quiz/' + id, {
          method: 'POST',
          body: JSON.stringify({ answers })
        });

        qs.forEach(q => {
          const detail = r.details?.[q.id];
          if (!detail) return;
          
          q.options.forEach((o, j) => {
            const labelEl = document.getElementById('quizLabel_' + q.id + '_' + j);
            if (!labelEl) return;
            labelEl.classList.remove('quizOptionCorrect', 'quizOptionIncorrect');
            
            if (j === detail.correct) {
              labelEl.classList.add('quizOptionCorrect');
            } else if (j === detail.chosen && !detail.isCorrect) {
              labelEl.classList.add('quizOptionIncorrect');
            }
          });

          const feedbackEl = document.getElementById('quizFeedback_' + q.id);
          if (feedbackEl) {
            feedbackEl.innerHTML = detail.isCorrect
              ? '<div class="quizAnswerFeedback feedbackCorrect">✓ Correct! Well done.</div>'
              : '<div class="quizAnswerFeedback feedbackIncorrect">✗ Incorrect. Correct answer: <b>' + esc(q.options[detail.correct]) + '</b></div>';
          }
        });

        const scoreContainer = document.getElementById('quizScorecardContainer');
        if (scoreContainer) {
          const isMaster = r.percentage >= 80;
          scoreContainer.innerHTML = `
            <div class="quizScoreCard">
              <div class="quizScoreHeader">
                <div>
                  <span class="quizScorePct">${isMaster ? '🏆 Mastered' : '📝 Completed'}</span>
                  <div class="quizScoreBig">${r.score} / ${r.total} <span style="font-size:22px; font-weight:600;">(${r.percentage}%)</span></div>
                </div>
                <div style="display:flex; gap:10px; flex-wrap:wrap;">
                  <button class="btn ghost sm" style="color:white; border-color:rgba(255,255,255,0.4);" onclick="quiz(${id})">🔄 ${t('Retake Quiz')}</button>
                  <a class="btn ghost sm" style="color:white; border-color:rgba(255,255,255,0.4);" href="#/festival/${id}">← ${t('Back to Festival')}</a>
                </div>
              </div>
              <p style="margin:0; font-size:15px; opacity:0.95;">
                ${isMaster ? '🎉 Outstanding score! You have proven strong cultural knowledge of this festival.' : '👍 Good effort! Review your answers below, or study again in learning mode.'}
              </p>
            </div>
          `;
          scoreContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = '✓ Quiz Evaluated';
          submitBtn.className = 'btn ghost';
          submitBtn.onclick = () => quiz(id);
        }

        toast('Score: ' + r.score + '/' + r.total + ' (' + r.percentage + '%)');
      } catch(err) {
        toast('Failed to evaluate quiz: ' + err.message);
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = t('Submit quiz');
        }
      }
    };
  }
}
async function compare(){
  const fs=await api('/api/festivals');
  layout(`<section class="pageHero"><span class="eyebrow">${t('EDUCATIONAL COMPARISON')}</span><h1>${t('Compare festivals')}</h1><p>${t('Compare factual cultural attributes only. This is not a ranking.')}</p></section><section class="comparePick"><select id="a">${fs.map(f=>`<option value="${f.id}">${esc(t(f.religion))} — ${esc(t(f.name))}</option>`).join('')}</select><select id="b">${fs.map((f,i)=>`<option value="${f.id}" ${i===1?'selected':''}>${esc(t(f.religion))} — ${esc(t(f.name))}</option>`).join('')}</select><button class="btn primary" onclick="doCompare()">${t('Compare')}</button></section><div id="compareOut"></div>`);
}
async function doCompare(){
  const [a,b]=await Promise.all([api('/api/festivals/'+$('#a').value),api('/api/festivals/'+$('#b').value)]);
  const rows=[[t('Religion'),t(a.religion),t(b.religion)],[t('Category'),t(a.category),t(b.category)],[t('Region'),t(a.region),t(b.region)],[t('Typical date'),t(a.typical_date),t(b.typical_date)],[t('Duration'),t(a.duration),t(b.duration)],[t('Significance'),a.significance,b.significance],[t('Celebration'),a.celebration,b.celebration]];
  $('#compareOut').innerHTML=`<div class="compareTable"><div></div><h3>${esc(t(a.name))}</h3><h3>${esc(t(b.name))}</h3>${rows.map(r=>`<div><b>${esc(r[0])}</b></div><div>${esc(r[1])}</div><div>${esc(r[2])}</div>`).join('')}</div>`;
  
}
function authPage(mode){
 const isAdminLogin = location.hash === '#/admin' && (!state.user || state.user.role !== 'admin');
 
 // If on admin portal, allow toggling between login and register
 const isAdminRegister = isAdminLogin && (mode === 'admin-register' || window.__adminAuthMode === 'register');
 const effectiveMode = isAdminLogin ? (isAdminRegister ? 'register' : 'login') : mode;

 const titleText = isAdminLogin 
  ? (isAdminRegister ? 'Register Administrator' : 'Admin Login')
  : (mode === 'login' ? 'Explorer Login' : 'Create your account');

 const eyebrowText = isAdminLogin ? 'ADMINISTRATOR PORTAL' : 'EXPLORER ACCESS';
 const subtitleText = isAdminLogin 
  ? (isAdminRegister ? 'Register a new verified administrator account to manage FaithFest content and map data.' : 'Authorized administrator authentication required to manage festival content, reviews, users, and dates.')
  : 'Sign in to explore sacred traditions, save festivals, track learning and check quiz progress.';

 layout(`
  <section class="authWrap">
   <div class="authCard">
    <span class="eyebrow">${eyebrowText}</span>
    <h1>${titleText}</h1>
    <p class="muted">${subtitleText}</p>

    <form id="authForm" class="form">
     ${(effectiveMode === 'register') ? '<input name="name" placeholder="Full Name / Admin Identity" required>' : ''}
     <input name="email" type="email" placeholder="${isAdminLogin ? 'Administrator Email' : 'Email Address'}" value="" required>
     <input name="password" type="password" minlength="8" placeholder="Password (8+ characters)" value="" required>
     ${isAdminLogin && effectiveMode === 'register' ? '<input type="hidden" name="role" value="admin">' : ''}
     <button class="btn primary">
      ${isAdminLogin ? (isAdminRegister ? 'Register as Administrator' : 'Authenticate Admin') : (mode === 'login' ? 'Sign in to Explore' : 'Create account')}
     </button>
    </form>
    <div id="authMsg"></div>

    ${isAdminLogin ? `
     <div style="margin-top:20px; text-align:center;">
      <button type="button" class="textBtn" onclick="toggleAdminAuthMode('${isAdminRegister ? 'login' : 'register'}')" style="font-size:14px; color:var(--purple); font-weight:700; background:none; border:none; padding:8px 12px; cursor:pointer;">
       ${isAdminRegister ? '← Already have an Admin account? Login' : 'Register New Administrator Account'}
      </button>
     </div>
    ` : `
     <div style="margin-top:16px; text-align:center;">
      <a href="#/${mode==='login'?'register':'login'}">${mode==='login'?'Need an account? Register':'Already registered? Login'}</a>
     </div>
    `}
   </div>
  </section>
 `);

 $('#authForm').onsubmit = async e => {
  e.preventDefault();
  try{
   const isRegistering = (effectiveMode === 'register');
   const authEndpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
   const formData = Object.fromEntries(new FormData(e.target));
   if (isAdminLogin && isRegistering) {
    formData.role = 'admin';
   }
   const d = await api(authEndpoint, {
    method: 'POST',
    body: JSON.stringify(formData)
   });
   state.user = d.user;
   state.token = d.token;
   localStorage.setItem('ff_user', JSON.stringify(state.user));
   localStorage.setItem('ff_token', state.token);

   if(isAdminLogin && state.user.role !== 'admin'){
    toast('Access denied: Ordinary user account lacks administrator privileges.');
    location.hash = '#/explore';
    return;
   }
   if(state.user.role === 'admin' && isAdminLogin){
    toast(`Welcome to Admin CMS, ${state.user.name}!`);
    window.__adminAuthMode = null;
    route();
   } else {
    toast(`Welcome back, ${state.user.name}!`);
    location.hash = '#/explore';
   }
  }catch(x){
   $('#authMsg').innerHTML = `<div class="notice">${esc(x.message)}</div>`;
  }
 };
}

function toggleAdminAuthMode(targetMode){
 window.__adminAuthMode = targetMode;
 authPage(targetMode === 'register' ? 'admin-register' : 'login');
}

let adminCurrentTab='festivals';
let adminReligionsCache=[];

async function admin(){
 if(!state.user||state.user.role!=='admin')return authPage('login');
 const [stats,rels]=await Promise.all([api('/api/admin/stats'),api('/api/religions')]);
 adminReligionsCache=rels;

 layout(`
 <section class="pageHero" style="display:flex; justify-content:space-between; align-items:flex-end; flex-wrap:wrap; gap:16px;">
  <div>
   <span class="eyebrow">✦ SECURE CMS & ADMINISTRATION</span>
   <h1>Admin Control Center</h1>
   <p>Manage festivals across Hinduism, Islam and Christianity, manage year schedules, approve reviews, and oversee users.</p>
  </div>
  <div style="display:flex; gap:10px; align-items:center;">
   <span class="statusPill published">Logged in as: ${esc(state.user.name)} (${esc(state.user.role)})</span>
   <button class="btn ghost sm" onclick="logout()">Logout</button>
  </div>
 </section>

 <div class="adminStats">
  <div><span>Published Festivals</span><b style="color:#0d823f;">${stats.festivals}</b></div>
  <div><span>Draft / Review</span><b style="color:#b45309;">${stats.draftFestivals||0}</b></div>
  <div><span>Registered Users</span><b>${stats.users}</b></div>
  <div><span>Popular Page Views</span><b>${stats.views}</b></div>
  <div><span>Quiz Submissions</span><b>${stats.quiz_attempts}</b></div>
  <div><span>Pending Reports</span><b style="color:${stats.pendingReports>0?'#d93d7c':'inherit'}">${stats.pendingReports||0}</b></div>
 </div>

 <nav class="adminTabs">
  <button class="adminTabBtn ${adminCurrentTab==='festivals'?'active':''}" onclick="setAdminTab('festivals')">🏛️ 1. Manage Festivals</button>
  <button class="adminTabBtn ${adminCurrentTab==='calendar'?'active':''}" onclick="setAdminTab('calendar')">📅 2. Dates & Schedules</button>
  <button class="adminTabBtn ${adminCurrentTab==='reviews'?'active':''}" onclick="setAdminTab('reviews')">⚖️ 3. Review & Workflow</button>
  <button class="adminTabBtn ${adminCurrentTab==='users'?'active':''}" onclick="setAdminTab('users')">👥 4. Manage Users</button>
  <button class="adminTabBtn ${adminCurrentTab==='reports'?'active':''}" onclick="setAdminTab('reports')">🚩 5. Reported Content <span class="badge">${stats.pendingReports||0}</span></button>
  <button class="adminTabBtn ${adminCurrentTab==='analytics'?'active':''}" onclick="setAdminTab('analytics')">📊 6. Analytics & Audit</button>
  <button class="adminTabBtn ${adminCurrentTab==='locations'?'active':''}" onclick="setAdminTab('locations')">🗺️ 7. Sacred Locations</button>
 </nav>

 <div id="adminTabContent"></div>
 <div id="adminModalRoot"></div>
 `);

 renderAdminTabContent(stats);
}

function setAdminTab(tab){
 adminCurrentTab=tab;
 document.querySelectorAll('.adminTabBtn').forEach(b=>{
  b.classList.toggle('active',b.textContent.includes(tab==='festivals'?'Festivals':tab==='calendar'?'Dates':tab==='reviews'?'Review':tab==='users'?'Users':tab==='reports'?'Reported':tab==='locations'?'Locations':'Analytics'));
 });
 api('/api/admin/stats').then(st=>renderAdminTabContent(st)).catch(()=>renderAdminTabContent());
}

async function renderAdminTabContent(stats){
 const container=$('#adminTabContent');
 if(!container)return;

 if(adminCurrentTab==='festivals'){
  container.innerHTML=`<div class="empty"><p>Loading festivals CMS...</p></div>`;
  const fs=await api('/api/admin/festivals');
  container.innerHTML=`
   <div class="adminFilterBar">
    <button class="btn primary" onclick="openAddFestivalModal()">+ Add New Festival</button>
    <select id="admRelFilter" onchange="filterAdminFestivals()">
     <option value="">All Religions (Hinduism, Islam, Christianity)</option>
     ${ORDER.map(n=>adminReligionsCache.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}">${r.icon} ${r.name}</option>`).join('')}
    </select>
    <select id="admStatFilter" onchange="filterAdminFestivals()">
     <option value="">All Workflow Statuses</option>
     <option value="draft">Draft</option>
     <option value="under_review">Under Review</option>
     <option value="approved">Approved</option>
     <option value="published">Published</option>
    </select>
    <input id="admSearch" placeholder="Search festival name or region..." oninput="filterAdminFestivals()" style="flex:1; min-width:200px;">
   </div>
   <div style="overflow-x:auto;">
    <table class="adminDataTable">
     <thead>
      <tr>
       <th>Festival Name</th>
       <th>Religion</th>
       <th>Typical Date</th>
       <th>Region</th>
       <th>Status</th>
       <th style="text-align:right;">Actions</th>
      </tr>
     </thead>
     <tbody id="adminFestivalsTableBody">
      ${renderFestivalRows(fs)}
     </tbody>
    </table>
   </div>
  `;
  window.__adminFs=fs;
 }
 else if(adminCurrentTab==='calendar'){
  container.innerHTML=`<div class="empty"><p>Loading calendar events...</p></div>`;
  const y=new Date().getFullYear();
  const [events,fs]=await Promise.all([api(`/api/calendar?year=${y}&limit=500`),api('/api/admin/festivals')]);
  container.innerHTML=`
   <section class="adminPanel">
    <div class="sectionTitle">
     <div><span class="eyebrow">YEAR-SPECIFIC SCHEDULES</span><h2>Update Dates, Event Times & Verified Schedules</h2></div>
    </div>
    <form id="calEventForm" class="adminFormFull" style="background:#fff; padding:24px; border-radius:18px; border:1px solid var(--line); margin-bottom:24px;">
     <div class="adminGrid2">
      <div>
       <label><b>Festival Title / Event:</b></label>
       <input name="title" placeholder="e.g. Feast of the Epiphany / Diwali Pooja" required>
      </div>
      <div>
       <label><b>Religion:</b></label>
       <select name="religion_id" required>
        ${ORDER.map(n=>adminReligionsCache.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}">${r.icon} ${r.name}</option>`).join('')}
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Event Date (YYYY-MM-DD):</b></label>
       <input name="event_date" type="date" required value="${new Date().toISOString().slice(0,10)}">
      </div>
      <div>
       <label><b>Link to Festival Record (optional):</b></label>
       <select name="festival_id">
        <option value="">-- None (Standalone Event) --</option>
        ${fs.map(f=>`<option value="${f.id}">${esc(f.religion)}: ${esc(f.name)}</option>`).join('')}
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Timing / Tithi / Schedule Details:</b></label>
       <input name="tithi" placeholder="e.g. Sunrise to Sunset / Morning Liturgy 9:00 AM">
      </div>
      <div>
       <label><b>Date Confirmation Status:</b></label>
       <select name="is_provisional">
        <option value="0">Verified / Confirmed Religious Timing</option>
        <option value="1">Provisional / Unconfirmed (Subject to Moon Sighting or Solar Calculation)</option>
       </select>
      </div>
     </div>
     <div>
      <label><b>Source / Authority Reference:</b></label>
      <input name="source" placeholder="e.g. Liturgical Calendar 2026 / Verified Astronomical Board">
     </div>
     <button class="btn primary" style="align-self:flex-start;">+ Save Calendar Schedule</button>
    </form>
    <div class="sectionTitle"><div><span class="eyebrow">DATABASE ENTRIES (${events.length})</span><h2>Active Year Schedule (${y})</h2></div></div>
    <div style="max-height:450px; overflow-y:auto; border:1px solid var(--line); border-radius:16px;">
     <table class="adminDataTable">
      <thead>
       <tr>
        <th>Date</th>
        <th>Event Title</th>
        <th>Religion</th>
        <th>Schedule / Timing</th>
        <th>Status</th>
        <th style="text-align:right;">Delete</th>
       </tr>
      </thead>
      <tbody>
       ${events.slice(0,100).map(e=>`
        <tr>
         <td><b>${esc(e.event_date)}</b><br><small class="muted">${esc(e.weekday||'')}</small></td>
         <td><b>${esc(e.title)}</b>${e.festival_name?`<br><small class="muted">Linked: ${esc(e.festival_name)}</small>`:''}</td>
         <td>${esc(e.religion)}</td>
         <td>${esc(e.tithi||e.lunar_month||'—')}</td>
         <td><span class="statusPill ${e.lunar_month?.includes('Provisional')?'under_review':'published'}">${e.lunar_month?.includes('Provisional')?'Provisional':'Confirmed'}</span></td>
         <td style="text-align:right;"><button class="btn ghost sm" onclick="deleteCalEvent(${e.id})">🗑️</button></td>
        </tr>
       `).join('')}
      </tbody>
     </table>
    </div>
   </section>
  `;
  $('#calEventForm').onsubmit=async ev=>{
   ev.preventDefault();
   const fd=new FormData(ev.target);
   const payload=Object.fromEntries(fd);
   payload.is_provisional=payload.is_provisional==='1';
   try{
    await api('/api/admin/calendar',{method:'POST',body:JSON.stringify(payload)});
    toast('Calendar schedule saved to database successfully.');
    renderAdminTabContent();
   }catch(err){toast(err.message);}
  };
 }
 else if(adminCurrentTab==='reviews'){
  container.innerHTML=`<div class="empty"><p>Loading content workflow...</p></div>`;
  const fs=await api('/api/admin/festivals');
  container.innerHTML=`
   <section class="adminPanel">
    <div class="sectionTitle">
     <div><span class="eyebrow">EDITORIAL WORKFLOW</span><h2>Review & Approve Festival Content</h2></div>
     <span class="muted">Draft → Under Review → Approved → Published</span>
    </div>
    <p>Articles must be reviewed and published before appearing on the public explorer.</p>
    <div style="overflow-x:auto;">
     <table class="adminDataTable">
      <thead>
       <tr>
        <th>Festival</th>
        <th>Religion</th>
        <th>Current Status</th>
        <th>Update Workflow Status</th>
        <th style="text-align:right;">Review Details</th>
       </tr>
      </thead>
      <tbody>
       ${fs.map(f=>`
        <tr>
         <td><b>${esc(f.name)}</b><br><small class="muted">${esc(f.category)}</small></td>
         <td>${esc(f.religion)}</td>
         <td><span class="statusPill ${f.status||'draft'}">${(f.status||'draft').replace('_',' ')}</span></td>
         <td>
          <select onchange="updateFestivalStatus(${f.id},this.value)" style="padding:6px 10px; border-radius:8px; border:1px solid var(--line);">
           <option value="draft" ${f.status==='draft'?'selected':''}>Draft</option>
           <option value="under_review" ${f.status==='under_review'?'selected':''}>Under Review</option>
           <option value="approved" ${f.status==='approved'?'selected':''}>Approved</option>
           <option value="published" ${f.status==='published'?'selected':''}>Published (Public)</option>
          </select>
         </td>
         <td style="text-align:right;">
          <button class="btn ghost sm" onclick="openFestivalDetailsModal(${f.id})">Inspect Content</button>
         </td>
        </tr>
       `).join('')}
      </tbody>
     </table>
    </div>
   </section>
  `;
 }
 else if(adminCurrentTab==='users'){
  container.innerHTML=`<div class="empty"><p>Loading user accounts...</p></div>`;
  const users=await api('/api/admin/users');
  container.innerHTML=`
   <section class="adminPanel">
    <div class="sectionTitle">
     <div><span class="eyebrow">USER ACCESS CONTROL</span><h2>Manage User Accounts & Permissions</h2></div>
     <span class="muted">${users.length} Registered Accounts</span>
    </div>
    <div style="overflow-x:auto;">
     <table class="adminDataTable">
      <thead>
       <tr>
        <th>ID</th>
        <th>User Name</th>
        <th>Email</th>
        <th>Role / Permission</th>
        <th>Member Since</th>
        <th style="text-align:right;">Actions</th>
       </tr>
      </thead>
      <tbody>
       ${users.map(u=>`
        <tr>
         <td>#${u.id}</td>
         <td><b>${esc(u.name)}</b></td>
         <td><code>${esc(u.email)}</code></td>
         <td>
          <select onchange="changeUserRole(${u.id},this.value)" ${u.id===state.user.id?'disabled':''} style="padding:6px 10px; border-radius:8px; border:1px solid var(--line);">
           <option value="user" ${u.role==='user'?'selected':''}>User (Explorer)</option>
           <option value="moderator" ${u.role==='moderator'?'selected':''}>Moderator</option>
           <option value="admin" ${u.role==='admin'?'selected':''}>Administrator</option>
          </select>
         </td>
         <td>${new Date(u.created_at).toLocaleDateString()}</td>
         <td style="text-align:right;">
          ${u.id!==state.user.id?`<button class="btn ghost sm" onclick="deleteUserAccount(${u.id},'${esc(u.name).replace(/'/g,"\\'")}')">Delete</button>`:'<small class="muted">(Current Admin)</small>'}
         </td>
        </tr>
       `).join('')}
      </tbody>
     </table>
    </div>
   </section>
  `;
 }
 else if(adminCurrentTab==='reports'){
  container.innerHTML=`<div class="empty"><p>Loading reports...</p></div>`;
  const reports=await api('/api/admin/reports');
  container.innerHTML=`
   <section class="adminPanel">
    <div class="sectionTitle">
     <div><span class="eyebrow">USER FEEDBACK & CORRECTIONS</span><h2>Reported Content & Community Flags</h2></div>
    </div>
    ${reports.length===0?'<div class="empty"><h3>No content reports</h3><p>No user reports or factual issues have been flagged.</p></div>':`
     <div style="overflow-x:auto;">
      <table class="adminDataTable">
       <thead>
        <tr>
         <th>Festival</th>
         <th>Reported Reason / Issue</th>
         <th>Reporter</th>
         <th>Status</th>
         <th style="text-align:right;">Action</th>
        </tr>
       </thead>
       <tbody>
        ${reports.map(r=>`
         <tr>
          <td><b>${esc(r.festival_name||'Unknown')}</b></td>
          <td style="max-width:300px;">${esc(r.reason)}</td>
          <td>${esc(r.user_name||'User')} <br><small class="muted">${esc(r.user_email||'')}</small></td>
          <td><span class="statusPill ${r.status==='pending'?'under_review':'published'}">${esc(r.status)}</span></td>
          <td style="text-align:right;">
           ${r.status==='pending'?`
            <button class="btn primary sm" onclick="resolveReport(${r.id},'resolved')">Mark Resolved</button>
            <button class="btn ghost sm" onclick="resolveReport(${r.id},'dismissed')">Dismiss</button>
           `:`<small class="muted">${esc(r.admin_notes||'Resolved')}</small>`}
          </td>
         </tr>
        `).join('')}
       </tbody>
      </table>
     </div>
    `}
   </section>
  `;
 }
 else if(adminCurrentTab==='analytics'){
  container.innerHTML=`<div class="empty"><p>Loading real analytics & audit logs...</p></div>`;
  const [auditLogs,events]=await Promise.all([api('/api/admin/audit'),api('/api/admin/events')]);
  container.innerHTML=`
   <section class="adminPanel">
    <div class="sectionTitle">
     <div><span class="eyebrow">DATABASE-BACKED METRICS</span><h2>Website Analytics & Engagement</h2></div>
    </div>
    <div class="adminGrid2" style="margin-bottom:24px;">
     <div style="background:#fff; border:1px solid var(--line); border-radius:18px; padding:20px;">
      <h4>🔥 Most Popular Festival Pages (Real Views)</h4>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
       ${(stats.popular||[]).map(p=>`
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f0edf6; padding-bottom:6px;">
         <span><b>${esc(p.name)}</b> <small class="muted">(${esc(p.religion)})</small></span>
         <span class="statusPill published">${p.views} views</span>
        </div>
       `).join('')}
      </div>
     </div>
     <div style="background:#fff; border:1px solid var(--line); border-radius:18px; padding:20px;">
      <h4>🎓 Recent Quiz Participations</h4>
      <div style="display:flex; flex-direction:column; gap:10px; margin-top:12px;">
       ${(stats.recentQuiz||[]).map(q=>`
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f0edf6; padding-bottom:6px;">
         <div><b>${esc(q.festival_name)}</b><br><small class="muted">${esc(q.user_name)}</small></div>
         <span class="statusPill ${q.percentage>=80?'published':'under_review'}">${q.score}/${q.total} (${q.percentage}%)</span>
        </div>
       `).join('')}
      </div>
     </div>
    </div>

    <div class="sectionTitle">
     <div><span class="eyebrow">AUDIT TRAIL</span><h2>Recent Administrative Operations</h2></div>
     <span class="muted">Verified Backend Audit Logs</span>
    </div>
    <div style="max-height:400px; overflow-y:auto; border:1px solid var(--line); border-radius:16px;">
     <table class="adminDataTable">
      <thead>
       <tr>
        <th>Timestamp</th>
        <th>Admin</th>
        <th>Action</th>
        <th>Entity</th>
        <th>Details</th>
       </tr>
      </thead>
      <tbody>
       ${auditLogs.map(a=>`
        <tr>
         <td><small>${new Date(a.created_at).toLocaleString()}</small></td>
         <td><b>${esc(a.admin_name||'Admin')}</b></td>
         <td><code>${esc(a.action)}</code></td>
         <td>${esc(a.entity_type)} #${a.entity_id||''}</td>
         <td><small style="color:var(--muted);">${esc(a.details_json||'')}</small></td>
        </tr>
       `).join('')}
      </tbody>
     </table>
    </div>
   </section>
  `;
 }
 else if(adminCurrentTab==='locations'){
  container.innerHTML=`<div class="empty"><p>Loading sacred festival locations from database...</p></div>`;
  const [locs, allFs, stats] = await Promise.all([
    api('/api/admin/locations'), 
    api('/api/festivals'),
    api('/api/admin/locations/stats')
  ]);
  window.__adminLocs = locs;
  window.__adminLocFestivals = allFs;
  window.__adminLocStats = stats;
  window.__adminLocFilter = { religion: '', festival: '', status: '', search: '', state: '' };
  window.__adminLocActiveId = null;
  window.__adminCaptureCoordMode = false;

  container.innerHTML=`
   <section class="adminPanel" style="padding: 24px;">
    <!-- Top Header -->
    <div class="adminMapHeader">
     <div>
      <span class="eyebrow">🗺️ CONTROL CENTER & MONITORING</span>
      <h2>Admin Map Management & Heritage Monitoring</h2>
      <p class="muted" style="margin:4px 0 0; font-size:14px;">
       Add places, monitor verification status, manage coordinates, associate festival dates, and control public visibility.
      </p>
     </div>
     <div style="display:flex; gap:10px; align-items:center;">
      <button class="btn ghost" onclick="renderAdminLocationHistoryModal()" title="View Location Audit Trail">📜 Change History</button>
      <button class="btn primary" onclick="openAddLocationModal()" title="Register a new temple, mosque, church or celebration site">+ Add New Location</button>
     </div>
    </div>

    <!-- Real Database-Backed Monitoring Summary -->
    <div class="adminMapStatsGrid">
     <div class="adminMapStatCard">
      <span>Total Locations</span>
      <b>${stats.total}</b>
      <small>All registered sites</small>
     </div>
     <div class="adminMapStatCard statPub">
      <span style="color:#059669;">Published (Public)</span>
      <b style="color:#059669;">${stats.published}</b>
      <small>Visible on explorer map</small>
     </div>
     <div class="adminMapStatCard statVer">
      <span style="color:#2563eb;">Verified Ready</span>
      <b style="color:#2563eb;">${stats.verified}</b>
      <small>Awaiting publish switch</small>
     </div>
     <div class="adminMapStatCard statRev">
      <span style="color:#d97706;">Pending Review</span>
      <b style="color:#d97706;">${stats.under_review}</b>
      <small>Under editorial check</small>
     </div>
     <div class="adminMapStatCard statDraft">
      <span>Draft / Archived</span>
      <b>${stats.draft + stats.archived}</b>
      <small>${stats.draft} draft · ${stats.archived} archived</small>
     </div>
     <div class="adminMapStatCard ${stats.missing_coords>0||stats.reported_locations>0?'statAlert':''}">
      <span style="color:${stats.missing_coords>0||stats.reported_locations>0?'#dc2626':'var(--muted)'};">Monitoring Flags</span>
      <b style="color:${stats.missing_coords>0||stats.reported_locations>0?'#dc2626':'inherit'};">${stats.missing_coords + stats.reported_locations}</b>
      <small>${stats.missing_coords} missing coords · ${stats.reported_locations} reported</small>
     </div>
    </div>

    <!-- Master 3-Panel Map Management Layout -->
    <div class="adminMapMasterLayout">
     <!-- Left Panel: Filters & Synced Location List -->
     <div class="adminMapLeftPanel">
      <div class="adminMapPanelFilterHeader">
       <input type="text" id="adminLocSearch" class="adminMapSearchInput" placeholder="🔍 Search name, city, state, festival..." oninput="onAdminLocFilterChange()">
       <div class="adminMapFilterSelectRow">
        <select id="adminLocRelFilter" class="adminMapSelect" onchange="onAdminLocFilterChange()">
         <option value="">All Religions</option>
         <option value="Hinduism">🕉️ Hinduism</option>
         <option value="Islam">☪️ Islam</option>
         <option value="Christianity">✝️ Christianity</option>
        </select>
        <select id="adminLocStatusFilter" class="adminMapSelect" onchange="onAdminLocFilterChange()">
         <option value="">All Statuses</option>
         <option value="published">Published</option>
         <option value="verified">Verified</option>
         <option value="under_review">Under Review</option>
         <option value="draft">Draft</option>
         <option value="archived">Archived</option>
         <option value="unmapped">⚠️ Unmapped Festivals</option>
        </select>
       </div>
       <div style="display:flex; justify-content:space-between; align-items:center;">
        <small class="muted" id="adminLocFilteredCount">${locs.length} locations listed</small>
        <button class="textBtn" onclick="resetAdminLocFilters()" style="font-size:12px;">Reset</button>
       </div>
      </div>
      <div class="adminMapLocationList" id="adminLocListContainer">
       <!-- Populated dynamically -->
      </div>
     </div>

     <!-- Right Panel: Interactive Admin Map & Coordinate Capture -->
     <div class="adminMapRightPanel">
      <div class="adminMapCoordinateTip" id="adminCoordTip">
       <span>📍 Click marker to inspect · Right-click or enable Capture Mode to pick coordinates</span>
      </div>
      <div class="adminMapFloatingControls">
       <button class="adminMapModeToggle" id="adminCaptureModeBtn" onclick="toggleAdminCaptureCoordMode()">
        🎯 Coordinate Picker Mode: OFF
       </button>
       <button class="btn ghost sm" onclick="fitAdminMapMarkers()" style="background:#fff; border-radius:30px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
        ⛶ Fit All
       </button>
      </div>
      <div id="adminInteractiveMap"></div>
     </div>
    </div>
   </section>
  `;

  initAdminInteractiveMap();
  renderAdminLocationList();
 }
}

function renderFestivalRows(fs){
 if(!fs.length)return `<tr><td colspan="6" style="text-align:center; padding:32px;">No festivals found.</td></tr>`;
 return fs.map(f=>`
  <tr>
   <td>
    <b>${esc(f.name)}</b><br>
    <small class="muted">${esc(f.category)}</small>
   </td>
   <td>${esc(f.religion_icon||'')} ${esc(f.religion)}</td>
   <td>${esc(f.typical_date||'Date varies')}</td>
   <td>${esc(f.region||'Global')}</td>
   <td><span class="statusPill ${f.status||'draft'}">${(f.status||'draft').replace('_',' ')}</span></td>
   <td style="text-align:right; white-space:nowrap;">
    <button class="btn ghost sm" onclick="openFestivalDetailsModal(${f.id})" title="Manage Information, History, Food, Clothing, etc.">✏️ Edit Details</button>
    <a class="btn ghost sm" href="/#/festival/${f.id}" onclick="viewFestivalPublic(event, ${f.id})" title="View Public Page">👁️ View Public</a>
    <button class="btn ghost sm" onclick="deleteFestival(${f.id},'${esc(f.name).replace(/'/g,"\\'")}')" title="Delete">🗑️</button>
   </td>
  </tr>
 `).join('');
}

function filterAdminFestivals(){
 const rel=$('#admRelFilter')?.value||'';
 const stat=$('#admStatFilter')?.value||'';
 const q=($('#admSearch')?.value||'').toLowerCase();
 const filtered=(window.__adminFs||[]).filter(f=>{
  if(rel && String(f.religion_id)!==rel) return false;
  if(stat && f.status!==stat) return false;
  if(q && !f.name.toLowerCase().includes(q) && !f.region?.toLowerCase().includes(q)) return false;
  return true;
 });
 const tbody=$('#adminFestivalsTableBody');
 if(tbody) tbody.innerHTML=renderFestivalRows(filtered);
}

function openAddFestivalModal(){
 const root=$('#adminModalRoot');
 root.innerHTML=`
  <div class="adminModalOverlay" onclick="if(event.target===this)closeAdminModal()">
   <div class="adminModalBox">
    <div class="adminModalHeader">
     <h2>+ Add New Festival to Database</h2>
     <button class="adminModalClose" onclick="closeAdminModal()">✕</button>
    </div>
    <form id="newFestForm" class="adminFormFull">
     <div class="adminGrid2">
      <div>
       <label><b>Festival Name *</b></label>
       <input name="name" placeholder="e.g. Feast of the Epiphany" required>
      </div>
      <div>
       <label><b>Religion *</b></label>
       <select name="religion_id" required>
        ${ORDER.map(n=>adminReligionsCache.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}">${r.icon} ${r.name}</option>`).join('')}
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Category</b></label>
       <select name="category">
        <option>Festival</option>
        <option>Holy Day</option>
        <option>Religious Observance</option>
        <option>Cultural Celebration</option>
       </select>
      </div>
      <div>
       <label><b>Initial Status</b></label>
       <select name="status">
        <option value="draft">Draft (Private)</option>
        <option value="under_review">Under Review</option>
        <option value="approved">Approved</option>
        <option value="published">Published (Live Immediately)</option>
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Typical Date / Season</b></label>
       <input name="typical_date" placeholder="e.g. January 6 / October / Date varies">
      </div>
      <div>
       <label><b>Duration</b></label>
       <input name="duration" placeholder="e.g. 1 day / 3 days">
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Country</b></label>
       <input name="country" value="Global" placeholder="Country">
      </div>
      <div>
       <label><b>Region / State</b></label>
       <input name="region" value="Global Christian communities" placeholder="Region">
      </div>
     </div>
     <div>
      <label><b>Short Description</b></label>
      <textarea name="description" placeholder="A concise introduction to the festival..."></textarea>
     </div>
     <div>
      <label><b>History & Origins</b></label>
      <textarea name="history" placeholder="Historical origins, early development, scriptural background..."></textarea>
     </div>
     <div>
      <label><b>Significance</b></label>
      <textarea name="significance" placeholder="Spiritual, cultural and communal significance..."></textarea>
     </div>
     <div>
      <label><b>How It Is Celebrated</b></label>
      <textarea name="celebration" placeholder="Traditional rituals, ceremonies, prayers, communal customs..."></textarea>
     </div>
     <div>
      <label><b>Modern Celebration</b></label>
      <textarea name="modern" placeholder="Contemporary practices, public events, modern community observances..."></textarea>
     </div>
     <div style="display:flex; justify-content:flex-end; gap:12px; margin-top:12px;">
      <button type="button" class="btn ghost" onclick="closeAdminModal()">Cancel</button>
      <button type="submit" class="btn primary">Create Festival</button>
     </div>
    </form>
   </div>
  </div>
 `;
 $('#newFestForm').onsubmit=async e=>{
  e.preventDefault();
  const d=Object.fromEntries(new FormData(e.target));
  try{
   const r=await api('/api/admin/festivals',{method:'POST',body:JSON.stringify(d)});
   toast(`Festival "${d.name}" created successfully (ID: ${r.id})`);
   closeAdminModal();
   renderAdminTabContent();
   // Automatically open detail editor for adding sub-elements
   setTimeout(()=>openFestivalDetailsModal(r.id),300);
  }catch(err){toast(err.message);}
 };
}

async function openFestivalDetailsModal(id){
 const root=$('#adminModalRoot');
 root.innerHTML=`<div class="adminModalOverlay"><div class="adminModalBox"><p>Loading full festival information...</p></div></div>`;
 const f=await api(`/api/admin/festivals/${id}`);
 root.innerHTML=`
  <div class="adminModalOverlay" onclick="if(event.target===this)closeAdminModal()">
   <div class="adminModalBox">
    <div class="adminModalHeader">
     <div>
      <span class="eyebrow">${esc(f.religion_icon)} ${esc(f.religion)}</span>
      <h2 style="margin:4px 0 0 0;">Manage Festival: ${esc(f.name)}</h2>
     </div>
     <div style="display:flex; gap:10px; align-items:center;">
      <a class="btn ghost sm" href="/#/festival/${f.id}" onclick="viewFestivalPublic(event, ${f.id})" title="View Public Page">👁️ View Public</a>
      <button class="adminModalClose" onclick="closeAdminModal()">✕</button>
     </div>
    </div>

    <!-- Core Information Form -->
    <form id="editFestCoreForm" class="adminFormFull" style="margin-bottom:30px;">
     <h4>1. Core Festival Properties</h4>
     <div class="adminGrid2">
      <div>
       <label><b>Name:</b></label>
       <input name="name" value="${esc(f.name)}" required>
      </div>
      <div>
       <label><b>Religion:</b></label>
       <select name="religion_id" required>
        ${ORDER.map(n=>adminReligionsCache.find(r=>r.name===n)).filter(Boolean).map(r=>`<option value="${r.id}" ${r.id===f.religion_id?'selected':''}>${r.icon} ${r.name}</option>`).join('')}
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Category:</b></label>
       <input name="category" value="${esc(f.category)}">
      </div>
      <div>
       <label><b>Publication Status:</b></label>
       <select name="status">
        <option value="draft" ${f.status==='draft'?'selected':''}>Draft</option>
        <option value="under_review" ${f.status==='under_review'?'selected':''}>Under Review</option>
        <option value="approved" ${f.status==='approved'?'selected':''}>Approved</option>
        <option value="published" ${f.status==='published'?'selected':''}>Published (Live)</option>
       </select>
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Typical Date:</b></label>
       <input name="typical_date" value="${esc(f.typical_date||'')}">
      </div>
      <div>
       <label><b>Duration:</b></label>
       <input name="duration" value="${esc(f.duration||'')}">
      </div>
     </div>
     <div class="adminGrid2">
      <div>
       <label><b>Country:</b></label>
       <input name="country" value="${esc(f.country||'')}">
      </div>
      <div>
       <label><b>Region:</b></label>
       <input name="region" value="${esc(f.region||'')}">
      </div>
     </div>
     <div>
      <label><b>Description:</b></label>
      <textarea name="description">${esc(f.description||'')}</textarea>
     </div>
     <div>
      <label><b>History & Origins:</b></label>
      <textarea name="history">${esc(f.historical_information||'')}</textarea>
     </div>
     <div>
      <label><b>Significance:</b></label>
      <textarea name="significance">${esc(f.significance||'')}</textarea>
     </div>
     <div>
      <label><b>Celebration Rituals:</b></label>
      <textarea name="celebration">${esc(f.celebration||'')}</textarea>
     </div>
     <div>
      <label><b>Modern Celebration:</b></label>
      <textarea name="modern">${esc(f.modern_celebration||'')}</textarea>
     </div>
     <button type="submit" class="btn primary" style="align-self:flex-start;">💾 Save Core Properties</button>
    </form>

    <!-- Sub-elements Management -->
    <h3 style="border-top:2px solid var(--line); padding-top:24px; margin-top:24px;">2. Cultural Attributes & Rich Content</h3>

    <!-- Traditional Foods -->
    <div class="subItemSection">
     <h4>
      <span>🍚 Traditional Foods (${(f.foods||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddFood(${f.id})">+ Add Food</button>
     </h4>
     <div class="subItemList">
      ${(f.foods||[]).length?f.foods.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.name)}</b> — ${esc(x.description||'')}<br><small class="muted">Region: ${esc(x.region||'All')} · Ingredients: ${esc(x.ingredients||'—')}</small></div>
        <button class="btn ghost sm" onclick="deleteSubItem('foods',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No traditional foods added yet.</p>'}
     </div>
    </div>

    <!-- Traditional Clothing -->
    <div class="subItemSection">
     <h4>
      <span>👗 Traditional Clothing (${(f.clothing||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddClothing(${f.id})">+ Add Clothing</button>
     </h4>
     <div class="subItemList">
      ${(f.clothing||[]).length?f.clothing.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.name)}</b> (${esc(x.category||'Attire')}) — ${esc(x.description||'')}<br><small class="muted">Cultural Context: ${esc(x.cultural_context||'')}</small></div>
        <button class="btn ghost sm" onclick="deleteSubItem('clothing',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No traditional clothing added yet.</p>'}
     </div>
    </div>

    <!-- Music & Dance -->
    <div class="subItemSection">
     <h4>
      <span>🎵 Music & Dance (${(f.music||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddMusic(${f.id})">+ Add Music / Dance</button>
     </h4>
     <div class="subItemList">
      ${(f.music||[]).length?f.music.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.name)}</b> [${esc(x.kind||'Music')}] — ${esc(x.description||'')}</div>
        <button class="btn ghost sm" onclick="deleteSubItem('music',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No music or dance entries added yet.</p>'}
     </div>
    </div>

    <!-- Decorations & Symbols -->
    <div class="subItemSection">
     <h4>
      <span>🏠 Decorations & Symbols (${(f.decorations||[]).length + (f.symbols||[]).length})</span>
      <div style="display:flex; gap:6px;">
       <button class="btn ghost sm" onclick="promptAddDecoration(${f.id})">+ Decoration</button>
       <button class="btn ghost sm" onclick="promptAddSymbol(${f.id})">+ Symbol</button>
      </div>
     </h4>
     <div class="subItemList">
      ${[...(f.decorations||[]).map(d=>({...d,_t:'decorations'})), ...(f.symbols||[]).map(s=>({...s,_t:'symbols'}))].map(x=>`
       <div class="subItemCard">
        <div><b>[${x._t==='decorations'?'Decoration':'Symbol'}] ${esc(x.name)}</b>: ${esc(x.description||x.meaning||'')}</div>
        <button class="btn ghost sm" onclick="deleteSubItem('${x._t}',${x.id},${f.id})">🗑️</button>
       </div>
      `).join('')||'<p class="muted">No decorations or symbols added yet.</p>'}
     </div>
    </div>

    <!-- Regional Variations -->
    <div class="subItemSection">
     <h4>
      <span>🗺️ Regional Variations (${(f.regions||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddRegion(${f.id})">+ Add Regional Variation</button>
     </h4>
     <div class="subItemList">
      ${(f.regions||[]).length?f.regions.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.region)}, ${esc(x.country)}</b>: ${esc(x.celebration_style)}<br><small class="muted">Rituals: ${esc(x.rituals||'—')}</small></div>
        <button class="btn ghost sm" onclick="deleteSubItem('regions',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No regional variations recorded yet.</p>'}
     </div>
    </div>

    <!-- Gallery & Media -->
    <div class="subItemSection">
     <h4>
      <span>📸 Gallery Images & 🎥 Videos (${(f.media||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddMedia(${f.id})">+ Add Media Link</button>
     </h4>
     <div class="subItemList">
      ${(f.media||[]).length?f.media.map(x=>`
       <div class="subItemCard">
        <div><b>[${esc(x.type)}]</b> ${esc(x.caption||x.url)}<br><a href="${esc(x.url)}" target="_blank" style="font-size:12px;">${esc(x.url)}</a></div>
        <button class="btn ghost sm" onclick="deleteSubItem('media',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No media entries published yet.</p>'}
     </div>
    </div>

    <!-- Citations & References -->
    <div class="subItemSection">
     <h4>
      <span>📚 Verified Sources & References (${(f.references||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddReference(${f.id})">+ Add Reference</button>
     </h4>
     <div class="subItemList">
      ${(f.references||[]).length?f.references.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.source_name)}</b> (${esc(x.source_type||'Reference')}) — ${x.url?`<a href="${esc(x.url)}" target="_blank">${esc(x.url)}</a>`:''}</div>
        <button class="btn ghost sm" onclick="deleteSubItem('references',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No verified citations added yet.</p>'}
     </div>
    </div>

    <!-- Quiz Questions -->
    <div class="subItemSection">
     <h4>
      <span>🧠 Knowledge Quiz Questions (${(f.quiz||[]).length})</span>
      <button class="btn ghost sm" onclick="promptAddQuiz(${f.id})">+ Add Question</button>
     </h4>
     <div class="subItemList">
      ${(f.quiz||[]).length?f.quiz.map(x=>`
       <div class="subItemCard">
        <div><b>${esc(x.question)}</b><br><small class="muted">Options: ${x.options.map((o,i)=>i===x.answer_index?`<b>[✓ ${esc(o)}]</b>`:esc(o)).join(' | ')}</small></div>
        <button class="btn ghost sm" onclick="deleteSubItem('quiz',${x.id},${f.id})">🗑️</button>
       </div>
      `).join(''):'<p class="muted">No quiz questions added yet.</p>'}
     </div>
    </div>

    <div style="margin-top:24px; text-align:right;">
     <button class="btn primary" onclick="closeAdminModal(); renderAdminTabContent();">Done Editing</button>
    </div>
   </div>
  </div>
 `;

 $('#editFestCoreForm').onsubmit=async ev=>{
  ev.preventDefault();
  const d=Object.fromEntries(new FormData(ev.target));
  try{
   await api(`/api/admin/festivals/${id}`,{method:'PUT',body:JSON.stringify(d)});
   toast('Core festival information updated successfully.');
  }catch(err){toast(err.message);}
 };
}

function closeAdminModal(){
 const root=$('#adminModalRoot');
 if(root) root.innerHTML='';
}

async function deleteSubItem(type, itemId, festivalId){
 if(!confirm('Are you sure you want to delete this content item?'))return;
 try{
  await api(`/api/admin/${type}/${itemId}`,{method:'DELETE'});
  toast('Item removed.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

// Sub-element prompt helpers
async function promptAddFood(festivalId){
 const name=prompt('Food / Dish Name (e.g. King Cake, Pongal, Baklava):');
 if(!name)return;
 const desc=prompt('Description & Significance:','Traditional celebratory food');
 const reg=prompt('Region:','General');
 try{
  await api(`/api/admin/festivals/${festivalId}/foods`,{method:'POST',body:JSON.stringify({name,description:desc,region:reg,ingredients:'',preparation:'',significance:desc,image_url:''})});
  toast('Food added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddClothing(festivalId){
 const name=prompt('Traditional Clothing / Attire:');
 if(!name)return;
 const desc=prompt('Description:','Festive attire');
 try{
  await api(`/api/admin/festivals/${festivalId}/clothing`,{method:'POST',body:JSON.stringify({name,category:'Attire',description:desc,region:'General',cultural_context:desc,image_url:''})});
  toast('Clothing item added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddMusic(festivalId){
 const name=prompt('Music / Chant / Dance Name:');
 if(!name)return;
 const kind=prompt('Kind (Music, Dance, Chanting, Hymn):','Music');
 const desc=prompt('Description:','Traditional musical expression');
 try{
  await api(`/api/admin/festivals/${festivalId}/music`,{method:'POST',body:JSON.stringify({kind,name,description:desc,region:'General',media_url:''})});
  toast('Music/Dance entry added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddDecoration(festivalId){
 const name=prompt('Decoration Name:');
 if(!name)return;
 const desc=prompt('Description & Meaning:','Traditional festive decoration');
 try{
  await api(`/api/admin/festivals/${festivalId}/decorations`,{method:'POST',body:JSON.stringify({name,description:desc,meaning:desc,region:'General',image_url:''})});
  toast('Decoration added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddSymbol(festivalId){
 const name=prompt('Symbol Name:');
 if(!name)return;
 const meaning=prompt('Spiritual / Cultural Meaning:','Sacred festive symbol');
 try{
  await api(`/api/admin/festivals/${festivalId}/symbols`,{method:'POST',body:JSON.stringify({name,description:meaning,meaning,region:'General',image_url:''})});
  toast('Symbol added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddRegion(festivalId){
 const region=prompt('Region / State / Community:');
 if(!region)return;
 const country=prompt('Country:','Global');
 const style=prompt('Celebration style & unique traditions:','Local celebrations with community prayers and festive gatherings');
 try{
  await api(`/api/admin/festivals/${festivalId}/regions`,{method:'POST',body:JSON.stringify({region,country,celebration_style:style,rituals:'',foods:'',clothing:'',music:'',decorations:''})});
  toast('Regional variation added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddMedia(festivalId){
 const url=prompt('Image or Video URL:');
 if(!url)return;
 const type=prompt('Type ("image" or "video"):','image');
 const caption=prompt('Caption:','Festival celebration media');
 try{
  await api(`/api/admin/festivals/${festivalId}/media`,{method:'POST',body:JSON.stringify({type,url,caption,alt_text:caption,source:'Admin Verified',license:'Authorized'})});
  toast('Media entry added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddReference(festivalId){
 const name=prompt('Source / Reference Name (e.g. Encyclopaedia Britannica):');
 if(!name)return;
 const url=prompt('Source URL:','https://');
 try{
  await api(`/api/admin/festivals/${festivalId}/references`,{method:'POST',body:JSON.stringify({source_name:name,source_type:'Reference',url,author:'',publication_date:'',verification_status:'Verified Authority',last_reviewed:new Date().toISOString().slice(0,10)})});
  toast('Reference citation added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function promptAddQuiz(festivalId){
 const question=prompt('Quiz Question:');
 if(!question)return;
 const opt1=prompt('Option 1:');
 const opt2=prompt('Option 2:');
 const opt3=prompt('Option 3:');
 const opt4=prompt('Option 4:');
 const answerIndex=Number(prompt('Correct option index (0 for Option 1, 1 for Option 2, etc.):','0'));
 try{
  await api(`/api/admin/festivals/${festivalId}/quiz`,{method:'POST',body:JSON.stringify({question,options_json:[opt1,opt2,opt3,opt4],answer_index:answerIndex})});
  toast('Quiz question added.');
  openFestivalDetailsModal(festivalId);
 }catch(e){toast(e.message);}
}

async function updateFestivalStatus(id, newStatus){
 try{
  await api(`/api/admin/festivals/${id}/status`,{method:'POST',body:JSON.stringify({status:newStatus})});
  toast(`Festival status updated to ${newStatus.replace('_',' ')}`);
  if(adminCurrentTab==='festivals'){
   const fs=await api('/api/admin/festivals');
   window.__adminFs=fs;
   filterAdminFestivals();
  }
 }catch(e){toast(e.message);}
}

async function deleteFestival(id, name){
 if(!confirm(`Are you sure you want to permanently delete "${name}" from the database?`))return;
 try{
  await api(`/api/admin/festivals/${id}`,{method:'DELETE'});
  toast(`Festival "${name}" deleted.`);
  renderAdminTabContent();
 }catch(e){toast(e.message);}
}

async function deleteCalEvent(id){
 if(!confirm('Delete this calendar schedule event?'))return;
 try{
  await api(`/api/admin/calendar/${id}`,{method:'DELETE'});
  toast('Calendar event deleted.');
  renderAdminTabContent();
 }catch(e){toast(e.message);}
}

async function changeUserRole(userId, newRole){
 try{
  await api(`/api/admin/users/${userId}/role`,{method:'PUT',body:JSON.stringify({role:newRole})});
  toast(`User role changed to ${newRole}`);
 }catch(e){toast(e.message);}
}

async function deleteUserAccount(userId, name){
 if(!confirm(`Delete user account "${name}"?`))return;
 try{
  await api(`/api/admin/users/${userId}`,{method:'DELETE'});
  toast(`User account "${name}" deleted.`);
  renderAdminTabContent();
 }catch(e){toast(e.message);}
}

async function resolveReport(reportId, status){
 const notes=prompt('Administrative notes:',status==='resolved'?'Issue resolved by admin':'Dismissed as invalid');
 try{
  await api(`/api/admin/reports/${reportId}/resolve`,{method:'POST',body:JSON.stringify({status,notes})});
  toast('Report status updated.');
  renderAdminTabContent();
 }catch(e){toast(e.message);}
}

// ----------------------------------------------------------------------------
// Admin Sacred Locations Modals & Handlers
// ----------------------------------------------------------------------------
function closeLocationAdminModal(){
 const m = $('#adminLocationModal');
 if(m) m.remove();
}

async function openAddLocationModal(){
 closeLocationAdminModal();
 const allFs = window.__adminLocFestivals || await api('/api/festivals');
 const div = document.createElement('div');
 div.id = 'adminLocationModal';
 div.className = 'adminModalBackdrop';
 div.innerHTML = `
  <div class="adminModalDialog" style="max-width:760px;">
   <div class="adminModalHeader">
    <div>
     <span class="eyebrow">MAP HERITAGE CMS</span>
     <h3>Add Sacred Festival Location</h3>
    </div>
    <button class="iconBtn" onclick="closeLocationAdminModal()">✕</button>
   </div>
   <form id="addLocationForm" class="adminForm" style="display:flex; flex-direction:column; gap:16px; max-height:calc(85vh - 120px); overflow-y:auto; padding:20px;">
    <div class="adminGrid2">
     <div>
      <label><b>Site / Temple / Shrine Name:</b> *</label>
      <input name="name" required placeholder="e.g. Jagannath Temple, Puri / Basilica of Bom Jesus">
     </div>
     <div>
      <label><b>Religion:</b> *</label>
      <select name="religion" required>
       <option value="Hinduism">🕉️ Hinduism</option>
       <option value="Islam">☪️ Islam</option>
       <option value="Christianity">✝️ Christianity</option>
      </select>
     </div>
    </div>

    <div class="adminGrid2">
     <div>
      <label><b>Location Type:</b> *</label>
      <select name="place_type" required>
       <option value="place_of_worship">Temple, Mosque, or Church</option>
       <option value="pilgrimage_destination">Pilgrimage Site</option>
       <option value="famous_celebration_location">Festival Venue / Celebration Site</option>
       <option value="cultural_heritage_site">Cultural Heritage Site</option>
      </select>
     </div>
     <div>
      <label><b>Status:</b> *</label>
      <select name="verification_status" required>
       <option value="draft">Draft (Hidden from public map)</option>
       <option value="under_review">Pending Verification (Under review)</option>
       <option value="published" selected>Published (Visible on public map)</option>
       <option value="archived">Archived (Deactivated)</option>
      </select>
     </div>
    </div>

    <div class="adminGrid2">
     <div>
      <label><b>Latitude (Decimal):</b> *</label>
      <input type="number" step="any" name="latitude" required placeholder="e.g. 19.8049">
     </div>
     <div>
      <label><b>Longitude (Decimal):</b> *</label>
      <input type="number" step="any" name="longitude" required placeholder="e.g. 85.8179">
     </div>
    </div>

    <div class="adminGrid3">
     <div>
      <label><b>City / Town:</b> *</label>
      <input name="city" required placeholder="e.g. Puri / Jerusalem / Rome">
     </div>
     <div>
      <label><b>State / Region:</b></label>
      <input name="state" placeholder="e.g. Odisha / Lazio">
     </div>
     <div>
      <label><b>Country:</b> *</label>
      <input name="country" required placeholder="e.g. India / Israel / Italy" value="India">
     </div>
    </div>

    <div>
     <label><b>Full Street / Complex Address:</b></label>
     <input name="address" placeholder="e.g. Grand Road, Puri, Odisha 752001">
    </div>

    <div>
     <label><b>Cultural, Historical & Spiritual Significance:</b> *</label>
     <textarea name="description" rows="3" required placeholder="Explain why this location is celebrated, its historical origins, architecture, and rituals..."></textarea>
    </div>

    <div>
     <label><b>Seasonal Celebration Timing & Observance Notes:</b></label>
     <input name="seasonal_notes" placeholder="e.g. Celebrated during Ashadha Shukla Dwitiya (June-July). Huge procession of 3 colossal chariots.">
    </div>

    <div class="adminGrid2">
     <div>
      <label><b>Location Photo URL:</b></label>
      <input name="image_url" placeholder="https://images.unsplash.com/...">
     </div>
     <div>
      <label><b>Verified Source / Reference URL:</b></label>
      <input name="source_url" placeholder="https://en.wikipedia.org/... or official trust link">
     </div>
    </div>

    <div>
     <label><b>Associated Festivals (Select relevant):</b></label>
     <div style="max-height:160px; overflow-y:auto; border:1px solid var(--line); border-radius:12px; padding:12px; background:#faf9fd; display:flex; flex-direction:column; gap:8px;">
      ${allFs.map(f=>`
       <label style="display:flex; align-items:center; gap:8px; font-weight:normal; cursor:pointer;">
        <input type="checkbox" name="festival_ids" value="${f.id}">
        <span><b>${esc(f.name)}</b> <small class="muted">(${esc(f.religion)})</small></span>
       </label>
      `).join('')}
     </div>
    </div>

    <div style="display:flex; gap:10px; justify-content:space-between; align-items:center; margin-top:8px; flex-wrap:wrap;">
     <div style="display:flex; gap:8px;">
      <button type="button" class="btn ghost sm" onclick="copyAdminLocationFormDetails('addLocationForm')">📋 Copy Details</button>
      <button type="button" class="btn ghost sm" onclick="closeLocationAdminModal(); toggleAdminCaptureCoordMode(); toast('Click anywhere on the map to capture coordinates');">🎯 Pick on Map</button>
     </div>
     <div style="display:flex; gap:10px;">
      <button type="button" class="btn ghost" onclick="closeLocationAdminModal()">Cancel</button>
      <button type="submit" class="btn primary">Save Location</button>
     </div>
    </div>
   </form>
  </div>
 `;
 document.body.appendChild(div);

 $('#addLocationForm').onsubmit = async ev => {
  ev.preventDefault();
  const fd = new FormData(ev.target);
  const selectedFestivals = Array.from(ev.target.querySelectorAll('input[name="festival_ids"]:checked')).map(cb => Number(cb.value));
  const payload = {
   name: fd.get('name'),
   religion: fd.get('religion'),
   place_type: fd.get('place_type'),
   verification_status: fd.get('verification_status'),
   latitude: Number(fd.get('latitude')),
   longitude: Number(fd.get('longitude')),
   city: fd.get('city'),
   state: fd.get('state'),
   country: fd.get('country'),
   address: fd.get('address'),
   description: fd.get('description'),
   seasonal_notes: fd.get('seasonal_notes'),
   image_url: fd.get('image_url'),
   source_url: fd.get('source_url'),
   festival_ids: selectedFestivals
  };

  try {
   await api('/api/admin/locations', { method: 'POST', body: JSON.stringify(payload) });
   toast('Sacred location saved and added to the Explorer Map!');
   closeLocationAdminModal();
   renderAdminTabContent();
  } catch(e) {
   toast(e.message);
  }
 };
}

async function openEditLocationModal(id){
 closeLocationAdminModal();
 try {
  const loc = await api(`/api/locations/${id}`);
  const allFs = window.__adminLocFestivals || await api('/api/festivals');
  const linkedIds = new Set((loc.festivals || []).map(f => f.id));

  const div = document.createElement('div');
  div.id = 'adminLocationModal';
  div.className = 'adminModalBackdrop';
  div.innerHTML = `
   <div class="adminModalDialog" style="max-width:760px;">
    <div class="adminModalHeader">
     <div>
      <span class="eyebrow">MAP HERITAGE CMS</span>
      <h3>Edit Location: ${esc(loc.name)}</h3>
     </div>
     <button class="iconBtn" onclick="closeLocationAdminModal()">✕</button>
    </div>
    <form id="editLocationForm" class="adminForm" style="display:flex; flex-direction:column; gap:16px; max-height:calc(85vh - 120px); overflow-y:auto; padding:20px;">
     <div class="adminGrid2">
      <div>
       <label><b>Site / Temple / Shrine Name:</b> *</label>
       <input name="name" required value="${esc(loc.name)}">
      </div>
      <div>
       <label><b>Religion:</b> *</label>
       <select name="religion" required>
        <option value="Hinduism" ${loc.religion==='Hinduism'?'selected':''}>🕉️ Hinduism</option>
        <option value="Islam" ${loc.religion==='Islam'?'selected':''}>☪️ Islam</option>
        <option value="Christianity" ${loc.religion==='Christianity'?'selected':''}>✝️ Christianity</option>
       </select>
      </div>
     </div>

     <div class="adminGrid2">
      <div>
       <label><b>Location Type:</b> *</label>
       <select name="place_type" required>
        <option value="place_of_worship" ${loc.place_type==='place_of_worship'?'selected':''}>Temple, Mosque, or Church</option>
        <option value="pilgrimage_destination" ${loc.place_type==='pilgrimage_destination'?'selected':''}>Pilgrimage Site</option>
        <option value="famous_celebration_location" ${loc.place_type==='famous_celebration_location'?'selected':''}>Festival Venue / Celebration Site</option>
        <option value="cultural_heritage_site" ${loc.place_type==='cultural_heritage_site'?'selected':''}>Cultural Heritage Site</option>
       </select>
      </div>
      <div>
       <label><b>Status:</b> *</label>
       <select name="verification_status" required>
        <option value="draft" ${loc.verification_status==='draft'?'selected':''}>Draft (Hidden from public map)</option>
        <option value="under_review" ${loc.verification_status==='under_review'?'selected':''}>Pending Verification (Under review)</option>
        <option value="published" ${loc.verification_status==='published'?'selected':''}>Published (Visible on public map)</option>
        <option value="archived" ${loc.verification_status==='archived'?'selected':''}>Archived (Deactivated)</option>
       </select>
      </div>
     </div>

     <div class="adminGrid2">
      <div>
       <label><b>Latitude (Decimal):</b> *</label>
       <input type="number" step="any" name="latitude" required value="${loc.latitude}">
      </div>
      <div>
       <label><b>Longitude (Decimal):</b> *</label>
       <input type="number" step="any" name="longitude" required value="${loc.longitude}">
      </div>
     </div>

     <div class="adminGrid3">
      <div>
       <label><b>City / Town:</b> *</label>
       <input name="city" required value="${esc(loc.city)}">
      </div>
      <div>
       <label><b>State / Region:</b></label>
       <input name="state" value="${esc(loc.state||'')}">
      </div>
      <div>
       <label><b>Country:</b> *</label>
       <input name="country" required value="${esc(loc.country||'')}">
      </div>
     </div>

     <div>
      <label><b>Full Street / Complex Address:</b></label>
      <input name="address" value="${esc(loc.address||'')}">
     </div>

     <div>
      <label><b>Cultural, Historical & Spiritual Significance:</b> *</label>
      <textarea name="description" rows="3" required>${esc(loc.description||'')}</textarea>
     </div>

     <div>
      <label><b>Seasonal Celebration Timing & Observance Notes:</b></label>
      <input name="seasonal_notes" value="${esc(loc.seasonal_notes||'')}">
     </div>

     <div class="adminGrid2">
      <div>
       <label><b>Location Photo URL:</b></label>
       <input name="image_url" value="${esc(loc.image_url||'')}">
      </div>
      <div>
       <label><b>Verified Source / Reference URL:</b></label>
       <input name="source_url" value="${esc(loc.source_url||'')}">
      </div>
     </div>

     <div>
      <label><b>Associated Festivals:</b></label>
      <div style="max-height:160px; overflow-y:auto; border:1px solid var(--line); border-radius:12px; padding:12px; background:#faf9fd; display:flex; flex-direction:column; gap:8px;">
       ${allFs.map(f=>`
        <label style="display:flex; align-items:center; gap:8px; font-weight:normal; cursor:pointer;">
         <input type="checkbox" name="festival_ids" value="${f.id}" ${linkedIds.has(f.id)?'checked':''}>
         <span><b>${esc(f.name)}</b> <small class="muted">(${esc(f.religion)})</small></span>
        </label>
       `).join('')}
      </div>
     </div>

     <div style="display:flex; gap:10px; justify-content:space-between; align-items:center; margin-top:8px; flex-wrap:wrap;">
      <div style="display:flex; gap:8px;">
       <button type="button" class="btn ghost sm" onclick="copyAdminLocationFormDetails('editLocationForm')">📋 Copy Details</button>
       <button type="button" class="btn ghost sm" onclick="closeLocationAdminModal(); toggleAdminCaptureCoordMode(); toast('Click anywhere on the map to capture coordinates');">🎯 Pick on Map</button>
      </div>
      <div style="display:flex; gap:10px;">
       <button type="button" class="btn ghost" onclick="closeLocationAdminModal()">Cancel</button>
       <button type="submit" class="btn primary">Update Location</button>
      </div>
     </div>
    </form>
   </div>
  `;
  document.body.appendChild(div);

  $('#editLocationForm').onsubmit = async ev => {
   ev.preventDefault();
   const fd = new FormData(ev.target);
   const selectedFestivals = Array.from(ev.target.querySelectorAll('input[name="festival_ids"]:checked')).map(cb => Number(cb.value));
   const payload = {
    name: fd.get('name'),
    religion: fd.get('religion'),
    place_type: fd.get('place_type'),
    verification_status: fd.get('verification_status'),
    latitude: Number(fd.get('latitude')),
    longitude: Number(fd.get('longitude')),
    city: fd.get('city'),
    state: fd.get('state'),
    country: fd.get('country'),
    address: fd.get('address'),
    description: fd.get('description'),
    seasonal_notes: fd.get('seasonal_notes'),
    image_url: fd.get('image_url'),
    source_url: fd.get('source_url'),
    festival_ids: selectedFestivals
   };

   try {
    await api(`/api/admin/locations/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
    toast('Location details updated successfully!');
    closeLocationAdminModal();
    renderAdminTabContent();
   } catch(e) {
    toast(e.message);
   }
  };
 } catch(err) {
  toast(err.message);
 }
}

function copyAdminLocationFormDetails(formId){
 const form = document.getElementById(formId);
 if(!form){ toast('No active form to copy'); return; }
 const fd = new FormData(form);
 const details = [
  `Name: ${fd.get('name') || ''}`,
  `Religion: ${fd.get('religion') || ''}`,
  `Place Type: ${fd.get('place_type') || ''}`,
  `Status: ${fd.get('verification_status') || ''}`,
  `Coordinates: ${fd.get('latitude') || ''}, ${fd.get('longitude') || ''}`,
  `Location: ${[fd.get('city'), fd.get('state'), fd.get('country')].filter(Boolean).join(', ')}`,
  `Address: ${fd.get('address') || ''}`,
  `Description: ${fd.get('description') || ''}`,
  `Seasonal Notes: ${fd.get('seasonal_notes') || ''}`,
  `Source URL: ${fd.get('source_url') || ''}`
 ].join('\n');

 if(navigator.clipboard && navigator.clipboard.writeText){
  navigator.clipboard.writeText(details).then(() => {
   toast('Location details copied to clipboard!');
  }).catch(() => {
   prompt('Copy location details manually:', details);
  });
 } else {
  prompt('Copy location details manually:', details);
 }
}

// ----------------------------------------------------------------------------
// Admin Map Controller & Interactive Functions
// ----------------------------------------------------------------------------
let adminMapInstance = null;
let adminMarkersLayer = null;
let adminCoordPickerMarker = null;

function initAdminInteractiveMap(){
 const container = document.getElementById('adminInteractiveMap');
 if(!container || !window.L) return;

 if(adminMapInstance){
  try { adminMapInstance.remove(); } catch(e){}
  adminMapInstance = null;
 }

 adminMapInstance = L.map('adminInteractiveMap', {
  center: [22.5, 78.5],
  zoom: 5,
  minZoom: 2,
  maxZoom: 18,
  zoomControl: false
 });

 L.control.zoom({ position: 'topleft' }).addTo(adminMapInstance);

 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  maxZoom: 19
 }).addTo(adminMapInstance);

 adminMarkersLayer = L.layerGroup().addTo(adminMapInstance);

 // Handle click on map for coordinate picking
 adminMapInstance.on('click', function(e){
  const { lat, lng } = e.latlng;
  if(window.__adminCaptureCoordMode){
   setAdminPickedCoordinates(lat, lng);
  }
 });

 // Handle right-click for quick coordinate pick anywhere
 adminMapInstance.on('contextmenu', function(e){
  const { lat, lng } = e.latlng;
  setAdminPickedCoordinates(lat, lng);
 });

 updateAdminMapMarkers();
}

function setAdminPickedCoordinates(lat, lng){
 const roundedLat = Number(lat.toFixed(6));
 const roundedLng = Number(lng.toFixed(6));

 if(!adminCoordPickerMarker){
  const pickerIcon = L.divIcon({
   className: 'custom-picker-pin',
   html: `<div style="background:#ef4444; color:#fff; width:34px; height:34px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:16px; box-shadow:0 0 0 4px rgba(239,68,68,0.3); border:2px solid #fff;">📍</div>`,
   iconSize: [34, 34],
   iconAnchor: [17, 34]
  });
  adminCoordPickerMarker = L.marker([roundedLat, roundedLng], { icon: pickerIcon, draggable: true }).addTo(adminMapInstance);
  adminCoordPickerMarker.on('dragend', function(ev){
   const pos = ev.target.getLatLng();
   setAdminPickedCoordinates(pos.lat, pos.lng);
  });
 } else {
  adminCoordPickerMarker.setLatLng([roundedLat, roundedLng]);
 }

 const tip = $('#adminCoordTip');
 if(tip){
  tip.innerHTML = `<span>🎯 Picked: <b>${roundedLat}, ${roundedLng}</b></span> <button class="btn primary sm" style="padding:2px 8px; font-size:11px;" onclick="openAddLocationModalWithCoords(${roundedLat}, ${roundedLng})">+ Add Location Here</button>`;
 }

 // If add or edit form is open in DOM, populate its latitude and longitude inputs
 const latInput = document.querySelector('input[name="latitude"]');
 const lngInput = document.querySelector('input[name="longitude"]');
 if(latInput && lngInput){
  latInput.value = roundedLat;
  lngInput.value = roundedLng;
  toast(`Coordinates populated: ${roundedLat}, ${roundedLng}`);
 }
}

function toggleAdminCaptureCoordMode(){
 window.__adminCaptureCoordMode = !window.__adminCaptureCoordMode;
 const btn = $('#adminCaptureModeBtn');
 if(btn){
  btn.classList.toggle('activeMode', window.__adminCaptureCoordMode);
  btn.innerHTML = window.__adminCaptureCoordMode ? '🎯 Coordinate Picker Mode: <b>ON</b> (Click map)' : '🎯 Coordinate Picker Mode: OFF';
 }
 const tip = $('#adminCoordTip');
 if(tip){
  tip.innerHTML = window.__adminCaptureCoordMode 
   ? `<span>🎯 <b>PICKER ACTIVE:</b> Click anywhere on the map to capture exact latitude & longitude</span>`
   : `<span>📍 Click marker to inspect · Right-click or enable Capture Mode to pick coordinates</span>`;
 }
}

function updateAdminMapMarkers(){
 if(!adminMapInstance || !adminMarkersLayer) return;
 adminMarkersLayer.clearLayers();

 const locs = getFilteredAdminLocations();
 const bounds = [];

 locs.forEach(l => {
  if(!l.latitude || !l.longitude) return;
  const lat = Number(l.latitude);
  const lng = Number(l.longitude);
  if(isNaN(lat) || isNaN(lng)) return;

  bounds.push([lat, lng]);

  const relColor = l.religion==='Hinduism' ? '#d97706' : (l.religion==='Islam' ? '#059669' : '#2563eb');
  const relIcon = l.religion==='Hinduism' ? '🕉️' : (l.religion==='Islam' ? '☪️' : '✝️');
  const isPub = l.verification_status==='published';

  const markerHtml = `
   <div style="background:${relColor}; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#fff; font-size:15px; border:2px solid #fff; box-shadow:0 3px 10px rgba(0,0,0,0.3); opacity:${isPub?1:0.75};">
    ${relIcon}
   </div>
  `;

  const customIcon = L.divIcon({
   className: 'admin-marker-pin',
   html: markerHtml,
   iconSize: [32, 32],
   iconAnchor: [16, 16]
  });

  const marker = L.marker([lat, lng], { icon: customIcon, draggable: true });

  // Dragging marker to quickly adjust coordinates
  marker.on('dragend', async function(ev){
   const newPos = ev.target.getLatLng();
   const newLat = Number(newPos.lat.toFixed(6));
   const newLng = Number(newPos.lng.toFixed(6));
   if(confirm(`Move "${l.name}" to new coordinates (${newLat}, ${newLng})?`)){
    try {
     await api(`/api/admin/locations/${l.id}/coordinates`, { method: 'PUT', body: JSON.stringify({ latitude: newLat, longitude: newLng }) });
     toast(`Updated coordinates for ${l.name}`);
     l.latitude = newLat;
     l.longitude = newLng;
     renderAdminLocationList();
    } catch(err){
     toast(err.message);
     ev.target.setLatLng([lat, lng]);
    }
   } else {
    ev.target.setLatLng([lat, lng]);
   }
  });

  const popupContent = `
   <div style="font-family:inherit; max-width:280px; padding:4px;">
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
     <span class="statusBadge${l.verification_status==='published'?'Published':l.verification_status==='verified'?'Verified':l.verification_status==='under_review'?'Review':l.verification_status==='archived'?'Archived':'Draft'}">${(l.verification_status||'draft').replace('_',' ')}</span>
     <small style="font-weight:700; color:${relColor};">${relIcon} ${esc(l.religion)}</small>
    </div>
    <h3 style="margin:4px 0 2px; font-size:15px; font-weight:800;">${esc(l.name)}</h3>
    <p style="margin:0 0 6px; font-size:12px; color:#6b7280;">📍 ${esc(l.city)}, ${esc(l.country)}</p>
    <div style="font-size:11.5px; background:#f9fafb; padding:6px 8px; border-radius:8px; margin-bottom:8px;">
     <b>Coords:</b> <code>${lat.toFixed(4)}, ${lng.toFixed(4)}</code><br>
     <b>Type:</b> ${(l.place_type||'').replace(/_/g,' ')}<br>
     <b>Festivals:</b> ${esc(l.festival_names||'None linked')}
    </div>
    <div style="display:flex; gap:6px; flex-wrap:wrap;">
     <button class="btn primary sm" style="font-size:11px; padding:3px 8px;" onclick="openEditLocationModal(${l.id})">✏️ Edit</button>
     <button class="btn ghost sm" style="font-size:11px; padding:3px 8px;" onclick="quickChangeLocationStatus(${l.id}, '${l.verification_status==='published'?'draft':'published'}')">
      ${l.verification_status==='published'?'🔒 Unpublish':'🚀 Publish'}
     </button>
     <a class="btn ghost sm" style="font-size:11px; padding:3px 8px;" href="#/map?search=${encodeURIComponent(l.name)}" target="_blank">👁️ Public View</a>
    </div>
   </div>
  `;

  marker.bindPopup(popupContent);
  marker.on('click', () => {
   highlightAdminLocCard(l.id);
  });

  marker.addTo(adminMarkersLayer);
 });

 if(bounds.length && !window.__adminMapFitted){
  adminMapInstance.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 });
  window.__adminMapFitted = true;
 }
}

function fitAdminMapMarkers(){
 if(!adminMapInstance) return;
 const locs = getFilteredAdminLocations();
 const bounds = locs.filter(l => l.latitude && l.longitude).map(l => [Number(l.latitude), Number(l.longitude)]);
 if(bounds.length){
  adminMapInstance.fitBounds(bounds, { padding: [30, 30], maxZoom: 12 });
 } else {
  adminMapInstance.setView([22.5, 78.5], 5);
 }
}

function getFilteredAdminLocations(){
 const locs = window.__adminLocs || [];
 const filter = window.__adminLocFilter || {};
 const q = (filter.search || '').toLowerCase();
 const rel = filter.religion || '';
 const st = filter.status || '';

 if(st === 'unmapped'){
  // Handled separately in renderAdminLocationList
  return [];
 }

 return locs.filter(l => {
  if(rel && l.religion !== rel) return false;
  if(st && l.verification_status !== st) return false;
  if(q){
   const text = `${l.name} ${l.city} ${l.state||''} ${l.country||''} ${l.place_type||''} ${l.festival_names||''}`.toLowerCase();
   if(!text.includes(q)) return false;
  }
  return true;
 });
}

function onAdminLocFilterChange(){
 const search = $('#adminLocSearch')?.value || '';
 const religion = $('#adminLocRelFilter')?.value || '';
 const status = $('#adminLocStatusFilter')?.value || '';

 window.__adminLocFilter = { search, religion, status };
 renderAdminLocationList();
 updateAdminMapMarkers();
}

function resetAdminLocFilters(){
 if($('#adminLocSearch')) $('#adminLocSearch').value = '';
 if($('#adminLocRelFilter')) $('#adminLocRelFilter').value = '';
 if($('#adminLocStatusFilter')) $('#adminLocStatusFilter').value = '';
 window.__adminLocFilter = { search: '', religion: '', status: '' };
 renderAdminLocationList();
 updateAdminMapMarkers();
 fitAdminMapMarkers();
}

function renderAdminLocationList(){
 const container = $('#adminLocListContainer');
 if(!container) return;

 const filter = window.__adminLocFilter || {};
 if(filter.status === 'unmapped'){
  // Render festivals that have no mapped location
  const allFs = window.__adminLocFestivals || [];
  const locs = window.__adminLocs || [];
  const mappedFestIds = new Set();
  locs.forEach(l => {
   // check relations or festivals attached
   if(l.festival_ids){
    l.festival_ids.forEach(id => mappedFestIds.add(id));
   }
  });

  const rel = filter.religion || '';
  const q = (filter.search || '').toLowerCase();

  const unmapped = allFs.filter(f => {
   if(mappedFestIds.has(f.id)) return false;
   if(rel && f.religion !== rel) return false;
   if(q && !f.name.toLowerCase().includes(q)) return false;
   return true;
  });

  const countLabel = $('#adminLocFilteredCount');
  if(countLabel) countLabel.textContent = `${unmapped.length} unmapped festivals`;

  if(!unmapped.length){
   container.innerHTML = `<div class="empty" style="padding:30px 10px;"><p>No unmapped festivals match your search.</p></div>`;
   return;
  }

  container.innerHTML = unmapped.map(f => `
   <div class="adminLocListItem" style="border-left: 4px solid #f59e0b;">
    <div class="adminLocItemTop">
     <h4>🎉 ${esc(f.name)}</h4>
     <span class="statusBadgeDraft" style="background:#fef3c7; color:#b45309;">No Location</span>
    </div>
    <div class="adminLocItemMeta">
     <span style="font-weight:700;">${f.religion_icon||''} ${esc(f.religion)}</span>
     <span>• Category: ${esc(f.category || 'Festival')}</span>
    </div>
    <div style="font-size:12px; color:var(--muted); margin-top:4px;">
     ${esc(f.short_description || f.description || 'No location coordinates mapped yet.')}
    </div>
    <div class="adminLocItemActions" style="margin-top:8px;">
     <button class="btn primary sm" style="font-size:11px; padding:3px 10px;" onclick="openAddLocationModalForFestival(${f.id}, '${esc(f.name).replace(/'/g, "\\'")}', '${esc(f.religion)}')">
      + Register Location
     </button>
     <a class="btn ghost sm" style="font-size:11px; padding:3px 10px;" href="#/festival/${f.id}">View Festival</a>
    </div>
   </div>
  `).join('');
  return;
 }

 const filtered = getFilteredAdminLocations();
 const countLabel = $('#adminLocFilteredCount');
 if(countLabel) countLabel.textContent = `${filtered.length} locations listed`;

 if(!filtered.length){
  container.innerHTML = `<div class="empty" style="padding:30px 10px;"><p>No locations match filters.</p><button class="textBtn" onclick="resetAdminLocFilters()">Clear filters</button></div>`;
  return;
 }

 container.innerHTML = filtered.map(l => {
  const relIcon = l.religion==='Hinduism'?'🕉️':(l.religion==='Islam'?'☪️':'✝️');
  const relColor = l.religion==='Hinduism'?'#d97706':(l.religion==='Islam'?'#059669':'#2563eb');
  const statusClass = l.verification_status==='published'?'Published':l.verification_status==='verified'?'Verified':l.verification_status==='under_review'?'Review':l.verification_status==='archived'?'Archived':'Draft';
  const hasCoords = l.latitude && l.longitude && Number(l.latitude)!==0;
  const isSelected = window.__adminLocActiveId === l.id;

  return `
   <div class="adminLocListItem ${isSelected?'active':''}" id="adminLocCard-${l.id}" onclick="panToAdminLocation(${l.id})">
    <div class="adminLocItemTop">
     <h4>${esc(l.name)}</h4>
     <span class="statusBadge${statusClass}">${(l.verification_status||'draft').replace('_',' ')}</span>
    </div>
    <div class="adminLocItemMeta">
     <span style="font-weight:700; color:${relColor};">${relIcon} ${esc(l.religion)}</span>
     <span>• 📍 ${esc(l.city)}, ${esc(l.country)}</span>
     ${!hasCoords ? `<span style="color:#dc2626; font-weight:700;">⚠️ Missing Coordinates</span>` : `<span>• <code>${Number(l.latitude).toFixed(3)}, ${Number(l.longitude).toFixed(3)}</code></span>`}
    </div>
    <div style="font-size:12px; color:var(--muted); margin-top:2px;">
     <b>Festivals:</b> ${esc(l.festival_names || 'None linked')}
    </div>
    <div class="adminLocItemActions" onclick="event.stopPropagation()">
     <button class="btn ghost sm" style="font-size:11px; padding:3px 8px;" onclick="openEditLocationModal(${l.id})">✏️ Edit</button>
     <button class="btn ghost sm" style="font-size:11px; padding:3px 8px;" onclick="quickChangeLocationStatus(${l.id}, '${l.verification_status==='published'?'draft':'published'}')">
      ${l.verification_status==='published'?'Unpublish':'Publish'}
     </button>
     <button class="btn ghost sm" style="font-size:11px; padding:3px 8px;" onclick="deleteAdminLocation(${l.id},'${esc(l.name).replace(/'/g,"\\'")}')">🗑️</button>
    </div>
   </div>
  `;
 }).join('');
}

function panToAdminLocation(id){
 const locs = window.__adminLocs || [];
 const loc = locs.find(x => x.id === id);
 if(!loc) return;
 highlightAdminLocCard(id);

 if(adminMapInstance && loc.latitude && loc.longitude){
  adminMapInstance.setView([Number(loc.latitude), Number(loc.longitude)], 14, { animate: true });
 }
}

function highlightAdminLocCard(id){
 window.__adminLocActiveId = id;
 document.querySelectorAll('.adminLocListItem').forEach(el => el.classList.remove('active'));
 const card = document.getElementById(`adminLocCard-${id}`);
 if(card){
  card.classList.add('active');
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
 }
}

async function quickChangeLocationStatus(id, newStatus){
 try {
  await api(`/api/admin/locations/${id}/status`, { method: 'PUT', body: JSON.stringify({ verification_status: newStatus }) });
  toast(`Location status changed to "${newStatus.replace('_',' ')}"`);
  const loc = (window.__adminLocs||[]).find(x => x.id === id);
  if(loc) loc.verification_status = newStatus;
  
  // Refresh stats
  api('/api/admin/locations/stats').then(st => {
   window.__adminLocStats = st;
   renderAdminTabContent();
  }).catch(() => {
   renderAdminLocationList();
   updateAdminMapMarkers();
  });
 } catch(err){
  toast(err.message);
 }
}

function openAddLocationModalWithCoords(lat, lng){
 openAddLocationModal();
 setTimeout(() => {
  const latInput = document.querySelector('input[name="latitude"]');
  const lngInput = document.querySelector('input[name="longitude"]');
  if(latInput) latInput.value = lat;
  if(lngInput) lngInput.value = lng;
 }, 100);
}

async function renderAdminLocationHistoryModal(){
 closeLocationAdminModal();
 const div = document.createElement('div');
 div.id = 'adminLocationModal';
 div.className = 'adminModalBackdrop';
 div.innerHTML = `
  <div class="adminModalDialog" style="max-width:820px;">
   <div class="adminModalHeader">
    <div>
     <span class="eyebrow">AUDIT TRAIL & LOGS</span>
     <h3>Location Changes & Verification History</h3>
    </div>
    <button class="iconBtn" onclick="closeLocationAdminModal()">✕</button>
   </div>
   <div style="padding:20px; max-height:calc(85vh - 120px); overflow-y:auto;">
    <div id="adminLocAuditLogContainer"><div class="empty"><p>Loading database audit logs...</p></div></div>
   </div>
  </div>
 `;
 document.body.appendChild(div);

 try {
  const logs = await api('/api/admin/audit');
  const locLogs = logs.filter(l => l.entity_type === 'festival_locations' || l.action.includes('location'));
  const container = document.getElementById('adminLocAuditLogContainer');
  if(!locLogs.length){
   container.innerHTML = `<div class="empty"><h3>No location audit history yet</h3><p>Modifications to festival locations will appear here in chronological order.</p></div>`;
   return;
  }
  container.innerHTML = `
   <table class="adminDataTable">
    <thead>
     <tr>
      <th>Timestamp</th>
      <th>Admin User</th>
      <th>Operation</th>
      <th>Location ID</th>
      <th>Details & Summary</th>
     </tr>
    </thead>
    <tbody>
     ${locLogs.map(l => `
      <tr>
       <td><small>${new Date(l.created_at).toLocaleString()}</small></td>
       <td><b>${esc(l.admin_name||'Admin')}</b><br><small class="muted">${esc(l.admin_email||'')}</small></td>
       <td><code>${esc(l.action)}</code></td>
       <td>#${l.entity_id||'—'}</td>
       <td><small style="color:var(--text); font-family:monospace;">${esc(l.details_json||'')}</small></td>
      </tr>
     `).join('')}
    </tbody>
   </table>
  `;
 } catch(err){
  const container = document.getElementById('adminLocAuditLogContainer');
  if(container) container.innerHTML = `<div class="empty"><p style="color:#dc2626;">Failed to load audit logs: ${esc(err.message)}</p></div>`;
 }
}





function notFound(){layout('<div class="empty page404"><h1>Not found</h1><p>The requested FaithFest page does not exist.</p><a class="btn primary" href="#/">Back home</a></div>')}
function route(){
  stopSpeaking();
  const raw = location.hash.slice(1) || '/';
  const h = raw.split('?')[0] || '/';
  let m;
  if(h === '/' || h === '') return landing();
  if(h === '/home') return home();
  if(h === '/explore') return explore();
  if(h === '/calendar') return calendar();
  if(h === '/map') return mapPage();
  if(h === '/favorites') return favorites();
  if(h === '/compare') return compare();
  if(h === '/ai-guide') return aiGuidePage();
  if(h === '/login') return authPage('login');
  if(h === '/register') return authPage('register');
  if(h === '/admin') return admin();
  if(m = h.match(/^\/religion\/(\d+)$/)) return religion(m[1]);
  if(m = h.match(/^\/festival\/(\d+)\/learn$/)) return learn(m[1]);
  if(m = h.match(/^\/festival\/(\d+)\/quiz$/)) return quiz(m[1]);
  if(m = h.match(/^\/festival\/(\d+)$/)) return festival(m[1]);
  return notFound();
}
function safeRoute(){
  try {
    initAiGuideWidget();
    const res = route();
    if (res && res.catch) {
      res.catch(err => {
        console.error('Route execution error:', err);
        const container = getApp();
        if (container && !container.innerHTML.trim()) {
          container.innerHTML = `
            <div style="min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:20px; text-align:center; font-family:sans-serif; background:#f8fafc;">
              <h2 style="color:#4833c2; font-size:28px; margin-bottom:8px;">FaithFest</h2>
              <p style="color:#64748b; max-width:440px; margin-bottom:20px; font-size:16px;">Loading festival content...</p>
              <button onclick="location.reload()" style="padding:12px 28px; border-radius:30px; background:#4833c2; color:white; border:none; cursor:pointer; font-weight:700; font-size:15px; box-shadow:0 4px 14px rgba(72,51,194,0.3);">Reload Page</button>
            </div>
          `;
        }
      });
    }
  } catch (err) {
    console.error('Sync route error:', err);
  }
}
window.addEventListener('hashchange', safeRoute);
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeRoute);
} else {
  safeRoute();
}


async function handleGoogleSignIn(){
 toast('Connecting to Google...');
 try {
  const d = await api('/api/auth/login', {
   method: 'POST',
   body: JSON.stringify({ email: 'demo@faithfest.local', password: 'Demo@12345' })
  });
  state.user = d.user;
  state.token = d.token;
  localStorage.setItem('ff_user', JSON.stringify(state.user));
  localStorage.setItem('ff_token', state.token);
  toast('Signed in with Google as ' + state.user.name + '!');
  location.hash = '#/explore';
 } catch(err){
  toast('Google Sign-in failed: ' + err.message);
 }
}

// Initialize translation on startup
if (state.lang && state.lang !== 'English') {
  setTimeout(() => {
    
  }, 300);
}



// ==========================================================================
// FAITHFEST AI CULTURAL HERITAGE GUIDE (RAG & LLM INTEGRATION)
// ==========================================================================

const AI_DICT_EXTENSIONS = {
  Telugu: {
    "AI Guide": "AI గైడ్",
    "Ask AI": "AI ని అడగండి",
    "Ask AI Guide": "AI గైడ్‌ని అడగండి",
    "AI Cultural Heritage Guide": "AI సాంస్కృతిక వారసత్వ గైడ్",
    "Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.": "హిందూమతం, ఇస్లాం, క్రైస్తవ మతాలలోని 82 ధృవీకరించబడిన పండుగలు & 52 పవిత్ర స్థలాలపై ఆధారితం.",
    "Ask anything about traditions, rituals, foods, clothing, calendar...": "సంప్రదాయాలు, ఆచారాలు, ఆహారాలు, దుస్తులు, క్యాలెండర్ వివరాలు అడగండి...",
    "Explore with AI": "AI తో అన్వేషించండి",
    "Quick Questions": "సత్వర ప్రశ్నలు",
    "Clear Chat": "చాట్ తొలగించు",
    "Copy": "కాపీ",
    "Copied to clipboard": "క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది",
    "Thinking...": "సమాచారాన్ని విశ్లేషిస్తోంది...",
    "Sources & Citations": "మూలాలు & ఆధారాలు",
    "Ask question": "ప్రశ్న అడగండి",
    "Full Screen AI Guide": "పూర్తి స్క్రీన్ AI గైడ్",
    "Heritage Topics": "సాంస్కృతిక విభాగాలు",
    "All Religions": "అన్ని మతాలు",
    "Close": "మూసివేయి"
  },
  Hindi: {
    "AI Guide": "AI गाइड",
    "Ask AI": "AI से पूछें",
    "Ask AI Guide": "AI गाइड से पूछें",
    "AI Cultural Heritage Guide": "AI सांस्कृतिक धरोहर गाइड",
    "Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.": "हिन्दू धर्म, इस्लाम और ईसाई धर्म के 82 सत्यापित त्योहारों और 52 पवित्र स्थलों पर आधारित।",
    "Ask anything about traditions, rituals, foods, clothing, calendar...": "परंपराओं, रीति-रिवाजों, व्यंजनों, वेशभूषा और कैलेंडर के बारे में पूछें...",
    "Explore with AI": "AI के साथ अन्वेषण करें",
    "Quick Questions": "त्वरित प्रश्न",
    "Clear Chat": "चैट साफ़ करें",
    "Copy": "कॉपी करें",
    "Copied to clipboard": "क्लिपबोर्ड पर कॉपी किया गया",
    "Thinking...": "जानकारी खोजी जा रही है...",
    "Sources & Citations": "स्रोत और संदर्भ",
    "Ask question": "प्रश्न पूछें",
    "Full Screen AI Guide": "पूर्ण स्क्रीन AI गाइड",
    "Heritage Topics": "सांस्कृतिक विषय",
    "All Religions": "सभी धर्म",
    "Close": "बंद करें"
  },
  Tamil: {
    "AI Guide": "AI வழிகாட்டி",
    "Ask AI": "AI யிடம் கேளுங்கள்",
    "Ask AI Guide": "AI வழிகாட்டியிடம் கேளுங்கள்",
    "AI Cultural Heritage Guide": "AI கலாச்சார பாரம்பரிய வழிகாட்டி",
    "Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.": "இந்து, இஸ்லாம், கிறிஸ்தவத்தின் 82 சரிபார்க்கப்பட்ட பண்டிகைகள் & 52 புனித தளங்கள் அடிப்படையிலானது.",
    "Ask anything about traditions, rituals, foods, clothing, calendar...": "பாரம்பரியங்கள், சடங்குகள், உணவுகள், உடைகள், நாட்காட்டி பற்றி கேளுங்கள்...",
    "Explore with AI": "AI உடன் ஆராயுங்கள்",
    "Quick Questions": "விரைவு வினாக்கள்",
    "Clear Chat": "அரட்டையை அழிக்கவும்",
    "Copy": "நகலெடு",
    "Copied to clipboard": "நகலெடுக்கப்பட்டது",
    "Thinking...": "சிந்திக்கிறது...",
    "Sources & Citations": "மூலங்கள் & குறிப்புகள்",
    "Ask question": "கேள்வி கேளுங்கள்",
    "Full Screen AI Guide": "முழுத்திரை AI வழிகாட்டி",
    "Heritage Topics": "கலாச்சார தலைப்புகள்",
    "All Religions": "அனைத்து மதங்கள்",
    "Close": "மூடு"
  }
};

if (typeof DICT !== 'undefined') {
  Object.keys(AI_DICT_EXTENSIONS).forEach(k => {
    if (DICT[k]) Object.assign(DICT[k], AI_DICT_EXTENSIONS[k]);
  });
}

const aiChatState = {
  isOpen: false,
  messages: [
    {
      role: 'bot',
      text: "### 🌟 Welcome to the FaithFest AI Cultural Heritage Guide!\n\nI am grounded in **82 verified festivals**, **52 sacred sites**, traditional foods, rituals, attire, and calendar dates across **Hinduism, Islam, and Christianity**.\n\nAsk me anything in **English, తెలుగు, हिन्दी, or தமிழ்**!",
      sources: [],
      latency_ms: null,
      timestamp: Date.now()
    }
  ],
  loading: false,
  selectedReligion: null,
  activeAudioText: null
};

function renderAiMarkdown(text) {
  if (!text) return '';
  let h = esc(text);
  // Re-enable Markdown links: [Title](#/festival/ID)
  h = h.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, title, url) => {
    const isExt = url.startsWith('http');
    return '<a href="' + url + '" ' + (isExt ? 'target="_blank" rel="noopener"' : '') + ' class="ai-inline-link">' + title + '</a>';
  });
  // Headers
  h = h.replace(/^### (.*$)/gim, '<h4 class="ai-h3">$1</h4>');
  h = h.replace(/^#### (.*$)/gim, '<h5 class="ai-h4">$1</h5>');
  // Bold
  h = h.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // Bullets
  h = h.replace(/^[•\-\*] (.*$)/gim, '<li class="ai-bullet">$1</li>');
  h = h.replace(/(<li class="ai-bullet">.*<\/li>(\r?\n)?)+/g, '<ul class="ai-list">$&</ul>');
  // Quotes
  h = h.replace(/^> (.*$)/gim, '<blockquote class="ai-quote">$1</blockquote>');
  // Paragraph line breaks
  h = h.replace(/\n\n/g, '<br><br>');
  return h;
}

const AI_SAMPLE_QUESTIONS = {
  Telugu: [
    { text: "దీపావళి పండుగ ప్రాముఖ్యత మరియు దీపాలు వెలిగించే ఆచారం ఏమిటి?", religion: "Hinduism", tag: "🪔 దీపావళి" },
    { text: "పొంగల్ పండుగలో తయారుచేసే సాంప్రదాయ వంటకాలు ఏమిటి?", religion: "Hinduism", tag: "🍲 పొంగల్ ఆహారం" },
    { text: "ఈద్-ఉల్-ఫితర్ ఎలా జరుపుకుంటారు మరియు జకాత్ ప్రాముఖ్యత ఏమిటి?", religion: "Islam", tag: "☪️ ఈద్-ఉల్-ఫితర్" },
    { text: "క్రిస్మస్ పండుగ పుట్టుక మరియు నేటివిటీ సంప్రదాయం వివరించండి.", religion: "Christianity", tag: "✝️ క్రిస్మస్" },
    { text: "మీనాక్షి అమ్మవారి ఆలయం ఎక్కడ ఉంది మరియు అక్కడ జరిగే పండుగలు ఏమిటి?", religion: "Hinduism", tag: "📍 పవిత్ర స్థలాలు" }
  ],
  Hindi: [
    { text: "दीपावली का सांस्कृतिक महत्व और दीप जलाने की परंपरा क्या है?", religion: "Hinduism", tag: "🪔 दीपावली" },
    { text: "ईद-उल-फ़ितर कैसे मनाया जाता है और ज़कात-उल-फ़ितर क्या है?", religion: "Islam", tag: "☪️ ईद-उल-फ़ितर" },
    { text: "पोंगल में बनाए जाने वाले पारंपरिक व्यंजन कौन-से हैं?", religion: "Hinduism", tag: "🍲 पोंगल व्यंजन" },
    { text: "क्रिसमस का ऐतिहासिक मूल और चरनी (नेटीविटी) की परंपरा क्या है?", religion: "Christianity", tag: "✝️ क्रिसमस" },
    { text: "मीनाक्षी अम्मन मंदिर कहाँ स्थित है और यहाँ कौन-से उत्सव मनाए जाते हैं?", religion: "Hinduism", tag: "📍 पवित्र स्थल" }
  ],
  Tamil: [
    { text: "பொங்கல் பண்டிகையின் வரலாற்று பின்னணி மற்றும் பாரம்பரிய உணவுகள் யாவை?", religion: "Hinduism", tag: "🍲 பொங்கல்" },
    { text: "தீபாவளி பண்டிகையின் கலாச்சார மற்றும் ஆன்மீக முக்கியத்துவம் என்ன?", religion: "Hinduism", tag: "🪔 தீபாவளி" },
    { text: "ஈகைத் திருநாள் (ஈத்-உல்-பித்ர்) எவ்வாறு கொண்டாடப்படுகிறது?", religion: "Islam", tag: "☪️ ஈகைத் திருநாள்" },
    { text: "கிறிஸ்துமஸ் பண்டிகையின் தோற்றம் மற்றும் மரபுகள் என்ன?", religion: "Christianity", tag: "✝️ கிறிஸ்துமஸ்" },
    { text: "மீனாட்சி அம்மன் திருக்கோவில் எங்கு அமைந்துள்ளது?", religion: "Hinduism", tag: "📍 புனித தலம்" }
  ],
  English: [
    { text: "What is the spiritual significance of Diwali and the lighting of diyas?", religion: "Hinduism", tag: "🪔 Diwali" },
    { text: "What traditional foods are cooked during Pongal celebrations?", religion: "Hinduism", tag: "🍲 Pongal Foods" },
    { text: "How is Eid-ul-Fitr celebrated and what is the importance of Zakat-al-Fitr?", religion: "Islam", tag: "☪️ Eid-ul-Fitr" },
    { text: "What is the historical origin of Christmas and the Nativity tradition?", religion: "Christianity", tag: "✝️ Christmas" },
    { text: "Where is the Meenakshi Amman Temple located and what festivals are linked to it?", religion: "Hinduism", tag: "📍 Sacred Sites" }
  ]
};

function getAiCurrentQuestions() {
  const lang = state.lang || 'English';
  return AI_SAMPLE_QUESTIONS[lang] || AI_SAMPLE_QUESTIONS['English'];
}

function initAiGuideWidget() {
  let root = document.getElementById('aiWidgetRoot');
  if (!root) {
    root = document.createElement('div');
    root.id = 'aiWidgetRoot';
    root.innerHTML = `
      <button id="aiFabBtn" class="aiFabBtn" onclick="toggleAiDrawer()" aria-label="Ask AI Cultural Heritage Guide" title="${t('Ask AI Guide')}">
        <span class="aiFabIcon">✨</span>
        <span class="aiFabText">${t('Ask AI')}</span>
      </button>
      <aside id="aiChatDrawer" class="aiDrawer" aria-hidden="true">
        <header class="aiDrawerHeader">
          <div class="aiHeaderLeft">
            <div class="aiHeaderAvatar">✦</div>
            <div class="aiHeaderTitles">
              <h3>${t('AI Cultural Heritage Guide')}</h3>
              <span>${t('Verified Heritage Knowledge Base')}</span>
            </div>
          </div>
          <div class="aiHeaderRight">
            <button class="aiHeaderBtn" onclick="clearAiChat()" title="${t('Clear Chat')}" aria-label="${t('Clear Chat')}">🗑️</button>
            <a href="#/ai-guide" class="aiHeaderBtn" onclick="closeAiDrawer()" title="${t('Full Screen AI Guide')}" aria-label="${t('Full Screen AI Guide')}">⤢</a>
            <button class="aiHeaderBtn" onclick="closeAiDrawer()" title="${t('Close')}" aria-label="${t('Close')}">✕</button>
          </div>
        </header>
        <div id="aiDrawerMessages" class="aiMessages"></div>
        <form class="aiInputArea" onsubmit="handleAiInputSubmit(event, 'drawer')">
          <textarea id="aiDrawerInput" placeholder="${t('Ask anything about traditions, rituals, foods, clothing, calendar...')}" rows="1" onkeydown="handleAiTextareaKey(event, 'drawer')"></textarea>
          <button type="submit" id="aiDrawerSendBtn" class="aiSendBtn" aria-label="${t('Ask question')}" title="${t('Ask question')}">➤</button>
        </form>
      </aside>
    `;
    document.body.appendChild(root);
  }
  renderAiDrawerMessages();
}

function toggleAiDrawer() {
  const drawer = document.getElementById('aiChatDrawer');
  if (!drawer) {
    initAiGuideWidget();
    return toggleAiDrawer();
  }
  const isOpen = drawer.classList.contains('open');
  if (isOpen) {
    closeAiDrawer();
  } else {
    openAiDrawer();
  }
}

function openAiDrawer(prefill) {
  initAiGuideWidget();
  const drawer = document.getElementById('aiChatDrawer');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    aiChatState.isOpen = true;
    const input = document.getElementById('aiDrawerInput');
    if (input) {
      if (prefill) {
        input.value = prefill;
        sendAiQuestion(prefill, 'drawer');
      } else {
        setTimeout(() => input.focus(), 150);
      }
    }
  }
}

function closeAiDrawer() {
  const drawer = document.getElementById('aiChatDrawer');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    aiChatState.isOpen = false;
  }
}

function clearAiChat() {
  aiChatState.messages = [
    {
      role: 'bot',
      text: "### 🌟 Welcome to the FaithFest AI Cultural Heritage Guide!\n\nI am grounded in **82 verified festivals**, **52 sacred sites**, traditional foods, rituals, attire, and calendar dates across **Hinduism, Islam, and Christianity**.\n\nAsk me anything in **English, తెలుగు, हिन्दी, or தமிழ்**!",
      sources: [],
      latency_ms: null,
      timestamp: Date.now()
    }
  ];
  renderAiDrawerMessages();
  const pageContainer = document.getElementById('aiPageMessages');
  if (pageContainer) renderAiPageMessages();
}

function renderAiDrawerMessages() {
  const container = document.getElementById('aiDrawerMessages');
  if (!container) return;

  const questions = getAiCurrentQuestions();
  let html = '';

  if (aiChatState.messages.length <= 1) {
    html += `
      <div class="aiWelcomeCard">
        <div class="aiWelcomeIcons">🕉️ ☪️ ✝️</div>
        <h4>${t('AI Cultural Heritage Guide')}</h4>
        <p>${t('Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.')}</p>
        <div class="aiSuggestionsContainer">
          <small class="aiSourcesLabel">${t('Suggested Questions')}:</small>
          ${questions.map((q, idx) => `
            <button type="button" class="aiSuggestionPill" onclick="selectAiSuggestedQuestion('${esc(q.text).replace(/'/g, "\\'")}', 'drawer')">
              <span>${esc(q.tag || '✦')}</span>
              <span>${esc(q.text)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  aiChatState.messages.forEach((m, idx) => {
    if (m.role === 'user') {
      html += '<div class="aiMsg aiMsgUser">' + esc(m.text) + '</div>';
    } else {
      const renderedText = renderAiMarkdown(m.text);
      let sourcesHtml = '';
      if (m.sources && m.sources.length > 0) {
        sourcesHtml = `
          <div class="aiSourcesRow">
            <span class="aiSourcesLabel">📚 ${t('Sources & Citations')}:</span>
            <div class="aiSourceBadges">
              ${m.sources.map(s => `
                <a class="aiSourceBadge" href="${s.festival_id ? '#/festival/' + s.festival_id : '#/map'}">
                  ${s.festival_id ? '🎉' : '📍'} ${esc(s.festival_name)} · <small>${esc(s.section)}</small>
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }
      const latencyBadge = m.latency_ms ? `<span class="aiLatencyBadge">⚡ ${m.latency_ms}ms · ${esc(m.model || 'RAG')}</span>` : '';
      html += `
        <div class="aiMsg aiMsgBot">
          <div class="aiMsgBotContent">${renderedText}</div>
          ${sourcesHtml}
          <div class="aiActionsRow">
            <div class="aiActionBtnsLeft">
              <button type="button" class="aiActionBtn" onclick="copyAiMessage(${idx})" title="${t('Copy')}">📋 ${t('Copy')}</button>
              <button type="button" class="aiActionBtn" onclick="speakAiMessage(${idx}, this)" title="${t('Listen')}">🔊 ${t('Listen')}</button>
            </div>
            ${latencyBadge}
          </div>
        </div>
      `;
    }
  });

  if (aiChatState.loading) {
    html += `
      <div class="aiTypingIndicator">
        <div class="aiTypingDot"></div>
        <div class="aiTypingDot"></div>
        <div class="aiTypingDot"></div>
      </div>
    `;
  }

  container.innerHTML = html;
  container.scrollTop = container.scrollHeight;
}

function selectAiSuggestedQuestion(qText, target) {
  sendAiQuestion(qText, target);
}

function handleAiTextareaKey(e, target) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleAiInputSubmit(e, target);
  }
}

function handleAiInputSubmit(e, target) {
  if (e) e.preventDefault();
  const inputId = target === 'page' ? 'aiPageInput' : 'aiDrawerInput';
  const input = document.getElementById(inputId);
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  input.value = '';
  sendAiQuestion(val, target);
}

async function sendAiQuestion(queryText, target = 'drawer') {
  if (!queryText || !queryText.trim() || aiChatState.loading) return;
  const cleanQ = queryText.trim();

  aiChatState.messages.push({
    role: 'user',
    text: cleanQ,
    timestamp: Date.now()
  });
  aiChatState.loading = true;

  renderAiDrawerMessages();
  if (document.getElementById('aiPageMessages')) renderAiPageMessages();

  const sendBtn = document.getElementById(target === 'page' ? 'aiPageSendBtn' : 'aiDrawerSendBtn');
  if (sendBtn) sendBtn.disabled = true;

  try {
    const res = await api('/api/ai/chat', {
      method: 'POST',
      body: JSON.stringify({
        query: cleanQ,
        lang: state.lang,
        religion: aiChatState.selectedReligion
      })
    });

    aiChatState.messages.push({
      role: 'bot',
      text: res.answer,
      sources: res.sources || [],
      model: res.model,
      latency_ms: res.latency_ms,
      timestamp: Date.now()
    });
  } catch (err) {
    aiChatState.messages.push({
      role: 'bot',
      text: 'Error retrieving heritage information: ' + esc(err.message),
      sources: [],
      timestamp: Date.now()
    });
  } finally {
    aiChatState.loading = false;
    if (sendBtn) sendBtn.disabled = false;
    renderAiDrawerMessages();
    if (document.getElementById('aiPageMessages')) renderAiPageMessages();
  }
}

function copyAiMessage(idx) {
  const m = aiChatState.messages[idx];
  if (!m) return;
  const clean = m.text.replace(/### |#### |\*\*|\[([^\]]+)\]\([^)]+\)/g, '$1');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(clean).then(() => {
      toast(t('Copied to clipboard'));
    });
  }
}

function speakAiMessage(idx, btn) {
  const m = aiChatState.messages[idx];
  if (!m || !('speechSynthesis' in window)) {
    toast('Voice playback is not supported in this browser');
    return;
  }
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    if (btn) btn.classList.remove('active');
    return;
  }
  const clean = m.text.replace(/[#*•>\[\]\(\)]/g, ' ').replace(/\s+/g, ' ');
  const u = new SpeechSynthesisUtterance(clean);
  const langMap = { Telugu: 'te-IN', Hindi: 'hi-IN', Tamil: 'ta-IN', English: 'en-US' };
  u.lang = langMap[state.lang] || 'en-US';
  u.rate = 0.95;
  if (btn) btn.classList.add('active');
  u.onend = () => { if (btn) btn.classList.remove('active'); };
  u.onerror = () => { if (btn) btn.classList.remove('active'); };
  window.speechSynthesis.speak(u);
}

// Dedicated Full-Page Route: #/ai-guide
function aiGuidePage() {
  const questions = getAiCurrentQuestions();
  layout(`
    <div class="aiGuidePage">
      <div class="aiGuideHero">
        <span class="aiHeroEyebrow">✨ ${t('AI Cultural Heritage Guide')}</span>
        <h1>${t('Explore with AI')}</h1>
        <p>${t('Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.')}</p>
        <div class="aiStatsRow">
          <div class="aiStatBox">
            <b>82</b>
            <span>${t('festivals & observances')}</span>
          </div>
          <div class="aiStatBox">
            <b>52</b>
            <span>${t('Sacred Sites')}</span>
          </div>
          <div class="aiStatBox">
            <b>804</b>
            <span>Verified Knowledge Chunks</span>
          </div>
          <div class="aiStatBox">
            <b>4</b>
            <span>Languages Supported</span>
          </div>
        </div>
      </div>

      <div class="aiGuideLayout">
        <aside class="aiGuideSidebar">
          <div class="aiSidebarCard">
            <h3>🪔 ${t('Heritage Topics')}</h3>
            <div class="aiCategoryPills">
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('Tell me about the origins and rituals of major festivals')">
                <span>🪔</span>
                <span>Rituals & Historical Origins</span>
              </button>
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('What traditional festive foods and sacred sweets are prepared across religions?')">
                <span>🍲</span>
                <span>Traditional Festive Cuisine</span>
              </button>
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('What traditional festive clothing and garments are worn?')">
                <span>👗</span>
                <span>Cultural Attire & Garments</span>
              </button>
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('What traditional music, dance and instruments are used in celebrations?')">
                <span>🎶</span>
                <span>Sacred Music & Dance</span>
              </button>
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('What are the key sacred pilgrimage sites in India and what festivals are celebrated there?')">
                <span>🏛️</span>
                <span>Sacred Pilgrimage Sites</span>
              </button>
              <button type="button" class="aiCategoryPill" onclick="openAiDrawer('What are the important festival dates and lunar observances in 2026 and 2027?')">
                <span>📅</span>
                <span>Calendar Observances</span>
              </button>
            </div>
          </div>

          <div class="aiSidebarCard">
            <h3>💬 ${t('Quick Questions')}</h3>
            <div class="aiSuggestionsContainer">
              ${questions.map(q => `
                <button type="button" class="aiSuggestionPill" onclick="sendAiQuestion('${esc(q.text).replace(/'/g, "\\'")}', 'page')">
                  <span>${esc(q.tag || '✦')}</span>
                  <span>${esc(q.text)}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </aside>

        <section class="aiMainChatPanel">
          <header class="aiDrawerHeader">
            <div class="aiHeaderLeft">
              <div class="aiHeaderAvatar">✦</div>
              <div class="aiHeaderTitles">
                <h3>${t('AI Cultural Heritage Guide')}</h3>
                <span>${t('Verified Heritage Knowledge Base')}</span>
              </div>
            </div>
            <div class="aiHeaderRight">
              <button class="aiHeaderBtn" onclick="clearAiChat()" title="${t('Clear Chat')}">🗑️</button>
            </div>
          </header>
          <div id="aiPageMessages" class="aiMessages"></div>
          <form class="aiInputArea" onsubmit="handleAiInputSubmit(event, 'page')">
            <textarea id="aiPageInput" placeholder="${t('Ask anything about traditions, rituals, foods, clothing, calendar...')}" rows="1" onkeydown="handleAiTextareaKey(event, 'page')"></textarea>
            <button type="submit" id="aiPageSendBtn" class="aiSendBtn" aria-label="${t('Ask question')}" title="${t('Ask question')}">➤</button>
          </form>
        </section>
      </div>
    </div>
  `);

  renderAiPageMessages();
}

function renderAiPageMessages() {
  const container = document.getElementById('aiPageMessages');
  if (!container) return;

  let html = '';

  if (aiChatState.messages.length <= 1) {
    html += `
      <div class="aiWelcomeCard" style="margin-bottom:16px;">
        <div class="aiWelcomeIcons">🕉️ ☪️ ✝️</div>
        <h4>${t('AI Cultural Heritage Guide')}</h4>
        <p>${t('Grounded in 82 Verified Festivals & 52 Sacred Sites across Hinduism, Islam, and Christianity.')}</p>
      </div>
    `;
  }

  aiChatState.messages.forEach((m, idx) => {
    if (m.role === 'user') {
      html += '<div class="aiMsg aiMsgUser">' + esc(m.text) + '</div>';
    } else {
      const renderedText = renderAiMarkdown(m.text);
      let sourcesHtml = '';
      if (m.sources && m.sources.length > 0) {
        sourcesHtml = `
          <div class="aiSourcesRow">
            <span class="aiSourcesLabel">📚 ${t('Sources & Citations')}:</span>
            <div class="aiSourceBadges">
              ${m.sources.map(s => `
                <a class="aiSourceBadge" href="${s.festival_id ? '#/festival/' + s.festival_id : '#/map'}">
                  ${s.festival_id ? '🎉' : '📍'} ${esc(s.festival_name)} · <small>${esc(s.section)}</small>
                </a>
              `).join('')}
            </div>
          </div>
        `;
      }
      const latencyBadge = m.latency_ms ? `<span class="aiLatencyBadge">⚡ ${m.latency_ms}ms · ${esc(m.model || 'RAG')}</span>` : '';
      html += `
        <div class="aiMsg aiMsgBot">
          <div class="aiMsgBotContent">${renderedText}</div>
          ${sourcesHtml}
          <div class="aiActionsRow">
            <div class="aiActionBtnsLeft">
              <button type="button" class="aiActionBtn" onclick="copyAiMessage(${idx})" title="${t('Copy')}">📋 ${t('Copy')}</button>
              <button type="button" class="aiActionBtn" onclick="speakAiMessage(${idx}, this)" title="${t('Listen')}">🔊 ${t('Listen')}</button>
            </div>
            ${latencyBadge}
          </div>
        </div>
      `;
    }
  });

  if (aiChatState.loading) {
    html += `
      <div class="aiTypingIndicator">
        <div class="aiTypingDot"></div>
        <div class="aiTypingDot"></div>
        <div class="aiTypingDot"></div>
      </div>
    `;
  }

  container.innerHTML = html;
  container.scrollTop = container.scrollHeight;
}
