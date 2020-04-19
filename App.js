import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from './screens/MenuScreen';
import LevelsScreen from './screens/LevelsScreen';
import GameScreen from './screens/GameScreen';

// To disable yellow warning boxes
console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App(props) {
	return (
		<View style={styles.container}>
			<StatusBar hidden={true} />
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="MenuScreen" component={MenuScreen} />
					<Stack.Screen name="LevelsScreen" component={LevelsScreen} />
					<Stack.Screen name="GameScreen" component={GameScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 24,
		backgroundColor: '#000000',
	},
});
