import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function AccordionComp(props) {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <section className="grid md:grid-cols-2 grid-cols-1 gap-x-5 lg:mx-0 mx-5">
      <div>
        <Fragment>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(1)}>
              {props.question1}
            </AccordionHeader>
            <AccordionBody className='text-left'>
              {props.answer1}
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(2)}>
                {props.question2}
            </AccordionHeader>
            <AccordionBody className='text-left'>
                {props.answer2}
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(3)}>
                {props.question3}
            </AccordionHeader>
            <AccordionBody className='text-left'>
                {props.answer3}
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
      <div>
        <Fragment>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(4)}>
              {props.question4}
            </AccordionHeader>
            <AccordionBody className='text-left'>
              {props.answer4}
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(5)}>
                {props.question5}
            </AccordionHeader>
            <AccordionBody className='text-left'>
                {props.answer5}
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
            <AccordionHeader className="text-lg text-[#444444] font-semibold" onClick={() => handleOpen(6)}>
                {props.question6}
            </AccordionHeader>
            <AccordionBody className='text-left'>
                {props.answer6}
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </section>
    
  );
}