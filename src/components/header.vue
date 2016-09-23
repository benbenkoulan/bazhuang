<template>
	<div id="headerContainer">
		<header-tap v-for="tap in taps" :classes="tap.classes" :prop="tap.prop"></header-tap>
		<header-list v-for="list in lists" :items="list.items" :id="list.id" :active-index="list.activeIndex"></header-list>
	</div>
</template>
<style>
#headerContainer{font-size: 0;position: relative;background: #ffffff;text-align: center;color: #000000;}
</style>
<script>
import headerTap from './headerTap.vue';
import headerList from './headerList.vue';

export default {
	data(){
		return {
			taps:[
				{prop:{id:'week',title:'周一',value:0},classes:'header-cel2'},
				{prop:{id:'store',title:'河南',value:0},classes:'header-cel6 header-center-tap'},
				{prop:{id:'date',title:'日',value:0},classes:'header-cel2'}
			],
			lists:[
				{id:'week',activeIndex:0,items:[{name:'周一',value:'1'},
				{name:'周二',value:'2'},
				{name:'周三',value:'3'},
				{name:'周四',value:'4'},
				{name:'周五',value:'5'},
				{name:'周六',value:'6'},
				{name:'周日',value:'7'}]},
				{id:'store',activeIndex:0,items:[{name:'河南',value:'1'},
				{name:'河北',value:'2'},
				{name:'山东',value:'3'},
				{name:'山西',value:'4'},
				{name:'湖南',value:'5'},
				{name:'湖北',value:'6'}]},
				{id:'date',activeIndex:0,items:[{name:'日',value:'1'},
				{name:'周',value:'2'},
				{name:'月',value:'3'},
				{name:'年',value:'4'}]}
			]
		}
	},
	events:{
		notify:function(){
			var args = Array.prototype.slice.call(arguments);
			var bargs = args.slice(1),
				type = args[0];
			if(type == 1){
				this.$broadcast('openList',bargs);
			} else if(type == 2){
				this.$dispatch('getIndexData',bargs);
				this.$broadcast('setSelected',bargs);
			}
		},
		request:function(){
			const tap0 = this.taps[0]['prop'];
			const tap1 = this.taps[1]['prop'];
			const tap2 = this.taps[2]['prop'];

			var requestData = {};
			requestData[tap0.id] = tap0.value,
			requestData[tap1.id] = tap1.value,
			requestData[tap2.id] = tap2.value;
			this.$dispatch('render',requestData);
		}
	},
	methods:{
	},
	components:{headerTap,headerList}
}
</script>