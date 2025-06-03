import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
      }}>
      <Tabs.Screen
        name="index" // nome do arquivo da tela home
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="details" // nome do arquivo da tela details
        options={{
          title: 'Detalhes',
          tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings" // nome do arquivo da tela settings
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}