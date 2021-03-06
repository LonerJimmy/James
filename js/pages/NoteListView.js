import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    ToastAndroid,
    Text,
    View,
    ListView,
    ScrollView,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';

import {
    addRealmData,
    fetchAllRealmData,
    deleteAllRealmData
} from '../utils/RealmUtils';
import NoteItem from '../components/NoteItem'
import {
    getNotesDetailNavigatorRoute,
    getNotesEditNavigatorRoute
} from '../utils/NavigatorUtils';

class NoteListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
        }
        this.renderRow = this.renderRow.bind(this);
        this.refreshNotes = this.refreshNotes.bind(this);
    }

    componentDidMount() {
        // addRealmData(1, '帮助', '请打开帮助,阅读以下', '2016-9-1', 1)

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        });
        this.subscription = DeviceEventEmitter.addListener('changeNote', this.refreshNotes);
    }

    refreshNotes(data) {
        this.state = {
            dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        }
    }

    componentWillUnmount() {
        this.subscription.remove();
    };

    renderRow(note) {
        return (
            <NoteItem
                note={note}
                onSelect={() => this.toNotesDetail(note)}/>
        );
    }

    makeItems() {
        if (this.state.dataSource._cachedRowCount === 0) {
            return (<View>
                <View
                    style={styles.head}
                    horizontal={true}>
                    <TouchableOpacity style={styles.itemDelete}
                                      onPress={() => this.deleteAll()}>
                        <Text>清除</Text>
                    </TouchableOpacity>
                    <View style={styles.itemMid}>
                        <Text >笔记</Text>
                    </View>
                    <TouchableOpacity style={styles.itemAdd}
                                      onPress={() => this.addOne()}>
                        <Text>添加</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.empty}>
                    <Text>无日记。。。</Text>
                </View>
            </View>);
        } else {
            return (<View>
                <View
                    style={styles.head}
                    horizontal={true}>
                    <TouchableOpacity style={styles.itemDelete}
                                      onPress={() => this.deleteAll()}>
                        <Text>清除</Text>
                    </TouchableOpacity>
                    <View style={styles.itemMid}>
                        <Text >笔记</Text>
                    </View>
                    <TouchableOpacity style={styles.itemAdd}
                                      onPress={() => this.addOne()}>
                        <Text>添加</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    style={styles.lv}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>);
        }
    }

    toNotesDetail(n) {
        var route = getNotesDetailNavigatorRoute();
        route.detail = n;
        this.props.navigator.push(route);
    }

    addOne() {
        var route = getNotesEditNavigatorRoute();
        this.props.navigator.push(route);
        // addRealmData(1, '帮助', '请打开帮助,阅读以下', '2016-9-1', 1)
        // this.setState({
        //     dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        //     size: this.dataSource._cachedRowCount,
        // })
        // ;
    }

    deleteAll() {
        deleteAllRealmData();
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        });
    }

    render() {
        return (this.makeItems());
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    lv: {
        flex: 1,
    },
    empty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    view: {
        flex: 10,
    },
    head: {
        height: 50,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    itemDelete: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    itemMid: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    itemAdd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default NoteListView;