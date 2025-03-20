import React from 'react';
import '../../assests/scss/card.css'
import Modal from './Modal';

const PostsData = [
    {
      "category": "News",
      "title": "NewsApi",
      "text": "Get Analysis Fact and News   ",
      "image": 'https://cdn.dribbble.com/users/8091442/screenshots/17655344/media/e39dd7e32abe01e238c30f4d18286936.png',
    },
    {
      "category": "Social",
      "title": "Social Media",
      "text": "Learn from social media trends and analyse it",
      "image": 'https://cdn.dribbble.com/users/86723/screenshots/16635559/media/e794af19c64e6ebf8ccc7f03c7664009.png',
    },
  ]
  
  

  export class Main extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div>
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
  class Button extends React.Component {
    constructor() {
      super();
      this.state = {
        show: true,
        result : ""
      };
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    render() {
      const fetchApi = async (value) => {
        fetch("http://localhost:3000/api/nlp/news?keyword="+value,
          { method: 'POST',
          })
          .then(res => {
            console.log(res);
            return res.text();
          })
          .then((result) => {
            this.setState({ result: result, show: true });
            },
            (error) => {
              console.log(error);
            }
          )};

        const fetchApi2 = async (value) => {
          fetch("http://localhost:3000/api/nlp/socialMedia?keyword="+value,
            { method: 'POST' })
          .then(res => {
            console.log(res);
            return res.text();
          })
          .then((result) => {
            this.setState({ result: result });
            this.showModal();
              console.log(result);
            },
            (error) => {
              console.log(error);
            }
          )};

          
      return (
        <>
        <Modal show={this.state.show} result = {this.state.result} handleClose={this.hideModal}/>
        <button className="button button-primary" onClick={()=>{this.props.title==="NewsApi"? fetchApi("Gold Prize"):fetchApi2("Gold Prize")}}>
          <i className="fa fa-chevron-right"></i> Find out more 
        </button>
        </>
      )
    }
  }
  
  
  class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} className="card-header">
          {/* <h4 className="card-header--title">{category}</h4> */}
        </header>
      )
    }
  }
  
  
  class CardBody extends React.Component {
    render() {
      return (
        <div className="card-body">
          <p className="date">{}</p>
          
          <h2>{this.props.title}</h2>
          
          <p className="body-content">{this.props.text}</p>
          
          <Button title={this.props.title}/>
        </div>
      )
    }
  }
  
  
  class Card extends React.Component {
    render() {
      return (
        <article className="card">
          <CardHeader category={this.props.details.category} image={this.props.details.image}/>
          <CardBody title={this.props.details.title} text={this.props.details.text}/>
        </article>
      )
    }
  }



  