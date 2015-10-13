
import * as React from 'react';
// import * as ReactDOM from 'react/lib/ReactDOM';

interface TestProps extends React.Props<any> {
    name: string
}

class TestComponent extends React.Component<TestProps, {}> {

    render() {
        return( 
            <div>
                Hello, {this.props.name}
            </div>
        );
    }

}

let node = document.getElementById('content');
React.render(<TestComponent name="Tomas" />, node);
