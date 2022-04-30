import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function AppSettings() {
  const [code, setCode] = React.useState(
    `"ConnectionStrings": {
      "sqlConnection": "Server=localhost; PORT=5432; User Id=YourUser; Password=YourPassword; Database=YourDatabaseNameDb"
    }`
  );

  return(
              <CodeEditor
                value={code}
                language="json"
                padding={15}
                style={{
                  fontSize: 24,
                  backgroundColor: "#343434",
                  fontFamily: 'Fira Code',
                }}          
                />
  )
}