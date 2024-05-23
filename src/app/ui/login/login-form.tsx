'use client';

import { lusitana } from "@/app/ui/fonts";

// { Button } from "@/app/ui/button";
import { useFormState, useFormStatus } from 'react-dom';
import { login } from '@/app/lib/actions';
import { Button } from '@/app/ui/button';
import Link from "next/link";

export default function LoginForm() {
    // @ts-ignore
    const [errorMessage, dispatch] = useFormState(login, undefined);


    return (
      <form action={dispatch} >
          <div className="flex flex-col items-center justify-center h-screen">
              <div className="w-full max-w-xs">
                  <div>
                      <label
                        className="block text-xl font-medium text-gray-800"
                        htmlFor="email"
                      >
                          Email
                      </label>
                      <div className="relative">
                          <input
                            className="block w-full rounded-md py-[9px]
                             pl-3 text-lg outline-2 placeholder:text-gray-500
                              border-2 border-blue-300"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            required
                          />
                      </div>
                  </div>
                  <div className="mt-4">
                      <label
                        className="block text-xl font-medium text-gray-800"
                        htmlFor="password"
                      >
                          Password
                      </label>
                      <div className="relative">
                          <input
                            className="peer block w-full rounded-md border-2 border-blue-300 py-[9px] pl-3 text-lg outline-2 placeholder:text-gray-500"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            required
                          />
                      </div>
                  </div>
              </div>
              <div className="pt-5">
              <LoginButton />
              </div>
              <div className="pt-5">
                  <Link href="/signup">   no account? <span className="text-blue-300">signup</span> now! </Link>
              </div>
                  <div
                className="flex h-8 items-end space-x-1"
                aria-live="polite"
                aria-atomic="true"
              >
                  {errorMessage && (
                    <>
                        <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                  )}
              </div>
          </div>
      </form>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (

      <Button aria-disabled={pending}>
          Log in
      </Button>
    );
}