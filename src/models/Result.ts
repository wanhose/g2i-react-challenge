import { Data } from 'data/queries';
import decodeHTML from 'utils/decodeHTML';

type Input = Data['results'][0];

export const normalizeResult = (input: Input) => ({
  correctAnswer: input.correct_answer,
  incorrectAnswers: input.incorrect_answers,
  question: decodeHTML(input.question),
});

export type Result = ReturnType<typeof normalizeResult>;
