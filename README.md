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
    C_0(["e53e04ac/base\n670acc97a4738c5d59ad80088971762efc970b18"]);
    C_1(["e53e04ac/file-entry-native\n26c4ace9610606e884be3c2af2bf69fe10662193"]);
    C_2(["e53e04ac/hold\n472cfb85bada328cba9c6faddcf45b1241761027"]);
    C_4(["e53e04ac/file-entry\n4ff5464c0df35db0fc552346c4011d115ebb4cde"]);
  end;
  subgraph "npmjs";
    C_3(["@types/node\n18.14.6"]);
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
  click C_0 "https://github.com/e53e04ac/base/tree/670acc97a4738c5d59ad80088971762efc970b18";
  click C_1 "https://github.com/e53e04ac/file-entry-native/tree/26c4ace9610606e884be3c2af2bf69fe10662193";
  click C_2 "https://github.com/e53e04ac/hold/tree/472cfb85bada328cba9c6faddcf45b1241761027";
  click C_3 "https://www.npmjs.com/package/@types/node/v/18.14.6";
  click C_4 "https://github.com/e53e04ac/file-entry/tree/4ff5464c0df35db0fc552346c4011d115ebb4cde";
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
