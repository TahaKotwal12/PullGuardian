// Global TypeScript types

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user' | 'viewer';
}

export interface Repository {
  id: string;
  name: string;
  owner: string;
  description?: string;
  securityScore: number;
  lastScan?: string;
  issues: number;
  vulnerabilities: number;
}

export interface PullRequest {
  id: string;
  title: string;
  description?: string;
  author: string;
  repository: string;
  status: 'open' | 'closed' | 'merged';
  securityIssues: SecurityIssue[];
  createdAt: string;
  updatedAt: string;
}

export interface SecurityIssue {
  id: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  file: string;
  line: number;
  status: 'open' | 'resolved' | 'false-positive';
}

export interface Team {
  id: string;
  name: string;
  members: User[];
  repositories: string[];
}

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  securityAlerts: boolean;
  autoScan: boolean;
}
