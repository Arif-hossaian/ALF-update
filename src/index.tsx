import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles/index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import reportWebVitals from './reportWebVitals';
import './i18n';
import Spinner from './icons/Spinner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient();
root.render(
  <Suspense fallback={<Spinner />}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </Suspense>
);

reportWebVitals();
