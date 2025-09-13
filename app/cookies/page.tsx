import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Sparkles } from "lucide-react"

export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-6 w-6 text-primary" />
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>What are Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used by website owners to make their websites work, or work more efficiently, as well as to 
              provide reporting information.
            </p>
            <p>
              Cookies set by the website owner (in this case, PixelArt Converter) are called "first-party cookies". 
              Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies 
              enable third-party features or functionality to be provided on or through the website (e.g., advertising, 
              interactive content, and analytics). The parties that set these third-party cookies can recognize your 
              computer both when it visits the website in question and also when it visits certain other websites.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why do we use Cookies?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use first-party and third-party cookies for several reasons. Some cookies are required for technical 
              reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" 
              cookies. Other cookies also enable us to track and target the interests of our users to enhance the 
              experience on our online properties.
            </p>
            <p>
              Third parties serve cookies through our website for advertising, analytics, and other purposes. This is 
              described in more detail below.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Types of Cookies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Essential Cookies</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  These cookies are strictly necessary to provide you with services available through our website and 
                  to use some of its features, such as access to secure areas.
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li>Remember your cookie preference settings</li>
                  <li>Maintain session state across page requests</li>
                  <li>Enable security features</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Performance and Analytics Cookies</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  These cookies collect information about how you use our website, which pages you visit, and how 
                  long you spend on each page. This helps us understand how visitors interact with our site and 
                  allows us to improve its performance.
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  We use the following analytics services:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                  <li><strong>Google Analytics:</strong> Collects anonymous data about website usage and traffic patterns</li>
                  <li><strong>Plausible Analytics:</strong> Privacy-focused analytics that respects visitor privacy</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold mb-2">Functionality Cookies</h3>
                <p className="text-sm text-muted-foreground">
                  These cookies allow our website to remember choices you make and provide enhanced, more personal 
                  features. For example, these cookies may remember your language preference or region selection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Analytics Data</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              We use Google Analytics and Plausible Analytics to collect and analyze anonymous usage data. This data helps us:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Understand how visitors navigate and use our website</li>
              <li>Identify popular features and areas for improvement</li>
              <li>Track the effectiveness of our marketing efforts</li>
              <li>Optimize website performance and user experience</li>
            </ul>
            <p>
              Both Google Analytics and Plausible Analytics use cookies to collect this data. You can opt out of 
              analytics tracking by adjusting your browser settings or using browser extensions that block tracking cookies.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Cookie Choices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences 
              by clicking on the appropriate settings link on our website or by setting your browser preferences as 
              described below.
            </p>
            
            <h3 className="font-semibold">Browser Settings</h3>
            <p className="text-sm text-muted-foreground">
              Most web browsers allow you to control cookies through their settings preferences. However, if you choose 
              to disable cookies, it may limit your use of certain features or functions on our website or prevent it 
              from functioning properly.
            </p>
            
            <h3 className="font-semibold">Opt-Out of Analytics</h3>
            <p className="text-sm text-muted-foreground">
              To opt out of Google Analytics tracking across all websites, you can install the 
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {" "}Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
            <p className="text-sm text-muted-foreground">
              For Plausible Analytics, you can use their 
              <a href="https://plausible.io/cookieless-tracking" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                {" "}cookieless tracking
              </a> option or block their cookies through your browser settings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Cookies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics, 
              deliver advertisements on and through our website, and so on.
            </p>
            <p>
              Here are some third-party services we may use and their privacy policies:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>
                <strong>Google Analytics:</strong> 
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {" "}Privacy Policy
                </a>
              </li>
              <li>
                <strong>Plausible Analytics:</strong> 
                <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {" "}Privacy Policy
                </a>
              </li>
              <li>
                <strong>Vercel Analytics:</strong> 
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {" "}Privacy Policy
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Cookie Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the 
              cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this 
              Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              If you have any questions about this Cookie Policy, please contact us through our website's contact form.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}