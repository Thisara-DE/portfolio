// GoatCounter analytics — loads only when profile.goatcounterCode is set in data.js.
import { profile } from './data.js';

export function initAnalytics() {
  if (!profile.goatcounterCode) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = `https://${profile.goatcounterCode}.goatcounter.com/count`;
  document.head.appendChild(script);
}

// Fire a named event (e.g. resume download, contact submit). No-op if
// analytics is disabled or the script hasn't loaded yet.
export function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({ path, title, event: true });
  }
}
