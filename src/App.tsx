import { BrowserRouter, Routes } from "react-router-dom";

import { renderRoutes, routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {renderRoutes(routes)}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
