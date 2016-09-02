import Main from './Main';
import NewsDetail from './NewsDetail';
import NotesDetail from './NotesDetail';
import NoteEdit from './NoteEdit';

const PAGE_MAIN = 'main';
const PAGE_NEWSDETAIL = 'newsdetail';
const PAGE_NOTESDETAIL='notesdetail';
const PAGE_NOTEEDIT='noteedit';

export const getMainNavigatorRoute = () => {
    return {
        component:Main,
        name:PAGE_MAIN,
    };
}

export const getNewsDetailNavigatorRoute = () => {
    return {
        component:NewsDetail,
        name:PAGE_NEWSDETAIL,
    };
}

export const getNotesDetailNavigatorRoute = () => {
    return {
        component:NotesDetail,
        name:PAGE_NOTESDETAIL,
    };
}

export const getNotesEditNavigatorRoute = () => {
    return {
        component:NoteEdit,
        name:PAGE_NOTEEDIT,
    };
}