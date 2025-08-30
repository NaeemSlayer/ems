import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <p className="text-lg font-medium w-1/5 ">Employee Name</p>
        <p className="text-lg font-medium w-1/5 ">New Task</p>
        <p className="text-lg font-medium w-1/5 ">Active Task</p>
        <p className="text-lg font-medium w-1/5 ">Completed</p>
        <p className="text-lg font-medium w-1/5 ">Failed</p>
      </div>
      <div className="">
        {authData.employee.map(function (elem, idx) {
        return (
          <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
            <p className="text-lg font-medium w-1/5">{elem.firstName}</p>
            <p className="text-lg font-medium w-1/5 text-blue-600">{elem.taskCounts.newTask}</p>
            <p className="text-lg font-medium w-1/5 text-yellow-400">{elem.taskCounts.active}</p>
            <p className="text-lg font-medium w-1/5 text-green-600">{elem.taskCounts.completed}</p>
            <p className="text-lg font-medium w-1/5 text-red-600">{elem.taskCounts.failed}</p>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTask;
