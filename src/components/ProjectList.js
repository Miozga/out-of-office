import React from "react";

function ProjectList() {
  const projects = [
    {
      id: 1,
      type: "Development",
      startDate: "2024-06-01",
      endDate: "2024-12-31",
      manager: "John Doe",
      status: "Active",
    },
    {
      id: 2,
      type: "Marketing",
      startDate: "2024-07-01",
      endDate: "2024-09-30",
      manager: "Jane Smith",
      status: "Active",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Manager</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project.id}>
            <td>{project.id}</td>
            <td>{project.type}</td>
            <td>{project.startDate}</td>
            <td>{project.endDate}</td>
            <td>{project.manager}</td>
            <td>{project.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProjectList;
