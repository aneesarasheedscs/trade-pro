import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme, PageLoader } from '@/components';
import { queryClient } from '@/configs/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AppTheme colorPrimary={'#25A7DF'}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<PageLoader />}>
            <AppRoutes />
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
