import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Cors() {
  const [code, setCode] = React.useState(
    `public static void ConfigureCors(this IServiceCollection services)
    {
        services.AddCors(opt => 
        {
            opt.AddPolicy("CorsPolicy", builder => 
            builder.AllowAnyMethod()
                   .AllowAnyHeader()
                   .WithOrigins("https://localhost:4200"));
        });
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