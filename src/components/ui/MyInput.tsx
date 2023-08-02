import { FC } from "react";

interface IProps extends React.InputHTMLAttributes<any> {
  label: string;
}

const MyInput: FC<IProps> = ({ id, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        id={id}
        {...rest}
        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300
                 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
      />
    </div>
  );
};

export default MyInput;
