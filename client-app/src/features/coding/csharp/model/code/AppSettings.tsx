import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function AppSettings() {
  const [code, setCode] = React.useState(
    `"ConnectionStrings": {
      "sqlConnection": "Data Source=./school.db"
    }`
  );

  return(
              <CodeEditor
                value={code}
                language="json"
                padding={15}
                style={{
                  fontSize: 18,
                  backgroundColor: "#343434",
                  fontFamily: 'Fira Code',
                }}          
                />
  )
}