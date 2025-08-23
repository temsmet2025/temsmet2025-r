import React from 'react'
import { useEffect, useState } from 'react';

const tickMark = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-green-500 flex-shrink-0"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const upArrowIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-upload w-6 h-6 mx-auto mb-2"
        data-replit-metadata="client/src/components/submission-section.tsx:45:16"
        data-component-name="Upload"
        >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
)

const docIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-text w-6 h-6 mx-auto mb-2"
        data-replit-metadata="client/src/components/submission-section.tsx:53:16"
        data-component-name="FileText"
    >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
    </svg>

)

const guideIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-book-open w-6 h-6 mx-auto mb-2"
    data-replit-metadata="client/src/components/submission-section.tsx:61:16"
    data-component-name="BookOpen"
    >
    <path d="M12 7v14" />
    <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
    </svg>

)

const fileCheckIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-file-check w-6 h-6 mx-auto mb-2"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
)

const CameraIcon = (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-camera text-ieee-blue mr-3 w-8 h-8"
  >
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
    <circle cx="12" cy="13" r="3"></circle>
  </svg>
)

const importantIcon = (<svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24"
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-triangle-alert text-yellow-300 w-6 h-6 font-extrabold"
                        dataComponentName="AlertTriangle">
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path>
                    </svg>)

