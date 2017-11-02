// 事件触发器
const EventEmitter = require('events').EventEmitter;

// store 保证纯净
const store = Object.assign({},EventEmitter.prototype,{
	num:1,
	chgNum(newVal){
		// 被dispatcher调用
		// 更新store.num
		this.num = newVal;
		// 触发事件
		this.emit('numChange')
	},
	// 通知V层store变化用函数
	notifyV(cb){
		var that = this;
		// 当store变化后 调用回调
		this.on('numChange',function(){
			cb(that.num)
		})
	}

})

export default store