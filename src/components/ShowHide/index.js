// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }

  onClickFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="show-hide-container">
            <div className="first-name-container">
              <button
                className="button"
                type="button"
                onClick={this.onClickFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstName && <p className="first-name">Joe</p>}
            </div>
            <div className="last-name-container">
              <button
                className="button"
                type="button"
                onClick={this.onClickLastName}
              >
                Show/Hide Lastname
              </button>
              {lastName && <p className="last-name">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
