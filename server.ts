// tslint:disable:no-console
import * as express from 'express';

// Pin generator
const pinMainTemplate = `
<svg width="635px" height="635px" viewBox="-305 -305 610 610" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <circle stroke="#000000" stroke-width="10" fill="#COLOR" cx="0" cy="0" r="300"/>
  BLOCKS
</svg>
`;
const blockTemplate = `
<g id="Block" transform="translate(ORIGIN)">
  <polygon fill="#000000" points="0 -119.356 -103.364 -59.681 -103.364 59.677 0 119.355 103.366 59.677 103.366 -59.681"/>
  <polygon fill="#COLOR" points="93.183 53.8 0 107.598 -93.183 53.8 -93.183 -53.8 0 -107.598 93.183 -53.8"/>
  <path d="M90.201,-47.232 C89.263,-48.859 87.185,-49.418 85.557,-48.478 L0.005,0.86 L-85.121,-48.475 C-86.746,-49.415 -88.826,-48.863 -89.767,-47.238 C-90.708,-45.614 -90.155,-43.533 -88.53,-42.592 L-3.399,6.747 L-3.399,97.948 C-3.399,99.826 -1.877,101.347 0.001,101.347 C1.879,101.347 3.401,99.826 3.401,97.948 L3.401,6.751 L88.955,-42.588 C90.581,-43.526 91.139,-45.605 90.201,-47.232 Z" fill="#000000"/>
</g>
`;
const mainColors = {
  r: 'FF7F7F',
  y: 'FFFF7F',
  b: '7F7FFF',
  k: '7F7F7F',
}
const blockColors = {
  r: 'FF4040',
  y: 'FFFF40',
  b: '4040FF',
  k: '404040',
}
const blockOrigins = [
  [],
  [[0,0]],
  [[-120,0], [120,0]],
  [[-120,-22], [120,-22], [0,103]],
];

function generatePin(id: string): string {
  let mainColor = id.charAt(0);
  let blockCount = id.length - 1;
  let blocks = "";

  let myBlockOrigins = blockOrigins[blockCount];
  for (let i = 0; i < blockCount; i++) {
    blocks += blockTemplate
      .replace("ORIGIN", myBlockOrigins[i])
      .replace("COLOR", blockColors[id.charAt(i+1)]);
  }

  return pinMainTemplate
    .replace("COLOR", mainColors[mainColor])
    .replace("BLOCKS", blocks);
}

// Main starts here
const port = 4000; // process.env.PORT
const app = express();

app.get('/pin/:id', (request, response) => {
  response.type('svg');
  response.send(generatePin(request.params.id));
});

app.listen(port, () => {
  console.log('Your app is up');
});
