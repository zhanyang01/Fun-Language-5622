import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useQuiz = create(
  persist(
    (set) => ({
      quiz: {},
      // directly call the quiz via the label

      saveQuiz: (quizLabel, currentQuiz) => {
        // if label is not there, add the set (user's first attempt)
        // if its there, just replace the value (user's subsequent attempt(s))

        //below is what each 'quiz' will be stored like

        {
          /*quizLabel: [
          { questionNo, answerValue },
          { questionNo, answerValue },
        ];*/
        }

        set((state) => ({
          quiz: { ...state.quiz, [quizLabel]: currentQuiz },
        }));
      },
    }),
    {
      name: "userSavedQuizzes",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
