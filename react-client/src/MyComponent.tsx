import React from 'react'

export interface MyComponentProps {
  message: string
}

const MyComponent: React.FC<MyComponentProps> = ({ message }) => {
  return <div>Hello from React! Message: {message}</div>
}

export default MyComponent;