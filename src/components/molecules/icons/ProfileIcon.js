import React from "react";

export default function ProfileIcon({ user }) {
  return (
    <img
      src={user.picture}
      style={{ width: 40, borderRadius: 50 }}
      alt="Profile"
    />
  );
}
