import { Values } from 'containers/Form/types';
import { useFormikContext } from 'formik';
import { useCallback } from 'react';

import useStep from './useStep';

const useStepActions = (index?: string) => {
  const { setFieldValue } = useFormikContext<Values>();
  const { step } = useStep(index);

  const answer = useCallback(
    (value?: string) =>
      setFieldValue(`answers[${step?.index}]`, value ?? 'False'),
    [setFieldValue, step],
  );

  return {
    answer,
  };
};

export default useStepActions;
