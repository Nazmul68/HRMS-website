import "./Manual_HR_section.css";

const Manual_HR_section = ({ manual_resource }) => {
    const { headTitle, img1, img2, img3, img4, img5, content1, content2, content3, content4, content5, manualImage } = manual_resource;
    
    return (
        <section className="py-[75px] relative">
             <div className="shape_div"></div>
            <div className="main_container flex_container">
              <div className="w-[50%] ">
                  <h2 className="text_gradient text-[36px] font-bold leading-[50px] mb-12">{headTitle}</h2>

                  <ul className="manual_list">
                    <li>
                        <img src={img1} alt="" className="inline-block w-[32px] h-[32px]"/><span className="ml-4 font-light leading-6 text-[#494949]">{content1}</span>
                    </li>
                    <li>
                        <img src={img2} alt="" className="inline-block w-[32px] h-[32px]"/><span className="ml-4 font-light leading-6 text-[#494949]">{content2}</span>
                    </li>
                    <li>
                        <img src={img3} alt="" className="inline-block w-[32px] h-[32px]"/><span className="ml-4 font-light leading-6 text-[#494949]">{content3}</span>
                    </li>
                    <li>
                        <img src={img4} alt="" className="inline-block w-[32px] h-[32px]"/><span className="ml-4 font-light leading-6 text-[#494949]">{content4}</span>
                    </li>
                    <li>
                        <img src={img5} alt="" className="inline-block w-[32px] h-[32px]"/><span className="ml-4 font-light leading-6 text-[#494949]">{content5}</span>
                    </li>
                  </ul>
              </div>
              <div className="w-[50%] flex items-center justify-center">
                 <div className="w-[380px] h-[380px] image_div">
                    <img src={manualImage} alt="" className="w-full h-full"/>
                 </div>
              </div>
            </div>
        </section>
    );
};

export default Manual_HR_section;