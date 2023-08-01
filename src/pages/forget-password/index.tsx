import EmailIcon from "../../assets/images/auth/email.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input } from "../../components";
import { ROUTES } from "../../constants/routes";

const ForgetPassword = () => {
  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Forget your password</p>
      <h1 className="font-bold text-4xl mt-2">Forget Password</h1>
      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>Please enter your email address below
        you will receive a verification link</p>
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
        <div className="mt-4
                      xl:mt-12">
          <Button variant="primary" onClick={() => null}>
            Continue
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
            Remembered your password?
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.LOGIN}>Login</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword