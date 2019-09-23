import React, { useEffect } from "react";
import { connect } from "react-redux";
import useClientDimensions from "react-client-dimensions";

import { setClientDimensions } from "./actions";
import { AppState } from "./types";

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

  return (
    <>
      <h1>Life Hacker</h1>
      <p>Parcel Express App Setup Complete With Satisfactory Tooling</p>
    </>
  );
};

const mapStateToProps = (app: AppState) => {
  console.log("RENDER: APP STATE", app);
  return {};
};

export default connect(
  mapStateToProps,
  { _setClientDimensions: setClientDimensions }
)(App);
