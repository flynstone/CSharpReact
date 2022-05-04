


import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function UpdateDbContext() {
  const [code, setCode] = React.useState(
    `public DbSet<Course> Courses { get; set; }
public DbSet<Enrollment> Enrollments { get; set; }`
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