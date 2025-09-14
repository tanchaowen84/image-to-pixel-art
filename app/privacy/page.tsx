import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles, Shield, Eye, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Image to Pixel Art Converter",
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    type: 'article',
    title: "Privacy Policy - Image to Pixel Art Converter",
    description: "Read our privacy policy to understand how we protect your data. All image processing happens locally in your browser.",
    url: '/privacy',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Image to Pixel Art Converter - Transform photos into retro pixel art',
        type: 'image/png',
      },
    ],
  },
}

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Privacy Policy</h1>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At PixelArt Converter, we are committed to protecting your privacy. This Privacy Policy explains how 
              we collect, use, disclose, and safeguard your information when you visit our website 
              (https://pixelartconverter.com) and use our services. Please read this privacy policy carefully. 
              If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p className="mt-3">
              We collect information that you provide directly to us, information that is collected automatically 
              when you use our site, and information from third parties. This policy applies to all information 
              collected through our website and services.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Personal Information You Provide to Us</h3>
                <p className="text-sm text-muted-foreground">
                  We do not require you to create an account or provide personal information to use our core service. 
                  However, we may collect information you voluntarily provide:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li><strong>Contact Information:</strong> If you choose to contact us via our contact form</li>
                  <li><strong>Usage Information:</strong> How you interact with our tools and features</li>
                  <li><strong>Image Data:</strong> Images you upload for conversion (processed locally in your browser)</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Information Collected Automatically</h3>
                <p className="text-sm text-muted-foreground">
                  When you access our site, we automatically collect certain information using cookies and other 
                  tracking technologies:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, features used</li>
                  <li><strong>Technical Data:</strong> IP address (anonymized), browser version, referring URLs</li>
                  <li><strong>Cookies:</strong> Small text files stored on your device for functionality and analytics</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Information from Third Parties</h3>
                <p className="text-sm text-muted-foreground">
                  We may receive information about you from third parties, such as analytics providers and 
                  advertising partners, who collect data on our behalf in accordance with their privacy policies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Service Provision</h3>
                <p className="text-sm text-muted-foreground">
                  We use your information to provide, maintain, and improve our services:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li>Process your images to create pixel art conversions</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our website and user experience</li>
                  <li>Develop new features and services</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Analytics and Performance</h3>
                <p className="text-sm text-muted-foreground">
                  We use analytics services to understand how users interact with our site:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 mt-2">
                  <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
                  <li><strong>Plausible Analytics:</strong> Privacy-focused analytics that respects user privacy</li>
                  <li><strong>Vercel Analytics:</strong> To monitor website performance and reliability</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Security and Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  We use information to maintain the security and integrity of our services and comply with 
                  applicable laws and regulations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Image Processing and Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We understand that images can contain sensitive personal information. That's why we've designed our 
              image processing to be privacy-first:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Local Processing:</strong> All image processing happens in your browser - your images never leave your device</li>
              <li><strong>No Server Upload:</strong> We do not upload your images to our servers for processing</li>
              <li><strong>No Storage:</strong> We do not store your original images or processed results</li>
              <li><strong>Temporary Processing:</strong> Images are only held in memory during the conversion process</li>
            </ul>
            <p className="mt-3">
              The only image-related data that might be collected is through our analytics tools, which may record 
              that you used the image conversion feature, but not the content of your images.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We do not sell, rent, or trade your personal information. We may share information only in the 
              following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li><strong>With Service Providers:</strong> Third-party companies who perform services on our behalf (e.g., analytics, hosting)</li>
              <li><strong>For Legal Reasons:</strong> When required by law, regulation, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit permission to share</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>SSL/TLS encryption for all data transmitted between your browser and our servers</li>
              <li>Secure server infrastructure with regular security audits</li>
              <li>Access controls limiting employee access to personal data</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Employee training on data privacy and security best practices</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. 
              While we strive to use commercially acceptable means to protect your personal information, we cannot 
              guarantee its absolute security.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our website may contain links to third-party websites and services. We are not responsible for the 
              privacy practices of these third parties. We encourage you to review the privacy policies of any 
              third-party services you visit.
            </p>
            <p className="mt-3">
              The following third-party services may be used on our website:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>
                <strong>Google Analytics:</strong> Collects anonymous usage data. 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="View Google Privacy Policy">
                  {" "}Privacy Policy
                </a>
              </li>
              <li>
                <strong>Plausible Analytics:</strong> Privacy-focused analytics. 
                <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="View Plausible Privacy Policy">
                  {" "}Privacy Policy
                </a>
              </li>
              <li>
                <strong>Vercel Analytics:</strong> Website performance monitoring. 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" title="View Vercel Privacy Policy">
                  {" "}Privacy Policy
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our service is not intended for children under the age of 13. We do not knowingly collect personal 
              information from children under 13. If you are a parent or guardian and you are aware that your 
              child has provided us with personal information, please contact us. If we become aware that we have 
              collected personal information from children without verification of parental consent, we will take 
              steps to remove that information from our servers.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Depending on your jurisdiction, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your personal information to another service</li>
              <li><strong>Opt-out:</strong> Opt out of marketing communications and certain data processing</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us. We will respond to your request within 30 days in 
              accordance with applicable laws.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>International Data Transfers</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our website is hosted in the United States and may be accessed by users worldwide. If you are located 
              in the European Economic Area (EEA) or United Kingdom, your information may be transferred to and 
              processed in the United States. We ensure that such transfers comply with applicable data protection 
              laws by implementing appropriate safeguards.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our site. For detailed 
              information about the cookies we use and your choices regarding cookies, please refer to our 
              <a href="/cookies" className="text-primary hover:underline" title="Read our Cookie Policy">Cookie Policy</a>.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for 
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting 
              the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="mt-3">
              We encourage you to review this Privacy Policy periodically for any changes. Changes to this Privacy 
              Policy are effective when they are posted on this page.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our website's contact form. 
              We will respond to your inquiry as soon as possible.
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              Last Updated: January 1, 2025
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}