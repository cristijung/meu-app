import { StyleSheet, Text, View, Button } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Tela de Configurações</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>Ajuste suas preferências aqui.</Text>
      {/* ex de navegação para uma tela que não está nas abas (modal) */}
      <Link href="/modal" asChild>
        <Button title="Abrir Modal de Ajuda" />
      </Link>
      <View style={{ marginVertical: 10 }} />
      <Button title="Ir para Home" onPress={() => router.push('/')} />
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