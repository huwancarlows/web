import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from "next/image"
import  { Calendar, MapPin } from 'lucide-react'

export default function AdminEventCard({ title, date, location, description, image }: any) {
    return (
        <>
            <Card className="rounded-3xl h-[360px] items-center place-content-center">
            <CardHeader className="flex items-center">
                <p className="font-bold text-l">{title}</p>
            </CardHeader>
            <CardContent>
                <CardDescription className="flex items-center">
                <Calendar className="mx-1" color={"#2A93D5"} size={15}/>
                {date}
                <MapPin className="mx-1" color={"#2A93D5"} size={15} />
                {location}
                </CardDescription>
            </CardContent>
            <CardFooter>
            </CardFooter>
            </Card>
        </>
    )
}