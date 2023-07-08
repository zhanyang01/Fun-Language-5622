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
      description: "Can't wait __ see you next week!",
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
      description: "None of this should ___ happened.",
      answer: "B",
      options: [
        { value: "A", text: "had" },
        { value: "B", text: "have" },
        { value: "C", text: "has" },
      ],
    },

    {
      description: "What is the most appropriate adjactive to describe someone as careful?",
      answer: "A",
      options: [
        { value: "A", text: "cautious" },
        { value: "B", text: "anxious" },
        { value: "C", text: "conscientious" },
      ],
    },

    {
      description: "This person can't be ________",
      answer: "A",
      options: [
        { value: "A", text: "trusted" },
        { value: "B", text: "trusting" },
        { value: "C", text: "trustworthy" },
      ],
    },
  ],

  intemediateQuestionsPartTwo: [
    {
      description: "At least ___ is above the median score.",
      answer: "C",
      options: [
        { value: "A", text: "am" },
        { value: "B", text: "I" },
        { value: "C", text: "I'm" },
      ],
    },

    {
      description: "________ Sam was tired, he still carried Frodo on his back to Mount Doom.",
      answer: "C",
      options: [
        { value: "A", text: "But" },
        { value: "B", text: "Despite" },
        { value: "C", text: "Although" },
      ],
    },

    {
      description: "This sword was ___ for the Witch King of Angmar.",
      answer: "A",
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
      answer: "C",
      options: [
        { value: "A", text: "Why" },
        { value: "B", text: "When" },
        { value: "C", text: "Who" },
      ],
    },

    {
      description: "I felt _____ building up inside me.",
      answer: "B",
      options: [
        { value: "A", text: "angry" },
        { value: "B", text: "anger" },
        { value: "C", text: "angering" },
      ],
    },

    {
      description: "This is ______!",
      answer: "C",
      options: [
        { value: "A", text: "ridicule" },
        { value: "B", text: "ridiculed" },
        { value: "C", text: "ridiculous" },
      ],
    },
  ],

  intemediateQuestionsPartFour: [
    {
      description: "No sooner (a), than (b).",
      answer: "A",
      options: [
        { value: "A", text: "(a) : had she left the house, (b) : it started raining" },
        { value: "B", text: "(a) : had it started raining, (b) : she left the house" },
        { value: "C", text: "(a) it started raining, (b) had she left the house" },
      ],
    },

    {
      description: "Which of the following is not a verb?",
      answer: "A",
      options: [
        { value: "A", text: "hi" },
        { value: "B", text: "describe" },
        { value: "C", text: "eat" },
      ],
    },

    {
      description: "In spite of ____, he completed he marathon and attained third place.",
      answer: "B",
      options: [
        { value: "A", text: "him feeling the pain" },
        { value: "B", text: "the pain in his leg" },
        { value: "C", text: "his leg feeling very painful" },
      ],
    },
  ],
  advancedQuestionsPartOne: [
    {
      description:
        "Which word is the most appropriate to describe very small amount in the field of Mathematics?",
      answer: "C",
      options: [
        { value: "A", text: "small" },
        { value: "B", text: "miniscle" },
        { value: "C", text: "infinitesimal" },
      ],
    },

    {
      description: "Which is the closest definition to ecstacy?",
      answer: "A",
      options: [
        { value: "A", text: "a state of overwhelming emotion" },
        { value: "B", text: "happiness" },
        { value: "C", text: "anger" },
      ],
    },

    {
      description: "Which word has a negative connotation?",
      answer: "B",
      options: [
        { value: "A", text: "dog" },
        { value: "B", text: "mutt" },
        { value: "C", text: "purebred" },
      ],
    },
  ],

  advancedQuestionsPartTwo: [
    {
      description: "The antonym of lethargic is ____.",
      answer: "A",
      options: [
        { value: "A", text: "active" },
        { value: "B", text: "happy" },
        { value: "C", text: "sleepy" },
      ],
    },

    {
      description: "Neither Danny ___ Harry entered the classroom today.",
      answer: "A",
      options: [
        { value: "A", text: "nor" },
        { value: "B", text: "or" },
        { value: "C", text: "and" },
      ],
    },

    {
      description: "Which of the following is the definition of alleviate?",
      answer: "C",
      options: [
        { value: "A", text: "to make something, such as pain and suffering, more bearable" },
        { value: "B", text: "to partially remove or correct something undesirable" },
        { value: "C", text: "to worsen" },
      ],
    },
  ],

  advancedQuestionsPartThree: [
    {
      description: "We saw a ____ of orcas during our trip in Alaska!",
      answer: "B",
      options: [
        { value: "A", text: "flock" },
        { value: "B", text: "pod" },
        { value: "C", text: "swarm" },
      ],
    },

    {
      description: "Which of the following best explains amnesia?",
      answer: "B",
      options: [
        { value: "A", text: "forgetfulness" },
        {
          value: "B",
          text: "loss of memory usually due to brain injury, shock , faitgue , repression or illness",
        },
        { value: "C", text: "dementia" },
      ],
    },

    {
      description: "What do you think is the purpose of framing in news reporting?",
      answer: "C",
      options: [
        { value: "A", text: "to influence the public" },
        { value: "B", text: "to advocate a call of action" },
        { value: "C", text: "to make a perspective sailent" },
      ],
    },
  ],

  advancedQuestionsPartFour: [
    {
      description: "What is the meaning of 'face value'?",
      answer: "A",
      options: [
        { value: "A", text: "apparent value of significance" },
        { value: "B", text: "the value of someone's else face" },
        { value: "C", text: "profit" },
      ],
    },

    {
      description: "Which of the following best explains 'pecking order'?",
      answer: "C",
      options: [
        { value: "A", text: "egalitarian" },
        { value: "B", text: "rank" },
        { value: "C", text: "social hierachy" },
      ],
    },

    {
      description: "Which word does not describe someone who is obstinate?",
      answer: "B",
      options: [
        { value: "A", text: "adamant" },
        { value: "B", text: "placable" },
        { value: "C", text: "headstrong" },
      ],
    },
  ],
};
