import { Data } from 'data/queries';
import { generatePath } from 'react-router-dom';
import decodeHTML from 'utils/decodeHTML';

type Input = Data['results'][0] & {
  index: number;
  next?: string;
  total: number;
};

export const normalizeStep = (input: Input) => ({
  category: input.category,
  next: input.next
    ? generatePath('/step/:slug', { slug: input.next })
    : '/results',
  number: input.index,
  question: decodeHTML(input.question),
  total: input.total,
});

export type Step = ReturnType<typeof normalizeStep>;
