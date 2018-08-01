import React from 'react';
import { render} from 'react-dom';
import ReactWorkbench, { controlTypes } from '../../src';

class ComponentToTest extends React.Component
    {
        render()
            {
                return (<div>
                    this is a test component. 
                    <div>{this.props.message}</div>
                    <div>{this.props.sender}</div>
                </div>)
            }
    }

class App extends React.Component
    {

        render()
            {
                const workbenchConfig = {
                    childProps : {
                        message : {
                            type : "string",
                            control : controlTypes.INPUT,
                            default : "Hi, I am a test message"
                        },
                        sender : {
                            type : "string",
                            control : controlTypes.INPUT,
                            default : "Awesome User"
                        }
                    }
                };

                return (<ReactWorkbench config={workbenchConfig}>
                            <ComponentToTest/>
                        </ReactWorkbench>)
            }
    }


render(<App />, document.getElementById("root"));