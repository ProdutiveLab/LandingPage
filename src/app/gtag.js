export const GA_TRACKING_ID = 'G-LFTRE6HW2Q';

// Log the pageview with the given URL
export const pageview = (url) => {
window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
});
};

// Log specific events happening.
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};