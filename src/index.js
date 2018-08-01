import React from 'react';
import {extractChildProps} from "./support";


const styles = {
    container : {
        border : "1px solid #efefef",
        position : "relative"
    },
    settings : {
        position : "absolute",
        top : "0px",
        right : "0px",
        background : "#ffffff"
    }
}


class ReactWorkbench extends React.Component {
    
    constructor(props)
        {
            super(props);
            this.state = {
                childProps : {}
            };
        }

    componentDidMount()
        {
            if(this.props.config && this.props.config.childProps)
                {
                    this.setState({
                        childProps : extractChildProps(this.props.config.childProps)
                    })
                }
        }
    
    createSettingControls = ()=>{

        const childProps = this.props.config.childProps;
        var controls = [];

        for (const control in childProps) {
            if (childProps.hasOwnProperty(control)) {
                const element = childProps[control];
                switch (element.control) {
                    case controlTypes.INPUT:
                        controls.push((<li key={control}>
                                            <label for={control}>{control}</label>
                                            <input type="input" value={this.state.childProps[control]} name={control} onChange={this.updateChildState}/>
                                        </li>))
                        break;
                    case controlTypes.DROPDOWN :
                        break;
                    default:
                        break;
                }
            }
        }

        return (
            <ul>{controls}</ul>
        )
    }

    updateChildState = (event)=>
        {
            var name = event.target.name,
                value = event.target.value,
                currentState = Object.assign({}, this.state);

            currentState["childProps"][name] = value;
            this.setState(currentState);
        }
    
    render()
        {
            return (<div className={"react-workbench"} style={styles.container}>
                <div className={"settings"} style={styles.settings}>
                    Settings
                    {this.createSettingControls()}
                </div>
                {React.cloneElement(this.props.children, this.state.childProps)}
            </div>)
        }
}

const controlTypes = {
    INPUT : "input",
    DROPDOWN : "select",
    JSON : "json"
}

export default ReactWorkbench;
export {
    controlTypes
};