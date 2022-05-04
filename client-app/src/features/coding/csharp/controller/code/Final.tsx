import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Final() {
  const [code, setCode] = React.useState(
    `[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    // Import logger
    private readonly ILoggerService _logger;
    private readonly IUnitOfWork _unitOfWork;
    private readonly IMapper _mapper;
    public StudentsController(IUnitOfWork unitOfWork, IMapper mapper, ILoggerService logger)
    {
      _logger = logger;
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
        var student = await _unitOfWork.Student.GetAsync(id);

        // Handle null result.
        if (student == null) 
        {
            // record to log file
            _logger.LogInfo($"Student with id: {id} doesn't exist in the database");
            return NotFound();
        }

        var studentDto = _mapper.Map<StudentDto>(student);

        return Ok(studentDto);
    }

    // POST: api/students
    [HttpPost]
    public async Task<ActionResult<StudentForCreationDto>> AddStudent([FromBody] StudentForCreationDto studentDto)
    {
        var student = _mapper.Map<Student>(student);

        _unitOfWork.Student.CreateStudent(student);
        await _unitOfWork.SaveAsync();

        var studentToReturn = _mapper.Map<StudentForCreationDto>(student);

        return CreatedAtRoute("Id", new { id = studentToReturn.Id }, studentToReturn);
    }

    // PUT: api/students/5
    [HttpPut("{id:int}")]
    public async Task<ActionResult> UpdateStudent(int id, [FromBody] StudentForUpdateDto studentDto)
    {
        // Make sure id is not null, handle exception
        if (id != studentDto.Id)
        {
            _logger.LogInfo($"Student with id: {id} doesn't exist in the database.");
            return NotFound();
        }

        var student = HttpContext.Items["studentDto"] as Student;

        _mapper.Map(studentDto, student);
        await _unitOfWork.SaveAsync();

        return NoContent();
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