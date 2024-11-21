import React from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
import classNames from "classnames";
import LogoMain from "../../atoms/LogoMain";
import { FadeInContainer } from "../../atoms/FadeInContainer";

type TopProps = {
  className?: string;
};

const Top: React.FC<TopProps> = ({ className = "" }) => {
  // const [imageLoaded, setImageLoaded] = useState(false);

  // const handleImageLoaded = () => {
  //   console.log("あああ");
  //   // Loadingアニメーションが消えるのを待つ
  //   setTimeout(() => {
  //     setImageLoaded(true);
  //   }, 300);
  // };

  return (
    <div
      id="Top"
      className={classNames(
        style.Top,
        className
        // !imageLoaded ? style["Top--beforeLoaded"] : ""
      )}
    >
      {/* <Loading isLoadedFirstImage={imageLoaded} /> */}

      <div className={style.Top__content}>
        <FadeInContainer>
          <h1 className={style.Top__logo}>
            <LogoMain color="#113086" />
          </h1>
        </FadeInContainer>
        <FadeInContainer>
          <p className={style.Top__text}>
            Nuit.（ニュイ）は、
            <br />
            あなたがコーヒーを好きになるきっかけを
            <br />
            いろんな角度からつくるための
            <br />
            コーヒープロダクトです。
          </p>
          <p className={style.Top__textEnglish}>
            Nuit. is a coffee brand that creates countless ways
            <br />
            for you to fall in love with coffee,
            <br />
            from every possible angle.
          </p>
        </FadeInContainer>
      </div>
      <ScrollIndicator className={style.Top__scrollIndicator} />
    </div>
  );
};

export default Top;
