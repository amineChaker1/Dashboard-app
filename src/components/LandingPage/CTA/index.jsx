import React from "react";

const CTA = () => {
  return (
    <div className="relative isolate overflow-hidden py-16 bg-primary px-6 pt-16 sm:px-16  lg:flex lg:gap-x-20 lg:px-24 ">
      <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Boost your studying and work with our platform
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300 ">
          download all the files you need for your subjects or submit your work
          and get payed for it
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
          <a
            href="#"
            class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Start Here
          </a>
          <a href="#" class="text-base font-semibold leading-7 text-white">
            Download the App <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div class="relative mt-16 h-80 lg:mt-8">
        <img
          class="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
          src="/src/assets/App.png"
          alt="App screenshot"
          width="1824"
          height="1080"
        />
      </div>
    </div>
  );
};

export default CTA;
