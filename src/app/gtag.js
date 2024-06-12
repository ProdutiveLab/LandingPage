export const GA_TRACKING_ID = 'G-LFTRE6HW2Q';


// Função para carregar o Google Analytics
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  };
  
  // Função para registrar um evento
  export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

// Função para registrar um evento
export const eventConversion = ({ action, label }) => {
    window.gtag('event', action, {
        event_label: label,
        send_to: 'AW-956394026/pNnrCM-gi7kZEKrUhcgD'
    });
};