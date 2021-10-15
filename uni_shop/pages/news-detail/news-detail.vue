<template>
	<view class="news_detail">
		<text class="title">{{news.title||"正在加载"}}</text>
		<view class="info">
			<text>发表时间：{{news.add_time||""}}</text>
			<text>浏览次数：{{news.click||""}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="news.zhaiyao||'<p>正在加载</p>'"></rich-text>
		</view>
	</view>
</template>

<script>
import {reqNewsDetail} from "../../utils/api.js"
export default {
	data() {
		return {
			id:0,
			news:{},
		}
	},
	methods: {
		async getNewsDetail(id){
			const res = await reqNewsDetail(id);
			this.news = res.data;
			console.log(this.news)
		}
	},
	onLoad(options) {
		this.id = options.id;
		this.getNewsDetail(this.id)
	}
}
</script>

<style lang="scss">
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.title{
		text-align: center;
		width: 710rpx;
		display: block;
		margin: 20rpx 0;
	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
