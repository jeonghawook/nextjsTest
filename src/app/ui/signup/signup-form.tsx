import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import Signup from '@/app/(auth)/signup/page';

export default function SignupForm() {
  const [errorMessage, dispatch] = useFormState(login, undefined);

  return (<form action={dispatch}>
    <div className="flex flex-col items-center justify-center h-screen">

      <label className="relative cursor-pointer">
        <input type="text" placeholder="Input"
               className="py-[9px] pl-3 text-lg text-black
                     border-black border-2 rounded-lg
                     border-opacity-50 outline-none focus:border-blue-300
                     placeholder-gray-300 placeholder-opacity-0 transition duration-200" />
        <span
          className="absolute left-2 top-0.5 text-lg text-black py-[9px]
                 text-opacity-80 transition duration-200
                 input-text">Email</span>
      </label>
      <div className="py-2"></div>

      <label className="relative cursor-pointer">
        <input type="password" placeholder="Input"
               className="py-[9px] pl-3 text-lg text-black
                     border-black border-2 rounded-lg
                     border-opacity-50 outline-none focus:border-blue-300
                     placeholder-gray-300 placeholder-opacity-0 transition duration-200" />
        <span
          className="absolute left-2 top-0.5 text-lg text-black py-[9px]
                 text-opacity-80 transition duration-200
                 input-text">Password</span>
      </label>

      <div className="py-2"></div>
      <label className="relative cursor-pointer">
        <input type="text" placeholder="Input"
               className="py-[9px] pl-3 text-lg text-black
                     border-black border-2 rounded-lg
                     border-opacity-50 outline-none focus:border-blue-300
                     placeholder-gray-300 placeholder-opacity-0 transition duration-200" />
        <span
          className="absolute left-2 top-0.5 text-lg text-black py-[9px]
                 text-opacity-80 transition duration-200
                 input-text">Name</span>
      </label>
      <div className="py-5">
      <SignupButton/>
      </div>
    </div>

  </form>);

  function SignupButton(){
    const {pending} = useFormStatus();
    return(
      <Button aria-disabled= {pending}>SignUp</Button>
    )
  }
  }