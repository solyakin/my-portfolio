export function homeAnimation(gsap) {
  const timeline = gsap.timeline();

  timeline
    .fromTo(
      '.salute',
      {
        opacity: 0
      },
      {
        duration: 1,
        opacity: 1
      },
      1.2
    )
    .fromTo(
      '.fullname',
      {
        opacity: 0
      },
      {
        duration: 2,
        opacity: 1
      },
      1.4
    )
    .fromTo(
      '.role',
      {
        opacity: 0
      },
      {
        duration: 2,
        opacity: 1,
        ease: 'back'
      },
      1.6
    )
    .fromTo(
      '.social',
      {
        opacity: 0
      },
      {
        duration: 0.7,
        opacity: 1,
        stagger: 0.2,
        ease: 'back'
      },
      1.8
    )
    .fromTo(
      '.portfolio-btn',
      {
        opacity: 0,
        visibility: 'hidden'
      },
      {
        duration: 1,
        opacity: 1,
        visibility: 'visible'
      },
      2
    )
    .fromTo(
      '.animated-logo',
      {
        opacity: 0
      },
      {
        duration: 'random(5, 6)',
        opacity: 'random(0, 0.5)',
        scale: 0,
        opacity: 1,
        rotate: 'random(40deg, -80deg)',
        y: '-=50',
        x: 'random(100, -50)',
        ease: 'back',
        stagger: {
          amount: 3,
          from: 'center',
          grid: 'auto',
          repeat: 20
        }
      },
      2.2
    );

  return timeline;
}

export function NavLinksAnimation(gsap) {
  const mediaQuery = window.matchMedia('(min-width: 639px)');

  if (mediaQuery.matches) {
    gsap.fromTo(
      '.home-link',
      {
        opacity: 0,
        y: -55
      },
      {
        duration: 1,
        stagger: 0.3,
        opacity: 1,
        y: 0,
        ease: 'back'
      },
      0.1
    );
  } else {
    gsap.to('.home-link', {
      opacity: 1
    });
  }
}
