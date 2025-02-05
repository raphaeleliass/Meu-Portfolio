import { CheckCircle } from "lucide-react";

export default function WhyMe() {
  const reasons = [
    "3+ years of frontend development experience",
    "Strong focus on clean, maintainable code",
    "Experience with modern frameworks and tools",
    "Excellent communication and collaboration skills",
    "Committed to delivering high-quality solutions",
    "Passionate about user experience and accessibility",
  ];

  return (
    <section id="why-me" className="bg-gray-50 px-4 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-poppins mb-12 text-3xl font-bold">Why Me?</h2>
        <div className="grid gap-6 text-left md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 flex-shrink-0 text-accent" />
              <p className="text-secondary text-sm">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
