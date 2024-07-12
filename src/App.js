import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ApprovalRequests from "./pages/ApprovalRequests";
import Employees from "./pages/Employees";
import LeaveRequests from "./pages/LeaveRequests";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/employees">Employees</Link>
            </li>
            <li>
              <Link to="/leave-requests">Leave Requests</Link>
            </li>
            <li>
              <Link to="/approval-requests">Approval Requests</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/leave-requests" element={<LeaveRequests />} />
          <Route path="/approval-requests" element={<ApprovalRequests />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
