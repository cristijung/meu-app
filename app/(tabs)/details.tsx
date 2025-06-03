import { StyleSheet, Text, View, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tela de Detalhes</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Aqui você encontra mais informações.</Text>
      <Button title="Voltar para Home" onPress={() => router.back()} />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
    backgroundColor: '#eee',
  },
});