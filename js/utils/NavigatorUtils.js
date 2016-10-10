import Main from '../pages/Main';
import Splash from '../pages/Splash'
import NewsDetail from '../pages/NewsDetail';
import NotesDetail from '../pages/NotesDetail';
import NoteEdit from '../pages/NoteEdit';

const PAGE_SPLASH = 'splash';
const PAGE_MAIN = 'main';
const PAGE_NEWSDETAIL = 'newsdetail';
const PAGE_NOTESDETAIL='notesdetail';
const PAGE_NOTEEDIT='noteedit';

export const getSplashNavigatorRoute = () => {
    return {
        component: Splash,
        name: PAGE_SPLASH,
    }
};

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