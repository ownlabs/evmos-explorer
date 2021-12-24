import React from "react";
import { QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { SocketProvider } from "./components";
import { Routes } from "./routes/routes";
import { queryClient } from "./service";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <SocketProvider>
            <Routes />
          </SocketProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
