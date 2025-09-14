import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Use - Image to Pixel Art Converter",
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    type: 'article',
    title: "Terms of Use - Image to Pixel Art Converter",
    description: "Read our terms of use to understand the terms and conditions for using our free image to pixel art converter tool.",
    url: '/terms',
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

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Terms of Use</h1>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Acceptance of Terms</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to PixelArt Converter. These Terms of Use constitute a legally binding agreement made between 
              you, whether personally or on behalf of an entity ("you"), and PixelArt Converter ("we," "us," or "our"), 
              concerning your access to and use of the https://pixelartconverter.com website as well as any other 
              media form, media channel, mobile website or mobile application related, linked, or otherwise connected 
              thereto (collectively, the "Site").
            </p>
            <p className="mt-3">
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these 
              Terms of Use. If you do not agree with all of these Terms of Use, then you are expressly prohibited from 
              using the Site and you must discontinue use immediately.
            </p>
            <p className="mt-3">
              Supplemental terms and conditions or documents that may be posted on the Site from time to time are 
              hereby expressly incorporated herein by reference. We reserve the right, in our sole and absolute 
              discretion, to make changes, modifications, additions, deletions, and/or replacements to these Terms of 
              Use at any time and without prior notice. It is your responsibility to check these Terms of Use 
              periodically for changes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the Site 
              (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the 
              "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark 
              laws and various other intellectual property rights and unfair competition laws of the United States, 
              foreign jurisdictions, and international conventions.
            </p>
            <p>
              The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. 
              Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be 
              copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, 
              transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, 
              without our express prior written permission.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Representations</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>You have the legal capacity and you agree to comply with these Terms of Use</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
              <li>Your use of the Site will not violate any applicable law or regulation</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Products and Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              PixelArt Converter provides a web-based tool that allows users to convert images into pixel art format. 
              The service is provided free of charge for personal use.
            </p>
            <p>
              We reserve the right, but are not obligated, to limit the sales of our products or services to any person, 
              geographic region, or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the 
              right to limit the quantities of any products or services that we offer. All descriptions of products 
              or product pricing are subject to change at any time without notice, at the sole discretion of us.
            </p>
            <p>
              We reserve the right to discontinue any products or services at any time for any reason. Offers for any 
              products or services made on this Site are void where prohibited.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User-Generated Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Our Site allows you to submit, upload, or otherwise make available content, including but not limited 
              to images ("User-Generated Content"). You retain all rights to your User-Generated Content.
            </p>
            <p>
              By uploading or submitting User-Generated Content to our Site, you grant us a worldwide, non-exclusive, 
              royalty-free license to use, reproduce, modify, adapt, publish, and display such content solely for the 
              purpose of providing our services to you. This license includes the right to process your images to 
              create pixel art versions.
            </p>
            <p>
              You are solely responsible for your User-Generated Content and the consequences of posting, uploading, 
              publishing, or making it available on the Site. You represent and warrant that:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>You own or have the necessary licenses, rights, consents, and permissions to use and to authorize us to use your User-Generated Content</li>
              <li>Your User-Generated Content does not infringe or misappropriate the intellectual property rights of any third party</li>
              <li>Your User-Generated Content does not violate any applicable law or regulation</li>
              <li>Your User-Generated Content does not contain any material that could constitute or encourage conduct that would be considered a criminal offense</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prohibited Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You may not access or use the Site for any purpose other than that for which we make the Site available. 
              The Site may not be used in connection with any commercial endeavors except those that are specifically 
              endorsed or approved by us.
            </p>
            <p className="mt-3">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us</li>
              <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means</li>
              <li>Use the Site to advertise or offer to sell goods and services</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site</li>
              <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Site</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Site Management</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We reserve the right, but not the obligation, to:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3">
              <li>Monitor the Site for violations of these Terms of Use</li>
              <li>Take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use</li>
              <li>In our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your contributions or any portion thereof</li>
              <li>Otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Term and Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY 
              OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT 
              NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), 
              TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY 
              REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR 
              REGULATION.
            </p>
            <p className="mt-3">
              We may terminate your use or participation in the Site or delete any content or information that you 
              posted at any time, without warning, in our sole discretion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Governing Law</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These Terms of Use and your use of the Site are governed by and construed in accordance with the laws 
              of the State of California applicable to agreements made and to be entirely performed within the State 
              of California, without regard to its conflict of law principles.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Any legal action of whatever nature brought by either you or us (collectively, the "Parties" and 
              individually, a "Party") shall be commenced or prosecuted in the state and federal courts located in 
              San Francisco County, California, and the Parties hereby consent to, and waive all defenses of lack 
              of personal jurisdiction and forum non conveniens with respect to venue and jurisdiction in such state 
              and federal courts.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR 
              SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, 
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, 
              THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-3">
              WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE'S CONTENT OR 
              THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR 
              ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR 
              ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING 
              LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF 
              WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Indemnification</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all 
              of our respective officers, agents, partners, and employees, from and against any loss, damage, 
              liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third 
              party due to or arising out of: (a) your User-Generated Content; (b) use of the Site; (c) breach 
              of these Terms of Use; or (d) your violation of the rights of a third party, including but not 
              limited to intellectual property rights.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Miscellaneous</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              These Terms of Use and any policies or operating rules posted by us on the Site constitute the entire 
              agreement and understanding between you and us. Our failure to exercise or enforce any right or provision 
              of these Terms of Use shall not operate as a waiver of such right or provision.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding the 
              use of the Site, please contact us through our website's contact form.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              This document was last updated on January 1, 2025.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}