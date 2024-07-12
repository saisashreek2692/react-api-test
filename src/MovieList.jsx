import { useEffect, useState } from "react";

function MovieList() {
  const [movie, setMovie] = useState([]);

  const apiLink = `https://dummyapi.online/api/movies`;

  useEffect(() => {
    fetch(apiLink)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <div className="flex flex-col gap-5 w-96 h-16">
      {movie.map((list, index) => (
        <div
          key={index}
          className="p-5 px-4 bg-white flex items-center justify-start shadow-xl"
        >
          <h3 className="px-3 text-teal-500 font-medium text-lg">{list.id}</h3>
          <h3 className="px-3 text-teal-500 font-medium text-lg">
            {list.movie}
          </h3>
          <div className="flex items-end justify-between gap-3">
            <h3 className="text-teal-500 font-medium text-lg items-end">
              <span>{list.rating}</span>
            </h3>
            <a
              href={list.imdb_url}
              className="text-center items-center text-teal-500 font-normal text-lg hover:underline hover:font-medium"
            >
              Link
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
