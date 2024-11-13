"use client"
import { AnimatedTestimonials } from "./animated-testimonials"


export function AnimatedTestimonialsDemo() {
  const testimonials = [
  {
    src: "https://res.cloudinary.com/dxxics5nv/image/upload/v1731482176/henotech_technologies_pvt_ltd_logo_qa8urp.jpg",
    name: "John Doe",
    designation: "Software Engineer",
    quote: "This company provided great opportunities for learning and growth!"
  },
  {
    src: "/path/to/image2.jpg",
    name: "Jane Smith",
    designation: "Product Manager",
    quote: "I had an amazing time working on innovative projects."
  },
];
  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
