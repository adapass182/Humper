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
        <Button type="like" onClick={this.handleClick.bind(this)}>+</Button>
        <Button type="dislike" onClick={}>-</Button>
      </div>
    )
  }
}

function mapStateToProps({ activePhoto }) {
  return { activePhoto }
}

export default connect(mapStateToProps, { getDog, rateDog })(Viewer)
