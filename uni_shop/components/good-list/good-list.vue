<template>
	<view class="goods_list">
		<view class="goods_item" v-for="good in goods" :key="good._id" @click="navigator(good._id)">
			<image :src="good.imgs[0]?(prefix+good.imgs[0]):'/static/logo.png'"></image>
			<view class="price">
				<text>￥{{good.price}}</text>
				<text>￥{{good.price}}</text>
			</view>
			<view class="name">
				{{good.name}}
			</view>
		</view>
	</view>
</template>

<script>
	import {IMG_PREFIX} from "../../utils/constant.js"
	export default {
		props:["goods"],
		name:"good-list",
		data() {
			return {
				prefix:IMG_PREFIX,
			};
		},
		methods:{
			navigator(id){
				this.$emit("goods-click",id)
			}
		}
	}
</script>

<style lang="scss">
.goods_list{
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods_item{
		width: 355rpx;
		background-color: #FFFFFF;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		image{
			width: 80%;
			text-align: center;
			margin: 0 auto;
			display: block;
		}
			
		.price{
			color: $shop-color;
			font-size: 36rpx;
			margin: 20rpx 0 5rpx 0 ;
			text:nth-child(2){
				color: #ccc;
				font-size: 28rpx;
				margin-left: 17rpx;
				text-decoration: line-through;
			}
		}
		.name{
			font-size: 28rpx;
			line-height: 50rpx;
			padding-bottom:15rpx ;
			padding-top: 10rpx;
		}
	}
}
</style>
