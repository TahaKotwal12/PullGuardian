import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PullRequest as PullRequestType, SecurityIssue } from '../types';

const PullRequest: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock pull request data
  const pullRequest: PullRequestType = {
    id: id || '101',
    title: 'Fix authentication bug',
    description: 'This PR addresses the authentication vulnerability by implementing proper token validation and expiration checks.',
    author: 'john.smith',
    repository: 'auth-service',
    status: 'open',
    securityIssues: [
      {
        id: '1',
        title: 'JWT Token Not Validated Properly',
        description: 'The JWT signature is not being verified before processing the token payload.',
        severity: 'high',
        file: 'src/middleware/auth.js',
        line: 42,
        status: 'open'
      }
    ],
    createdAt: '2025-04-03T11:45:00Z',
    updatedAt: '2025-04-04T09:30:00Z'
  };
  
  // Mock code changes
  const codeChanges = [
    {
      file: 'src/middleware/auth.js',
      additions: 15,
      deletions: 5,
      changes: [
        {
          type: 'context',
          content: 'const jwt = require("jsonwebtoken");',
          lineNumber: 1
        },
        {
          type: 'context',
          content: 'const config = require("../config");',
          lineNumber: 2
        },
        {
          type: 'context',
          content: '',
          lineNumber: 3
        },
        {
          type: 'deletion',
          content: 'const verifyToken = (req, res, next) => {',
          lineNumber: 4
        },
        {
          type: 'deletion',
          content: '  const token = req.headers["x-access-token"];',
          lineNumber: 5
        },
        {
          type: 'addition',
          content: 'const verifyToken = (req, res, next) => {',
          lineNumber: 4
        },
        {
          type: 'addition',
          content: '  // Get token from Authorization header',
          lineNumber: 5
        },
        {
          type: 'addition',
          content: '  const authHeader = req.headers.authorization;',
          lineNumber: 6
        },
        {
          type: 'addition',
          content: '  if (!authHeader || !authHeader.startsWith("Bearer ")) {',
          lineNumber: 7
        },
        {
          type: 'addition',
          content: '    return res.status(401).json({ message: "No token provided" });',
          lineNumber: 8
        },
        {
          type: 'addition',
          content: '  }',
          lineNumber: 9
        },
        {
          type: 'addition',
          content: '',
          lineNumber: 10
        },
        {
          type: 'addition',
          content: '  const token = authHeader.split(" ")[1];',
          lineNumber: 11
        },
        {
          type: 'context',
          content: '',
          lineNumber: 12
        },
        {
          type: 'context',
          content: '  if (!token) {',
          lineNumber: 13
        },
        {
          type: 'context',
          content: '    return res.status(401).json({ message: "No token provided" });',
          lineNumber: 14
        },
        {
          type: 'context',
          content: '  }',
          lineNumber: 15
        },
        {
          type: 'context',
          content: '',
          lineNumber: 16
        },
        {
          type: 'deletion',
          content: '  jwt.verify(token, config.secret, (err, decoded) => {',
          lineNumber: 17
        },
        {
          type: 'deletion',
          content: '    if (err) {',
          lineNumber: 18
        },
        {
          type: 'deletion',
          content: '      return res.status(401).json({ message: "Unauthorized" });',
          lineNumber: 19
        },
        {
          type: 'addition',
          content: '  try {',
          lineNumber: 17
        },
        {
          type: 'addition',
          content: '    // Verify token with secret and check expiration',
          lineNumber: 18
        },
        {
          type: 'addition',
          content: '    const decoded = jwt.verify(token, config.secret, {',
          lineNumber: 19
        },
        {
          type: 'addition',
          content: '      algorithms: ["HS256"],',
          lineNumber: 20
        },
        {
          type: 'addition',
          content: '      ignoreExpiration: false',
          lineNumber: 21
        },
        {
          type: 'addition',
          content: '    });',
          lineNumber: 22
        },
        {
          type: 'addition',
          content: '',
          lineNumber: 23
        },
        {
          type: 'addition',
          content: '    // Add user info to request object',
          lineNumber: 24
        },
        {
          type: 'context',
          content: '    req.user = decoded;',
          lineNumber: 25
        },
        {
          type: 'context',
          content: '    next();',
          lineNumber: 26
        },
        {
          type: 'addition',
          content: '  } catch (err) {',
          lineNumber: 27
        },
        {
          type: 'addition',
          content: '    if (err.name === "TokenExpiredError") {',
          lineNumber: 28
        },
        {
          type: 'addition',
          content: '      return res.status(401).json({ message: "Token expired" });',
          lineNumber: 29
        },
        {
          type: 'addition',
          content: '    }',
          lineNumber: 30
        },
        {
          type: 'addition',
          content: '    return res.status(401).json({ message: "Invalid token" });',
          lineNumber: 31
        },
        {
          type: 'context',
          content: '  }',
          lineNumber: 32
        },
        {
          type: 'context',
          content: '};',
          lineNumber: 33
        },
        {
          type: 'context',
          content: '',
          lineNumber: 34
        },
        {
          type: 'context',
          content: 'module.exports = { verifyToken };',
          lineNumber: 35
        }
      ]
    }
  ];
  
  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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
  
  // Get line background color based on type
  const getLineBackground = (type: string) => {
    switch (type) {
      case 'addition':
        return 'bg-green-50';
      case 'deletion':
        return 'bg-red-50';
      default:
        return '';
    }
  };
  
  // Get line number background color based on type
  const getLineNumberBackground = (type: string) => {
    switch (type) {
      case 'addition':
        return 'bg-green-100';
      case 'deletion':
        return 'bg-red-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">{pullRequest.title}</h1>
            <span className={`ml-4 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
              pullRequest.status === 'open' 
                ? 'bg-green-100 text-green-800' 
                : pullRequest.status === 'merged' 
                  ? 'bg-purple-100 text-purple-800' 
                  : 'bg-gray-100 text-gray-800'
            }`}>
              {pullRequest.status}
            </span>
          </div>
          <p className="text-gray-500">
            <Link to={`/repository/${pullRequest.repository}`} className="hover:underline">
              {pullRequest.repository}
            </Link> • Created by {pullRequest.author} on {formatDate(pullRequest.createdAt)}
          </p>
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
      
      {/* Pull Request Description */}
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Description</h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <p className="text-gray-700">{pullRequest.description}</p>
        </div>
      </div>
      
      {/* Security Issues */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Security Issues</h2>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          {pullRequest.securityIssues.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {pullRequest.securityIssues.map((issue) => (
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
          ) : (
            <div className="px-4 py-5 sm:p-6 text-center">
              <p className="text-gray-500">No security issues found in this pull request.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Code Changes */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Code Changes</h2>
        </div>
        
        {codeChanges.map((file, fileIndex) => (
          <div key={fileIndex} className="bg-white shadow overflow-hidden rounded-lg mb-6">
            <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
              <div className="font-mono text-sm">{file.file}</div>
              <div className="text-sm">
                <span className="text-green-600">+{file.additions}</span>
                <span className="mx-1">/</span>
                <span className="text-red-600">-{file.deletions}</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <tbody>
                  {file.changes.map((change, changeIndex) => (
                    <tr key={changeIndex} className={getLineBackground(change.type)}>
                      <td className={`w-12 text-right select-none ${getLineNumberBackground(change.type)} px-2 py-1 text-xs text-gray-500 border-r`}>
                        {change.lineNumber}
                      </td>
                      <td className="px-4 py-1 font-mono text-sm whitespace-pre">
                        {change.type === 'addition' && <span className="text-green-700">+</span>}
                        {change.type === 'deletion' && <span className="text-red-700">-</span>}
                        {change.type === 'context' && <span className="text-gray-400">·</span>}
                        {change.content}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
      
      {/* Comments */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Comments</h2>
        </div>
        
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://ui-avatars.com/api/?name=Jane+Doe&background=0D8ABC&color=fff" 
                    alt="Jane Doe" 
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900">Jane Doe</span>
                      <span className="text-gray-500 text-sm ml-2">2 hours ago</span>
                    </div>
                  </div>
                  <div className="mt-1 text-gray-700">
                    <p>Good catch on the JWT validation. Make sure we're also checking for the correct issuer in the token.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mr-3">
                  <img 
                    className="h-10 w-10 rounded-full" 
                    src="https://ui-avatars.com/api/?name=John+Smith&background=4C1D95&color=fff" 
                    alt="John Smith" 
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-gray-900">John Smith</span>
                      <span className="text-gray-500 text-sm ml-2">1 hour ago</span>
                    </div>
                  </div>
                  <div className="mt-1 text-gray-700">
                    <p>Good point, I'll add the issuer check in the next commit. Also planning to add more comprehensive error handling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <label htmlFor="comment" className="sr-only">Add your comment</label>
              <textarea
                id="comment"
                rows={3}
                className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                placeholder="Add your comment..."
              ></textarea>
              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PullRequest;
