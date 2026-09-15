import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects Gallery | KPN Roofing Shed",
  description: "Explore our extensive portfolio of premium roofing sheds, ranging from massive industrial complexes to bespoke residential structures.",
  alternates: {
    canonical: "https://www.kpnroofingsheds.com/gallery/",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
