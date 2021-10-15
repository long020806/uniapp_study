<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg" mode=""></image>
		<view class="info">
			<view class="">联系电话：<text @click="phone">19983613640</text>（点击拨打）</view>
			<view class="">联系地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx,xxxxxxxxxxxxxxxx</view>
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:120.363172,
				latitude:30.312212,
				scale:13,
				markers:[{
					longitude:120.363172,
					latitude:30.312212,
					iconPath:"../../static/logo.png",
					width:30,
					height:30
				}]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'19983613640'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	position: inherit;
	.img{
		width: 750rpx;
		height: 320rpx;
	}
	.info{
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		word-wrap: break-word;
	
		view{
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map{
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
