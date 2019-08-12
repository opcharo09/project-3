// import React from 'react';
// import { Button, Modal, ModalBody,  } from 'reactstrap';
// import Login from '../Login';

// class SignInModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
//           <ModalBody>
//            <Login></Login>
//           </ModalBody>
          
//         </Modal>
//       </div>
//     );
//   }
// }

// export default SignInModal;