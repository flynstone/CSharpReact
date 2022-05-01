import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Base() {
  const [code, setCode] = React.useState(
    `public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
{
    // Initialize constructor
    protected ApplicationDbContext ApplicationDbContext { get; set; }
    public RepositoryBase(ApplicationDbContext applicationDbContext) 
    {
        ApplicationDbContext = applicationDbContext
    }

    public IQueryable<T> GetAll() => ApplicationDbContext.Set<T>().AsNoTracking();
    
    public IQueryable<T> GetByCondition(Expression<Func<T, bool>> expression) => 
      ApplicationDbContext.Set<T>().Where(expression).AsNoTracking();

    public void Create(T entity) => ApplicationDbContext.Set<T>().Add(entity);

    public void Update(T entity) => ApplicationDbContext.Set<T>().Update(entity);

    public void Delete(T entity) => ApplicationDbContext.Set<T>().Remove(entity);
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