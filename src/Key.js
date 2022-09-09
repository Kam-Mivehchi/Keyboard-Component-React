import React from 'react'
import { StyledKey } from './styled-components'




const Key = ({ width, value, current }) => {

   return (
      <StyledKey style={{
         gridColumn: `span ${width}`,
         boxShadow: `${current === true ? "0 0 20px #FEFBF6 inset" : "none"}`,
         transform: `scale(${current === true ? 1.2 : 1})`
      }}> {value}</StyledKey >

   )
}

export default Key