import Vue from 'vue';
import Header from '../../../components/header.vue';
import Mask from '../../../components/mask.vue';
import Info from '../../../components/info.vue';


require('../../../css/base/style.css');
var dayJSON = require('./../../../json/day.json');
new Vue({
	el:'body',
	data:{
		mask:{hide:true,msg:'努力加载中'},
		infoData:dayJSON,
		dataCache:{
			day:dayJSON
		}
	},
	components:{
		'bazhuangHeader':Header,
		'mask':Mask,
		'info':Info
	},
	events:{
		render:function(requestData){
			this.mask.hide = false;
			var monthJSON = this.dataCache['month'];
			if(!monthJSON){
				monthJSON = require('./../../../json/day.json');
				this.dataCache['month'] = monthJSON;
			}
			this.infoData = monthJSON;
			this.mask.hide = true;
			console.log(requestData);
		}
	},
	methods:{
		loaded:function(){
			this.mask['hide'] = true;
		}
	}
})