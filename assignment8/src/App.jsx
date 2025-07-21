import {  BrowserRouter , Routes, Route } from 'react'
import './App.css'
import MovieList from "./components/MovieList.jsx";
import MovieDetail from "./components/MovieDetails.jsx";
import BookingDetails from "./components/BookingDetails.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/booking" element={<BookingDetails/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
