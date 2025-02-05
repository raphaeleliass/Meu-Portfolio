import ContactForm from "./forms/contact-form";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-xl">
        <h2 className="font-poppins mb-12 text-center text-3xl font-bold">Get In Touch</h2>
        <ContactForm />
      </div>
    </section>
  );
}
