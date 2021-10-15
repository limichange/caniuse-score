import { FC } from "react";
import { Caniuse } from "./Caniuse";
import { allStatusKeys, StateSwitch } from "./StateSwitch";
import {} from "jotai/utils";
import { useAtom } from "jotai";
import { globalAtom } from "./atom";

export interface ListItemProps {
  item: string;
  caniuseData: Caniuse;
}

function getColorByStatus(key: allStatusKeys): string {
  const colors = {
    masterIt: "orange",
    knowIt: "blue",
    usedIt: "blueviolet",
    none: "inherit"
  };

  return colors[key] || "inherit";
}

export const ListItem: FC<ListItemProps> = (props) => {
  const { item, caniuseData } = props;
  const itemData = caniuseData.data[item];
  const caniuseLink = `https://caniuse.com/${item}`;
  const [selectValue] = useAtom(globalAtom);
  const status = selectValue[item] as allStatusKeys;

  return (
    <li
      style={{
        marginTop: 2,
        fontSize: 18,
        color: itemData.usage_perc_y < 60 ? "gray" : "black",
        display: "flex",
        alignItems: "center"
      }}
      key={item}
    >
      <label
        title={itemData.description}
        style={{
          color: getColorByStatus(status),
          display: "flex",
          alignItems: "center",
          marginRight: 6
        }}
      >
        <StateSwitch item={item}></StateSwitch>
        {itemData.title} ({itemData.usage_perc_y}%)
      </label>

      <a
        rel="noreferrer"
        target="_blank"
        title={caniuseLink}
        href={caniuseLink}
      >
        <span aria-label="caniuse link" role="img">
          🔗
        </span>
      </a>
    </li>
  );
};
