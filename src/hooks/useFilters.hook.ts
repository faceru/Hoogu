import { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useFilters = (initialSearchValues?: { [key: string]: any }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialEntries = useMemo(
    () => Object.entries(initialSearchValues || {}),
    [initialSearchValues]
  );
  const initialSearch = useMemo(() => Object.fromEntries([...searchParams]), [searchParams]);

  const initialSearchParams = useMemo(
    () =>
      initialEntries.reduce((acc: any, [key, value]): void => {
        acc[key] = initialSearch[key] || value;
        return acc;
      }, {}),
    [initialSearch, initialEntries]
  );

  const [searchParamsState, setSearchParamsState] = useState(initialSearchParams);

  useEffect(() => {
    const query = Object.entries(searchParamsState).reduce((acc: any, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    setSearchParams({ ...query });
  }, [searchParamsState]);

  return { searchParamsState, setSearchParamsState };
};
