import React from 'react';
import { redirect } from 'react-router-dom';


export const requireAuth = async () => {
  const isLoggedIn = false

  if (!isLoggedIn) {
    // console.log(isLoggedIn);
    throw redirect("/login")
  }
}