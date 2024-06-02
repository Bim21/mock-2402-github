import { Slider } from 'antd'
import React from 'react'

const Slide = () => {
  return (
    <Slider
    
    defaultValue={8}
    tooltip={{
        color: 'orange',
      open: false,
    }}
  />
  )
}

export default Slide
