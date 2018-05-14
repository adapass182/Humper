import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getDog, rateDog } from '../actions/rateDog'

class Viewer extends PureComponent {
  componentWillMount() {
    this.props.getDog()
  }

  handleClick() {
    this.props.rateDog(this.props.activePhoto.breed, this.value)
    this.props.getDog()
  }

  render() {
    return (
      <div>
        <img src={this.props.activePhoto.img} />
        <button value="like" onClick={this.handleClick.bind(this)}>
          +
        </button>
        <button value="dislike" onClick={this.handleClick.bind(this)}>
          -
        </button>
      </div>
    )
  }
}

function mapStateToProps({ activePhoto }) {
  return { activePhoto }
}

export default connect(mapStateToProps, { getDog, rateDog })(Viewer)
