import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to='/signin' replace />
    }
    return children
}

export default ProtectedRoutes
