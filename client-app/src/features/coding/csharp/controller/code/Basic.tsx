import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Basic() {
  const [code, setCode] = React.useState(
    `[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public StudentsController(IUnitOfWork unitOfWork, IMapper mapper)
    {
      _unitOfWork = unitOfWork;
      _mapper = mapper;
    }

    // GET: api/Students
    [HttpGet]
    public async Task<IActionResult> GetStudents()
    {
        // Get students 
        var students = await _unitOfWork.Student.GetStudentsAsync(trackChanges: false);
        // Map data transfer object to model
        var studentsDto = _mapper.Map<IEnumerable<StudentDto>>(students);
        return Ok(studentDto);
    }

    // GET: api/Students/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetStudent(int id)
    {
        // Find student by id
        var student = await _unitOfWork.Student.GetStudentAsync(id, trackChanges: false);

        // Handle null result.
        if (student == null) return NotFound();

        var studentDto = _mapper.Map<StudentDto>(student);
        return Ok(studentDto);
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