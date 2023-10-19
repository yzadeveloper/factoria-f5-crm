import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import DefaultLayoutConfiguration from "../layouts/DefaultLayoutConfiguration";
import DefaultLayoutRecruitment from "../layouts/DefaultLayoutRecruitment";
import DefaultLayoutDashboard from "../layouts/DefaultLayoutDashboard";
import Dashboard from "../pages/Dashboard";
import SelectionDayShow from "../pages/SelectionDay/SelectionDayShow";
import SelectionDayIndex from "./../pages/SelectionDay/SelectionDayIndex";
import SelectionDayAdd from "../pages/SelectionDay/SelectionDayAdd"
import SelectionDayUpdate from "../pages/SelectionDay/SelectionDayUpdate"
import BootcampIndex from '../pages/Bootcamp/BootcampIndex'
import BootcampAdd from '../pages/Bootcamp/BootcampAdd'
import Requirements from "../pages/ConfigurationPages/Requirements";
import RequirementEdit from "../pages/ConfigurationPages/RequirementEdit";
import PersonStatus from "../pages/ConfigurationPages/PersonStatus";
import StatusRequirement from "../pages/ConfigurationPages/StatusRequirement";
import CodersIndex from "../pages/CodersFrontend/CodersIndex";
import Evaluation from "../pages/Evaluation";
import PublicAddPerson from "../pages/Person/PublicAddPerson";
import AdminAddPerson from "../pages/Person/AdminAddPerson";
import ShowPerson from "../pages/Person/ShowPerson";
import AllPeople from "../pages/Person/AllPeople";
import IndexPerson from "../pages/Person/IndexPerson";
import AddPersonFemcoders from "../pages/Person/AddPersonFemcoders";
import AddPersonDigitalAcademy from "../pages/Person/AddPersonDigitalAcademy";


const Router = createBrowserRouter([
  {
    path: '/home',
    element: <Navigate to='/' />
  },
  {
    path: '/dashboard',
    element: <Navigate to='/' />
  },

  {
    path: '/person/:id',
    element: <ShowPerson />
  },
  {
    path: '/people',
    element: <AllPeople />
  },    

  {
    path: '/',
    element: <DefaultLayoutDashboard title='Home'/>,
    children:[
      {
        path: '/',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/tracking',
    element: <DefaultLayout title='Seguimiento' />,
    children:[
      {
        path: '/tracking/bootcamp',
        element: <BootcampIndex />
      },
      {
        path: '/tracking/bootcamp/add',
        element: <BootcampForm />
      },
      {
        path: '/tracking/bootcamp/update/:id',
        element: <BootcampForm />
      },
      {
        path: '/tracking/coders',
        element: <CodersIndex />
      },
      {
        path: '/tracking/coders/add',
        element: <CodersAdd />
      },
      {
        path:'/tracking/evaluation/id',
      element:<Evaluation/>
      }

    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path:'/inscribe',
    element: <PublicAddPerson />
  },

  {
    path:'/inscribe_femcoders',
    element: <AddPersonFemcoders />
  },

  {
    path:'/inscribe_digitalacademy',
    element: <AddPersonDigitalAcademy />
  },

  {
    path: '/recruitment',
    element: <DefaultLayoutRecruitment title='Captación'/>,
    children:[
      
      {
        path:'/recruitment/person/add',
        element: <AdminAddPerson />
      },
      {
        path:'/recruitment/person/index',
        element: <IndexPerson />
      },
      {
      path: '/recruitment/person/:id',
      element: <ShowPerson />
      },
      //
      {
        path: '/recruitment/selectiondayshow/:id',
        element: <SelectionDayShow />
      },
      {
        path: '/recruitment/selectiondayupdate/:id',
        element: <SelectionDayUpdate />
      },
      {
        path: '/recruitment/selectionday/add',
        element: <SelectionDayAdd />
      },
      {
        path: '/recruitment/selectionday',
        element: <SelectionDayIndex />
      },
      {
        path: '/recruitment/estadisticas',
        element: <Statistics />
      },
    
    ]
  },

  //Configuration
  {
    path: '/configuration',
    element: <DefaultLayoutConfiguration title='Configuración'/>,
    children:[
      {
        path: '/configuration/requirements',
        element: <Requirements />
      },
      {
        path: '/configuration/requirements/edit/:id',
        element: <RequirementEdit />
      },
      {
        path: '/configuration/person/status',
        element: <PersonStatus />
      },
      {
        path: '/configuration/status/requirement',
        element: <StatusRequirement />
      },
    ]
  },

])

export default Router;