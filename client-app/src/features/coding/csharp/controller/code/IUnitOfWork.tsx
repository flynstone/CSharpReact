import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function IUnitOfWork() {
  const [code, setCode] = React.useState(
    `public interface IUnitOfWork
{
    IStudentRepository Student { get; set; }
    Task SaveAsync();
}`
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