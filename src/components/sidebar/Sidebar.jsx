import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setPrevPrompt } = useContext(Context);
  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          className="menu"
          onClick={() => setExtended((prev) => !prev)}
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((item, index) => {
              return(
              <div className="recent-entry">
                <img src={assets.message_icon} alt="" />
                <p>{item}...</p>
              </div>
              )
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended && <p>Activvity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
