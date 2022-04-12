import React from "react";
import Animation from "./Animation";

const HomeComponent = () => {
  return (
    <div>
      <Animation />
      <main>
        <section className="left">
          <h1>
            Hi, I am <br />
            YUHO.
          </h1>
          <p>
            我是... <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, maxime
            modi mollitia optio officiis libero fuga debitis nihil iste ab.
          </p>
        </section>
        <section className="right">
          <img className="myPic" src="/images/headshot.jpeg" alt="headshot" />
        </section>
      </main>
    </div>
  );
};

export default HomeComponent;
