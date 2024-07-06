
interface SpaceProps {
  margin?: string;
  height?: string;
}

export function Space({ margin = "0px", height = "0px" }: SpaceProps) {
  return <div style={{ margin, height }} />;
}
