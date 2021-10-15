<template>
	<view>
		<navigator url="/pages/list/list?pn=10">跳转至list</navigator>
		<navigator url="/pages/index/index" open-type="switchTab">跳转至index</navigator>
		<!-- redirect 会没有返回键 相当于$router.replace 先卸载当前页面然后再打开 -->
		<navigator url="/pages/index/index" open-type="redirect" >跳转至index</navigator>
		<button type="primary" @click="goList">跳转list</button>
		<button type="primary" @click="goIndex">跳转index</button>
		<button type="primary" @click="redirectList">重定向list</button>
	</view>
</template>

<script>
	export default {
		data(){
			
		},
		methods:{
			goList(){
				// 保留当前页面跳转非tabbar
				uni.navigateTo({
					url:"/pages/list/list"
				})
			},
			goIndex(){
				//跳转tabbar并关闭其他所有tabbar页面
				uni.switchTab({
					url:"/pages/index/index"
				})
			},redirectList(){
				// 卸载当前页面跳转非tabbar
				uni.redirectTo({
					url:"/pages/list/list"
				})
			}
		}
	}
</script>

<style>
</style>
