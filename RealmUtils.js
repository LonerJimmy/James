import {
    ToastAndroid
}from'react-native'

const Realm = require('realm');

const RealmName = 'Note';
const NoteSchema = {
    name: RealmName,
    properties: {
        id: 'int',
        title: 'string',
        content: 'string',
        time: 'string',
        type: 'int'
    }
};

export const initRealmData = () => {

}

export const addRealmData = (id, title, content, time, type) => {
    let realm = new Realm({schema: [NoteSchema]});
    return realm.write(()=> {
        realm.create(RealmName, {
            id: id,
            title: title,
            content: content,
            time: time,
            type: type
        });
    })
}

export const deleteAllRealmData = () => {
    let realm = new Realm({schema: [NoteSchema]});
    realm.write(()=> {
        let allBooks = realm.objects(RealmName);
        realm.delete(allBooks); // 删除所有书本
    })
}

export const deleteOneRealmData = (note) => {
    let realm = new Realm({schema: [NoteSchema]});
    realm.write(()=> {
        let book = realm.create(note);
        // 删除该书本
        realm.delete(book);

    })
}

export const fetchAllRealmData = () => {
    let realm = new Realm({schema: [NoteSchema]});
    let notes = realm.objects(RealmName);
    return notes;
}