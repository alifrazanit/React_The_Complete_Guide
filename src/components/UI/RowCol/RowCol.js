import './RowCol.css';
export const RowCol = (props) => {
  return (
    <div className="row">
      <div className="col">{props.children}</div>
    </div>
  );
};
