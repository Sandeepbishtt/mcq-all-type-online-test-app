import Store from '../Redux/Store'
import {addAnswer, addData, addMultiOption, isAnswered} from '../Redux/Slice'


test("Should set the data ", () => {
    Store.dispatch(addData([{
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
      }]));
    let state = Store.getState().data
    //  expect(state).toStrictEqual({data:[]})
    const question = state.questionList.find((val) => val.id === 0);
    expect(question?.questionNo).toBe(1);
    expect(question?.correctAnswer).toBe("this.state");
    expect(question?.question).toBe("How can you access the state of a component from inside of a member function?");
  });


test("checking the answer value",() =>{
  Store.dispatch(addData([ { questionNo:2,
    id: 1,
    isAnswer:false,
    answerValue : [],
    question: "ReactJS is developed by _____?",
    answers: [
      "Google Engineers",
      "Facebook Engineers"
    ],
    correctAnswer:  "Facebook Engineers",
  },]));
Store.dispatch(isAnswered(0))
const state = Store.getState().data
const question = state.questionList.find(val => val.id === 1);
expect(question?.isAnswer).toEqual(true)
})

test("check adding selected Answer",() =>{
  Store.dispatch(addData([{
    questionNo:2,
    id: 1,
    isAnswer:false,
    answerValue : [],
    question: "ReactJS is developed by _____?",
    answers: [
      "Google Engineers",
      "Facebook Engineers"
    ],
    correctAnswer:  "Facebook Engineers",
  }]));
Store.dispatch(addAnswer({id:0,value:"Facebook Engineers"}))
const state = Store.getState().data
const question = state.questionList.find(val => val.id === 1);
expect(question?.answerValue).toEqual("Facebook Engineers")
})

test("checking multiOption",() =>{
  Store.dispatch(addData(
    [{
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
      columnOne:[`Tiger NationalBird` ,"Peacock NationalFlag","Tiranga NationalAnimal"],
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
  ]
));
Store.dispatch(addMultiOption(["React can be used on client and as well as server side too"]))
const state = Store.getState().data
const question = state.questionList.find(val => val.id === 4);
expect(question?.answerValue).toEqual(["React can be used on client and as well as server side too"])
})
