'use strict';

import React, {Component} from 'React';
import {
    View,
    Text,
    WebView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter
} from 'react-native';
import {
    addRealmData,
    fetchAllRealmData,
    deleteAllRealmData
} from '../utils/RealmUtils';

class NoteEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        }
    }

    getLocalTime() {
        var date=new Date();

        return date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }

    componentDidMount() {
        this.setState({});
    }

    addOne() {
        const {navigator} =this.props;
        addRealmData(this.state.title, this.state.content, this.getLocalTime(), 1);
        DeviceEventEmitter.emit('changeNote', this.state.title);
        navigator.pop();
    }

    cancel() {
        const {navigator} =this.props;
        navigator.pop();
    }

    render() {
        return (

            <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                <View
                    style={styles.head}
                    horizontal>
                    <TouchableOpacity style={styles.itemDelete}
                                      onPress={() => this.cancel()}>
                        <Text>取消</Text>
                    </TouchableOpacity>
                    <View style={styles.itemMid}>
                        <Text >新建日记</Text>
                    </View>
                    <TouchableOpacity style={styles.itemAdd}
                                      onPress={() => this.addOne()}>
                        <Text>完成</Text>
                    </TouchableOpacity>
                </View>

                <TextInput
                    style={styles.style_title_input}
                    placeholder='请输入日记标题'
                    numberOfLines={1}
                    autoFocus={true}
                    underlineColorAndroid={'transparent'}
                    textAlign='center'
                    onChangeText={(text) => {
                        this.setState({
                            title: text,
                        });
                    }}
                />
                <View
                    style={{height: 1, backgroundColor: '#f4f4f4'}}
                />
                <TextInput
                    style={styles.style_content_input}
                    placeholder='请输入日记内容'
                    underlineColorAndroid={'transparent'}
                    numberOfLines={200}
                    multiline
                    autoFocus
                    onChangeText={(text) => {
                        this.setState({
                            content: text,
                        });
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    head: {
        height: 50,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_title_input: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 10,
        height: 35,
    },
    style_content_input: {
        flex: 20,
        backgroundColor: '#fff',
        height: 35,
        textAlignVertical: 'top'
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
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_view_clear: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
});

export default NoteEdit;