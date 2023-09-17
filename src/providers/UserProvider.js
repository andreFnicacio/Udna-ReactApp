import propTypes from 'prop-types';
import React, { createContext, useContext, useState, useMemo } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const defaultContext = useMemo(
		() => ({
			user,
			setUser,
		}),
		[user],
	);

	return (
		<UserContext.Provider value={defaultContext}>
			{children}
		</UserContext.Provider>
	);
};

const useUser = () => useContext(UserContext);

UserProvider.propTypes = {
	children: propTypes.node.isRequired,
};

export { UserProvider, useUser };
