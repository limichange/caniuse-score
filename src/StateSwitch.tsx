import { FC, FormEvent, useCallback } from "react";
import { useAtom } from "jotai";
import { globalAtom } from "./atom";

export const allStatus = {
  none: "-",
  knowIt: "Konw it",
  usedIt: "Used it",
  masterIt: "Master it"
};

export type allStatusKeys = keyof typeof allStatus;

export interface StateSwitchProps {
  item: string;
}

export const StateSwitch: FC<StateSwitchProps> = (props) => {
  const { item, children } = props;
  const [selectValue, setSelectValue] = useAtom(globalAtom);

  const selectOnChange = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      setSelectValue({
        ...selectValue,
        [item]: e.currentTarget.value.toString() as allStatusKeys
      });
    },
    [setSelectValue, selectValue, item]
  );

  return (
    <>
      <select
        onChange={selectOnChange}
        value={selectValue[item]}
        style={{ display: "block", width: 80, marginRight: 8 }}
      >
        {Object.keys(allStatus).map((item) => {
          const key = item as allStatusKeys;

          return (
            <option value={key} key={key}>
              {allStatus[key]}
            </option>
          );
        })}
      </select>

      {children}
    </>
  );
};
