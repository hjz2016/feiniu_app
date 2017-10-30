import 'whatwg-fetch'
import 'es6-promise'

const ajax_module = {
	get(url){
		return fetch(url,{
			credentials:'include',
			headers:{
				'Accept':'application/json,text/plain'
			}
		})
	}
}

export default ajax_module;