import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  handleIndianNews = async() => {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ce1f5de0a39849bb991b5a103008fcda&q=news";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
  }

  handlePoliticsNews = async() => {
    let url = "https://newsapi.org/v2/top-headlines?country=&apiKey=ce1f5de0a39849bb991b5a103008fcda&q=politics";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
  }

  handleTeslaNews = async() => {
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-04-22&sortBy=publishedAt&apiKey=ce1f5de0a39849bb991b5a103008fcda";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
  }

  handleSportsNews = async() => {
    let url = "https://newsapi.org/v2/top-headlines?country=&apiKey=ce1f5de0a39849bb991b5a103008fcda&q=sport";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
  }

  handleNDTVNews = async() => {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ce1f5de0a39849bb991b5a103008fcda&q=ndtv";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles: parsedData.articles})
  }
  
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=&apiKey=ce1f5de0a39849bb991b5a103008fcda&q=news";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="mt-5 mb-3">Soga News - Trending News World Wide!</h2>
        <button type="button" className="btn btn-outline-info btn-lg" onClick={this.handleIndianNews}>Indian News</button>
        <button type="button" className="btn btn-outline-info btn-lg ms-3" onClick={this.handlePoliticsNews}>Politics</button>
        <button type="button" className="btn btn-outline-info btn-lg ms-3" onClick={this.handleTeslaNews}>Tesla News</button>
        <button type="button" className="btn btn-outline-info btn-lg ms-3" onClick={this.handleSportsNews}>Sports News</button>
        <button type="button" className="btn btn-outline-info btn-lg ms-3" onClick={this.handleNDTVNews}>NDTV News</button>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}