//Import some code we need

var React = require('react-native');
var AppRegistry = React.AppRegistry;
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;


//Create a React component

var Weekdays2 = React.createClass({
	render: function() {
		return <View style={styles.container}>
			<Text>
				Days of the Week
			</Text>
		</View>
	}
});

//Style the React Component

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

//Show the React component on the screen

AppRegistry.registerComponent('weekdays2', function() {
	return Weekdays2
});