import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar'
import Footer from './footer'
import HeartRain from './heartRain'

// const Layout = () => {
//   return (
//     <div className="h-screen flex flex-col overflow-hidden">

//       {/* Fixed Navbar */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navbar />
//       </div>

//       {/* Background Section */}
//       <div className=" flex-1 bg-pink-50 pt-16 pb-16">

//         {/* Heart Rain Background */}
//         <HeartRain />

//         {/* Scrollable Main Content */}
//         <main className=" relative z-10 flex flex-col flex-grow overflow-hidden">
//           <Outlet />
//         </main>

//       </div>

//       {/* Fixed Footer */}
//       <div className="fixed bottom-0 left-0 w-full z-50">
//         <Footer />
//       </div>

//     </div>
//   )
// }

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Scrollable Middle Section */}
      <div className="flex-1 bg-pink-50 pt-16 pb-16 overflow-hidden">

        <HeartRain />

        {/* THIS is the scrollable area */}
        <main className="relative z-10 h-full overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </div>

    </div>
  )
}


export default Layout
