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
    C_0(["e53e04ac/base\n1d4c074238c197e136cc1d4956685d90b7118af6"]);
    C_1(["e53e04ac/file-entry-native\ndefd6be09a23c45f20de7b29d2cde5ae679bc47a"]);
    C_2(["e53e04ac/hold\nccd6d335b2be61f30045be782b2129d08a53ac67"]);
    C_4(["e53e04ac/file-entry\n31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.1"]);
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
  click C_0 "https://github.com/e53e04ac/base/tree/1d4c074238c197e136cc1d4956685d90b7118af6";
  click C_1 "https://github.com/e53e04ac/file-entry-native/tree/defd6be09a23c45f20de7b29d2cde5ae679bc47a";
  click C_2 "https://github.com/e53e04ac/hold/tree/ccd6d335b2be61f30045be782b2129d08a53ac67";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.1";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/31d65a68d97f3f8fd6a45b621b8a3d8245aa1e54";
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
