import React from "react";
import { Redirect } from "react-router-dom";

function Home({ isSignedIn }) {
  //if he isn't signed in direct the to login page
  if (!isSignedIn) return <Redirect to="/login" />;

//return to homepage otherwise
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

export default Home;
