import React, { useState } from 'react';
import { Team as TeamType, User } from '../types';

const Team: React.FC = () => {
  // Mock team data
  const [team, setTeam] = useState<TeamType>({
    id: '1',
    name: 'Security Team',
    members: [
      {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'admin',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=4C1D95&color=fff'
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'user',
        avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=0D8ABC&color=fff'
      },
      {
        id: '3',
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        role: 'user',
        avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=1F9D55&color=fff'
      },
      {
        id: '4',
        name: 'Sarah Williams',
        email: 'sarah.williams@example.com',
        role: 'viewer',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=DD6B20&color=fff'
      }
    ],
    repositories: ['frontend-app', 'backend-api', 'auth-service', 'data-processor']
  });
  
  // State for invite form
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('user');
  const [isInviting, setIsInviting] = useState(false);
  const [inviteSuccess, setInviteSuccess] = useState(false);
  
  // Handle invite form submission
  const handleInvite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsInviting(true);
    setInviteSuccess(false);
    
    try {
      // In a real app, you would call an API to send the invitation
      // For demo purposes, we'll just simulate a successful invitation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      setInviteSuccess(true);
      
      // Clear form
      setInviteEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setInviteSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending invitation:', error);
    } finally {
      setIsInviting(false);
    }
  };
  
  // Handle removing a team member
  const handleRemoveMember = async (userId: string) => {
    // In a real app, you would call an API to remove the member
    // For demo purposes, we'll just update the local state
    setTeam(prev => ({
      ...prev,
      members: prev.members.filter(member => member.id !== userId)
    }));
  };
  
  // Get role badge color
  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'user':
        return 'bg-blue-100 text-blue-800';
      case 'viewer':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Team Management</h1>
          <p className="mt-1 text-gray-500">Manage your team members and their access to repositories.</p>
        </div>
      </div>
      
      {/* Team Overview */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Team Overview</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Team Name</dt>
              <dd className="mt-1 text-sm text-gray-900">{team.name}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Members</dt>
              <dd className="mt-1 text-sm text-gray-900">{team.members.length}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Repositories</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <div className="flex flex-wrap gap-2">
                  {team.repositories.map((repo, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                      {repo}
                    </span>
                  ))}
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Invite Member */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Invite Team Member</h2>
          <p className="mt-1 text-sm text-gray-500">Invite a new member to join your team.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          {inviteSuccess && (
            <div className="mb-4 bg-green-50 border-l-4 border-green-400 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    Invitation sent successfully.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleInvite} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                    required
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    name="role"
                    value={inviteRole}
                    onChange={(e) => setInviteRole(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="viewer">Viewer</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                disabled={isInviting}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {isInviting ? 'Sending Invitation...' : 'Send Invitation'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Team Members */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Team Members</h2>
          <p className="mt-1 text-sm text-gray-500">Manage your team members and their roles.</p>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {team.members.map((member) => (
              <li key={member.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleBadgeColor(member.role)}`}>
                      {member.role}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500"
                        onClick={() => {
                          // In a real app, you would open a modal to edit the member
                          alert(`Edit ${member.name}`);
                        }}
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="text-red-400 hover:text-red-500"
                        onClick={() => handleRemoveMember(member.id)}
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Team;
