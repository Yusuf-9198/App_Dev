import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

// Import your custom components
// import { AnimatedSplashOverlay } from '@/components/animated-icon';
// import AppTabs from '@/components/app-tabs';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const colorScheme = useColorScheme();

  useEffect(() => {
    let mounted = true;

    // Prevent the splash screen from auto-hiding until we're ready.
    SplashScreen.preventAutoHideAsync().catch(() => {});

    async function hideSplash() {
      try {
        await SplashScreen.hideAsync();
      } catch {
        // ignore
      }
    }

    // Hide after mount
    if (mounted) hideSplash();

    return () => {
      mounted = false;
    };
  }, []);

  const theme = colorScheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <ThemeProvider value={theme}>
      {children}
    </ThemeProvider>
  );
}