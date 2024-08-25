import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import logoPng from "../assets/GK-logo-2.png"
import avatar from "../assets/avatar.png"
import { Link, useNavigate } from 'react-router-dom'

import { Fragment, useContext } from 'react'
import { AuthorContext } from '../context/AuthorProvider'
import Switch from './Switch'

//tailwindui.com/components/preview navigation, mobile menu button, open, Disclosure.Panel sil

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const {logOut, currentUser} = useContext(AuthorContext)  

  // console.log(currentUser);
  

  const navigate = useNavigate()
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
            {/* Mobile menu button*/}
            
            {/* </div> */}
            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                  alt="Your Company"
                  src={logoPng}
                  className="h-7"
                />
                </Link>
              
                <Link className="text-gray-300 text-3xl font-bold m-3 " to="/">Movie APP</Link>
              </div>            
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

              {/* kullanıcı giriş yaptıysa displayName ekranda görünsün */}
              <h5 className="mr-4 capitalize text-gray-200">{currentUser?.displayName}</h5>            

              <Switch/>

              {/* Profile dropdown  */}
              
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">                  
                    <img
                      alt=""
                      src={currentUser?.photoURL || avatar}
                      referrerPolicy="no-referrer" 
                      className="h-8 w-8 rounded-full"
                    />
                  </MenuButton>
                </div>
              
                <Transition
                as={Fragment}
                // div gibi algılama boş etiket
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                    <MenuItem>
                      {({ active })=> (
                        <Link 
                          to="/register" 
                          className={classNames(
                          active ? "bg-gray-100" : "","block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Register
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active })=> (
                        <Link 
                          to="/login" 
                          className={classNames(
                          active ? "bg-gray-100" : "","block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign In
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <span
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          )}
                          onClick={()=>logOut()}
                        >
                          Sign Out
                        </span>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>              
              </Menu>
            </div>
          </div>
        </div>      
      </Disclosure>
    </>
    
    
  )
}
