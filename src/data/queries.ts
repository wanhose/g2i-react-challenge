import { apiUrl } from "./client";

export type Data = {
  response_code: number;
  results: {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
  }[];
};

export const queryData = async (): Promise<Data> =>
  fetch(`${apiUrl}?amount=10&difficulty=hard&type=boolean`).then((response) =>
    response.json()
  );
