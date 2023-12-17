import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Spendings = ({ children }: Props) => {
  return <div>
    {children}
  </div>;
};


export default Spendings
