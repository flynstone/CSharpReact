import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react';

interface Props {
  setFiles: (files: any) => void;
}

export default function PhotoWidgetDropzone({ setFiles }: Props) {
  const dzStyles = {
    border: 'dashed 3px #eee',
    borderColor: '#eee',
    borderRadius: '5px',
    paddingTop: '30px',
    textAlign: 'center' as 'center',
    height: 200
  }

  const dzActive = {
    borderColor: 'green'
  }

  // useCallback => use memorized version of a callback that only changes if one of the dependancies have changed **Optimization Feature**
  // function uses a dependancy "setFiles" 
  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
      // This will give a preview of the image that was droped in
      preview: URL.createObjectURL(file)
    })));
  }, [setFiles])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} style={isDragActive ? {...dzStyles, ...dzActive} : dzStyles}>
      <input {...getInputProps()} />
      <Icon name='upload' size='huge' />
      <Header content='Drop image here' />
    </div>
  )
}