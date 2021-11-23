 const quiz =  [
 {
   lang:'english',
   questions : [{
    id: 0,
    answerValue : [],
     questionNo:1,
     isAnswer:false,
    question: "How can you access the state of a component from inside of a member function?",
    answers: [
      "this.getState()",
      "this.prototype.stateValue",
      "this.state",
      "this.values"
    ],
    correctAnswer: 'this.state',
  },
  { questionNo:2,
    id: 1,
    isAnswer:false,
    answerValue : [],
    question: "ReactJS is developed by _____?",
    answers: [
      "Google Engineers",
      "Facebook Engineers"
    ],
    correctAnswer:  "Facebook Engineers",
  },
  { questionNo:3,
    id: 2,
    isAnswer:false,
    answerValue : [],
    question: "ReactJS is an MVC based framework?",
    answers: [
      "True",
      "False"
    ],
    correctAnswer:  "False",
  },
  { questionNo:4,
    id: 3,
    isAnswer:false,
    answerValue : [],
    question: "Which of the following concepts matches?",
    columnOne:[`Tiger  NationalBird` ,"Peacock NationalFlag","Tiranga NationalAnimal"],
    answers: [
      "a-c,b-a,c-b",
      "a-b,b-c,c-a",
      "None of the above",
    ],
    correctAnswer:  "a-c,b-a,c-b",
  },
  { questionNo:5,
    isAnswer:false,
    id: 4,
    answerValue : [],
    question: "What are the advantages of React JS?",
    answers: [
      "React can be used on client and as well as server side too",
      "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
      "React components have lifecycle events that fall into State/Property Updates",
      "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
    ],
    correctAnswer: ["React can be used on client and as well as server side too", "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"]
  },
]},
{
  lang:'hindi',
  id: 1,
  questions : [{ questionNo:1,
    id: 0,
    isAnswer:false,
    answerValue : [],
   question: "जावास्क्रिप्ट के संस्थापक कौन है?",
   answers: [
     "ब्रेंडन ईचो",
     "चार्ल्स बैबेज",
     "आइंस्टाइन",
     "स्टीव जॉब्स"
   ],
   correctAnswer:  "ब्रेंडन ईचो",
 },
 { questionNo:2,
  id: 1,
    isAnswer:false,
    answerValue : [],
   question: "ReactJS _____ द्वारा विकसित किया गया है?",
   answers: [
     "गूगल इंजीनियर्स",
     "फेसबुक इंजीनियर"
   ],
   correctAnswer:"फेसबुक इंजीनियर",
 },
 { questionNo:3,
  id: 2,
    isAnswer:false,
    answerValue : [],
   question: "रिएक्टजेएस एक एमवीसी आधारित ढांचा है?",
   answers: [
     "सच",
     "ग़लत"
   ],
   correctAnswer:  "ग़लत",
 },
 { questionNo:4,
  id: 3,
  isAnswer:false,
  answerValue : [],
   question: "निम्नलिखित में से कौन सी अवधारणा ReactJS की कुंजी है/हैं?",
   columnOne:[`बाघ राष्ट्रीयपक्षी` ,"मयूर  राष्ट्रीयध्वज","तिरंगा  राष्ट्रीयपशु"],
   answers: [
     "a-c,b-a,c-b",
     "a-b,b-c,c-a",
     "इनमे से कोई भी नहीं",
   ],
   correctAnswer: "a-c,b-a,c-b",
 },
 { questionNo:5,
  id: 4,
  isAnswer:false,
  answerValue : [],
   question: "रिएक्ट जेएस के क्या फायदे हैं?",
   answers: [
     "रिएक्ट का उपयोग क्लाइंट और सर्वर साइड पर भी किया जा सकता है",
     "रिएक्ट का उपयोग पठनीयता को बढ़ाता है और रखरखाव को आसान बनाता है। घटक, डेटा पैटर्न पठनीयता में सुधार करता है और इस प्रकार बड़े ऐप्स को प्रबंधित करना आसान बनाता है",
     "प्रतिक्रिया घटकों में जीवनचक्र की घटनाएं होती हैं जो राज्य/संपत्ति अपडेट में आती हैं",
     "रिएक्ट का उपयोग किसी अन्य ढांचे (बैकबोन.जेएस, एंगुलर.जेएस) के साथ किया जा सकता है क्योंकि यह केवल एक दृश्य परत है"
   ],
   correctAnswer: [0, 1,3]
 }]
},
 ]
  
export default quiz