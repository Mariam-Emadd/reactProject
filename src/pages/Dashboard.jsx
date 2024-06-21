import React from 'react'

import TopBar from '../Components/TopBar'
import SideBar from '../Components/SideBar'
import Users from './Users';
import { Outlet, Route } from 'react-router-dom';
import AssignRole from '../Components/AssignRole';

function Dashboard() {
  return (
    <div>
      <TopBar />
      
      <div className="content-flex">
        <SideBar />
        <div style={{width:"80%"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
