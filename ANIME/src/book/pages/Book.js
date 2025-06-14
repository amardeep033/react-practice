import React, { useState,useEffect } from 'react'
import Notavlbl from '../../shared/comp/Notavlbl'
import Booklist from '../comp/Booklist'
import Loading from '../../shared/comp/Loading'

const Book = () => {
    const [books, setBooks] = useState()
    const [errmsg,setErrmsg]=useState()
    const [loading,setLoading]=useState(true)

    useEffect(() => {
      const fetchBooks=async()=>
      {
        try
        {
            const response=await fetch('https://api.jikan.moe/v4/top/anime?limit=10')
            const respData=await response.json()
            if(!response.ok)
                throw new Error(respData.message)
            console.log(respData.data)
            setBooks(respData.data)
            setLoading(false)
        }
        catch(err)
        {
            setLoading(false)
            setErrmsg(err.message)
        }
      }
      fetchBooks()
    }, [])
    
    return (
        <React.Fragment>
           {errmsg && <Notavlbl message={errmsg}/>}
           {loading && <Loading/>}
            {books && <Booklist list={books}/>}
        </React.Fragment>
    )
}

export default Book