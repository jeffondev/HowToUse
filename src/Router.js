import React from "react";
import {  Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "pages/HomePage";
import UserUsesPage from "pages/UserUsesPage";
import UsesCreatePage from "pages/UseCreatePage";
import UseDetailPage from "pages/UseDetailPage";
import LoginPage from "pages/LoginPage";
import LogoutPage from "pages/LogoutPage";

function Router({isLoggedIn}) {
  return (
		<Routes>
			{isLoggedIn ? (
				<>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/logout" element={<LogoutPage />} />
					<Route exact path="/uses/my" element={<UserUsesPage />} />
					<Route exact path="/uses/create" element={<UsesCreatePage />} />
					<Route exact path="/uses/:id" element={<UseDetailPage />} />
					<Route exact path="*" element={<Navigate to="/" />} /> 
				</>
				) : (
					<Route exact path="/" element={<LoginPage />} />
				)
			}
		</Routes>
  )
}

export default Router;