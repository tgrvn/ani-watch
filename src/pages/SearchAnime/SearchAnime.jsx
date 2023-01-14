import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { genres } from "../../redux/slices/filters";
import { search } from "../../redux/slices/search";
import Filters from "./components/Filters";
// import styles from "./SearchAnime.module.scss";

export default function SearchAnime() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    q: "",
    genres: [],
    type: "",
    status: "",
    rating: "",
  });

  useMemo(() => {
    setTimeout(() => {
      dispatch(search(filters));
    }, 1500);
  }, [dispatch, filters]);

  useEffect(() => {
    dispatch(genres());
  }, [dispatch]);

  return (
    <div className="container">
      <Filters filters={filters} setFilters={setFilters} />
    </div>
  );
}
