import React, { Component } from "react";
import { ClipLoader } from "react-spinners";

export class Loader extends Component {
  render() {
    if (this.props.fullscreen) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <ClipLoader
            sizeUnit={"px"}
            size={40}
            color={this.props.color || "grey"}
            loading={true}
          />
        </div>
      );
    }
    if (this.props.small)
      return (
        <ClipLoader
          sizeUnit={"px"}
          size={20}
          color={this.props.color || "grey"}
          loading={true}
        />
      );
    if (this.props.large) {
      return (
        <ClipLoader
          sizeUnit={"px"}
          size={80}
          color={this.props.color || "grey"}
          loading={true}
        />
      );
    }
    return (
      <ClipLoader
        sizeUnit={"px"}
        size={40}
        color={this.props.color || "grey"}
        loading={true}
      />
    );
  }
}
