import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Basic() {
  const [code, setCode] = React.useState(
    `[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    // Import our DataContext and initialize it in the class constructor
    private readonly ApplicationDbContext _context;
    public StudentsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/students
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Student>>> GetStudents()
    {
        return await _context.Articles.ToListAsync();
    }

    // GET: api/students/5
    [HttpGet("{id}")]
    public async Task<ActionResult<<Student>> GetStudent(int id)
    {
        // Find student by id
        var student = await _context.Students.FindAsync(id);

        // Handle null result.
        if (student == null) return NotFound();

        return Student(student);
    }
}`
  );

  return(
              <CodeEditor
                value={code}
                language="csharp"
                padding={15}
                style={{
                  fontSize: 24,
                  backgroundColor: "#343434",
                  fontFamily: 'Fira Code',
                }}          
                />
  )
}