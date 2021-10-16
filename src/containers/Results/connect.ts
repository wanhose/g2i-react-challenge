import useAnswers from 'hooks/useAnswers';
import useResults from 'hooks/useResults';
import { useEffect, useMemo } from 'react';
import { useQueryClient } from 'react-query';

const useConnect = () => {
  const client = useQueryClient();
  const { answers } = useAnswers();
  const { loading, results } = useResults();

  const score = useMemo(
    () =>
      results?.reduce(
        (prev, current, index) =>
          prev + (current.correctAnswer === answers[index] ? 1 : 0),
        0,
      ) ?? 0,
    [answers, results],
  );

  useEffect(() => {
    return () => {
      client.refetchQueries('data');
    };
  }, [client]);

  return {
    answers,
    loading,
    results,
    score,
  };
};

export default useConnect;
