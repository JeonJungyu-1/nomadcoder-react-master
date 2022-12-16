import React from 'react'
import Test from './Test'

export default function Form() {
    const [fo, setFo] = React.useState({a:"0", b:"0", c:"0"})
  return (
    <Test fo/>
  )
}
