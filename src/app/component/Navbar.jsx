'use client'

import React from 'react'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'

import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },

  { name: 'About Us', href: '/about-us' },

  {
    name: 'Services',
    children: [
      { name: 'Services', href: '/services' },
      { name: 'Architecture', href: '/architecture' },
      { name: 'PEB', href: '/peb' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Why Stonearc', href: '/stonearc' },
  { name: 'Process', href: '/process' },
  { name: 'Contact Us', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-lg shadow-lg"
    >
      {({ open }) => (
        <>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">

              <div className="flex items-center">
                <a
                  href="/"
                  className="text-2xl font-bold tracking-wide text-white"
                >
                  StoneArc
                </a>
              </div>

              
              <div className="hidden md:flex items-center space-x-2">

                {navigation.map((item) =>

                  item.children ? (

                    <Menu
                      as="div"
                      className="relative"
                      key={item.name}
                    >
                      <MenuButton className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        {item.name}

                        <ChevronDownIcon className="h-4 w-4" />
                      </MenuButton>

                      <MenuItems className="absolute left-0 mt-3 w-56 origin-top-right rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-xl focus:outline-none">

                        {item.children.map((subItem) => (
                          <MenuItem key={subItem.name}>
                            {({ focus }) => (
                              <a
                                href={subItem.href}
                                className={classNames(
                                  focus
                                    ? 'bg-white/10 text-white'
                                    : 'text-gray-300',
                                  'block rounded-xl px-4 py-3 text-sm transition-all duration-200'
                                )}
                              >
                                {subItem.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}

                      </MenuItems>
                    </Menu>

                  ) : (

                    <a
                      key={item.name}
                      href={item.href}
                      className="rounded-lg px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      {item.name}
                    </a>

                  )

                )}

              </div>

              <div className="md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 transition hover:bg-white/10 hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
            <div className="space-y-2 px-4 py-4">

              {navigation.map((item) => (

                item.children ? (

                  <div
                    key={item.name}
                    className="space-y-2"
                  >
                    <div className="px-4 py-2 text-sm font-semibold text-white">
                      {item.name}
                    </div>

                    <div className="ml-4 space-y-1 border-l border-white/10 pl-4">

                      {item.children.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
                        >
                          {subItem.name}
                        </a>
                      ))}

                    </div>
                  </div>

                ) : (

                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-gray-200 transition duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </a>

                )

              ))}

              

            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar