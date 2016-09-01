'use strict';

import React, {Component} from 'React';

import {
    Image,
    PixelRatio,
    Platform,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
} from 'react-native';

var TITLE_REF = 'title';

class NoteItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableNativeFeedback
                style={styles.row}
                onPress={() => {
                    this.props.onSelect();
                } }>
                <View style={styles.row}>
                    <Text
                        ref={TITLE_REF}
                        numberOfLines={3}>
                        {this.props.note.title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

var styles = StyleSheet.create({
    storyTitle: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
    },
    storyTitleRead: {
        flex: 1,
        fontSize: 16,
        color: '#777777',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginVertical: 2,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 5,
    },
    cellImage: {
        backgroundColor: '#dddddd',
        height: 60,
        marginLeft: 10,
        width: 80,
    },
});

export default NoteItem;