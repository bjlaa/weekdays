//Import some code we need

var React = require('react');
var Moment = require('moment');
var AppRegistry = React.AppRegistry;
var {
	View,
	Text,
	StyleSheet
} = require('react-native');
var DayItem = require('./src/day-item');


//Create a React component

var Weekdays2 = React.createClass({
	days: function() {
		var daysItems = [];

		for(var i=0; i<7; i++) {
			var day = Moment().add(i, 'days').format('dddd');
			daysItems.push(
				<DayItem key={i} day={day} daysUntil={i} />
			)
		}
		return daysItems;
	},
	render: function() {
		return <View style={styles.container}>
			<Text>
				Days of the Glawie:
			</Text>
			{this.days()}
		</View>
	}
});

//Style the React component

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	}
});

//Show the React component on the screen

AppRegistry.registerComponent('weekdays2', function() {
	return Weekdays2
});