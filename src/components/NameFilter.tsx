function NameFilter(props: any) {
  return (
    <div className="bg-green-50 w-11/12 h-28 rounded-lg mx-3 mt-5">
      <div className="flex">
        <p className="text-green-500 p-3 w-4/5">Name (String)</p>
        <div className="p-4 w-1/5" onClick={props.closeBox} id="Name">
          X
        </div>
      </div>
      <div className="px-5">
        <input
          type="text"
          placeholder="Enter value"
          className="rounded-full h-8 w-full mb-5 px-5"
          onChange={props.familyHandler}
        />
      </div>
    </div>
  );
}
export default NameFilter;
