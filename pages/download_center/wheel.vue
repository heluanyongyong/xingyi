<template>
	<div>
		<no-ssr>
		    	<swiper :options="swiperOption" style="position:fixed;width:100%;height:100%;">
		    		<swiper-slide class="banner1">
		    		</swiper-slide>
		    		<swiper-slide class="banner2">
		    		</swiper-slide>
		    		<swiper-slide class="banner3">
		    		</swiper-slide>
		    		<div class="swiper-pagination" slot="pagination"></div>
		    	</swiper>
		</no-ssr>
	</div>
</template>

<script>
export default {
	layout:'download',
	data() {
		return {
			swiperOption: {
				direction: 'vertical',
				slidesPerView: 1,
				spaceBetween: 30,
				mousewheel: true,
				loop:true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				}
			}
		}
	}
}
</script>
<style scoped>
.banner1{
	width:100%;
	height:100%;
	background-image:url(/wheel/banner1.png);
}
.banner2{
	width:100%;
	height:100%;
	background-image:url(/wheel/banner2.png);
}
.banner3{
	width:100%;
	height:100%;
	background:#1D1D1D;
}
</style>