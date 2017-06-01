import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setVisibilityFilter} from '../actions';
import {LinkComponent} from '../components/link';

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

export const FilterLink = connect(mapStateToProps, mapDispatchToProps)(LinkComponent) as React.ComponentClass<any>;