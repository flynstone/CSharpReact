import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function DatabaseSeed() {
  const [code, setCode] = React.useState(
    `public class StudentsConfiguration : IEntityTypeConfiguration<Student> 
{
    public void Configure(EntityTypeBuilder<Student> builder)
    {
        builder.HasData(
            new Student
            {
                Id = Guid.NewGuid(),
                FirstName = "John",
                LastName = "Doe",
                IsEnrolled = false
            },
            new Student
            {
                Id = Guid.NewGuid(),
                FirstName = "Jane",
                LastName = "Doe",
                IsEnrolled = true
            });
    }
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