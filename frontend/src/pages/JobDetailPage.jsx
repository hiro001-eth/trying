import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {
  const [job, setJob] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const { data } = await axios.get(`/api/jobs/${id}`);
      setJob(data);
    };
    fetchJob();
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700">{job.title}</h3>
      <div className="mt-8">
        <div className="p-6 bg-white rounded-md shadow-md">
          <h4 className="text-xl font-semibold text-gray-700">{job.title}</h4>
          <p className="mt-2 text-gray-600">{job.description}</p>
          <div className="mt-4">
            <span className="font-bold">Country:</span> {job.country}
          </div>
          <div>
            <span className="font-bold">Job Type:</span> {job.job_type}
          </div>
          <div>
            <span className="font-bold">Status:</span> {job.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
