type Props = {
  children: string;
};

const Button = ({ children }: Props) => {
  return <button className="default-btn bg-primary hover:bg-primary">{children}</button>;
};

export default Button;
