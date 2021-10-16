import { Values } from 'containers/Form/types';
import { useFormikContext } from 'formik';

const useAnswers = () => {
  const { values } = useFormikContext<Values>();
  const { answers } = values;

  return {
    answers,
  };
};

export default useAnswers;
