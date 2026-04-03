const fs = require('fs');
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// 1. Beige Theme
css = css.replace(/--bg-primary: #fafafa;/g, '--bg-primary: #F7F5F0;');
css = css.replace(/--bg-secondary: #ffffff;/g, '--bg-secondary: #FFFFFF;');
css = css.replace(/--border-color: #b8bfc8;/g, '--border-color: #E2DDD5;');
css = css.replace(/--border-dotted: #9aaab8;/g, '--border-dotted: #CDC6BE;');
css = css.replace(/--text-secondary: #3f3f46;/g, '--text-secondary: #57554C;');

// 2. View Transitions
css = css.replace(/animation-duration: 0.35s;/g, 'animation-duration: 0.65s;');
css = css.replace(/cubic-bezier\(0.22, 1, 0.36, 1\)/g, 'cubic-bezier(0.25, 1, 0.3, 1)');
css = css.replace(/filter: blur\(2px\);/g, '');

// 3. Hero layout & Avatar Size
css = css.replace(/padding: 4.72rem 2rem;/g, 'padding: 1.5rem 2rem;');
css = css.replace(/min-height: 310px;/g, 'min-height: 100px;');

css = css.replace(/width: 160px;\n\s*height: 160px;/g, 'width: 185px;\n    height: 185px;');
css = css.replace(/padding: 1rem 1.25rem 1.25rem 1.5rem;/g, 'padding: 0.5rem 0.5rem 0.5rem 0;');
css = css.replace(/width: 210px;/g, 'width: 200px;'); // slightly tighter col width to match smaller padding

// 4. Dashed lines
// For horizontal pseudo elements that use border-top or border-bottom:
// We just replace that specific line with border-image
const topBorderImg = `
    border-top: 1px dashed var(--border-dotted);
    border-image-source: repeating-linear-gradient(to right, var(--border-dotted) 0, var(--border-dotted) 10px, transparent 10px, transparent 18px);
    border-image-slice: 1;
`.trim();

const botBorderImg = `
    border-bottom: 1px dashed var(--border-dotted);
    border-image-source: repeating-linear-gradient(to right, var(--border-dotted) 0, var(--border-dotted) 10px, transparent 10px, transparent 18px);
    border-image-slice: 1;
`.trim();

const rightBorderImg = `
    border-right: 1px dashed var(--border-dotted);
    border-image-source: repeating-linear-gradient(to bottom, var(--border-dotted) 0, var(--border-dotted) 10px, transparent 10px, transparent 18px);
    border-image-slice: 1;
`.trim();

const leftBorderImg = `
    border-left: 1px dashed var(--border-dotted);
    border-image-source: repeating-linear-gradient(to bottom, var(--border-dotted) 0, var(--border-dotted) 10px, transparent 10px, transparent 18px);
    border-image-slice: 1;
`.trim();

const allBorderImg = `
    border: 1px dashed var(--border-dotted);
    border-image-source: repeating-linear-gradient(to right, var(--border-dotted) 0, var(--border-dotted) 10px, transparent 10px, transparent 18px);
    border-image-slice: 1;
`.trim();

css = css.replace(/border-top:\s*1px dashed var\(--border-dotted\);/g, topBorderImg);
css = css.replace(/border-bottom:\s*1px dashed var\(--border-dotted\);/g, botBorderImg);
css = css.replace(/border-right:\s*1px dashed var\(--border-dotted\);/g, rightBorderImg);
css = css.replace(/border-left:\s*1px dashed var\(--border-dotted\);/g, leftBorderImg);
css = css.replace(/border:\s*1px dashed var\(--border-dotted\);/g, allBorderImg);

// 5. Update main-wrapper repeating linear gradients
css = css.replace(/var\(--border-dotted\) 6px/g, 'var(--border-dotted) 10px');
css = css.replace(/transparent 6px,/g, 'transparent 10px,');
css = css.replace(/transparent 14px/g, 'transparent 18px');

fs.writeFileSync('src/app/globals.css', css);
console.log('Update complete');
