import React, { Component } from 'react';

import { DragSource } from 'react-dnd';
// import '../style/component/_GlobalNavigator.scss';
/**
 * Implements the drag source contract.
 */
// const cardSource = {
//   beginDrag(props) {
//     return {
//       text: props.text
//     };
//   }
// };

// @DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
//   connectDragSource: connect.dragSource(),
//   isDragging: monitor.isDragging()
// }))

class GlobalNavigator extends Component {
  constructor(props) {
    super(props);
    console.log(DragSource);

    this.handleAppButton = this.handleAppButton.bind(this);
  }

  render() {
    // const { isDragging, connectDragSource } = this.props;

    return (
      <nav className="global-navigator">
        <div className="global-navigator__content">
          <ul>
            <li onClick={this.handleAppButton}>
              <i className="fab fa-instagram fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-chrome fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-slack fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-telegram fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-app-store-ios fa-2x"></i>
            </li>                                
          </ul>
        </div>
      </nav>
    )
  }
  handleAppButton(e) {
    e.preventDefault();
    
    console.log('target app 불러오기')
  }
};

export default GlobalNavigator;