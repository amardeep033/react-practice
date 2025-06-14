import React, { useState,useEffect } from 'react'
import './app.css'
import Db from './Db'
import Header from './Header'
import Body from './Body'
import Pagination from './Pagination'

const App = () => {
  const [filteredList, setFilteredList] = useState(Db);
  const [searchQuery, setSearchQuery] = useState({ name: "", author: "", subject: "" });
  const [pageNumber, setPageNumber] = useState(1);

  const dropdown=()=>{
    return [...new Set(Db.map(item=>item.subject))];
  }

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery({
      ...searchQuery,
      [event.target.name]: query
    });
  };

  useEffect(() => {
    const searchList = Db.filter((item) => {
      return (item.name.toLowerCase().indexOf(searchQuery.name.toLowerCase()) !== -1) &&
        (item.author.toLowerCase().indexOf(searchQuery.author.toLowerCase()) !== -1) &&
        (searchQuery.subject.toLowerCase()==="" || item.subject.toLowerCase()===searchQuery.subject.toLowerCase());
    });
    setFilteredList(searchList);
    setPageNumber(1);
  }, [searchQuery])

  const booksPerPage = 10;
  const lastIndex=pageNumber*booksPerPage;
  const firstIndex=lastIndex-booksPerPage;
  const currentBooks=filteredList.slice(firstIndex,lastIndex);

  return (
    <React.Fragment>
      <Header searchQuery={searchQuery} handleSearch={handleSearch} dropdown={dropdown()}/>
      <Body tot={filteredList} list={currentBooks}/>
      <Pagination tot={filteredList} booksPerPage={booksPerPage}  setCurrentPage={setPageNumber} currentPage={pageNumber}/>
    </React.Fragment>
  )
}

export default App