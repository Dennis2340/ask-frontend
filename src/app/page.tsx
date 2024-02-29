import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BoomBoxIcon, Building, Inbox, Laptop, Mail, Phone, Smile, SmileIcon, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <MaxWidthWrapper className="flex flex-col justify-center">
         <div className="flex flex-col justify-center">
           <h2 className="text-3xl"><strong>Empowering Curiosity</strong></h2>
           <h2 className="text-2xl"><strong>Welcome to <span className="text-purple-400">Ask</span></strong></h2>
         </div>
          <Card className="shadow-lg shadow-purple-400 mt-10">
             <CardHeader>
              <div className="flex justify-center space-x-2">
                <Image
                src="/ASKII-logo.jpg"
                alt="logo"
                className="rounded-full"
                height={100}
                width={100}
                quality={100}
                />
              </div>
             </CardHeader>
             <CardContent>
              <div className="flex justify-center space-x-2">
                  <h3 className="italic">Unlocking Answers</h3>
                  <p className="italic mt-5 max-w-prose text-zinc-700 sm:text-lg">Ask and Discover a World of Knowledge</p>
                  <h5 className="italic">Ask Learn Earn</h5>
              </div>
             </CardContent>
             <CardFooter className="flex flex-col justify-center">
               <div>
                  <Link
                    className={
                        buttonVariants({ 
                            size: "lg", 
                            className: "mt-5 bg-gray-300 justify-end shadow-md  text-black hover:text-white"
                        })}
                      href="/sign-in"
                    >
                    Join Ask Community
                </Link>
               </div>
             </CardFooter>
          </Card> 
          <Card className="shadow-lg shadow-purple-400 mt-10">
             <CardHeader>
              <div className="flex justify-center space-x-2">
                <Image
                src="/token-logo.jpg"
                alt="logo"
                className="rounded-full"
                height={100}
                width={100}
                quality={100}
                />
              </div>
             </CardHeader>
             <CardContent className="flex-col justify-center">
                <div className="justify-center">
                    <h3 className="italic text-justify"><strong>EARN</strong> AS YOU CONTRIBUTE</h3>
                    <p className="italic text-justify mt-5 max-w-prose text-zinc-700 sm:text-lg">Get your <strong>ASKII</strong> coin as you lead the board of answers weekly as a reward</p>
                </div>
             </CardContent>
             <CardFooter className="flex flex-col justify-center">
               <div>
                  <Link
                    className={
                        buttonVariants({ 
                            size: "lg", 
                            className: "mt-5 bg-gray-300 justify-end shadow-md  text-black hover:text-white"
                        })}
                      href="/sign-in"
                    >
                    Explore Ask
                </Link>
               </div>
             </CardFooter>
          </Card> 
         <Card className="mt-10 shadow-lg shadow-purple-400">
           <CardHeader>
              <h2 className="text-xl"><strong>Vision</strong></h2>
           </CardHeader>
           <CardContent className="text-gray-700">
              <p>
                Welcome to <strong>ASK</strong>, a platform committed to fostering a culture of learning.
                We strive to provide a user-friendly, engaging, and responsive experience for our community members.
                It&apos;s not just about asking questions; it&apos;s about the joy of exploration, the thrill of learning,
                and the satisfaction of finding answers that enrich your understanding of the technological world.
                Plus, you can <strong>earn rewards</strong> along the way! Each week, we reward users with our tokens (ASKII)
                for their most <strong>liked</strong> answers, encouraging meaningful contributions and knowledge sharing.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">About Us</h3>
                <p>
                  <strong>ASK</strong> is driven by a passionate team dedicated to creating a vibrant and inclusive platform
                  where knowledge seekers and sharers come together to explore, learn, and grow.
                  Our mission is to empower individuals to unleash their curiosity, expand their horizons,
                  and connect with like-minded enthusiasts in the ever-evolving world of technology.
                  Join us on this journey of discovery and let&apos;s build a community where curiosity thrives,
                  learning knows no bounds, and every question leads to new possibilities.
                </p>
              </div>
            </CardContent>
         </Card>
         <div className="mt-10">
            <Card className="shadow-lg shadow-purple-400">
              <CardHeader>
                <h3 className="text-2xl"><strong>Contact Us</strong></h3>
              </CardHeader>
              <div className="flex space-x-2">
              <CardContent>
                <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700">askii@gmail.com</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Phone className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700">+23232659254</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Building className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700">Christex Foundation Lower faculty, opposite law building, FBC</p>
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <Timer className="w-6 h-6 text-purple-500" />
                  <p className="text-gray-700">9:00am to 5:00pm</p>
                </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex-col justify-center w-full space-y-4">
                  <Input className="w-full" placeholder="Enter Name..." />
                  <Input className="w-full" placeholder="Enter Email..." />
                  <Textarea className="w-full" placeholder="Type Message..." />
                  <Button className="w-full bg-gray-400 hover:bg-purple-600 text-white">Send Message</Button>
                </div>
              </CardFooter>
              </div>
            </Card>
          </div>
      </MaxWidthWrapper>
    </main>
  );
}
