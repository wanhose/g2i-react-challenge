import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const useConnect = () => {
  const { push } = useHistory();

  const handleSubmit = useCallback(() => push('/results'), [push]);

  return {
    handleSubmit,
  };
};

export default useConnect;
