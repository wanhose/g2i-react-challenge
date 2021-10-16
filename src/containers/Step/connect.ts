import useStep from "hooks/useStep";
import { useEffect } from "react";
import { generatePath, useHistory, useParams } from "react-router-dom";

import { Params } from "./types";

const useConnect = () => {
  const { push } = useHistory();
  const { slug } = useParams<Params>();
  const { loading, step } = useStep(slug);

  useEffect(() => {
    if (step && !slug) {
      push(generatePath("/step/:slug", { slug: step.question }));
    }
  }, [push, slug, step]);

  return {
    loading,
    step,
  };
};

export default useConnect;
