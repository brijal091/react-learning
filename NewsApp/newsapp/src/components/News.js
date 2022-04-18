import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className='my-5'>News Monkey | Top HeadLines </h2>
          <div className="row">
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
              <div className="col-md-4 my-3">
                <NewsItem title="My Title" description="My Description Testing for components"/>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default News
