import { normalizeStep } from "models/Step";
import { useMemo } from "react";

import useData from "./useData";

const useStep = (slug: string) => {
  const { data, loading } = useData();

  const step = useMemo(() => {
    const item = data?.results.find((result) => result.question === slug);

    if (item) return normalizeStep(item);

    return undefined;
  }, [data]);

  return {
    loading,
    step,
  };
};

export default useStep;
