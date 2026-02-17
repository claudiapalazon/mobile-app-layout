import { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className="footer py-3 px-4 d-flex align-items-center">
      <button className="webel-button button-secondary body-semibold-14">
        Omitir
      </button>
      <button className="webel-button button-primary">
        <i className="fa fa-search button-icon"></i>
        <p className="mb-0 button-title body-semibold-14">Buscar</p>
      </button>
    </div>
  );
};
