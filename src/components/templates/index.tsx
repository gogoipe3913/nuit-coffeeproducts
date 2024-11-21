import React from "react";
import Top from "../organisms/Top";
import Philosophy from "../organisms/Philosophy";
import style from "./style.module.scss";

const Templates: React.FC = () => {
  return (
    <>
      <div className={style.Templates}>
        <div className={style.Templates__noise}>
          <div className={style.Templates__noiseGif} />
        </div>
        <div className={style.Templates__mainColumn}>
          <Top className={style.Templates__top} />
          <Philosophy />
        </div>
      </div>
    </>
  );
};

export default Templates;
