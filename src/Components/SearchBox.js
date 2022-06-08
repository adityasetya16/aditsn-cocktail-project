import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchCocktails } from "../Redux/features/cocktailSlice";

const SearchBox = () => {
  const searchTerm = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchTerm.current.value;
    dispatch(fetchSearchCocktails({ searchText }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="d-flex  align-items-center justify-content-center mt-4 card text-center">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label
              htmlFor='inputText'
              className='form-label fw-bold text-success d-flex justify-content-start'>
              Search in Here
          </label>
            <input
              type="email"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              placeholder="Search for ..."
              style={{ width: "350px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBox;
