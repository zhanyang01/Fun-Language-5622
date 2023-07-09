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

export const advancedQuestions = {
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
        description: "That thought just came from the __ of my __.",
        answer: "A",
        options: [
          { value: "A", text: "back, mind" },
          { value: "B", text: "front, mind" },
          { value: "C", text: "back, brain" },
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