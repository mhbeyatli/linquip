import React, { useState } from 'react';
import Data from '../static/data'
import '../assets/styles/App.css'
import FolderRow from '../components/FolderRow';
import FileRow from '../components/FileRow';
import ParentRow from '../components/ParentRow';

function App() {
  const [currentFolder, setCurrentFolder] = useState(0)
  const [currentDirectory, setCurrentDirectory] = useState('/')
  const [searchedText, setSearchedText] = useState('')
  // const [searchParameter, setSearchParameter] = useState(0)

  return (
    <div className='main-container' >
      <h1 className='main-container-header' >
        Files
      </h1>
      <div>
        <input className='main-search-bar' type="text" placeholder='Search the name' onChange={(e) => setSearchedText(e.target.value.toUpperCase())} />
        {/* <div onChange={(e) => setSearchParameter(e.target.value)} >
          Sort By: 
          <input type="radio" name='sort' value='isFolder' defaultChecked /> Folder First
          <input type="radio" name='sort' value='Name' /> Name
        </div> */}
        <h3> Current Directory: {currentDirectory} </h3>
      </div>
      <div>
        {
          currentFolder !== 0
            ? <ParentRow rootFolderId={Data.find(data => data.id === currentFolder).rootFolderId} setCurrentFolder={setCurrentFolder} currentDirectory={currentDirectory} setCurrentDirectory={setCurrentDirectory} />
            : <div></div>
        }
        {
          Data
            .filter((data) => { return data.rootFolderId === currentFolder })
            .filter((data) => { return data.name.toUpperCase().includes(searchedText) })
            .map((data, index) =>
              data.isFolder
                ? <FolderRow key={index} id={data.id} folderName={data.name} setCurrentFolder={setCurrentFolder} currentDirectory={currentDirectory} setCurrentDirectory={setCurrentDirectory} />
                : <FileRow key={index} fileName={data.name} fileSize={data.size} />
            )
        }
      </div>
    </div>
  );
}

export default App;
