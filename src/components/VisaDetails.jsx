import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award, MapPin, Plane } from "lucide-react";
import { Download, ExternalLink } from "lucide-react";
const VisaDetails = () => {
    return (

          <section >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                        <Plane className="w-7 h-7 text-sky-600" />
                        <span className="text-xl">
                            Visa Instructions for International Attendees
                        </span>
                </CardTitle>
                <CardDescription>
                  Complete visa guidance for TEMSMET 2025 conference participants
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-sky-400/5 p-4 rounded-lg border-[0.5px] border-sky-400">
                  <p className="text-sm text-gray-500 text-justify">
                    We look forward to welcoming you to TEMSMET 2025 in New Delhi, India! To ensure a smooth visa application process, please follow the instructions below.
                  </p>
                </div>

                {/* Visa Type Section */}
                <div>
                  <h3 className="text-xl font-semibold text-sky-600 mb-4">1. Visa Type</h3>
                  <p className="text-gray-500 mb-4">
                    You will need to apply for a <strong>Conference Visa</strong> to attend this event. India offers two types of Conference Visas:
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-sky-400/10 rounded-lg">
                      <h4 className="font-semibold mb-2">e-Conference Visa</h4>
                      <p className="text-sm text-gray-500 mb-2">
                        Available for nationals of select countries. 
                      </p>
                      <a 
                        href="https://indianvisaonline.gov.in/evisa/tvoa.html" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sky-600 hover:underline text-sm"
                      >
                        List of eligible countries available here →
                      </a>
                    </div>
                    <div className="p-4 bg-sky-400/10 rounded-lg">
                      <h4 className="font-semibold mb-2">Traditional Conference Visa</h4>
                      <p className="text-sm text-gray-500">
                        Required for those not eligible for an e-Conference Visa.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Documents Required Section */}
                <div>
              <h3 className="text-xl font-semibold text-sky-600 mb-4">2. Documents Required</h3>
                    
                  <p className="text-gray-500 mb-4">
                    To apply for your visa, you will need the following documents:
                  </p>
                    <div className="">
                        <a href="https://forms.gle/7jh6RuKLQfHc4N6y6" target="_blank">
                            <button className="bg-sky-700 text-white hover:bg-sky-700/90 px-6 py-2 rounded-lg font-medium transition-colors">
                                    <div className="flex gap-1 justify-center items-center">
                                        <span className="">Fill Out The Form For Visa Letter</span>
                                        <span className=""><ExternalLink className="w-4 h-4" /></span>
                                    </div>
                            </button>
                        </a>
                    </div> 
                  <div className="space-y-3 mt-5">
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Passport:</span> Valid for at least six months from your planned arrival date in India.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Visa Invitation Letter:</span> Attached in your confirmation email.
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Clearance from Ministry of External Affairs:</span> Approval documents from the Ministry of External Affairs (MEA), government of India (Attached in your confirmation email).
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Clearance from Ministry of Home Affairs (MHA):</span>
                        <ul className="mt-2 ml-4 space-y-1 text-sm text-gray-500">
                          <li>○ Delegates from <strong>Afghanistan, Pakistan, Iraq, Sudan, foreigners of Pakistani origin and stateless persons</strong> are requested to contact <a href="mailto:temsmet2025@nitdelhi.ac.in" className="text-sky-600 hover:underline">temsmet2025@nitdelhi.ac.in</a></li>
                          <li>○ All other delegates can use the MHA Communication attached in your confirmation email.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Passport-Sized Photo:</span> Recent, colour photo with a white background
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-sky-600 font-bold">•</span>
                      <div>
                        <span className="font-semibold">Accommodation Details:</span> Proof of hotel booking or conference accommodation.
                      </div>
                    </div>                    
                  </div>
                </div>

                {/* How to Apply Section */}
                <div>
                  <h3 className="text-xl font-semibold text-sky-600 mb-4">3. How to Apply</h3>
                  
                  <div className="space-y-6">
                    <div className="p-4 bg-sky-400/10 rounded-lg">
                      <h4 className="font-semibold mb-3">For e-Conference Visa (if eligible)</h4>
                      <ol className="space-y-2 text-sm">
                        <li>1. Visit the official e-Visa portal: <a href="https://indianvisaonline.gov.in/evisa/tvoa.html" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">https://indianvisaonline.gov.in/evisa/tvoa.html</a></li>
                        <li>2. Fill in the application form and upload the required documents.</li>
                        <li>3. Pay the visa fee online.</li>
                        <li>4. You will receive your visa approval via email, usually within 3-5 business days.</li>
                      </ol>
                    </div>

                    <div className="p-4 bg-sky-400/10 rounded-lg">
                      <h4 className="font-semibold mb-3">For Traditional Conference Visa</h4>
                      <ol className="space-y-2 text-sm">
                        <li>1. Locate the nearest Indian embassy/consulate in your country.</li>
                        <li>2. Download and complete the visa application form from <a href="https://indianvisaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">https://indianvisaonline.gov.in/</a></li>
                        <li>3. Submit your application along with the required documents in person or via mail.</li>
                        <li>4. Pay the visa fee as per embassy guidelines.</li>
                        <li>5. Visa processing takes typically 2-3 weeks.</li>
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Processing Times */}
                <div className="bg-yellow-200/10 p-4 rounded-lg border-[1px] border-yellow-400/20">
                  <h4 className="font-semibold text-sky-600 mb-2">Processing Times</h4>
                  <p className="text-sm text-gray-500">
                    <strong>e-Conference visas</strong> take around <strong>3-5 days</strong>, while <strong>traditional conference visas</strong> may take <strong>2-3 weeks</strong>. Apply early!
                  </p>
                </div>

                {/* Need Help Section */}
                <div className="bg-sky-400/10 p-4 rounded-lg border-[1px] border-sky-400">
                  <h4 className="font-semibold text-sky-600 mb-2">Need Help?</h4>
                  <p className="text-sm text-gray-500">
                    If you need any assistance with your visa application, feel free to contact our support team at{" "}
                    <a href="mailto:info@temsmet2025.org" className="text-sky-600 hover:underline">
                      temsmet2025@nitdelhi.ac.org
                    </a>{" "}
                    or visit our website.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-sky-600" />
                  Visa FAQ
                </CardTitle>
                <CardDescription>
                  Download comprehensive visa frequently asked questions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-sky-400/10 p-4 rounded-lg text-center">
                    <h4 className="font-semibold mb-2">Download Visa FAQ PDF</h4>
                    <p className="text-gray-500 mb-4 text-sm">
                    Get answers to the most common visa-related questions for TEMSMET 2025 attendees
                    </p>
                    <a href="/downloadable/ForeigD-FAQs-on-ConferenceVisa.pdf" target="_blank">
                        <button className="bg-sky-700 text-white hover:bg-sky-700/90 px-6 py-2 rounded-lg font-medium transition-colors">
                                <div className="flex gap-1 justify-center items-center">
                                    <span className="">Download FAQ PDF</span>
                                    <span className=""><Download size={18} /></span>
                                </div>
                                
                                
                        </button>
                    </a> 
                </div>
              </CardContent>
            </Card>
          </section>

    )
}

export default VisaDetails;