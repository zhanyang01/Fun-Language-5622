/*
questionLabel:[
  all the questions inside
]


each question should have:
description: (what is the question/qn title)
correctAnswer: the value (A/B/C) of the correct answer
options:options of the questions; in Object array


each option should have:
value: the value (A,B,C)
text: the text to be displayed in the radio option

*/

export const allQuestions = {
  basicQuestionsPartOne: [
    {
      description: "I saw __ dog.",
      answer: "B",
      options: [
        { value: "A", text: "an" },
        { value: "B", text: "a" },
        { value: "C", text: "it" },
      ],
    },

    {
      description: "Which pronoun is used to refer to yourself?",
      answer: "A",
      options: [
        { value: "A", text: "I" },
        { value: "B", text: "He" },
        { value: "C", text: "We" },
      ],
    },

    {
      description: "Which word is the same as 60?",
      answer: "C",
      options: [
        { value: "A", text: "fifty" },
        { value: "B", text: "sixty-nine" },
        { value: "C", text: "sixty" },
      ],
    },
  ],

  basicQuestionsPartTwo: [
    {
      description: "What is the synonym of happy?",
      answer: "B",
      options: [
        { value: "A", text: "scared" },
        { value: "B", text: "cheerful" },
        { value: "C", text: "upset" },
      ],
    },

    {
      description: "Which word is used to describe movement under water?",
      answer: "C",
      options: [
        { value: "A", text: "run" },
        { value: "B", text: "sleep" },
        { value: "C", text: "swim" },
      ],
    },

    {
      description: "Which punctuation is used to write a question?",
      answer: "A",
      options: [
        { value: "A", text: "?" },
        { value: "B", text: "!" },
        { value: "C", text: "." },
      ],
    },
  ],

  basicQuestionsPartThree: [
    {
      description: "He __ a pet.",
      answer: "A",
      options: [
        { value: "A", text: "has" },
        { value: "B", text: "have" },
        { value: "C", text: "hasn't" },
      ],
    },

    {
      description: "I have not __ her in a week.",
      answer: "B",
      options: [
        { value: "A", text: "see" },
        { value: "B", text: "seen" },
        { value: "C", text: "saw" },
      ],
    },

    {
      description: "It __ snowing earlier!",
      answer: "C",
      options: [
        { value: "A", text: "is" },
        { value: "B", text: "did" },
        { value: "C", text: "was" },
      ],
    },
  ],

  basicQuestionsPartFour: [
    {
      description: "Which of the following is a noun?",
      answer: "A",
      options: [
        { value: "A", text: "John" },
        { value: "B", text: "a" },
        { value: "C", text: "the" },
      ],
    },

    {
      description: "I wonder __ she went.",
      answer: "C",
      options: [
        { value: "A", text: "what" },
        { value: "B", text: "who" },
        { value: "C", text: "where" },
      ],
    },

    {
      description: "Can't wait __ to see you next week!",
      answer: "B",
      options: [
        { value: "A", text: "in" },
        { value: "B", text: "to" },
        { value: "C", text: "how" },
      ],
    },
  ],

  intemediateQuestionsPartOne: [
    {
      description: "None of this should ___ happened",
      options: [
        { value: "A", text: "had" },
        { value: "B", text: "have" },
        { value: "C", text: "has" },
      ],
    },

    {
      description: "What is the most appropriate adjactive to describe someone as careful?",
      options: [
        { value: "A", text: "cautious" },
        { value: "B", text: "anxious" },
        { value: "C", text: "conscientious" },
      ],
    },

    {
      description: "This person can't be ________",
      options: [
        { value: "A", text: "trusted" },
        { value: "B", text: "trusting" },
        { value: "C", text: "trustworthy" },
      ],
    },
  ],

  intemediateQuestionsPartTwo: [
    {
      description: "At least ___ is above the median score",
      options: [
        { value: "A", text: "am" },
        { value: "B", text: "I" },
        { value: "C", text: "I'm" },
      ],
    },

    {
      description: "________ Sam was tired, he still carried Frodo on his back to Mount Doom.",
      options: [
        { value: "A", text: "But" },
        { value: "B", text: "Despite" },
        { value: "C", text: "Although" },
      ],
    },

    {
      description: "This sword was ___ for the Witch King of Angmar.",
      options: [
        { value: "A", text: "made" },
        { value: "B", text: "make" },
        { value: "C", text: "making" },
      ],
    },
  ],

  intemediateQuestionsPartThree: [
    {
      description: "___ is Gamora?",
      options: [
        { value: "A", text: "Why" },
        { value: "B", text: "When" },
        { value: "C", text: "Who" },
      ],
    },

    {
      description: "I felt _____ building up inside me.",
      options: [
        { value: "A", text: "angry" },
        { value: "B", text: "anger" },
        { value: "C", text: "angering" },
      ],
    },

    {
      description: "This is ______",
      options: [
        { value: "A", text: "ridicule" },
        { value: "B", text: "ridiculed" },
        { value: "C", text: "ridiculous" },
      ],
    },
  ],
};
