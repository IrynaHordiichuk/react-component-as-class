import { Component } from 'react';
import styles from './toggle-button.module.scss';


export default class ToggleButton extends Component {

state = {
    isActive: false,
}

handleClick = (param) => {
// prevState is a default param in calback function in setState function 
    this.setState((prevState)=>{
      return {
        isActive: !prevState.isActive,
      }  
    })

}

  render() {
    const { buttonText } = this.props;
    const {isActive} = this.state;
    const className = isActive ? `${styles.active} ${styles.btn}` : `${styles.btn}`

    return <button className={className} onClick={this.handleClick}>{buttonText}</button>;
  }
}
