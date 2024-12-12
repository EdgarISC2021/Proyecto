// Importamos el componente View de react-native, aunque en este código no se está usando.
import { View } from 'react-native';

// Importamos NavigationContainer para gestionar el estado de la navegación en la aplicación.
import { NavigationContainer } from '@react-navigation/native';

// Importamos createNativeStackNavigator para crear un stack de navegación nativo.
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importamos las pantallas (componentes) que vamos a usar en el stack de navegación.
import HomeScreen from './src/pages/Inicio';
import LoginScreen from './src/pages/Login';
import Home2Screen from './src/pages/Home';
import FormScreen from './src/pages/Form';
import FormSingin from './src/pages/SingIn';

// Creamos el stack de navegación.
const Stack = createNativeStackNavigator();

// Componente principal de la aplicación.
export default function App() {
  return (
    // NavigationContainer envuelve toda la navegación de la app.
    <NavigationContainer>

      {/* Stack.Navigator define las pantallas dentro del stack. */}
      <Stack.Navigator initialRouteName="Inicio"> 
        {/* 
          Definimos cada pantalla dentro del stack con Stack.Screen. 
          - El prop 'name' es el nombre que se usará internamente para navegar.
          - El prop 'component' es el componente que se renderiza en esa pantalla.
        */}
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home2Screen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="SingIn" component={FormSingin} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
