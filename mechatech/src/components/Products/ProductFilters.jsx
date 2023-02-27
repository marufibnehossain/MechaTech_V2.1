import React from 'react';

const ProductFilters = () => {
  return (
        <ul id="product-flters py-0.5 px-3.5 mt-0 mb-6 mx-auto bg-white rounder-full ">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-pump">Pump</li>
            <li data-filter=".filter-tower">Tower</li>
            <li data-filter=".filter-blower">Blower</li>
            <li data-filter=".filter-ipump">Industrial Pump</li>
            <li data-filter=".filter-fpump">Fire Fighting Pump</li>
            <li data-filter=".filter-compressor">Screw Compressor</li>
            <li data-filter=".filter-ctower">Cooling Tower</li>
            <li data-filter=".filter-rblower">Roots Blower</li>
            <li data-filter=".filter-diffuser">Air Diffuser</li>
            <li data-filter=".filter-spump">Borehole Submersible Pump</li>
            <li data-filter=".filter-etpwtp">ETP & WTP Chemicals and Equipments</li>
        </ul>
  )
}

export default ProductFilters;
