import { createSlice } from "@reduxjs/toolkit";
import { id } from "date-fns/locale";

const initialState = {
  events: [
    { 
      id:'d5c3b762-3f1a-44df-90cb-86e945a1eb2a',
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      contact: "9123456780",
      eventName: "Future of AI Conference",
      date: "2025-06-15",
      time: "9 am - 5 pm",
      eventType: ["ONLINE", "PAID"],
      dec: "Explore groundbreaking AI trends and technologies with industry experts at this immersive virtual event.",
      imgURL: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop"
    },
    {
      id:'67b60f8b-bd3c-4a09-8974-d3dc982b2d39',
      name: "Michael Smith",
      email: "michael.smith@example.com",
      contact: "9876543211",
      eventName: "Green Tech Expo",
      date: "2025-07-20",
      time: "11 am - 6 pm",
      eventType: ["OFFLINE", "FREE"],
      dec: "Join innovators and sustainability enthusiasts at this green technology exhibition and showcase.",
      imgURL: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop"
    },
    {
      id:'ce5e6ae4-365f-40b8-bff8-1f21e08ae8f1',
      name: "Priya Kapoor",
      email: "priya.kapoor@example.com",
      contact: "9988776655",
      eventName: "Digital Marketing Bootcamp",
      date: "2025-04-21",
      time: "10 am - 3 pm",
      eventType: ["OFFLINE", "FREE"],
      dec: "Boost your marketing skills with hands-on workshops led by digital marketing professionals.",
      imgURL: "https://images.unsplash.com/photo-1571677246347-5040036b95cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id:'b9d095f9-f05a-4bcf-88a5-5e3b252b16a4',
      name: "Rajesh Verma",
      email: "rajesh.verma@example.com",
      contact: "9001122334",
      eventName: "Open Source Hackathon",
      date: "2025-09-12",
      time: "12 pm - 8 pm",
      eventType: ["ONLINE", "PAID"],
      dec: "Collaborate with developers around the globe to build open-source solutions during this exciting online hackathon.",
      imgURL: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop"
    }
  ],
  
  tagColors: {
    ONLINE: "bg-green-100 text-green-800",
    OFFLINE: "bg-blue-100 text-blue-800",
    FREE: "bg-purple-100 text-purple-800",
    PAID: "bg-red-100 text-red-800",
  },
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      const newEvent = { ...action.payload, id: Date.now().toString() }; // Generating a unique id
      state.events.push(newEvent);
    },
    removeEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload.id
      );
    },
    resetEvents: (state) => {
      state.events = [];
    },
    logout: () => initialState, 
  },
});

export const { addEvent, removeEvent, resetEvents, logout } = eventSlice.actions;
export default eventSlice.reducer;
