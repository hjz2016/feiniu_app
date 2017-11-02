import dispatcher from './dispatcher';

const actions = {
	// 分解动作
	// 更改数量
	chgNum(type,newVal){
		// 传入动作
		dispatcher.dispatch({
			type:type,
			newVal:newVal
		})
	}
}

export default actions;