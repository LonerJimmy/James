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
    TouchableOpacity
} from 'react-native';

import {
    addRealmData,
    fetchAllRealmData,
    deleteAllRealmData
} from './RealmUtils';
import NoteItem from './NoteItem'

class NoteListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notesList: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            }),
        }
        this.renderRow = this.renderRow.bind(this);
    }

    componentDidMount() {
        // addRealmData(1, '帮助', '请打开帮助,阅读以下', '2016-9-1', 1)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        });
    }

    renderRow(note) {
        return (
            <NoteItem
                note={note}
                onSelect={() => this.toNotesDetail(note)}/>
        );
    }

    toNotesDetail(note) {

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

    addOne() {
        addRealmData(1, '帮助', '请打开帮助,阅读以下', '2016-9-1', 1)
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(fetchAllRealmData()),
        });
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