import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="header p-4">
      <button className="button-back d-flex align-items-center justify-content-center">
        <i className="fa fa-arrow-left"></i>
      </button>
      <p className="m-0 mt-1 display-24 header-title">¿Cuándo lo necesitas?</p>
    </div>
  );
};
