import Main from './Main';
import NewsDetail from './NewsDetail';

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
        component:NewsDetail,
        name:PAGE_NEWSDETAIL,
    };
}
