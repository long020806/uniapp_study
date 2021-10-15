<template>
	<view>
		<view class="news_item" @click="navagitarDetail(item.id)" v-for="item in newslist" :key="item.id" >
			<image :src="item.imgUrl" class="newsImg" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text class="add_time">发表时间:{{item.add_time}}</text>
					<text class="click">浏览次数:{{item.click}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "news-item",
		props: {
			newslist: Array,
		},
		// filters:{
		// 	formatDate(date){
		// 		return date; 
		// 	}
		// },
		data() {
			return {

			};
		},
		methods:{
			navagitarDetail(id){
				this.$emit("item-click",id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		border-bottom: 2px solid $shop-color;
		padding: 10rpx 20rpx;

		.newsImg {
			height: 150rpx;
			min-width: 200rpx;
			max-width: 200rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 30rpx;

			}

			.info {
				font-size: 24rpx;

				.click {
					margin-left: 30rpx;
				}
			}

		}
	}
</style>
