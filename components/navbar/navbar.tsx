// 'use client'
// import React, { createElement, useEffect, useState } from "react";
// import {
//   Navbar,
//   MobileNav,
//   Typography,
//   Button,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Avatar,
//   Card,
//   IconButton,
// } from "@material-tailwind/react";
// import {
//   CubeTransparentIcon,
//   UserCircleIcon,
//   CodeBracketSquareIcon,
//   Square3Stack3DIcon,
//   ChevronDownIcon,
//   Cog6ToothIcon,
//   InboxArrowDownIcon,
//   LifebuoyIcon,
//   PowerIcon,
//   RocketLaunchIcon,
//   Bars2Icon,
// } from "@heroicons/react/24/solid";
 
// // profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Inbox",
//     icon: InboxArrowDownIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];
 
// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
//   const closeMenu = () => setIsMenuOpen(false);
 
//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList className="p-1">
//         {profileMenuItems.map(({ label, icon }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2 rounded ${
//                 isLastItem
//                   ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                   : ""
//               }`}
//             >
//               {createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}
//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }
 
// // nav list menu
// const navListMenuItems = [
//   {
//     title: "@material-tailwind/html",
//     description:
//       "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
//   },
//   {
//     title: "@material-tailwind/react",
//     description:
//       "Learn how to use @material-tailwind/react, packed with rich components for React.",
//   },
//   {
//     title: "Material Tailwind PRO",
//     description:
//       "A complete set of UI Elements for building faster websites in less time.",
//   },
// ];
 
// function NavListMenu() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
 
//   const renderItems = navListMenuItems.map(({ title, description }) => (
//     <a href="#" key={title}>
//       <MenuItem>
//         <Typography variant="h6" color="blue-gray" className="mb-1">
//           {title}
//         </Typography>
//         <Typography variant="small" color="gray" className="font-normal">
//           {description}
//         </Typography>
//       </MenuItem>
//     </a>
//   ));
 
//   return (
//     <>
//       <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
//         <MenuHandler>
//           <Typography as="a" href="#" variant="small" className="font-normal">
//             <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
//               <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//               Pages{" "}
//               <ChevronDownIcon
//                 strokeWidth={2}
//                 className={`h-3 w-3 transition-transform ${
//                   isMenuOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </MenuItem>
//           </Typography>
//         </MenuHandler>
//         <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
//           <Card
//             color="blue"
//             shadow={false}
//             variant="gradient"
//             className="col-span-3 grid h-full w-full place-items-center rounded-md"
//           >
//             <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
//           </Card>
//           <ul className="col-span-4 flex w-full flex-col gap-1">
//             {renderItems}
//           </ul>
//         </MenuList>
//       </Menu>
//       <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
//         <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "}
//         Pages{" "}
//       </MenuItem>
//       <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
//         {renderItems}
//       </ul>
//     </>
//   );
// }
 
// // nav list component
// const navListItems = [
//   {
//     label: "Account",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Blocks",
//     icon: CubeTransparentIcon,
//   },
//   {
//     label: "Docs",
//     icon: CodeBracketSquareIcon,
//   },
// ];
 
// function NavList() {
//   return (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
//       <NavListMenu />
//       {navListItems.map(({ label, icon }, key) => (
//         <Typography
//           key={label}
//           as="a"
//           href="#"
//           variant="small"
//           color="gray"
//           className="font-medium text-blue-gray-500"
//         >
//           <MenuItem className="flex items-center gap-2 lg:rounded-full">
//             {createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
//             <span className="text-gray-900"> {label}</span>
//           </MenuItem>
//         </Typography>
//       ))}
//     </ul>
//   );
// }
 
// function ComplexNavbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
 
//   const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
//   useEffect(() => {
//     window.addEventListener(
//       "resize",
//       () => window.innerWidth >= 960 && setIsNavOpen(false),
//     );
//   }, []);
 
