import React, { useState } from "react";
function AgeFilter(props: any) {
  const [ageState, setAgeState] = useState<string[]>(["Exact"]);
  const ageFilterHandler = (e: any) => {
    setAgeState([e.target.value]);
  };
  return (
    <div className="bg-green-50 w-11/12 max-h-52 rounded-lg mx-3 mt-5">
      <div className="flex">
        <p className="text-green-500 p-3 w-4/5">Age (Number)</p>
        <div className="p-4 w-1/5" onClick={props.closeBox} id="Age">
          X
        </div>
      </div>
      <div className="px-5">
        <select
          className="rounded-full h-8 w-full mb-5 px-5 "
          onChange={ageFilterHandler}
        >
          <option value="Exact">Exact</option>
          <option value="Between">Between</option>
        </select>
      </div>
      {ageState[0] === "Exact" ? (
        <div className="px-5">
          <input
            id="1"
            type="text"
            placeholder="Enter value 1"
            className="rounded-full h-8 w-full mb-5 px-5"
            onChange={props.ageHandler}
          />
        </div>
      ) : (
        <div>
          <div className="px-5">
            <input
              id="2"
              type="text"
              placeholder="Enter value 1"
              className="rounded-full h-8 w-full mb-5 px-5"
              onChange={props.ageHandler}
            />
          </div>
          <div className="px-5">
            <input
              id="3"
              type="text"
              placeholder="Enter value 2"
              className="rounded-full h-8 w-full mb-5 px-5"
              onChange={props.ageHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default AgeFilter;
