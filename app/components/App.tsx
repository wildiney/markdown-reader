import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import MarkdownViewer from './Markdown/MarkdownViewer/MarkdownViewer';
// import MarkdownForm from './Markdown/MarkdownForm/MarkdownForm';
import Toolbar from './Toolbar/Toolbar';

import classes from './App.module.css';

export default function App() {
  const [text, setText] = useState();
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    ipcRenderer.send('readFile');

    ipcRenderer.on('readFile:complete', (e, content) => {
      setText(content);
    });
  }, []);

  const increaseFontHandler = () => {
    setFontSize(fontSize + 10);
  };

  const decreaseFontHandler = () => {
    setFontSize(fontSize - 10);
  };

  return (
    <>
      <Toolbar
        increaseFontSize={increaseFontHandler}
        decreaseFontSize={decreaseFontHandler}
      />
      <div className={classes.container}>
        <div className={classes.markdown_viewer}>
          {text !== undefined ? (
            <MarkdownViewer content={text} baseFont={`${fontSize}%`} />
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  );
}
