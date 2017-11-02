// import {createStore} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';

// 扩展reducer actions可进行异步操作
const store = createStore(reducer,applyMiddleware(thunk))

export default store
