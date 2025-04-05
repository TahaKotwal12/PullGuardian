import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Repository as RepositoryType, SecurityIssue } from '../types';

const Repository: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock repository data
  const repository: RepositoryType = {
    id: id || '1',
    name: 'backend-api',
    owner: 'acme-org',
    description: 'Core API services for the ACME platform',
    securityScore: 78,
    lastScan: '2025-04-03T14:15:00Z',
    issues: 5,
    vulnerabilities: 2
  };
  
  // Mock security issues
  const securityIssues: SecurityIssue[] = [
    {
      id: '1',
      title: 'Insecure Direct Object Reference',
      description: 'API endpoints are vulnerable to IDOR attacks, allowing unauthorized access to resources.',
      severity: 'high',
      file: 'src/controllers/user.controller.js',
      line: 42,
      status: 'open'
    },
    {
      id: '2',
      title: 'SQL Injection Vulnerability',
      description: 'User input is not properly sanitized before being used in SQL queries.',
      severity: 'critical',
      file: 'src/services/data.service.js',
      line: 87,
      status: 'open'
    },
    {
      id: '3',
      title: 'Weak Password Policy',
      description: 'Password requirements do not enforce sufficient complexity.',
      severity: 'medium',
      file: 'src/utils/validation.js',
      line: 23,
      status: 'resolved'
    },
    {
      id: '4',
      title: 'Missing Rate Limiting',
      description: 'API endpoints do not implement rate limiting, making them vulnerable to brute force attacks.',
      severity: 'medium',
      file: 'src/middleware/auth.middleware.js',
      line: 15,
      status: 'open'
    },
    {
      id: '5',
      title: 'Outdated Dependencies',
      description: 'Several npm packages have known vulnerabilities and need to be updated.',
      severity: 'low',
      file: 'package.json',
      line: 10,
      status: 'open'
    }
  ];
  
  // Mock pull requests
  const pullRequests = [
    {
      id: '101',
      title: 'Fix authentication bug',
      author: 'john.smith',
      createdAt: '2025-04-03T11:45:00Z',
      status: 'open',
      securityIssues: 1
    },
    {
      id: '102',
      title: 'Add rate limiting to API endpoints',
      author: 'jane.doe',
      createdAt: '2025-04-02T09:30:00Z',
      status: 'open',
      securityIssues: 0
    },
    {
      id: '103',
      title: 'Update dependencies to fix vulnerabilities',
      author: 'alex.johnson',
      createdAt: '2025-04-01T14:20:00Z',
      status: 'merged',
      securityIssues: 0
    }
  ];
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  // Get severity badge color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-red-100 text-red-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'false-positive':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Get security score color
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{repository.name}</h1>
          <p className="text-gray-500">{repository.owner} / {repository.description}</p>
        </div>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span className="mr-2">🔄</span>
            Refresh
          </button>
          <button className="px-4 py-2 bg-blue-600 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <span className="mr-2">🔍</span>
            Scan Now
          </button>
        </div>
      </div>
      
      {/* Repository overview */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Repository Overview</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Security Score</dt>
              <dd className={`mt-1 text-3xl font-semibold ${getScoreColor(repository.securityScore)}`}>
                {repository.securityScore}%
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Last Scan</dt>
              <dd className="mt-1 text-sm text-gray-900">
                {repository.lastScan ? formatDate(repository.lastScan) : 'Never'}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Open Issues</dt>
              <dd className="mt-1 text-sm text-gray-900">{repository.issues}</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Vulnerabilities</dt>
              <dd className="mt-1 text-sm text-gray-900">{repository.vulnerabilities}</dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* Security Issues */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Security Issues</h2>
          <div className="flex space-x-2">
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All Severities</option>
              <option>Critical</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
              <option>All Statuses</option>
              <option>Open</option>
              <option>Resolved</option>
              <option>False Positive</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <ul className="divide-y divide-gray-200">
            {securityIssues.map((issue) => (
              <li key={issue.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {issue.severity === 'critical' || issue.severity === 'high' ? (
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : (
                        <svg className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">{issue.title}</h3>
                      <div className="mt-1 flex items-center">
                        <span className="text-xs text-gray-500">{issue.file}:{issue.line}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getSeverityColor(issue.severity)}`}>
                      {issue.severity}
                    </span>
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(issue.status)}`}>
                      {issue.status}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm text-blue-600 hover:text-blue-900">View Details</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Pull Requests */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Pull Requests</h2>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Security Issues
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pullRequests.map((pr) => (
                <tr key={pr.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {pr.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(pr.createdAt)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      pr.status === 'open' 
                        ? 'bg-green-100 text-green-800' 
                        : pr.status === 'merged' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {pr.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {pr.securityIssues > 0 ? (
                      <span className="text-red-600 font-medium">{pr.securityIssues}</span>
                    ) : (
                      <span className="text-green-600">None</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <Link to={`/pull-request/${pr.id}`} className="text-blue-600 hover:text-blue-900">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Repository;
