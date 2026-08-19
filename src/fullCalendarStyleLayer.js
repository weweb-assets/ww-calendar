const FULL_CALENDAR_STYLE_SELECTOR = 'style[data-fullcalendar]';
const LAYERED_STYLE_SELECTOR = 'style[data-weweb-fullcalendar]';
const FULL_CALENDAR_LAYER = 'ww-style-component.fullcalendar';

export function layerFullCalendarStyles(styleRoot) {
    if (typeof document === 'undefined') return false;

    const root = styleRoot || document;
    const fullCalendarStyle = root.querySelector(FULL_CALENDAR_STYLE_SELECTOR);
    const fullCalendarStyleSheet = fullCalendarStyle?.sheet;
    if (!fullCalendarStyleSheet) return false;
    if (!fullCalendarStyle.parentNode) return false;

    const cssText = Array.from(fullCalendarStyleSheet.cssRules, rule => rule.cssText).join('\n');
    if (!cssText) return false;

    let layeredStyle = root.querySelector(LAYERED_STYLE_SELECTOR);
    const isNewLayeredStyle = !layeredStyle;

    if (!layeredStyle) {
        layeredStyle = fullCalendarStyle.ownerDocument.createElement('style');
        layeredStyle.setAttribute('data-weweb-fullcalendar', '');
        fullCalendarStyle.parentNode.appendChild(layeredStyle);
    }

    if (fullCalendarStyle.nonce) layeredStyle.nonce = fullCalendarStyle.nonce;

    const previousCssText = layeredStyle.textContent;
    layeredStyle.textContent = `@layer ${FULL_CALENDAR_LAYER} {\n${cssText}\n}`;

    if (!layeredStyle.sheet?.cssRules.length) {
        if (isNewLayeredStyle) layeredStyle.remove();
        else layeredStyle.textContent = previousCssText;
        return false;
    }

    // FullCalendar keeps this element in its internal cache. Keep it connected so
    // FullCalendar does not create and hydrate a new unlayered stylesheet later.
    fullCalendarStyleSheet.disabled = true;
    return true;
}
