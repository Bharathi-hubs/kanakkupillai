import Head from 'next/head'
import Image from 'next/image'

import { TfiWallet, TfiAlarmClock, TfiCup } from 'react-icons/tfi';
import { FcOk } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import icon1 from '../public/Assets/icon-01.png'
import icon2 from '../public/Assets/icon-02.png'
import icon3 from '../public/Assets/icon-03.png'
import icon4 from '../public/Assets/icon-04.png'
import icon5 from '../public/Assets/icon-05.png'
import icon6 from '../public/Assets/icon-06.png'
import icon7 from '../public/Assets/icon-07.png'
import icon8 from '../public/Assets/icon-08.png'
import icon9 from '../public/Assets/service-001.png'
import icon10 from '../public/Assets/service-002.png'
import icon11 from '../public/Assets/service-003.png'
import icon12 from '../public/Assets/service-004.png'
import icon13 from '../public/Assets/service-005.png'
import icon14 from '../public/Assets/service-center.png'
import kyc from '../public/Assets/aadhar.jpg'
import calculate from '../public/Assets/calculate.jpg'
import goods from '../public/Assets/goods.jpg'
import gst from '../public/Assets/GST.jpg'
import loan from '../public/Assets/loan.jpg'
import brand1 from '../public/Assets/indusindbank.jpg'
import brand2 from '../public/Assets/axisbank.jpg'
import brand3 from '../public/Assets/kodak.jpg'
import brand4 from '../public/Assets/hdfc.jpg'
import brand5 from '../public/Assets/icici.jpg'
import brand6 from '../public/Assets/federalbank.jpg'


