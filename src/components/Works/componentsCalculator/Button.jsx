import "./Button.css";

const styleBtn={
  border: 'none',
  backgroundColor: 'rgb(80,60,209)',
  fontSize: '24px',
  color: 'rgb(255,255,255)',
  fontWeight: 'bold',
  cursor: 'pointer',
  borderRadius: '10px',
  outline: 'none',};

const Button = ({ className,value,onClick }) => {

  



  return <button style={styleBtn} className={className} onClick={onClick}>
    {value}</button>;
};

export default Button;