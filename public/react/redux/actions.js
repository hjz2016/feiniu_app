
import axios from 'axios'
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
		console.log(1)
		return (dispatch)=>{
			setTimeout(()=>{
				console.log(3)
				dispatch({
					type:'keyword',
					newVal:1
				})
			},1000)
		}
	}
}

export default actionCreator
