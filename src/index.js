import React from 'react';
import ReactDOM from 'react-dom';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

class App extends React.Component {
    state = {
        team : [
            {name : 'Sujay', age : 27},
            {name : 'Rohit', age : 28},
            {name : 'Kundan', age : 22}
        ]
    }

    userChangeHandler = (event) => {
        this.setState({
            team : [
                {name : 'Sujay', age : 25},
                {name : 'Rohit', age : 28},
                {name : event.target.value, age : 22}
            ]
        })
    }

    onUserClick = () => {
        this.setState({
            team : [
                {name : 'Pooja', age : 22},
                {name : 'Shweta', age : 23},
                {name : 'Kajal', age : 21}
            ]
        });
    }

    render(){
        const style = {
            backgroundColor : 'white',
            font : 'inherit',
            border : '1px solid blue',
            display : "flex",
            justifyContent: "center",
            marginLeft: 490,
        }
        return (<div className="app">
            <UserInput  name = {this.state.team[2].name} age = {this.state.team[2].age} modified = {this.userChangeHandler}/><br/>
            <button type="button" onClick = {() => this.onUserClick()} style={style}>Click Me!!!</button>
            <UserOutput name = {this.state.team[0].name} age = {this.state.team[0].age}/>
            <UserOutput name = {this.state.team[1].name} age = {this.state.team[1].age}/>
            <UserOutput name = {this.state.team[2].name} age = {this.state.team[2].age} modified = {this.userChangeHandler}/>
        </div>
        );
    }
};

ReactDOM.render(<App />,document.querySelector("#root"));
