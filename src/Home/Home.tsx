import React from 'react';
import Banner from './Banner';
import Listings from './Listing';
import Search from './Search';

const Home = () => {
	return(
	  <>
		  <Banner/>
		  <Search/>
		  <Listings/>
	  </>
	);
}

export default Home;
