import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from "pages/HomePage";
import UserUsesPage from "pages/UserUsesPage";
import UsesCreate from "pages/UseCreate";

function Router() {
  return (
    <BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/uses/*">
						<Route path="/uses/my" component={UserUsesPage} />
						<Route path="/uses/create" component={UsesCreate} />
					</Route>
					<Route path="*" render={() => <Redirect to="/" />} />
				</Switch>
		</BrowserRouter>
  )
}

export default Router;