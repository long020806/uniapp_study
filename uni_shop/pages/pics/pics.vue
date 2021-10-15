<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view v-for="cate in cates" :key="cate._id" @click="selectCate(cate._id)" :class="selectId===cate._id?'active':''">{{cate.name}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="">
			<view class="item" v-for="(item,index) in secondData" :key="item._id">
				<image @click="previewImg(item.img||'http://localhost:5000/upload/image-1634179011878.jpg')" src="http://localhost:5000/upload/image-1634179011878.jpg" mode=""></image>
				<text>{{item.name}}</text>
			</view>
			<view :v-show="haveData">暂无数据</view>
		</scroll-view>
	</view>
</template>

<script>
import {reqPicsList} from "../../utils/api.js"
export default {
	data() {
		return {
			cates:[],
			selectId:"",
			secondData:[],
			havaData:true,
		}
	},
	methods: {
		async getPicsCate(id=0){
			const res = await reqPicsList(id);
			console.log(res)
			this.cates = res.data;
			this.selectCate(this.cates[0]._id)
		},
		async selectCate(id){
			this.selectId = id;
			const res = await reqPicsList(id);
			console.log(res)
			this.secondData = res.data;
			if(this.secondData.length===0) this.havaData=true;
			else this.havaData = false;
		},
		previewImg(current){
			const urls = this.secondData.map(item=>item.img||"http://localhost:5000/upload/image-1634179011878.jpg");
			uni.previewImage({
				urls,
				current
			})
		}
	},
	onLoad() {
		this.getPicsCate();
	}
}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics{
	height: 100%;
	display: flex;
	.left{
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #EEEEEE;
		view{
			height: 120rpx;
			line-height: 120rpx;
			color:#333333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #EEEEEE;
			&.active{
				background-color: $shop-color;
				color: #FFFFFF;
			}
		}
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		.item{
				
			image{
				width: 520rpx;
				height: 520rpx;
				border-radius: 5rpx;
			}
			text{
				font-size: 30rpx;
				line-height: 60rpx;
				word-wrap: break-word;
			}
		}
	}
}
</style>