export default function Home() {

  const cardData = [
    {
      icon: icon1,
      title: "GST Registration",
      price: "999",
      pricedesc: "Excl GST",
      description: "Apply for New GST by online Registration with Kanakkupillai! Without Visiting the Govt. office, get your GST Registered in India in just seven days.",
    },
    {
      icon: icon2,
      title: "Pvt Ltd Company",
      price: "6141",
      pricedesc: "Excl GST",
      description: "Register your Company with Kanakkupillai in 7 days at the lowest price with free compliance software + DIN & DSC for 2 Directors + MOA & AOA + ROC Fees, PAN & TAN."
    },
    {
      icon: icon3,
      title: "One Person Company",
      price: "6104",
      pricedesc: "Excl GST",
      description: "OPC is a business having one owner. Before the Companies Act 2013, a company could only be founded with a minimum of two directors and members.",
    },
    {
      icon: icon4,
      title: "LLP Registration",
      price: "6525",
      pricedesc: "Excl GST",
      description: "Get started for LLP registration right away for your partnership business through Kanakkupillai! Limit your liability and face lesser compliance issues than a PLC registration.",
    }
    ,
    {
      icon: icon5,
      title: "FSSAI / Food License",
      price: "1999",
      pricedesc: "+ Govt Fees *",
      description: "Get FSSAI license Now! All manufacturers, traders, and restaurants operating any food business that may include manufacturing or processing are given food license or FSSAI license.",
    }
    ,
    {
      icon: icon6,
      title: "Trademark",
      price: "1999",
      pricedesc: "+ Govt Fees ",
      description: "Get trademark for your brand name or logo with unique identity and secure legal protection within a week! Get trademark registration for any sign you use to identify your business.",
    }
    ,
    {
      icon: icon7,
      title: "Import & Export code",
      price: "1999",
      pricedesc: "+ Govt Fees ",
      description: "Apply for IEC registration online Now! And get the 10-digit IEC code. Without IEC, primarily importers merchants cannot import products, and primarily exporters merchants cannot receive benefits from DGFT.",
    }
    ,
    {
      icon: icon8,
      title: "MSME Registration",
      price: "999",
      pricedesc: "+ Only ",
      description: "Registrations for manufacturing or service lines can be obtained through the MSME act. This registration provides many benefits regarding taxation, setting up the business, credit facilities, loans, etc.",
    }
  ];

  const articles = [
    {
      title1: 'KYC is mandatory from 01 November for insurance policies',
      description1: "The Fotolia/Raw Pixel Value Added Tax (VAT) was implemented in the UAE on January 1, 2018, with a 5% rate.",
      title2: 'Section 194K – Tax Deduction On Income From Mutual Fund Units',
      description2: "A mutual fund is a type of financial instrument that combines money from investors to buy stocks, bonds, gold, and other assets.",
      title3: 'How to use Aadhaar Card for Electronic Tax Return Verification?',
      description3: "A person is required to submit an Income Tax Return (ITR) form to the CBDT or Department of Indian Income Tax.",
    },
    {
      title1: 'How to Calculate Revenue for a Startup',
      description1: "The method of calculating a startup’s income entails figuring out a few crucial numbers. The startup cost is one such figure.",
      title2: 'All You Need To Know About Professional Tax in India',
      description2: "Professional Tax is a tax which is levied by means of the state on the income earned via profession, exchange calling or employment.",
      title3: 'Tips to Increase your Home Loan Eligibility',
      description3: "The Fotolia/Raw Pixel Value Added Tax (VAT) was implemented in the UAE on January 1, 2018, with a 5% rate.",
    },
    {
      title1: 'GST for Renting of Residential Properties',
      description1: "Residential rents will be subject to the Goods and Services Tax (GST) beginning on July 18, 2022, according to a gazette of central tax announcement released on July 13",
      title2: 'New Goods and Services Tax (GST) Rate List 2022',
      description2: "Rate hikes were approved while exemptions for many items consumed on a large scale were withdrawn. The meeting in this regard was chaired by the Finance Minister",
      title3: 'Property Tax and Payment of Tax Online',
      description3: "Property tax is the term used to describe the tax assessed on land and structures which are built on such land. The provisions relating to the state of Tamil Nadu’s property",
    },
  ]
  return (
    <>
      <div className='homesection'>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='hero-section'>
          <h2 className='text-center'> <strong>The Simplest Way To Incorporate
            <br />
            Your Company In India.</strong></h2>
          <p className='text-center mb-3'>Begin your journey as a business owner with us</p>
          <div id="search-wrapper">
            <i class="search-icon fas fa-search"></i>
            <input type="text" id="search" placeholder="Enter Your Name" />
            <button id="search-button">Next</button>
          </div>

          <div className='d-flex justify-content-evenly mt-2'>
            <div className='border hero-borderer-card rounded'>
              <p>GST Registration</p>
              <p>₹ &nbsp;999 / <span className='small'>Excl GST</span></p>
            </div>
            <div className='border hero-borderer-card rounded'>
              <p>Company Registration</p>
              <p>₹ &nbsp;6141 / <span className='small'>Excl GST</span></p>
            </div>
            <div className='border hero-borderer-card rounded'>
              <p>Trademark Registration</p>
              <p>₹&nbsp;1999 / <span className='small'>Excl GST</span></p>
            </div>
          </div>
          <p className='text-center mt-3 small'>Rated 4.8 out of 5 based on Google 1376 reviews</p>
        </div>

      </div>
      <div className='container-fluid main-container'>
        <div className='hero-card-container'>
          <div className='hero-cards '>
            <div className='hero-card d-flex'>
              <div className='ps-3 pe-3 icon-card'><TfiWallet className='' /></div>
              <div className='mt-4 p-2'>
                <h6><strong>Reasanable</strong></h6>
                <p className='small'>Lowest price with professional service delivery</p>
              </div>
            </div>
            <div className='hero-card d-flex'>
              <div className='ps-3 pe-3 icon-card'><TfiAlarmClock className='' /></div>
              <div className='mt-4 p-2'>
                <h6><strong>Support</strong></h6>
                <p className='small'>Turn Around Time 99% of services will <br />be delivered within timeline</p>
              </div>
            </div>
            <div className='hero-card d-flex'>
              <div className='ps-3 pe-3 icon-card'><TfiCup className='' /></div>
              <div className='mt-4 p-2'>
                <h6><strong>4.8/5 on Google rating</strong></h6>
                <p className='small'>99% of Customers rated us 5* in Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-container '>
        <div className='container-fluid'>
          <p className='mx-4'> <strong className='service-title'>We Provide
            <br />
            <span className='best-service'>Best</span> <span className='quality-service'>Quality</span> Services</strong></p>
          <div className='service-card-section mb-3'>
            {cardData.map((item) => (
              <div className='card service-card'>
                <Image
                  src={item.icon}
                  alt="Picture of the author"
                  width={50}
                  height={50}
                  className='m-0'
                />
                <h3 className='mt-3'>{item.title}</h3>
                <p className=''> <strong className='rupees-service'>₹ {item.price}</strong><small className='small text-muted'>/{item.pricedesc}</small></p>
                <p className='small service-desc'>{item.description}</p>
                <div className='card-bottom'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p className='text-muted small-text m-0'>* T&C Apply</p>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
      <div className='container plan-container'>
        <h1 className='text-center plan-titile'><strong>Choose Our Best Plan</strong></h1>
        <div className='hr-style'></div>
        <div className='service-card-section mb-3 mt-5'>
          <div className='plan-card'>
            <h5>Proprietorship
              <br />
              Registration</h5>
            <hr />
            <h1 className='text-center'><sup className='medium-rupees-text'>₹</sup><span className='bold-text'>1999</span><small className='medium-text'>/ Excl GST</small></h1>
            <p className='text-center'><span class='small-text bold'>* T & C Apply</span></p>
            <hr />
            <div className='card-center-content'>
              <p className='small'><FcOk /> &nbsp;GST Registration</p>
              <p className='small'><FcOk /> &nbsp;MSME Registration</p>
              <p className='small'><FcOk /> &nbsp;Current Account opening - ICICI Bank</p>
            </div>
            <div className='bottom-btn d-flex mt-4 mb-4'>
              <button className='buy-btn text-center mt-4  mx-auto'>BUY NOW</button>
            </div>
          </div>
          <div className='plan-card'>
            <h5>Incorporation of Private
              <br />
              Limited Company</h5>
            <hr />
            <h1 className='text-center'><sup className='medium-rupees-text'>₹</sup><span className='bold-text'>6141</span><small className='medium-text'>/ Excl GST</small></h1>
            <p className='text-center'><span class='small-text bold'>* T & C Apply</span></p>
            <hr />
            <div className='card-center-content'>
              <p className='small'><FcOk /> &nbsp;DSC - 2 Nos. (2yrs Validity)</p>
              <p className='small'><FcOk /> &nbsp;Director Identification Number</p>
              <p className='small'><FcOk /> &nbsp;Name Approvsl for Company</p>
              <p className='small'><FcOk /> &nbsp;Incorporation of Pvt Ltd Company</p>
              <p className='small'><FcOk /> &nbsp;PAN & TAN for the Company</p>
              <p className='small'><FcOk /> &nbsp;Current Account opening - ICICI Bank </p>
              <p className='small'><FcOk /> &nbsp;Complaince Software</p>
            </div>
            <div className='bottom-btn d-flex mt-4 mb-4'>
              <button className='buy-btn text-center mt-4  mx-auto'>BUY NOW</button>
            </div>
          </div>
          <div className='plan-card'>
            <h5>Proprietorship
              <br />
              Registration</h5>
            <hr />
            <h1 className='text-center'><sup className='medium-rupees-text'>₹</sup><span className='bold-text'>1999</span><small className='medium-text'>/ Excl GST</small></h1>
            <p className='text-center'><span class='small-text bold'>* T & C Apply</span></p>
            <hr />
            <div className='card-center-content'>
              <p className='small'><FcOk /> &nbsp;DSC - 2 Nos. (2yrs Validity)</p>
              <p className='small'><FcOk /> &nbsp;DPIN - 2 Nos.</p>
              <p className='small'><FcOk /> &nbsp;Name Approval for LLP</p>
              <p className='small'><FcOk /> &nbsp;Preparation of LLP Agreement</p>
              <p className='small'><FcOk /> &nbsp;Incorporation of LLP</p>
              <p className='small'><FcOk /> &nbsp;Form -3  Filling </p>
              <p className='small'><FcOk /> &nbsp;PAN & TAN for the Company</p>
              <p className='small'><FcOk /> &nbsp;Current Account opening - ICICI Bank </p>
              <p className='small'><FcOk /> &nbsp;Complaince Software</p>
            </div>
            <div className='bottom-btn d-flex mt-4 mb-4'>
              <button className='buy-btn text-center mt-4 mx-auto'>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className='different-section mb-5'>
        <h1 className='text-center plan-titile'><strong>What Makes Us <span className='dif-text'>Different</span></strong></h1>
        <div className='hr-style'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div>
                <Image
                  src={icon13}
                  alt='icons'
                  width='50px'
                  height='50px'
                  className='d-flex mx-auto'
                />
                <h5 className='text-center'><strong>Google Reviews</strong></h5>
                <p className='small text-center'>99% of Customers rated us<br />
                  5* in Google.</p>
              </div>
              <div>
                <Image
                  src={icon10}
                  alt='icons'
                  width='50px'
                  height='50px'
                  className='d-flex mx-auto'

                />
                <h5 className='text-center'><strong>Reasonable</strong></h5>
                <p className='small text-center'>
                  Low price with professional service <br />
                  delivery</p>
              </div>
            </div>
            <div className='col-6'>
              <Image
                src={icon14}
                alt="Picture of the author"
                width={550}
                height={450}
                className='d-flex mx-auto'
              />
            </div>
            <div className='col-3 mt-5'>
              <div>
                <Image
                  src={icon12}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                  className='d-flex mx-auto'

                />
                <h5 className='text-center'><strong>Turn Around Time</strong></h5>
                <p className='small text-center'>
                  99% of services will be delivered within
                  <br />
                  timeline
                </p>
              </div>
              <div>
                <Image
                  src={icon11}
                  alt="Picture of the author"
                  width={80}
                  height={80}
                  className='d-flex mx-auto'

                />
                <h5 className='text-center'><strong>300+ Services</strong></h5>
                <p className='small text-center'>
                  Relax at home, we take care of<br />
                  Tax/Compliance</p>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <Image
            src={icon9}
            alt="Picture of the author"
            width={80}
            height={80}
            className='d-flex mx-auto'
          />
          <h5 className='text-center'><strong>Compliance
          </strong></h5>
          <p className='small text-center mb-5'>We manage 99.9% of compliance
            <br />
            within due date.</p>
          <br />
        </div>
      </div>

      <div>
        <h1 className='text-center plan-titile'><strong>What Our <span className='dif-text'>Clients Says</span></strong></h1>
        <div className='hr-style'></div>
        <div className="test-container">
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="testimonials">
                  <ul>
                    <li>
                      <span className='mb-4'>cxdfgtyu8 Kiran</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />

                      <p>I came to know about kannakupilla.com through one of my friends for company MSME registration They explained me everything clearly before starting the procedure. Happy with the service given to me. Thank you Kanakkupillai for your service.</p>
                    </li>
                    <li>
                      <span className='mb-4'>Mohan Krishnan</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />
                      <p>Best place for all your legal assistance regarding company registration and accounting for your business... 🤩 Friendly staffs especially Miss Kalpana had done her work clean and to the best of her level. Highly recommend..</p>

                    </li>
                    <li>
                      <span className='mb-4'>Mukundan Subramanian
                      </span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://i.pinimg.com/236x/2d/e5/7f/2de57f8025bd64dffd554de0f080ee7f--my-pinterest-pinterest-board.jpg?b=t" />
                      <p>
                        really incredible work by the team i had requested for GST filing in a fraction Kanakkupillai Team Mr. Rajesh had done in fraction and closed the issues. request to kindly continue the same with the same throughout the service in the upcoming years. good luck.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="carousel-item">
                <div className="testimonials">
                  <ul>
                    <li>

                      <span className='mb-4'>cxdfgtyu8 Kiran</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />

                      <p>I came to know about kannakupilla.com through one of my friends for company MSME registration They explained me everything clearly before starting the procedure. Happy with the service given to me. Thank you Kanakkupillai for your service.</p>
                    </li>
                    <li>
                      <span className='mb-4'>Mohan Krishnan</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />
                      <p>Best place for all your legal assistance regarding company registration and accounting for your business... 🤩 Friendly staffs especially Miss Kalpana had done her work clean and to the best of her level. Highly recommend..</p>

                    </li>
                    <li>
                      <span className='mb-4'>Mukundan Subramanian
                      </span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://i.pinimg.com/236x/2d/e5/7f/2de57f8025bd64dffd554de0f080ee7f--my-pinterest-pinterest-board.jpg?b=t" />
                      <p>
                        really incredible work by the team i had requested for GST filing in a fraction Kanakkupillai Team Mr. Rajesh had done in fraction and closed the issues. request to kindly continue the same with the same throughout the service in the upcoming years. good luck.</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="carousel-item">
                <div className="testimonials">
                  <ul>
                    <li>
                      {/* <strong>Prasanthi Kiran</strong> */}
                      <span className='mb-4'>cxdfgtyu8 Kiran</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />

                      <p>I came to know about kannakupilla.com through one of my friends for company MSME registration They explained me everything clearly before starting the procedure. Happy with the service given to me. Thank you Kanakkupillai for your service.</p>
                    </li>
                    <li>
                      <span className='mb-4'>Mohan Krishnan</span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSflTI9DIJAstZ8fesrSz70HR8oH9BN_d8w0cjGEtiZyqDcs8" />
                      <p>Best place for all your legal assistance regarding company registration and accounting for your business... 🤩 Friendly staffs especially Miss Kalpana had done her work clean and to the best of her level. Highly recommend..</p>

                    </li>
                    <li>
                      <span className='mb-4'>Mukundan Subramanian
                      </span>
                      <div className='review'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <img src="https://i.pinimg.com/236x/2d/e5/7f/2de57f8025bd64dffd554de0f080ee7f--my-pinterest-pinterest-board.jpg?b=t" />
                      <p>
                        really incredible work by the team i had requested for GST filing in a fraction Kanakkupillai Team Mr. Rajesh had done in fraction and closed the issues. request to kindly continue the same with the same throughout the service in the upcoming years. good luck.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="prev-icon" aria-hidden="true"><IoIosArrowBack /></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="next-icon" aria-hidden="true"> <IoIosArrowForward /></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>


      <div style={{ backgroundColor: "#f3f3f3" }} className='p-3 pb-5'>

        <h1 className='text-center plan-titile mt-5'><strong>Our Latest<span className='dif-text'>Articles</span></strong></h1>
        <div className='hr-style'></div>
        <div className='container mt-5'>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className='service-card-section mb-3 '>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={kyc} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>KYC is mandatory from 01 November for insurance policies</strong></h5>
                      <p class="card-text">The Fotolia/Raw Pixel Value Added Tax (VAT) was implemented in the UAE on January 1, 2018, with a 5% rate.</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={loan} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>Section 194K – Tax Deduction On Income From Mutual Fund Units</strong></h5>
                      <p class="card-text">A mutual fund is a type of financial instrument that combines money from investors to buy stocks, bonds, gold, and other assets.</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={gst} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>How to use Aadhaar Card for Electronic Tax Return Verification?</strong></h5>
                      <p class="card-text">A person is required to submit an Income Tax Return (ITR) form to the CBDT or Department of Indian Income Tax.</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className='service-card-section mb-3'>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={goods} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>How to Calculate Revenue for a Startup</strong></h5>
                      <p class="card-text">The method of calculating a startup’s income entails figuring out a few crucial numbers. The startup cost is one such figure.</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={calculate} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>Property Tax and Payment of Tax Online</strong></h5>
                      <p class="card-text">Property tax is the term used to describe the tax assessed on land and structures which are built on such land. The provisions relating to the state of Tamil Nadu’s property</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={loan} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>All You Need To Know About Professional Tax in India</strong></h5>
                      <p class="card-text">Professional Tax is a tax which is levied by means of the state on the income earned via profession, exchange calling or employment.</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className='service-card-section mb-3'>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={kyc} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>Tips to Increase your Home Loan Eligibility</strong></h5>
                      <p class="card-text">One of the largest financial decisions you will likely make in your lifetime is whether to buy a home, and if you are thinking about

                      </p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={calculate} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>GST for Renting of Residential Properties</strong></h5>
                      <p class="card-text">Residential rents will be subject to the Goods and Services Tax (GST) beginning on July 18, 2022, according to a gazette of central tax announcement released on July 13</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                  <div class="card cus-card" style={{ width: "19rem" }}>
                    <Image src={goods} class="card-img-top card-imgs" alt="..." width='350px' height='auto' />
                    <div class="card-body">
                      <h5 class="card-title"><strong>New Goods and Services Tax (GST) Rate List 2022</strong></h5>
                      <p class="card-text">Rate hikes were approved while exemptions for many items consumed on a large scale were withdrawn. The meeting in this regard was chaired by the Finance Minister</p>
                    </div>
                    <div className='card-footer- mb-3 mx-3'><button className='read-btn'>READ MORE</button></div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>


      <div className='container'>
      <h1 className='text-center plan-titile mt-5'><strong>Our Banking &nbsp;<span className='dif-text'><strong>Partners</strong></span></strong></h1>
        <div className='hr-style'></div>
        <div class="slider mt-5 mb-5">
          <div class="slide-track">
            <div class="slide">
              <Image className="brand-logo" src={brand1}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand2}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand3}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand4}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand5}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand6}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand4}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand5}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand6}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand4}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand5}  width='80px'  alt=""/>
            </div>
            <div class="slide">
              <Image className="brand-logo" src={brand6}  width='80px'  alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
