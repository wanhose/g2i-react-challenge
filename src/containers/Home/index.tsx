import Button from 'components/Button';
import Container from 'components/MaxContent';
import { Link } from 'react-router-dom';

const Home = () => (
  <Container className="text-lg text-center">
    <h1 className="text-xl font-bold">Welcome to the Trivia Challenge</h1>
    <h2 className="mt-14">
      You will be presented with 10 True or False questions.
    </h2>
    <p className="mt-14">Can you score 100%?</p>
    <Button
      as={Link}
      className="mt-14 w-full text-white uppercase bg-blue-500"
      to="/step">
      Begin
    </Button>
  </Container>
);

export default Home;
