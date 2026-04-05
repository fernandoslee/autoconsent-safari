import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_durhamcathedral.co.uk_snb', ['https://www.durhamcathedral.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
