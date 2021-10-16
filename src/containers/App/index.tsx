import Form from 'containers/Form';
import Routes from 'containers/Routes';
import { client } from 'data/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <QueryClientProvider client={client}>
    <Router>
      <Form>
        <Routes />
      </Form>
    </Router>
  </QueryClientProvider>
);

export default App;
