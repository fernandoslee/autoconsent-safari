import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_interactivetheatre.com.au_ebq', ['https://www.interactivetheatre.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
