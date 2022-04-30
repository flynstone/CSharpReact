import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function SeedContext() {
  const [code, setCode] = React.useState(
    `
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions options): base(options)
    {
    }
  
    public DbSet<Article> Articles { get; set; }

    // We need to add this section.
    protected override void OnModelCreating(ModelBuilder builder) 
    {
        base.OnModelCreating(builder);

        // Seed the data.
        builder.ApplyConfiguration(new ArticleSeeds());
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