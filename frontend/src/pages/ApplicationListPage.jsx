import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const ApplicationListPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const { data } = await axios.get('/api/applications');
      setApplications(data);
    };
    fetchApplications();

    const socket = io('http://localhost:5000');
    socket.on('new_application', (application) => {
      setApplications((prevApplications) => [application, ...prevApplications]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-medium text-gray-700">Applications</h3>
      <div className="mt-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Candidate
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Job
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td className="px-5 py-5 bg-white border-b border-gray-200">
                      {application.candidate_name}
                    </td>
                    <td className="px-5 py-5 bg-white border-b border-gray-200">
                      {application.job_id}
                    </td>
                    <td className="px-5 py-5 bg-white border-b border-gray-200">
                      {application.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationListPage;
