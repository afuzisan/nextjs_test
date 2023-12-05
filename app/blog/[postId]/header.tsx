import React from 'react'
import Link from 'next/link'
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
            <Link href="/">トップ</Link>
            <Link href="/">Twitter</Link>
            <Link href="/">GitHub</Link>
            <Link href="/">Youtube</Link>
        </div>
  </div>
  )
}

export default header