<template>
	<view>
		<button type="primary" @click="getList(pn)">发送请求</button>
		<button type="primary" @click="setStorage">设置存储</button>
		<button type="primary" @click="getStorage">获取存储</button>
		<button type="primary" @click="removeStorage">移除存储</button>
		<button type="primary" @click="chooseImg">上传图片</button>
		<view v-for="item,index in list" :key="item.stuId">
			{{item.stuName}}
		</view>
		<image v-for="img in imgArr" :key="img" src="img" mode="" @click="previewImg(img)"></image>
		<test content="list-props" :test="1234"></test>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	export default {
		components:{
			test:test,
		},
		data(){
			return {
				list:[{stuName:"123",stuId:0}],
				pn:1,	
				imgArr:[],
			}
		},onLoad(options){
			console.log(options)
		}
		,
		methods:{
			pullDown(){
				uni.startPullDownRefresh();
			},
			getList(pn){
				uni.request({
					url:`http://localhost:8081/ssm.crud/stus?pn=${this.pn}`,
					success: (data) => {
						const list =  data.data.extend.pageInfo.list;
						console.log(list);
						this.list = [...list,...this.list];
						this.pn++;
						
					}
				})
			},
			setStorage(){
				// uni.setStorage({
				// 	key:"pn",
				// 	data:this.pn,
				// 	success:()=> {
				// 		console.log("storage success")
				// 	}
				// })
				uni.setStorageSync("pn",this.pn);
			},
			getStorage(){
				// uni.getStorage({
				// 	key:"pn",
				// 	success:(res)=>{
				// 		console.log(res,this.pn);
				// 	}
				// })
				const res = uni.getStorageSync("pn");
				console.log(res)
				
			},
			removeStorage(){
				// uni.removeStorage({
				// 	key:"pn",
				// 	success: () => {
				// 		console.log("remove ")
				// 	}
				// })
				uni.removeStorageSync("pn");
			},chooseImg(){
				uni.chooseImage({
					count:5,
					success: (res) => {
						this.imgArr = res.tempFilePaths;
					}
				})
			},
			previewImg(img){
				uni.previewImage({
					current:img,
					urls:this.imgArr,
					loop:true,
					indicator:"number"
				})
			}
		}
	}
</script>

<style>
</style>
