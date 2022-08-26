import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Calculator from "./src/pages/calculator";
import LoginInstagram from "./src/pages/loginInstagram";
import PizzaChoose from "./src/pages/pizzaChoose";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name={"calculator"} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="LoginInstagram"
          component={LoginInstagram}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name={"instagram"} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="PizzaChoose"
          component={PizzaChoose}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Icon name={"circle"} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
