'use strict';
import React, {
    Component
}from 'react'

import {
    Text,
    View,
} from 'react-native';

const Realm = require('realm');

class NoteListView extends Component {
    render() {
        let mRealm = new Realm({
            schema: [{name: 'Dog', properties: {name: 'string'}}]
        });

        mRealm.write(() => {
            mRealm.create('Dog', {name: 'Rex'});
        });

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Count of Dogs in Realm: {realm.objects('Dog').length}
                </Text>
            </View>
        );
    }
}

export default NoteListView;