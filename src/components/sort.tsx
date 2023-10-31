import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "./text";

type ColumnOptions = {
  label: string;
  value: string;
};

export type SortProps = {
  columnOptions?: Array<ColumnOptions>;
  placeHodler?: string;
  onChangeSelectedChange?: (options: ColumnOptions) => void;
  onChangeDirection?: (desc: boolean) => void;
  initValue?: ColumnOptions;
};

export const Sort: React.FC<SortProps> = ({
  columnOptions = [],
  placeHodler = "Select field to sort",
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const [desc, setDesc] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<
    ColumnOptions | undefined
  >(props.initValue);

  return (
    <Container>
      <SortButton
        onBlur={() => setFocus(false)}
        onClick={() => setFocus(true)}
        tabIndex={2}
      >
        <FontAwesomeIcon fontSize={25} icon={Icons.SortIcon} />
        {selectedColumn ? (
          <ColumnLabel>{selectedColumn.label}</ColumnLabel>
        ) : (
          <PlaceHodler>{placeHodler}</PlaceHodler>
        )}
        <DirectionButton
          icon={Icons.UpIcon}
          onClick={() => {
            setFocus(false);
            props.onChangeDirection && props.onChangeDirection(!desc);
            setDesc(!desc);
          }}
          desc={desc}
        />
      </SortButton>
      <ColumnMenu focus={focus} id="sort">
        {columnOptions.map((col) => (
          <ColumnOption
            onMouseDown={() => {
              setSelectedColumn(col);
              setFocus(false);
              props.onChangeSelectedChange && props.onChangeSelectedChange(col);
            }}
          >
            <SelectedColumn selected={selectedColumn?.value === col.value} />
            <ColumnLabel>{col.label}</ColumnLabel>
          </ColumnOption>
        ))}
      </ColumnMenu>
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  min-width: 150px;
`;

const SortButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;

const ColumnMenu = styled.div<{ focus: boolean }>`
  display: ${(props) => (props.focus ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
  width: 100%;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  background-color: ${(props) => props.theme.backgroundColor};
  opacity: 0.9;
`;
const ColumnOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SelectedColumn = styled.div<{ selected: boolean }>`
  background-color: ${(props) =>
    props.selected ? props.theme.text.color : "none"};
  border-radius: 100px;
  width: 15px;
  height: 15px;
  border: 2px ${(props) => props.theme.text.color} solid;
`;

const ColumnLabel = styled(Text)`
  color: ${(props) => props.theme.text.color};
`;

const PlaceHodler = styled(Text)`
  color: ${(props) => props.theme.placeHolder.color};
`;

const DirectionButton = styled(FontAwesomeIcon)<{ desc: boolean }>`
  rotate: ${(props) => (props.desc ? "180deg" : 0)};
  transition: rotate 1s;
  margin-left: auto;
`;
