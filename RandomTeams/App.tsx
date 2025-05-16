import { StatusBar } from 'react-native';
import { View } from 'react-native'; // Corrigido: importar com V maiúsculo
import { styles } from './src/screens/Groups/style';
import Groups from './src/screens/Groups'; // Corrigido: sem chaves, porque é export default

export default function App() {
  return (
    <>
      <Groups />
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
    </>
  );
}
