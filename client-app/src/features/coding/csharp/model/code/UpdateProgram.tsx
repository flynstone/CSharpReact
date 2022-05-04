import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function UpdateProgram() {
  const [code, setCode] = React.useState(
    `var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.ConfigureSqlContext(builder.Configuration);
builder.Services.ConfigureSwagger();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "SchoolApi v1"));
}

app.UseRouting();

app.MapControllers();
app.Run();`
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