import { QueryClient, QueryClientProvider } from 'react-query'
import Quote from './components/Quote';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div className="block">
          <Quote/>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
