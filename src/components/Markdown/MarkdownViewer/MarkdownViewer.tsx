import React from 'react';
import ReactMarkdown from 'react-markdown';

// import classes from './MarkdownViewer.module.css';

type MarkdownViewerProps = {
  content: string;
  baseFont: string;
};

export default function MarkdownViewer({
  content,
  baseFont,
}: MarkdownViewerProps) {
  const mkViewer = {
    fontSize: baseFont,
  };

  return (
    <div style={mkViewer}>
      <ReactMarkdown linkTarget="_blank">{content}</ReactMarkdown>
    </div>
  );
}
