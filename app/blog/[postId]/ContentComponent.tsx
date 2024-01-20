// ContentComponent.tsx
import React from 'react';
import parse, { DOMNode, Element } from 'html-react-parser';
import InteractiveImage from './InteractiveImage.client';

type Props = {
  content: string;
};

const options = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.type === 'tag' && domNode.name === 'img' && domNode.attribs) {
      return <InteractiveImage src={domNode.attribs.src} alt={domNode.attribs.alt} />;
    }
  }
};

export default function ContentComponent({ content }: Props) {
  return <div id='contents2'>{parse(content || '', options)}</div>;
}