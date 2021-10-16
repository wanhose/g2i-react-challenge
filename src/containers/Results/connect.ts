import useResults from 'hooks/useResults';

const useConnect = () => {
  const { loading, results } = useResults();

  return {
    loading,
    results,
  };
};

export default useConnect;
