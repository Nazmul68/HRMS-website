import { useState } from 'react';
import './Accordion_component.css'
import { IoIosArrowDown } from 'react-icons/io';

const Accordion_component = ({ accordion_list }) => {
    const [ open, setOpen ] = useState(null);

    const handleAccordion = (index) => {
        if( index === open ){
            setOpen(null);
            return;
        }
        setOpen(index);
    }

    return (
        <section className='py-[80px]'>
            <div className='main_container'>
               <div className='text-center mb-20'>
                  <h2 className='text_gradient inter text-[36px] font-bold leading-[52px] mb-4'>Frequently Asked Question</h2>
                  <p className='leading-6 text-[#333]'>Quick answers to questions you may have. Can’t find what you are looking for check you query here.</p>
               </div>

               <div className='main_accordions'>
                {
                    accordion_list.map((list, index) => <div key={index} className='accordions mb-6'>
                        <div onClick={() => handleAccordion(index)} className={`py-[16px] px-[24px] flex justify-between items-center ${open === index ? "accordion_head active" : "accordion_head" }`}>
                            <h3 className='text-[#333] w-[90%] '>{list.headContent}</h3>
                            <div className='w-[10%] flex justify-end'>
                            {
                                open === index ? <IoIosArrowDown className='w-[24px] h-[24px] rotate-[180deg] transition_all' /> : 
                                <IoIosArrowDown className='w-[24px] h-[24px] rotate-0 transition_all' />
                            }

                            </div>
                        </div>
                        <div className={`${ open === index ? "accordion_paragraph active" : "accordion_paragraph"}`}>
                            <p className='text-[#333] leading-7 font-light'>{list.paraContent}</p>
                        </div>
                    </div> 
                    )}
               </div>
            </div>
        </section>
    );
};

export default Accordion_component;