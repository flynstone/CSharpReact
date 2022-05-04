import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Swagger() {
  const [code, setCode] = React.useState(
    `public static class ServiceExtensions 
{
    // Configure swagger
    public static void ConfigureSwagger(this IServiceCollection services)
    {
      services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "SchoolApi", Version = "v1" });
        });
    }

    // ... our previous code
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