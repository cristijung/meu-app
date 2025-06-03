import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal de Ajuda</Text>
      <View style={styles.separator} />
      <Text>Este é um exemplo de tela modal.</Text>
      <Button title="Fechar Modal" onPress={() => router.back()} />

      {/* usamos `../` para voltar na navegação ou o nome da rota específica */}
      {/* e usamos uma barra de status diferente na tela modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});