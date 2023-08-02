import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { authState } from "@/store/auth.state";

import SignInForm from "@/_features/auth/components/SignInForm";

const Page = () => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authState);

  const loginHandler = (data: any) => {
    const { username, password } = data || {};

    setAuth({ user: { username }, initialized: true });
    localStorage.setItem("token", "Bearer token");

    router.replace("/");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div>
        <SignInForm onLogin={loginHandler} />
      </div>
    </div>
  );
};

export default Page;
