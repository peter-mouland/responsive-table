import React from 'react';
import { connect } from 'react-redux';

import Table from '../../components/Table/Table';
import { fetchSavingsAccounts } from '../../actions';

const headers = ['Product', 'Interest Rate', 'Minimum Deposit', 'Interest Type'];

class Homepage extends React.Component {

  static needs = [fetchSavingsAccounts];

  constructor(props) {
    super(props);
    this.state = { error: false };
  }

  componentDidMount() {
    if (this.props.savingsAccounts) return;
    this.fetchSavingsAccounts();
  }

  fetchSavingsAccounts() {
    this.props.fetchSavingsAccounts()
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { savingsAccounts } = this.props;
    if (!savingsAccounts) {
      return <div id="homepage">Loading...</div>;
    }
    return (
      <div id="homepage">
        <banner className="header">
          <h1>Savings Accounts</h1>
        </banner>
        <section>
          <Table data={ savingsAccounts.transactions } headers={headers} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    savingsAccounts: state.savings.accounts,
  };
}

export default connect(
  mapStateToProps,
  { fetchSavingsAccounts }
)(Homepage);
