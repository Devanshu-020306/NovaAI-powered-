feather.replace();
VANTA.WAVES({
  el:"#vanta-bg",
  color:0x3b82f6,
  waveHeight:20,
  shininess:50,
  waveSpeed:0.5,
  zoom:0.8
});

const chatContainer = document.getElementById("chat-container");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const micBtn = document.getElementById("mic-btn");
const recordingStatus = document.getElementById("recording-status");

let currentLang = "en";
let ttsLang = "en-US";

const responses = {
  en:{
    fee:"Fee deadline is the 25th.",
    scholarship:"Scholarship forms are available at the admin office.",
    timetable:"📅 Here’s the updated timetable: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>Download Timetable PDF</a>",
    cutoff:"📊 You can check cutoff details here: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>Download Cutoff PDF</a>",
    default:"I don’t know that yet.",
    hello:"Hello! How can I assist you today?",
    tell_me:"Ask me about fees, scholarships, timetable, cutoff, daily life, or college.",
    hostel:"Hostel details at the admin office.",
    Events:"Events listed on the notice board.",
    library:"Library open 8am–8pm Mon–Sat.",
    sports:"Sports facilities open 6am–10pm daily.",
    daily:"Student Tip: Attend lectures, eat well, rest properly 📝",
    college:"Our campus is vibrant, resourceful & buzzing with opportunities 🎓",
    canteen:"Canteen is open 9am–7pm. Famous for samosas & tea ☕",
    attendance:"75% minimum attendance required.",
    wifi:"WiFi available across campus. Login at IT Helpdesk.",
    exams:"📅 Exam schedule is in the timetable: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>Download Timetable PDF</a>",
    transport:"College buses run every hour 7am–8pm.",
    placement:"Placement Cell in Block C. Workshops & internships available.",
    fest:"Annual fest happens in March 🎉",
    medical:"Medical Room open 24/7. Emergency: +91-9123456789.",
    admission:"Admissions open in June. Forms online or at admin office."
  },

  hi:{
    fee:"फीस जमा करने की अंतिम तिथि २५ है।",
    scholarship:"स्कॉलरशिप फॉर्म प्रशासन कार्यालय में उपलब्ध हैं।",
    timetable:"📅 नया टाइमटेबल: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>टाइमटेबल PDF डाउनलोड करें</a>",
    cutoff:"📊 कटऑफ देखें: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>कटऑफ PDF डाउनलोड करें</a>",
    default:"मुझे ज्ञात नहीं।",
    hello:"नमस्ते! मैं आपकी मदद कर सकता हूँ।",
    tell_me:"फीस, स्कॉलरशिप, टाइमटेबल या कॉलेज पूछें।",
    hostel:"हॉस्टल जानकारी प्रशासन कार्यालय में है।",
    Events:"कार्यक्रम नोटिस बोर्ड पर हैं।",
    library:"पुस्तकालय सोम–शनि: 8am–8pm।",
    sports:"खेल सुविधाएँ 6am–10pm।",
    daily:"डेली टिप: समय पर क्लास अटेंड करें, अच्छा खाएँ और आराम करें ✨",
    college:"हमारा कॉलेज सुविधाओं और अवसरों से भरपूर है 🎓",
    canteen:"कैंटीन 9am–7pm, समोसे और चाय प्रसिद्ध ☕",
    attendance:"75% उपस्थिति आवश्यक है।",
    wifi:"वाईफाई IT हेल्पडेस्क से उपलब्ध।",
    exams:"📅 परीक्षा का शेड्यूल टाइमटेबल में है: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>PDF डाउनलोड करें</a>",
    transport:"कॉलेज बसें 7am–8pm।",
    placement:"प्लेसमेंट सेल Block C में है।",
    fest:"वार्षिक उत्सव मार्च में 🎶",
    medical:"मेडिकल रूम 24/7 खुला। आपात: +91-9123456789।",
    admission:"प्रवेश जून में। फॉर्म ऑनलाइन/ऑफिस में।"
  },
  raj:{
    fee:"फीस जमा करन को आखरी दिन २५ है।",
    scholarship:"स्कॉलरशिप फॉर्म प्रशासन कार्यालय में मिल जावै।",
    timetable:"📅 नया टाइमटेबल: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>टाइमटेबल PDF डाउनलोड करो</a>",
    cutoff:"📊 कटऑफ देखें: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>कटऑफ PDF डाउनलोड करो</a>",
    default:"मने पता कोनी।",
    hello:"राम राम सा! मैं थारी मदद कर सकूं।",
    tell_me:"फीस, स्कॉलरशिप, टाइमटेबल या कॉलेज पूछो।",
    hostel:"हॉस्टल जानकारी प्रशासन कार्यालय में है।",
    Events:"कार्यक्रम नोटिस बोर्ड पर हैं।",
    library:"पुस्तकालय सोम–शनि: 8am–8pm।",
    sports:"खेल सुविधाएँ 6am–10pm।",
    daily:"डेली टिप: समय पर क्लास अटेंड करो, बढ़िया खाओ और आराम करो ✨",
    college:"हमारो कॉलेज सुविधाओं और अवसरों से भरपूर है 🎓",
    canteen:"कैंटीन 9am–7pm, समोसे और चाय प्रसिद्ध ☕",
    attendance:"75% उपस्थिति जरूरी है।",
    wifi:"वाईफाई IT हेल्पडेस्क से मिल जावै।",
    exams:"📅 परीक्षा को शेड्यूल टाइमटेबल में है: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>PDF डाउनलोड करो</a>",
    transport:"कॉलेज बसें 7am–8pm।",
    placement:"प्लेसमेंट सेल Block C में है।",
    fest:"वार्षिक उत्सव मार्च में 🎶",
    medical:"मेडिकल रूम 24/7 खुला। आपात: +91-9123456789।",
    admission:"प्रवेश जून में। फॉर्म ऑनलाइन/ऑफिस में।",
  },
  bn:{
    fee:"ফি জমা দেওয়ার শেষ তারিখ ২৫।",
    scholarship:"স্কলারশিপ ফর্ম প্রশাসন অফিসে পাওয়া যাবে।",
    timetable:"📅 নতুন সময়সূচী: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>সময়সূচী PDF ডাউনলোড করুন</a>",
    cutoff:"📊 কাটঅফ দেখুন: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>কাটঅফ PDF ডাউনলোড করুন</a>",
    default:"আমার জানা নেই।",
    hello:"হ্যালো! আমি আপনার সাহায্য করতে পারি।",
    tell_me:"ফি, স্কলারশিপ, সময়সূচী বা কলেজ সম্পর্কে জিজ্ঞাসা করুন।",
    hostel:"হোস্টেল তথ্য প্রশাসন অফিসে আছে।",
    Events:"ইভেন্টগুলি নোটিশ বোর্ডে রয়েছে।",
    library:"লাইব্রেরি সোম–শনি: 8am–8pm।",
    sports:"খেলাধুলার সুবিধা 6am–10pm।",
    daily:"দৈনিক টিপ: সময়মতো ক্লাসে উপস্থিত হন, ভাল খাওয়া এবং বিশ্রাম নিন ✨",
    college:"আমাদের কলেজ সুযোগ-সুবিধা এবং সুযোগে পরিপূর্ণ 🎓",
    canteen:"ক্যান্টিন 9am–7pm, সমোসা এবং চা বিখ্যাত ☕",
    attendance:"৭৫% উপস্থিতি প্রয়োজন।",
    wifi:"ওয়াইফাই IT হেল্পডেস্ক থেকে পাওয়া যায়।",
    exams:"📅 পরীক্ষার সময়সূচী সময়সূচীতে রয়েছে: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>PDF ডাউনলোড করুন</a>",
    transport:"কলেজ বাস 7am–8pm।",
    placement:"প্লেসমেন্ট সেল Block C তে।",
    fest:"বার্ষিক উৎসব মার্চে 🎶",
    medical:"মেডিকেল রুম 24/7 খোলা। জরুরি: +91-9123456789।",
    admission:"ভর্তি জুনে। ফর্ম অনলাইন/অফিসে।",
  },
  te:{
    fee:"ఫీజు చెల్లింపు చివరి తేదీ 25.",
    scholarship:"స్కాలర్‌షిప్ట్ ఫారమ్‌లు అడ్మిన్ ఆఫీసులో అందుబాటులో ఉన్నాయి.",
    timetable:"📅 కొత్త టైమ్‌టేబుల్: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>టైమ్‌టేబుల్ PDF డౌన్లోడ్ చేయండి</a>",
    cutoff:"📊 కటాఫ్ చూడండి: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>కటాఫ్ PDF డౌన్లోడ్ చేయండి</a>",
    default:"నాకు తెలియదు.",
    hello:"హలో! నేను మీకు సహాయం చేయగలను.",
    tell_me:"ఫీజు, స్కాలర్‌షిప్, టైమ్‌టేబుల్ లేదా కాలేజ్ గురించి అడగండి.",
    hostel:"హోస్టల్ వివరాలు అడ్మిన్ ఆఫీసులో ఉన్నాయి.",
    Events:"ఈవెంట్స్ నోటీస్ బోర్డులో ఉన్నాయి.",
    library:"లైబ్రరీ సోమ–శని: 8am–8pm.",
    sports:"క్రీడా సదుపాయాలు 6am–10pm.",
    daily:"దైనందిన సూచన: సమయానికి తరగతులకు హాజరు అవ్వండి, బాగా తినండి మరియు విశ్రాంతి తీసుకోండి ✨",
    college:"మా కాలేజ్ సదుపాయాలు మరియు అవకాశాలతో నిండినది 🎓",
    canteen:"కాంటీన్ 9am–7pm, సమోసాలు మరియు టీ ప్రసిద్ధి ☕",
    attendance:"75% హాజరు అవసరం.",
    wifi:"వైఫై IT హెల్ప్‌డెస్క్ నుండి అందుబాటులో ఉంది.",
    exams:"📅 పరీక్ష షెడ్యూల్ టైమ్‌టేబుల్‌లో ఉంది: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>PDF డౌన్లోడ్ చేయండి</a>",
    transport:"కాలేజ్ బస్సులు 7am–8pm.",
    placement:"ప్లేస్‌మెంట్ సెల్ Block C లో ఉంది.",
    fest:"వార్షిక ఉత్సవం మార్చిలో జరుగుతుంది 🎶",
    medical:"మెడికల్ రూమ్ 24/7 అందుబాటులో ఉంది. అత్యవసరం: +91-9123456789.",
    admission:"ప్రవేశం జూన్‌లో ఉంది. ఫారం ఆన్‌లైన్/ఆఫీసులో అందుబాటులో ఉంది.",
  },
  mr:{
    fee:"फीसीसाठी शेवटची तारीख २५ आहे.",
    scholarship:"शिष्यवृत्ती फॉर्म प्रशासकीय कार्यालयात उपलब्ध आहेत.",
    timetable:"📅 नवीन वेळापत्रक: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>वेळापत्रक PDF डाउनलोड करा</a>",
    cutoff:"📊 कटऑफ तपासा: <a href='files/cutoff.pdf' target='_blank' class='text-blue-600 underline'>कटऑफ PDF डाउनलोड करा</a>",
    default:"मला माहित नाही.",
    hello:"नमस्कार! मी तुमची मदत करू शकतो.",
    tell_me:"फी, शिष्यवृत्ती, वेळापत्रक किंवा कॉलेज बद्दल विचारा.",
    hostel:"हॉस्टेलची माहिती प्रशासकीय कार्यालयात आहे.",
    Events:"कार्यक्रम सूचना फलकावर आहेत.",
    library:"ग्रंथालय सोम–शनि: 8am–8pm.",
    sports:"क्रीडा सुविधा 6am–10pm.",
    daily:"दैनिक टिप: वेळेवर वर्गाला हजर राहा, चांगले खा आणि विश्रांती घ्या ✨",
    college:"आमचा कॉलेज सुविधा आणि संधींनी भरलेला आहे 🎓",
    canteen:"कँटीन 9am–7pm, समोसे आणि चहा प्रसिद्ध ☕",
    attendance:"७५% हजेरी आवश्यक आहे.",
    wifi:"वाईफाय IT हेल्पडेस्कवरून उपलब्ध आहे.",
    exams:"📅 परीक्षा वेळापत्रक वेळापत्रकात आहे: <a href='files/timetable.pdf' target='_blank' class='text-blue-600 underline'>PDF डाउनलोड करा</a>",
    transport:"कॉलेज बस 7am–8pm.",
    placement:"प्लेसमेंट सेल Block C मध्ये आहे.",
    fest:"वार्षिक सण मार्चमध्ये होतो 🎶",
    medical:"वैद्यकीय कक्ष 24/7 खुला आहे. आपत्कालीन: +91-9123456789.",
    admission:"प्रवेश जूनमध्ये सुरू होतो. फॉर्म ऑनलाइन/कार्यालयात उपलब्ध आहेत.",
  },
  // Do same for bn, te, mr, gu, pa, raj (reuse timetable + cutoff link)
};

