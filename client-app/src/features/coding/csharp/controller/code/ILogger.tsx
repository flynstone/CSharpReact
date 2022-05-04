import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

export default function ILogger() {
  const [code, setCode] = React.useState(
    `using NLog;

public interface ILoggerService
{
    void LogInfo(string message);
    void LogDebug(string message);
    void LogWarn(string message);
    void LogError(string message);
}

public class LoggerService : ILoggerService
{
    private static ILogger _logger = LogManager.GetCurrentClassLogger();

    public void LogInfo(string message) =>
        _logger.Info(message);

    public LogDebug(string message) =>
        _logger.Debug(message);

    public void LogWarn(string message) =>
        _logger.Warn(message);

    public void LogError(string message) => 
       _logger.Error(message);
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