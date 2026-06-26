import { Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#2c313a] font-sans selection:bg-blue-100 selection:text-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 shadow-sm border border-[#e5e7eb] rounded-xl">
        
        {/* Header */}
        <div className="border-b border-gray-100 pb-8 mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-blue-700 font-medium tracking-wider uppercase mb-3 text-sm">
            <Shield className="w-5 h-5" />
            <span>Quantum Software Limited</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight leading-tight mb-3">
            About Us
          </h1>
          <p className="text-gray-500 font-medium">
            The team behind <strong className="text-gray-800">Tool</strong>
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Welcome to <strong>Quantum Software Limited</strong>. We are a dedicated team of passionate developers, designers, and creators committed to building high-quality, reliable, and user-centric mobile experiences.
          </p>
          <p>
            Our flagship product, <strong>Tool</strong>, was created with a clear mission: to provide an ultimate, all-in-one utility suite for Android users. By combining over 20 powerful tools into a single, seamless application, we aim to simplify your digital life without compromising on performance or security.
          </p>
          <p>
            We believe in <em>privacy by design</em>. In an era where data is constantly being harvested, we stand firmly on the principle that your digital sanctuary belongs entirely to you. Our applications are engineered to run locally whenever possible, ensuring your personal files and information never leave your device unnecessarily.
          </p>
          <p>
            Thank you for trusting Quantum Software Limited. We are constantly innovating and expanding our tools to better serve you.
          </p>
        </div>

        {/* Footer */}
        <div className="pt-10 mt-12 border-t border-gray-100 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Quantum Software Limited. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
