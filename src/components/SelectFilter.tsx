// import React, { useState } from "react";
function SelectFilter(props: any) {
  // let [filter, setFilter] = useState("");
  return (
    <div>
      <select
        className="rounded-full mx-4 mb-3 h-10 w-10/12 px-5"
        onChange={props.filterSelect}
      >
        <option selected hidden>
          Choose an Item
        </option>
        <option value="Name">Name (String)</option>
        <option value="Age">Age (Number)</option>
        <option value="Interests">Interests (Select)</option>
        <option value="Birthday">Birthday (Date)</option>
      </select>
    </div>
  );
}
export default SelectFilter;
