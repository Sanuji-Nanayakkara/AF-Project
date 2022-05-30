import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/home/index';
import StudentReg from './components/student/student_reg';
import Login from './components/home/login';
import TeamDashboard from './components/student/teamDashboard';
import RegDashboard from './components/home/reg_dashboard';
import StaffTReg from './components/staff/staff_reg';
import AdminDashboard from './components/admin/admin_dashboard';
import AdminViewStaff from './components/admin/admin_view_staff';
import AdminViewOneStaff from './components/admin/staff_one_view';
import ViewMarkingschemes from './components/admin/admin_view_marking_schemes';
import Staff_one_markingSchema from './components/admin/staff_one_markingSchema';
import AdminViewDeadLines from './components/admin/admin_view_deadline';
import OneDeadline from './components/admin/one_deadline';
import StudentGroupManage from './components/admin/studentGroupManage';



function App() {
  return (
  <div>
       <Router>
            <Switch>
                <Route exact path="/"><Index/></Route>
                <Route exact path="/student/Reg"><StudentReg/></Route>
                <Route exact path="/Login"><Login/></Route>
                <Route exact path="/RegDashboard"><RegDashboard/></Route>
                <Route exact path="/student/TeamDashboard"><TeamDashboard/></Route>
                <Route exact path="/staff/StaffTReg"><StaffTReg/></Route>
                <Route exact path="/admin/AdminDashboard"><AdminDashboard/></Route>
                <Route exact path="/admin/AdminViewStaff"><AdminViewStaff/></Route>
                <Route exact path="/admin/AdminViewOneStaff"><AdminViewOneStaff/></Route>
                <Route exact path="/admin/ViewMarkingschemes"><ViewMarkingschemes/></Route>
                <Route exact path="/admin/OneMarkingSchemaView"><Staff_one_markingSchema/></Route>
                <Route exact path="/admin/AdminViewDeadLines"><AdminViewDeadLines/></Route>
                <Route exact path="/admin/OneDeadline"><OneDeadline/></Route>
                <Route exact path="/admin/StudentGroupManage"><StudentGroupManage/></Route>
            </Switch>
      </Router>

  </div>
    );
}

export default App;


