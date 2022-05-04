import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function CourseEnrollment() {
  const [code, setCode] = React.useState(
    `public ICollection<Enrollment> Enrollments { get; set; }`
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