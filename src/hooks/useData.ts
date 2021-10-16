import { queryData } from "data/queries";
import { useQuery } from "react-query";

const useData = () => {
  const { data, isLoading: loading } = useQuery("data", queryData);

  return {
    data,
    loading,
  };
};

export default useData;
