const Popup = (props) => {
  return (
    <div className="popup-box" style={{ zIndex: "1000" }}>
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
