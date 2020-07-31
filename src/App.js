import React, {Component}  from 'react';
import Ninjas from './ninjas'
import AddNinja from'./addNinja'


class App extends Component {
  state ={
    ninjas : [
      {name: 'ryu', age: 30, belt: 'black', id:1},
      {name: 'Yoshi', age: 20, belt: 'green', id:2},
      {name: 'Crystal', age: 25, belt: 'pink', id:3},
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
    deleteNinja = (id) => { 
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.id != id
      });
      this.setState({
        ninjas :ninja
      })
}
  }
  componentDidMount(){
    console.log('component mounted')
  this.componentDidUpdate(prevProps, prevState){
    console.log('component updated');
    
  }
  }
   render() {
     return (
       <div className="App">
      <hi>My First React App</hi>
      <p>Welcome :)</p>
      <Ninjas deleteNinja={this.deleteNinja}   ninjas={this.state.ninjas}/>
      <AddNinja addNinja={this.addNinja} />

      </div>
     )
     }
  }

  export default App