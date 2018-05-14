import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getDog, rateDog } from '../actions/rateDog'

class Viewer extends PureComponent {
  componentWillMount() {
    this.props.getDog()
  }

  handleLike() {
    this.props.rateDog(this.props.activePhoto.breed, 'Like')
    this.props.getDog()
  }

  handleDislike() {
    this.props.rateDog(this.props.activePhoto.breed, 'Dislike')
    this.props.getDog()
  }

  render() {
    return (
      <div>
        <img src={this.props.activePhoto.img} alt="current dog" />
        <button value="like" onClick={this.handleLike.bind(this)}>
          +
        </button>
        <button value="dislike" onClick={this.handleDislike.bind(this)}>
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
