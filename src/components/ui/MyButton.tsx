interface IProps extends React.ButtonHTMLAttributes<any> {}

const MyButton: React.FC<IProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="focus:ring-primary-300 w-full rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm 
               font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4">
      {children}
    </button>
  );
};

export default MyButton;
