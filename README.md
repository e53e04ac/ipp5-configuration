# ipp5-configuration

~~~~~ sh
npm install e53e04ac/ipp5-configuration
~~~~~

~~~~~ mjs
import { Ipp5Configuration } from 'e53e04ac/ipp5-configuration';
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
  click B_0 "https://github.com/e53e04ac/base/tree/2dc903faf7859d755dd52f7fde706be5170b9a6f";
  click B_1 "https://github.com/e53e04ac/file-entry-native/tree/874175e9fe9373cd4b0ce7d96ef744f2e41898b0";
  click B_2 "https://github.com/e53e04ac/hold/tree/285d028e225a7e75747417c3ed6b1ca0d5f52f6a";
  click B_3 "https://www.npmjs.org/package/@types/node/v/18.13.0";
  click B_4 "https://github.com/e53e04ac/file-entry/tree/54166105381939e5a1c4dee0af1f44705e5f44bc";
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.mjs"])
  subgraph "base";
    B_0_0(["Base"]);
  end;
  subgraph "file-entry-native";
    B_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_2_0(["hold"]);
    B_2_1(["unwrap"]);
  end;
  A ----> B_0_0;
  A ----> B_1_0;
  A ----> B_2_0;
  A ----> B_2_1;
~~~~~

~~~~~ mermaid
graph RL;
  A(["index.d.ts"])
  subgraph "base";
    B_0_0(["Base"]);
  end;
  subgraph "file-entry";
    B_1_0(["FileEntry"]);
  end;
  subgraph "hold";
    B_2_0(["Get"]);
    B_2_1(["ValueOrGet"]);
  end;
  B_0_0 ----> A;
  B_1_0 ----> A;
  B_2_0 ----> A;
  B_2_1 ----> A;
~~~~~
