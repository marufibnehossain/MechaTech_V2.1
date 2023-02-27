import React from 'react';
import { Link } from 'react-router-dom';

const Navbtn = (props) => {
  return (
    <div>
      <li className="nav-item relative list-none lg:px-4 md:px-2">
        <Link to={"/"} className="nav-link scrollto active text-gray-800 text-base font-medium px-4 py-2 flex items-center justify-between transition duration-300 ease-in-out hover:text-indigo-600">
          {props.name}
        </Link>
      </li>
    </div>
  )
}

export default Navbtn;
