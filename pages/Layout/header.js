import React from 'react'
import Image from 'next/image'
import logo from '../../public/Assets/logo.png'
import support from '../../public/Assets/support.png'
import { IoMdArrowDropdown } from 'react-icons/io';

const Header = () => {
    return (
        <nav className='ps-5 pt-2 pe-5 d-flex justify-content-between align-items-center'>
            <div>
                <Image
                    src={logo}
                    alt="Picture of the author"
                    width={150}
                    height={40}
                />
            </div>
            <ul className="ul-reset mb-0">
                <li className='droppable'>
                    <a href='#'>Startup <IoMdArrowDropdown /></a>
                    <div className='mega-menu'>
                        <div className="container cf">
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Business Registration</h6>
                                <li><a href='#'>Private Limited Comapny</a></li>
                                <li><a href='#'>Limited Liablity Partnership</a></li>
                                <li><a href='#'>Nidhi Company Registration</a></li>
                                <li><a href='#'>Producer Company</a></li>
                                <li><a href='#'>Partnership Firm Registration</a></li>
                                <li><a href='#'>Sole Proprietorship Registration</a></li>
                                <li><a href='#'>Indian Subsidiary Company</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Registrations </h6>
                                <li><a href='#'>MSME Registration</a></li>
                                <li><a href='#'>Import $ Export Code</a></li>
                                <li><a href='#'>ISO Registration</a></li>
                                <li><a href='#'>FSSAI License</a></li>
                                <li><a href='#'>Shop $ Establishment License</a></li>
                                <li><a href='#'>Proffessional Tax Registration</a></li>
                                <li><a href='#'>Digital Signature Certificate</a></li>
                                <li><a href='#'>Company Name Search</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='droppable'>
                    <a href='#'>GST <IoMdArrowDropdown /></a>
                    <div className='mega-menu'>
                        <div className="container cf">
                            <ul className="ul-reset">
                                <li><a href='#'>GST Registration</a></li>
                                <li><a href='#'>GST Return Filling</a></li>
                                <li><a href='#'>GST LUT Filling</a></li>
                                <li><a href='#'>GST Regsitration Cancellation</a></li>
                                <li><a href='#'>GST Advisory Services</a></li>
                                <li><a href='#'>GST Annual Return Filling</a></li>
                                <li><a href='#'>Indian Subsidiary Company</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='droppable'>
                    <a href='#'>Income Tax <IoMdArrowDropdown /></a>
                    <div className='mega-menu'>
                        <div className="container cf">
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Taxation</h6>
                                <li><a href='#'>TDS Return Filling</a></li>
                                <li><a href='#'>Income Tax Return</a></li>
                                <li><a href='#'>PF Return Filling</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Tax Filling</h6>
                                <li><a href='#'>ITR-1 Return Filling</a></li>
                                <li><a href='#'>ITR-2 Return Filling</a></li>
                                <li><a href='#'>ITR-3 Return Filling</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'></h6>
                                <li><a href='#'>ITR-4 Return Filling</a></li>
                                <li><a href='#'>ITR-5 Return Filling</a></li>
                                <li><a href='#'>ITR-6 Return Filling</a></li>
                                <li><a href='#'>ITR-7 Return Filling</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='droppable'>
                    <a href='#'>Tax & Compliance <IoMdArrowDropdown /></a>
                    <div className='mega-menu'>
                        <div className="container cf">
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Secretarial Complainces</h6>
                                <li><a href='#'>Annual Complaince of Pvt Ltd</a></li>
                                <li><a href='#'>Annual Filling for LLP</a></li>
                                <li><a href='#'>Nidhi Company Complaince</a></li>
                                <li><a href='#'>Producer Company</a></li>
                                <li><a href='#'>Section 8 company Complaince</a></li>
                                <li><a href='#'>NBFC Company Complaince</a></li>
                                {/* <h6 className='menu-header'>Secretarial Complainces</h6>
                                <li><a href='#'>Annual Complaince of Pvt Ltd</a></li>
                                <li><a href='#'>Annual Filling for LLP</a></li>
                                <li><a href='#'>Nidhi Company Complaince</a></li>
                                <li><a href='#'>Producer Company</a></li>
                                <li><a href='#'>Section 8 company Complaince</a></li>
                                <li><a href='#'>NBFC Company Complaince</a></li> */}
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Event Based Complaince </h6>
                                <li><a href='#'>Event Based Complainces in a Company</a></li>
                                <li><a href='#'>Change in aobject clause</a></li>
                                <li><a href='#'>Appointemnt and Registration of Directors</a></li>
                                <li><a href='#'>Change in a Name clause</a></li>
                                <li><a href='#'>Removal of Director</a></li>
                                <li><a href='#'>Change in Share Capital</a></li>
                                <li><a href='#'>Change in Register Office</a></li>
                                <li><a href='#'>Company Name Search</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Accounting & Book keeping Services </h6>
                                <li><a href='#'>Secretorial Audit</a></li>
                                <li><a href='#'>Due DIligence</a></li>
                                <li><a href='#'>Business plan</a></li>
                                <li><a href='#'>Virtual CFO Services</a></li>
                                <li><a href='#'>Accounting</a></li>
                                <li><a href='#'>Account Payable Services</a></li>
                                <li><a href='#'>Accounts Receivable Services</a></li>
                                <li><a href='#'>Tax Audit</a></li>
                                <li><a href='#'>payroll</a></li>
                            </ul>
                        </div>
                        <div className="container cf">
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Business Conversion</h6>
                                <li><a href='#'>Sole Propeiorityship to Pvt Ltd Company</a></li>
                                <li><a href='#'>Converssion of Pvt Ltd to Public Limited</a></li>
                                <li><a href='#'>Converssion of LLP to Private Limited</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Business Closure</h6>
                                <li><a href='#'>Closure of Pvt Ltd Company</a></li>
                                <li><a href='#'>Closure of LLP</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>Advisory Services </h6>
                                <li><a href='#'>Proffesional Advisory </a></li>
                                <li><a href='#'>Legal Advisory Services</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li className='droppable'>
                    <a href='#'>Intellectual Property <IoMdArrowDropdown /></a>
                    <div className='mega-menu'>
                        <div className="container cf">
                            <ul className="ul-reset">

                                <h6 className='menu-header'>IPR</h6>
                                <li><a href='#'>Trademark Registration</a></li>
                                <li><a href='#'>Trademark Renewal</a></li>
                                <li><a href='#'>Trademark objection</a></li>
                                <li><a href='#'>Trademark Rectification</a></li>
                                <li><a href='#'>Trademark Assignment</a></li>
                                <li><a href='#'>Patent Registration</a></li>
                                <li><a href='#'>Copy Write Registration</a></li>
                                <li><a href='#'>Design Registration</a></li>
                                <li><a href='#'>International Trademark Registration</a></li>
                                <li><a href='#'>Intelectual Property Dispute</a></li>
                            </ul>
                            <ul className="ul-reset">
                                <h6 className='menu-header'>NGO </h6>
                                <li><a href='#'>NGO Registration</a></li>
                                <li><a href='#'>Trust Registration</a></li>
                                <li><a href='#'>Society Registration</a></li>
                                <li><a href='#'>Section 8Company Registration</a></li>
                                <li><a href='#'>FCRA Registration</a></li>
                                <li><a href='#'>80G and 12A Registration</a></li>
                                <li><a href='#'>12AA Registration</a></li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li><a href='#'>Partner With us</a></li>
                <li><a href='#'>Contact us</a></li>
                <li><a href='#'>Service Status</a></li>
            </ul>
            <div className='d-block justify-content-center align-items-center'>
                <div className='d-flex justify-content-between'>
                    <Image
                        src={support}
                        alt="Picture of the author"
                        width={15}
                        height={15}
                        className='ms-2 me-2'
                    />
                    <h6 style={{fontSize: "0.8rem"}}>connect with us</h6>
                </div>
                <h6 className='ms-3 text-center'>7305 345 345</h6>
            </div>
        </nav>
    )
}

export default Header