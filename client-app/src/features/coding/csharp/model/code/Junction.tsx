import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Junction() {
  const [code, setCode] = React.useState(
    `public class Enrollment 
{
    public Guid Id { get; set; }
    public string Title { get; set; }
    // This will be used later in a one-to-many relationship.
    public string DepartmentId { get; set; }
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