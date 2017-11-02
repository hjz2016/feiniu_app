import store from './store'

const Dispatcher = require('flux').Dispatcher;
// 初始化
const dispatcher = new Dispatcher()

// 接受dispatch传入的动作
dispatcher.register(function(action){
	store[action.type](action.newVal)
})

export default dispatcher

