import axios from "axios";
import { base, genres, search, safe } from "./paths";

export async function getGenresForSearch() {
  return await axios
    .get(base + genres)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}

export async function searchAnime(filters) {
  return await axios
    .get(
      base + search,
      {
        params: {
          q: filters.q,
          genres: filters.genres,
          type: filters.type,
          status: filters.status,
          rating: filters.rating,
          ...safe,
        },
      },
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      console.log(e);
    });
}
