import "../App.css";

function SubBlock(props) {
  return (
    <div className="Block">
      {props.subheader}
      <div className="TextWrapper">
        <ul>{props.listOfBullets}</ul>
      </div>
    </div>
  );
}

export default SubBlock;
