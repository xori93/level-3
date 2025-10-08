import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4">
      <h3>THOMAS NORTHMAN</h3>
      <div className="flex flex-row justify-center gap-4 text-black text-1xl">
      <a className="text-black" href="">About</a>
      <a className="text-black" href="">Disputes</a>
      <a className="text-black" href="">International</a>
      <a className="text-black" href="">Rates & Fees</a>
      <a className="text-black" href="">Contact</a>
      </div>

      <button>Consultation</button>
    </div>
  )
};

export default Navbar;