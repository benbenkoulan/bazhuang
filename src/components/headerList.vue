<template>
	<ul class="header-list" :class="classObject">
		<li @click="select($index,item.name)" v-for="item in items" :class="{'header-list-active':($index == activeIndex)}">{{item.name}}</li>
	</ul>
</template>
<style>
.header-list{position: absolute!important;top:3rem;z-index:999;left: 0;width: 100%;font-size: 1rem;background: #ffffff;}
.header-list li{padding: 0.8rem;border-bottom: 1px solid #f0f0f0;}
.header-list-active:before{
	position:absolute;
	left:1rem;
	content:'√';
}
</style>
<script>
	export default {
		data(){
			return {
				classObject:{
					'none':true
				}
			}
		},
		methods:{
			select:function(index,name){
				this.activeIndex = index;
				this.classObject['none'] = !this.classObject['none'];
				this.$dispatch('notify',2,index,name,this.id);
			}
		},
		props:['items','id','activeIndex'],
		events:{
			openList:function(id){
				if(this.id == id){
					this.classObject['none'] = !this.classObject['none'];
				} else {
					this.classObject['none'] = true;
				}
			}
		}
	}
</script>