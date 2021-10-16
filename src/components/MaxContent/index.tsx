import { Props } from "./types";

const MaxContent = ({ className = "", ...props }: Props) => (
  <div className={`max-w-sm mx-auto p-4 ${className}`} {...props} />
);

export default MaxContent;
