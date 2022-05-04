import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Program() {
  const [code, setCode] = React.useState(
    `builder.Services.ConfigureSqlContext(builder.Configuration);`
  );

  return(
              <CodeEditor
                value={code}
                language="csharp"
                padding={15}
                style={{
                  fontSize: 18,
                  backgroundColor: "#343434",
                  fontFamily: 'Fira Code',
                }}          
                />
  )
}