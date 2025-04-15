// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Event from './pages/Event';
import BookEvent from './pages/BookEvent';
import About from './pages/About';
import EventDets from './pages/EventDets';
import Layout from './pages/Layout';
import NotPage from './pages/NotPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="bookNow" element={<BookEvent />} />
        <Route path="events" element={<Event />} />
        <Route path="eventDets/:id" element={<EventDets />} />
        <Route path="about" element={<About />} />
        <Route path='*' element={<NotPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
