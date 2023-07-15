import { AiOutlineDown } from "react-icons/ai";
import React, { useState } from "react";
function InterestsFilter(props: any) {
  const [checkbox, setCheckbox] = useState(false);
  const [selectedItems, setSelectedItems] = useState([
    false, //sport
    false, //movie
    false, //book
    false, //playstation
    false, //travel
  ]);
  const addSelectedItems = (e: any) => {
    e.persist();
    setSelectedItems((prev) => {
      const index = Number(e.target.id);
      const updatedState = [...prev];
      updatedState[index] = !updatedState[index];
      return updatedState;
    });
  };
  const openCheckbox = () => {
    setCheckbox((prev) => {
      return !prev;
    });
  };
  return (
    <div className="bg-green-50 w-11/12 h-28 rounded-lg mx-3 mt-5">
      <div className="flex">
        <p className="text-green-500 p-3 w-4/5">Interests (Select)</p>
        <div className="p-4 w-1/5" onClick={props.closeBox} id="Interests">
          X
        </div>
      </div>
      <div
        className="flex w-5/6 bg-white min-h-6 rounded-full mb-1 mx-5"
        onClick={openCheckbox}
      >
        <p className="w-5/6 py-2 px-4">Select</p>
        <div className="w-1/6 py-3">
          <AiOutlineDown />
        </div>
      </div>
      {checkbox && (
        <div className="text-xl bg-white rounded-md p-3 shadow-xl">
          <input
            id="0"
            type="checkbox"
            className="w-4 h-4"
            onChange={addSelectedItems}
            onClick={props.interestsHandler}
            defaultChecked={selectedItems[0]}
          />
          <label htmlFor="sport" className="ml-3 ">
            Sport
          </label>

          <hr className="text-black h-2" />
          <input
            id="1"
            type="checkbox"
            className="w-4 h-4"
            onChange={addSelectedItems}
            onClick={props.interestsHandler}
            defaultChecked={selectedItems[1]}
          />
          <label htmlFor="movie" className="ml-3">
            Movie
          </label>
          <hr className="text-black h-2" />
          <input
            id="2"
            type="checkbox"
            className="w-4 h-4"
            onChange={addSelectedItems}
            onClick={props.interestsHandler}
            defaultChecked={selectedItems[2]}
          />
          <label htmlFor="book" className="ml-3">
            Book
          </label>
          <hr className="text-black h-2" />
          <input
            id="3"
            type="checkbox"
            className="w-4 h-4"
            onChange={addSelectedItems}
            onClick={props.interestsHandler}
            defaultChecked={selectedItems[3]}
          />
          <label htmlFor="playstation" className="ml-3">
            Playstation
          </label>
          <hr className="text-black h-2" />
          <input
            id="4"
            type="checkbox"
            className="w-4 h-4"
            onChange={addSelectedItems}
            onClick={props.interestsHandler}
            defaultChecked={selectedItems[4]}
          />
          <label htmlFor="travel" className="ml-3">
            Travel
          </label>
        </div>
      )}
    </div>
  );
}
export default InterestsFilter;
