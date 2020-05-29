import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      softBlue: string;
      softRed: string;
      rgbSoftRed: string;
      rgbSoftBlue: string;
      grayishBlue: string;
      darkBlue: string;
      white: string;
    };
  }
}
