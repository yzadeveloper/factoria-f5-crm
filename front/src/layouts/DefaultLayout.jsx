import PropTypes from "prop-types";
import { Outlet } from 'react-router-dom'
import UserNavbarMolecule from '../components/molecules/UserNavbarMolecule'
import Sidebar from "../components/atoms/SideBarAtom"
import NavbarAtom from '../components/atoms/NavbarAtom'
import NavbarAtom from '../components/atoms/NavbarAtom'


import { AuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom';

export default function DefaultLayout({title, menuItems}) {
  const { userToken } = AuthContext();
  const menuItems = [
    { label: 'Inicio', url: '/' },
    { label: 'Jornada de Selección', url: '/jornada_seleccion' },
    { label: 'Total Aspirantes', url: '/total_aspirantes' },
    { label: 'Aspirantes por Bootcamp', url: '/aspirantes_bootcamp' },
    { label: 'Estadísticas', url: '/estadísticas' },
  ];
  
  if(!userToken){
    return <Navigate to ='/login' />
  }

  return (
    <>
        <Sidebar></Sidebar>
        <UserNavbarMolecule title={title}/>
        <NavbarAtom menuItems={menuItems} />
        <Outlet />
    </>
  )
}

DefaultLayout.propTypes = {
  title: PropTypes.any,
}