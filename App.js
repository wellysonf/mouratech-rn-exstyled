import Group from './src/screen/Group';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { ActivityIndicator } from 'react-native';
export default function App() {
  const [fontLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      { fontLoaded ? <Group /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}

