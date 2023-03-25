import React from "react";

const Redirect = () => {
  const tab1 = () => {
    window.open(
      "https://www.youtube.com/watch?v=D9gkfwFrHhM",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab2 = () => {
    window.open(
      "https://www.youtube.com/watch?v=H7hfMBUzS44",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab3 = () => {
    window.open(
      "https://www.youtube.com/watch?v=nvuNPUyejm4",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab4 = () => {
    window.open(
      "https://www.youtube.com/watch?v=ibZFbm9d6X0",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab5 = () => {
    window.open(
      "https://www.youtube.com/watch?v=zJIwOBC6JpA",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab6 = () => {
    window.open(
      "https://www.youtube.com/watch?v=mKniHqv7bmw",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab7 = () => {
    window.open(
      "https://www.youtube.com/watch?v=gjKsEpLtxxY",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab8 = () => {
    window.open(
      "https://www.youtube.com/watch?v=SC6lXJ0HVS4",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab9 = () => {
    window.open(
      "https://www.youtube.com/watch?v=SDaspsmMFzU",
      "_blank",
      "width=800,height=600"
    );
  };
  const tab10 = () => {
    window.open(
      "https://www.youtube.com/watch?v=z--np5BHRtI",
      "_blank",
      "width=800,height=600"
    );
  };
  return (
    <>
      <h1>Redirect</h1>
      <div>
        {" "}
        <div>
          <button
            onClick={() => {
              tab1();
            }}
          >
            Open paly 1
          </button>
          <button
            onClick={() => {
              tab2();
            }}
          >
            Open paly 2
          </button>{" "}
          <button
            onClick={() => {
              tab3();
            }}
          >
            Open paly 3
          </button>{" "}
          <button
            onClick={() => {
              tab4();
            }}
          >
            Open paly 4
          </button>{" "}
          <button
            onClick={() => {
              tab5();
            }}
          >
            Open paly 5
          </button>{" "}
          <button
            onClick={() => {
              tab6();
            }}
          >
            Open paly 6
          </button>{" "}
          <button
            onClick={() => {
              tab7();
            }}
          >
            Open paly 7
          </button>{" "}
          <button
            onClick={() => {
              tab8();
            }}
          >
            Open paly 8
          </button>{" "}
          <button
            onClick={() => {
              tab9();
            }}
          >
            Open paly 9
          </button>{" "}
          <button
            onClick={() => {
              tab10();
            }}
          >
            Open paly 10
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default Redirect;
