import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component<object, object> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const modalElement = document.getElementById("trailer-modal");
    if (modalElement) {
      return ReactDOM.createPortal(this.props.children, modalElement);
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export { Modal };
