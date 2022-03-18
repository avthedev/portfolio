import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Anon Vanichyanukroh" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />

        <InterestsSection sectionId="details" heading="Tech Stack" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Connect with me?" />
      </Page>
    </>
  );
}
