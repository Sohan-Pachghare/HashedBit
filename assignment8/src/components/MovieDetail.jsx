import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import movies from "../data/movies";

function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("")
  const handleBooking = () => {
    if (!name || !email || !mobileNo) return alert("Please enter all details!");
    localStorage.setItem("booking", JSON.stringify({ name, email, mobileNo, movie }));
    navigate("/booking");
  };

  return (
    <div className="p-4 max-w-xl mx-auto ">
      <img src={`/${movie.poster}`} alt={movie.title} className="h-min m-auto" />
      <h1 className="text-2xl font-bold mt-4">{movie.title}</h1>
      <p>{movie.description}</p>
      <input
        className="block mt-4 p-2 border w-full"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        className="block mt-4 p-2 border w-full"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="block mt-4 p-2 border w-full"
        placeholder="Mobile Number"
        value={mobileNo}
        onChange={e => setMobileNo(e.target.value)}
      />
      <button onClick={handleBooking} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">
        Book Now
      </button>
    </div>
  );
}

export default MovieDetail;
