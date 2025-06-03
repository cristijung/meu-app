import { StyleSheet, Text, View, Button } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Tela Home</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Bem-vindo à tela inicial!</Text>
      <Link href="/details" asChild>
        <Button title="Ir para Detalhes" />
      </Link>
      <View style={{ marginVertical: 10 }} />
      <Link href="/settings" asChild>
        <Button title="Ir para Configurações" />
      </Link>
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