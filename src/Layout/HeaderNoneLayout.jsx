import React from 'react';
import { Outlet } from 'react-router-dom';



const HeaderLayout = () => {
  return (
    <div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};


export default HeaderLayout;
