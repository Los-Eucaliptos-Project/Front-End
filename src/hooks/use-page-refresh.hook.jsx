import { useCallback } from 'react';

function usePageRefresh(path) {
  const handleRefresh = useCallback((event) => {
    event.preventDefault();
    window.location.href = path;
  }, [path]);

  return handleRefresh;
}

export default usePageRefresh;