import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <img src="err.gif" alt="error gif" />
      <h1>Error Stutas {err.status}</h1>
      <p>{err.statusText || "Unknown error"}</p>
      <Link to="/">
        <button className="btn btn-success py-3 px-4">GO Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
