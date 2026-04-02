import { add } from './math.js';

const result1 = add(2, 3);
const result2 = add(-1, -2);

document.querySelector('#app').innerHTML = `
  <h1>GitHub Actions Demo</h1>
  <p class="badge">Deployed via GitHub Actions &rarr; GitHub Pages</p>
  <hr />
  <p>A minimal Vite + vanilla JS app with full CI/CD pipeline.</p>
  <p>2 + 3 = <strong>${result1}</strong> &nbsp; (computed by math.js)</p>
  <p>-1 + -2 = <strong>${result2}</strong> &nbsp; (computed by math.js)</p>
`;
