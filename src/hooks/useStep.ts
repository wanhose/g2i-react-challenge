import { normalizeStep } from 'models/Step';
import { useMemo } from 'react';

import useData from './useData';

const useStep = (slug?: string) => {
  const { data, loading } = useData();

  const step = useMemo(() => {
    const item =
      data?.results.find((result) => result.question === slug) ??
      data?.results[0];

    if (item) {
      const index = (data?.results.indexOf(item) ?? 0) + 1;
      const next = data?.results[index + 1].question;
      const total = data?.results.length ?? 0;

      return normalizeStep({ index, next, total, ...item });
    }

    return undefined;
  }, [data, slug]);

  return {
    loading,
    step,
  };
};

export default useStep;
