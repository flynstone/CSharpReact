import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Course() {
  const [code, setCode] = React.useState(
    `public class Course 
{
    // Configure primary key to be manually created.
    // Ex. 101
    [DatabaseGenerated(DatabaseGeneratedOption.None)]
    public int Id { get; set; }
    public string Title { get; set; }

    // Creating a collection of enrollments.
    public ICollection<Enrollment> Enrollments { get; set; }
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