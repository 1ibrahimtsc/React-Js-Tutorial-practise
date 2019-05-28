import React from 'react';
import logo from './logo.svg';
import './App.css';
const data = [
  {
    "id": 1501798834150,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  },
  {
    "id": 1501798834151,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  },
  {
    "id": 1501798834152,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  },
  {
    "id": 1501798834153,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  },
  {
    "id": 1501798834154,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  },
  {
    "id": 1501798834155,
    "title": "MatLang",
    "image": "http://via.placeholder.com/450x250",
    "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
  }
]

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      posts: [
        {
          "id": 1501798834150,
          "title": "MatLang",
          "image": "http://via.placeholder.com/450x250",
          "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
        },
        {
          "id": 1501798834151,
          "title": "MatLang",
          "image": "http://via.placeholder.com/450x250",
          "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
        },
        {
          "id": 1501798834152,
          "title": "MatLang",
          "image": "http://via.placeholder.com/450x250",
          "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
        },
        {
          "id": 1501798834153,
          "title": "MatLang",
          "image": "http://via.placeholder.com/450x250",
          "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ips"
        },
        
      ]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSingleView = this.handleSingleView.bind(this)
  }
  
  handleDelete(id){
   this.setState({
      posts: this.state.posts.filter(post => post.id != id )
    })
  }
  handleSingleView(id){
    this.setState({
       posts: this.state.posts.filter(post => post.id === id )
     })
   }

 render(){
   console.log(this);
  return (
    <div className="App">
      <div className="HeaderWrap">
         <h1 className="App-title">Welcole React Js </h1>
      </div>
      <div className="Listcontainer">
         
         <div className="Portfolio">
            <div className="image-wrapper">
              <img width="450" height="250" src="http://via.placeholder.com/450x250"/> 
            </div>  
         </div>

          { this.state.posts.map( post => (
            <Portfolio key={post.id} post={ post } handleDelete={this.handleDelete} handleSingleView={this.handleSingleView} />
          )) }
         
      </div>

    </div>
  );
 }
}

export default App;

class Portfolio extends React.Component {
  
    render (){
     //console.log('this.props', this.props)
     const {post, handleDelete, handleSingleView} = this.props; //destructuring
      return (
        <div className="Portfolio">
        <div className="image-wrapper">
          <img width="450" height="250" src={ post.image }/> 
        </div>
        <div className="content-area">
           <h2> {this.props.post.title } </h2>
           <p> {this.props.post.text } </p>
        </div>
        <button onClick={ ()=> this.props.handleDelete(post.id) }>Delete</button>
        <button onClick={ ()=> this.props.handleSingleView(post.id) }>View</button>  
     </div>
      )
    }
}
