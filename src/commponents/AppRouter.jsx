import React from 'react'
import { Routes,  Route, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';


function AppRouter() {

	
  return (
	<Routes>
		<Route path="/about" element={<About />} />
		<Route exact path="/posts" element={<Posts />} />
		<Route path="/error" element={<Error />} />
		<Route path="*" element={<Navigate to="/error" />} />
		<Route exact path="/posts/:id" element={<PostIdPage />} />

	</Routes>
	
  )
}

export default AppRouter;