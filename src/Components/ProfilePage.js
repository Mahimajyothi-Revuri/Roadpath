import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || {
      name: "User",
      avatar: null,
    };
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsOpen(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedUser = { ...user, avatar: reader.result };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  if (!user) return null;

  return (
    <div className="container">
      <label htmlFor="file-upload">
        <img
          src={user.avatar || "https://via.placeholder.com/150"}
          alt="pic"
          className="user-pic"
          onClick={toggleDropdown}
        />
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      {isOpen && (
        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img
                src={user.avatar || "https://via.placeholder.com/150"}
                alt="User Avatar"
              />
              <h3>{user.name}</h3>
            </div>
            <hr />
            <p>
              <Link to="/profile">
                <i className="fas fa-user"></i> Profile
              </Link>
            </p>
            <p>
              <Link to="/your-stars">
                <i className="fas fa-star"></i> Your Stars
              </Link>
            </p>
            <p>
              <Link to="/bookmarks">
                <i className="fas fa-bookmark"></i> Bookmarks
              </Link>
            </p>
            <p>
              <Link to="/teacher-community">
                <i className="fas fa-users"></i> Teacher and Community
              </Link>
            </p>
            <p>
              <Link to="/notifications">
                <i className="fas fa-bell"></i> Notifications
              </Link>
            </p>
            <p>
              <Link to="/support">
                <i className="fas fa-question-circle"></i> Support & FAQs
              </Link>
            </p>
            <p>
              <Link to="/settings">
                <i className="fas fa-cog"></i> Settings
              </Link>
            </p>
            <p onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;