function changeLanguage(lang, voiceCode){
  currentLang = lang;
  ttsLang = voiceCode;
  addMessage("✅ Language set to "+lang.toUpperCase(),'bot');
}

function addMessage(text,sender){
  const d=document.createElement("div");
  d.className=`chat-bubble ${sender}-bubble`;
  d.innerHTML=`<p>${text}</p>`;
  chatContainer.appendChild(d);
  chatContainer.scrollTop=chatContainer.scrollHeight;
}

function findResponse(q){
  const dict=responses[currentLang], msg=q.toLowerCase();
  if(msg.includes("fee")) return dict.fee;
  if(msg.includes("scholarship")) return dict.scholarship;
  if(msg.includes("timetable")) return dict.timetable;   // ✅ gives PDF link
  if(msg.includes("exam")) return dict.exams;            // ✅ also gives same PDF link
  if(msg.includes("cutoff")) return dict.cutoff;
  if(msg.includes("daily")||msg.includes("life")) return dict.daily;
  if(msg.includes("college")||msg.includes("campus")) return dict.college;
  if(msg.includes("canteen")||msg.includes("food")) return dict.canteen;
  if(msg.includes("attendance")) return dict.attendance;
  if(msg.includes("wifi")) return dict.wifi;
  if(msg.includes("bus")||msg.includes("transport")) return dict.transport;
  if(msg.includes("placement")||msg.includes("job")) return dict.placement;
  if(msg.includes("fest")||msg.includes("festival")||msg.includes("event")) return dict.fest;
  if(msg.includes("medical")||msg.includes("doctor")||msg.includes("health")) return dict.medical;
  if(msg.includes("admission")||msg.includes("apply")) return dict.admission;
  if(msg.includes("hello")||msg.includes("hi")) return dict.hello;
  return dict.default;
}

