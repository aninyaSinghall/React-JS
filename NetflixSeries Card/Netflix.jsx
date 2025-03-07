import { Navbar } from  "./Navbar";
import seriesData from "../api/seriesData.json";

export const NetflixSeries = () => {
    return (
      <ul>
        <Navbar/>
        {seriesData.map((curEle) => { // Corrected the map syntax
            return (
                <li key={curEle.id}>
                 <div>
                   <img src={curEle.img_url} alt={curEle.name} width="50%" /> {/* Corrected to use curEle */}
                 </div>
                <h1>Name: {curEle.name}</h1> {/* Corrected to use curEle */}
                <h2>Ratings: {curEle.Ratings}</h2> {/* Corrected to use curEle */}
                <p>Summary: {curEle.description}</p> {/* Corrected to use curEle */}
                <a href={curEle.watch_url} target="_blank" rel="noopener noreferrer">
                  <button>Watch Now</button>
                </a>
                </li>);
        })}
      </ul>
    )
};
