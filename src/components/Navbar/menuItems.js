/**
 * Array representing the main navigation items for the website.
 * Each object contains the `name` of the navigation link, `href` (URL the link points to), and `current` (indicates if the link is active).
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} name - The name of the navigation link.
 * @property {string} href - The URL to which the navigation link points.
 * @property {boolean} current - A boolean indicating if the link is currently active.
 */
export const navigation = [
  { index: 0, name: "Home", href: "/", current: "_self", id: "home-link" },
  { index: 1, name: "Call for Papers", href: "", current: "_self", id: "cfp-link" },
  { index: 2, name: "Conference Schedule", href: "", current: "_self", id: "schedule-link" },
  // {
  //   index: 2, name: "Submission Guidelines",
  //   href: "/submission-guidelines",
  //   current: "_self",
  //   id: "sg-link",
  // },
  { index: 3, name: "Sponsorship Invitation", href:'/sponsorship-invitation', current: "_self", id: "reg-link" },
  { index: 4, name: "Registration", href: "/registration", current: "_self", id: "reg-link" },
  { index: 5, name: "Speakers", href: "/keynote-speakers", current: "_self", id: "ks-link" },
  { index: 6, name: "Hackathon", href: "/hackathon", current: "_self", id: "hackathon" },
  { index: 7, name: "Committee", href: "/org-committee", current: "_self", id: "committee-link" },
  { index: 8, name: "Travel", current: "_self", id: "travel-link" },
  { index: 9, name: "Past Editions", href: "/", current: "_self", id: "pe-link" },
  { index: 10, name: "Contact", current: "_self", id: "contact-link" },
];

/**
 * Array representing the submenu items under the 'About' section.
 * Each object contains the `name` of the submenu item, `href` (URL the item points to), and `current` (indicates if the item is active).
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} name - The name of the submenu item.
 * @property {string} href - The URL to which the submenu item points.
 * @property {boolean} current - A boolean indicating if the submenu item is currently active.
 */
export const aboutSubmenuItems = [
  { name: "Conference Theme", href: "/", current: "_self" },
  { name: "Objectives", href: "/", current: "_self" },
  { name: "Target Audience", href: "/", current: "_self" },
  { name: "Conference Structure", href: "/", current: "_self" },
];

/**
 * Array representing the submenu items under the 'Call for Papers' section.
 * Each object contains the `name` of the submenu item, `href` (URL the item points to), and `current` (indicates if the item is active).
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} name - The name of the submenu item.
 * @property {string} href - The URL to which the submenu item points.
 * @property {boolean} current - A boolean indicating if the submenu item is currently active.
 */
export const cfpSubmenuItems = [
  { name: "Conference Tracks", href: "/call-for-papers", current: "_self" },
  // {
  //   name: "Paper Preparation & Submission Guidelines for Authors",
  //   href: "/",
  //   current: "_self",
  // },
  { name: "Submission Guidelines", href: "/submission-guidelines", current: "_self", id: "sg-link" },
  { name: "Camera Ready Paper", href: "/camera-ready-paper", current: "_self", id: "sg-link" },
  { name: "Important Dates", href: "/", current: "_self" },
];

/**
 * Array representing the submenu items under the 'Past Editions' section.
 * Each object contains the `name` of the past edition, `href` (URL the item points to), and `current` (indicates if the item is active).
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} name - The name of the past edition.
 * @property {string} href - The URL to which the past edition item points.
 * @property {boolean} current - A boolean indicating if the past edition item is currently active.
 */
export const pastEditionsItems = [
  {
    name: "2020",
    href: "https://ieeexplore.ieee.org/xpl/conhome/9557352/proceeding",
    current: "_blank",
  },
  {
    name: "2021",
    href: "https://ieeexplore.ieee.org/xpl/conhome/9768306/proceeding",
    current: "_blank",
  },
  {
    name: "2023",
    href: "https://ieeexplore.ieee.org/xpl/conhome/10149893/proceeding",
    current: "_blank",
  },
];

/**
 * Array representing the submenu items under the 'Travel' section.
 * Each object contains the `name` of the submenu item, `href` (URL the item points to), and `current` (indicates if the item is active).
 *
 * @constant
 * @type {Array<Object>}
 * @property {string} name - The name of the submenu item.
 * @property {string} href - The URL to which the submenu item points.
 * @property {boolean} current - A boolean indicating if the submenu item is currently active.
 */
export const travelItems = [
  { name: "Travel Visa", href: "/visa-details", current: "_self", id: "Travel-Visa" },
  { name: "Venue & Directions", href: "/venue&directions", current: "_self", id: "venue-link" },
  { name: "Explore Delhi", href: "/explore-delhi", current: "_self" },
  { name: "Explore Delhi Neighbours", href: "/tourist-destinations", current: "_self" },
  { name: "Accommodation and Facilities", href: "/", current: "_self" },
];
