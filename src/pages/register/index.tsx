import { useMutation } from "@tanstack/react-query";

import EmailIcon from "../../assets/images/auth/email.svg";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../constants/routes";
import { IUseLoginMutation, register } from "../../api/auth";
import React from "react";

const Register = () => {
  const [formValue, setFormValue] = React.useState({ email: "", password: "" })
  const { mutate, isLoading, isError, error, isSuccess }: IUseLoginMutation = useMutation({
    mutationFn: register, onSuccess({ data }) {
      localStorage.setItem("hotelBookSystemJWT", data.data.token)
    }
  });

  const handleChange = (event:  React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }
  const handleRegisterUser = (e: React.FormEvent) => {
    e.preventDefault()
    mutate({
      email: formValue.email,
      password: formValue.password,
    });
  }

  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Create new account</p>
      <h1 className="font-bold text-4xl mt-2">Registration</h1>

      <form className="mt-10 w-full relative" onSubmit={handleRegisterUser}>
        <div>
          <Input
            name="email"
            id="email"
            placeHolder="Email Address"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIcon
            Icon={EmailIcon}
            value={formValue.email}
          />
        </div>

        <div className="mt-10">
          <Input
            name="password"
            id="password"
            placeHolder="Password"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIcon
            Icon={LockIcon}
            value={formValue.password}
          />
        </div>
        <div className="mt-10">
          <Input
            name="password"
            id="password"
            placeHolder="Confirm Password"
            type="text"
            onChange={() => null}
            isAuthInput
            hasIcon
            Icon={LockIcon}
          />
        </div>

        <div className="mt-2 text-start">
          <p className="text-sm">
            By signing below, you agree to the
            <span className="text-danger-color font-bold inline-block mx-1">
              <a href={ROUTES.TERMS_OF_USE}>Terms of use</a>
            </span>
            and
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.PRIVACY_NOTICE}>privacy notice</a>
            </span>
          </p>

        </div>
        <div className="mt-4
                      xl:mt-12">
          <Button variant="primary" onClick={() => null}>
            {isLoading ? <Loader /> : "Sign Up"}
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
            Already have an account?
            <span className="text-danger-color font-bold inline-block ml-1">
              <a href={ROUTES.LOGIN}>Login</a>
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Register