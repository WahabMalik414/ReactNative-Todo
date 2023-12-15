import * as React from 'react';
import {View, Text} from 'react-native';
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TaskDescription from './components/TaskDescription';
import TasksTodoList from './components/TasksTodoList';
import TodoListHome from './components/TodoListHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoListHome">
        <Stack.Screen name="ToDoListHome" component={TodoListHome} />
        <Stack.Screen name="TaskDescription" component={TaskDescription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
