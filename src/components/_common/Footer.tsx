import { FC } from "react";

interface IProps {}

const Footer: FC<IProps> = (props) => {
  return (
    <footer className="w-full bg-gray-600">
      <div className="container mx-auto">
        <div className="py-5">Footer</div>
      </div>
    </footer>
  );
};

export default Footer;
