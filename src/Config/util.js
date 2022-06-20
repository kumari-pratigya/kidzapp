export const API_BASE_URL = "https://api2.kidzapp.com/api/3.0";

export  const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const blog_API = getApiUrl('/blogs?page=1&limit=9&country_code=ae');
export const Slider_API = getApiUrl('/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1');
export const button_Slider_API= getApiUrl('/lists?country_code=ae');
export const card_API = getApiUrl('experiences/curated-list/?list_name=featured_kidzapp_deal&country_code=&page=1&page_size=10&city=&website=1');
export const CardSection_API=getApiUrl('/blogs?page=1&limit=10&country_code=ae');
export const CardSlider_API =getApiUrl('/reviews/featured?page=1&page_size=20&country_code=ae');