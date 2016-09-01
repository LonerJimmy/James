'use strict';

import React, { Component } from 'React';
import {
    View,
    Text,
    WebView,
} from 'react-native';

import {
    fetchNewsDetail,
} from './DataSourceUtils';

class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            title:null,
            content:null,
        }
    }

    componentDidMount(){
        this.setState({
            id:this.props.route.detail.id,
            title:this.props.route.detail.title,
            content:this.props.route.detail.content,
        });
    }

    render() {
        if (this.state.content) {
            var html = '<!DOCTYPE html><html><body>' + this.state.title
                + '</body><body>'+this.state.content+'</body></html>';
            return (<WebView html = {html} />);
        } else {
            return (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                    <Text>{'正在加载...'}</Text>
                </View> );
        }
    }
}

export default NewsDetail;