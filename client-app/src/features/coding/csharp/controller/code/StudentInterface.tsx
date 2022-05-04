import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function StudentInterface() {
  const [code, setCode] = React.useState(
    `public interface IStudentRepository
{
    Task<IEnumerable<Student>> GetStudentsAsync(bool trackChanges);
    Task<Student> GetStudentAsync(int id, bool trackChanges);
    void CreateStudent(Student student);
    void UpdateStudent(Student student);
    void DeleteStudent(Student student);
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