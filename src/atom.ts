import { atomWithStorage } from "jotai/utils";
import { allStatusKeys } from "./StateSwitch";

export const globalAtom = atomWithStorage<{ [key: string]: allStatusKeys }>(
  "global",
  {}
);
