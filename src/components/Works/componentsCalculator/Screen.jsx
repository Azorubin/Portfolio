import "./Screen.css";


const Screen = ({ value }) => {
  return (
    <p className="screen-calculator" mode="single" max={70}>
      {value}
    </p>
  );
};

export default Screen;

