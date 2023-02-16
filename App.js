import { Provider } from 'react-redux';
import store from './redux/store';

import Playground from './components/Playground';
import Dashboard from './components/Dashboard';
import ChessPlayground from './components/chess/ChessPlayground';

import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'BEEtle', headerShown: false}}
            />
          <Stack.Screen
              name="Playground"
              component={Playground}
            />
          <Stack.Screen
              name="Dashboard"
              component={Dashboard}
            />
          <Stack.Screen
              name="ChessPlayground"
              component={ChessPlayground}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
