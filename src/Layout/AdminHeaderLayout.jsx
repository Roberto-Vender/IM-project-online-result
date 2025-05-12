import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/AdminHeader';



const AdminHeaderLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};


export default AdminHeaderLayout;
