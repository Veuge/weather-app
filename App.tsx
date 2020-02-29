import React from 'react';
import { Provider } from "react-redux";

import MainApp from "./src/MainApp";
import rootStore from "./src/store/rootStore";

export default function App() {
  return (
    <Provider store={rootStore}>
      <MainApp />
    </Provider>
  );
}
