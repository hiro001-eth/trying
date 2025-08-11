import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const { data } = await axios.get('/api/jobs');
      setJobs(data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700">Jobs</h3>
      <div className="mt-8">
        <div className="flex justify-end">
          <Link
            to="/admin/jobs/new"
            className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
          >
            Add Job
          </Link>
        </div>
        <div className="mt-6">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Title
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Country
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Job Type
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Status
                    </th>
                    <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td className="px-5 py-5 bg-white border-b border-gray-200">
                        {job.title}
                      </td>
                      <td className="px-5 py-5 bg-white border-b border-gray-200">
                        {job.country}
                      </td>
                      <td className="px-5 py-5 bg-white border-b border-gray-200">
                        {job.job_type}
                      </td>
                      <td className="px-5 py-5 bg-white border-b border-gray-200">
                        {job.status}
                      </td>
                      <td className="px-5 py-5 bg-white border-b border-gray-200">
                        <Link to={`/admin/jobs/${job.id}`}>View</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListPage;
