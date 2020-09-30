import React from 'react';
import '../assets/styles/File-Row.css'
import FileIcon from '../assets/icons/file_icon.png'

function FileRow({ fileName, fileSize }) {

  return (
    <div className='file-row'>
      <img src={FileIcon} className='logo' alt='folder_logo' />
      <div className='file-name' > {fileName} </div>
      <div className='file-size' > {fileSize} </div>
    </div>
  );
}

export default FileRow;
