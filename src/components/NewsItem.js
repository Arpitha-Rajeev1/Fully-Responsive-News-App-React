import React from 'react'

function NewsItem({ title, description, imageUrl, url, author, published, source }) {
    return (
        <>
            <div className="card m-5" style={{ width: '18rem' }}>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {source}
                    <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageUrl} className="card-img-top" alt="newsImage" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <h6>Written by: {author}</h6>
                        <h6>Published At: {new Date(published).toGMTString()}</h6>
                        <a href={url} className="btn btn-info">Read More &rarr;</a>
                    </div>
            </div>
        </>
    )
}

export default NewsItem