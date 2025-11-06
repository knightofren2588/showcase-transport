# PWA Testing Checklist for Showcase Transport

## 1. Service Worker Testing

### Check Registration
- [ ] Open DevTools → Application → Service Workers
- [ ] Verify service worker is registered and shows "activated and is running"
- [ ] Check console for "SW registered: [registration object]" message
- [ ] Verify status is "activated" (not "redundant" or "installing")

### Test Service Worker Updates
- [ ] Make a change to `sw.js`
- [ ] Refresh page - should see "waiting" state
- [ ] Click "skipWaiting" or close all tabs and reopen
- [ ] Verify new service worker activates

## 2. Offline Functionality

### Test Offline Mode
- [ ] Open DevTools → Network tab
- [ ] Check "Offline" checkbox
- [ ] Refresh the page
- [ ] Verify site still loads (from cache)
- [ ] Navigate between pages (should work offline)
- [ ] Check that styles and images load

### Test Cache Storage
- [ ] Open DevTools → Application → Cache Storage
- [ ] Verify `showcase-transport-v1.0.0` cache exists
- [ ] Check that cached files are listed:
  - `/`
  - `/index.html`
  - `/src/main.jsx`
  - `/manifest.json`

## 3. Manifest Validation

### Verify Manifest
- [ ] Open DevTools → Application → Manifest
- [ ] Verify all icons are loading (check preview)
- [ ] Confirm theme color is `#10b981`
- [ ] Verify name and short_name are correct
- [ ] Check start_url is `/`
- [ ] Verify display mode is "standalone"

### Test Icons
- [ ] Click on each icon in the manifest to verify they load
- [ ] Check icon sizes match manifest (72x72, 96x96, etc.)

## 4. Install Prompt Testing

### Desktop Installation (Chrome/Edge)
- [ ] Look for install icon in address bar (usually appears after a few visits)
- [ ] Click install icon
- [ ] Verify app installs as standalone window
- [ ] Test installed app:
  - Opens in its own window (no browser UI)
  - Has correct app icon
  - Has correct app name
  - Can be closed and reopened from desktop/app menu

### Mobile Installation (iOS/Android)
- [ ] On iOS: Use Safari Share button → "Add to Home Screen"
- [ ] On Android: Should see install banner automatically
- [ ] Verify app icon appears on home screen
- [ ] Launch from home screen
- [ ] Verify it opens in standalone mode (no browser UI)
- [ ] Check status bar color matches theme color

## 5. Network Strategies

### Test Network Requests
- [ ] Open DevTools → Network tab
- [ ] Refresh page with "Disable cache" unchecked
- [ ] Verify cached resources load instantly
- [ ] Check that service worker intercepts requests
- [ ] Look for "ServiceWorker" in the "Size" column

### Test Cache-First Strategy
- [ ] Load page normally
- [ ] Go offline
- [ ] Refresh - should load from cache
- [ ] Go online
- [ ] Refresh - should still work

## 6. Performance Testing

### Lighthouse PWA Audit
- [ ] Open DevTools → Lighthouse tab
- [ ] Select "Progressive Web App" category
- [ ] Run audit
- [ ] Verify PWA score is 90+ (should be very high)
- [ ] Check these pass:
  - ✅ Service Worker registered
  - ✅ Responds with 200 when offline
  - ✅ Has a manifest
  - ✅ Has a valid Apple touch icon
  - ✅ Has a valid theme color
  - ✅ Has a valid viewport meta tag

### Performance Metrics
- [ ] Check First Contentful Paint (should be fast)
- [ ] Verify Time to Interactive is reasonable
- [ ] Test on slow 3G connection (Network throttling)

## 7. App Behavior Testing

### Standalone Mode
- [ ] Install the app
- [ ] Launch installed app
- [ ] Verify no browser address bar
- [ ] Verify no browser navigation buttons
- [ ] Check that all pages navigate correctly
- [ ] Test that external links open in browser (not in app)

### Theming
- [ ] Check status bar color on mobile (should be green #10b981)
- [ ] Verify splash screen uses correct background color
- [ ] Check app icon appears correctly

## 8. Cross-Browser Testing

### Chrome/Edge (Chromium)
- [ ] Full PWA support
- [ ] Install prompt works
- [ ] Offline functionality works

### Safari (iOS)
- [ ] Add to Home Screen works
- [ ] Standalone mode works
- [ ] Service worker works (iOS 11.3+)

### Firefox
- [ ] Basic PWA support
- [ ] Service worker works
- [ ] Manifest is recognized

## 9. Security Testing

### HTTPS Requirement
- [ ] Verify site is served over HTTPS (production)
- [ ] Localhost works for development (HTTP allowed)
- [ ] Service worker only works on HTTPS or localhost

## 10. Edge Cases

### Update Testing
- [ ] Change service worker version
- [ ] Verify old cache is cleared
- [ ] Check new cache is created
- [ ] Verify no broken functionality

### Error Handling
- [ ] Test with network disabled
- [ ] Verify graceful error handling
- [ ] Check console for errors

## Quick Test Commands

### Check Service Worker Status
```javascript
// Run in browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  console.log('Service Workers:', registrations);
});
```

### Check Cache
```javascript
// Run in browser console
caches.keys().then(keys => console.log('Caches:', keys));
```

### Force Update
```javascript
// Run in browser console
navigator.serviceWorker.getRegistrations().then(registrations => {
  registrations.forEach(reg => reg.update());
});
```

### Clear All Caches
```javascript
// Run in browser console
caches.keys().then(keys => {
  keys.forEach(key => caches.delete(key));
  console.log('All caches cleared');
});
```

## Expected Results

✅ **All core tests should pass:**
- Service worker registers and activates
- Site works offline
- Manifest is valid
- Icons load correctly
- App can be installed
- Installed app works in standalone mode
- Lighthouse PWA score is 90+

## Common Issues & Fixes

**Issue:** Service worker not registering
- **Fix:** Check console for errors, verify `/sw.js` is accessible

**Issue:** Icons not loading
- **Fix:** Verify files exist in `/public/icons/` and paths are correct

**Issue:** App not installing
- **Fix:** Check install criteria (HTTPS, valid manifest, service worker)

**Issue:** Offline mode not working
- **Fix:** Check service worker cache strategy, verify files are cached


