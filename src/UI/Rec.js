import './Rec.css'
const Rec = (props) =>{
    const classes= 'Rec ' + props.cs;
 
    return (
        <div className={classes}>{props.children} </div>
    )
}
export default Rec;