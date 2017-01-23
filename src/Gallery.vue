<template>

	<div class="figure" v-bind:style="{left: arrange.pos.left+'px',
		top: arrange.pos.top+'px', transform: 'rotate('+arrange.rotate+'deg)'
	}"
	>
		<p>{{ arrange.isInverse }}</p>
		<img :src="'src/images/' + item.fileName">
		<div class="f_caption">
			<h2 class="img-title">{{ item.title }}</h2>
			<div class="img-back" @click="handleClick(e)">
				<p>{{ item.desc }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import 'babel-polyfill';
import Vue from 'vue'; 

const center = {left: 0, right: 0};
const hRange = {leftx: [0,0], rightx: [0,0], y:[0,0]};//水平方向取值范围
const vRange = {x:[0,0], topY:[0,0]};//垂直方向取值范围



export default {
	name: 'figure',
	props: {
		item: 'item',
		arrange: {}
	},
	methods:{
		inverse(){
			return () => {
				arrange.isInverse = !arrange.isInverse
			}
		},

		handleClick(e){
			//反转和居中图片
			if(arrange.isCenter){
				this.inverse()
			}else{
				this.center()
			}
			e.stopPropagation();
			e.preventDefault();
		}
	}
} 


</script>


<style lang="stylus">
.figure
	width 320px
	height 360px
	margin 0
	padding 40px
	box-sizing border-box
	background-color #fff
	position relative
	cursor pointer
	trandform-origin 0 50% 0
	transform-style preserved-3d
	transition transform .6s ease-in-out, left .6s ease-in-out, top .6s ease-in-out
	.f_caption
		text-align center
		.img-title
			margin 20px 0 0 0
			color #a7a0a2
			font-size 16px
</style>