import { Suspense } from 'react';
import Routes from '@/routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import { AppTheme, PageLoader } from '@/components';
import { queryClient } from '@/configs/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  return (
    <AppTheme colorPrimary={'#5A54F9'}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<PageLoader />}>
            <Routes />
          </Suspense>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </AppTheme>
  );
}

export default App;
