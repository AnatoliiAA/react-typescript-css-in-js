import { css } from "@emotion/react";

export const global = css`
  body {
    background: linear-gradient(
        185deg,
        rgba(242, 211, 92, 1),
        rgba(242, 211, 92, 0) 70.71%
      ),
      linear-gradient(60deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%),
      linear-gradient(
        336deg,
        rgba(127, 233, 203, 0.8),
        rgba(127, 233, 203, 0) 70.71%
      );
    height: calc(100vh - 20px);
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap");
`;
