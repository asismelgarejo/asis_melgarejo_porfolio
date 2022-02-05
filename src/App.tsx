import React from "react";
import AllRoutes from "./routes/AllRoutes";
import AllTheme from "./theme/AllTheme";
import AllContext from "./context/AllContext";

import "./toolbox/styles/reset.sass";
import "./App.css";

function App() {
  return (
    <div>
      <AllContext>
        <AllTheme>
          <AllRoutes />
        </AllTheme>
      </AllContext>
    </div>
  );
}

export default App;
