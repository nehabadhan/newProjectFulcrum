import React, { Component } from "react";
// import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
// import Collapsible from 'react-collapsible';

// class London extends Component {
//   render() {
//     return (
//         <div>
//       <Button id="PopoverFocus" type="button">
//         Launch Popover (Focus)
//       </Button>
//       {' '}
//       <Button id="PopoverClick" type="button">
//         Launch Popover (Click)
//       </Button>
//       {' '}
//       <Button id="PopoverLegacy" type="button">
//         Launch Popover (Legacy)
//       </Button>
//       <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
//         <PopoverHeader>Focus Trigger</PopoverHeader>
//         <PopoverBody>Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try.</PopoverBody>
//       </UncontrolledPopover>
//       <UncontrolledPopover trigger="click" placement="bottom" target="PopoverClick">
//         <PopoverHeader>Click Trigger</PopoverHeader>
//         <PopoverBody>Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover.</PopoverBody>
//       </UncontrolledPopover>
//       <UncontrolledPopover trigger="legacy" placement="bottom" target="PopoverLegacy">
//         <PopoverHeader>Legacy Trigger</PopoverHeader>
//         <PopoverBody>
//           Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.</PopoverBody>
//       </UncontrolledPopover>
//     </div>
//     );
//   }
// }
// class Collapse extends React.Component {
//   constructor(props){
//       super(props);
//       this.state = {
//           open: false
//       }
//       this.togglePanel = this.togglePanel.bind(this);
//   }

//   togglePanel(e){
//       this.setState({open: !this.state.open})
//   }

//   componentDidUpdate(){
//       // this.props.onToggle(this.props.index);
//   }

//   render() {
//     return (<div>
//       <div onClick={(e)=>this.togglePanel(e)} className='header'>
//           {this.props.title}</div>
//       {this.state.open ? (
//           <div className='content'>
//               {this.props.children}
//           </div>
//           ) : null}
//     </div>);
//   }
// }

// class London extends React.Component {
//   constructor(props) {
//     super(props);

//   }
//   render() {
//     return  (<div>
//         <Collapse title="Header">
//           <div> <p>Content of Collapsible</p>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//       minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
//       commodo consequat.</p>

//           </div>
//         </Collapse>
//     </div>
//     )
//   }
// }

class London extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }
  // [...]


  render() {
    return (
      <div className="container">
      <div className="col-xs-12">
      <h1>My Todos</h1>
      {this.state.todos.map((todo) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
            { todo.completed &&
              <span>
              Completed
              </span>
            }
            { !todo.completed &&
              <span>
                Pending
              </span>
            }              
            </h6>
          </div>
        </div>
      ))}
      </div>
     </div>
    );
  }
}

export default London;