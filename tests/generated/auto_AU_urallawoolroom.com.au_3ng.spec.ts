import generateCMPTests from '../../playwright/runner';
// Skipped: Squarespace overrides global Promise with a polyfill lacking Promise.any(),
// which breaks Playwright's main-world injection. Rule works in production (isolated world).
generateCMPTests('auto_AU_urallawoolroom.com.au_3ng', ['https://www.urallawoolroom.com.au/'], {
    testOptIn: false,
    testOptOut: false,
    testSelfTest: false,
    onlyRegions: ['AU'],
});
