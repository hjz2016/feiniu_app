
//第一个参数就是默认的store的state
let _state = {
	keyword:'牛奶',
	user:{
		code:'',userID:'',password:'', userimg_url:'', sex:''
	}
}

//注意，reducer必须return出state，这样store才能用到state
const reducer = (state=_state,action)=>{
	switch(action.type){
		case 'keyword':
			state.keyword = action.newVal
			return state;break;
		case 'getuser':
			return state.user;break;
		case 'setuser':
			state.user = action.params;
			state.user.nickname = '用户'+state.user.code
			// console.log(state.user.data)
			localStorage['user'] = JSON.stringify(state.user);
			return state.user;break;
		case 'regiuser':
			return state.user;break;
		default :
			return state;break;
	}
	
	
}

export default reducer