import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://youtube.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Youtube'
// }
/*const anotherElement = (
  <a href="https://youtube.com" target='_blank'>Visit Youtube</a>
)
  const anotherUser = "hello"

const reactElement = React.createElement(
    'a',
    {href: 'https://youtube.com',target: '_blank' },
    'click me to visit Youtube',
    anotherElement
)
    ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
*/



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
