import TopLeftImage from "../../assets/images/auth/top-left.svg";
import BottomLeftImage from "../../assets/images/auth/bottom-left.svg";
import TopMiddle from "../../assets/images/auth/top-middle.svg";
import BottomRight from "../../assets/images/auth/bottom-right.svg";
import Illustration from "../../assets/images/auth/Illustration.svg";
import EmailIcon from "../../assets/images/auth/email.svg";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input } from "../../components";
import { ROUTES } from "../../constants/routes";

const LoginPage = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0">
        <img src={TopLeftImage} alt="TopLeftImage" />
      </div>
      <div className="hidden absolute bottom-0 left-0 
                      xl:block">
        <img src={BottomLeftImage} alt="BottomLeftImage" />
      </div>
      <div className="absolute top-0 left-1/4">
        <img src={TopMiddle} alt="TopMiddle" />
      </div>
      <div className="hidden absolute bottom-0 right-0 xl:block">
        <img src={BottomRight} alt="BottomRight" />
      </div>
      <div
        className="absolute flex flex-col justify-center items-center gap-20 
                   top-10 left-10 right-10
                   sm:left-32 sm:right-32
                   md:left-40 md:right-40
                   lg:left-72 lg:right-72
                   xl:flex-row xl:gap-40 xl:left-40 xl:right-40 xl:top-40"
      >
        <div className="hidden
          xl:block
          xl:basis-6/12
        ">
          <img src={Illustration} alt="Illustration" />
        </div>
        <div className="w-full xl:basis-6/12">
          <p className="text-sm text-secondary-color">Login to your account</p>
          <h1 className="font-bold text-4xl mt-2">Welcome Back!</h1>

          <form className="mt-10 w-full relative">
            <div>
              <Input
                name="email"
                id="email"
                placeHolder="Email Address"
                type="text"
                onChange={() => null}
                isAuthInput
                hasIcon
                Icon={EmailIcon}
              />
            </div>

            <div className="mt-10">
              <Input
                name="password"
                id="password"
                placeHolder="Password"
                type="text"
                onChange={() => null}
                isAuthInput
                hasIcon
                Icon={LockIcon}
              />
            </div>
            <div className="mt-2 text-end">
              <a
                href={ROUTES.FORGET_PASSWORD}
                className="text-end text-danger-color text-sm font-bold"
              >
                Forget Password?
              </a>
            </div>
            <div className="mt-4
                            xl:mt-12">
              <Button variant="primary" onClick={() => null}>
                Login
              </Button>
            </div>
            <div className="flex mt-4 items-center gap-4
              xl:mt-12
            ">
              <Divider />
              <p className="text-sm text-secondary-color">Or</p>
              <Divider />
            </div>

            <div className="mt-4 
                            xl:flex xl:justify-center xl:items-center xl:gap-4 xl:mt-12">
              <div className="xl:basis-6/12">
                <Button
                  onClick={() => null}
                  variant="outline"
                  Icon={GoogleIcon}
                  hasIcon
                >
                  Google
                </Button>
              </div>
              <div className="mt-2 xl:basis-6/12 xl:mt-0">
                <Button
                  onClick={() => null}
                  variant="outline"
                  Icon={FacebookIcon}
                  hasIcon
                >
                  Facebook
                </Button>
              </div>
            </div>
            <div className="text-center mt-4
                            xl:mt-8">
              <p className="text-sm">
                Don't have an account?{" "}
                <span className="text-danger-color font-bold">
                  <a href={ROUTES.REGISTER}>Sign Up</a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
