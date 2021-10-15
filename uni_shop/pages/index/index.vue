<template>
	<view class="content">
		<!-- <image :src="prefix + img" mode="" :key="img" v-for="img in imgs"></image> -->
		<swiper indicator-dots circular autoplay class="home">
			<swiper-item v-for="img in imgs" :key="img">
				<image :src="prefix+img" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="nav">
			<navigator class="nav_item" v-for="nav in navs" :key="nav.path" :url="nav.path">
				<view :class="nav.icon"></view>
				<text>{{nav.title}}</text>
			</navigator>
			<!-- <view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>我们</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>视频</text>
			</view> -->
		</view>
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goodList :goods="goods" @goodsClick="goGoodsDetail"></goodList>
		</view>
	</view>
</template>

<script>
	import {IMG_PREFIX} from "../../utils/constant.js"
	import {reqImgs,reqGoods} from "../../utils/api.js"
	import goodList from "../../components/good-list/good-list.vue"
	export default {
		components:{goodList},
		data() {
			return {
				title: 'Hello',
				imgs:[],
				prefix:IMG_PREFIX,
				goods:[],
				navs:[{
					path:"/pages/goods/goods",
					icon:"iconfont icon-shangpin",
					title:"超市"
				},{
					path:"/pages/contact/contact",
					icon:"iconfont icon-guanyuwomen",
					title:"我们"
				},{
					path:"/pages/pics/pics",
					icon:"iconfont icon-tupian",
					title:"社区"
				},{
					path:"/pages/videos/videos",
					icon:"iconfont icon-shipin",
					title:"视频"
				}
				],
				pageNum:1,
			}
		},
		onLoad() {
			this.getSwiper();
			this.getGoods(this.pageNum);
			this.pageNum++;
			
		},
		methods: {
			async getSwiper(){
				const res = await reqImgs();
				this.imgs = res.data.list[0].imgs;
				console.log(this.imgs)
				// uni.request({
				// 	url:"http://localhost:5000/api1/manage/product/search?pageNum=1&pageSize=2&productName=123",
				// 	success: (res) => {
				// 		if(res.data.status===0){
				// 			this.imgs = res.data.data.list[0].imgs; 
				// 			console.log(this.imgs)							
				// 		}else{
				// 			uni.showToast({
				// 				title:"请求轮播图失败"
				// 			})
				// 		}
				// 	}
				// })
			},
			async getGoods(){
				const res = await reqGoods(this.pageNum);
				this.goods = [...this.goods,...res.data.list];
				console.log(this.goods)
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:"/pages/goods-detail/goods-detail?id="+id,
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		swiper{
			width: 750rpx;
			height: 380rpx;
				
			image{
				height: 100%;
				width: 100%;
			}
		}
		.nav{
			display: flex;
			.nav_item{
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					color: #FFFFFF;
					font-size: 50rpx;
					margin: 10px auto;
					line-height: 120rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
			
		.hot_goods{
			background-color: #EEEEEE;
			overflow: hidden;
			margin-top: 50rpx;
			.tit{
				text-align: center;
				line-height: 100rpx;
				height: 100rpx;
				background-color: #FFFFFF;
				color: $shop-color;
				letter-spacing: 40rpx;
				margin: 7rpx 0;
			}
			
		}
	}
</style>
