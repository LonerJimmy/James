import Main from './Main';
import NewsDetail from './NewsDetail';
import NotesDetail from './NotesDetail';

const PAGE_MAIN = 'main';
const PAGE_NEWSDETAIL = 'newsdetail';
const PAGE_NOTESDETAIL='notesdetail';

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