/*
questionLabel:[
  all the questions inside
]

In each assessment, there will be tentatively 8 questions (2 MCQs and 6 short answer questions).
Greater emphasis will be placed on how learners apply the correct use of language.
Grading of the assessment may require the 'compromise' library for interpreting short answer questions.
To make the assessment less daunting, pronunciation check may be implemented in each assessment. This can
help guide users in crafting proper words and cohesive sentences.
*/

export const testQuestions = {
    basicTest: [
      {
        description: "She __ seashells by the seashore.",
        answer: "A",
        options: [
          { value: "A", text: "sells" },
          { value: "B", text: "selling" },
          { value: "C", text: "sell" },
        ]
      },
  
      {
        description: "__ is this place?",
        answer: "C",
        options: [
          { value: "A", text: "Who" },
          { value: "B", text: "Why" },
          { value: "C", text: "Where" },
        ]
      },
  
      {
        description: "Type out the following sentence with the correct tense: I has not been to Italy in a while.",
        answer: "I have not been to Italy in a while."
      },

      {
        description: "Type out the following sentence with the correct punctuation: Are you hungry,",
        answer: "Are you hungry?"
      },

      {
        description: "Provide the past tense of 'will go'.",
        answer: "went"
      },

      {
        description: "Type in the word with the same meaning as the number 5.",
        answer: "five"
      },

      {
        description: "Fill in the blank for the following sentence: __ old is your sister?",
        answer: "How"
      },

      {
        description: "Provide the plural form of the word 'mouse'.",
        answer: "mice"
      }
    ],
    
    intermediateTest: [
      {
        description: "Which of the following best explains the meaning of a year?",
        answer: "B",
        options: [
          { value: "A", text: "1 second" },
          { value: "B", text: "365 days" },
          { value: "C", text: "10 months" },
        ]
      },
  
      {
        description: "Which of the following is a synonym of achievement?",
        answer: "C",
        options: [
          { value: "A", text: "accomplishment" },
          { value: "B", text: "failure" },
          { value: "C", text: "incomplete" },
        ]
      },
  
      {
        description: "Rephrase the following sentence using the phrase 'together with': Peter goes to the market everyday. Jane goes with him.",
        answer: "Peter, together with Jane, goes to the market everyday."
      },

      {
        description: "Rephrase the following sentence with 'before': We returned the equipment to the storeroom. Then, we locked the storeroom.",
        answer: "We returned the equipment to the storeroom before locking the storeroom."
      },

      {
        description: "What is the superlative of 'quick'?",
        answer: "quickest"
      },

      {
        description: "He said, 'I'm going out'. Transform this to indirect speech.",
        answer: "He said he was going out."
      },

      {
        description: "Neither Sam __ Tommy attended school today.",
        answer: "nor"
      },

      {
        description: "Type in the noun of 'persevere'.",
        answer: "perseverance"
      }
    ],
    
    advancedTest: [
      {
        description: "Which of the following describes a callous person?",
        answer: "C",
        options: [
          { value: "A", text: "someone who is abusive" },
          { value: "B", text: "someone who is rude" },
          { value: "C", text: "someone who is insensitive" },
        ]
      },
  
      {
        description: "If you are __ with this test, perhaps you should attempt an easier one.",
        answer: "A",
        options: [
          { value: "A", text: "struggling" },
          { value: "B", text: "stumbling" },
          { value: "C", text: "stressed" },
        ]
      },
  
      {
        description: "Type out the following sentence using the correct grammar: Would you mind open the window?",
        answer: "Would you mind opening the window?"
      },

      {
        description: "Type out the following sentence using the correct grammar: The princess laid down and slept for twenty years.",
        answer: "The princess lay down and slept for twenty years."
      },

      {
        description: "__ most birds, penguins are able to swim underwater.",
        answer: "Unlike"
      },

      {
        description: "My life was rather dull __ I decided to move to the city.",
        answer: "until"
      },

      {
        description: "The police could not believe that the heist took place in __ daylight.",
        answer: "broad"
      },

      {
        description: "We may be a bit late. We're __ in a traffic jam.",
        answer: "stuck"
      },
    ]
  };