import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

import DefaultLayout from "@/layouts/default";
import { Divider } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Hero />
      <Services />
      <Features />
    </DefaultLayout>
  );
}
