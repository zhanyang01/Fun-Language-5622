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

export const intermediateQuestions = {
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
        description: "Type out the following sentence using the phrase 'together with': Peter goes to the market everyday. Jane goes with him.",
        answer: "Peter, together with Jane, goes to the market everyday."
      },

      {
        description: "Type out the following sentence with the correct punctuation: Are you hungry,",
        answer: "Are you hungry?"
      },
    ]   
  };