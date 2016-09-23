<template>
	<div class="info_container clearfix">
		<div class="info_cel info_cel_30">净利润</div>
		<div class="info_cel info_cel_70">
			￥{{data.profitValue}}
			<span :class="{'info_reduce':(data.profitType == 2),'info_increase':(data.profitType == 1)}">{{data.profitPercent}}%</span>
		</div>
	</div>
	<div class="info_container clearfix">
		<div class="info_cel info_cel_33">
			<p>客流量</p>
			<p>{{data.customer}}</p>
		</div>
		<div class="info_cel info_cel_33 info_cel_center">
			<p>菜品</p>
			<p>{{data.food}}</p>
		</div>
		<div class="info_cel info_cel_33">
			<p>桌台</p>
			<p>{{data.table}}</p>
		</div>
	</div>
	<div class="info_container clearfix">
		<div class="info_cel info_cel_33">
			<p>明星服务员</p>
			<p>{{data.waiter}}</p>
			<p>￥{{data.waiterNum}}</p>
		</div>
		<div class="info_cel info_cel_66 info_cel_right">
			<p>风险稽查</p>
			<p class="hidden">￥</p>
			<p>{{data.riskState}}</p>
		</div>
	</div>
</template>
<style>
	.info_container{border-bottom: 1px solid #f0f0f0;width: 100%;box-sizing: border-box;text-align: center;}
	.info_cel{float: left;box-sizing: border-box;padding:1rem;font-size: 0.8rem;}
	.info_cel_30{width: 30%;}
	.info_cel_70{width: 70%;font-size: 1.4rem;font-weight: bold;}
	.info_increase{color: green;}
	.info_increase:before{content: '▲';}
	.info_reduce{color: red;}
	.info_reduce:before{content: '▲';transform: rotate(180deg);display: inline-block;}
	.info_cel_70 span{font-size: 0.8rem;}
	.info_cel_33{width: 33.33%;}
	.info_cel_66{width: 66.66%;}
	.info_cel_center{border-right: 1px solid #f0f0f0;border-left: 1px solid #f0f0f0;}
	.info_cel_right{border-left: 1px solid #f0f0f0;}
</style>
<script>
	export default{
		props:{
			data:{
				type:Object,
				default:{}
			}
		}
	}
</script>