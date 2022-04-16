import ReactQueryProvider from "./ReactQueryProvider";

type Props = {
  children: JSX.Element;
};

const Index = ({ children }: Props) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Index;
