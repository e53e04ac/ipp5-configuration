# ipp5-configuration

~~~~~ sh
npm install e53e04ac/ipp5-configuration
~~~~~

~~~~~ mjs
import { type Ipp5Configuration } from 'e53e04ac/ipp5-configuration';
import { const Ipp5Configuration } from 'e53e04ac/ipp5-configuration';
~~~~~

~~~~~ mermaid
graph RL;
  A(["package.json"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/file-entry-native"]);
    B_2(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_3(["@types/node"]);
    B_4(["e53e04ac/file-entry"]);
  end;
  A ----> B_0;
  A ----> B_1;
  A ----> B_2;
  A ----> B_3;
  A ----> B_4;
  click B_0 "https://github.com/e53e04ac/base/tree/b45c2734e219419ebd59c99b026f593b813ba494";
  click B_1 "https://github.com/e53e04ac/file-entry-native/tree/d905b0fdfa01ffc72395f7bb211456a8cd99303c";
  click B_2 "https://github.com/e53e04ac/hold/tree/8fc3f6696d1c7ed6d184d90c5e33298cc9228991";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/bc4d7803552b302d1ec4baa19065b5efa6f94038";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-configuration";
    E_0(["Ipp5Configuration"]);
  end;
  M(["index.mjs"])
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

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/ipp5-configuration";
    E_0(["type Ipp5Configuration"]);
    E_1(["const Ipp5Configuration"]);
  end;
  M(["index.d.ts"])
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
~~~~~
