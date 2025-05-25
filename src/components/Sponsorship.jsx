import React, { useState } from "react";
import { HeadingBar } from "./SmallComps";
import { Accordion } from "flowbite-react";

const Sponsorship = () => {
  return (
    <div
      id="sponsorship-invitation"
      className=" min-h-screen p-5 sm:mt-10 sm:p-5 md:ml-16 md:mr-16 lg:ml-20 lg:mr-20"
    >
      <h1 className="font-bold text-2xl sm:text-3xl text-sky-700">
        Sponsorship Details:
      </h1>
      <HeadingBar classes="w-full mb-5" />

      <div className="lg:flex items-center justify-center">
        <div className="lg:max-w-4xl my-8 p-4 bg-white rounded-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-sky-700 text-center">
              Sponsorship Tier Comparison
            </h2>
          </div>

          <table className="table-auto w-full border-collapse border border-gray-400 hidden lg:table">
            <thead>
              <tr className="bg-gray-800 text-gray-100 text-left">
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Benefits
                </th>
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Platinum
                </th>
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Diamond
                </th>
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Gold
                </th>
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Silver
                </th>
                <th className="border border-gray-400 p-3 text-gray-100 w-1/6">
                  Bronze
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-sky-300/25">
                <td className="border border-gray-400 p-3">Cost (INR)</td>
                <td className="border border-gray-400 p-3">₹8 Lakhs</td>
                <td className="border border-gray-400 p-3">₹5 Lakhs</td>
                <td className="border border-gray-400 p-3">₹3 Lakhs</td>
                <td className="border border-gray-400 p-3">₹1 Lakh</td>
                <td className="border border-gray-400 p-3">₹50,000</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-3">Exhibition Space</td>
                <td className="border border-gray-400 p-3">
                  2 spaces (5x5 sqm)
                </td>
                <td className="border border-gray-400 p-3">
                  2 spaces (3x3 sqm)
                </td>
                <td className="border border-gray-400 p-3">
                  1 space (3x3 sqm)
                </td>
                <td className="border border-gray-400 p-3">
                  1 space (2x2 sqm)
                </td>
                <td className="border border-gray-400 p-3">None</td>
              </tr>
              <tr className="bg-sky-300/25">
                <td className="border border-gray-400 p-3">
                  Stage Recognition
                </td>
                <td className="border border-gray-400 p-3">
                  Platinum sponsor on stage backdrop
                </td>
                <td className="border border-gray-400 p-3">
                  Diamond sponsor on stage backdrop
                </td>
                <td className="border border-gray-400 p-3">
                  Gold sponsor on stage backdrop
                </td>
                <td className="border border-gray-400 p-3">
                  Silver sponsor on stage backdrop
                </td>
                <td className="border border-gray-400 p-3">
                  Bronze sponsor on stage backdrop
                </td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-3">
                  Promotional Coverage
                </td>
                <td className="border border-gray-400 p-3">
                  Featured on all promotional items, bags, website, and media
                  posters
                </td>
                <td className="border border-gray-400 p-3">Same as Platinum</td>
                <td className="border border-gray-400 p-3">Same as Platinum</td>
                <td className="border border-gray-400 p-3">Same as Platinum</td>
                <td className="border border-gray-400 p-3">Same as Platinum</td>
              </tr>
              <tr className="bg-sky-300/25">
                <td className="border border-gray-400 p-3">
                  Presentation Time
                </td>
                <td className="border border-gray-400 p-3">30 minutes</td>
                <td className="border border-gray-400 p-3">20 minutes</td>
                <td className="border border-gray-400 p-3">10 minutes</td>
                <td className="border border-gray-400 p-3">5 minutes</td>
                <td className="border border-gray-400 p-3">2 minutes</td>
              </tr>
            </tbody>
          </table>

          <Accordion className="lg:hidden">
            <Accordion.Panel className="border border-gray-400 p-3">
              <Accordion.Title>Platinum Sponsorship</Accordion.Title>
              <Accordion.Content>
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Benefits
                      </th>
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Platinum
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">Cost (INR)</td>
                      <td className="border border-gray-400 p-3">₹8 Lakhs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Exhibition Space
                      </td>
                      <td className="border border-gray-400 p-3">
                        2 spaces (5x5 sqm)
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Stage Recognition
                      </td>
                      <td className="border border-gray-400 p-3">
                        Platinum sponsor on stage backdrop
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Promotional Coverage
                      </td>
                      <td className="border border-gray-400 p-3">
                        Featured on all promotional items, bags, website, and
                        media posters
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Presentation Time
                      </td>
                      <td className="border border-gray-400 p-3">30 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="border border-gray-400 p-3">
              <Accordion.Title>Diamond Sponsorship</Accordion.Title>
              <Accordion.Content>
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Benefits
                      </th>
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Diamond
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">Cost (INR)</td>
                      <td className="border border-gray-400 p-3">₹5 Lakhs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Exhibition Space
                      </td>
                      <td className="border border-gray-400 p-3">
                        2 spaces (3x3 sqm)
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Stage Recognition
                      </td>
                      <td className="border border-gray-400 p-3">
                        Diamond sponsor on stage backdrop
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Promotional Coverage
                      </td>
                      <td className="border border-gray-400 p-3">
                        Featured on all promotional items, bags, website, and
                        media posters
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Presentation Time
                      </td>
                      <td className="border border-gray-400 p-3">20 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="border border-gray-400 p-3">
              <Accordion.Title>Gold Sponsorship</Accordion.Title>
              <Accordion.Content>
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Benefits
                      </th>
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Gold
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">Cost (INR)</td>
                      <td className="border border-gray-400 p-3">₹3 Lakhs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Exhibition Space
                      </td>
                      <td className="border border-gray-400 p-3">
                        1 space (3x3 sqm)
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Stage Recognition
                      </td>
                      <td className="border border-gray-400 p-3">
                        Gold sponsor on stage backdrop
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Promotional Coverage
                      </td>
                      <td className="border border-gray-400 p-3">
                        Featured on all promotional items, bags, website, and
                        media posters
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Presentation Time
                      </td>
                      <td className="border border-gray-400 p-3">10 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="border border-gray-400 p-3">
              <Accordion.Title>Silver Sponsorship</Accordion.Title>
              <Accordion.Content>
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Benefits
                      </th>
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Silver
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">Cost (INR)</td>
                      <td className="border border-gray-400 p-3">₹1 Lakh</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Exhibition Space
                      </td>
                      <td className="border border-gray-400 p-3">
                        1 space (2x2 sqm)
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Stage Recognition
                      </td>
                      <td className="border border-gray-400 p-3">
                        Silver sponsor on stage backdrop
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Promotional Coverage
                      </td>
                      <td className="border border-gray-400 p-3">
                        Featured on all promotional items, bags, website, and
                        media posters
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Presentation Time
                      </td>
                      <td className="border border-gray-400 p-3">5 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel className="border border-gray-400 p-3">
              <Accordion.Title>Bronze Sponsorship</Accordion.Title>
              <Accordion.Content>
                <table className="border-collapse border border-gray-400 w-full">
                  <thead>
                    <tr className="bg-gray-800 text-gray-100 text-left">
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Benefits
                      </th>
                      <th className="border border-gray-400 p-3 text-gray-100">
                        Bronze
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">Cost (INR)</td>
                      <td className="border border-gray-400 p-3">₹50,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Exhibition Space
                      </td>
                      <td className="border border-gray-400 p-3">None</td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Stage Recognition
                      </td>
                      <td className="border border-gray-400 p-3">
                        Bronze sponsor on stage backdrop
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 p-3">
                        Promotional Coverage
                      </td>
                      <td className="border border-gray-400 p-3">
                        Featured on all promotional items, bags, website, and
                        media posters
                      </td>
                    </tr>
                    <tr className="bg-sky-300/25">
                      <td className="border border-gray-400 p-3">
                        Presentation Time
                      </td>
                      <td className="border border-gray-400 p-3">2 minutes</td>
                    </tr>
                  </tbody>
                </table>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-5">
              Note: For more details, please download the PDF.
            </p>
            <div class="mt-10 flex flex-col gap-10 justify-center items-center text-sky-600 font-bold">
              <a
                href="./downloadable/Brochure.pdf"
                download="Sponsorship_Details.pdf"
                className="px-6 py-3 border-2 border-sky-700 rounded-md hover:border-sky-800 transition-colors duration-500 ease-in-out hover:shadow-lg hover:text-sky-700 hover:bg-sky-300/70 "
              >
                Download Sponsorship PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <iframe
        src="/Brochure.pdf#zoom=FitW&toolbar=0"
        className="w-full h-screen border border-gray-400 shadow-lg overflow-hidden"
        title="Sponsorship Invitation"
        loading='lazy'
      /> */}
    </div>
  );
};

export default Sponsorship;
