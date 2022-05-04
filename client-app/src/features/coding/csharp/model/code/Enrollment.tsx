import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Enrollment() {
  const [code, setCode] = React.useState(
    `public class Enrollment 
{
    // This will be the primary key.
    public int Id { get; set; }

    // This will link to the students table.
    public int StudentId { get; set; }
    public Student Student { get; set; }

    // This will link to the courses table.
    public int CourseId { get; set; }
    public Course Course { get; set; }
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