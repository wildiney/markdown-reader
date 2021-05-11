import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';

function MarkdownForm() {
  const [filePath, setFilePath] = useState();

  useEffect(() => {
    ipcRenderer.send('file:open', { filePath });
  }, [filePath]);

  //   const fileHandler = (e) => {
  //     // setFile(e.target.files[0].path);
  //     const { filePath } = e.target.files[0].path;
  //     console.log(filePath);
  //     ipcRenderer.send('file:open', { filePath });
  //   };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => setFilePath(e.target.files[0].path)}
      />
    </div>
  );
}

export default MarkdownForm;
