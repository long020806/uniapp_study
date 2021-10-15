<template>
	<view class="news">
		<newsItem :newslist="newslist" @itemClick="goDetail"></newsItem>
	</view>
</template>

<script>
	import {reqNewsList} from "../../utils/api.js"
	import newsItem from"../../components/news-item/news-item.vue";
	export default {
		components:{newsItem},
		data() {
			return {
				newslist:[],
			}
		},
		methods: {
			async getNews(){
				const res = await reqNewsList();
				this.newslist = res.data;
			},
			goDetail(id){
				uni.navigateTo({
					url:"/pages/news-detail/news-detail?id="+id,
				})
			}
		},
		onLoad() {
			this.getNews();
		}
	}
</script>

<style >

</style>
