import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ProgramUpdate() {
  const [code, setCode] = React.useState(
    `using NLog;

LogManager.LoadConfiguration(string.Concat(Directory.GetCurrentDirectory(), "/nlog.config"));
`
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