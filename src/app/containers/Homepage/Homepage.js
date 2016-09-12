import React from 'react';

import Table from '../../components/Table/Table';

export default class Homepage extends React.Component {

  render() {
    return (
      <div id="homepage">
        <banner className="header">
          <h1>Savings Account</h1>
        </banner>
        <section>
          <Table />
        </section>
      </div>
    );
  }
}
