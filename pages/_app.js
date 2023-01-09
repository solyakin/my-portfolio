import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { description } from "../package.json";
import { Transition } from "react-transition-group";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import gsap from "gsap";
import { extendTheme } from "@chakra-ui/react";
import THEME from "../components/styles/theme";
import PALETTES from "../components/styles/themePalettes";
import SelectTheme from "../components/SelectTheme";
import useTimeOut from "../components/useTimeOut";
import RootThemeProvider from "../components/ChakraProvider";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import Favicons from "../components/Favicons";
import Footer from "../components/Footer";
import * as gtag from "../lib/gtag";
import { homeAnimation, NavLinksAnimation } from "../utils/home-animation";
import "../styles/globals.css";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { zIndex: -1 },
};

function systemTheme(type) {
  return {
    ...THEME,
    colors: !PALETTES[type] ? PALETTES["default"] : PALETTES[type],
  };
}

const getPageTitle = (component) => {
  if (component.meta && component.meta.title) {
    const { title } = component.meta;
    return title;
  }

  return component.name;
};

function MyApp({ Component, pageProps }) {
  const [themeMode, setThemeMode] = useState("default");
  const selectRef = useRef(null);
  const { pathname, events } = useRouter();
  const [isTimeOut] = useTimeOut({
    timeOutDelay: 1000,
    endTimeOut: true,
  });

  const title = getPageTitle(Component);
  const image = "/static/meta-ogundare.png";
  const url = "https://ogundaresamuel.vercel.app/";

  useEffect(() => {
    if (isTimeOut) {
      if (typeof window !== "undefined") {
        const timeline = gsap.timeline();
        timeline.add(NavLinksAnimation(gsap)).add(homeAnimation(gsap));
      }
    }
  }, [isTimeOut]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    events.on("routeChangeComplete", handleRouteChange);
    return () => {
      events.off("routeChangeComplete", handleRouteChange);
    };
  }, [events]);

  useEffect(() => {
    if (getThemeToStorage()) {
      setThemeMode(getThemeToStorage());
      selectRef.current.value = getThemeToStorage();
    }
  }, []);

  const saveThemeToStorage = (value) => {
    localStorage.setItem("theme-mode", value);
  };

  const getThemeToStorage = (value) => {
    if (!localStorage.getItem("theme-mode")) {
      return null;
    }
    return localStorage.getItem("theme-mode");
  };

  const handleChange = (event) => {
    const { target } = event;
    if (target.value !== themeMode) {
      setThemeMode(target.value);
      saveThemeToStorage(target.value);
    }
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/static/css/nprogress.css" />
      </Head>
      <Favicons />
      <DefaultSeo
        title={`Solomon Akinlade | ${title}`}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title: `Solomon Akinlade | ${title}`,
          description,
          type: "website",
          locale: "en-US",
          site_name: "Solomon-Akinlade",
          images: [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
        twitter={{
          handle: "@solex_frontend",
          cardType: "summary_large_image",
        }}
      />
      <RootThemeProvider theme={extendTheme(systemTheme(themeMode))}>
        <Container
          maxW="full"
          m={0}
          px={2}
          py={3}
          overflow={pathname === "/" ? "hidden" : "auto"}
          h={pathname === "/" ? "100vh" : "full"}
        >
          <Transition
            timeout={{
              enter: 700,
              exit: 700,
            }}
            in={!isTimeOut}
          >
            {(state) => (
              <Loader
                zIndex={state === "exited" ? -1 : 1000}
                display={state === "exited" ? "none" : "flex"}
                transition="opacity 700ms ease-in-out"
                opacity={0}
                {...transitionStyles[state]}
              />
            )}
          </Transition>
          <Flex pos="relative" alignItems="center" zIndex={100}>
            <Logo />
            <Spacer />
            <SelectTheme ref={selectRef} onChange={handleChange} />
            <Spacer />
            <NavBar />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            h={pathname === "/" ? "75%" : "full"}
          >
            <Component {...pageProps} isTimeOut={isTimeOut} />
          </Flex>
          <Footer />
        </Container>
      </RootThemeProvider>
    </>
  );
}

export default MyApp;
