import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {Cookies} from 'react-cookie'

const cookies = new Cookies();

export const setCookie = (name, value, options)=>{

	return cookies.set(name, value, {...options})
}

export const getCookie = (name)=>{
	return cookies.get(name)
}

export const removeCookie = (name)=>{
	return cookies.remove(name, { path: '/'})
}

const Cookie = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const sessionId = serchParams.get("sessionId");
  const navigate = useNavigate();

  useEffect(() => {
    
    if (sessionId) {
      setCookie("JSESSIONID", sessionId);
    }
    // Redirect to the root URL
    navigate("/");
  }, [sessionId, navigate]);
  

  return <></>;
};

export default Cookie;
