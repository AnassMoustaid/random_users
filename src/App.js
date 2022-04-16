import './App.css';
import { Component } from "react";
import { CardList } from './actualcomponents/list/cardlist.component';
import { Input } from './actualcomponents/input/input.component'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      user : [] ,
      searchField : ""
    }
  }



  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then ((data) => {
    this.setState({user : data});
    console.log('nom', this.state.user);
  });
  }

 

  render() {
    let {searchField, user}= this.state;
    let filteredList = user.filter((user) =>{
      return user.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className='App'>
        <h1>People Profiles</h1>
        {/* <ul className='list'>
          {this.state.users.map((user) => {
            return (
              <li className='list-item' 
               key={user.id} >
                <h1>{user.name} </h1>
                <span>{user.email} </span>
              </li>
            );
          })}
        </ul> */}
        <Input 
        // type="search"
        //  placeholder='Search that user...'
          handleChange={(e) =>{
            this.setState({searchField:e.target.value})}
            } />
        <CardList user={filteredList} />
      </div>
    )
  }


}

export default App;