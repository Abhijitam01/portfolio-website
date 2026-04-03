const fs = require('fs');

let css = fs.readFileSync('src/app/globals.css', 'utf8');

// The goal: replace `border-[dir]: 1px dashed var(--border-dotted);` on pseudo-elements
// with the mask implementation.

// Wait, the mask implementation for a TOP or BOTTOM border:
const horizDash = `
    height: 1px;
    border: none;
    background-color: var(--border-dotted);
    mask-image: repeating-linear-gradient(to right, black 0, black 10px, transparent 10px, transparent 18px);
    -webkit-mask-image: repeating-linear-gradient(to right, black 0, black 10px, transparent 10px, transparent 18px);
`.trim();

const vertDash = `
    width: 1px;
    border: none;
    background-color: var(--border-dotted);
    mask-image: repeating-linear-gradient(to bottom, black 0, black 10px, transparent 10px, transparent 18px);
    -webkit-mask-image: repeating-linear-gradient(to bottom, black 0, black 10px, transparent 10px, transparent 18px);
`.trim();

// Replacing all horizontal dashed borders
css = css.replace(/border-top:\s*1px dashed var\(--border-dotted\);/g, horizDash);
css = css.replace(/border-bottom:\s*1px dashed var\(--border-dotted\);/g, horizDash);

// Replacing vertical dashed borders
css = css.replace(/border-left:\s*1px dashed var\(--border-dotted\);/g, vertDash);
css = css.replace(/border-right:\s*1px dashed var\(--border-dotted\);/g, vertDash);

// Then there's `border: 1px dashed var(--border-dotted);`
// Actually, `border:` on full boxes (like .year-pill-nav or agent-view) is tricky with mask.
// Let's only do it if the user wants it everywhere. The plan says "all dashed lines".
// But `border:` applies to 4 sides. 
// A mask on a full box will mask the BACKGROUND of the box as well!!
// Wait, if we replace `border` with `mask`, we lose the background.
// So for full boxes, we must use an entirely different method.
// Let's check how many full borders exist:
console.log('Full borders:', (css.match(/border:\s*1px dashed var\(--border-dotted\);/g) || []).length);

fs.writeFileSync('src/app/globals.css.bak', css);
console.log('Done script');
