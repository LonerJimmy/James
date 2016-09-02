import {
    ToastAndroid
}from'react-native'

const Realm = require('realm');

const RealmName = 'Note';
const NoteSchema = {
    name: RealmName,
    primaryKey: 'time',
    properties: {
        title: 'string',
        content: 'string',
        time: 'string',
        type: 'int'
    }
};

export const initRealmData = () => {

}

export const addRealmData = (title, content, time, type) => {
    let realm = new Realm({schema: [NoteSchema]});
    return realm.write(()=> {
        realm.create(RealmName, {
            title: title,
            content: content,
            time: time,
            type: type
        });
    })
}

export const updateRealmData = (title, content, time, type) => {
    let realm = new Realm({schema: [NoteSchema]});
    return realm.write(()=> {
        realm.create(RealmName, {
            title: title,
            content: content,
            time: time,
            type: type
        },true);
    });
}

export const deleteAllRealmData = () => {
    let realm = new Realm({schema: [NoteSchema]});
    realm.write(()=> {
        let allBooks = realm.objects(RealmName);
        realm.delete(allBooks); // 删除所有书本
    })
}

export const deleteOneRealmData = (title, content, time, type) => {
    let realm = new Realm({schema: [NoteSchema]});
    realm.write(()=> {
        let book = realm.create(RealmName, {
            title: title,
            content: content,
            time:time,
            type: type
        },true);
        // 删除该书本
        realm.delete(book);
    })
}

export const fetchAllRealmData = () => {
    let realm = new Realm({schema: [NoteSchema]});
    let notes = realm.objects(RealmName);
    return notes;
}