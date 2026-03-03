"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { toast } from "sonner";

export default function BrandColorPage() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo variant="horizontal" width={400} />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">Charoen</h1>
          <p className="text-lg text-gray-600">
            Brand Color System
          </p>
        </div>

        {/* Logo Showcase */}
        <section className="mb-12 bg-charoen-gray p-8 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-black text-center">Logo Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg border border-gray-200">
              <Logo variant="icon" width={120} />
              <div className="text-center">
                <p className="font-semibold text-black">Icon Logo</p>
                <p className="text-sm text-gray-600">Use for favicon, app icons</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg border border-gray-200">
              <Logo variant="vertical" width={150} />
              <div className="text-center">
                <p className="font-semibold text-black">Vertical Logo</p>
                <p className="text-sm text-gray-600">Use for mobile, square spaces</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg border border-gray-200">
              <Logo variant="horizontal" width={280} />
              <div className="text-center">
                <p className="font-semibold text-black">Horizontal Logo</p>
                <p className="text-sm text-gray-600">Use for headers, banners</p>
              </div>
            </div>
          </div>

          {/* Logo on different backgrounds */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-black text-center">Logo on Different Backgrounds</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-lg border border-gray-200 flex flex-col items-center">
                <Logo variant="horizontal" width={300} />
                <p className="text-sm text-gray-600 mt-4">On White Background</p>
              </div>
              <div className="bg-charoen-primary p-8 rounded-lg flex flex-col items-center">
                <Logo variant="horizontal-white" width={300} />
                <p className="text-sm text-white mt-4">On Primary Green Background</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Colors with Translations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary */}
            <div className="space-y-3">
              <div className="bg-charoen-primary h-32 rounded-lg shadow-lg"></div>
              <div>
                <p className="font-semibold text-black">Charoen Primary</p>
                <p className="text-sm text-gray-600 mb-3">#2D8C3C</p>

                <div className="text-xs space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">English:</p>
                    <p className="text-gray-600">Main brand color for primary actions and key elements that demand attention.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">日本語:</p>
                    <p className="text-gray-600">主要なアクションと注目を集める重要な要素のためのメインブランドカラー。</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">ไทย:</p>
                    <p className="text-gray-600">สีหลักของแบรนด์สำหรับการกระทำหลักและองค์ประกอบสำคัญที่ต้องการความสนใจ</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className="font-semibold text-gray-700 mb-1">When to use:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Primary buttons & CTAs</li>
                      <li>Main navigation elements</li>
                      <li>Brand headers</li>
                      <li>Important highlights</li>
                      <li>Logo primary color</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary */}
            <div className="space-y-3">
              <div className="bg-charoen-secondary h-32 rounded-lg shadow-lg"></div>
              <div>
                <p className="font-semibold text-black">Charoen Secondary</p>
                <p className="text-sm text-gray-600 mb-3">#82BE28</p>

                <div className="text-xs space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">English:</p>
                    <p className="text-gray-600">Lighter, energetic green for secondary actions and positive feedback.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">日本語:</p>
                    <p className="text-gray-600">セカンダリーアクションとポジティブなフィードバックのための明るく活気のある緑。</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">ไทย:</p>
                    <p className="text-gray-600">สีเขียวอ่อนที่มีพลังสำหรับการกระทำรองและข้อเสนอแนะเชิงบวก</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className="font-semibold text-gray-700 mb-1">When to use:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Secondary buttons</li>
                      <li>Hover states</li>
                      <li>Success messages</li>
                      <li>Active states</li>
                      <li>Complementary elements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent */}
            <div className="space-y-3">
              <div className="bg-charoen-accent h-32 rounded-lg shadow-lg"></div>
              <div>
                <p className="font-semibold text-black">Charoen Accent</p>
                <p className="text-sm text-gray-600 mb-3">#5FAF4A</p>

                <div className="text-xs space-y-3">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">English:</p>
                    <p className="text-gray-600">Medium green for accents, interactive elements, and visual interest.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">日本語:</p>
                    <p className="text-gray-600">アクセント、インタラクティブ要素、視覚的興味のための中程度の緑。</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">ไทย:</p>
                    <p className="text-gray-600">สีเขียวกลางสำหรับการเน้น องค์ประกอบที่โต้ตอบได้ และความน่าสนใจทางสายตา</p>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className="font-semibold text-gray-700 mb-1">When to use:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      <li>Links & interactive text</li>
                      <li>Icons & badges</li>
                      <li>Decorative accents</li>
                      <li>Focus indicators</li>
                      <li>Subtle highlights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Component Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">Component Showcase</h2>
          <p className="text-gray-600 mb-8">
            See how each brand color works across different shadcn components.
          </p>

          <Tabs defaultValue="buttons" className="w-full">
            <TabsList>
              <TabsTrigger value="buttons">Buttons</TabsTrigger>
              <TabsTrigger value="toast">Toast Messages</TabsTrigger>
              <TabsTrigger value="tabs">Tabs</TabsTrigger>
              <TabsTrigger value="breadcrumbs">Breadcrumbs</TabsTrigger>
              <TabsTrigger value="radio">Radio Groups</TabsTrigger>
              <TabsTrigger value="links">Links</TabsTrigger>
            </TabsList>

            {/* Buttons Tab */}
            <TabsContent value="buttons" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Primary Color (#2D8C3C)</h3>
                <p className="text-sm text-gray-600 mb-4">Default brand buttons with shadow and scale effects on hover</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="shadow-lg hover:shadow-xl transition-all hover:scale-105">Default Primary</Button>
                  <Button size="sm" className="shadow-lg hover:shadow-xl transition-all hover:scale-105">Small</Button>
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-all hover:scale-105">Large</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-secondary">Secondary Color (#82BE28)</h3>
                <p className="text-sm text-gray-600 mb-4">Secondary style buttons</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" className="shadow-md hover:shadow-lg transition-all hover:scale-105">Secondary</Button>
                  <Button variant="secondary" size="sm" className="shadow-md hover:shadow-lg transition-all hover:scale-105">Small</Button>
                  <Button variant="secondary" size="lg" className="shadow-md hover:shadow-lg transition-all hover:scale-105">Large</Button>
                  <Button variant="secondary" disabled>Disabled</Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-accent">Accent Color (#5FAF4A)</h3>
                <p className="text-sm text-gray-600 mb-4">Custom accent buttons with hover effects</p>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-charoen-accent hover:bg-charoen-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105">Accent Button</Button>
                  <Button className="bg-charoen-accent hover:bg-charoen-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105" size="sm">Small</Button>
                  <Button className="bg-charoen-accent hover:bg-charoen-accent/90 shadow-lg hover:shadow-xl transition-all hover:scale-105" size="lg">Large</Button>
                  <Button className="bg-charoen-accent hover:bg-charoen-accent/90" disabled>Disabled</Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-black">Outline Variant</h3>
                <p className="text-sm text-gray-600 mb-4">Outlined buttons with border and scale effects</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-2 border-charoen-primary text-charoen-primary hover:bg-charoen-primary hover:text-white transition-all hover:scale-105">Outline Default</Button>
                  <Button variant="outline" size="lg" className="border-2 border-charoen-primary text-charoen-primary hover:bg-charoen-primary hover:text-white transition-all hover:scale-105">Outline Large</Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-black">White on Green Background</h3>
                <p className="text-sm text-gray-600 mb-4">Used in CTA sections with colored backgrounds</p>
                <div className="bg-charoen-primary p-6 rounded-lg">
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-white text-charoen-primary hover:bg-charoen-secondary hover:text-white border-2 border-white transition-all shadow-xl hover:shadow-2xl hover:scale-105">White Button</Button>
                    <Button size="lg" className="bg-white text-charoen-primary hover:bg-charoen-secondary hover:text-white border-2 border-white transition-all shadow-xl hover:shadow-2xl hover:scale-105">Large White</Button>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-black">Other Variants</h3>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="ghost" className="hover:scale-105 transition-all">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive" className="hover:scale-105 transition-all">Destructive</Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Toast Messages Tab */}
            <TabsContent value="toast" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Success Toasts (Primary Color)</h3>
                <p className="text-sm text-gray-600 mb-4">Use primary color for successful actions and confirmations.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => toast.success("Operation completed successfully!", {
                      description: "Your changes have been saved.",
                    })}
                  >
                    Show Success Toast
                  </Button>
                  <Button
                    onClick={() => toast.success("Item added to cart")}
                  >
                    Simple Success
                  </Button>
                  <Button
                    onClick={() => toast.success("Profile updated", {
                      description: "Your profile information has been updated successfully.",
                      action: {
                        label: "View",
                        onClick: () => console.log("View clicked"),
                      },
                    })}
                  >
                    With Action Button
                  </Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-red-600">Error Toasts</h3>
                <p className="text-sm text-gray-600 mb-4">Display error messages when operations fail.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="destructive"
                    onClick={() => toast.error("Failed to save changes", {
                      description: "Please try again or contact support.",
                    })}
                  >
                    Show Error Toast
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => toast.error("Network error")}
                  >
                    Simple Error
                  </Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-yellow-600">Warning Toasts</h3>
                <p className="text-sm text-gray-600 mb-4">Show warnings or important notices.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => toast.warning("Low storage space", {
                      description: "You have less than 10% storage remaining.",
                    })}
                  >
                    Show Warning Toast
                  </Button>
                  <Button
                    className="bg-yellow-500 hover:bg-yellow-600"
                    onClick={() => toast.warning("Session expiring soon")}
                  >
                    Simple Warning
                  </Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">Info Toasts</h3>
                <p className="text-sm text-gray-600 mb-4">Provide informational messages.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    onClick={() => toast.info("New feature available", {
                      description: "Check out our new dashboard redesign!",
                    })}
                  >
                    Show Info Toast
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast.info("Maintenance scheduled for tonight")}
                  >
                    Simple Info
                  </Button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-secondary">Loading Toasts</h3>
                <p className="text-sm text-gray-600 mb-4">Show loading state for async operations.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="secondary"
                    onClick={() => {
                      const id = toast.loading("Processing your request...");
                      setTimeout(() => {
                        toast.success("Request completed!", { id });
                      }, 2000);
                    }}
                  >
                    Show Loading Toast
                  </Button>
                </div>
              </div>

              <div className="bg-charoen-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-accent">Custom Styled Toasts</h3>
                <p className="text-sm text-gray-600 mb-4">Use brand colors for custom toast messages.</p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => toast("Welcome to Charoen!", {
                      description: "Explore our brand color system.",
                      duration: 5000,
                    })}
                  >
                    Default Toast
                  </Button>
                  <Button
                    className="bg-charoen-accent hover:bg-charoen-accent/90"
                    onClick={() => toast.success("Action completed", {
                      description: "Using Charoen brand colors",
                      duration: 3000,
                    })}
                  >
                    Accent Color Toast
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => toast("New notification", {
                      description: "You have 3 unread messages",
                      action: {
                        label: "View All",
                        onClick: () => console.log("View all clicked"),
                      },
                    })}
                  >
                    With Action
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      toast.promise(
                        new Promise((resolve) => setTimeout(resolve, 2000)),
                        {
                          loading: "Uploading file...",
                          success: "File uploaded successfully!",
                          error: "Failed to upload file",
                        }
                      );
                    }}
                  >
                    Promise Toast
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Tabs Tab */}
            <TabsContent value="tabs" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Default Tabs Style</h3>
                <Tabs defaultValue="tab1" className="w-full">
                  <TabsList>
                    <TabsTrigger value="tab1">Account</TabsTrigger>
                    <TabsTrigger value="tab2">Settings</TabsTrigger>
                    <TabsTrigger value="tab3">Profile</TabsTrigger>
                  </TabsList>
                  <TabsContent value="tab1" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">Account content goes here.</p>
                  </TabsContent>
                  <TabsContent value="tab2" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">Settings content goes here.</p>
                  </TabsContent>
                  <TabsContent value="tab3" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">Profile content goes here.</p>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Line Variant</h3>
                <Tabs defaultValue="home" className="w-full">
                  <TabsList variant="line">
                    <TabsTrigger value="home">Home</TabsTrigger>
                    <TabsTrigger value="products">Products</TabsTrigger>
                    <TabsTrigger value="about">About</TabsTrigger>
                  </TabsList>
                  <TabsContent value="home" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">Home content with line variant tabs.</p>
                  </TabsContent>
                  <TabsContent value="products" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">Products content.</p>
                  </TabsContent>
                  <TabsContent value="about" className="p-4 bg-charoen-gray rounded-lg mt-2">
                    <p className="text-gray-700">About content.</p>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            {/* Breadcrumbs Tab */}
            <TabsContent value="breadcrumbs" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Default Breadcrumb</h3>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Current Page</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-secondary">Primary Color Links</h3>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="text-charoen-primary hover:text-charoen-primary/80">
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/settings" className="text-charoen-primary hover:text-charoen-primary/80">
                        Settings
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Profile</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-accent">Accent Color Links</h3>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/" className="text-charoen-accent hover:text-charoen-accent/80">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs" className="text-charoen-accent hover:text-charoen-accent/80">
                        Documentation
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Components</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </TabsContent>

            {/* Radio Groups Tab */}
            <TabsContent value="radio" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Payment Method Selection</h3>
                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <label htmlFor="card" className="text-sm font-medium cursor-pointer">
                      Credit Card
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <label htmlFor="paypal" className="text-sm font-medium cursor-pointer">
                      PayPal
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank" id="bank" />
                    <label htmlFor="bank" className="text-sm font-medium cursor-pointer">
                      Bank Transfer
                    </label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-secondary">Delivery Options</h3>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <label htmlFor="standard" className="text-sm font-medium cursor-pointer">
                      Standard Delivery (3-5 days)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="express" id="express" />
                    <label htmlFor="express" className="text-sm font-medium cursor-pointer">
                      Express Delivery (1-2 days)
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="overnight" id="overnight" />
                    <label htmlFor="overnight" className="text-sm font-medium cursor-pointer">
                      Overnight Delivery
                    </label>
                  </div>
                </RadioGroup>
              </div>

              <div className="bg-charoen-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-accent">Subscription Plan</h3>
                <RadioGroup defaultValue="pro">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <label htmlFor="free" className="text-sm font-medium cursor-pointer">
                      Free Plan - $0/month
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro" />
                    <label htmlFor="pro" className="text-sm font-medium cursor-pointer">
                      Pro Plan - $19/month
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise" />
                    <label htmlFor="enterprise" className="text-sm font-medium cursor-pointer">
                      Enterprise Plan - $99/month
                    </label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            {/* Links Tab */}
            <TabsContent value="links" className="space-y-8 mt-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-primary">Primary Color Links</h3>
                <div className="space-y-3">
                  <p>
                    <a href="#" className="text-charoen-primary hover:text-charoen-primary/80 underline font-medium">
                      Learn more about our services
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-charoen-primary hover:text-charoen-primary/80 font-medium">
                      Contact support (no underline)
                    </a>
                  </p>
                  <p>
                    Check out our{" "}
                    <a href="#" className="text-charoen-primary hover:text-charoen-primary/80 underline font-medium">
                      documentation
                    </a>{" "}
                    for more details.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-secondary">Secondary Color Links</h3>
                <div className="space-y-3">
                  <p>
                    <a href="#" className="text-charoen-secondary hover:text-charoen-secondary/80 underline font-medium">
                      View success stories
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-charoen-secondary hover:text-charoen-secondary/80 font-medium">
                      Customer testimonials
                    </a>
                  </p>
                  <p>
                    Read our{" "}
                    <a href="#" className="text-charoen-secondary hover:text-charoen-secondary/80 underline font-medium">
                      latest updates
                    </a>{" "}
                    and announcements.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-charoen-accent">Accent Color Links</h3>
                <div className="space-y-3">
                  <p>
                    <a href="#" className="text-charoen-accent hover:text-charoen-accent/80 underline font-medium">
                      Explore features
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-charoen-accent hover:text-charoen-accent/80 font-medium">
                      Browse gallery
                    </a>
                  </p>
                  <p>
                    Visit our{" "}
                    <a href="#" className="text-charoen-accent hover:text-charoen-accent/80 underline font-medium">
                      blog
                    </a>{" "}
                    for tips and tricks.
                  </p>
                </div>
              </div>

              <div className="bg-charoen-gray p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-black">Button Links (Using Button Component)</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="link" className="text-charoen-primary">Primary Link Button</Button>
                  <Button variant="link" className="text-charoen-secondary">Secondary Link Button</Button>
                  <Button variant="link" className="text-charoen-accent">Accent Link Button</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Utility Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">Utility Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-3">
              <div className="bg-charoen-yellow h-24 rounded-lg shadow-lg"></div>
              <div>
                <p className="font-semibold text-black">Yellow</p>
                <p className="text-sm text-gray-600">#F5E100</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-charoen-black h-24 rounded-lg shadow-lg border border-gray-200"></div>
              <div>
                <p className="font-semibold text-black">Black</p>
                <p className="text-sm text-gray-600">#000000</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-charoen-white h-24 rounded-lg shadow-lg border border-gray-200"></div>
              <div>
                <p className="font-semibold text-black">White</p>
                <p className="text-sm text-gray-600">#FFFFFF</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-charoen-gray h-24 rounded-lg shadow-lg border border-gray-200"></div>
              <div>
                <p className="font-semibold text-black">Gray</p>
                <p className="text-sm text-gray-600">#F6F6F6</p>
              </div>
            </div>
          </div>
        </section>

        {/* Usage in Code */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-semibold mb-6 text-black">Usage in Code</h2>
          <div className="space-y-4 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div>
              <p className="font-semibold text-black mb-2">Button Component:</p>
              <code className="block bg-white p-4 rounded border border-gray-200 text-sm font-mono text-gray-800">
                {`import { Button } from "@/components/ui/button";`}<br/><br/>
                {`<Button>Default Primary</Button>`}<br/>
                {`<Button variant="secondary">Secondary</Button>`}<br/>
                {`<Button className="bg-charoen-accent">Accent</Button>`}<br/>
                {`<Button size="lg">Large Button</Button>`}
              </code>
            </div>
            <div>
              <p className="font-semibold text-black mb-2">Tailwind Classes:</p>
              <code className="block bg-white p-4 rounded border border-gray-200 text-sm font-mono text-gray-800">
                bg-primary, text-primary, border-primary<br/>
                bg-secondary, text-secondary, border-secondary<br/>
                bg-accent, text-accent, border-accent<br/>
                bg-charoen-yellow, bg-charoen-gray
              </code>
            </div>
            <div>
              <p className="font-semibold text-black mb-2">Direct Brand Colors:</p>
              <code className="block bg-white p-4 rounded border border-gray-200 text-sm font-mono text-gray-800">
                bg-charoen-primary, bg-charoen-secondary, bg-charoen-accent
              </code>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
