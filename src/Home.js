// import React from 'react'


// import Search from "./Search"
// import Movies from './Movies'

// const Home = () => {

//   return (
    
//       <>
// <Search />
// <Movies />
//       </>
//   )
// }

// export default Home


import Movie from "./Movie";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <div className="container">

        <Search />
        <Movie />
      </div>
    </>
  );
};

export default Home;