import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ExploreScreen from './screens/ExploreScreen';
import DetailScreen from './screens/DetailScreen';
import SavedScreen from './screens/SavedScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ExploreScreen" component={ExploreScreen} options={{headerShown: false}}/>
        <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SavedScreen" component={SavedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
