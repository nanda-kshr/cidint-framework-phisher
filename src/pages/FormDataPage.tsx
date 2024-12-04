import React, { useState } from 'react';
import { FormSubmission, FormEntry } from '../types/types';


const formEntries: FormEntry[] = [
  { id: 1, username: 'johndoe', email: 'johndoe@example.com', password: 'password123' },
  { id: 2, username: 'janedoe', email: 'janedoe@example.com', password: 'password456' },
  { id: 3, username: 'alice', email: 'alice@example.com', password: 'password789' }
];


export const FormDataPage: React.FC = () => {
  const formSubmissions: FormSubmission[] = [
    { id: 1, website: 'Portfolio', entries: 42, lastSubmission: '2 hours ago' },
    { id: 2, website: 'Contact Form', entries: 18, lastSubmission: '1 day ago' },
    { id: 3, website: 'Blog Comments', entries: 76, lastSubmission: '3 hours ago' }
  ];

  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleViewEntries = (submission: FormSubmission) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 pt-24">
      {isModalOpen && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl p-8 w-96 shadow-2xl border border-green-600/20">
            <h3 className="text-2xl font-bold mb-6 text-green-400 text-center">Form Entries - {selectedSubmission.website}</h3>
            <table className="w-full mb-6">
              <thead>
                <tr className="border-b border-green-600/20">
                  <th className="p-3 text-left">Username/Email</th>
                  <th className="p-3 text-left">Password</th>
                </tr>
              </thead>
              <tbody>
                {formEntries.map(entry => (
                  <tr key={entry.id} className="hover:bg-black/20 transition">
                    <td className="p-3">{entry.username} / {entry.email}</td>
                    <td className="p-3">{entry.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button 
              onClick={handleCloseModal} 
              className="w-full bg-red-600 hover:bg-red-700 py-2 rounded-lg mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="bg-gray-800/60 backdrop-blur-xl p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6 text-green-400">Form Submissions</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-green-600/20">
              <th className="p-3 text-left">Website</th>
              <th className="p-3 text-left">Total Entries</th>
              <th className="p-3 text-left">Last Submission</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {formSubmissions.map(submission => (
              <tr key={submission.id} className="hover:bg-black/20 transition">
                <td className="p-3">{submission.website}</td>
                <td className="p-3">{submission.entries}</td>
                <td className="p-3">{submission.lastSubmission}</td>
                <td className="p-3 text-right">
                  <button 
                    onClick={() => handleViewEntries(submission)} 
                    className="bg-green-600/20 hover:bg-green-600/40 px-4 py-2 rounded-lg"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
