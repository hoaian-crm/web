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

export function limitText(value: string, length: number) {
  if (!value || value.length < length) return value;
  return value.slice(0, length - 3) + "...";
}
