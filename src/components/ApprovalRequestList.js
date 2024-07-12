import React from "react";

function ApprovalRequestList() {
  const approvalRequests = [
    {
      id: 1,
      approver: "Manager 1",
      leaveRequest: 1,
      status: "Approved",
      comment: "Enjoy your vacation!",
    },
    {
      id: 2,
      approver: "Manager 2",
      leaveRequest: 2,
      status: "Pending",
      comment: "",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Approver</th>
          <th>Leave Request</th>
          <th>Status</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {approvalRequests.map((request) => (
          <tr key={request.id}>
            <td>{request.id}</td>
            <td>{request.approver}</td>
            <td>{request.leaveRequest}</td>
            <td>{request.status}</td>
            <td>{request.comment}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ApprovalRequestList;
