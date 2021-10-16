import Button from "components/Button";
import Container from "components/MaxContent";
import { Redirect } from "react-router-dom";

import useConnect from "./connect";

const Step = () => {
  const { loading, step } = useConnect();

  if (loading && !step) return <p className="text-center">Loading...</p>;

  if (!step) return <Redirect to="/" />;

  return (
    <Container className="text-lg text-center">
      <h1 className="text-xl font-bold">{step.category}</h1>
      <div className="relative mt-14 rounded border border-black aspect-w-1 aspect-h-1">
        <p
          className="absolute top-1/2 left-1/2 px-5 w-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ height: "fit-content" }}
        >
          {step.question}
        </p>
      </div>
      <p className="mt-8 text-sm">
        {step.number} of {step.total}
      </p>
      <div className="flex justify-center mt-10 text-white">
        <Button className="flex-1 bg-red-500" type="button">
          False
        </Button>
        <Button className="flex-1 ml-4 bg-green-500" type="button">
          True
        </Button>
      </div>
    </Container>
  );
};

export default Step;
