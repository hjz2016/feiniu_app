
//第一个参数就是默认的store的state
let _state = {
	keyword:'牛奶'
}

//注意，reducer必须return出state，这样store才能用到state
const reducer = (state=_state,action)=>{
	switch(action.type){
		case 'keyword':
			state.keyword = action.newVal
			return state;break;
		default :
			return state;break;
	}
	
	
}

export default reducer