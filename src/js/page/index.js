import Vue from 'vue';
import Header from '../../components/header.vue';
import Mask from '../../components/mask.vue';

require('../../css/base/style.css');
new Vue({
	el:'body',
	data:{
		mask:{hide:false,msg:'努力加载中'}
	},
	components:{
		'bazhuangHeader':Header,
		'mask':Mask
	},
	methods:{
		loaded:function(){
			this.mask['hide'] = true;
		}
	}
})