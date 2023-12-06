import React from 'react'

const NewsCard = ({news}) => {
  return (
   <div className="col-md-8 col sm-12">
     <div className="card mb-3">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={news.urlToImage}
         className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{news.title}</h5>
          <p className="card-text">{news.description}</p>
          <p className="card-text"><small className="text-body-secondary">{news.author}</small></p>
          <p className="card-text">{news.publishedAt}</p>
          <a href={news.url} target='_blank' style={{textDecoration:"none"}}> Read more... </a>
        </div>
      </div>
    </div>
  </div>
   </div>
  )
}

export default NewsCard