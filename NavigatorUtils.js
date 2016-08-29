import Main from './Main';

const PAGE_MAIN = 'main';
const PAGE_NEWSDETAIL = 'newsdetail';

export const getMainNavigatorRoute = () => {
    return {
        component:Main,
        name:PAGE_MAIN,
    };
}

export const getNewsDetailNavigatorRoute = () => {
    return {
        component:NewsDetailScreen,
        name:PAGE_NEWSDETAIL,
    };
}
