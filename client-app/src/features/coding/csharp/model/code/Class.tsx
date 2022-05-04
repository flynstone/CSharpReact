import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Class() {
  const [code, setCode] = React.useState(
    `public class Student 
{
    // 2 methods to create ids.
    // First one is by default starting at number 1 and automatically
    // increaments by 1 when inserting new data.
    public int Id { get; set; }

    // This second method generates a globaly unique identifier (128-bit text string that represents an identification "Id").
    public Guid Id { get; set; }

    public string FirstName { get; set; }
    public string LastName { get; set; }
    public bool IsEnrolled { get; set; }
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