export interface Caniuse {
  eras: { [key: string]: string };
  agents: Agents;
  statuses: Statuses;
  cats: Cats;
  updated: number;
  data: { [key: string]: Datum };
}

export interface Agents {
  ie: AgentsIe;
  edge: Edge;
  firefox: Chrome;
  chrome: Chrome;
  safari: AgentsSafari;
  opera: Opera;
  ios_saf: AgentsIosSaf;
  op_mini: AgentsOpMini;
  android: AgentsAndroid;
  bb: Bb;
  op_mob: AgentsOpMob;
  and_chr: AgentsAndChr;
  and_ff: AgentsAndFf;
  ie_mob: Chrome;
  and_uc: AndUc;
  samsung: AgentsSamsung;
  and_qq: AgentsAndQq;
  baidu: AgentsBaidu;
  kaios: AgentsKaios;
}

export interface AgentsAndChr {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: AndChrUsageGlobal;
  versions: (null | string)[];
}

export enum Prefix {
  A = "a",
  A1 = "a #1",
  A12 = "a #1 #2",
  A123 = "a #1 #2 #3",
  A1234 = "a #1 #2 #3 #4",
  A124 = "a #1 #2 #4",
  A125 = "a #1 #2 #5",
  A13 = "a #1 #3",
  A135 = "a #1 #3 #5",
  A14 = "a #1 #4",
  A15 = "a #1 #5",
  A2 = "a #2",
  A214 = "a #2 #1 #4",
  A23 = "a #2 #3",
  A234 = "a #2 #3 #4",
  A235 = "a #2 #3 #5",
  A24 = "a #2 #4",
  A25 = "a #2 #5",
  A3 = "a #3",
  A314 = "a #3 #1 #4",
  A34 = "a #3 #4",
  A345 = "a #3 #4 #5",
  A35 = "a #3 #5",
  A36 = "a #3 #6",
  A4 = "a #4",
  A45 = "a #4 #5",
  A456 = "a #4 #5 #6",
  A46 = "a #4 #6",
  A5 = "a #5",
  A56 = "a #5 #6",
  A57 = "a #5 #7",
  A6 = "a #6",
  A67 = "a #6 #7",
  A7 = "a #7",
  A8 = "a #8",
  A9 = "a #9",
  AD1 = "a d #1",
  AD14 = "a d #1 #4",
  AD2 = "a d #2",
  AD3 = "a d #3",
  AD8 = "a d #8",
  AX = "a x",
  AX1 = "a x #1",
  AX12 = "a x #1 #2",
  AX123 = "a x #1 #2 #3",
  AX1234 = "a x #1 #2 #3 #4",
  AX13 = "a x #1 #3",
  AX134 = "a x #1 #3 #4",
  AX156 = "a x #1 #5 #6",
  AX16 = "a x #1 #6",
  AX2 = "a x #2",
  AX23 = "a x #2 #3",
  AX234 = "a x #2 #3 #4",
  AX24 = "a x #2 #4",
  AX25 = "a x #2 #5",
  AX256 = "a x #2 #5 #6",
  AX3 = "a x #3",
  AX36 = "a x #3 #6",
  AX4 = "a x #4",
  AX45 = "a x #4 #5",
  AX5 = "a x #5",
  N = "n",
  N1 = "n #1",
  N12 = "n #1 #2",
  N2 = "n #2",
  N3 = "n #3",
  N4 = "n #4",
  N45 = "n #4 #5",
  N5 = "n #5",
  ND = "n d",
  ND1 = "n d #1",
  ND12 = "n d #1 #2",
  ND13 = "n d #1 #3",
  ND14 = "n d #1 #4",
  ND15 = "n d #1 #5",
  ND16 = "n d #1 #6",
  ND2 = "n d #2",
  ND21 = "n d #2 #1",
  ND24 = "n d #2 #4",
  ND2456 = "n d #2 #4 #5 #6",
  ND3 = "n d #3",
  ND31 = "n d #3 #1",
  ND34 = "n d #3 #4",
  ND3456 = "n d #3 #4 #5 #6",
  ND346 = "n d #3 #4 #6",
  ND356 = "n d #3 #5 #6",
  ND36 = "n d #3 #6",
  ND4 = "n d #4",
  ND45 = "n d #4 #5",
  ND5 = "n d #5",
  ND6 = "n d #6",
  ND7 = "n d #7",
  NDX1 = "n d x #1",
  NXD1 = "n x d #1",
  P = "p",
  P3 = "p #3",
  PD = "p d",
  PD1 = "p d #1",
  PD2 = "p d #2",
  PD21 = "p d #2 #1",
  PD3 = "p d #3",
  PD31 = "p d #3 #1",
  PD4 = "p d #4",
  U = "u",
  Webkit = "webkit",
  Y = "y",
  Y1 = "y #1",
  Y13 = "y #1 #3",
  Y2 = "y #2",
  Y23 = "y #2 #3",
  Y24 = "y #2 #4",
  Y3 = "y #3",
  Y34 = "y #3 #4",
  Y35 = "y #3 #5",
  Y36 = "y #3 #6",
  Y37 = "y #3 #7",
  Y4 = "y #4",
  Y5 = "y #5",
  Y6 = "y #6",
  Y7 = "y #7",
  YX = "y x",
  YX1 = "y x #1",
  YX2 = "y x #2",
  YX3 = "y x #3"
}

