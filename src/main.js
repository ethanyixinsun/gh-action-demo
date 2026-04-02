import { add } from './math.js';

const result = add(2, 3);

document.querySelector('#app').innerHTML = `
  <h1>GitHub Actions Demo</h1>
  <p class="badge">Deployed via GitHub Actions &rarr; GitHub Pages</p>
  <hr />
  <p>A minimal Vite + vanilla JS app with full CI/CD pipeline.</p>
  <p>2 + 3 = <strong>${result}</strong> &nbsp; (computed by math.js)</p>
`;
