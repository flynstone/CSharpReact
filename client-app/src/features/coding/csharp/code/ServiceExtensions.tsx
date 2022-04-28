import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ServiceExtensions() {
  const [code, setCode] = React.useState(
    `public static class ServiceExtensions 
{
    // Configure database connection.
    public static void ConfigureSqlContext(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<ApplicationDbContext>(opts =>
            // Configure Postgres Sql, I could have used another database provider ex. Sql Server, Sqlite, MySql...
            opts.UseNpgsql(configuration.GetConnectionString("sqlConnection")));
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