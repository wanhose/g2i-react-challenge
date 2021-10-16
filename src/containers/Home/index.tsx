import Button from "components/Button";
import Container from "components/MaxContent";
import { Link } from "react-router-dom";

const Home = () => (
  <Container className="text-lg text-center">
    <h1 className="text-xl font-bold">Welcome to the Trivia Challenge</h1>
    <p className="mt-20">
      You will be presented with 10 True or False questions.
    </p>
    <p className="mt-20">Can you score 100%?</p>
    <Button
      as={Link}
      className="mt-20 text-white uppercase bg-blue-500"
      to="/step"
    >
      Begin
    </Button>
  </Container>
);

export default Home;
