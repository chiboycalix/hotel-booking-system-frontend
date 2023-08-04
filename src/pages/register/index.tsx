import React from "react";
import { useMutation } from "@tanstack/react-query";

import EmailIcon from "../../assets/images/auth/email.svg";
import LockIcon from "../../assets/images/auth/lock.svg";
import GoogleIcon from "../../assets/images/auth/google.svg";
import FacebookIcon from "../../assets/images/auth/facebook.svg";

import { Button, Divider, Input, Loader } from "../../components";
import { ROUTES } from "../../constants/routes";
import { IUseAuthMutation, register } from "../../api/auth";
import { generalHelpers } from "../../utils";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = React.useState({ email: "", password: "", confirm_password: "" })
  const [emailError, setEmailError] = React.useState<string | null>(null);
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState<string | null>(null);

  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: register, onSuccess({ data }) {
      localStorage.setItem("hotelBookSystemJWT", data.data.token)
    }
  });

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setFormValue({
      ...formValue,
      [name]: value
    })
    if (name === 'email') {
      setEmailError(null);
    }
    if (name === 'password') {
      setPasswordError(null)
    }
    if (name === 'confirm_password') {
      setConfirmPasswordError(null);
    }
  }
  const handleRegisterUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (formValue.email.trim() === '') {
      setEmailError('Email cannot be empty.');
      return
    }

    if (formValue.email.trim() !== '' && !generalHelpers.isEmailValid(formValue.email)) {
      setEmailError('Please enter a valid email address.');
      return
    }

    if (formValue.password.trim() === '') {
      setPasswordError('Password cannot be empty.');
      return
    }

    if (formValue.confirm_password.trim() === '') {
      setConfirmPasswordError('password cannot be empty')
      return
    }

    if (formValue.password !== formValue.confirm_password) {
      setConfirmPasswordError('Passwords do not match.')
      return
    }

    mutate({
      email: formValue.email,
      password: formValue.password,
    })
  }

  React.useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.DASHBOARD)
    }
    if (isError) {
      navigate(ROUTES.REGISTER)
    }
  }, [isSuccess, isError, navigate])

  return (
    <div className="w-full xl:basis-6/12">
      <p className="text-sm text-secondary-color">Create new account</p>
      <h1 className="font-bold text-4xl mt-2">Registration</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
       {error?.response?.data.data?.error}
      </div>}
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
            hasError={!!emailError}
          />
          {!!emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
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
            hasError={!!passwordError}
          />
          {!!passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
        </div>
        <div className="mt-10">
          <Input
            name="confirm_password"
            id="confirm_password"
            placeHolder="Confirm Password"
            type="text"
            onChange={handleChange}
            isAuthInput
            hasIcon
            Icon={LockIcon}
            hasError={!!confirmPasswordError}
          />
          {!!confirmPasswordError && <p className="text-red-500 text-xs mt-1">{confirmPasswordError}</p>}
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