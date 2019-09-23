import React, { useEffect } from "react";

const App = () => {
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

export default App;
