# ipp5-configuration

~~~~~ sh
npm install e53e04ac/ipp5-configuration
~~~~~

~~~~~ mjs
import { Ipp5Configuration } from 'e53e04ac/ipp5-configuration';
~~~~~

~~~~~ mermaid
graph LR;
  A(["ipp5-configuration"]);
  B0(["e53e04ac/base"]);
  B1(["e53e04ac/file-entry"]);
  B2(["e53e04ac/file-entry-native"]);
  B3(["e53e04ac/hold"]);
  C0(["@types/node"]);
  click B0 href "https://github.com/e53e04ac/base";
  click B1 href "https://github.com/e53e04ac/file-entry";
  click B2 href "https://github.com/e53e04ac/file-entry-native";
  click B3 href "https://github.com/e53e04ac/hold";
  subgraph "e53e04ac/ipp5-configuration";
    A;
  end;
  subgraph "dependencies";
    B0 --import--> A;
    B1 --import--> A;
    B2 --import--> A;
    B3 --import--> A;
  end;
  subgraph "devDependencies";
    C0 --import--> A;
  end;
~~~~~
