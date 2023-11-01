"use client";

import { Error } from "mongoose";

interface Props {
  error: Error;
  reset: () => void;
}

function ErrorPage({ error, reset }: Props) {
  console.log(error);
  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
}

export default ErrorPage;
