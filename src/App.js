import "./App.scss";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";

import UploaderContainer from "./Uploader/UploaderContainer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Jumbotron id="react-upload-app">
      <UploaderContainer />

    </Jumbotron>
  );
}

export default App;
