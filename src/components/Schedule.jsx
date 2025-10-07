import React from 'react'

const GoogleSheetEmbed = () => {
    const src = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQB_-YJ_xV1cfnJ9GnS91Zu3oBbqsFH15-Ow1Xlv7zrGKMSNWnAplGFHfLZ_3gVMQ/pubhtml?rm=minimal";
    return (
        <div className='flex justify-center items-center' style={{ width: "95%", height: "90vh" }}>
            <iframe
                src={src}
                width="100%"
                height="100vh"
                className="border-0 h-full"
                title="Conference Schedule"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: "none" }}
            ></iframe>
        </div>
    )
}

const Schedule = () => {
  return (
      <div>
          <div className="text-center text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">Conference Schedule</div>
          <div className="text-center text-gray-500">Please click the tabs below to view complete schedule </div>
          <GoogleSheetEmbed/>
    </div>
  )
}

export default Schedule