//   return (
//     <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
//       <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
//         <Typography
//           as="a"
//           href="#"
//           className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
//         >
//           Material Tailwind
//         </Typography>
//         <div className="hidden lg:block">
//           <NavList />
//         </div>
//         <IconButton
//           size="sm"
//           color="blue-gray"
//           variant="text"
//           onClick={toggleIsNavOpen}
//           className="ml-auto mr-2 lg:hidden"
//         >
//           <Bars2Icon className="h-6 w-6" />
//         </IconButton>
 
//         <Button size="sm" variant="text">
//           <span>Log In</span>
//         </Button>
//         <ProfileMenu />
//       </div>
//       <MobileNav open={isNavOpen} className="overflow-scroll">
//         <NavList />
//       </MobileNav>
//     </Navbar>
//   );
// }

// export default ComplexNavbar;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Upper_banner />
      <div className="flex justify-between bg-gray-100  ">
        <div className=" ml-40 mb-7">
          <div className="flex flex-col">
            <div
              className={`z-1 transition-transform duration-100 p-2  ${
                isScrolled ? "-translate-x-20" : "translate-y-0"
              }`}
            >
            
              <ul>
                <ol className="flex text-[12px] text-gray-400 mt-3">
                  <li className="mr-2">MY KALYAN/</li>
                  <li className="mr-2">MEDIA/</li>
                  <li className="mr-2">MY KALYAN/</li>
                  <li className="mr-2">GOLD RATES/</li>
                  <li className="mr-2">DIGITAL GOLD/</li>
                </ol>
              </ul>
            </div>
            <div className={`left_lower p-1 mt-5 ${ isScrolled ? "translate-y-[100px]" : "translate-y-0"}`}>
              <h1 className="hidden">logo</h1>
              <ul className="mt-5 text-gray-500">
                <ol className="flex ">
                  <li className="mr-9 font-bold text-[15px]">OUR BRAND</li>
                  <li className="mr-9 font-bold text-[15px]">MUHURAT</li>
                  <li className="mr-9 font-bold text-[15px]">SHOP ONLINE</li>
                  <li className="mr-9 font-bold text-[15px]">JWELLERY</li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
        {/* //////////////////////////////////////////// */}
        <div
          className={`mt-4 z-1 transition-transform duration-100 ${
            isScrolled ? "-translate-y-10" : "translate-y-0"
          }`}
        >
          <Image src="/kalyan_logo.svg" width={120} height={120} alt="Logo" />
        </div>
        {/* //////////////////////////////////////////// */}
        <div className=" mr-40 mb-7">
          <div className="flex flex-col">
            <div className={`z-1 transition-transform duration-100 p-2  ${
                isScrolled ? "translate-x-20" : "translate-y-0"
              }`}>
              <ul>
                <ol className="flex text-[12px] text-gray-400 mt-3">
                  <li className="mr-2">STORE LOCATOR/</li>
                  <li className="mr-2">FEEDBACK/</li>
                  <li className="mr-2">CONTACT</li>
                </ol>
              </ul>
            </div>
            <div className="left_lower p-1 mt-5">
              <ul className="mt-5">
                <ol className="flex  text-gray-500">
                  <li className="mr-9 text-[15px] font-bold ">ABOUT US</li>
                  <li className="mr-9 text-[15px] font-bold">GIFT CARD</li>
                  <li className="mr-9 text-[15px] font-bold">AMBASSADORS</li>
                  <li className="mr-9 text-[15px] font-bold">INVESTORS</li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Upper_banner = () => {
  return (
    <>
      <div className="text-center bg-gray-800 text-white p-1 sticky top-0  w-full z-10">
        <span className="text-[13px] ">Sign-Up, Spin, and</span>
        <button className="p-[4px]  bg-red-600 pl-5 pr-5 ml-5">
          win exiting prices
        </button>
      </div>
    </>
  );
};

export default navbar;
