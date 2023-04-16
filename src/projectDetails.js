import image1 from "./assets/compact/1.png";
import image2 from "./assets/compact/2.png";
import image1h from "./assets/hotstar/1.png";
import image2h from "./assets/hotstar/2.png";
import image1e from "./assets/eclipse/1.png";

export const projectDetails = [
  {
    id: 0,
    content: `Compact Hierarchical Triples (CHT) are systems with the tertiary star orbiting the inner binary in an orbit shorter than 1000 days. These systems were thought to be rare before, but with Kepler  and Transiting Exoplanet Survey Satellite (TESS) we have been discovering more of these systems. CHT with an eclipsing binary as its inner binary can help us extract the orbital, stellar and atmospheric properties of all the stars in the system. Using these parameters, I constrain the evolution of these stars and also check their future dynamical evolution. I work on low-mass CHTs (atleast 2 companions are near 1 solar mass) as they could help help draw parallels to formation and evolution of brown-dwarfs and exoplanets.
                To acheive this, I use multiple analyses and techniques in my work:
                1. lightcurve modelling (PHOEBE2, JKTEBOP)
                2. radial velocity extraction (TODCOR, broadening functions)
                3. radial velocity modelling (PHOEBE2, Radvel)s
                4. spectral disentangling (fd3)
                5. spectral analysis (iSpec)
                6. Isochrone fitting
                7. Numerical integration of orbital dynamics

                This work is currently funded by National Science Center (NCN), Poland through the grant no. 2021/41/N/ST9/02746 . `,
    images: [
      {
        link: image1,
        content: `Radial velocity variations of the tertiary star (boxes) vs the center-of-mass of the inner binary (triangles) of a CHT BD+442258. The green lines represent the best fit model. The veolcities are phased in time with an orbital period of 254.84 days.`,
      },
      {
        link: image2,
        content: `Best fit spectral models (orange) for the individual stars in CHT KIC06525196. The spectra was extracted from the composite spectra using spectral disentangling methods.`,
      },
    ],
  },
  {
    id: 1,
    content: `The Galactic Globular Clusters (GGCs) present in the galactic halo are old and metal-poor. This has lead to hotter populations of stars being present in these GGCs. These hot stars are bright in UV and belong to the evolved stages of stellar evolution, i.e, Horizontal Branch (HB), Asymptotic Giant Branch (AGB) and Blue Straggler Stars (BSS). 

            For this work that started during my Masters’, I use observations from the Ultraviolet Imaging Telescope  (link<http://www.iiap.res.in/uvit.htm><UVIT>) which is onboard the space-observatory ASTROSAT and is operated by the Indian Space Research Organisation.`,
    images: [
      {
        link: image1h,
        content: `Near-UV UVIT image of hot stars in globular cluster NGC7492.`,
      },
      {
        link: image2h,
        content: `Color-magnitude diagram of stars observed in NGC 7492 using UVIT filter.`,
      },
    ],
  },
  {
    id: 2,
    content: `When there is a companion star to an eclipsing binary, the eclipses are perturbed from their periodic nature. By measuring these small perturbations, we can estimate the orbits and the mass of the companion. Further, a careful characterisation of the signal can tell us about the apsidal motion, mass transfer and spot variations in the eclipsing binary.

    I work with the link<http://projektsolaris.pl/en/homepage/><Solaris> (PI: Prof. M. Konacki) network of robotic telescopes to obtain ETVs for a large sample of eclipsing binaries. I have also created the photometric pipeline to extract light curves from 5 years of observations using 4 telescopes and 2 filters for over 100 targets.`,
    images: [
      {
        link: image1e,
        content: `Different light curves from the Solaris network of telescopes generated by my photometric pipeline.`,
      },
    ],
  },
];
