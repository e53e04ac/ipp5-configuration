# ipp5-configuration

~~~~~ sh
npm install e53e04ac/ipp5-configuration
~~~~~

~~~~~ mjs
import { Ipp5Configuration } from 'e53e04ac/ipp5-configuration';
~~~~~

~~~~~ mermaid
graph RL;
  A(["e53e04ac/ipp5-configuration"]);
  subgraph "dependencies";
    B_0(["e53e04ac/base"]);
    B_1(["e53e04ac/file-entry"]);
    B_2(["e53e04ac/file-entry-native"]);
    B_3(["e53e04ac/hold"]);
  end;
  subgraph "devDependencies";
    B_4(["@types/node"]);
  end;
  A --reference--> B_0;
  A --reference--> B_1;
  A --reference--> B_2;
  A --reference--> B_3;
  A --reference--> B_4;
  click B_0 "https://github.com/e53e04ac/base/tree/86bc9dc951e32d7e173b8e7bf020b9439d75f8f7";
  click B_1 "https://github.com/e53e04ac/file-entry/tree/3121d37092abe3439372f24817a295aa5ed10d7e";
  click B_2 "https://github.com/e53e04ac/file-entry-native/tree/f3bab6d7be77c1e3b2791f82201dd2195639be66";
  click B_3 "https://github.com/e53e04ac/hold/tree/385afd8049a499071f966af24caf970731543db4";
  click B_4 "https://www.npmjs.org/package/@types/node/v/18.13.0";
~~~~~

~~~~~ mermaid
graph LR;
  subgraph "e53e04ac/ipp5-configuration"
    C0("index.mjs");
    C1("index.d.ts");
  end;
  subgraph "base"
    D0(["Base"]);
  end;
  subgraph "file-entry-native"
    D1(["FileEntry"]);
  end;
  subgraph "hold"
    D2(["hold"]);
    D3(["unwrap"]);
    D5(["Get"]);
    D6(["ValueOrGet"]);
  end;
  subgraph "file-entry"
    D4(["FileEntry"]);
  end;
  D0 --import--> C0;
  D1 --import--> C0;
  D2 --import--> C0;
  D3 --import--> C0;
  D0 --import--> C1;
  D4 --import--> C1;
  D5 --import--> C1;
  D6 --import--> C1;
~~~~~
