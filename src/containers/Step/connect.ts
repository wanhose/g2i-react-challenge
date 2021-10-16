import useResults from 'hooks/useResults';
import useStep from 'hooks/useStep';
import useStepActions from 'hooks/useStepActions';
import { MouseEvent, useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Params } from './types';

const useConnect = () => {
  const { push } = useHistory();
  const { index } = useParams<Params>();
  const { results } = useResults();
  const { loading, step } = useStep(index);
  const { answer } = useStepActions(index);

  const handleAnswer = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const { value } = event.currentTarget.dataset;

      answer(value);
      if (step?.next) push(step.next);
    },
    [answer, push, step],
  );

  useEffect(() => {
    if (Number(index) > (results?.length ?? 0)) push('/step/1');
  }, [index, push, results, step]);

  return {
    handleAnswer,
    loading,
    step,
  };
};

export default useConnect;
