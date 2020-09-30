import React from 'react';
import '../assets/styles/App.css'
import FolderIcon from '../assets/icons/folder_icon.png'

function ParentFolderRow({ rootFolderId, setCurrentFolder, currentDirectory, setCurrentDirectory }) {

  let parentDirectory = currentDirectory.slice(0, -1)
  parentDirectory = parentDirectory.substr(0, parentDirectory.lastIndexOf('/') + 1);

  return (
    <div className='folder-row' onClick={() => ( setCurrentFolder(rootFolderId), setCurrentDirectory( parentDirectory ) ) } >
      <img src={FolderIcon} className='logo' alt='folder_logo' />
      <div className='folder-name'> .. </div>
    </div>
  );
}

export default ParentFolderRow;
