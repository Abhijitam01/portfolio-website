const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The Goal: Increase side padding of main-wrapper from 1.5rem to 4.5rem (+48px)
// And correct all negative margins that counteract this padding.

css = css.replace(/padding: 0 1.5rem 3rem;/g, 'padding: 0 4.5rem 3rem;');
css = css.replace(/padding: 0 1.5rem;/g, 'padding: 0 4.5rem;');
css = css.replace(/margin: 0 -1.5rem;/g, 'margin: 0 -4.5rem;');

// Specific components:
// Site nav
css = css.replace(/\.site-nav \{([^}]*?)padding: 0 1.5rem;/g, '.site-nav {$1padding: 0 4.5rem;');

// Hero banner padding increase
css = css.replace(/\.hero-banner \{([^}]*?)padding: 2.5rem 2rem;/g, '.hero-banner {$1padding: 2.5rem 4.5rem;');

// Case study title calc adjustments? 
// Current: width: calc(100% + 2.2rem); left: -1.1rem;
// These were likely tuned for the old smaller padding.
// If padding is 4.5rem, we might want to increase these to reach the new walls?
// Actually, if they was 1.1rem, that's almost 1.5rem. 
// Let's leave calcs as is for now unless it looks broken.

fs.writeFileSync('src/app/globals.css', css);
console.log('Padding update complete');
