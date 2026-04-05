import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evangelische-kirche-herrenberg.de_hxv', ['https://www.evangelische-kirche-herrenberg.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
