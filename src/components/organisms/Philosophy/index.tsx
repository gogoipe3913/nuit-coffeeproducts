import React, { useState } from "react";
import style from "./style.module.scss";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const Philosophy: React.FC = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  return (
    <>
      <div id="philosophy" className={style.Philosophy}>
        <div className={style.Philosophy__contents}>
          <FadeInContainer>
            <h2 className={style.Philosophy__title}>
              <span className={style.Philosophy__titleBody}>Philosophy</span>
            </h2>
          </FadeInContainer>
          <FadeInContainer>
            <div className={style.Philosophy__texts}>
              <p className={style.Philosophy__text}>
                コーヒーの楽しさは、
                <br />
                美味しく飲むことだけではありません。
                <br />
                心を落ち着ける時間を過ごしても、
                <br />
                ただ何も考えないひとときを楽しんでも、
                <br />
                それらを全て肯定してくれる。
                <br />
                コーヒーのいろいろな面白さを
                <br />
                お楽しみいただければ、嬉しいです。
              </p>
              <p className={style.Philosophy__textEnglish}>
                The joy of coffee isn’t just about
                <br />
                savoring its delicious taste.
                <br />
                welcomes a pause for reflection,
                <br />
                It embraces moments of calm,
                <br />
                and even allows you to enjoy doing absolutely nothing.
                <br />
                We hope you’ll discover and delight
                <br />
                in the many fascinating aspects of coffee.
              </p>
            </div>
            <div className={style.Philosophy__buttonWrapper}>
              <button
                className={style.Philosophy__button}
                onClick={() => {
                  setIsDisplayed(!isDisplayed);
                }}
              >
                <span className={style.Philosophy__buttonText}>View shop</span>
                <span className={style.Philosophy__buttonCircle}>
                  <span className={style.Philosophy__buttonArrow} />
                </span>
              </button>
            </div>
          </FadeInContainer>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
