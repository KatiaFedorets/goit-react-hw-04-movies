import { Component } from 'react';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handelNameChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          autoFocus
          placeholder="Search movie"
          onChange={this.handelNameChange}
        />
        <button type="submit">
          <span>Search movie</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
