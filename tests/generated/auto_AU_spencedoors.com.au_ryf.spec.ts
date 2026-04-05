import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_spencedoors.com.au_ryf', ['https://www.spencedoors.com.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
