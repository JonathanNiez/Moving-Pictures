import "./App.css";
import { useState } from "react";

function App() {
  const [location1, setLocation1] = useState({
    up: 100,
    left: 125,
  });

  const [location2, setLocation2] = useState({
    up: 100,
    left: 900,
  });

  let image = {
    URL: "https://picsum.photos/300",
  };

  let style1 = {
    width: 300,
    height: 300,
    position: "absolute",
    top: location1.up,
    bottom: location1.up,
    right: location1.left,
    left: location1.left,
  };

  let style2 = {
    width: 300,
    height: 300,
    position: "absolute",
    top: location2.up,
    bottom: location2.up,
    right: location2.left,
    left: location2.left,
  };

  function moveImage1(e) {
    switch (e.key) {
      case "ArrowUp":
        setLocation1({
          ...location1,
          up: location1.up - 20,
        });
        console.log("Arrow Key: Up");
        break;

      case "ArrowRight":
        setLocation1({
          ...location1,
          left: location1.left + 20,
        });
        console.log("Arrow Key: Right");
        break;

      case "ArrowDown":
        setLocation1({
          ...location1,
          up: location1.up + 20,
        });
        console.log("Arrow Key: Down");
        break;

      case "ArrowLeft":
        setLocation1({
          ...location1,
          left: location1.left - 20,
        });
        console.log("Arrow Key: Left");
        break;
    }
  }

  function moveImage2(e) {
    switch (e.key) {
      case "w":
        setLocation2({
          ...location2,
          up: location2.up - 20,
        });
        console.log("W Key: Up");
        break;

      case "a":
        setLocation2({
          ...location2,
          left: location2.left - 20,
        });
        console.log("A Key: Left");
        break;

      case "d":
        setLocation2({
          ...location2,
          left: location2.left + 20,
        });
        console.log("D Key: Right");
        break;

      case "s":
        setLocation2({
          ...location2,
          up: location2.up + 20,
        });
        console.log("S Key: Down");
        break;
    }
  }
  return (
    <div className="App">
      <div className="container">
        <div className="col">
          <div className="row">
            <div className="image-container">
              <img
                src={image.URL}
                tabIndex={-1}
                alt="logo"
                onKeyDown={moveImage1}
                style={style1}
              />

              <h2
                className="move-guide"
                onKeyDown={moveImage1}
                style={style1}
                tabIndex={-1}
              >
                Use Arrow Keys to Move
              </h2>

              <img
                src={image.URL}
                tabIndex={-1}
                alt="logo"
                onKeyDown={moveImage2}
                style={style2}
              />

              <h2
                className="move-guide"
                onKeyDown={moveImage2}
                style={style2}
                tabIndex={-1}
              >
                Use WASD Keys to Move
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
