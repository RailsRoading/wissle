import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as userActions from '../../../actions/ActionCreators';
import TagView from 'components/pages/Tag/TagView';

function mapStateToProps(state, ownProps) {
    return {
        tag: state.tag
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TagView);
