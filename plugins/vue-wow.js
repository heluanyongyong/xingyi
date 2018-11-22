import Vue from 'vue'
import {WOW} from 'wowjs'
import 'animate.css'
Vue.prototype.$wowinit = () => {
	new WOW({
		live:false
	}).init()
}
Vue.use(new WOW({
	live:false
}).init())