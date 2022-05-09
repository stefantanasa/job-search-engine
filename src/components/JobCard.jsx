import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="card d-flex position-relative flex-column">
      <div className="imgContainer">
        <img
          style={{ height: "10rem" }}
          src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        />
      </div>
      <div className="content">
        <h2>{job.title}</h2>
        <Link to={`/${job.company_name}`}>
          <h5>{job.company_name}</h5>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
