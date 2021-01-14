import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    showCounter: true,
    showState: false,
    showForm: false,
    counter: 0,
  }

  showCounterSection = () => this.setState({
    showCounter: true,
    showState: false,
    showForm: false,
  })

  showStateSection = () => this.setState({
    showCounter: false,
    showState: true,
    showForm: false,
  })

  showFormSection = () => this.setState({
    showCounter: false,
    showState: false,
    showForm: true,
  })

  increase = () => this.setState({
    counter: this.state.counter + 1
  })

  decrease = () => this.setState({
    counter: this.state.counter - 1
  })

  render() {
    return (
      <div>
        <nav>
          <div onClick={this.showCounterSection}>
            Contador
          </div>
          <div onClick={this.showStateSection}>
            Estado del contador
          </div>
          <div onClick={this.showFormSection}>
            Cambiar valores
          </div>
        </nav>
        {
          this.state.showCounter &&
          <div className='full-container'>
            <div>
              <h2 className='count-value'>{this.state.counter}</h2>
              <div>
                <button style={{
                  width: '150px',
                  height: '150px',
                  'margin-right': '40px'
                  }} onClick={this.increase}>
                  +
                  </button>
                <button style={{
                  width: '150px',
                  height: '150px',
                  'margin-right': '40px'
                  }} onClick={this.decrease}>
                  -
                </button>
              </div>
            </div>
          </div>
        }
        {
          this.state.showState &&
          <div className='full-container'>
            <div>
              <h2 className='count-value'>{this.state.counter}</h2>
              <h3 className='current-value'>Valor actual</h3>
            </div>
          </div>
        }
        {
          this.state.showForm &&
          <div className='full-container'>
            <div>
              <h1 className='current-value'>Puedes cambiar el valor del contador</h1>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div>
                  <input
                    className='input-counter'
                    value={this.state.counter}
                    onChange={(e) => this.setState({ counter: Number(e.target.value) })}
                    placeholder='Nuevo valor...'
                  />
                  <button>Aceptar</button>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}


export default App;
