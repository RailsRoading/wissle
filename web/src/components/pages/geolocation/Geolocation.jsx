import { connect } from 'react-redux'

import {
  acquireLocation,
} from 'actions/ActionCreators'

import GeolocationView from 'components/pages/geolocation/GeolocationView'

function mapStateToProps(state) {
  return {
    latitude: state.app.location.latitude,
    longitude: state.app.location.longitude,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    acquireLocation: () => {
      dispatch(acquireLocation())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeolocationView)
