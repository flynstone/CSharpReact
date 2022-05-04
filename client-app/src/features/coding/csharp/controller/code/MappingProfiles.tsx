import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function MappingProfiles() {
  const [code, setCode] = React.useState(
    `public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Student, StudentDto>().ReverseMap();
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