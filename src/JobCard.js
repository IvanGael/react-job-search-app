// JobCard.js
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <img src={job.image} alt={`${job.title} at ${job.companyName}`} />
      <div className="job-details">
        <h2>{job.title}</h2>
        <p>{job.excerpt}</p>
        <p>Salary: ${job.minSalary} - ${job.maxSalary}</p>
        <p>Company: {job.companyName}</p>
        <a href={job.applicationLink} target="_blank" rel="noopener noreferrer">
          Apply now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
