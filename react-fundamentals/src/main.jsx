// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App></App>
//   </StrictMode>,
// )

const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);

rootDom.render(
  //copilot
  // <div>
  //   <h1>React Fundamentals</h1>
  //   <p>Welcome to the React Fundamentals course!</p>
  //   <p>Let's get started with the basics of React.</p>
  //   <p>We will cover components, state, props, and more.</p>
  //   <p>Stay tuned for more updates!</p>
  // </div>,

  <header>
    <img src="/vite.svg" alt="vite image" />
  </header>
)
