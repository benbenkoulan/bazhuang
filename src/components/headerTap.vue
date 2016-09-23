<template>
<div @click="open" class="header-tap" :class="classes">
	<span class="header-tap-title">{{prop.title}}</span>
	<span class="header-tap-state" :class="openClass">∨</span>
</div>
</template>
<style>
.header-cel1{width: 10%;}
.header-cel2{width: 20%;}
.header-cel3{width: 30%;}
.header-cel4{width: 40%;}
.header-cel5{width: 50%;}
.header-cel6{width: 60%;}
.header-cel7{width: 70%;}
.header-cel8{width: 80%;}
.header-cel9{width: 90%;}
.header-cel10{width: 100%;}
.header-center-tap{border-right: 1px solid #f0f0f0;border-left: 1px solid #f0f0f0;}
.header-tap{
	box-sizing: border-box!important;border-top: 1px solid #f0f0f0;border-bottom: 1px solid #f0f0f0;
	display: inline-block!important;height:3rem;line-height: 3rem;font-size: 1rem;
}
.header-tap-title{font-weight: bold;}
.header-tap-state{font-size: 0.6rem;display:inline-block;vertical-align:top;}
.header-tap-open{transform: rotate(180deg);}
</style>
<script>
export default {
	data(){
		return {
			openClass:{
				'header-tap-open':false
			}
		}
	},
	props:{
		prop:{
			type:Object,
			default:function(){
				return {type:2};
			}
		},
		classes:{
			type:String,
			default:''
		}
	},
	events:{
		setSelected:function(args){
			if(this.prop['id'] == args[2]){
				this.prop['value'] = args[0];
				this.prop['title'] = args[1];
				this.$dispatch('request');
			}
		}
	},
	methods:{
		open:function(event){
			this.openClass['header-tap-open'] = !this.openClass['header-tap-open'];
			this.$dispatch('notify',1,this.prop['id']);
		}
	}
}
</script>