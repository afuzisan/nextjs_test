import React from 'react'
const headerStyle = {
    width: '100%', 
    height: '62px', 
    backgroundColor: 'white',

 
  };

const headerContent = {
    display: 'flex',
    justifyContent: 'flex-start',
    height:'100%',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '1120px', 
    flexWrap: 'nowrap' as const,
    gap:'20px', // はい、gapはflexboxに適用されます。
}
const header = () => {
  return (
    <div style={headerStyle}>
        <div style={headerContent}>
            ヘッダー
        </div>
  </div>
  )
}

export default header