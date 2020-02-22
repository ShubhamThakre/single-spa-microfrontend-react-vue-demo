import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import Main from './components/main.component.vue'



// function domElementGetter(){
// 	return document.getElementById('vue')
// }


const intialVueSetup = singleSpaVue({
	Vue,
	appOptions: {
		el:'#vue',
		render: com => com(Main)
	}
}); 

export const bootstrap = [
	intialVueSetup.bootstrap
]

export const mount = [
	intialVueSetup.mount
]

export const unmount = [
	intialVueSetup.unmount
]