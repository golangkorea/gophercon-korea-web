declare module "*.css";
declare module "*.scss";

interface Vanta {
  GLOBE: (options: unknown) => void;
}

declare global {
  let VANTA: {
    GLOBE: (options: unknown) => void;
  };
}

declare var VANTA: Vanta;
