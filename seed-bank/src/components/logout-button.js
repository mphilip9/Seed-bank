// src/components/logout-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({user}) => {
  const { logout } = useAuth0();
  return (
    <button
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={() => {
        console.log(user)
        logout({
          returnTo: window.location.origin,
        })
      }
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;