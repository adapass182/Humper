import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Button from '../components/button'
import { getDog, rateDog } from '../actions/rateDog'

class Viewer extends PureComponent {
  componentWillMount() {
    this.props.getDog()
  }

  handleClick() {
    this.props.rateDog(this.props.activePhoto.breed, this.type)
    this.props.getDog()
  }

  render() {
    return (
      <div>
        <img src={this.props.activePhoto.img} />
        <div class="voteButtonContainer">
          <button class="voteButton" id="dislikeButton">No Like</button>
          <button class="voteButton" id="likeButton">Like</button>
        </div>
    )
  }
}

function mapStateToProps({ activePhoto }) {
  return { activePhoto }
}

export default connect(mapStateToProps, { getDog, rateDog })(Viewer)
