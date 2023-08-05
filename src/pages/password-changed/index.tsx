import { useMutation } from "@tanstack/react-query";
import { IUseAuthMutation, resetPassword } from "../../api/auth";
import { Button, Loader } from "../../components";
import { useLocation } from 'react-router-dom';

const PasswordChanged = () => {
  const location = useLocation();
  const { mutate, isLoading, isError, error, isSuccess }: IUseAuthMutation = useMutation({
    mutationFn: resetPassword
  });

  const handleResendVerificationLink = () => {
    mutate({
      email: location.state.email,
      password: location.state.password,
    })
  }
  return (
    <div className="w-full xl:basis-6/12 relative">
      <p className="text-sm text-secondary-color">Password changed successfully</p>
      <h1 className="font-bold text-4xl mt-2">Password Changed</h1>
      {isError && <div
        className="break-words rounded-b-lg bg-danger-100 px-4 py-4 text-danger-700 mt-4">
       {error?.response?.data.data?.error}
      </div>}
      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>
        We have sent a verification link to your
        email address
        <span className="text-danger-color font-bold inline-block ml-1">
          {location.state.email}
        </span>
      </p>

      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>Just click on the link in your mail box &
        all done.</p>
      <div className="mt-4
                      xl:mt-6">
        <Button variant="danger" onClick={handleResendVerificationLink}>
          {isLoading ? <Loader /> : "Resend Link"}
        </Button>
      </div>
      
      
      {
         isSuccess && <div className="mt-40 absolute w-full top-full left-0
                         xl:-ml-80
                         2xl:mt-96">
          <Button variant="danger" onClick={() => null}>
            Verification Link Sent Successfully
          </Button>
        </div>
      }


    </div>
  )
}

export default PasswordChanged