import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium">
            For the Android Application <strong className="text-gray-800">Tool</strong>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Last Updated: June 26, 2026
          </p>
        </div>

        {/* Introduction Highlight */}
        <div className="bg-blue-50/50 border-l-4 border-blue-500 p-5 rounded-r-lg text-gray-700 italic text-base leading-relaxed mb-10">
          "Your mobile device is your personal sanctuary. We hold an unwavering commitment to transparency, data ownership, and absolute security. We believe utility applications should empower you, not exploit your trust."
        </div>

        {/* 1. Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            1. Introduction & Developer Identity
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>Tool</strong>. This Privacy Policy outlines how <strong>Quantum Software Limited</strong> ("we," "our," or "us"), the creators and publishers of the Tool mobile application, handles, processes, and protects your personal information.
            </p>
            <p>
              As an independent developer group, we are guided by a simple core philosophy: your data belongs entirely to you. We have drafted this document in clear, straightforward, and reassuring language to explain exactly what information our application accesses, why we require specific device permissions, and the advanced technical measures we employ to guarantee your digital privacy remains absolute.
            </p>
            <p>
              By downloading, installing, or interacting with Tool, you agree to the practices described in this Privacy Policy. If you ever feel uncertain about any aspect of our data handling, we invite you to connect directly with our team at <a href="mailto:mdkhorshedalom573@gmail.com" className="text-blue-600 hover:underline">mdkhorshedalom573@gmail.com</a>.
            </p>
          </div>
        </section>

        {/* 2. Permissions */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            2. Information Collection & Permissions Used
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              To deliver a high-performance suite of over 20 offline and online utilities (such as PDF Tools, Image Compressor, SVG Converter, QR Suite, and Qibla Finder), Tool requires access to certain hardware capabilities. 
            </p>
            <p>
              We adhere strictly to the principle of "least privilege"—meaning our application will only request access to a device feature when it is technically indispensable to execute a utility you actively initiate. We do not abuse, harvest, or monetize your permissions. Below is a detailed breakdown of what we request and why:
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Camera Permission</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Strictly used for the QR Suite scanner to read and decode QR codes or barcodes in real-time.<br/>
                <strong>Our Commitment:</strong> The raw camera feed is processed instantly and locally on your device. We never capture, record, stream, or transmit photographs or video frames to any external servers. The camera session terminates the exact millisecond you exit the scanner.
              </p>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Location (GPS) Permission</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Used solely to calculate geographic geodesic alignments for the Compass & Qibla Finder tool.<br/>
                <strong>Our Commitment:</strong> To orient the compass toward the Qibla, the app performs localized mathematical calculations. This position data is used purely in transient memory for real-time trigonometry. Your location is never logged, tracked in the background, or transmitted anywhere.
              </p>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Storage / Media Access</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Utilized to read and write files locally when you convert or compress digital assets.<br/>
                <strong>Our Commitment:</strong> When you use tools like the Image Compressor, SVG Converter, or PDF generator, the app reads the source files you select and writes the outputs directly back to your device. This occurs completely on-device. Your private documents and photos are never uploaded to our servers.
              </p>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Device Sensors (Magnetometer & Accelerometer)</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Required for tracking physical heading values and performing level calibrations.<br/>
                <strong>Our Commitment:</strong> Our smart leveler and compass tools read hardware sensors to animate visual gauges. This data is entirely local, processed dynamically, and discarded instantly.
              </p>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">Account Information (Firebase Auth)</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Used when you register an account, log in, or initiate a secure guest profile.<br/>
                <strong>Our Commitment:</strong> We collect only the fundamental details you willingly provide—specifically your email address and profile details. This is handled with maximum security via Google Firebase.
              </p>
            </div>

            <div className="bg-gray-50/50 p-5 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-1">User-Generated Data</h3>
              <p className="text-sm text-gray-600">
                <strong>Purpose:</strong> Saves the transaction entries in "Smart Spend" and text notes in "Quick Notes".<br/>
                <strong>Our Commitment:</strong> If you operate a guest profile, this data resides exclusively in your device's local sandbox. If logged in, your records are synchronized securely to allow cross-device access, but remain entirely private to you.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Third-Party Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            3. Third-Party Services & Analytics
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
            <p>
              While we strive to design Tool as a self-contained local experience, we rely on a select number of highly secure, industry-leading third-party services for authentication, cloud syncing, and non-intrusive ad placements to keep the app free.
            </p>
          </div>
          
          <ul className="space-y-4 text-gray-700 list-disc pl-5">
            <li>
              <strong>Google Firebase (Authentication & Realtime Database):</strong> Used for secure user login, cross-device synchronization of settings, custom app configuration, and administrator announcements. 
              <br/><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">Read Firebase Privacy Policy</a>
            </li>
            <li>
              <strong>StartApp SDK (Ad Network):</strong> Used to display standard banner, interstitial, and rewarded video advertisements. StartApp may collect non-personal device identifiers, approximate geographic locations, IP addresses, and ad interaction metrics to serve relevant content.
              <br/><a href="https://www.startapp.com/privacy/" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline">Read StartApp Privacy Policy</a>
            </li>
          </ul>
        </section>

        {/* 4. Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            4. Data Security & Storage
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              The security of your personal data is a responsibility we take with utmost seriousness. Quantum Software Limited applies industry-best safeguards to keep your information shielded:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Local-First Processing:</strong> All high-privacy processes (image compression, SVG rendering, PDF generation, and hash operations) occur strictly in local RAM. We absolutely do not store your private files on any server.</li>
              <li><strong>Encrypted Connections:</strong> Every network connection between Tool and Google Firebase servers is hardened using industry-grade Secure Sockets Layer (SSL) and HTTPS encryption protocols.</li>
            </ul>
          </div>
        </section>

        {/* 5. User Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            5. User Rights & Account Deletion
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We believe in your absolute right to control your digital footprint. You maintain sovereign control over your records within our ecosystem.
            </p>
            <p>
              <strong>How to delete your data:</strong> You can completely delete your account, authentication records, and all synchronized cloud database records permanently. You can do this directly via the user profile screen inside the app, or by emailing our support team at <a href="mailto:mdkhorshedalom573@gmail.com" className="text-blue-600 hover:underline">mdkhorshedalom573@gmail.com</a>. Upon request, we will verify and purge your records permanently.
            </p>
          </div>
        </section>

        {/* 6. Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            6. Children's Privacy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Tool operates in strict conformity with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect, maintain, or request personal information from children under the age of 13.
            </p>
            <p>
              If we discover that a child under 13 has provided us with personal information, we will take immediate corrective action to purge that data permanently. Parents or legal guardians with concerns may contact us immediately.
            </p>
          </div>
        </section>

        {/* 7. Changes */}
        <section className="mb-10">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            7. Changes to this Privacy Policy
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We may modify or update this Privacy Policy to accommodate new features or adapt to technical upgrades. The latest version will always be marked with the "Last Updated" date at the top of this document. In the event of material changes to how we protect your data, we will post a prominent alert notice directly inside the application interface to ensure you are fully informed.
            </p>
          </div>
        </section>

        {/* 8. Contact */}
        <section className="mb-6">
          <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-50">
            8. Contact Us
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We value open, transparent, and responsive communication with our user community. If you have questions, feedback, or legal inquiries concerning this Privacy Policy, please reach out to us:
            </p>
            <ul className="space-y-2 font-medium">
              <li><strong>Developer Group:</strong> Quantum Software Limited</li>
              <li><strong>Support Email:</strong> <a href="mailto:mdkhorshedalom573@gmail.com" className="text-blue-600 hover:underline">mdkhorshedalom573@gmail.com</a></li>
            </ul>
          </div>
        </section>

        <div className="pt-10 border-t border-gray-100 flex flex-col items-center gap-4">
          <Link to="/about" target="_blank" className="text-blue-600 hover:text-blue-800 font-medium text-base hover:underline">
            About Us
          </Link>
          <div className="text-sm text-gray-400">
            &copy; 2026 Quantum Software Limited. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

