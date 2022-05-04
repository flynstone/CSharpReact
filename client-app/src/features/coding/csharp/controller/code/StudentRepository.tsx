import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function StudentRepository() {
  const [code, setCode] = React.useState(
    `public class StudentRepository : RepositoryBase<Student>, IStudentRepository
{
    public StudentRepository(ApplicationDbContext context) : base(context)
    {
    }

    // Get all students
    public async Task<IEnumerable<Student>> GetStudentsAsync(bool trackChanges) =>
        await GetAll(trackChanges).ToListAsync();

    // Get student by id
    public async Task<Student> GetStudentAsync(int id, bool trackChanges) => 
        await GetByCondition(s => s.Id.Equals(id), (trackChanges ? 1 : 0) != 0).SingleOrDefaultAsync();

    public void CreateStudent(Student student) =>
        Create(student);

    public void UpdateStudent(Student student) =>
        Update(student);

    public void DeleteStudent(Student student) =>
        Delete(student);
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