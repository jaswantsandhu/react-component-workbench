function extractChildProps(props)
    {
        var childProps = {};
        for (const key in props) {
            if (props.hasOwnProperty(key)) {
                const element = props[key];
                childProps[key] = element.default || "";
            }
        }   
        return childProps
    }
    
export {
    extractChildProps
}