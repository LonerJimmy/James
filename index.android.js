/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
    Component
}from 'react'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    ToastAndroid,
    BackAndroid,
} from 'react-native';
import Splash from './Splash';
import {
    getMainNavigatorRoute
} from './NavigatorUtils';

class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            splashed: false,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => {
                this.setState({splashed: true});
            },
            5000,
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    renderScene(route, navigator) {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
        let Component = route.component;
        return (
            <Component navigator={navigator} route={route}/>
        );
    }

    render() {
        if (!this.state.splashed) {
            return (<Splash />);
        } else {
            return <Navigator
                ref="navigator"
                style={{flex: 1}}
                renderScene={this.renderScene}
                initialRoute={getMainNavigatorRoute()}
            />
        }
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 26,
        height: 26,
    },
    textStyle: {
        color: '#999',
    },
    selectedTextStyle: {
        color: 'black',
    }
});
AppRegistry.registerComponent('James', () => Home);
