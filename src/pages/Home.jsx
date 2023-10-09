import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/userSlice';

export default function Home() {
    const dispatch = useDispatch();
  return (
    <div>
        <button onClick={() => {
            dispatch(logout());
        }}>Logout</button>
      <h1>Home</h1>
    </div>
  )
}
