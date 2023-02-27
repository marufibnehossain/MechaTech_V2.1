import React from 'react'

const HeadName = (props) => {
  return (
    <header className="sm:pb-10 pb-6">
        <h2 className='text-sm font-bold m-0 text-[#4154f1] uppercase tracking-[1px]'>{props.head}</h2>
        <p className='mt-2.5 p-0 text-xl 2xs:text-[28px] md:text-4xl leading-8 md:leading-10 font-bold text-[#012970]'>{props.prg}</p>
    </header>
  )
}

export default HeadName;
