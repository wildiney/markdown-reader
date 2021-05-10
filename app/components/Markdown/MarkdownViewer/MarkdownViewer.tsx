import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

// import classes from './MarkdownViewer.module.css';

export default function MarkdownViewer({ content, baseFont }) {
  const mkViewer = {
    fontSize: baseFont,
  };

  return (
    <div style={mkViewer}>
      <ReactMarkdown escapeHtml={false} linkTarget="_blank" source={content} />
    </div>
  );
}

type MarkdownViewer = {
  content: string;
};

MarkdownViewer.propTypes = {
  content: PropTypes.string.isRequired,
  baseFont: PropTypes.string.isRequired,
};
