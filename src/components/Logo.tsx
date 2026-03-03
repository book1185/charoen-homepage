import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "icon" | "vertical" | "horizontal" | "horizontal-white";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ variant = "icon", className, width, height }: LogoProps) {
  const logos = {
    icon: {
      src: "/logo/charoen-logo.svg",
      alt: "Charoen Logo",
      defaultWidth: 100,
      defaultHeight: 109,
      aspectRatio: 757 / 826,
    },
    vertical: {
      src: "/logo/charoen-name-logo.svg",
      alt: "Charoen Logo with Name",
      defaultWidth: 150,
      defaultHeight: 123,
      aspectRatio: 1627 / 1332,
    },
    horizontal: {
      src: "/logo/chaloen-horizontal-name-logo.svg",
      alt: "Charoen Horizontal Logo",
      defaultWidth: 300,
      defaultHeight: 78,
      aspectRatio: 3653 / 954,
    },
    "horizontal-white": {
      src: "/logo/chaloen-horizontal-name-logo-white.svg",
      alt: "Charoen Horizontal Logo (White for Green Background)",
      defaultWidth: 300,
      defaultHeight: 78,
      aspectRatio: 3653 / 954,
    },
  };

  const logo = logos[variant];
  const computedWidth = width || logo.defaultWidth;
  const computedHeight = height || Math.round(computedWidth / logo.aspectRatio);

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={computedWidth}
      height={computedHeight}
      className={cn("object-contain", className)}
      priority
    />
  );
}
