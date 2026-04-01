"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto p-8 space-y-8">
      <h1 className="text-4xl font-heading mb-4">Design System Playground</h1>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading">Typography</h2>
        <h1 className="text-5xl font-heading">Heading 1 - The Agency Title</h1>
        <h2 className="text-4xl font-heading">Heading 2 - Section Title</h2>
        <h3 className="text-3xl font-heading">Heading 3 - Sub Section</h3>
        <h4 className="text-2xl font-heading">Heading 4 - Feature Callout</h4>
        <h5 className="text-xl font-heading">Heading 5 - Minor Detail</h5>
        <h6 className="text-lg font-heading">Heading 6 - Fine Print</h6>
        <p className="text-base font-sans">
          This is a paragraph of Inter body text. It should be clean and readable,
          ensuring all content is easily digestible for our users.
        </p>
        <p className="text-base font-sans text-brand-muted">
          This is some muted text, useful for secondary information or descriptions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading">Colors & Components</h2>
        <div className="flex space-x-4">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="link">Link Button</Button>
        </div>

        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description - supporting text.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card. It should have the default rounding and background color.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Card Action</Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-heading">Spacing</h2>
        <div className="bg-primary-foreground p-6 m-4 rounded-lg text-primary">
          <p>This div has `p-6` padding and `m-4` margin. The text should be the primary color.</p>
        </div>
        <div className="bg-secondary-foreground p-4 m-2 rounded-lg text-secondary">
          <p>This div has `p-4` padding and `m-2` margin. The text should be the secondary color.</p>
        </div>
      </section>
    </div>
  );
}
