export const FetchNews = async(topic)=>
{const response = await fetch(` https://newsapi.org/v2/everything?q=${topic}&apiKey=c00f316ae51e45039ee8d5f1498e5d4b`)

const data = await response.json()
return data.articles;
}