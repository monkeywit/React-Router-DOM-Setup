import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("handleclick");
    navigate("/");
  };
  return (
    <div>
      Contact <button className="bg-blue-500 rounded px-4 py-1" onClick={handleClick}>Go to home</button>
    </div>
  );
};

export default Contact;
