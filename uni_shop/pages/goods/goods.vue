<template>
	<view class="content">
		<goodList :goods="goods" @goodsClick="goGoodsDetail"></goodList>
		<view class="isOver" v-show="isOver">-----没有更多商品了-----</view>
	</view>
</template>

<script>
	import goodList from "../../components/good-list/good-list.vue"
	import {reqGoods} from "../../utils/api.js"
	export default {
		components:{goodList},
		data() {
			return {
				pageNum:1,
				goods:[],
				isOver:false,
				total:0,
			}
		},
		onLoad() {
			this.getGoods();
		},
		methods: {
			async getGoods(){
				const res = await reqGoods(this.pageNum);
				this.goods = [...this.goods,...res.data.list];
				this.total = res.data.total;
				if(this.goods.length>=this.total) this.isOver=true
				else this.isOver = false;
			},goGoodsDetail(id){
				uni.navigateTo({
					url:"/pages/goods-detail/goods-detail?id="+id,
				})
			}
		},
		onReachBottom(){
			if(this.isOver) return ;
			this.pageNum++;
			this.getGoods();
		},
		onPullDownRefresh() {
			this.pageNum = 1;
			this.goods = [];
			this.isOver = false;
			setTimeout(()=>{
				this.getGoods()
				uni.stopPullDownRefresh();
			},1000);
		}
	}
</script>

<style lang="scss">
	.content{
		background-color: #eee;
		.isOver{
			text-align: center;
			height: 50rpx;
			line-height: 50rpx;
			font-size: 28rpx;
		}
	}
	
</style>
