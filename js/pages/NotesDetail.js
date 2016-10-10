'use strict';

import React, {Component} from 'React';
import {
    View,
    Text,
    WebView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    DeviceEventEmitter
} from 'react-native';
import {updateRealmData,
    deleteOneRealmData} from '../utils/RealmUtils';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: null,
            content: null,
            time:null,
        }
    }

    componentDidMount() {
        this.setState({
            id: this.props.route.detail.id,
            title: this.props.route.detail.title,
            content: this.props.route.detail.content,
            time:this.props.route.detail.time,
        });
    }

    cancel() {
        const {navigator} =this.props;
        navigator.pop();
    }

    updateOne(){
        const {navigator} =this.props;
        updateRealmData(this.state.title, this.state.content, this.props.route.detail.time, 1);
        DeviceEventEmitter.emit('changeNote',this.state.title);
        navigator.pop();
    }

    deleteOne(){
        const {navigator} =this.props;
        deleteOneRealmData(this.props.route.detail.title, this.props.route.detail.content, this.props.route.detail.time, 1);
        DeviceEventEmitter.emit('changeNote',this.state.title);
        navigator.pop();
    }

    render() {

        if (this.state.content) {
            return (
                <View style={{backgroundColor: '#f4f4f4', flex: 1}}>
                    <View
                        style={styles.head}
                        horizontal>
                        <TouchableOpacity style={styles.itemCancel}
                                          onPress={() => this.cancel()}>
                            <Text>取消</Text>
                        </TouchableOpacity>
                        <TextInput style={styles.itemMid}
                                   numberOfLines={1}
                                   value={this.state.title}
                                   autoFocus={true}
                                   underlineColorAndroid={'transparent'}
                                   textAlign='center'
                                   onChangeText={(text) => {
                                       this.setState({
                                           title: text,
                                       });
                                   }}>
                        </TextInput>
                        <TouchableOpacity style={styles.itemDelete}
                                          onPress={() => this.deleteOne()}>
                            <Text>删除</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemAdd}
                                          onPress={() => this.updateOne()}>
                            <Text>修改</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={styles.style_content_input}
                        value={this.state.content}
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

                </View>);

        } else {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text>{'正在加载...'}</Text>
                </View> );
        }
    }
}

const styles = StyleSheet.create({
    head: {
        height: 60,
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
    itemCancel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom:5,
        marginTop:5,
        borderColor: '#dddddd',
    },
    itemMid: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical:'center'
    },
    itemAdd: {
        flex: 1,
        marginBottom:5,
        marginTop:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },
    itemDelete: {
        flex: 1,
        marginBottom:5,
        marginTop:5,
        marginRight:10,
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

export default NewsDetail;