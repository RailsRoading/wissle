import React from "react"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, FusionTablesLayer } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 57.049515, lng: 9.916286 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 57.049515, lng: 9.916286 }} onClick={props.onMarkerClick} />}

    <FusionTablesLayer
      url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
      options={{
        query: {
          select: `Geocodable address`,
          from: `1mZ53Z70NsChnBMm-qEYmSDOvLXgrreLTkQUvvg`
        }
      }}
      />
    </GoogleMap>
))

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: true,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: true })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyMapComponent
