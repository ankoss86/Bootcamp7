export const playNowLength =(state)=>state.getNowPaying.length;
export const playNowSort = (state)=>state.getNowPaying.map(el => ({...el, release_date: new Date(el.release_date).getTime()}))
.sort((a, b)=>b.release_date - a.release_date)

//    return state.getNowPaying.sort((a, b)=>a.release_date > b.release_date)
