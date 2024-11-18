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
  { name: 'Home', href: '/', current: true },
  { name: 'About', href: '/', current: false },
  { name: 'Contact', href: '/', current: false },
  { name: 'Potential Speakers', href: '/', current: false },
  { name: 'Venue And Dates', href: '/venue', current: false },
  { name: 'Submission Guidelines', href: '/submission-guidelines', current: false },
  { name: 'Call for Papers', href: '#call-for-papers', current: false },
  { name: 'Registration', href: '/', current: false },
  { name: 'Organising Committee', href: '/org-committee', current: false },
  { name: 'Past Editions', href: '/', current: false },
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
  { name: "Conference Theme", href: "/", current: false },
  { name: "Objectives", href: "/", current: false },
  { name: "Target Audience", href: "/", current: false },
  { name: "Conference Structure", href: "/", current: false },
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
  { name: "Conference Tracks", href: "/call-for-papers", current: false },
  { name: "Paper Preparation & Submission Guidelines for Authors", href: "/", current: false },
  { name: "Important Dates", href: "/", current: false },
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
  { name: "2020", href: "https://ieeexplore.ieee.org/xpl/conhome/9557352/proceeding", current: false },
  { name: "2021", href: "https://ieeexplore.ieee.org/xpl/conhome/9768306/proceeding", current: false },
  { name: "2023", href: "https://ieeexplore.ieee.org/xpl/conhome/10149893/proceeding", current: false },
];
