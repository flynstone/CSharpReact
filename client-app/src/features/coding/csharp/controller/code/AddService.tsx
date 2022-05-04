import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function AddService() {
  const [code, setCode] = React.useState(
    `services.AddScoped<ILoggerService, LoggerService>();`
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