import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function UnitOfWork() {
  const [code, setCode] = React.useState(
    `public class UnitOfWork : IUnitOfWork
{
    // Import db context.
    private ApplicationDbContext _context;
    // Import student repository
    private IStudentRepository _studentRepository;
    public UnitOfWork(ApplicationDbContext context)
    {
        _context = context;
    }

    public IStudentRepository Student
    {
        get
        {
            // Handle null result
            if (_studentRepository == null)
                _studentRepository = new StudentRepository(_context);

            return _studentRepository;
        }
    }

    public async Task SaveAsync()
    {
        int num = await this._context.SaveChangesAsync();
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