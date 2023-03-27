import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Navigation, Articles, Programs, Profile, Home, Record, Chat, Notification, NotFound, Article } from "./components";
import * as Icon from 'react-bootstrap-icons';
import logo from "./assets/logo.png";

function App() {
  const [page, setPage] = useState("Home");
  
  return (
    <BrowserRouter>
      <div className="hidden w-full min-h-screen sm:grid sm:place-items-center">
        <div className="flex flex-col justify-between items-center gap-4 h-full font-semibold py-6">
          <span className="text-primary text-lg font-medium"><span className="text-slate-900">MassBeat</span> - workout and trainer consultation app</span>
          <div className="flex flex-col items-center justify-center gap-1 text-tertiary text-center">
            <img src={logo} alt="logo" className="w-60 h-auto mb-2 mx-auto" />
            <h1 className="text-3xl font-semibold">
              MassBeat is currently under development
            </h1>
            <h2 className="text-2xl">
              You can try massbeat on the <span className="text-primary">mobile screen</span> for now
            </h2>
          </div>
          <div className="text-primary text-lg font-medium">MassBeat Developer - <span className="text-slate-900">Hibatillah</span></div>
        </div>
      </div>
      <div className="w-full min-h-screen h-full pb-4 bg-white sm:hidden">
        <Header />
        <div className="w-full h-full pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
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
