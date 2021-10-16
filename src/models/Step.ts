import { Data } from "data/queries";
import decodeHTML from "utils/decodeHTML";

type Input = Data["results"][0] & {
  index: number;
  total: number;
};

export const normalizeStep = (input: Input) => ({
  category: input.category,
  number: input.index,
  question: decodeHTML(input.question),
  total: input.total,
});

export type Step = ReturnType<typeof normalizeStep>;
