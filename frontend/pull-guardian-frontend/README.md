# PullGuardian Frontend

PullGuardian is a security-first code review and collaboration platform designed to help teams identify and address security vulnerabilities in their code before they reach production.

![PullGuardian Logo](public/logo192.png)

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Pages and Routes](#pages-and-routes)
- [Features](#features)
- [Components](#components)
- [Authentication](#authentication)
- [Development Guidelines](#development-guidelines)

## 🔍 Overview

PullGuardian provides a comprehensive solution for teams to manage code security throughout the development lifecycle. The platform offers:

- Security scanning for pull requests
- Detailed vulnerability reports
- Team collaboration tools
- Repository security insights
- Customizable security policies

## 🛠️ Tech Stack

- **Framework**: React 19.1.0 with TypeScript
- **UI Library**: Radix UI components
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Bundler**: Create React App (with potential migration to Vite)

## 📁 Project Structure

```
src/
│
├── components/       # Reusable UI components
├── pages/            # Individual route pages
├── layouts/          # Layout wrappers for public/authenticated pages
├── routes/           # App routes with lazy loading
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── lib/              # API functions and services
├── types/            # Global TypeScript types
├── styles/           # Global styles
├── contexts/         # React Context providers
└── App.tsx           # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TahaKotwal12/PullGuardian.git
   cd frontend
   cd pullguardian-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## 📄 Pages and Routes

- `/login` - User login page
- `/register` - New user registration
- `/dashboard` - Main user dashboard after login
- `/repository/:id` - Individual repository security insights
- `/pull-request/:id` - Detailed pull request analysis
- `/settings` - Account & application settings
- `/team` - Team management view
- `/not-found` - 404 fallback page

## ✨ Features

### Authentication

- User registration and login
- Protected routes for authenticated users
- Role-based access control

### Dashboard

- Overview of repositories and their security status
- Recent pull requests with security issues
- Security metrics and statistics

### Repository Management

- Detailed security insights for each repository
- Security score calculation
- Vulnerability tracking

### Pull Request Analysis

- Security scanning for pull requests
- Code change visualization
- Vulnerability detection and reporting

### Team Collaboration

- Team member management
- Role assignment
- Repository access control

## 🧩 Components

The application includes several reusable components:

- `Button` - Customizable button component with variants
- `Card` - Container component for content sections
- `Alert` - Notification component for messages and alerts
- `Badge` - Label component for status indicators
- `Input` - Form input component with validation

## 🔐 Authentication

Authentication is implemented using a custom hook (`useAuth`) and context provider (`AuthContext`). For the demo version, authentication is simulated with localStorage, but in a production environment, it would integrate with a backend authentication service.

Features:
- Login/logout functionality
- Registration process
- Protected routes
- Authentication state management

## 📝 Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow functional component patterns
- Use React hooks for state and side effects
- Implement proper error handling

### Component Development

- Create reusable components in the `components` directory
- Use Tailwind CSS for styling
- Ensure components are accessible
- Document component props with TypeScript interfaces

### State Management

- Use React Context for global state
- Use local state for component-specific state
- Consider Zustand for more complex state requirements

### Routing

- Define routes in the `routes/index.tsx` file
- Use lazy loading for better performance
- Implement proper route protection

## 📄 License

This project is licensed under the Apache-2.0 License - see the LICENSE file for details.

## 👥 Contributors

- PullGuardian Team

---

© 2025 PullGuardian. All rights reserved.
