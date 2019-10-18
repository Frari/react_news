import React, {Component, Fragment} from 'react';
import Header from './Components/Header.js'
import ListNews from './Components/ListNews.js'
import Form from './Components/Form.js'

class App extends Component {
  state = { 
    news : []
   }

  //chiamata ajax
  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=139c264671f344e0964e222b3f1a5625`
  
    const answer = await fetch(url);
    const news = await answer.json();

    this.setState({
      news : news.articles
    })
  }
  
  render() { 
    return ( 
      <Fragment>
        <Header 
          title='News React API'
        />
        <div className='container white contenedor-noticias'>
          <Form 
          />
          <ListNews
            news={this.state.news}
          />
        </div>
      </Fragment>
      );
  }
}
 
export default App;