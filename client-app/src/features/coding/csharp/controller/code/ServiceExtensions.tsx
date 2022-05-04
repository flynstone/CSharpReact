import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ServiceExtensions() {
  const [code, setCode] = React.useState(
    `public static void ConfigureScopes(this IServiceCollection services)
    {
        services.AddAutoMapper(typeof(MappingProfiles));
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        services.AddScoped<IStudentRepository, StudentRepository>();
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