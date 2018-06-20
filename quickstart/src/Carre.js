import React from 'react';

class Carre extends React.Component {
    constructor(props) {
        super(props);

        this.bc = props.color;
    }

    render() {
        console.log(this.props.color + " - " + this.props.toto);
        return (<div style={{backgroundColor: this.bc, width:"100px", height:"100px"}} ><p>{this.props.toto}</p></div>)
    }
}

export default Carre;