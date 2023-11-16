import { useEffect, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

export const useParams = <T extends URLSearchParamsInit>(
  initialValues: T
): [T, (value: T) => void] => {
  const [query, _setQuery] = useState<T>(initialValues);
  const [params, setParams] = useSearchParams(initialValues);

  useEffect(() => {
    const update: any = {};
    Object.keys(query).map((key) => {
      update[key] = params.get(key);
    });
    _setQuery(update);
  }, [params]);

  const setQuery = (query: T) => {
    setParams(query);
  };

  return [query, setQuery];
};
