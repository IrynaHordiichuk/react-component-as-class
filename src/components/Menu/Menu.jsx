import { Component } from 'react';
import styles from './menu.module.scss';

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
    };
  }
  // змінюємо state за допомогою індекса, перезаписуємо, не базуючись на попередньому значенні.
  handleClick(e, index){
    e.preventDefault();
    this.setState({activeIndex: index,})
  }
  render() {
    console.log(this);
    const { menuItems } = this.props;
    const { activeIndex } = this.state;
    const elements = menuItems.map(({ id, link, text }, index) => {
    const className =
        activeIndex === index
          ? `${styles.active} ${styles.link}`
          : `${styles.link}`;
      return (
        <li key={id}>
          <a className={className} href={link} onClick={(e) => this.handleClick(e, index)}>
            {text}
          </a>
        </li>
      );
    });
    return <ul className={styles.menu}>{elements}</ul>;
  }
}
