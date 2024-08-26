import { HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack';
import { TabBarStatus, TabParamList } from './Tab.typeDefs';

import { AntDesign } from '@expo/vector-icons';
import { colors } from '@theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case 'HomeTab':
      return <AntDesign name="home" size={24} color={tabStatus.color} />;
    case 'ProfileTab':
      return <AntDesign name="profile" size={24} color={tabStatus.color} />;
    // add more...
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarActiveBackgroundColor: colors.white,
      })}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
