import useResults from 'hooks/useResults';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Values } from './types';

const useConnect = () => {
  const { push } = useHistory();
  const { results } = useResults();

  const handleSubmit = useCallback(
    (values: Values) => {
      if (results?.length === values.answers.length) push('/results');
    },
    [push, results],
  );

  return {
    handleSubmit,
  };
};

export default useConnect;
