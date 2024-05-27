import { useState } from "react";

const usePasswordToggle = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePassVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPassVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const PassIcon = passwordVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      onClick={togglePassVisibility}
      className="relative bottom-7 left-[19rem] z-20 cursor-pointer"
    >
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
        <path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path>
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      onClick={togglePassVisibility}
      className="relative bottom-7 left-[19rem] z-20 cursor-pointer"
    >
      <g fill="none" stroke="white" strokeLinecap="round" strokeWidth={2}>
        <path
          strokeLinejoin="round"
          d="M10.73 5.073A10.96 10.96 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.595 11.595 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"
        ></path>
        <path d="m4 4l16 16"></path>
      </g>
    </svg>
  );
  const ConfirmPassIcon = confirmPasswordVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      onClick={toggleConfirmPassVisibility}
      className="relative bottom-7 left-[19rem] z-20 cursor-pointer"
    >
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></path>
        <path d="M2 12c1.6-4.097 5.336-7 10-7s8.4 2.903 10 7c-1.6 4.097-5.336 7-10 7s-8.4-2.903-10-7"></path>
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      onClick={toggleConfirmPassVisibility}
      className="relative bottom-7 left-[19rem] z-20 cursor-pointer"
    >
      <g fill="none" stroke="white" strokeLinecap="round" strokeWidth={2}>
        <path
          strokeLinejoin="round"
          d="M10.73 5.073A10.96 10.96 0 0 1 12 5c4.664 0 8.4 2.903 10 7a11.595 11.595 0 0 1-1.555 2.788M6.52 6.519C4.48 7.764 2.9 9.693 2 12c1.6 4.097 5.336 7 10 7a10.44 10.44 0 0 0 5.48-1.52m-7.6-7.6a3 3 0 1 0 4.243 4.243"
        ></path>
        <path d="m4 4l16 16"></path>
      </g>
    </svg>
  );

  const PassInputType = passwordVisible ? "text" : "password";
  const ConfirmPassInputType = confirmPasswordVisible ? "text" : "password";

  return [PassInputType, PassIcon, ConfirmPassInputType, ConfirmPassIcon];
};

export default usePasswordToggle;
