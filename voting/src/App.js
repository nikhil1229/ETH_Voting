import './App.css';
import './All.css';
import axios from "axios";








import React,{useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from './NavBar';
import Voter from './components/Voter'
import CandidateRegister from './components/Candidate_Register'
import Candidate from './components/Candidate';
import VoterRegister from './components/Voter_Regsiter';
import VoterLogin from './components/Voter_Login';
import OrganizerLogin from './components/Organizer_Login';
import CandidateLogin from './components/Candidate_Login';
import Voter_Dash from './components/Voter_Dash';

function App() { 

	return (
		<div >

			<BrowserRouter>
			  
				<NavBar></NavBar>
				<div className='' >
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/Voter" element={<Voter/>} />
					<Route exact path="/Candidate/Register" element={<CandidateRegister/>} />
					<Route exact path="/Voter/Register" element={<VoterRegister/>} />
					<Route exact path="/Candidate" element={<Candidate/>} />
					<Route exact path="/Voter/Login" element={<VoterLogin/>} />
					<Route exact path="/Organizer/Login" element={<OrganizerLogin/>} />
					<Route exact path="/Candidate/Login" element={<CandidateLogin/>} />

				</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
