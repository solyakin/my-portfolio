import { useEffect, useRef, useState } from "react";
import { Text, Box, Flex, Heading, Link, Image } from "@chakra-ui/react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import useTimeOut from "../components/useTimeOut";
import Spinner from "./Spinner";
import ProjectsTabs from "./ProjectsTabs";

const allProjects = [
  {
    src: "/portfolio/Hero.svg",
    href: "https://seamless-landingpage-six.vercel.app/",
    name: "Seamless POS",
    text: "A Tool to Manage sales, inventory and employees with ease; engage customers and increase your revenue. Whether you have single or multiple stores, Book a Demo",
    filter: "react",
  },
  {
    src: "/portfolio/primera.png",
    href: "https://primera-reb.netlify.app/",
    name: "Primera Bank",
    text: "A demo website for primera bank built with Nextjs.",
    filter: "react",
  },
  {
    src: "/portfolio/store.png",
    href: "https://business-app-zix7.vercel.app/",
    name: "Sale Track",
    text: "A robost store manager web application built to enable vendors manage sales, inventory and customer data",
    filter: "react",
  },
  {
    src: "/portfolio/teachai.png",
    href: "/https://teachai.app/",
    name: "Teach AI",
    text: "A low-code platform for developers to fine-tune and maintain Stable Diffusion models without knowledge of MLOps.",
    filter: "react",
  },
  {
    src: "/portfolio/img.svg",
    href: "https://xratlas.io/",
    name: "XR-Atlas",
    text: "A website for extended reality XR euthisisatic built with Nextjs.",
    filter: "react",
  },
  {
    src: "/portfolio/pos.png",
    href: "https://pos-app-fe.netlify.app/",
    name: "POS App",
    text: "POS is a transaction record platform for POS operator .",
    filter: "react",
  },
  {
    src: "/portfolio/iapp.png",
    href: "https://iappworldwide.com/",
    name: "Iapp worldwide",
    text: "A super app that enable users go about their day with ease.",
    filter: "react",
  },
  {
    src: "/portfolio/moovit.png",
    href: "https://moovitdigital.com",
    name: "Moovit Digital",
    text: "A digital advertisement web application",
    filter: "react",
  },
  {
    src: "/portfolio/postbird.png",
    href: "https://postbird.netlify.app/",
    name: "Post bird",
    text: "A landing page for a logistic firm in lagos",
    filter: "template",
  },
  {
    src: "/portfolio/brandspoosh.png",
    href: "https://brandspoosh.com/",
    name: "Brand Poosh",
    text: "A landing page for a digital branding firm based in lagos",
    filter: "react",
  },

];

export default function ProjectCards() {
  const [iso, setIso] = useState(null);
  const [filterKey, setFilterKey] = useState("*");
  const containerRef = useRef(null);
  const [isTimeOut] = useTimeOut({
    timeOutDelay: 1300,
    endTimeOut: iso !== null,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      imagesLoaded(containerRef, function () {
        const initializeIsotope = new Isotope(containerRef.current, {
          itemSelector: ".card-item",
          sortBy: "none",
          layoutMode: "fitRows",
        });
        setIso(initializeIsotope);
      });
    }
  }, []);

  useEffect(() => {
    if (iso) {
      filterKey === "*"
        ? iso.arrange({ filter: `*` })
        : iso.arrange({ filter: `.${filterKey}` });
    }
  }, [iso, filterKey]);

  return (
    <>
      <ProjectsTabs
        filterKey={filterKey}
        onFilter={(filter) => {
          setFilterKey(filter);
        }}
      />
      <Spinner isTimeOut={isTimeOut} />
      <Flex
        ref={containerRef}
        pos="relative"
        flexWrap="wrap"
        visibility={isTimeOut ? "visible" : "hidden"}
        justify="center"
      >
        {allProjects.map((project) => {
          return (
            <Box
              key={project.name}
              h={[450, 280]}
              maxW={["100%", "50%", "33%"]}
              width="100%"
              overflow="hidden"
              textAlign="center"
              pos="relative"
              opacity={iso ? 1 : 0}
              px={0.6}
              mb={1.5}
              __css={{
                ":hover .project-text": {
                  visibility: "visible",
                  opacity: 1,
                },
              }}
              className={`card-item ${project.filter}`}
            >
              <Image
                src={project.src}
                alt={project.name}
                aria-label={project.name}
                position="relative"
                display="inline-block"
                fit="cover"
                w="full"
                h={["calc(450px - 60px)", "calc(280px - 60px)"]}
                objectFit="cover"
                zIndex={5}
              />
              <Flex
                justify="space-between"
                alignItems="center"
                py={1}
                px={0.6}
                bg="accent"
                h="60px"
              >
                <Heading as="h4" fontSize="2lg">
                  {project.name}
                </Heading>
                <Link
                  href={project.href}
                  aria-label={project.name}
                  rel="noopener noreferrer"
                  _hover={{
                    opacity: "0.8 !important",
                  }}
                  _focus={{
                    border: "none",
                    outline: "none",
                  }}
                  isExternal
                >
                  <Text
                    as="i"
                    fontSize="lg"
                    className="fa fa-link"
                    aria-hidden={true}
                  ></Text>
                </Link>
              </Flex>
              <Text
                className="project-text"
                position="absolute"
                top={0}
                w="98%"
                fontSize="lg"
                zIndex={10}
                px={1}
                display="flex"
                alignItems="center"
                transition="all 0.4s ease-in"
                bg="background"
                visibility="hidden"
                opacity={0}
                h={["calc(450px - 60px)", "calc(280px - 60px)"]}
              >
                {project.text}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </>
  );
}
