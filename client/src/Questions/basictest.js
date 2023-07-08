/*
questionLabel:[
  all the questions inside
]

In each assessment, there will be tentatively 8 questions, with a max of 3 multiple choice questions.
Greater emphasis will be placed on how learners apply the correct use of language.
Grading of the assessment may require the 'compromise' library for interpreting short answer questions.
To make the assessment less daunting, pronunciation check may be implemented in each assessment. This can
help guide users in crafting proper words and cohesive sentences.
*/

export const basicQuestions = {
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
    ]   
  };