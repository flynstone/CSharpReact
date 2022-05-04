import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function SeedContext() {
  const [code, setCode] = React.useState(
    `
public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options): base(options)
    {
    }
  
    public DbSet<Student> Students { get; set; }

    // We need to add this section.
    protected override void OnModelCreating(ModelBuilder builder) 
    {
        base.OnModelCreating(builder);

        // Seed the data.
        builder.ApplyConfiguration(new StudentsConfiguration());
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