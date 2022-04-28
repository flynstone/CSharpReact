import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function DataContext() {
  const [code, setCode] = React.useState(
    `
public class ApplicationDbContext : DbContext
{
    // Class constructor
    public ApplicationDbContext(DbContextOptions options): base(options)
    {
        // We could add the database connection string here, but it is better practice to keep
        // in a more private file => appsettings.json.
    }
  
    // Create table in the database
    public DbSet<Student> Students { get; set; }
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