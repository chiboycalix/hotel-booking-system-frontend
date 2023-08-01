import { Button } from "../../components";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from 'react-router-dom';

const PasswordChanged = () => {
  const navigate = useNavigate();

  const resendLink = true;
  return (
    <div className="w-full xl:basis-6/12 relative">
      <p className="text-sm text-secondary-color">Password changed successfully</p>
      <h1 className="font-bold text-4xl mt-2">Password Changed</h1>

      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>
        We have sent a verification link to your
        email address
        <span className="text-danger-color font-bold inline-block ml-1">
          admin22@gmail.com
        </span>
      </p>

      <p className='text-sm text-secondary-color mt-8 xl:w-3/4'>Just click on the link in your mail box &
        all done.</p>

      <div className="mt-4
                      xl:mt-12">
        <Button variant="primary" onClick={() => navigate(ROUTES.LOGIN)}>
          Back to Login
        </Button>
      </div>
      <div className="mt-4
                      xl:mt-6">
        <Button variant="danger" onClick={() => null}>
          Resend Link
        </Button>
      </div>
      {
        resendLink && <div className="mt-40 absolute w-full top-full left-0
2xl:mt-6 xl:-ml-80">
          <Button variant="danger" onClick={() => null}>
            Verification Link Sent Successfully
          </Button>
        </div>
      }


    </div>
  )
}

export default PasswordChanged