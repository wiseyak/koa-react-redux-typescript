import * as React from 'react';

interface linkProps {
    active: boolean;
    children: React.Component<any,any>;
    onClick: () => any;
}

export class LinkComponent extends React.Component< linkProps, any> {
    constructor(props: linkProps){
        super(props);
        this.state = {};
    }

    render(){
        if(this.props.active)
            return <span> {this.props.children} </span>
        
        return(
            <a href="#" onClick={e => {
                    e.preventDefault();
                    this.props.onClick()
                }}>
                {this.props.children}
            </a>
        )
    }
}