import React from "react";
import { useSelector } from "react-redux";
import Search from "../../../components/search/Search";
import SearchSelect from "../../../components/searchSelect/SearchSelect";
import Select from "../../../components/select/Select";
import styles from "./Filters.module.scss";

export default function Filters({ filters, setFilters }) {
  const { avaibleFilters } = useSelector((state) => state.filters);

  function handleSelectMultiply(value) {
    if (filters.genres.includes(value)) {
      setFilters({
        ...filters,
        genres: filters.genres.filter((g) => g !== value),
      });
    } else {
      setFilters({ ...filters, genres: [...filters.genres, value] });
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <div className={styles.name}>Search</div>
          <Search
            onChange={(e) => setFilters({ ...filters, q: e.target.value })}
            value={filters.q}
            clear={() => setFilters({ ...filters, q: "" })}
          />
        </div>
        <div className={styles.filter}>
          <div className={styles.name}>Genres</div>
          <SearchSelect
            options={avaibleFilters.genres}
            onSelect={(value) => handleSelectMultiply(value)}
            selected={filters.genres}
          />
        </div>
        <div className={styles.filter}>
          <div className={styles.name}>Status</div>
          <Select
            options={avaibleFilters.statuses}
            selected={filters.status}
            onSelect={(value) =>
              setFilters({
                ...filters,
                status: value !== filters.status ? value : "",
              })
            }
          />
        </div>
        <div className={styles.filter}>
          <div className={styles.name}>Type</div>
          <Select
            options={avaibleFilters.types}
            selected={filters.type}
            onSelect={(value) =>
              setFilters({
                ...filters,
                type: value !== filters.type ? value : "",
              })
            }
          />
        </div>
        <div className={styles.filter}>
          <div className={styles.name}>Audience Ratings</div>
          <Select
            options={avaibleFilters.ratings}
            selected={filters.rating}
            onSelect={(value) =>
              setFilters({
                ...filters,
                rating: value !== filters.rating ? value : "",
              })
            }
          />
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.primary}>
          <div className={styles.filter}>
            <div className={styles.name}>Search</div>
            <Search />
          </div>

          <div className={styles.switch}></div>
        </div>

        <div className={styles.secondary}>
          <div className={styles.filter}>
            <div className={styles.name}>Search</div>
            <Search />
          </div>
          <div className={styles.filter}>
            <div className={styles.name}>Search</div>
            <Search />
          </div>
          <div className={styles.filter}>
            <div className={styles.name}>Search</div>
            <Search />
          </div>
          <div className={styles.filter}>
            <div className={styles.name}>Search</div>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
