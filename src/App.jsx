import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Navigation, Articles, Programs, Profile, Home, Record, Chat, Notification, NotFound, Article } from "./components";
import * as Icon from 'react-bootstrap-icons';

function App() {
  const [page, setPage] = useState("Home");
  
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen h-full pb-4 bg-white">
        <Header />
        <div className="w-full h-full pb-20">
          <Routes>
            <Route path="massbeat/" element={<Home />} />
            <Route path="articles" element={<Articles />} />
            <Route path="articles/:id" element={<Article />} />
            <Route path="program" element={<Programs />} />
            <Route path="record" element={<Record />} />
            <Route path="chat" element={<Chat />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notification />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
