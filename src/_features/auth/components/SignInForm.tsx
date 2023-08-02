import Link from "next/link";
import { MyInput } from "@/components/ui";
import { useState } from "react";

interface IProps {
  onLogin: (data: any) => void;
}

const SignInForm: React.FC<IProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHanlder = (e: React.FormEvent) => {
    e.preventDefault();

    props.onLogin({ username, password });
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
      <div className="w-full rounded-lg border bg-white shadow  sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-900  md:text-xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={submitHanlder}>
            <MyInput
              id="username"
              label="Username:"
              type="text"
              placeholder="MrRobot"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <MyInput
              id="password"
              label="Password:"
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border
                       border-gray-300 bg-gray-50"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="#"
                className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="focus:ring-primary-300 w-full rounded-lg bg-blue-400 px-5 py-2.5 text-center text-sm 
                         font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-4">
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500">
              Don’t have an account yet?{" "}
              <Link
                href="#"
                className="text-primary-600 dark:text-primary-500 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
