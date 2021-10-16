import Button from 'components/Button';
import Container from 'components/MaxContent';
import { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';

import useConnect from './connect';

const Results = () => {
  const { answers, loading, results, score } = useConnect();

  if (loading && !results) return <p className="text-center">Loading...</p>;

  if (!results || answers.length !== results.length) return <Redirect to="/" />;

  return (
    <Container className="text-lg text-center">
      <h1 className="text-xl font-bold">
        You scored
        <br />
        {score} / {results.length}
      </h1>
      {results.map((result, index) => (
        <Fragment key={result.question}>
          <h2 className="mt-8 font-medium text-gray-500 break-words">
            {result.question}
          </h2>
          {result.correctAnswer === answers[index] ? (
            <p className="mt-4 text-green-500">
              {' '}
              Correct answer!{' '}
              <span aria-label="Thumbs Up" role="img">
                👍
              </span>
            </p>
          ) : (
            <p className="mt-4 text-red-500">
              {' '}
              Incorrect answer!{' '}
              <span aria-label="Thumbs Down" role="img">
                👎
              </span>
            </p>
          )}
        </Fragment>
      ))}
      <Button
        as={Link}
        className="mt-14 w-full text-white uppercase bg-blue-500"
        to="/">
        Play again?
      </Button>
    </Container>
  );
};

export default Results;
