import React, { useEffect, useState } from "react";
import { fetchBugData } from "../api/fetchBugData";
import loadingImage from "../../assets/image/loadingImage.png";
const Task2 = () => {
  const [dataList, setDataist] = useState([]);
  const [filteredDataList, setFilteredDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [labels, setLabels] = useState([]);
  useEffect(() => {
    fetchBugData(setLoading, setDataist, setFilteredDataList, setLabels);
  }, []);
  const filterData = (e) => {
    setFilter(e.target.value);
    let filteredData = [];
    dataList.forEach((data) => {
      data.labels.forEach((label) => {
        if (label.name === e.target.value) {
          filteredData.push(data);
        }
      });
    });
    setFilteredDataList(filteredData);
  };
  return (
    <>
      <div className="container p-10 flex items-center justify-center flex-col">
        <div className="flex flex-col items-center">
          <h1 className="text-xl">BUG Report Data</h1>
          <div className="flex items-center space-x-2">
            <label htmlFor="">Filter:</label>
            <select
              className="px-5 py-2 rounded"
              value={filter}
              onChange={filterData}
            >
              <option hidden>Select The Label</option>
              {labels.map((data, index) => {
                return (
                  <option value={data} key={index}>
                    {data}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {loading ? (
          <div className="mt-10">
            <img src={loadingImage} className="mx-auto w-32 animate-spin" />
          </div>
        ) : (
          <div className="mt-10">
            <table className="table-fixed">
              <thead>
                <tr className="bg-button text-white">
                  <th className="py-3 w-[40%]">Title</th>
                  <th className="py-3 w-[20%]">User</th>
                  <th className="py-3 w-[20%]">State</th>
                  <th className="py-3 w-[20%]">Last Update</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(filteredDataList) &&
                  filteredDataList.map((data, index) => {
                    const { title, user, state, updated_at } = data;
                    return (
                      <tr
                        className={`${index % 2 == 0 && "bg-gray-200"} text-sm`}
                        key={index}
                      >
                        <td className="py-2 text-center px-3">{title}</td>
                        <td className="py-2 text-center">{user.login}</td>
                        <td className="py-2 text-center">{state}</td>
                        <td className="py-2 text-center pr-3">
                          {updated_at.split("T")[0]}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Task2;
