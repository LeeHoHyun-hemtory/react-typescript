import { css } from "styled-components";

const mixin = {
  flexSet: (
    justifyContent = "center",
    alignItems = "center",
    flexDirection = "column"
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
};

export default mixin;