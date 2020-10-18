import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = (props) => {
  return (
    <div style={{display: "flex", justifyContent:"center", marginTop:"32vh", marginBottom:"32vh"}}><CircularProgress color="secondary" />
    {props.children}
    </div>
  )
}

export default Loading
