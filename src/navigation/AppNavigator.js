import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../utils/constants';

// Import screens
import HomeScreen from '../screens/HomeScreen';
import ResultScreen from '../screens/ResultScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatbotScreen from '../screens/ChatbotScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack Navigator (includes Home and Result screens)
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="HomeMain" 
        component={HomeScreen}
        options={{ title: 'DermaSight' }}
      />
      <Stack.Screen 
        name="Result" 
        component={ResultScreen}
        options={{ title: 'Analysis Results' }}
      />
    </Stack.Navigator>
  );
}

// Bottom Tab Navigator
function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textSecondary,
          tabBarStyle: {
            backgroundColor: COLORS.white,
            borderTopWidth: 1,
            borderTopColor: COLORS.border,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: COLORS.white,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => <TabIcon emoji="🏠" color={color} />,
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="History" 
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon emoji="📜" color={color} />,
            title: 'History',
          }}
        />
        <Tab.Screen 
          name="Chatbot" 
          component={ChatbotScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon emoji="💬" color={color} />,
            title: 'AI Assistant',
          }}
        />
        <Tab.Screen 
          name="About" 
          component={AboutScreen}
          options={{
            tabBarIcon: ({ color }) => <TabIcon emoji="ℹ️" color={color} />,
            title: 'About',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Custom Tab Icon Component
const TabIcon = ({ emoji, color }) => {
  return (
    <Text style={{ fontSize: 24, opacity: color === COLORS.primary ? 1 : 0.5 }}>
      {emoji}
    </Text>
  );
};

// Import Text component for TabIcon
import { Text } from 'react-native';

export default AppNavigator;
