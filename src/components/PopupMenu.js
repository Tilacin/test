import React, { useContext, useState } from 'react';
import { SoundContext } from '../soundContext';
import { Link } from 'react-router-dom';

const PopupMenu = ({ onHomePage }) => {
    const { isSoundOn, toggleSound, playSound } = useContext(SoundContext);
    const [showMenu, setShowMenu] = useState(false);
  
    const handleToggleSound = () => {
      toggleSound();
      playSound(!isSoundOn); // Переключаем звук
    };

  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
        <img src="setting.png" alt="Settings" width={35} height={35}/>
      </div>
      {showMenu && (
        <div className="absolute top-0 right-0 bg-white border border-gray-300 shadow z-10 cursor-pointer" >
          <div className="p-2" onClick={handleToggleSound}>
            {isSoundOn ? 'Выключить звук' : 'Включить звук'}
          </div>
          { !onHomePage && <Link to="/" className="p-2">На главную</Link> }
          <div className="cursor-pointer absolute top-2 right-2" onClick={() => setShowMenu(false)}>
            <img src="close.png" alt="Close" width={35} height={35}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupMenu;