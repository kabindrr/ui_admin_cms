import "./App.css";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";

const App = () => {
  toast("hehe");
  return (
    <>
      <Button> Click Me</Button>
      <ToastContainer />
    </>
  );
};

export default App;
