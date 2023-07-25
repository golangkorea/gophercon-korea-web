declare module "*.css";
declare module "*.scss";

declare global {
  let VANTA: {
    GLOBE: (options: unknown) => void;
  };
}
