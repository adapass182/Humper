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
        <div class="voteButtonContainer">
          <button class="voteButton" id="dislikeButton" onClick={this.handleDislike.bind(this)}>No Like</button>
          <button class="voteButton" id="likeButton" onClick={this.handleLike.bind(this)}>Like</button>
        </div>



    )
  }
}

function mapStateToProps({ activePhoto }) {
  return { activePhoto }
}

export default connect(mapStateToProps, { getDog, rateDog })(Viewer)
