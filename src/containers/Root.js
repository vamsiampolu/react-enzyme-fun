import React,{Component} from 'react';
const styles = {
  height:'100%',
  background:'#333'
};

export default class Root extends Component {
  render() {
    return (
     <div style={styles}>
        <h1 className="welcome-header">Welcome to testing react</h1>
     </div>		    
    )
  }
}
