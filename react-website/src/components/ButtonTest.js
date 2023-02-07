// import React from 'react';
// import ProgressButton from 'react-progress-button';
// import './ButtonTest.css';

// export const ButtonTest = React.createClass({
//     getInitialState () {
//       return {
//         buttonState: ''
//       }
//     },
  
//     render () {
//       return (
//         <div>
//           <ProgressButton onClick={this.handleClick} state={this.state.buttonState}>
//             Go!
//           </ProgressButton>
//         </div>
//       )
//     },
  
//     handleClick () {
//       this.setState({buttonState: 'loading'})
//       // make asynchronous call
//       setTimeout(() => {
//         this.setState({buttonState: 'success'})
//       }, 3000)
//     }
// })