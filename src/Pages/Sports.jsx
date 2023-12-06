import React, { useContext, useEffect } from 'react'
import NewsCard from '../Components/NewsCard'
import NewsContext from '../Context/NewsContext'
import { FetchNews } from '../Context/NewsAction'
// import { NewsAction } from '../Context/NewsAction'

const Sports = () => {

  const {allnews ,dispatch}=useContext(NewsContext)

  const getNews=async()=>{
    const allnews =await FetchNews("mhow")
    dispatch ({
      type:"GET_NEWS",
      payload:allnews,
    })
  }

useEffect(()=>{
  getNews()

},[])
  return (
<>
<h1 className="text-center display-1 my-2">Top News</h1>
<div className='row'>
{
  allnews.map((news ,index)=> <NewsCard key={index} news={news} />)
}
      
     
    </div>
</>
  )
}

export default Sports