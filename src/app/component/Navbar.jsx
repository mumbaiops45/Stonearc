'use client'

import Link from 'next/link'
import { Fragment } from 'react'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
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
      { name: 'Construction', href: '/construction' },
      { name: 'Architecture', href: '/architecture' },
      { name: 'PEB', href: '/peb' },
    ],
  },

  { name: 'Projects', href: '/projects' },
  { name: 'Why Stonearc', href: '/stonearc' },
  { name: 'Process', href: '/process' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact Us', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-2xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              
            
              <div className="flex items-center">
                <Link
                  href="/"
                  className="group flex items-center"
                >
                  <img
                    src="/logo.png"
                    alt="StoneArc Logo"
                    className="h-20 w-20 object-contain transition  duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>

           
              <div className="hidden md:flex items-center gap-2">
                {navigation.map((item) =>
                  item.children ? (
                    <Menu
                      as="div"
                      className="relative"
                      key={item.name}
                    >
                      <MenuButton className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-white">
                        {item.name}

                        <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-data-[headlessui-state=open]:rotate-180" />
                      </MenuButton>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <MenuItems className="absolute left-0 mt-4 w-60 rounded-2xl border border-white/10 bg-black/90 p-2 shadow-2xl backdrop-blur-2xl focus:outline-none">
                          {item.children.map((subItem) => (
                            <MenuItem key={subItem.name}>
                              {({ focus }) => (
                                <Link
                                  href={subItem.href}
                                  className={classNames(
                                    focus
                                      ? 'bg-white/10 text-white'
                                      : 'text-gray-300',
                                    'block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200'
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              )}
                            </MenuItem>
                          ))}
                        </MenuItems>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

             
              <div className="md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-gray-200 transition hover:bg-white/10 hover:text-white">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

        
          <DisclosurePanel className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-2xl">
            <div className="space-y-2 px-4 py-5">
              {navigation.map((item) =>
                item.children ? (
                  <Disclosure
                    as="div"
                    key={item.name}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                  >
                    {({ open }) => (
                      <>
                        <DisclosureButton className="flex w-full items-center justify-between px-4 py-4 text-left text-base font-medium text-white transition hover:bg-white/10">
                          <span>{item.name}</span>

                          <ChevronDownIcon
                            className={classNames(
                              open ? 'rotate-180' : '',
                              'h-5 w-5 transform transition-transform duration-300'
                            )}
                          />
                        </DisclosureButton>

                        <DisclosurePanel className="space-y-1 px-3 pb-3">
                          {item.children.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-2xl px-4 py-4 text-base font-medium text-gray-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}