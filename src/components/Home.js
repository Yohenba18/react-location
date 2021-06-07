import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        // console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
      },
      {
        enableHighAccuracy: true,
      }
    );
  } else {
    alert("Geolocation is not supported by this browser.");
  }
  }, []);

  return (
    <div style={{"text-align": "center","margin-top":"100px","text-decoration":"none"}} className="Home">
      <h1>Geolocation</h1>
      <p>Latitude: {state.latitude}</p>
      <p>longitude: {state.longitude}</p>

      <Link
        to={{
          pathname: "/map",
          // state: {
          //   hello: 'world'
          // }
          state,
        }}
        style={{"text-decoration":"none","margin-top":"50px"}}
      >
        Find my Location
      </Link>
    </div>
  );
};

export default Home;
