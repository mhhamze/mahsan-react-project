function BirthdayFilter(props: any) {
  return (
    <div className="bg-green-50 w-11/12 h-28 rounded-lg mx-3 mt-5">
      <div className="flex">
        <p className="text-green-500 p-3 w-4/5">Birthday (Date)</p>
        <div className="p-4 w-1/5" onClick={props.closeBox} id="Birthday">
          X
        </div>
      </div>
      <div className="px-5">
        <input
          type="date"
          className="rounded-full h-8 w-full mb-5 px-5"
          onChange={props.birthdayHandler}
        />
      </div>
    </div>
  );
}

export default BirthdayFilter;
