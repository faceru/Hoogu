import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withErrorBoundary, useErrorBoundary } from 'react-use-error-boundary';

export const ErrorBoundary = withErrorBoundary(({ children }: { children: React.ReactElement }) => {
  const [error, resetError] = useErrorBoundary(
    // You can optionally log the error to an error reporting service
    // eslint-disable-next-line no-console
    (errors, errorInfo) => console.error(errors, errorInfo)
  );
  const message = error instanceof Error ? error.message : (error as string);

  if (error) {
    return (
      // TODO: fine component for error boundary
      <div>
        <p>{message}</p>
        <button type="button" onClick={resetError}>
          Try again
        </button>
      </div>
    );
  }

  return children;
});
