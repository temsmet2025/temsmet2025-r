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
  { name: "Home", href: "/", current: "_self", id: "home-link" },
  { name: "Call for Papers", href: "#call-for-papers", current: "_self", id: "cfp-link" },
  {
    name: "Submission Guidelines",
    href: "/submission-guidelines#submission-guidelines",
    current: "_self",
    id: "sg-link",
  },
  { name: "Registration", href: "/registration", current: "_self", id: "reg-link" },
  { name: "Keynote Speakers", href: "/keynote-speakers", current: "_self", id: "ks-link" },
  { name: "Venue", href: "/venue", current: "_self", id: "venue-link" },
  { name: "Committee", href: "/org-committee", current: "_self", id: "committee-link" },
  { name: "Past Editions", href: "/", current: "_self", id: "pe-link" },  
  { name: "Contact", href: "/", current: "_self", id: "contact-link" },
  { name: "Travel", current: "_self", id: "travel-link"},
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
  { name: "Travel", href: "/", current: "_self" },
  { name: "Travel to Delhi", href: "/", current: "_self" },
  { name: "Tourist Destinations", href: "/tourist-destinations", current: "_self" },
  { name: "Accommodation and Facilities", href: "/", current: "_self" },
];
