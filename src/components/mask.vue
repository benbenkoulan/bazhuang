<template>
	<div @touchmove="cancelScroll" class="mask" :class="{'none':hide}">
		<div class="bak">
			<img src="../img/loading.gif" alt="loading">
			<p>{{msg}}</p>
		</div>
	</div>
</template>
<style>
	.mask{position: fixed;top:0;left: 0;width: 100%;height: 100%;text-align: center;}
	.bak{display:inline-block;padding:0.8rem;position: relative;top:30%;background: #000000;opacity: 0.6;border-radius: 4px;color:#ffffff;font-weight: bold;min-width:30%;}
	.bak img{width: 30%;}
	.bak p{margin-top:0.5rem;font-size: 0.8rem;}
</style>
<script>
	export default{
		props:{
			hide:{
				type:Boolean,
				default:true
			},
			msg:{
				type:String,
				default:'载入中，请稍候~'
			}
		},
		methods:{
			cancelScroll:function(e){
				e.preventDefault();
			}
		}
	}
</script>