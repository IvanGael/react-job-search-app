// JobListings.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import CircularProgressIndicator from './CircularProgressIndicator';

const JobListings = () => {
    const [jobs, setJobs] = useState([]);
    const [visibleJobs, setVisibleJobs] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://himalayas.app/jobs/api?limit=100');
                setJobs(response.data.jobs);
            } catch (error) {
                console.error('Error fetching job data:', error);
            }
        };

        fetchJobs();
    }, []);

    const loadMoreJobs = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 5);
        }, 1000);
    };

    const filteredJobs = jobs.filter(
        (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title or company name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div>
                <h4>{filteredJobs.length} jobs found</h4>
            </div>
            <div className="job-listings">
                {filteredJobs.slice(0, visibleJobs).map((job) => (
                    <JobCard key={job.guid} job={job} />
                ))}
                {
                    filteredJobs.length === 0 ?
                        <h3>No job found</h3> : null
                }
            </div>
            <div className='justify-circular-progress-indicator'>
                {
                    loading === true &&
                    <CircularProgressIndicator size={30} color="crimson" strokeWidth={4} />
                }
            </div>
            {visibleJobs < filteredJobs.length && (
                <div className="justify-load-more-button">
                    <button onClick={loadMoreJobs} className="load-more-button">
                        Load More
                    </button>
                </div>
            )}

        </>
    );
};

export default JobListings;
