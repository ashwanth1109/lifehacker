import React, { useEffect } from "react";
import { connect } from "react-redux";
import useClientDimensions from "react-client-dimensions";

import Home from "./pages/Home";
import Login from "./pages/Login";
import { setClientDimensions } from "./actions";
import useRouter from "./hooks/useRouter";

const App = ({ _setClientDimensions }: { _setClientDimensions: Function }) => {
  const testApi = async () => {
    const res = await fetch(`/api/test`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    console.log("Frontend can communicate with backend", data);
  };

  const { vw, vh } = useClientDimensions();

  useEffect(() => {
    _setClientDimensions(vw, vh);
  }, [vw, vh]);

  useEffect(() => {
    testApi();
  }, []);

  const routeMap = {
    "/": () => <Home />,
    "/login": () => <Login />
  };

  const [renderComponent, changeRoute] = useRouter(routeMap, "/");

  return renderComponent ? renderComponent() : null;
};

export default connect(
  null,
  { _setClientDimensions: setClientDimensions }
)(App);
