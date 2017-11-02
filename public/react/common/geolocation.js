export default ()=>{
	var map, geolocation;
    //加载地图，调用浏览器定位服务
    map = new AMap.Map('container');
    map.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.CitySearch({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 30000,          //超过10秒后停止定位，默认：无穷大
            buttonPosition:'RB'
        });       
        geolocation.getCurrentPosition();
        
        AMap.event.addListener(geolocation, 'complete', (data)=>{
        	let longitude = data.position.getLng()
			let latitude = data.position.getLat()			
			console.log(longitude,latitude)
			
			var lnglatXY = [longitude, latitude]; //已知点坐标		    
	        var geocoder = new AMap.Geocoder({
	            radius: 1000,
	            extensions: "all"
	        });        
	        geocoder.getAddress(lnglatXY, function(status, result) {
	            if (status === 'complete' && result.info === 'OK') {
	                 var data = result.regeocode; //返回地址描述
	                 var address = data.aois[0].name
		        	console.log(result)
	            }
	        });        
        });
    });
}
 	