export interface AndChrUsageGlobal {
  "94": number;
}

export interface AgentsAndFf {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: AndFfUsageGlobal;
  versions: (null | string)[];
}

export interface AndFfUsageGlobal {
  "92": number;
}

export interface AgentsAndQq {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: AndQqUsageGlobal;
  versions: (null | string)[];
}

export interface AndQqUsageGlobal {
  "10.4": number;
}

export interface AndUc {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: AndUcUsageGlobal;
  versions: (null | string)[];
  prefix_exceptions: AndUcClass;
}

export interface AndUcClass {
  "12.12": Prefix;
}

export interface AndUcUsageGlobal {
  "12.12": number;
}

export interface AgentsAndroid {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface AgentsBaidu {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: BaiduUsageGlobal;
  versions: (null | string)[];
}

export interface BaiduUsageGlobal {
  "7.12": number;
}

export interface Bb {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface Chrome {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface Edge {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
  prefix_exceptions: { [key: string]: string };
}

export interface AgentsIe {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: IeUsageGlobal;
  versions: (null | string)[];
}

export interface IeUsageGlobal {
  "6": number;
  "7": number;
  "8": number;
  "9": number;
  "10": number;
  "11": number;
  "5.5": number;
}

export interface AgentsIosSaf {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface AgentsKaios {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: KaiosUsageGlobal;
  versions: (null | string)[];
}

export interface KaiosUsageGlobal {
  "2.5": number;
}

export interface AgentsOpMini {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: OpMiniUsageGlobal;
  versions: (null | string)[];
}

export interface OpMiniUsageGlobal {
  all: number;
}

export interface AgentsOpMob {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: OpMobUsageGlobal;
  versions: (null | string)[];
  prefix_exceptions: OpMobPrefixExceptions;
}

export interface OpMobPrefixExceptions {
  "64": Prefix;
}

export interface OpMobUsageGlobal {
  "10": number;
  "11": number;
  "12": number;
  "64": number;
  "11.1": number;
  "11.5": number;
  "12.1": number;
}

export interface Opera {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
  prefix_exceptions: OperaPrefixExceptions;
}

export interface OperaPrefixExceptions {
  "9": string;
  "11": string;
  "12": string;
  "9.5-9.6": string;
  "10.0-10.1": string;
  "10.5": string;
  "10.6": string;
  "11.1": string;
  "11.5": string;
  "11.6": string;
  "12.1": string;
}

export interface AgentsSafari {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface AgentsSamsung {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: Prefix;
  type: string;
  usage_global: { [key: string]: number };
  versions: (null | string)[];
}

export interface Cats {
  CSS: Other[];
  HTML5: Other[];
  JS: Other[];
  "JS API": Other[];
  Other: Other[];
  Security: Other[];
  SVG: Other[];
}

export enum Other {
  CSS = "CSS",
  Canvas = "Canvas",
  Css2 = "CSS2",
  Css3 = "CSS3",
  DOM = "DOM",
  Html5 = "HTML5",
  JS = "JS",
  JSAPI = "JS API",
  Other = "Other",
  PNG = "PNG",
  SVG = "SVG",
  Security = "Security"
}

export interface Datum {
  title: string;
  description: string;
  spec: string;
  status: Status;
  links: Link[];
  categories: Other[];
  stats: Stats;
  notes: string;
  notes_by_num: { [key: string]: string };
  usage_perc_y: number;
  usage_perc_a: number;
  ucprefix: boolean;
  parent: string;
  keywords: string;
  ie_id: string;
  chrome_id: string;
  firefox_id: string;
  webkit_id: string;
}

export interface Link {
  url: string;
  title: string;
}

export interface Stats {
  ie: StatsIe;
  edge: { [key: string]: Prefix };
  firefox: { [key: string]: Prefix };
  chrome: { [key: string]: Prefix };
  safari: StatsSafari;
  opera: { [key: string]: Prefix };
  ios_saf: StatsIosSaf;
  op_mini: StatsOpMini;
  android: StatsAndroid;
  bb: { [key: string]: Prefix };
  op_mob: StatsOpMob;
  and_chr: StatsAndChr;
  and_ff: StatsAndFf;
  ie_mob: { [key: string]: Prefix };
  and_uc: AndUcClass;
  samsung: StatsSamsung;
  and_qq: StatsAndQq;
  baidu: StatsBaidu;
  kaios: StatsKaios;
}

export interface StatsAndChr {
  "94": Prefix;
}

export interface StatsAndFf {
  "92": Prefix;
}

export interface StatsAndQq {
  "10.4": Prefix;
}

export interface StatsAndroid {
  "3": Prefix;
  "4": Prefix;
  "94": Prefix;
  "2.1": Prefix;
  "2.2": Prefix;
  "2.3": Prefix;
  "4.1": Prefix;
  "4.2-4.3": Prefix;
  "4.4": Prefix;
  "4.4.3-4.4.4": Prefix;
}

export interface StatsBaidu {
  "7.12": Prefix;
}

export interface StatsIe {
  "6": Prefix;
  "7": Prefix;
  "8": Prefix;
  "9": Prefix;
  "10": Prefix;
  "11": Prefix;
  "5.5": Prefix;
}

export interface StatsIosSaf {
  "8": Prefix;
  "15": Prefix;
  "3.2": Prefix;
  "4.0-4.1": Prefix;
  "4.2-4.3": Prefix;
  "5.0-5.1": Prefix;
  "6.0-6.1": Prefix;
  "7.0-7.1": Prefix;
  "8.1-8.4": Prefix;
  "9.0-9.2": Prefix;
  "9.3": Prefix;
  "10.0-10.2": Prefix;
  "10.3": Prefix;
  "11.0-11.2": Prefix;
  "11.3-11.4": Prefix;
  "12.0-12.1": Prefix;
  "12.2-12.5": Prefix;
  "13.0-13.1": Prefix;
  "13.2": Prefix;
  "13.3": Prefix;
  "13.4-13.7": Prefix;
  "14.0-14.4": Prefix;
  "14.5-14.8": Prefix;
}

export interface StatsKaios {
  "2.5": Prefix;
}

export interface StatsOpMini {
  all: Prefix;
}

export interface StatsOpMob {
  "10": Prefix;
  "11": Prefix;
  "12": Prefix;
  "64": Prefix;
  "11.1": Prefix;
  "11.5": Prefix;
  "12.1": Prefix;
}

export interface StatsSafari {
  "4": Prefix;
  "5": Prefix;
  "6": Prefix;
  "7": Prefix;
  "8": Prefix;
  "9": Prefix;
  "10": Prefix;
  "11": Prefix;
  "12": Prefix;
  "13": Prefix;
  "14": Prefix;
  "15": Prefix;
  "3.1": Prefix;
  "3.2": Prefix;
  "5.1": Prefix;
  "6.1": Prefix;
  "7.1": Prefix;
  "9.1": Prefix;
  "10.1": Prefix;
  "11.1": Prefix;
  "12.1": Prefix;
  "13.1": Prefix;
  "14.1": Prefix;
  TP: Prefix;
}

export interface StatsSamsung {
  "4": Prefix;
  "5.0-5.4": Prefix;
  "6.2-6.4": Prefix;
  "7.2-7.4": Prefix;
  "8.2": Prefix;
  "9.2": Prefix;
  "10.1": Prefix;
  "11.1-11.2": Prefix;
  "12.0": Prefix;
  "13.0": Prefix;
  "14.0": Prefix;
  "15.0": Prefix;
}

export enum Status {
  CR = "cr",
  Ls = "ls",
  Other = "other",
  PR = "pr",
  Rec = "rec",
  Unoff = "unoff",
  Wd = "wd"
}

export interface Statuses {
  rec: string;
  pr: string;
  cr: string;
  wd: string;
  ls: string;
  other: Other;
  unoff: string;
}
