import React from "react";
import {  Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "pages/HomePage";
import UserUsesPage from "pages/UserUsesPage";
import UsesCreatePage from "pages/UseCreatePage";
import UseDetailPage from "pages/UseDetailPage";
import LoginPage from "pages/LoginPage";

function Router() {
  return (
				<Routes>
					<Route exact path="/" element={<HomePage />} />

					<Route exact path="/login" element={<LoginPage />} />
					<Route exact path="/uses/my" element={<UserUsesPage />} />
					<Route exact path="/uses/create" element={<UsesCreatePage />} />
					<Route exact path="/uses/:id" element={<UseDetailPage />} />
					<Route exact path="*" element={<Navigate to="/" />} /> 
				</Routes>
  )
}

export default Router;