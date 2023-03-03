# ipp5-configuration

~~~~~ sh
npm install e53e04ac/ipp5-configuration
~~~~~

~~~~~ mjs
import { Ipp5Configuration } from 'ipp5-configuration';
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "dependencies";
    B_0(["base"]);
    B_1(["file-entry-native"]);
    B_2(["hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["file-entry"]);
  end;
  subgraph "github";
    C_0(["e53e04ac/base\n9fc9cdc63f493c5f89b8bdd036529f6798baeaec"]);
    C_1(["e53e04ac/file-entry-native\nffa221f27872ff9189f6c1ad6d79e37e993b80d9"]);
    C_2(["e53e04ac/hold\nddaaa9a26277fc09602293248b7aea8071eabafe"]);
    C_4(["e53e04ac/file-entry\n6dbfc47021ae223d33da99b8c62876299bca2114"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.5"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  B_0 ----> C_0;
  B_1 ----> C_1;
  B_2 ----> C_2;
  B_3 ----> C_3;
  B_4 ----> C_4;
  click C_0 "https://github.com/e53e04ac/base/tree/9fc9cdc63f493c5f89b8bdd036529f6798baeaec";
  click C_1 "https://github.com/e53e04ac/file-entry-native/tree/ffa221f27872ff9189f6c1ad6d79e37e993b80d9";
  click C_2 "https://github.com/e53e04ac/hold/tree/ddaaa9a26277fc09602293248b7aea8071eabafe";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.5";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/6dbfc47021ae223d33da99b8c62876299bca2114";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-configuration";
    E_0(["namespace Ipp5Configuration"]);
    E_1(["type Ipp5Configuration"]);
    E_2(["const Ipp5Configuration"]);
  end;
  M["index.d.ts"]
  subgraph "base";
    I_0_0(["Base"]);
  end;
  subgraph "file-entry";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["Get"]);
    I_2_1(["ValueOrGet"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
  E_1 ----> M;
  E_2 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-configuration";
    E_0(["Ipp5Configuration"]);
  end;
  M["index.mjs"]
  subgraph "base";
    I_0_0(["Base"]);
  end;
  subgraph "file-entry-native";
    I_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    I_2_0(["hold"]);
    I_2_1(["unwrap"]);
  end;
  M ----> I_0_0;
  M ----> I_1_0;
  M ----> I_2_0;
  M ----> I_2_1;
  E_0 ----> M;
~~~~~
