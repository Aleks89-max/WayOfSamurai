import React from 'react';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
     <header className='header'>
         <img src="https://i.pinimg.com/736x/70/99/3c/70993c579d5e336da07f558f7b842b11--clean-energy-logo-energy-graphic.jpg" alt="beach"/>
     </header>
        <nav className='nav'>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a> Messages</a>
            </div>
            <div>
                <a> News</a>
            </div>
            <div>
                <a> Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
        <div className='content'>
            <div>
            <img src="https://www.sunhome.ru/i/wallpapers/51/sklon-gori-v2.orig.jpg" alt="beach"/>
            </div>
            <div>Ava + Description</div>
            <div>
                My posts
            <div>New post</div>
                <div>
                    <div>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                    <div>post4</div>
                </div>

            </div>

        </div>
    </div>
  );
}

export default App;
