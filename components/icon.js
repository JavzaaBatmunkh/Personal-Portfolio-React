export function Icon(props) {
  return (
    <div>
        <img src={"./images/"+props.pic} className="h-16 w-16"/>
        <div>{props.title}</div>    
    </div>
  );
}
