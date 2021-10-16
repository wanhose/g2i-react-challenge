import { Data } from 'data/queries';
import { generatePath } from 'react-router-dom';
import decodeHTML from 'utils/decodeHTML';

type Input = Data['results'][0] & {
  index: number;
  position: number;
  total: number;
};

export const normalizeStep = (input: Input) => ({
  category: input.category,
  index: input.index,
  next:
    input.position < input.total
      ? generatePath('/step/:index', { index: input.position + 1 })
      : undefined,
  position: input.position,
  question: decodeHTML(input.question),
  total: input.total,
});

export type Step = ReturnType<typeof normalizeStep>;
