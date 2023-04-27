function WarningBanner(props){
    if (!props.Warning){
        return null;
    }
    return (
        <div>경고!</div>
    )
}