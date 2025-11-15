import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the translations structure
interface Translations {
  [key: string]: string;
}

// Define the state interface
interface TranslationState {
  currentLanguage: 'en' | 'hi' | 'pa' | 'bn' | 'mr' | 'kn';
  translations: Translations;
}

// Translations for different languages
const translations = {
  en: {
    // Footer Title and Basic Info
    footer_title: "Rural Learn: Empowering Rural Education, Together",
    registered_office: "Registered Office: USAR GGSIPU || UCER Collaboration",
    registered_office_note: "(Yes, we take education seriously, and we're just getting started)",
    email_label: "Email:",
    email_note: "(Your queries fuel our mission!)",

    // Mission Section
    our_mission_title: "Our Mission",
    our_mission: "Rural Learn is dedicated to bridging the educational divide in rural communities. Because quality education shouldn't be limited by geography.",
    our_mission_closing: "We're here to inspire, empower, and support every learner.",

    // Transparency Section
    transparency_title: "Transparency and Accountability",
    transparency_details: "Our efforts are genuine, with every detail carefully managed. We're committed to building a future where education is accessible to all.",
    transparency_note: "Want to learn more? Just ask!",
    footer_closing: "Advancing Education for a Better Tomorrow",
    all_rights_reserved: "All Rights Reserved.",

    // Team Section - Names and Designations
    meet_team_title: "Meet the Rural Learn Team:",
    team_priyanshu: "Priyanshu Raj",
    team_priyanshu_designation: "Frontend Lead",
    team_satyam: "Satyam Chettri", 
    team_satyam_designation: "AI-ML Lead",
    team_sanyam: "Sanyam Pandey",
    team_sanyam_designation: "Web-Dev Lead",
    team_ankit: "Ankit Lingwal",
    team_ankit_designation: "Web-3 Lead",
    team_tanushree: "Tanushree Gupta",
    team_tanushree_designation: "AI-ML Lead",
    team_tanya: "Tanya Gupta",
    team_tanya_designation: "Cloud Lead",
    join_us_message: "Join us as we reimagine and reshape education for rural India!",
    card_Hover_title_1: "Access Educational Content",
    card_Hover_discription_1: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
    card_Hover_title_2: "Access Educational Content",
    card_Hover_discription_2: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
    card_Hover_title_3: "Access Educational Content",
    card_Hover_discription_3: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
    card_Hover_title_4: "Access Educational Content",
    card_Hover_discription_4: "Explore a wide range of educational materials ,designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
    card_Hover_title_5: "Access Educational Content",
    card_Hover_discription_5: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding.",
    card_Hover_title_6: "Access Educational Content",
    card_Hover_discription_6: "Explore a wide range of educational materials designed for students in rural areas. Content is aligned with the curriculum and is available in multiple languages for easy understanding."
  },
  hi: {
    // Hindi Translations
    footer_title: "नवशिक्षा: ग्रामीण शिक्षा को सशक्त करते हुए, एक साथ",
    registered_office: "पंजीकृत कार्यालय: बॉयज हॉस्टल जी-114, आईआईटी शाहदरा, दिल्ली 110032",
    registered_office_note: "(हाँ, हम शिक्षा को गंभीरता से लेते हैं, और हम अभी शुरुआत कर रहे हैं)",
    email_label: "ईमेल:",
    email_note: "(आपके सवाल हमारे मिशन को प्रेरित करते हैं!)",

    our_mission_title: "हमारा मिशन",
    our_mission: "नवशिक्षा ग्रामीण समुदायों में शैक्षणिक अंतर को पाटने के लिए समर्पित है। क्योंकि गुणवत्तापूर्ण शिक्षा भौगोलिक सीमाओं से बंधी नहीं होनी चाहिए।",
    our_mission_closing: "हम हर सीखने वाले को प्रेरित करने, सशक्त बनाने और समर्थन करने के लिए यहाँ हैं।",

    transparency_title: "पारदर्शिता और जवाबदेही",
    transparency_details: "हमारे प्रयास वास्तविक हैं, हर विवरण को सावधानीपूर्वक प्रबंधित किया जाता है। हम एक ऐसे भविष्य का निर्माण करने के लिए प्रतिबद्ध हैं जहाँ शिक्षा सभी के लिए सुलभ हो।",
    transparency_note: "और अधिक जानना चाहते हैं? बस पूछ लीजिए!",
    footer_closing: "बेहतर कल के लिए शिक्षा को आगे बढ़ाते हुए",
    all_rights_reserved: "सभी अधिकार सुरक्षित।",

    meet_team_title: "नवशिक्षा टीम से मिलिए:",
    team_priyanshu: "प्रियांशु राज",
    team_priyanshu_designation: "फ्रंटेंड लीड",
    team_satyam: "सत्यम छेत्री", 
    team_satyam_designation: "एआई-एमएल लीड",
    team_sanyam: "सन्याम पांडेय",
    team_sanyam_designation: "वेब-डेव लीड",
    team_ankit: "अंकित लिंगवाल",
    team_ankit_designation: "वेब-3 लीड",
    team_tanushree: "तनुश्री गुप्ता",
    team_tanushree_designation: "एआई-एमएल लीड",
    team_tanya: "तन्या गुप्ता",
    team_tanya_designation: "क्लाउड लीड",
    join_us_message: "ग्रामीण भारत की शिक्षा को फिर से सोचने और आकार देने में हमारे साथ जुड़ें!",
  },
  pa: {
    // Punjabi Translations
    footer_title: "ਨਵਸ਼ਿੱਖਾ: ਦੇਸੀ ਸਿੱਖਿਆ ਨੂੰ ਮਜ਼ਬੂਤ ਕਰਦੇ ਹੋਏ, ਇਕੱਠੇ",
    registered_office: "ਰਜਿਸਟਰਡ ਦਫਤਰ: ਬੋਏਜ਼ ਹੋਸਟਲ ਜੀ-114, ਆਈਆਈਟੀ ਸ਼ਾਹਦਰਾ, ਦਿੱਲੀ 110032",
    registered_office_note: "(ਹਾਂ, ਅਸੀਂ ਸਿੱਖਿਆ ਨੂੰ ਬਹੁਤ ਗੰਭੀਰਤਾ ਨਾਲ ਲੈਂਦੇ ਹਾਂ, ਅਤੇ ਅਸੀਂ ਹੁਣੇ ਸ਼ੁਰੂ ਕਰ ਰਹੇ ਹਾਂ)",
    email_label: "ਈਮੇਲ:",
    email_note: "(ਤੁਹਾਡੇ ਸਵਾਲ ਸਾਡੇ ਮਿਸ਼ਨ ਨੂੰ ਸ਼ਕਤੀ ਦਿੰਦੇ ਹਨ!)",
  
    our_mission_title: "ਸਾਡਾ ਮਿਸ਼ਨ",
    our_mission: "ਨਵਸ਼ਿੱਖਾ ਦੇਸੀ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਸਿੱਖਿਆ ਦੇ ਅੰਤਰ ਨੂੰ ਭਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ। ਕਿਉਂਕਿ ਚੰਗੀ ਸਿੱਖਿਆ ਭੌਗੋਲਿਕ ਸੀਮਾਵਾਂ ਤੋਂ ਸੀਮਤ ਨਹੀਂ ਹੋਣੀ ਚਾਹੀਦੀ।",
    our_mission_closing: "ਅਸੀਂ ਹਰ ਸਿੱਖਣ ਵਾਲੇ ਨੂੰ ਪ੍ਰੇਰਿਤ ਕਰਨ, ਸਸ਼ਕਤ ਬਣਾਉਣ ਅਤੇ ਸਹਾਇਤਾ ਕਰਨ ਲਈ ਮੌਜੂਦ ਹਾਂ।",
  
    transparency_title: "ਪਾਰਦਰਸ਼ਤਾ ਅਤੇ ਜਵਾਬਦੇਹੀ",
    transparency_details: "ਸਾਡੇ ਯਤਨ ਈਮਾਨਦਾਰ ਹਨ, ਹਰ ਵੇਰਵੇ ਨੂੰ ਧਿਆਨ ਨਾਲ ਪ੍ਰਬੰਧਿਤ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਅਸੀਂ ਇੱਕ ਅਜਿਹੇ ਭਵਿੱਖ ਦਾ ਨਿਰਮਾਣ ਕਰਨ ਲਈ ਵਚਨਬੱਧ ਹਾਂ ਜਿੱਥੇ ਸਿੱਖਿਆ ਸਾਰਿਆਂ ਲਈ ਸੁਲੱਭ ਹੋਵੇ।",
    transparency_note: "ਹੋਰ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਬੱਸ ਪੁੱਛ ਲਵੋ!",
    footer_closing: "ਬਿਹਤਰ ਕੱਲ੍ਹ ਲਈ ਸਿੱਖਿਆ ਨੂੰ ਅੱਗੇ ਵਧਾਉਂਦੇ ਹੋਏ",
    all_rights_reserved: "ਸਾਰੇ ਅਧਿਕਾਰ ਰਾਖਵੇਂ ਹਨ।",
  
    meet_team_title: "ਨਵਸ਼ਿੱਖਾ ਟੀਮ ਨਾਲ ਮਿਲੋ:",
    team_priyanshu: "ਪ੍ਰਿਯਾਂਸ਼ੂ ਰਾਜ",
    team_priyanshu_designation: "ਫਰੰਟਐਂਡ ਲੀਡ",
    team_satyam: "ਸਤਯਮ ਛੇਤਰੀ", 
    team_satyam_designation: "ਏਆਈ-ਐਮਐਲ ਲੀਡ",
    team_sanyam: "ਸੰਯਮ ਪਾਂਡੇਅ",
    team_sanyam_designation: "ਵੈਬ-ਡੈਵ ਲੀਡ",
    team_ankit: "ਅੰਕਿਤ ਲਿੰਗਵਾਲ",
    team_ankit_designation: "ਵੈਬ-3 ਲੀਡ",
    team_tanushree: "ਤਨੁਸ਼ਰੀ ਗੁਪਤਾ",
    team_tanushree_designation: "ਏਆਈ-ਐਮਐਲ ਲੀਡ",
    team_tanya: "ਤਨਯਾ ਗੁਪਤਾ",
    team_tanya_designation: "ਕਲਾਊਡ ਲੀਡ",
    join_us_message: "ਗਰਾਮੀਣ ਭਾਰਤ ਦੀ ਸਿੱਖਿਆ ਨੂੰ ਨਵਾਂ ਰੂਪ ਦੇਣ ਵਿੱਚ ਸਾਡੇ ਨਾਲ ਜੁੜੋ!",
  },
  
  bn: {
    // Bengali Translations
    footer_title: "নবশিক্ষা: গ্রামীণ শিক্ষাকে সশক্ত করে, একসঙ্গে",
    registered_office: "নিবন্ধিত অফিস: বয়েজ হোস্টেল জি-১১৪, আইআইটি শাহদরা, দিল্লি ১১০০৩২",
    registered_office_note: "(হ্যাঁ, আমরা শিক্ষাকে গুরুত্ব দেই, এবং আমরা এখনই শুরু করেছি)",
    email_label: "ইমেল:",
    email_note: "(আপনার প্রশ্নগুলি আমাদের মিশনকে শক্তি দেয়!)",
  
    our_mission_title: "আমাদের মিশন",
    our_mission: "নবশিক্ষা গ্রামীণ সম্প্রদায়ের মধ্যে শিক্ষাগত ব্যবধান পাটাতে নিবেদিত। কারণ মানসম্পন্ন শিক্ষা ভৌগোলিক সীমায় সীমাবদ্ধ হওয়া উচিত নয়।",
    our_mission_closing: "আমরা প্রত্যেক শিক্ষার্থীকে অনুপ্রাণিত করতে, ক্ষমতায়িত করতে এবং সমর্থন করতে এখানে আছি।",
  
    transparency_title: "স্বচ্ছতা ও জবাবদিহিতা",
    transparency_details: "আমাদের প্রচেষ্টা সৎ, প্রতিটি বিশদের যত্ন সাবধানে ব্যবস্থাপিত। আমরা এমন একটি ভবিষ্যৎ গড়ে তুলতে প্রতিশ্রুতিবদ্ধ যেখানে শিক্ষা সবার কাছে সুলভ।",
    transparency_note: "আরও জানতে চান? শুধু জিজ্ঞেস করে দেখুন!",
    footer_closing: "আগামীর জন্য শিক্ষাকে এগিয়ে নিয়ে",
    all_rights_reserved: "সমস্ত অধিকার সংরক্ষিত।",
  
    meet_team_title: "নবশিক্ষা দলের সঙ্গে দেখা করুন:",
    team_priyanshu: "প্রিয়াংশু রাজ",
    team_priyanshu_designation: "ফ্রন্টেন্ড লিড",
    team_satyam: "সত্যম ছেত্রি", 
    team_satyam_designation: "এআই-এমএল লিড",
    team_sanyam: "সন্যাম পান্ডে",
    team_sanyam_designation: "ওয়েব-ডেভ লিড",
    team_ankit: "অঙ্কিত লিঙ্গওয়াল",
    team_ankit_designation: "ওয়েব-৩ লিড",
    team_tanushree: "তনুশ্রী গুপ্ত",
    team_tanushree_designation: "এআই-এমএল লিড",
    team_tanya: "তন্যা গুপ্ত",
    team_tanya_designation: "ক্লাউড লিড",
    join_us_message: "গ্রামীণ ভারতের শিক্ষাকে পুনর্কল্পনা করতে এবং রূপান্তরিত করতে আমাদের সঙ্গে যোগ দিন!",
  },
  mr: {
    // Marathi Translations
    footer_title: "नवशिक्षा: ग्रामीण शिक्षेला सक्षम करत, एकत्र",
    registered_office: "नोंदणीकृत कार्यालय: बॉयज हॉस्टेल जी-114, आयआयटी शाहदरा, दिल्ली 110032",
    registered_office_note: "(होय, आम्ही शिक्षेला गंभीरपणे घेतो, आणि आम्ही अगदी सुरुवात करत आहोत)",
    email_label: "ईमेल:",
    email_note: "(तुमच्या प्रश्नांनी आमच्या मिशनला ऊर्जा मिळते!)",
  
    our_mission_title: "आमचे ध्येय",
    our_mission: "नवशिक्षा ग्रामीण समुदायांमध्ये शैक्षणिक अंतर भरून काढण्यासाठी समर्पित आहे. कारण गुणवत्तापूर्ण शिक्षा भौगोलिक सीमांनी मर्यादित असू नये.",
    our_mission_closing: "प्रत्येक शिकणाऱ्याला प्रेरित करण्यासाठी, सबल बनविण्यासाठी आणि त्याला पाठिंबा देण्यासाठी आम्ही येथे आहोत.",
  
    transparency_title: "पारदर्शकता आणि जबाबदारी",
    transparency_details: "आमचे प्रयत्न खरेदार आहेत, प्रत्येक तपशीलाकडे काळजीपूर्वक लक्ष दिले जाते. आम्ही एक असा भविष्यकाल निर्माण करण्यासाठी वचनबद्ध आहोत जिथे शिक्षा सर्वांसाठी सुलभ असेल.",
    transparency_note: "अधिक जाणून घ्यायचे आहे? फक्त विचारून पाहा!",
    footer_closing: "उद्याच्या भविष्यासाठी शिक्षेला पुढे नेत",
    all_rights_reserved: "सर्व हक्क राखीव.",
  
    meet_team_title: "नवशिक्षा टीमला भेटा:",
    team_priyanshu: "प्रियांशु राज",
    team_priyanshu_designation: "फ्रंटएंड लीड",
    team_satyam: "सत्यम छेत्री", 
    team_satyam_designation: "एआय-एमएल लीड",
    team_sanyam: "संयम पांडे",
    team_sanyam_designation: "वेब-डेव्ह लीड",
    team_ankit: "अंकित लिंगवाल",
    team_ankit_designation: "वेब-३ लीड",
    team_tanushree: "तनुश्री गुप्ता",
    team_tanushree_designation: "एआय-एमएल लीड",
    team_tanya: "तन्या गुप्ता",
    team_tanya_designation: "क्लाउड लीड",
    join_us_message: "ग्रामीण भारतातील शिक्षेला पुनर्कल्पित आणि पुनर्निर्मित करण्यासाठी आमच्याबरोबर सामील व्हा!",
  },
  
  kn: {
    // Kannada Translations
    footer_title: "ನವಶಿಕ್ಷಾ: ಗ್ರಾಮೀಣ ಶಿಕ್ಷಣವನ್ನು ಸಬಲೀಕರಿಸುವುದು, ಒಟ್ಟಿಗೆ",
    registered_office: "ನೋಂದಾಯಿತ ಕಛೇರಿ: ಬಾಯಿಸ್ ಹೋಸ್ಟೆಲ್ ಜಿ-114, ಐಐಟಿ ಶಾಹ್ಡಾರಾ, ದೆಹಲಿ 110032",
    registered_office_note: "(ಹೌದು, ನಾವು ಶಿಕ್ಷಣವನ್ನು ಗಂಭೀರವಾಗಿ ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ, ಮತ್ತು ನಾವು ಈಗಷ್ಟೇ ಪ್ರಾರಂಭಿಸಿದ್ದೇವೆ)",
    email_label: "ಇಮೇಲ್:",
    email_note: "(ನಿಮ್ಮ ಪ್ರಶ್ನೆಗಳು ನಮ್ಮ ಮಿಷನ್‌ಗೆ ಶಕ್ತಿ ನೀಡುತ್ತವೆ!)",
  
    our_mission_title: "ನಮ್ಮ ಮಿಷನ್",
    our_mission: "ನವಶಿಕ್ಷಾ ಗ್ರಾಮೀಣ ಸಮುದಾಯಗಳಲ್ಲಿ ಶೈಕ್ಷಣಿಕ ಅಂತರವನ್ನು ಭರ್ತಿ ಮಾಡಲು ಸಮರ್ಪಿತವಾಗಿದೆ. ಏಕೆಂದರೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಭೌಗೋಳಿಕ ಮಿತಿಗಳಿಂದ ಸೀಮಿತಗೊಳಿಸಬಾರದು.",
    our_mission_closing: "ಪ್ರತಿಯೊಂದು ಕಲಿಯುವವರಿಗೆ ಪ್ರೇರಣೆ ನೀಡಲು, ಸಬಲಗೊಳಿಸಲು ಮತ್ತು ಬೆಂಬಲಿಸಲು ನಾವು ಇಲ್ಲಿದ್ದೇವೆ.",
  
    transparency_title: "ಪಾರದರ್ಶಕತೆ ಮತ್ತು ಹೊಣೆಗಾರಿಕೆ",
    transparency_details: "ನಮ್ಮ ಪ್ರಯತ್ನಗಳು ನಿಷ್ಕಪಟವಾಗಿವೆ, ಪ್ರತಿಯೊಂದು ವಿವರಕ್ಕೂ ಎಚ್ಚರಿಕೆಯಿಂದ ಗಮನ ಹರಿಸಲಾಗಿದೆ. ಶಿಕ್ಷಣ ಎಲ್ಲರಿಗೂ ಸುಲಭವಾಗಿರುವ ಭವಿಷ್ಯವನ್ನು ನಿರ್ಮಿಸಲು ನಾವು ಬದ್ಧವಾಗಿದ್ದೇವೆ.",
    transparency_note: "ಇನ್ನಷ್ಟು ತಿಳಿಯಲು ಬಯಸುವಿರಾ? ಕೇವಲ ಕೇಳಿ!",
    footer_closing: "ಉತ್ತಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಶಿಕ್ಷಣವನ್ನು ಮುನ್ನಡೆಸುವಾಗ",
    all_rights_reserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
  
    meet_team_title: "ನವಶಿಕ್ಷಾ ತಂಡವನ್ನು ಭೇಟಿಮಾಡಿ:",
    team_priyanshu: "ಪ್ರಿಯಾಂಶು ರಾಜ್",
    team_priyanshu_designation: "ಫ್ರಂಟ್ಎಂಡ್ ಮುಖ್ಯಸ್ಥ",
    team_satyam: "ಸತ್ಯಂ ಛೇತ್ರಿ", 
    team_satyam_designation: "ಎಐ-ಎಂಎಲ್ ಮುಖ್ಯಸ್ಥ",
    team_sanyam: "ಸಂಯಮ್ ಪಾಂಡೆ",
    team_sanyam_designation: "ವೆಬ್-ಡೆವ್ ಮುಖ್ಯಸ್ಥ",
    team_ankit: "ಅಂಕಿತ್ ಲಿಂಗವಾಲ್",
    team_ankit_designation: "ವೆಬ್-೩ ಮುಖ್ಯಸ್ಥ",
    team_tanushree: "ತನುಶ್ರೀ ಗುಪ್ತಾ",
    team_tanushree_designation: "ಎಐ-ಎಂಎಲ್ ಮುಖ್ಯಸ್ಥ",
    team_tanya: "ತನ್ಯಾ ಗುಪ್ತಾ",
    team_tanya_designation: "ಕ್ಲೌಡ್ ಮುಖ್ಯಸ್ಥ",
    join_us_message: "ಗ್ರಾಮೀಣ ಭಾರತದ ಶಿಕ್ಷಣವನ್ನು ಮರುಕಲ್ಪಿಸಿ ಮತ್ತು ಆಕಾರ ಕೊಡಲು ನಮ್ಮ ೊಂದಿಗೆ ಸೇರಿ!",
  },
};

// Initial state
const initialState: TranslationState = {
  currentLanguage: 'en',
  translations: translations['en']
};

// Create the translation slice
export const translationSlice = createSlice({
  name: 'translation',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'hi' | 'pa' | 'bn' | 'mr' | 'kn'>) => {
      state.currentLanguage = action.payload;
      state.translations = translations[action.payload];
    }
  }
});

// Export the action creator
export const { setLanguage } = translationSlice.actions;

// Export the reducer
export default translationSlice.reducer;