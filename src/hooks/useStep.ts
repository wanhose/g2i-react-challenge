import { normalizeStep } from 'models/Step';
import { useMemo } from 'react';

import useData from './useData';

const useStep = (stepIndex?: string) => {
  const { data, loading } = useData();

  const step = useMemo(() => {
    const index = Number(stepIndex) - 1;
    const item = data?.results[Number(index)] ?? data?.results[0];

    if (item) {
      const position = index + 1;
      const total = data?.results.length ?? 0;

      return normalizeStep({ index, position, total, ...item });
    }

    return undefined;
  }, [data, stepIndex]);

  return {
    loading,
    step,
  };
};

export default useStep;
