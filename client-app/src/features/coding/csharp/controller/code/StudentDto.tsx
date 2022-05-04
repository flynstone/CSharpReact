import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function StudentDto() {
  const [code, setCode] = React.useState(
    `using System.ComponentModel.DataAnnotations;

public class StudentDto
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}

public class StudentForCreationDto
{
    [Required(ErrorMessage = "First Name is required")]
    public string FirstName { get; set; }
    
    [Required(ErrorMessage = "Last Name is required")]
    public string LastName { get; set; }

    public bool IsEnrolled { get; set; }
} 

public class StudentForUpdateDto
{
    public int Id { get; set; }
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