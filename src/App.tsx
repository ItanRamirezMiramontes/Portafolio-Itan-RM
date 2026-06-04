import { HelmetProvider } from 'react-helmet-async';
import AppRouter from './routes/AppRouter';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  );
}

export default App;

