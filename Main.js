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
    TouchableHighlight,
    ToastAndroid,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './Home';

var TITLE_NEWS='新闻';
var TITLE_NOTE='日记'
var TITLE_MORE='更多'


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: TITLE_NEWS,
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title={TITLE_NEWS}
                    selected={this.state.selectedTab === TITLE_NEWS}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("./imgs/ic_alarm_clock_unselect.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("./imgs/ic_alarm_clock_select.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: TITLE_NEWS})}>
                    <Home
                        navigator={this.props.navigator}
                        route={this.props.route}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={TITLE_NOTE}
                    selected={this.state.selectedTab === TITLE_NOTE}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("./imgs/ic_time_unselect.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("./imgs/ic_time_select.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: TITLE_NOTE})}>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Text>{'正在加载...'}</Text>
                    </View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={TITLE_MORE}
                    selected={this.state.selectedTab === TITLE_MORE}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={() => <Image source={require("./imgs/ic_more_unselect.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("./imgs/ic_more_select.png")}
                                                     style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: TITLE_MORE})}>
                    <View>
                        <Text>{'正在加载...'}</Text>
                    </View>
                </TabNavigator.Item>
            </TabNavigator>

        );
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

export default Main;
