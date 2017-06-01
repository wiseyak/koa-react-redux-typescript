import * as React from 'react';
declare var $: any;

export interface todoProps {
    onClick: () => any;
    completed: boolean;
    text: string;
    id: number;
}

export class TodoComponent extends React.Component<todoProps, any> {
    constructor(props: todoProps){
        super(props);
        this.state={};
    }

    render() {
        return(
            <li onClick={this.props.onClick}
                style={{textDecoration: this.props.completed ? 'line-through' : 'none'}}
            >{this.props.text}</li>
        );
    }
}