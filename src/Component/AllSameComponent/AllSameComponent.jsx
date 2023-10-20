import './AllSameComponent.css';
import Banner_section from "../../Component/Banner_section/Banner_section";
import Manual_HR_section from "../../Component/Manual_HR_section/Manual_HR_section";
import banner_bg from "../../assets/HRMS/banner_team_bg.png";
import banner_image from "../../assets/HRMS/HRMS_Banner.png";
import img1 from "../../assets/HRMS/icons/paper.png";
import img2 from "../../assets/HRMS/icons/document.png";
import img3 from "../../assets/HRMS/icons/all_people.png";
import img4 from "../../assets/HRMS/icons/desktop.png";
import img5 from "../../assets/HRMS/icons/list.png";
import manualImage from "../../assets/HRMS/HRMS_Employee_management.png" ;
import business_team from "../../assets/HRMS/business_team_1.png";
import footer_end_img from "../../assets/HRMS/footer_end_1.png";
import ScreenShot01 from "../../assets/HRMS/screenshot_1.png";
import Software_details_content from '../Software_details_content/Software_details_content';
import Accordion_component from '../Accordion_component/Accordion_component';
import img_png from '../../assets/HRMS/p1.png';

const AllSameComponent = () => {

    // For Manual_HR_Section system follow up
    const manual_resource = {
        headTitle: "Challenges of Manual HR Management",
        img1 : img1,
        img2 : img2,
        img3 : img3,
        img4 : img4,
        img5 : img5,
        manualImage : manualImage,
        content1: "Getting stuck with large volumes of paperwork",
        content2: "Losing track of former employees’ data",
        content3: "Overall disarray in administration",
        content4: "Struggles with workplace planning",
        content5: "Inability to maintain a consistent employee evaluation"
    }

    ///
    const details = {
        headTitle: "Automate Record-Keeping for Efficiency",
        content01: "Maintaining and updating employee records manually is time-consuming and riddled with errors.",
        content02: "Streamline your HR operations by automating record management to ensure accurate and up-to-date employee information is readily accessible, right at your fingertips."
    }

    ///
    const accordion_list = [
        {
            headContent: "What is the Report Management Module, and why is it important for HR professionals?",
            paraContent: "The Report Management Module is a feature in our HRMS software that centralizes and automates the management of various HR-related reports. It is crucial for HR professionals as it streamlines report handling, saves time, reduces errors, and empowers data-driven decision-making."
        },
        {
            headContent: "How does the Performance Report feature benefit HR teams?",
            paraContent: "The Performance Report feature allows HR professionals to store and access detailed performance data for each employee, including KPI scores, attendance, and punctuality. This enables better tracking, analysis, and management of employee performance, ultimately leading to improved productivity."
        },
        {
            headContent: "How can the Attendance Report feature help in optimizing workforce management?",
            paraContent: "The Attendance Report feature simplifies attendance management by providing comprehensive monthly attendance records. HR can use this data to identify attendance patterns, ensure accurate payroll processing, and optimize workforce management for enhanced operational efficiency."
        },
        {
            headContent: "How does the Leave Report feature simplify employee leave management?",
            paraContent: "The Leave Report feature automates leave management, offering detailed reports on each employee's total number of leaves, leaves taken, and remaining leave balance. This simplifies leave tracking, reduces disputes, and provides insights into leave trends."
        },
        {
            headContent: "What types of invoices can be managed using the Invoice Report feature?",
            paraContent: "The Invoice Report feature centralizes various types of invoices, including estimates, expenses, personal expenses, assets, and payslips. It simplifies financial record management and reporting."
        },
        {
            headContent: "How does the Payslip and Commission Slip Report feature ensure transparency in remuneration tracking?",
            paraContent: "The Payslip and Commission Slip Report feature provides a transparent view of each employee's monthly salary and commission amounts. This ensures accurate payment distribution, streamlines payroll administration, and fosters trust between HR and employees."
        },
        {
            headContent: "What financial insights can be gained through the Expense Report feature?",
            paraContent: "The Expense Report feature tracks yearly expenses and assets, offering valuable insights into financial trends. HR can optimize budgeting, enhance financial transparency, and make informed financial decisions for the organization's future success."
        },
        {
            headContent: "Is the Report Management Module customizable to meet our organization's specific needs?",
            paraContent: "Yes, the Report Management Module is customizable. You can tailor reports to match your organization's unique requirements, ensuring that you get the data and insights that matter most to you."
        },
        {
            headContent: " How does the automation feature in the Report Management Module save time for HR professionals?",
            paraContent: "The automation feature in the Report Management Module automates tasks such as report compilation and updates, reducing the time spent on manual data entry and management."
        },
        {
            headContent: " Can you provide training and support for using the Report Management Module effectively?",
            paraContent: "Yes, we offer comprehensive training and ongoing support to ensure that HR professionals can fully utilize the Report Management Module's capabilities. Our dedicated support team is here to assist you every step of the way."
        }
    ]



    return (
    <>
        <Banner_section bgImg={banner_bg} image={banner_image} />
        <Manual_HR_section manual_resource={manual_resource} />

        {/* Business team section  */}
        <section className="py-[110px] relative shadow-shadow1x text-[#FAFAFA] hidden">
            <div className="main_container flex_container">
                <div className="w-[50%] ml-auto pl-[50px]">
                    <h3 className="inter font-light text-[34px] mb-2 text-center leading-[48px]"><span className="text_gradient">Simplify</span> <span className="text-green font-semibold">Attendance</span> <span className="text_gradient">Management</span></h3>
                    <p className="text_gradient font-medium text-[18px] leading-[37px] text-center">Boost Productivity and Empower Your Workforce with Our Smart Employee Attendance Management Solution</p>

                    <div className="mt-10 text-center">
                        <a href="" className="action_btn px-7 py-[10px]">Explore More</a>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-[60px] h-full">
                <img src={business_team} alt="" className="w-full h-full " />
            </div>
        </section>

        {/* Left data schedule field */}
        <section className='py-[100px] relative hidden'>
          <div className='main_container flex_container'>
            <div className='w-[50%]'>
               <Software_details_content details={details} />
            </div>
          </div>

          <div className='div_shape_line_right'></div>
          <div className='absolute top-[50%] translate-y-[-50%] right-0 w-[640px] h-[440px]'>
            <img src={ScreenShot01} alt="" className='w-full h-full' />
          </div>
        </section>

        {/* Frequently Ask Questions */}
        <Accordion_component accordion_list={accordion_list} />

        {/* testing UI */}
         <section className='banner-marketing'>
            <img src={img_png} alt="" className='image_container' />
             <div className='position_content'>
                <h3 className='lg:text-[37.5px] text-[14px] lg:leading-[65px] leading-4 lg:mb-7 mb-1 lg:text-left text-center'><span className='lg:text-[125px] text-[16px] text-green sura'>80</span><span className='lg:text-[75px] text-[16px] text-green sura'>%</span> <span className='inter text_gradient font-light'>of business <br /> Worldwide Use an HR Software</span></h3>
                  <div className='flex lg:flex-row flex-col items-center lg:mb-0 mb-[6px]'>
                     <h5 className='inter font-semibold lg:text-[18px] text-[10px]'><span className='text_gradient'>Get The Best</span> <span className='text-green lg:text-[32px] text-[12px]'>HRMS</span> <span className='text_gradient'>Today</span></h5>
                      <div className='mt-[6px]'>
                          <a href="" className='action_btn lg:px-[28px] px-[18px] lg:py-[10px] py-[6px] lg:ml-5 ml-0'>Contact Us</a>
                      </div>
                  </div>
             </div>
         </section>

       {/* footer end part  */}
       <section className="mt-10 footer_end_part hidden">
          <div className="main_container">
            <div className="w-[50%] mx-auto text-center">
               <img src={footer_end_img} alt="" className="block mx-auto mb-5" />
               <h2 className="inter text-[28px] text-light-white2 font-normal"><span className="text-green text-[37.5px] font-semibold">Upgrade</span> Your Employee Fund Processes With <span className="text-[37.5px] font-semibold">HRMS Fund Management</span></h2>
               <div className="mt-[30px]">
                  <a className="bg-light-white2 text-indigo text-[20px] font-bold rounded-lg px-6 py-[14px]">Contact Us</a>
                </div>
            </div>
          </div>
       </section>   
    </>
    );
};

export default AllSameComponent;