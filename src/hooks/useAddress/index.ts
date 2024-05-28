import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { useState } from 'react';
import Core from 'services/core';
import { ISearchAddress } from 'types/address';

export const useAddress = () => {
  const [input, setInput] = useState('');

  const search = useDebounce(input, 500);

  const query = useQuery<{
    result: Array<ISearchAddress>;
  }>({
    queryKey: ['address', search],
    queryFn: async () => {
      if (!search)
        return {
          result: []
        };
      const response = await Core.Address.search({ input: search });
      return {
        result: response.data.data.result
      };
    }
  });

  return {
    input,
    setInput,
    query
  };
};
