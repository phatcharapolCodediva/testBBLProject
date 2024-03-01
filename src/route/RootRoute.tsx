import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/features/auth/LoginScreen';
import HomeScreen from '@/features/main/HomeScreen';
import NoteScreen from '@/features/main/NoteScreen';
import CommentScreen from '@/features/main/CommentScreen';

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const AuthRoute = (
  <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);
const MainRoute = (
  <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <MainStack.Screen name="Home" component={HomeScreen} />
    <MainStack.Screen name="Note" component={NoteScreen} />
    <MainStack.Screen name="Comment" component={CommentScreen} />
  </MainStack.Navigator>
);
