import { normalizeResult } from 'models/Result';
import { useMemo } from 'react';

import useData from './useData';

const useResults = () => {
  const { data, loading } = useData();

  const results = useMemo(() => data?.results.map(normalizeResult), [data]);

  return {
    loading,
    results,
  };
};

export default useResults;
