import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/ActionCreators';
import WissleView from 'components/pages/Wissle/WissleView';

function mapStateToProps(state, ownProps) {
    return {
        wissle: state.wissle
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WissleView);
