import Header from "@/components/header";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import InfoCard from "@/components/ui/info-card";

import React from "react";

export default function LandingPage() {
	return (
		<div className="flex flex-col min-h-screen text-font-500">
			<Header />
			<main className="container mx-auto px-4 py-8 flex-1">
				{/* Hero Section */}
				<section className="py-12">
					<h1 className="text-4xl md:text-5xl font-bold">Welcome to Mindly</h1>
					<p className="mt-4 text-lg md:text-xl  ">Education, Reinvented.</p>
				</section>

				{/* About Us Section */}
				<section className="p-12">
					<section className="flex flex-row items-center gap-4">
						<h2 className="text-3xl font-semibold">
							Built to revolutionize Education
						</h2>
						<p>
							Mindly is revolutionizing the way students learn. Our platform
							provides a wide range of AI-powered tools to simplify complex
							subjects, promote engagement, and make studying more efficient.
							Whether you're preparing for a major exam or trying to understand
							a difficult concept, Mindly has your back.
						</p>
					</section>
					<section>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
							<InfoCard
								header="Doc Helpers"
								content="Get AI-generated summaries of your documents, interact with our subject
				AI experts to get instant answers and detailed explanations."
								href="#"
							/>
							<InfoCard
								header="Collaborate with learners"
								content="Use our communities and study groups to connect with
									like-minded people studying. Get help from certified trainers
									registered on our app."
								href="#"
							/>
							<InfoCard
								header="Practice"
								content="Create quizzes, flashcards, exams with popular patterns from
									any text to test your knowledge and improve retention."
								href="#"
							/>
						</div>
					</section>
				</section>

				{/* Pricing Section */}
				<section className="py-12">
					<h2 className="text-3xl font-semibold">Pricing</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
						<div className="p-6 border rounded-lg shadow-sm">
							<h3 className="text-2xl font-medium">Basic Plan</h3>
							<p className="mt-2  ">$0/month</p>
							<ul className="mt-4 space-y-2  ">
								<li>Access to basic features</li>
								<li>Limited document uploads</li>
								<li>Community support</li>
							</ul>
						</div>
						<div className="p-6 border rounded-lg shadow-sm">
							<h3 className="text-2xl font-medium">Pro Plan</h3>
							<p className="mt-2  ">$9.99/month</p>
							<ul className="mt-4 space-y-2  ">
								<li>All Basic features</li>
								<li>Unlimited document uploads</li>
								<li>Priority support</li>
								<li>Advanced AI tools</li>
							</ul>
						</div>
						<div className="p-6 border rounded-lg shadow-sm">
							<h3 className="text-2xl font-medium">Enterprise Plan</h3>
							<p className="mt-2  ">Contact us</p>
							<ul className="mt-4 space-y-2  ">
								<li>Custom solutions</li>
								<li>Dedicated AI models</li>
								<li>24/7 support</li>
								<li>Team collaboration tools</li>
							</ul>
						</div>
					</div>
				</section>

				{/* FAQs Section */}
				<section className="py-12">
					<h2 className="text-3xl font-semibold">FAQs</h2>
					<div className="mt-6 space-y-4">
						<Accordion type="multiple">
							<AccordionItem value="item-1">
								<AccordionTrigger className="text-xl font-medium">
									What is the pricing model?
								</AccordionTrigger>
								<AccordionContent className="text-lg">
									We offer flexible plans, from free basic access to premium
									plans starting at $9.99/month for advanced features.{" "}
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger className="text-xl font-medium">
									Are there additional costs for AI tools?
								</AccordionTrigger>
								<AccordionContent className="text-lg">
									Some features may incur additional costs, but these will
									always be clearly outlined.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger className="text-xl font-medium">
									Can I use Mindly on multiple devices?
								</AccordionTrigger>
								<AccordionContent className="text-lg">
									Yes, Mindly is available on any device with an internet
									connection. You can also checkout our app for{" "}
									<Link href={"#"} className="underlined">
										iOS
									</Link>{" "}
									and <Link href={"#"}>Android</Link>.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger className="text-xl font-medium">
									How to avail Institue benefits
								</AccordionTrigger>
								<AccordionContent className="text-lg">
									Register with your institute email and apply for institute
									priviliges. We will approve your profile after verifying your
									credentials.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-primary-500 text-font-900 py-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-col md:flex-row justify-between">
						<div className="mb-4 md:mb-0">
							<h5 className="text-lg font-semibold">Mindly</h5>
							<p className="mt-2 text-font-950">
								Revolutionize your study experience with AI-driven tools and
								resources.
							</p>
						</div>
						<div>
							<h5 className="text-lg font-semibold">Quick Links</h5>
							<ul className="mt-2 space-y-2 text-font-950">
								<li>Home</li>
								<li>Features</li>
								<li>Pricing</li>
								<li>Support</li>
							</ul>
						</div>
						<div>
							<h5 className="text-lg font-semibold">Contact Us</h5>
							<p className="mt-2 text-font-950">support@mindly.com</p>
							<p className="mt-2 text-font-950">+1 800 123 4567</p>
						</div>
					</div>
					<div className="mt-8 text-center text-font-900">
						© 2024 Mindly. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
}
