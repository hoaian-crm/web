import { useEffect, useState } from "react";

export const useDebounce = <T extends any>(
  initValue: T,
  time: number
): [T, any] => {
  const [value, setValue] = useState(initValue);
  const [tempValue, setTempValue] = useState(initValue);
  const [t, setT] = useState<any>(null);

  useEffect(() => {
    if (t) {
      clearTimeout(t);
    }
    const tid = setTimeout(() => {
      setValue(tempValue);
    }, time);

    setT(tid);
  }, [tempValue]);

  return [value, setTempValue];
};

export function capitalizeFirstLetter(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
}