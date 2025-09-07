import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { MapPin, Users, Phone, Globe } from "lucide-react";
import { useState, useEffect } from "react";

function HotelCard() {
    const[isLoading, setIsLoading] = useState(true);
    const [hotelData, setHotelData] = useState(null);
    useEffect(() => {
        const fetchHotelData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_URL + "common/hotels");
                const data = await response.json();
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                setHotelData(data);
                setIsLoading(false)
            }
            catch (error) {
                console.error("Error fetching hotel data:", error);
            }
        }
        fetchHotelData();
     }
        , []);
  return (
      <div className="flex flex-col justify-center items-center w-full gap-10 text-center">
          <div className="flex flex-col justify-center items-center gap-4 w-full">
              <span className="text-4xl font-bold text-sky-400">Conference Accommodation</span>
              <div className="flex flex-col justify-center w-full text-center text-gray-500 font-bold text-md">
                   <span>Discover comfortable and convenient hotel options for your stay during the conference. </span>
                    <span>All hotels are carefully selected for their proximity and quality.</span>
              </div>
             
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {isLoading ? (
    <div className="">Loading...</div>
          ) : (
            
                hotelData.map((hotel, index) => (
                    
                        <Card
                            key={index}
                            className="rounded-lg text-card-foreground overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border bg-card"
                        >
                            <CardHeader className="flex flex-col space-y-1.5 bg-primary/5 border-b border-border p-6">
                            <div className="flex justify-between items-start">
                                <CardTitle className="text-2xl font-bold text-card-foreground">
                                {hotel.name}
                                </CardTitle>
                                <Badge className="bg-sky-500 text-white font-medium px-3 py-1">
                                {hotel.distance} 
                                </Badge>
                            </div>
                            </CardHeader>

                            <CardContent className="p-6 space-y-6">
                            {/* Address */}
                            <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg border border-border/50">
                                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                <div>
                                <p className="font-medium text-card-foreground">{hotel.address}</p>
                                <p className="text-sm text-muted-foreground">Distance from venue</p>
                                </div>
                            </div>

                            {/* Rooms */}
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg">
                                <Users className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium text-card-foreground">{hotel.max_rooms} Rooms</p>
                                    <p className="text-sm text-muted-foreground">Available</p>
                                </div>
                                </div>

                                {/* Contact */}
                                <div className="flex items-center gap-3 p-3 bg-card border border-border/50 rounded-lg">
                                <Phone className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium text-card-foreground">{hotel.phone}</p>
                                    <p className="text-sm text-muted-foreground">Contact Number</p>
                                </div>
                                </div>

                                {/* Breakfast */}
                                {hotel.breakfast && (
                                <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs">✓</span>
                                    </div>
                                    <div>
                                    <p className="font-medium text-green-800">Breakfast Included</p>
                                    <p className="text-sm text-green-600">Complimentary service</p>
                                    </div>
                                </div>
                                )}
                            </div>

                            {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <a href={`tel:${hotel.phone}`} class = "flex-1">
                                    <Button className=" flex-row bg-sky-500 text-white hover:bg-sky-400 w-full ">
                                    <Phone className="h-4 w-4 mr-2" /> 
                                    
                                                Call Hotel
                                
                                        </Button>
                                    </a>
                                    {hotel.website && (
                                        <a href={`${hotel.website}`} target="_blank" className="flex-1 hover:bg-sky-500 hover:text-fuchsia-50 rounded-md transition-all duration-300">
                                <Button variant="outline" className="w-full" >
                                        <Globe className="h-4 w-4 mr-2" />
                                            Visit Website
                                </Button></a>
                                )}
                            </div>
                            </CardContent>
                            </Card>
                      ))
        )}
          </div>
          <div className="">
              <div class="rounded-lg text-gray-900 shadow-lg border border-gray-200 bg-white">
            <div class="flex flex-col space-y-1.5 p-6 bg-blue-50 border-b border-gray-200">
                <h3 class="text-2xl font-bold">Booking Information</h3>
            </div>

            <div class="p-8">
                <div class="grid md:grid-cols-2 gap-8">
                
                <div class="space-y-4">
                    <h4 class="font-semibold text-lg">Important Notes:</h4>
                    <ul class="space-y-3">
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Contact hotels directly for availability</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Breakfast is included in most accommodations</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Room availability is subject to confirmation</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Check-in/check-out policies may vary</span>
                    </li>
                    </ul>
                </div>

                <div class="space-y-4">
                    <h4 class="font-semibold text-lg">Booking Guidelines:</h4>
                    <ul class="space-y-3">
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Contact hotels directly for reservations</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Mention the conference for any special rates</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Book early to ensure availability</span>
                    </li>
                    <li class="flex items-start gap-2">
                        <span class="text-blue-600">•</span>
                        <span>Confirm cancellation policies before booking</span>
                    </li>
                    </ul>
                </div>

                </div>
            </div>
            </div>

          </div>
    </div>
  )

}


const Accomodation = () => {
  return (
    <HotelCard/>
  )
}

export default Accomodation;