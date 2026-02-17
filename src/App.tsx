import { FC } from "react";
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";

const App: FC = () => {
  return (
    <>
      <div className="layout d-md-none">
        <Header />
        <Body />
        <Footer />
      </div>
      <div className="layout-empty d-none d-md-flex justify-content-center align-items-center vh-100 vw-100">
        Desktop view in progress, please, change the view to responsive
      </div>
    </>
  );
};

export default App;
