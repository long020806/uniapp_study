<template>
	<view>
		{{content}}
	</view>
</template>

<script>
	export default {
		props:{
			content:String
		},
		onReady() {
			
		},
		data(){
			return {
				
			}
		},
		mounted(){
			console.log(this.$props)
			console.log(this.$listeners)
			console.log(this.$attrs)
		}
	}
</script>

<style>
</style>
