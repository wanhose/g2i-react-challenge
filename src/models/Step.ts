import { Data } from "data/queries";

type Input = Data["results"][0];

export const normalizeStep = (input: Input) => ({
  category: input.category,
  question: input.question,
});

export type Step = ReturnType<typeof normalizeStep>;
