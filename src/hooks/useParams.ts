import { useEffect, useMemo, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

export const useParams = <T extends Record<string, string>>(
  initialValues: T, prefix: string = 'page'
): [T, (value: T) => void] => {

  const transformation = (query: T) => {
    let result: Record<string, string> = {};
    Object.keys(query).map(key => {
      result[prefix + "." + key] = query[key];
    })
    return result;
  }

  const [query, _setQuery] = useState<T>(initialValues);
  const [params, setParams] = useSearchParams(useMemo(() => transformation(initialValues), [initialValues, prefix]));

  useEffect(() => {
    const update: any = {};
    Object.keys(query).map((key) => {
      update[key] = params.get(prefix + "." + key);
    });
    _setQuery(update);
  }, [params]);



  const setQuery = (query: T) => {
    setParams(transformation(query))
  };

  return [query, setQuery];
};
