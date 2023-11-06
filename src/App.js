import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./route";

function RouteLayout({ path }) {
  const element = useRoutes(path);
  return element;
}

function App() {
  return (
    <>
      <HelmetProvider>
        <Suspense>
          <RouteLayout path={routes()} />
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default App;
