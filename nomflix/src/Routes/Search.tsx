import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");
  console.log(keyword);
  return (
    <div>Search</div>
  )
}


export default Search;