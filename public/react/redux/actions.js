
import axios from 'axios';
import jsonp from 'jsonp';
import store from './store';


const actionCreator = {
	chgKeyWord(newVal){
		store.dispatch({
			type:'keyword',
			newVal:newVal
		})
	},
	chgKeyWordSync(newVal){
		return {
			type:'keyword',
			newVal:newVal
		}
	},
	testAsync(){
		// console.log(1)
		return (dispatch)=>{
			setTimeout(()=>{
				console.log(3)
				dispatch({
					type:'keyword',
					newVal:1
				})
			},1000)
		}
	},
	// 已经有用户信息时获取
	getUserInfo(){
		return{
			type:'getuser'
		}
	},
	// ajax获取用户信息
	ajaxGetUser(usn,pwd){
		return (dispatch)=>{
			axios.get('http://datainfo.duapp.com/shopdata/userinfo.php',{
				params:{
					status:"login",
					userID:usn,
					password:pwd
				}
			})
			.then(function(res){
				// console.log(res)
				switch(res.data){
					case 0:
						alert('用户名不存在');break;
					case 2:
						alert('用户名密码不符');break;
					default:
						dispatch({
							type:'setuser',
							params:res.data
						})
				}
				
			})
			.catch(function(err){
				console.log(err)
			})
		} 
	}
}

export default actionCreator
