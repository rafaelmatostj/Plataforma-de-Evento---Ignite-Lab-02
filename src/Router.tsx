import { Route, Routes } from "react-router-dom";
import { Event } from "./Pages/Event";
import { Subcribe } from "./Pages/Subscribe";


export function Router(){
    return (
     <Routes>
        <Route path="/" element={<Subcribe  />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/lesson/:slug" element={<Event />} />
     </Routes>
    );
}