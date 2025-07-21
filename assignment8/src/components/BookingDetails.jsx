import { useNavigate } from "react-router-dom";

function BookingDetails() {
  const navigate = useNavigate();
  const booking = JSON.parse(localStorage.getItem("booking"));

  if (!booking) return <div className="text-center mt-10">No Booking Found</div>;

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold">🎉 Booking Confirmed!</h2>
      <p className="mt-4">Name: <strong>{booking.name}</strong></p>
      <p>Movie: <strong>{booking.movie.title}</strong></p>
      <img src={booking.movie.poster} alt={booking.movie.title} className="mx-auto mt-4 w-48" />
      <button onClick={() => navigate("/")} className="mt-6 bg-green-500 text-white px-4 py-2 rounded">
        Back to Home
      </button>
    </div>
  );
}

export default BookingDetails;