function sendMessage(){
  const text=chatInput.value.trim();
  if(!text) return;
  addMessage(text,'user');
  chatInput.value='';
  const reply=findResponse(text);
  addMessage(reply,'bot');
  
  if('speechSynthesis' in window){
    const u = new SpeechSynthesisUtterance(reply.replace(/<[^>]+>/g,'')); // strip <a>
    u.lang = ttsLang;
    const voices = speechSynthesis.getVoices();
    const match = voices.find(v=>v.lang===ttsLang);
    if(match) u.voice=match;
    speechSynthesis.speak(u);
  }
}

sendBtn.onclick = sendMessage;
chatInput.onkeypress = e => { if(e.key==="Enter") sendMessage(); };

if(annyang){
  micBtn.onclick=()=>{
    if(annyang.isListening()){
      annyang.abort();
      micBtn.classList.remove("bg-red-500","text-white");
      micBtn.classList.add("bg-gray-200","text-gray-700");
      recordingStatus.classList.add("hidden");
    } else {
      annyang.setLanguage(ttsLang);
      annyang.removeCommands();
      annyang.addCommands({"*text":t=>{chatInput.value=t;sendMessage();}});
      annyang.start();
      micBtn.classList.remove("bg-gray-200","text-gray-700");
      micBtn.classList.add("bg-red-500","text-white");
      recordingStatus.classList.remove("hidden");
    }
  };
}