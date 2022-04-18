import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    // we need to use props in class based components. 
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src="https://static01.nyt.com/images/2022/04/15/nyregion/00virus_family_explainer1/00virus_family_explainer1-facebookJumbo.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              {/* Using Props  */}
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
