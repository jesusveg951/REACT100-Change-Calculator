import React, { Component } from 'react';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      changeDue: '',
      twenties: '',
      tens: '',
      fives: '',
      ones: '',
      quarters: '',
      dimes: '',
      nickels: '',
      pennies: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    const amountDue = Number(this.state.amountDue);
    const amountReceived = Number(this.state.amountReceived);
    const totalCentsToReturn = (amountReceived - amountDue) * 100;

    this.setState({
      changeDue: (amountReceived - amountDue).toFixed(2),
      twenties: Math.floor((totalCentsToReturn) / 2000),
      tens: Math.floor((totalCentsToReturn % 2000) / 1000),
      fives: Math.floor(((totalCentsToReturn % 2000) % 1000) / 500),
      ones: Math.floor((((totalCentsToReturn % 2000) % 1000) % 500) / 100),
      quarters: Math.floor(((((totalCentsToReturn % 2000) % 1000) % 500) % 100) / 25),
      dimes: Math.floor((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) / 10),
      nickels: Math.floor(((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) % 10) / 5),
      pennies: Math.ceil(((((((totalCentsToReturn % 2000) % 1000) % 500) % 100) % 25) % 10) % 5),
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    return (
      <div>
        <div className='container'>
          <h1>Change Calculator</h1>
          <hr />

          <div class="row">
            <div class="col-sm-4">
              <div class="panel panel-default">
                <div class="panel-heading">Enter Information</div>
                <br />
                <div class="panel-body">Price?</div>
                <input name="amountDue" type="number" placeholder='00.00' className="form-control" value={this.state.amountDue} onChange={this.handleChange} />
                <br />
                <div class="panel-body">Received?</div>
                <input name="amountReceived" type="number" placeholder='00.00' className="form-control" value={this.state.amountReceived} onChange={this.handleChange} />
                <br />
                <div class="panel-footer">
                  <button name="submit" style={{ backgroundColor: "red" }} className="btn btn-primary" onClick={this.calculate}>Calculate</button>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div class="column">
            <div class="col-sm-8">
              <div class="panel panel-success">
                <div class="panel-heading">Change:</div>
                <div class="panel-body">
                  <output name="changeDue" id="changeDue" placeholder='0'>${this.state.changeDue}</output>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div class="column">
            <div class="row">

              <div>
                <label className="control-label col-sm-3">Twenties</label>
                <output name="twenties" id="twenties">{this.state.twenties}</output>
              </div>

              <div>
                <label className="control-label col-sm-3">Tens</label>
                <output name="tens" id="tens">{this.state.tens}</output>
              </div>

              <div>
                <label className="control-label col-sm-3">Fives</label>
                <output name="fives" id="fives">{this.state.fives}</output>
              </div>  <div>
                <label className="control-label col-sm-3">Ones</label>
                <output name="ones" id="ones">{this.state.ones}</output>
              </div>

            </div>

            <hr />

            <div class="row">
              <div>
                <label className="control-label col-sm-3">Quarters</label>
                <output name="quarters" id="quarters">{this.state.quarters}</output>
              </div>

              <div>
                <label className="control-label col-sm-3">Dimes</label>
                <output name="dimes" id="dimes">{this.state.dimes}</output>
              </div>

              <div>
                <label className="control-label col-sm-3">Nickels</label>
                <output name="nickels" id="nickels">{this.state.nickels}</output>
              </div>

              <div>
                <label className="control-label col-sm-3">Pennies</label>
                <output name="pennies" id="pennies">{this.state.pennies}</output>
              </div>

            </div>
          </div>
        </div>
      </div>

    );
  }
}
