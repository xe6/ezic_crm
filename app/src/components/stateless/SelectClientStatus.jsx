import React, { Component } from 'react';

class SelectClientStatus extends Component {
  render () {
    return(
      <div>
        <select className="browser-default custom-select">
          <option>Client Status</option>
          <option value="1">Active</option>
          <option value="2">Enrolled</option>
          <option value="3">Potential</option>
          <option value="4">Beneficial</option>
          <option value="5">Gone</option>
        </select>
      </div>
    );
  }
}

export default SelectClientStatus;