import {PAGE_SIZE} from "./constant.js"
import {data,goods} from "./fake_object.js"
const baseUrl = "http://localhost:5000/api1"

export  const myRequest = ({url,method,data})=>{
	let resolve,reject;
	let promise = new Promise((r,s)=>{
		resolve=r;
		reject=s;
	})
	uni.request({
		url:url,
		method:method||"GET",
		data:data||{},
		success: (res) => {
			if(res.data.status!==0){
				uni.showToast({
					title:"请求数据失败"
				})
			}
			resolve(res.data)
			
		},
		fail: (err) => {
			uni.showToast({
				title:"请求接口失败"
			})
			reject(err);
		}
	})
	return promise;
}
export const reqImgs = ()=>myRequest({
	url:baseUrl+"/manage/product/search?pageNum=1&pageSize=2&productName=123",method:"GET",
	method:"GET",
})
export const reqGoods =  (pageNum)=>myRequest({
	url:baseUrl+`/manage/product/list?pageNum=${pageNum}&pageSize=${PAGE_SIZE}`
})
export const reqPicsList =  (id)=>myRequest({
	url:baseUrl+`/manage/category/list?parentId=${id}`
})

export const reqNewsList = ()=>{
	let r,s;
	let promise = new Promise((_r,_s)=>{
		r=_r;
		s=_s;
	})

	setTimeout(()=>{
		r(data);
	},1000)
	return promise;
}
export const reqNewsDetail = (id)=>{
	let r,s;
	let promise = new Promise((_r,_s)=>{
		r=_r;
		s=_s;
	})
	setTimeout(()=>{
		const obj = data.data.find(item=>item.id===id);
		r({status:0,data:obj})
	},1000)
	return promise;
}