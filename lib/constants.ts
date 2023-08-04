import { AlgoliaSearchIndex } from '@ircsignpost/signpost-base/dist/src/search-common';
import { LatLngExpression } from 'leaflet';

export const SITE_TITLE = 'Settle In';

export const COUNTRY_ID = 123;

export const MAP_DEFAULT_COORDS: LatLngExpression = [33.9391, 67.71];

// Cache statically generated pages for 1 hour. The timeout was chosen
// arbitrarily. Our website has static, non-urgent resources, so we probably do
// not need to serve content faster.
export const REVALIDATION_TIMEOUT_SECONDS: number = 1 * 60 * 60;

// The "about us" article ID.
export const ABOUT_US_ARTICLE_ID: number = 10987680052893;

// The information hierary of the website.
// Set to true for the category -> section -> article hierarchy, similar to that of United for Ukraine.
// Set to false for the "information" -> category -> article hierarchy, similar to that of Beporsed.
//
export const USE_CAT_SEC_ART_CONTENT_STRUCTURE = true;

// Set to true to use Recent Articles component on Home Page
export const USE_RECENT_ARTICLES = true;

// A mapping from category ID to a Material icon for that category.
export const CATEGORY_ICON_NAMES: { [key: string]: string } = {
  '123': 'home_work', // Placeholder
};

// A mapping from section ID to a Material icon for that section.
export const SECTION_ICON_NAMES: { [key: string]: string } = {
  '4926781343511': 'work', // Employment icon
  '4926790142615': 'home', // Housing icon
  '4926780910615': 'school', // Education icon
  '6240003555101': 'partner_exchange', // Resettlement Agency icon
  '6240054437917': 'local_hospital', // Health icon
  '6240027163549': 'account_balance', // Community Services icon
  '6240028543773': 'gavel', // Rights and Responsibilities icon
  '6240065241501': 'abc', // Learning English icon
  '6240031476125': 'payments', // Money Management icon
  '6240079449117': 'emoji_transportation', // Transportation icon
  '6240130189981': 'diversity_3', // Cultural Adjustment icon
  '9740047138333': 'security', // Safety icon
  '6891320734749': 'flight_land', // Immigration icon
  '6240021270557': 'health_and_safety', //Avoid Fraud and Safe Space icon
  '6239905273629': 'flight', // Travel icon
  '6239948190237': 'local_library', // Cultural Orientation icon
  '6239941064989': 'supervised_user_circle', // Prescreening Interview icon
  '6239957492509': 'communication', // USCSIS Interview icon
  '6239947024797': 'stethoscope', // Medical Screening icon
};

// A list of category IDs that the site should not display.
export const CATEGORIES_TO_HIDE: number[] = [4409690005783];

// A map from a locale code to Zendesk locale id used for dynamic content translations.
// https://developer.zendesk.com/api-reference/ticketing/account-configuration/locales/
// Keep in sync with locales configured in /next.config.js.
export const DYNAMIC_CONTENT_LOCALES: { [key: string]: number } = {
  'en-us': 1, // English locale id
  'fa-af': 1564, // Dari locale id
  ps: 1348, // Pashto locale id
  ru: 27, // Russian locale id
  uk: 1173, // Ukrainian locale id
};

export const ZENDESK_AUTH_HEADER = {
  Authorization: 'Bearer ' + process.env.ZENDESK_OAUTH_TOKEN,
};

export const GOOGLE_ANALYTICS_IDS = [
  process.env.NEXT_PUBLIC_GA_ID ?? '',
  process.env.NEXT_PUBLIC_GA4_ID ?? '',
];

// Algolia search app ID, Search API key and search index name:
// https://www.algolia.com/account/api-keys/
export const ALGOLIA_SEARCH_APP_ID = 'BWATZIXLX6';
export const ALGOLIA_SEARCH_API_KEY = '0d9093280e7b2bc2b6ca12ed4180fd0a';

// See README for more info on how to create indexes.
export const ALGOLIA_ARTICLE_INDEX_NAME = 'zendesk_signpost-settlein_articles';
export const ALGOLIA_QUERY_INDEX_NAME =
  'zendesk_signpost-settlein_articles_query_suggestions';

export const SEARCH_BAR_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_QUERY_INDEX_NAME,
};

export const SEARCH_RESULTS_PAGE_INDEX: AlgoliaSearchIndex = {
  appId: ALGOLIA_SEARCH_APP_ID,
  publicApiKey: ALGOLIA_SEARCH_API_KEY,
  indexName: ALGOLIA_ARTICLE_INDEX_NAME,
};

export const DIRECTUS_AUTH_TOKEN = process.env.DIRECTUS_TOKEN ?? '';
export const DIRECTUS_COUNTRY_ID = 0; // TODO: replace with the country ID from directus
export const DIRECTUS_INSTANCE = ''; // TODO: add the url from the directus instance you want to fetch data from
