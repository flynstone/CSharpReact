import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function Base() {
  const [code, setCode] = React.useState(
    `public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
{
    // Initialize constructor
    protected AppDbContext _context { get; set; }
    public RepositoryBase(AppDbContext context) 
    {
        _context = context;
    }

    public IQueryable<T> GetAll() => 
        _context.Set<T>().AsNoTracking();
    
    public IQueryable<T> GetByCondition(Expression<Func<T, bool>> expression) => 
        _context.Set<T>().Where(expression).AsNoTracking();

    public void Create(T entity) => 
        _context.Set<T>().Add(entity);

    public void Update(T entity) => 
        _context.Set<T>().Update(entity);

    public void Delete(T entity) => 
        _context.Set<T>().Remove(entity);
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