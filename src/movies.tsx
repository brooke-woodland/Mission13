import data from './MovieData.json';
import { useState } from 'react';

const MDS = data.MovieData;

function MovieList() {
  return (
    <>
      <div>
        <h3>Movie List</h3>
      </div>
      <table className="table table-hover">
        <thead>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Rating</th>
          <th>Category</th>
          <th>Edited</th>
        </thead>
        <tbody>
          {MDS.map((m) => (
            <tr>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Category}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
