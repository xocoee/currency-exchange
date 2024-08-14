import ReactDOM from 'react-dom/client';
import Init from './components/App.tsx';
import './index.css';

const app = () => {
  const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
  root.render(<Init />);
};

app();
