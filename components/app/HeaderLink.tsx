import React from 'react'
import Link from 'next/link'
import { FC } from 'react';

interface HeaderLinkProps {
  page: string;
}

const headerStyle = {
    width: '100%', 
    height: '62px', 
    backgroundColor: 'white',
};

const headerStylePage = {
    width: '100%', 
    height: '62px', 
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

const HeaderLink:FC<HeaderLinkProps>  = (props) => {
    return (
        <div style={props.page === 'page' ? headerStylePage : headerStyle}>
            <div style={headerContent} className="headerContent">
                {/* <Link href="/" className="leftHeader topHeader">トップ</Link> */}
                <a href="/">トップ</a>
                <Link href="https://twitter.com/aisansansansan" className="rightHeader twitterHeader" style={rightHeader} target="_blank" rel="noopener noreferrer">Twitter</Link>
                <a href="https://github.com/afuzisan" className="rightHeader githubHeader" target="_blank" rel="noopener noreferrer">GitHub</a>
                <Link href="https://www.youtube.com/channel/UCOKUn_HxQQTfvhNBBtB404w" className="rightHeader youtubeHeader" target="_blank" rel="noopener noreferrer">Youtube</Link>
            </div>
        </div>
    )
}

export default HeaderLink