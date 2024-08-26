import React from 'react';
import { useRouteError } from 'react-router';

const Error = () => {
  const err =  useRouteError();

  return (
    <div>
      <h1>Error</h1>
      <h2>veerji dhakka na karo veerji </h2>
      <h2>kuch gadbad h tere code mai  </h2>
      <h3>{err.status}: {err.statusText}</h3>

    </div>
  );
}

export default Error;