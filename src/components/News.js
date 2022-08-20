import React, { useState, useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import NewsItem from './NewsItem'

function News({country, category}) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalSize, setTotalSize] = useState(1)

    let pageSize = 9;
    function previous() {
        setPage(page - 1)
    }

    function next() {
        setPage(page + 1)
    }

    useEffect(() => {
        async function fetchAPI() {
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1b6774db60f14cda9566a2fa93b29cf5&page=${page}&pageSize=${pageSize}`;
            let data = await fetch(url)
            let fetchData = await data.json()
            setTotalSize(fetchData.totalResults)
            setArticles(fetchData.articles)
            setLoading(true)
        }
        fetchAPI()
    }, [page, category, country, pageSize])

    return (
        <>
            <h1 className='text-center' style={{marginTop: '8rem', marginBottom: '1rem'}}>News By React - Top {category.charAt(0).toUpperCase() + category.slice(1)} Headlines</h1>
            {!loading && <CircularProgress style={{ marginLeft: '50%', color: 'red' }} />}
            {loading && <div> <div className='d-flex justify-content-evenly m-5 flex-wrap'>
                {articles.map((item) => (
                    <NewsItem key={item.url} title={item.title ? item.title : 'News Title'} description={item.description ? item.description : 'News Description'} author={item.author? item.author : 'Unknown'} published={item.publishedAt} source={item.source.name} imageUrl={item.urlToImage ? item.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn--wm8bBojawXcqX607UNOSqMLup_B5AyIwWPHfXvzZcP91daEBo4rxp88R9eUJtrJ7o&usqp=CAU'} url={item.url} />
                ))}
            </div>

                <div className='d-flex justify-content-around'>
                    <button disabled={page <= 1} type="button" className="btn btn-info my-5" onClick={previous}>&larr; Previous</button>
                    <button disabled={page >= Math.ceil(totalSize / pageSize)} type="button" className="btn btn-info my-5" onClick={next}>Next &rarr;</button>
                </div>
            </div>
            }
        </>
    )
}

export default News