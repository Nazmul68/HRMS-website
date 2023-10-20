import "./Software_details_content.css"
import stroke_like from "../../assets/HRMS/icons/stroke_like.png";
import color_like from "../../assets/HRMS/icons/color_like.png";

const Software_details_content = ({ details }) => {
     const { headTitle, content01, content02  } = details;
    return (
        <>
            <h2 className='text_gradient inter text-[36px] font-bold mb-10 mr-[60px]'>{headTitle}</h2>
            <div className='flex items-center mb-[30px] mr-[60px]'>
                <img src={stroke_like} alt="" />
                <p className='roboto ml-4 leading-6 text-light-gray font-light'>{content01}</p>
            </div>

            <div className='content_div'>
                <span className='content_div_sub'></span>
                <div className='para_div'>
                    <img src={color_like} alt="" />
                    <p className='roboto ml-5 leading-7 text-light-gray font-light text-justify'>{content02}</p> 
                </div>
            </div>
        </>
    );
};

export default Software_details_content;