import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { FeatureCard } from "../cards/FeatureCard";
import { siteConfig } from "../../config/siteConfig";

export const WhyUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-brand-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Travel With Us"
          title="Travel Made Simple"
          subtitle="We eliminate travel anxiety by pairing authentic local knowledge with warm, dedicated hospitality."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.trustHighlights.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              subtitle={feature.subtitle}
              iconName={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
