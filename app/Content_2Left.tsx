import React from 'react'
import Link from 'next/link'
import './content_2Left.css'
const headerStyle = {
    width: '100%', 
    height: '62px', 
    backgroundColor: 'white',
  };

  const rightHeader = {
    marginLeft:'auto'
  };

const headerContent = {
    display: 'flex',
    justifyContent: 'flex-start',
    height:'100%',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: '1120px', 
    flexWrap: 'nowrap' as const,
    gap:'20px', 
    textDecoration:'none',
    paddingLeft:'20px',
    paddingRight:'20px',
}
const Content_2Left = () => {
    return (
        <div style={headerStyle}>
        <div style={headerContent} className="headerContent">
            <Link href="/" className="leftHeader topHeader">トップ</Link>
            <Link href="/" className="rightHeader twitterHeader" style={rightHeader}>Twitter</Link>
            <Link href="/" className="rightHeader githubHeader">GitHub</Link>
            <Link href="/" className="rightHeader youtubeHeader">Youtube</Link>
        </div>
  </div>
    )
}

export default Content_2Left