// i18n config
import './locales/i18n';

// project-imports
import Routes from 'routes';
import ThemeCustomization from 'themes';

import RTLLayout from 'components/RTLLayout';
import ScrollTop from 'components/ScrollTop';
import Customization from 'components/Customization';
import Snackbar from 'components/@extended/Snackbar';
import Notistack from 'components/third-party/Notistack';

// auth-provider
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';

// React query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeCustomization>
        <RTLLayout>
          <ScrollTop>
            <AuthProvider>
              <>
                <Notistack>
                  <Routes />
                  <Customization />
                  <Snackbar />
                </Notistack>
              </>
            </AuthProvider>
          </ScrollTop>
        </RTLLayout>
      </ThemeCustomization>
    </QueryClientProvider>
  );
};

export default App;
