import React from 'react';
import Userlist from '../containers/user-list';
import UserDetail from '../containers/user-details';
require('../../scss/style.scss');

const App = () => (
	<div>
		<h2>Username List:</h2>
		<Userlist />		
		<hr/>
		<h2>User Details:</h2>
		<UserDetail />
	</div>
);

export default App;