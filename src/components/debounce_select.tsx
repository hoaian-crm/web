import { Select, SelectProps, Spin } from "antd";
import { debounce } from "lodash";
import React, { useMemo, useState } from "react";

export type DebounceSelectProps = SelectProps & {
  debounceTimeOut: number;
  fetching: boolean;
};

export function DebounceSelect(props: DebounceSelectProps) {
  const [debouncing, setDebouncing] = useState(false);

  const onChangeDebounce = useMemo(() => {
    return debounce((value: string) => {
      if (value) props.onSearch!(value);
      setDebouncing(false);
    }, props.debounceTimeOut);
  }, [props.debounceTimeOut, props.options]);

  const loading = debouncing || props.fetching;

  return (
    <Select
      {...props}
      showSearch={true}
      onSearch={(value) => {
        setDebouncing(!!value);
        onChangeDebounce(value);
      }}
      notFoundContent={loading ? <Spin size="small" /> : null}
      loading={loading}
      filterOption={false}
      dropdownRender={(node) =>
        loading ? (
          <div
            style={{
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin size="default" />
          </div>
        ) : (
          node
        )
      }
    />
  );
}
