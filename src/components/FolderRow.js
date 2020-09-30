import React from 'react';
import '../assets/styles/Folder-Row.css'
import FolderIcon from '../assets/icons/folder_icon.png'

function FolderRow({ id, folderName, setCurrentFolder, currentDirectory, setCurrentDirectory }) {
  return (
    <div className='folder-row' onClick={() => ( setCurrentFolder(id), setCurrentDirectory(`${currentDirectory}${folderName}/`) )} >
      <img src={FolderIcon} className='logo' alt='folder_logo' />
      <div className='folder-name'> {folderName} </div>
    </div>
  );
}

export default FolderRow;
