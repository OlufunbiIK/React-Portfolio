import React from "react";
import {
  X,
  Download,
  FileText,
  Shield,
  Calendar,
  Mail,
  Printer,
} from "lucide-react";
import { useTheme } from "./providers/ThemeContext";

export default function LegalModal({ isOpen, onClose, type = "terms" }) {
  const { isDarkTheme } = useTheme();

  if (!isOpen) return null;

  const baseClasses = {
    overlay: `fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4`,
    modal: `relative w-full max-w-4xl max-h-screen rounded-lg shadow-2xl overflow-hidden flex flex-col ${
      isDarkTheme
        ? "bg-gray-900 border border-gray-700"
        : "bg-white border border-gray-200"
    }`,
    header: {
      wrapper: `flex items-center justify-between p-6 border-b flex-shrink-0 ${
        isDarkTheme ? "border-gray-700" : "border-gray-200"
      }`,
      left: "flex items-center gap-3",
      title: `text-2xl font-bold ${
        isDarkTheme ? "text-white" : "text-gray-900"
      }`,
      subtitle: `text-sm ${isDarkTheme ? "text-gray-400" : "text-gray-600"}`,
      actions: "flex items-center gap-2",
      button: `p-2 rounded-lg transition-all duration-200 ${
        isDarkTheme
          ? "hover:bg-gray-800 text-gray-400 hover:text-white"
          : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
      }`,
      closeButton: `p-2 rounded-lg transition-all duration-200 ${
        isDarkTheme
          ? "hover:bg-red-900/30 text-gray-400 hover:text-red-400"
          : "hover:bg-red-50 text-gray-600 hover:text-red-600"
      }`,
    },
    content: {
      wrapper: "flex-1 overflow-y-auto p-6",
      section: "mb-6",
      heading: `text-xl font-semibold mb-3 ${
        isDarkTheme ? "text-gray-200" : "text-gray-800"
      }`,
      subheading: `text-lg font-medium mb-2 ${
        isDarkTheme ? "text-gray-300" : "text-gray-700"
      }`,
      paragraph: `mb-3 leading-relaxed text-sm ${
        isDarkTheme ? "text-gray-300" : "text-gray-700"
      }`,
      list: `ml-4 mb-3 space-y-1 text-sm ${
        isDarkTheme ? "text-gray-300" : "text-gray-700"
      }`,
      emphasis: isDarkTheme ? "text-blue-400" : "text-blue-600",
      contact: `p-4 rounded-lg border text-sm ${
        isDarkTheme
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-100 border-gray-200"
      }`,
    },
    footer: {
      wrapper: `flex items-center justify-between p-4 border-t flex-shrink-0 ${
        isDarkTheme ? "border-gray-700" : "border-gray-200"
      }`,
      lastUpdated: `text-xs flex items-center gap-1 ${
        isDarkTheme ? "text-gray-500" : "text-gray-500"
      }`,
      downloadButton: `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
        isDarkTheme
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "bg-blue-600 hover:bg-blue-700 text-white"
      }`,
    },
  };

  const contactInfo = {
    email: "olufunbiibrahim@gmail.com",
    name: "Olufunbi IK",
  };

  // Download functionality
  const downloadAsText = () => {
    const content = generateTextContent();
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${
      type === "terms" ? "Terms-of-Service" : "Privacy-Policy"
    }-${contactInfo.name.replace(" ", "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printDocument = () => {
    const content = generatePrintContent();
    const printWindow = window.open("", "_blank");
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  const generateTextContent = () => {
    const isTerms = type === "terms";
    const title = isTerms ? "TERMS OF SERVICE" : "PRIVACY POLICY";
    const date = "September 2025";

    return `${title}
${contactInfo.name}
Last Updated: ${date}

${isTerms ? getTermsContent() : getPrivacyContent()}

CONTACT INFORMATION
If you have any questions about this ${title.toLowerCase()}, please contact:
Email: ${contactInfo.email}

© ${new Date().getFullYear()} ${contactInfo.name}. All rights reserved.`;
  };

  const generatePrintContent = () => {
    const isTerms = type === "terms";
    const title = isTerms ? "Terms of Service" : "Privacy Policy";
    const content = isTerms ? getTermsContentHTML() : getPrivacyContentHTML();

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${title} - ${contactInfo.name}</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
        h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
        h2 { color: #555; margin-top: 30px; }
        h3 { color: #666; }
        ul { margin-left: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .contact-box { background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>${title}</h1>
        <p><strong>${contactInfo.name}</strong></p>
        <p>Last Updated: September 2025</p>
      </div>
      ${content}
      <div class="contact-box">
        <h2>Contact Information</h2>
        <p>If you have any questions about this ${title.toLowerCase()}, please contact:</p>
        <p><strong>Email:</strong> ${contactInfo.email}</p>
      </div>
      <p><small>© ${new Date().getFullYear()} ${
      contactInfo.name
    }. All rights reserved.</small></p>
    </body>
    </html>`;
  };

  const getTermsContent = () => `
1. ACCEPTANCE OF TERMS
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

2. USE LICENSE
Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
• Modify or copy the materials
• Use the materials for any commercial purpose or for any public display
• Attempt to decompile or reverse engineer any software contained on the website
• Remove any copyright or other proprietary notations from the materials

3. PORTFOLIO CONTENT
The projects and work samples displayed on this website are for demonstration purposes. Some projects may be collaborative efforts or commissioned work. Specific licensing and usage rights for individual projects may vary and are available upon request.

4. USER COMMUNICATIONS
When you contact me through this website, you agree that:
• Your communications are not confidential or proprietary
• I am not obligated to keep your ideas or information confidential
• I may use your feedback to improve my services

5. DISCLAIMER
The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

6. LIMITATIONS
In no event shall ${contactInfo.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if authorized representative has been notified orally or in writing of the possibility of such damage.

7. GOVERNING LAW
These terms and conditions are governed by and construed in accordance with applicable laws, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the appropriate courts.`;

  const getPrivacyContent = () => `
1. INFORMATION WE COLLECT

Personal Information
When you contact me through this website, I may collect:
• Name and email address
• Company name and job title (if provided)
• Project details and requirements
• Any other information you voluntarily provide

Automatically Collected Information
I may automatically collect certain technical information when you visit my website:
• IP address and general location
• Browser type and version
• Device information
• Pages visited and time spent on site
• Referring website

2. HOW WE USE YOUR INFORMATION
I use the collected information for the following purposes:
• Responding to inquiries and providing customer support
• Discussing potential projects and collaborations
• Improving website functionality and user experience
• Analyzing website traffic and usage patterns
• Complying with legal obligations

3. INFORMATION SHARING
I do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
• With your explicit consent
• To comply with legal requirements or court orders
• To protect my rights, property, or safety
• With trusted service providers who assist in website operation (under strict confidentiality agreements)

4. DATA SECURITY
I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and I cannot guarantee absolute security.

5. COOKIES AND TRACKING
This website may use cookies and similar tracking technologies to enhance user experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities.

6. YOUR RIGHTS
You have the right to:
• Access your personal information
• Correct inaccurate data
• Request deletion of your data
• Object to data processing
• Data portability

To exercise these rights, please contact me using the information provided below.

7. THIRD-PARTY LINKS
This website may contain links to external sites. I am not responsible for the privacy practices or content of these third-party websites. Please review their privacy policies before providing any information.

8. UPDATES TO PRIVACY POLICY
I may update this privacy policy from time to time. Significant changes will be communicated through the website or via email if you have provided your contact information.`;

  const getTermsContentHTML = () => `
    <h2>1. Acceptance of Terms</h2>
    <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

    <h2>2. Use License</h2>
    <p>Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
    <ul>
      <li>Modify or copy the materials</li>
      <li>Use the materials for any commercial purpose or for any public display</li>
      <li>Attempt to decompile or reverse engineer any software contained on the website</li>
      <li>Remove any copyright or other proprietary notations from the materials</li>
    </ul>

    <h2>3. Portfolio Content</h2>
    <p>The projects and work samples displayed on this website are for demonstration purposes. Some projects may be collaborative efforts or commissioned work. Specific licensing and usage rights for individual projects may vary and are available upon request.</p>

    <h2>4. User Communications</h2>
    <p>When you contact me through this website, you agree that:</p>
    <ul>
      <li>Your communications are not confidential or proprietary</li>
      <li>I am not obligated to keep your ideas or information confidential</li>
      <li>I may use your feedback to improve my services</li>
    </ul>

    <h2>5. Disclaimer</h2>
    <p>The materials on this website are provided on an 'as is' basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

    <h2>6. Limitations</h2>
    <p>In no event shall ${contactInfo.name} or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if authorized representative has been notified orally or in writing of the possibility of such damage.</p>

    <h2>7. Governing Law</h2>
    <p>These terms and conditions are governed by and construed in accordance with applicable laws, and any disputes relating to these terms will be subject to the exclusive jurisdiction of the appropriate courts.</p>`;

  const getPrivacyContentHTML = () => `
    <h2>1. Information We Collect</h2>
    <h3>Personal Information</h3>
    <p>When you contact me through this website, I may collect:</p>
    <ul>
      <li>Name and email address</li>
      <li>Company name and job title (if provided)</li>
      <li>Project details and requirements</li>
      <li>Any other information you voluntarily provide</li>
    </ul>

    <h3>Automatically Collected Information</h3>
    <p>I may automatically collect certain technical information when you visit my website:</p>
    <ul>
      <li>IP address and general location</li>
      <li>Browser type and version</li>
      <li>Device information</li>
      <li>Pages visited and time spent on site</li>
      <li>Referring website</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>I use the collected information for the following purposes:</p>
    <ul>
      <li>Responding to inquiries and providing customer support</li>
      <li>Discussing potential projects and collaborations</li>
      <li>Improving website functionality and user experience</li>
      <li>Analyzing website traffic and usage patterns</li>
      <li>Complying with legal obligations</li>
    </ul>

    <h2>3. Information Sharing</h2>
    <p>I do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
    <ul>
      <li>With your explicit consent</li>
      <li>To comply with legal requirements or court orders</li>
      <li>To protect my rights, property, or safety</li>
      <li>With trusted service providers who assist in website operation (under strict confidentiality agreements)</li>
    </ul>

    <h2>4. Data Security</h2>
    <p>I implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and I cannot guarantee absolute security.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>This website may use cookies and similar tracking technologies to enhance user experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain website functionalities.</p>

    <h2>6. Your Rights</h2>
    <p>You have the right to:</p>
    <ul>
      <li>Access your personal information</li>
      <li>Correct inaccurate data</li>
      <li>Request deletion of your data</li>
      <li>Object to data processing</li>
      <li>Data portability</li>
    </ul>
    <p>To exercise these rights, please contact me using the information provided below.</p>

    <h2>7. Third-Party Links</h2>
    <p>This website may contain links to external sites. I am not responsible for the privacy practices or content of these third-party websites. Please review their privacy policies before providing any information.</p>

    <h2>8. Updates to Privacy Policy</h2>
    <p>I may update this privacy policy from time to time. Significant changes will be communicated through the website or via email if you have provided your contact information.</p>`;

  const isTerms = type === "terms";
  const icon = isTerms ? (
    <FileText className="w-5 h-5" />
  ) : (
    <Shield className="w-5 h-5" />
  );
  const title = isTerms ? "Terms of Service" : "Privacy Policy";

  const TermsContent = () => (
    <div className="space-y-6">
      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>1. Acceptance of Terms</h2>
        <p className={baseClasses.content.paragraph}>
          By accessing and using this website, you accept and agree to be bound
          by the terms and provision of this agreement. If you do not agree to
          abide by the above, please do not use this service.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>2. Use License</h2>
        <p className={baseClasses.content.paragraph}>
          Permission is granted to temporarily download one copy of the
          materials on this website for personal, non-commercial transitory
          viewing only. This is the grant of a license, not a transfer of title,
          and under this license you may not:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>modify or copy the materials</li>
          <li>
            use the materials for any commercial purpose or for any public
            display (commercial or non-commercial)
          </li>
          <li>
            attempt to decompile or reverse engineer any software contained on
            the website
          </li>
          <li>
            remove any copyright or other proprietary notations from the
            materials
          </li>
        </ul>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>3. Portfolio Content</h2>
        <p className={baseClasses.content.paragraph}>
          The projects and work samples displayed on this website are for
          demonstration purposes. Some projects may be collaborative efforts or
          commissioned work. Specific licensing and usage rights for individual
          projects may vary and are available upon request.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>4. User Communications</h2>
        <p className={baseClasses.content.paragraph}>
          When you contact me through this website, you agree that:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>Your communications are not confidential or proprietary</li>
          <li>
            I am not obligated to keep your ideas or information confidential
          </li>
          <li>I may use your feedback to improve my services</li>
        </ul>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>5. Disclaimer</h2>
        <p className={baseClasses.content.paragraph}>
          The materials on this website are provided on an 'as is' basis. I make
          no warranties, expressed or implied, and hereby disclaim and negate
          all other warranties including without limitation, implied warranties
          or conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>6. Limitations</h2>
        <p className={baseClasses.content.paragraph}>
          In no event shall {contactInfo.name} or its suppliers be liable for
          any damages (including, without limitation, damages for loss of data
          or profit, or due to business interruption) arising out of the use or
          inability to use the materials on this website, even if authorized
          representative has been notified orally or in writing of the
          possibility of such damage.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>7. Governing Law</h2>
        <p className={baseClasses.content.paragraph}>
          These terms and conditions are governed by and construed in accordance
          with applicable laws, and any disputes relating to these terms will be
          subject to the exclusive jurisdiction of the appropriate courts.
        </p>
      </section>
    </div>
  );

  const PrivacyContent = () => (
    <div className="space-y-6">
      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>
          1. Information We Collect
        </h2>
        <h3 className={baseClasses.content.subheading}>Personal Information</h3>
        <p className={baseClasses.content.paragraph}>
          When you contact me through this website, I may collect:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>Name and email address</li>
          <li>Company name and job title (if provided)</li>
          <li>Project details and requirements</li>
          <li>Any other information you voluntarily provide</li>
        </ul>

        <h3 className={baseClasses.content.subheading}>
          Automatically Collected Information
        </h3>
        <p className={baseClasses.content.paragraph}>
          I may automatically collect certain technical information when you
          visit my website:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>IP address and general location</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Pages visited and time spent on site</li>
          <li>Referring website</li>
        </ul>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>
          2. How We Use Your Information
        </h2>
        <p className={baseClasses.content.paragraph}>
          I use the collected information for the following purposes:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>Responding to inquiries and providing customer support</li>
          <li>Discussing potential projects and collaborations</li>
          <li>Improving website functionality and user experience</li>
          <li>Analyzing website traffic and usage patterns</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>3. Information Sharing</h2>
        <p className={baseClasses.content.paragraph}>
          I do not sell, trade, or otherwise transfer your personal information
          to third parties except in the following circumstances:
        </p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>With your explicit consent</li>
          <li>To comply with legal requirements or court orders</li>
          <li>To protect my rights, property, or safety</li>
          <li>
            With trusted service providers who assist in website operation
            (under strict confidentiality agreements)
          </li>
        </ul>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>4. Data Security</h2>
        <p className={baseClasses.content.paragraph}>
          I implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction. However, no method of transmission over the internet or
          electronic storage is 100% secure, and I cannot guarantee absolute
          security.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>5. Cookies and Tracking</h2>
        <p className={baseClasses.content.paragraph}>
          This website may use cookies and similar tracking technologies to
          enhance user experience. You can control cookie preferences through
          your browser settings. Disabling cookies may affect certain website
          functionalities.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>6. Your Rights</h2>
        <p className={baseClasses.content.paragraph}>You have the right to:</p>
        <ul className={`${baseClasses.content.list} list-disc`}>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>
        <p className={baseClasses.content.paragraph}>
          To exercise these rights, please contact me using the information
          provided below.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>7. Third-Party Links</h2>
        <p className={baseClasses.content.paragraph}>
          This website may contain links to external sites. I am not responsible
          for the privacy practices or content of these third-party websites.
          Please review their privacy policies before providing any information.
        </p>
      </section>

      <section className={baseClasses.content.section}>
        <h2 className={baseClasses.content.heading}>
          8. Updates to Privacy Policy
        </h2>
        <p className={baseClasses.content.paragraph}>
          I may update this privacy policy from time to time. Significant
          changes will be communicated through the website or via email if you
          have provided your contact information.
        </p>
      </section>
    </div>
  );

  return (
    <div className={baseClasses.overlay} onClick={onClose}>
      <div className={baseClasses.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={baseClasses.header.wrapper}>
          <div className={baseClasses.header.left}>
            {icon}
            <div>
              <h2 className={baseClasses.header.title}>{title}</h2>
              <p className={baseClasses.header.subtitle}>
                {isTerms
                  ? "Please read carefully before using this website"
                  : "Learn how I protect your information"}
              </p>
            </div>
          </div>

          <div className={baseClasses.header.actions}>
            <button
              onClick={printDocument}
              className={baseClasses.header.button}
              title="Print"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={downloadAsText}
              className={baseClasses.header.button}
              title="Download as text file"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className={baseClasses.header.closeButton}
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className={baseClasses.content.wrapper}>
          <div className="space-y-6">
            {isTerms ? <TermsContent /> : <PrivacyContent />}

            {/* Contact Section */}
            <div className={baseClasses.content.contact}>
              <h2 className={baseClasses.content.heading}>
                Contact Information
              </h2>
              <p className={baseClasses.content.paragraph}>
                If you have any questions about this {title.toLowerCase()},
                please contact me:
              </p>
              <a
                href={`mailto:${contactInfo.email}`}
                className={`inline-flex items-center gap-2 ${baseClasses.content.emphasis} hover:underline`}
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={baseClasses.footer.wrapper}>
          <div className={baseClasses.footer.lastUpdated}>
            <Calendar className="w-3 h-3" />
            <span>Last updated: September 2025</span>
          </div>

          <button
            onClick={downloadAsText}
            className={baseClasses.footer.downloadButton}
          >
            <Download className="w-4 h-4" />
            Download {title}
          </button>
        </div>
      </div>
    </div>
  );
}
