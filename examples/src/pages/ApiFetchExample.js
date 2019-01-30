import React from 'react';
import ForteTable from '../../../src/ForteTable';

class ApiFetchExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputRecipe: '',
      data: null,
    };

    // this.handleInput = this.handleInput.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('https://api.punkapi.com/v2/beers/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  // handleInput(recipe) {
  //   this.setState({
  //     inputRecipe: recipe
  //   }, function() {
  //     this.fetchData()
  //   });
  // }

  render() {
    return (
      <div>
        <input placeholder='Type a recipe' onInput={this.handleInput} />
        <ForteTable
          rows={() => [1, 2, 3, 4, 5, 6, 7, 8, 9]}
          columns={() => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']}
          cellRender={(c, r) => {
            return 'cell' + c + r;
          }}
          onCellClick={(e, c, r) => {
            alert('buuu:' + c + r);
          }}
        />
      </div>
    );
  }
}

export default ApiFetchExample;
