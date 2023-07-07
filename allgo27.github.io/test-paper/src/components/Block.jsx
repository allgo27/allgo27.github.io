import "../App.css";
import SubBlock from "./SubBlock";

function Block(props) {
  const listOfSubBlocks = props.listOfSubheads.map((subhead, idx) => {
    return (
      <SubBlock
        subheader={subhead}
        listOfBullets={props.listOfBullets[idx]}
        key={idx}
      ></SubBlock>
    );
  });

  return (
    <div className="Block">
      <h2>{props.header}</h2>
      <div className="SubBlock">
        <div className="Line"></div>
        <div className="TextWrapper">
          <div>{listOfSubBlocks}</div>
        </div>
      </div>
    </div>
  );
}

export default Block;
