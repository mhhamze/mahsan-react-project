import React, { useState } from "react";
import "./index.css";
import NameFilter from "./components/NameFilter";
import AgeFilter from "./components/AgeFilter";
import BirthdayFilter from "./components/BirthdayFilter";
import InterestsFilter from "./components/InterestsFilter";
import SelectFilter from "./components/SelectFilter";
import Table from "./components/Table";
function App() {
  const [tableCondition, setTableCondition] = useState(false);
  const [data, setData] = useState();
  const [filtersItems, setFilterItems] = useState({
    birth_date: "",
    exact_age: [],
    interests: [],
    name: "",
    range_age: [],
  });
  const [query] = useState("");
  const settings = { filters: filtersItems, query: query };
  const [filters, setFilters] = useState<string[]>([]);

  const filterSelect = (e: any) => {
    setFilters((prev) => [...prev, e.target.value]);
  };
  const closeBox = (e: any) => {
    setFilters((prev: string[]) => {
      return prev.filter((item) => item !== e.target.id);
    });
  };
  const clearAll = (e: any) => {
    setFilters((prev: string[]) => {
      return [];
    });
    setFilterItems((): any => {
      const filterReset = {
        birth_date: "",
        exact_age: [],
        interests: [],
        name: "",
        range_age: [],
      };
      return filterReset;
    });
    setTableCondition(false);
  };
  const nameHandler = (e: any) => {
    setFilterItems((prev: any) => {
      return { ...prev, name: e.target.value };
    });
  };
  const familyHandler = (e: any) => {
    setFilterItems((prev: any) => {
      const name = prev.name.split(" ")[0];
      return { ...prev, name: name + " " + e.target.value };
    });
  };
  const ageHandler = (e: any) => {
    if (Number(e.target.id) === 1) {
      setFilterItems((prev: any) => {
        return { ...prev, exact_age: [Number(e.target.value)], range_age: [] };
      });
    }
    if (Number(e.target.id) === 2) {
      setFilterItems((prev: any) => {
        let rangeAge = prev.range_age;
        if (rangeAge) {
          rangeAge[0] = Number(e.target.value);
          return { ...prev, range_age: rangeAge, exact_age: [] };
        } else {
          rangeAge.push(Number(e.target.value));
          return { ...prev, range_age: rangeAge, exact_age: [] };
        }
      });
    }
    if (Number(e.target.id) === 3) {
      setFilterItems((prev: any) => {
        let rangeAge = prev.range_age;
        if (rangeAge[1]) {
          rangeAge[1] = Number(e.target.value);
          return { ...prev, range_age: rangeAge, exact_age: [] };
        } else {
          rangeAge.push(Number(e.target.value));
          return { ...prev, range_age: rangeAge, exact_age: [] };
        }
      });
    }
  };

  const birthdayHandler = (e: any) => {
    setFilterItems((prev: any) => {
      return { ...prev, birth_date: e.target.value };
    });
  };
  const interestsHandler = (e: any) => {
    setFilterItems((prev: any) => {
      const interests = ["sport", "movie", "book", "playstation", "travel"];
      const index1 = Number(e.target.id);
      const r = [...prev.interests];
      if (e.target.checked) {
        r.push(interests[index1]);
        return { ...prev, interests: r };
      } else {
        const index2 = r.indexOf(interests[index1]);
        r.splice(index2, 1);
        return { ...prev, interests: r };
      }
    });
  };

  const SearchRequest = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });
      const users = await response.json();
      setData(users);
      setTableCondition(true);
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-1/5 h-full">
        <div className="w-full h-full bg-gray-100 m-2 p-5 shadow-2xl text-slate-400">
          <p className="text-xl text-gray-500">Search</p>
          <div>
            <div className="px-5 my-2">
              <input
                type="text"
                placeholder="Enter Name"
                className="rounded-full h-10 w-full mb-5 px-5"
                onChange={nameHandler}
              />
            </div>
          </div>
          <p className="text-xl text-gray-500">Filters</p>
          <p className="text-l m-2 mt-4 text-gray-500">Select Filters</p>
          <SelectFilter filterSelect={filterSelect} />
          <div className="overflow-y-auto h-96">
            <div>
              {filters.includes("Name") ? (
                <NameFilter closeBox={closeBox} familyHandler={familyHandler} />
              ) : (
                ""
              )}
              {filters.includes("Age") ? (
                <AgeFilter closeBox={closeBox} ageHandler={ageHandler} />
              ) : (
                ""
              )}
              {filters.includes("Birthday") ? (
                <BirthdayFilter
                  closeBox={closeBox}
                  birthdayHandler={birthdayHandler}
                />
              ) : (
                ""
              )}
              {filters.includes("Interests") ? (
                <InterestsFilter
                  closeBox={closeBox}
                  interestsHandler={interestsHandler}
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex mt-5">
            <button
              className="w-1/2 py-3 text-indigo-500 hover:text-indigo-900 "
              onClick={clearAll}
            >
              Clear Filters
            </button>
            <button
              onClick={SearchRequest}
              className="w-1/2 py-3 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-4/5 p-20 max-h-full">
        {tableCondition && <Table data={data} />}
      </div>
    </div>
  );
}

export default App;
