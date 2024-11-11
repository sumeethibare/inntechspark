'use client';
import { useState, ChangeEvent } from 'react';
import { EnvelopeIcon, GlobeAsiaAustraliaIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const Form = () => {
  const [messageHeight, setMessageHeight] = useState<string>('auto');

  // Update the height of the textarea on input
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const textarea = event.target;
    setMessageHeight(`${textarea.scrollHeight + 3}px`); // Adjust the 3px based on your design needs
  };

  return (
    <div className="bg-zinc-50">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-black font-semibold text-2xl md:text-4xl md:leading-tight">Form us</h2>
          <p className="mt-1 text-neutral-400">Whatever your goal - we will get you there.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Name"
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Email"
                  />
                  <label
                    htmlFor="hs-tac-input-email"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="Phone"
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    style={{ height: messageHeight }}
                    onInput={handleInput}
                    className="peer p-4 block w-full bg-neutral-100 border-transparent rounded-lg text-sm text-black placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="This is a textarea placeholder"
                  />
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-neutral-400 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-neutral-400"
                  >
                    Tell us about your project
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">All fields are required</p>

                <p className="mt-5">
                  <a
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-black font-medium text-sm text-neutral-100 rounded-full focus:outline-none"
                    href="#"
                  >
                    Submit
                    <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition ease-in-out duration-150" />
                  </a>
                </p>
              </div>
            </form>
          </div>

          <div className="space-y-14">
            <div className="flex gap-x-5">
              <GlobeAsiaAustraliaIcon className="shrink-0 size-6 text-neutral-500" />
              <div className="grow">
                <h4 className="text-black font-semibold">Our address</h4>
                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  Kalaburagi
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <EnvelopeIcon className="shrink-0 size-6 text-neutral-500" />
              <div className="grow">
                <h4 className="text-black font-semibold">Email us:</h4>
                <a
                  className="mt-1 text-neutral-400 text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200"
                  href="mailto:Inntechspark@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inntechspark@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
