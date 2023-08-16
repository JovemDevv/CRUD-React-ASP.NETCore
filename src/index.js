import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reporWebVitals from './reportWebVitals' // Importe o componente principal do seu aplicativo (você pode nomeá-lo como quiser)

ReactDOM.render(
    <Fragment>
        <App />
    </Fragment>,
 document.getElementById('root')
 )

 reporWebVitals()
