import './App.css';
import React, { useState, useEffect } from 'react'
import { getProfile } from './api';

import { HomePage } from './pages/HomePage'
import { ResultPage } from './pages/ResultPage'
import { NotFound } from './components/NotFound';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [inputUserName, setInputUserName] = useState(null)
  const [loadingProfile, setLoadingProfile] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!data){
      router.navigate("/")
    }
  })

 const handleSubmit = async (e) => {
    e.preventDefault()
    setData(() => null)
    setLoadingProfile(() => true)

  await getProfile(inputUserName)
    .finally(setLoadingProfile(() => false))
    .then(r => setData(r))
    .then(() => router.navigate("/search"))

}

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage 
      loading={loadingProfile}
      onSubmitUserName={e => handleSubmit(e)} 
      onChangeInput={(e) => setInputUserName(e.target.value)}
    />,
  },
  {
    path: "/search",
    element: <ResultPage profileData={data} />,
  },
  {
    path: "/404",
    element: <NotFound />,
  }
]);


  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}
export default App;
