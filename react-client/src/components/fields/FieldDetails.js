import React, { Component } from "react";
import axios from "axios";

export default class FieldDetails extends Component {
  state = {
    name: ""
  };

  async componentDidMount() {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    const res = await axios.get(`/api/v1/fields/${id}`);
    console.log(res);
    this.setState({
      name: res.data.name
    });
    console.log(this.state.name);
  }
  render() {
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}
