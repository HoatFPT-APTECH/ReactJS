import React, {Component} from "react";
import PropTypes from "prop-types"
class Props_Validation extends Component{
    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>{this.props.type}</li>
                    <li>{this.props.public_year}</li>
                    <li>{this.props.storage}</li>
                </ul>
            </div>

        )
    }
}

Props_Validation.defaultProps={
    name:'Iphone Xs Max',
    type:'ipad',
    public_year:2019,
    storage:'64GB'
}
Props_Validation.propTypes={
    name:PropTypes.string,
    type:PropTypes.oneOf(['iphone','ipad','mac','smartwatch']),
    puplic_year:PropTypes.number,
    storage: PropTypes.string
}
export default Props_Validation;