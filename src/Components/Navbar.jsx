import { Link } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import NewsContext from '../Context/NewsContext'
import { FetchNews } from '../Context/NewsAction'

const Navbar = () => {
  const {dispatch}=useContext(NewsContext)

  const [search ,setSearch]=useState("")
const handleSearch=async(e)=>{
  e.preventDefault()
  const allnews=await FetchNews(search)

  dispatch ({
    type:"GET_NEWS",
    payload:allnews
  })
  setSearch("")
}
  return (
    <nav className="navbar navbar-expand-lg bg-danger shadow-lg">
  <div className="container-fluid">
    <Link className="navbar-brand text-warning" to="/">Ab-Tak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/politics">Politics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/business">Business</Link>
        </li>
      
     
      </ul>
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar