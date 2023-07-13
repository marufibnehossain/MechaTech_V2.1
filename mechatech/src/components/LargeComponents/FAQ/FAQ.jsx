import React from 'react';
import HeadName from '../../Shared/HeadName';
import headinfo from '../../Data/headerInfo';
import AccordionComp from './Accordion';

const FAQ = () => {
  return (
    <section className="faq w-full md:pb-20 pb-12" id="faq">
        <div className="container mx-auto" data-aos="fade-up">
            <HeadName head={headinfo[4].name} prg={headinfo[4].para} />
            <AccordionComp
                question1 = 'Lorem ipsum dolor sit amet consectetur adipisicing?' 
                answer1 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sapiente, quas adipisci ea nobis mollitia iure excepturi doloribus architecto cupiditate.'
                question2 = 'Lorem ipsum dolor sit amet consectetur adipisicing?'
                answer2 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis esse, sunt excepturi maiores qui.'
                question3= 'Lorem ipsum dolor sit amet consectetur adipisicing elit?'
                answer3 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tenetur deleniti? Non facere perspiciatis iure nemo aperiam.'
                question4 = 'Lorem ipsum dolor sit amet consectetur adipisicing?' 
                answer4 = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore sapiente, quas adipisci ea nobis mollitia iure excepturi doloribus architecto cupiditate.'
                question5 = 'Lorem ipsum dolor sit amet consectetur adipisicing?'
                answer5 = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates corporis esse, sunt excepturi maiores qui.'
                question6= 'Lorem ipsum dolor sit amet consectetur adipisicing elit?'
                answer6 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tenetur deleniti? Non facere perspiciatis iure nemo aperiam.'
            />
        </div>
      </section>
  )
}

export default FAQ;
