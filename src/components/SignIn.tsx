"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Dropdown = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="relative flex align-center justify-end w-[10em] z-20"
    >
      <button onClick={toggleDropdown}>{text} ≡</button>
      {isOpen && (
        <ul className="dropdown-menu absolute top-[100%] right-0">
          <li className="text-right">View Profile</li>
          <li className="text-right"><button onClick={logout}>Logout</button></li>
        </ul>
      )}
    </div>
  );
};

async function logout() {
  try {
    const { data: userData } = await axios.get(
      "http://localhost:8080/logout",
      {
        withCredentials: true,
      },
    );
  } catch (error) {
    console.log(error);
  }
  window.location.reload();
}

export default function GoogleSignIn() {
  const [user, setUser] = useState(null);

  const updateLogin = async () => {
    try {
      const { data: userData } = await axios.get(
        "http://localhost:8080/protected",
        {
          withCredentials: true,
        },
      );
      setUser(userData.name);
    } catch (error) {
      setUser("");
      console.log("ERROR");
    }
  };

  useEffect(() => {
    console.log("AHHHHH");
    updateLogin();
  }, []);

  const handleLoginSuccess = async (response) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/auth/google",
        {
          code: response.code,
        },
        {
          withCredentials: true,
        },
      );

      updateLogin();
    } catch (error) {
      console.error("Error during authentication", error);
    }
  };

  const handleLoginFailure = (error) => {
    console.error("Login failed", error);
  };

  const login = useGoogleLogin({
    onSuccess: handleLoginSuccess,
    onError: handleLoginFailure,
    flow: "auth-code",
  });

  if (user == null) {
    return <div className="flex align-center justify-end px-4 w-[15em]"></div>;
  }

  return (
    <div className="flex align-center justify-end px-4 w-[15em]">
      {user ? (
        <Dropdown text={user} />
      ) : (
        <button
          onClick={() => {
            login();
          }}
        >
          SIGN IN
        </button>
      )}
    </div>
  );
}