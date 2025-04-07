import React from 'react'
import ReactDOM from 'react-dom/client'
import { componentRegistry } from './components'

document.querySelectorAll('[data-react-component]').forEach((mountPoint) => {
  const componentName = mountPoint.getAttribute('data-react-component')!
  const propsElementId = mountPoint.getAttribute('data-props-id')!
  const propsScript = document.getElementById(propsElementId)

  if (propsScript && componentRegistry[componentName]) {
    const decodedProps = decodeURIComponent((propsScript.textContent || '{}').replace(/\\u[\dA-F]{4}/gi, match =>
      String.fromCharCode(parseInt(match.replace(/\\u/, ''), 16))
    ));
    console.log(decodedProps);
    const props = JSON.parse(decodedProps || '{}')
    const Component = componentRegistry[componentName]

    ReactDOM.createRoot(mountPoint).render(
      <React.StrictMode>
        <Component {...props} />
      </React.StrictMode>
    )
  } else {
    console.warn(`Component "${componentName}" not found in registry.`)
  }
})