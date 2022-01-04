/*
 *   Copyright (c) 2021 Joe Watson SBF
 *   All rights reserved.
 *   GitHub Profile :  https://github.com/joe-watson-sbf
 */


import React, { Component } from 'react'
import Header from './components/Header/Header'
import Site from './pages/Site'

export default class App extends Component {
	render() {
		return (
			<>
				<Header/>
				<Site/>
			</>
		)
	}
}