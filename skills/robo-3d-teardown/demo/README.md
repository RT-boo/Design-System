# Korn Ferry — Interactive 3D Teardown

This is the **same working slider-crank mechanism demo** as the original project: inspectable Three.js scene, orbit/zoom, part selection, cutaway, exploded state, controls, reduced-motion handling, automated browser QA and mobile screenshots. The renderer, state model and pinned third-party dependency remain intact.

The demo now exports the `korn-ferry` light theme from the existing token pipeline and displays a **text-only Korn Ferry placeholder** rather than an official logo.

## Build and test

```bash
npm run 3d:test
npm run tokens
git clone https://github.com/elvarofficial/teardown.git /tmp/teardown
git -C /tmp/teardown checkout a91262ac1109051e014662d42ecb0b7bc1f113b1
(cd /tmp/teardown && npm ci --ignore-scripts)
TEARDOWN_DIR=/tmp/teardown npm run 3d:build
TEARDOWN_DIR=/tmp/teardown npm run 3d:qa
```

The existing compatibility output path remains `build/3d/dist/robo-slider-crank.html`, while the page title, active theme and visual identity are KF. The path and JavaScript API remain unchanged to avoid breaking integrations.

Read `../references/upstream.md` and `../LICENSE-UPSTREAM.txt` before using third-party code. Mechanical dimensions in this demonstration are illustrative unless independently verified.
