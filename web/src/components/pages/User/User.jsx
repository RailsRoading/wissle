import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userActions from '../../../actions/ActionCreators'
import UserView from 'components/pages/User/UserView'

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView)
