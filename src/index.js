import React from 'react'
import { render } from 'react-dom'

if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'development') {
	// require('react-dom/devtools')
}

import 'flexboxgrid'
import 'normalize.css'

let root

function init() {
	let App = require('./App').default
	render(<App />, document.getElementById('app'))
}

init()

// in development, set up HMR:
if (module.hot) {
	module.hot.accept()
	module.hot.accept(root, () => requestAnimationFrame(init) )
}

