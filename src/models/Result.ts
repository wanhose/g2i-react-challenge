import { Data } from "data/queries";

type Input = Data["results"][0];

export const normalizeResult = (input: Input) => ({
  category: input.category,
  correctAnswer: input.correct_answer,
  incorrectAnswers: input.incorrect_answers,
  question: input.question,
});

export type Result = ReturnType<typeof normalizeResult>;
