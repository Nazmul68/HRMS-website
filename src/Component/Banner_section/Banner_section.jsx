import "./Banner_section.css"

const Banner_section = ({ bgImg, image }) => {
    // console.log(bgImg)
    const background_banner = {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "100% 65%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "64%"
      };


    return (
        <section className="" style={background_banner}>
           <div className="main_container flex justify-between items-center">
              <div className="w-[50%] banner_content">
                  <h1 className="text-[42px] leading-[52px] font-black mb-[40px] noto"><span className="text_gradient">Simplify</span> <span className="text-green">HR Management</span> <span className="text_gradient">With Automation</span></h1>

                  <ul>
                     <li>
                        <img src="/src/assets/HRMS/tic.png"  className="inline" alt="" />
                        <span className="ml-4 leading-[38px] text-[18px] text_gradient">Minimize Paperwork, Maximize Operational Efficiency</span>
                    </li>
                     <li>
                        <img src="/src/assets/HRMS/tic.png"  className="inline" alt="" />
                        <span className="ml-4 leading-[38px] text-[18px] text_gradient">Eliminate Human Errors, Ensure Constant Precision</span>
                    </li>
                     <li>
                        <img src="/src/assets/HRMS/tic.png"  className="inline" alt="" /> 
                        <span className="ml-4 leading-[38px] text-[18px] text_gradient">Automate Complex HR Tasks for Efficiency</span>
                    </li>
                     <li>
                        <img src="/src/assets/HRMS/tic.png"  className="inline" alt="" />
                        <span className="ml-4 leading-[38px] text-[18px] text_gradient">Free The HR Professionals to Focus on Talent and Innovation</span>
                    </li>
                  </ul>
                <button className="mt-[70px]">
                    <a href="" className="bg-green text-[#FFF] text-[20px] font-bold rounded-lg px-6 py-[14px]">Get A Demo</a>
                </button>
              </div>

              <div className="w-[50%]">
                 <img src={`${image}`} alt="" />
              </div>
           </div>
        </section>
    );
};

export default Banner_section;