import './loading.component.css';

import * as React from 'react';
import { CircularProgress } from 'material-ui';

import * as LoadingInterceptor from './loading.interceptor.ts';

export default class LoadingComponent extends React.Component<{}, { isLoading: boolean; }> {

    constructor(props) {
        super(props);
        this.state = { isLoading: false };
    }

    componentDidMount() { LoadingInterceptor.observable.addListener(this._onModelUpdate.bind(this)); }
    componentWillUnmount() { LoadingInterceptor.observable.removeListener(this._onModelUpdate.bind(this)); }

    _onModelUpdate() {
        this.setState({isLoading: LoadingInterceptor.isLoading()});
    }

    render() {
        return ((() => {
            if (this.state.isLoading) {
                return <span>
                    <div className="loading-overlay"></div>
                    <div className="loading">
                        <CircularProgress mode="indeterminate" />
                    </div>

                </span>
            } else {
                return <span></span>;
            }
        })());
    }

}