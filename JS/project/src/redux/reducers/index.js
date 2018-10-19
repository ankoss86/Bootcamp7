import {combineReducers} from 'redux';
import showMenu from '../reducers/showMenuReducer';
import showChat from '../reducers/showChatReducer';
import logShowMobile from '../reducers/logShowMobileReducer';
import logShowDesctop from '../reducers/logShowDesctopReducer';
import regShowMobile from '../reducers/regShowMobileReducer';
import regShowDesctop from '../reducers/regShowDesctopReducer';
import getNowPaying from '../reducers/nowPlayingReducer';
import getCommingSoon from '../reducers/commingSoonReducer';
import getFullInfo from '../reducers/oneFilmInfoReducer';
import isLoading from '../reducers/isLoadingReducer';
import getFavorites from '../reducers/favoritesReducer';
import getPopular from '../reducers/popularReducer';
import searchValue from '../reducers/searchReducer';
import searchResult from '../reducers/serchResultReducer';

const rootReducer = combineReducers({
    showMenu,
    showChat,
    logShowMobile,
    logShowDesctop,
    regShowMobile,
    regShowDesctop,
    getNowPaying,
    getCommingSoon,
    getFullInfo,
    isLoading,
    getFavorites,
    getPopular,
    searchValue,
    searchResult,

});

export default rootReducer;