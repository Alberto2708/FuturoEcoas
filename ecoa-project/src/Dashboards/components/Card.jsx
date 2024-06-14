const Card = ({ user }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
        /*En este caso, comenzamos la encuesta, utilizando parámetros para documentar la encuesta*/
        navigate(`/users/${user.id}`);
    };
  
    return (
      <div
        onClick={handleClick}
        className="rounded-xl flex flex-col mt-4 mb-4 bg-white text-gray-800 shadow-md hover:shadow-lg cursor-pointer transition duration-300 border border-gray-300"
      >
        <div className="p-4 text-center font-semibold text-lg">{user.name}</div>
        <div className="p-4 text-center text-gray-600">{user.email}</div>
      </div>
    );
  };
  
  export default Card;