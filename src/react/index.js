import React from 'react'
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react'
import Home from './components/home.component'



function domElementGetter(){
	// This is where single-spa will mount our application  
	return document.getElementById('react')
}

const intialReactSetup = SingleSpaReact({
	React,
	ReactDOM,
	rootComponent: Home,
	domElementGetter
})

export const bootstrap = [
	intialReactSetup.bootstrap,
]

export const mount = [
	intialReactSetup.mount
]

export const unmount = [
	intialReactSetup.unmount
]