const LetterStatus = () => {
    return (
        <section id="LOA" className="flex justify-center items-center w-full ">
           {/* heading section */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center gap-2">
                <span className='text-4xl text-sky-700 font-bold'>Letter of Acquisition Status</span>
                <span className='text-xl text-gray-500 font-thin'>Publication approval and processing information</span>
            </div>
            <div className="w-full bg-white shadow-lg p-10 rounded-lg">
                {/* detail section */}
                <div className="flex justify-between w-full gap-40">
                    <div className='flex flex-col gap-4'>
                        <span className='text-sky-700 font-bold text-xl'>LOA #65536</span>
                        <div class="flex flex-col pl-2 border-l-4 border-l-sky-700">
                            <span className='text-slate-950 font-semibold'>LOA Reply Date</span>
                            <span className='text-gray-500'>02-11-2025</span>
                        </div>
                        <div className="flex flex-col border-l-4 border-l-sky-700 pl-2">
                            <span className="text-slate-950 font-semibold">Signatory</span>
                            <span className="text-gray-500">M. Devanathan</span>
                        </div>
                        <div className="flex flex-col border-l-4 border-l-sky-700 pl-2">
                            <span className="text-slate-950 font-semibold">Contact Email</span>
                            <span className="text-gray-500">devanathan.m@ieee.org</span>
                        </div>
                    </div>
                    {/* onference theme */}
                    <div className='flex flex-col gap-4 items-end w-full'>
                          <div className="flex flex-row items-center justify-center px-3 text-green-500 bg-green-400/20 rounded-xl">
                              {tickMark}
                              <span>APPROVED</span>
                          </div>
                        <div className="w-[28rem] p-5 bg-teal-50 rounded-lg">
                            <div className="text-sky-700 text-xl">Conference Theme</div>
                            <div className="text-lg text-gray-950 font-semibold">"Innovation and Technology Management in the Era of Gen AI"</div>
                            <div className="text-justify text-gray-500">The conference focuses on the intersection of technology, management, innovation, and sustainable development within the context of the rapidly advancing Era of Generative Artificial Intelligence (Gen AI).</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

const RequirementCopyright = () => {
    return (
        <section className="flex justify-center items-center mt-10 md:mt-20">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col justify-center items-center">
                        <h1 className='text-2xl md:text-3xl lg:text-4xl text-sky-700 font-bold'>Copyright Information</h1>
                        <h2 className='text-base lg:text-xl text-gray-500 font-thin'>Legal requirements and copyright notices</h2>
                </div>
                <div className="flex gap-3">
                    
                    <div className="flex flex-col gap-10">
                        <div className="w-full bg-white shadow-lg p-5 rounded-lg">
                            {/* detail section */}
                            <div className="flex flex-col gap-5">
                                <div className='flex'>
                                    <span className="text-sky-600">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-copyright text-ieee-blue mr-2 w-6 h-6"
                                        >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
                                        </svg>

                                    </span>
                                    <span className="text-xl font-bold">
                                        Required Copyright Notices
                                    </span>
                                </div>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 ml-3'>
                                    <div class="flex flex-col pl-2 border-l-4 border-l-sky-400">
                                        <span className='text-slate-950 font-semibold'>
                                            US Government Work
                                        </span>
                                        <span className='text-gray-500 ml-2 '>
                                            U.S. Government work not protected by U.S. copyright
                                        </span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-l-sky-400 pl-2">
                                        <span className="text-slate-950 font-semibold">Crown Government Work</span>
                                        <span className="text-gray-500 ml-2 ">979-8-3315-2716-7/25/$31.00 ©2025 Crown</span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-l-sky-400 pl-2">
                                        <span className="text-slate-950 font-semibold">European Union Work</span>
                                        <span className="text-gray-500 ml-2 ">979-8-3315-2716-7/25/$31.00 ©2025 European Union</span>
                                    </div>
                                    <div className="flex flex-col border-l-4 border-l-sky-400 pl-2">
                                        <span className="text-slate-950 font-semibold">All Other Papers</span>
                                        <span className="text-gray-500 ml-2 ">979-8-3315-2716-7/25/$31.00 ©2025 IEEE</span>
                                    </div>
                                    
                                </div>                    
                            </div>

                                
                        </div>
                    </div>
                    {/* catalog table */}
                    {/* <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-5 w-full">
                        <div className="flex flex-row items-center ">
                            <span className="">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-barcode text-ieee-blue mr-2 w-6 h-6"
                                data-replit-metadata="client/src/components/requirements-section.tsx:71:14"
                                data-component-name="Barcode"
                                >
                                <path d="M3 5v14"></path>
                                <path d="M8 5v14"></path>
                                <path d="M12 5v14"></path>
                                <path d="M17 5v14"></path>
                                <path d="M21 5v14"></path>
                                </svg>
                            </span>
                            <span className="">
                                Catalog Numbers
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm">
                                <thead className="bg-sky-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Media Type</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Part Number</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">ISBN</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Qty</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 text-xs text-gray-900">XPLORE COMPLIANT</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">CFP25Z30-ART</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">979-8-3315-2716-7</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">1</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50">
                                        <td className="px-4 py-2 text-xs text-gray-900">USB</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">CFP25Z30-USB</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">979-8-3315-2715-0</td>
                                        <td className="px-4 py-2 text-xs text-gray-900">1</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>    
    )
}

const ImportantNotice = () => {
    return (
        <section className="mt-4 border-l-4 border-yellow-400 rounded-l-sm rounded-r-md bg-yellow-200/20 px-2 sm:px-10 py-5">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-2">
                    {importantIcon}
                    <h2 className='text-xl font-semibold text-yellow-600'>Important Reminders</h2>
                </div>
                <div className="text-yellow-700/70 ml-5 md:ml-10">
                    
                    <ul className='list-disc'>
                        <li>After uploading the final camera-ready paper (which must have passed PDF Check in IEEE PDF eXpress), click on the 'Submit IEEE Copyright Form' link</li>
                        <li>You will be redirected to the IEEE eCF site to submit the copyright form</li>
                        <li>After completing the IEEE copyright form and copyright agreements, you will have the option to download the completed IEEE Copyright Form</li>
                        <li>Please upload it to the same page in CMT or use the 'drop files here' menu</li>
                        <li>The corresponding author may submit the copyright form for all the authors of the paper</li>
                    </ul>

                </div>
            </div> 
        </section>
    )
}

const ListDiv = ({para, number, title, listItem}) => {
    return (
        <section className="h-full">
            <div className="relative">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-sky-400 flex items-center justify-center text-white rounded-[100%]">{ number }</div>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-lg p-10 rounded-lg h-full">
                <h3 className="font-bold text-xl">{title}</h3>
                {para && <p className='text-sm'>{ para }</p>}
                <ul className="flex flex-col gap-2">
                    {listItem.map((item, index) => {
                        // Check if item contains HTML tags
                        const containsHTML = item.includes('<') && item.includes('>');
                        
                        return (
                            <li key={index} className="w-full h-full">
                                <span className="flex flex-row items-start text-sm gap-2 text-gray-500">
                                    <span className="text-green-400 pt-1">
                                        {tickMark}
                                    </span>
                                    {containsHTML ? (
                                        <div 
                                            className="whitespace-pre-wrap"
                                            style={{fontFamily: "inherit"}}
                                            dangerouslySetInnerHTML={{ __html: item }}
                                        />
                                    ) : (
                                        <pre style={{whiteSpace: "pre-wrap", fontFamily: "inherit"}}>{ item }</pre>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                {number == 5 && <ImportantNotice />}
            </div>
        </section>
    )
}

const InfoCard = ({icon, span1, span2, span3}) => {
    return (
        <div className="flex flex-col items-center  w-full bg-white shadow-lg p-2 py-5 rounded-lg">
            <div className="flex flex-col items-center justify-center">
                    <span className='text-sky-600'>
                        {icon}
                    </span>
                    <span className="font-semibold text-gray-600 text-center">
                        {span1}
                    </span>
                    <span className='text-blue-500 font-bold text-xl text-center'>
                        {span2}
                    </span>
                    <span className='text-gray-500 text-sm text-center'>
                        {span3}
                    </span>

            </div>
        </div>
    )
}

const SubInstruction = () => {

    const listItem1 = [
        "Please follow the IEEE two-column A4 size standard conference format for preparing your final manuscript",
        "Visit IEEE Templates page by clicking templates button in Quick Access Section for more details",
        "Revised Version: Revise your paper based on reviewers’ comments/suggestions. The reviewer’s comments are available on the same Microsoft paper management site by clicking Reviewer Comments button in quick access section",
        "Maximum page limit is 6 pages, including references",
        "Do not include an author biography at the end",
        "Additional pages permitted subject to extra payment of Rs. 500 ($25) per additional page subject maximum of 8 pages only",
        "Similarity with other papers should be low (similarity index below 20% excluding reference & individual similarity not greater than 10%)",
        "Papers with similarity greater than 20% will summarily be rejected",
        "Maximum file size allowed is 3 MB, PDF format without encryption or passwords",
        "Authors are responsible for ensuring reviewers' and meta-reviewers' comments have been addressed",
    ];

    const listItem2 = [
        "For papers in which all authors are employed by the US government, the copyright notice is: U.S. Government work not protected by U.S. copyright",
        "For papers in which all authors are employed by a Crown government (UK, Canada, and Australia), the copyright notice is: 979-8-3315-2716-7/25/$31.00 ©2025 Crown",
        "For papers in which all authors are employed by the European Union, the copyright notice is: 979-8-3315-2716-7/25/$31.00 ©2025 European Union",
        "For all other papers the copyright notice is: 979-8-3315-2716-7/25/$31.00 ©2025 IEEE",
    ];


    const listItem3 = [
        "After revising your paper, pass it through PDF eXpress using conference ID (65536X) by clicking PDF eXpress button in Quick Access Section",
        "Log in to the <a href='https://ieee-pdf-express.org/account/login?ReturnUrl=%2F' target='_blank' style='color: #3b82f6; text-decoration: underline;'>IEEE PDF eXpress™</a> site",
        "First-time users should do the following:\n\t1. Select the New Users - Click Here link\n\t2. Enter the following: 65536X for the Conference ID, your email address, a password\n\t3. Continue to enter information as prompted",
        "An Online confirmation will be displayed and an email confirmation will be sent verifying your account setup",
    ];

    const listItem4 = [
        "After step 3, submit the final version of the paper",
        "Please change the name of the file to the CMT paper ID before uploading",
        "Check through the author console in CMT",
        "Note that you are expected to retain the original paper's title in the final version",
        "The author list and order cannot be changed in the final manuscript",
    ];

    const listItem5 = [
        "IMPORTANT: Ensure that all authors have registered in CMT with their correct names and contact emails",
        "IEEE e-copyright takes information from CMT",
        "Any discrepancies with the names mentioned in the paper may result in the submission being removed from the conference publication and not uploaded to IEEE Xplore",
    ];


    return (
        <section className="mt-10 md:mt-3 ">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col justify-center items-center gap-1 sm:gap-2">
                    <div className="flex flex-row items-center text-sky-700">
                        <span>{CameraIcon}</span>
                        <span className='text-lg sm:text-xl xl:text-4xl font-bold'>Camera Ready Paper Submission</span>
                    </div>
                    
                    <span className='text-base sm:text-xl text-gray-500 font-thin text-center'>Complete instructions for final paper preparation and submission</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
                    <InfoCard
                        icon={docIcon}
                        span1="Page Limit"
                        span2="6 pages (including references)"
                        span3="Including references"
                    />
                    <InfoCard
                        icon={importantIcon}
                        span1="File Size"
                        span2="3 MB"
                        span3="PDF format only"
                    />
                    <InfoCard
                        icon={tickMark}
                        span1="Similarity"
                        span2="<20%"
                        span3="Excluding references"
                    />
                </div>
                <div className="">
                    <QuickAccessResources />
                </div>
                <div className="flex flex-col gap-7 items-stretch">
                    <ListDiv 
                        number={"1"} 
                        title={"Step 1: Final Camera-ready paper preparation"} 
                        listItem={listItem1}
                    />
                    <ListDiv 
                        para="Students must ensure the correct copyright notice is included on their papers as per IEEE guidelines, since missing or incorrect notices may affect publication:" 
                        number={"2"} 
                        title={"Step 2: IEEE Copyright Notice"} 
                        listItem={listItem2} 
                    />
                        <ListDiv 
                        number={"3"} 
                        title={"Step 3: PDF eXpress check"} 
                        listItem={listItem3} 
                    />
                        <ListDiv 
                        number={"4"} 
                        title={"Step 4: Camera-ready Paper Submission"} 
                        listItem={listItem4}
                    />
                        <ListDiv 
                        number={"5"} 
                        title={"Step 5: Submission of the copyright form"} 
                        listItem={listItem5}
                    />
                </div>

            </div>
        </section>
    )
}

const ResourceBtn = ({btn}) => {
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <div className={`${btn.color} rounded-md hover:${btn.hover_color} hover:scale-105 duration-150`}>
                <a href={btn.href} target='_blank' className='flex flex-col flex-wrap justify-center items-center w-64 sm:w-80 lg:w-52 xl:w-72 p-2 md:p-5'>
                    <span>{ btn.icon }</span>
                    <span className="text-base">
                            {btn.btn_text}
                    </span>
                </a>
            </div>
        </div>
    )
}

const QuickAccessResources = () => {
    const btn1 = {
        "icon": upArrowIcon,
        "color":"bg-blue-800",
        "hover_color":"bg-blue-800/80",
        "btn_text":" Reviewer Comments", 
        "href": "https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FTEMSMET2025"
    };
    const btn2 = {
        "icon": docIcon,
        "color":"bg-sky-500",
        "hover_color":"bg-sky-500/80",
        "btn_text":"PDF eXpress", 
        "href":"https://ieee-pdf-express.org/account/login?ReturnUrl=%2F" 
    };
    const btn4 = {
        "icon": fileCheckIcon,
        "color": "bg-purple-600",
        "color": "bg-purple-600/80",
        "btn_text":"Templates", 
        "href": "https://www.ieee.org/conferences/publishing/templates"
    };
    return (
        <section className="mt-10">
            <div className="bg-blue-800 bg-sky-500 bg-green-500 bg-purple-600 bg-blue-800/80 bg-sky-500/80 bg-green-500/80 bg-purple-600/80"></div>
            <div className="flex flex-col w-full bg-white shadow-lg p-2 rounded-lg">
                <div className="text-center text-xl font-bold text-sky-400">Quick Access Resources</div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5 p-5 items-stretch">
                    <ResourceBtn btn={btn1} />
                    <ResourceBtn btn={btn2} />
                    <ResourceBtn btn={btn4} />
                </div>
            </div>
        </section>
    )
}

const LOA = () => {
    
    return (
        <div id="camera-ready-paper" className='sm:p-5'>
            <SubInstruction />
            <RequirementCopyright/>
        </div>
  )
}

export default LOA