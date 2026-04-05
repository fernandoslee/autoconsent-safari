import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_researchers.cedars-sinai.edu_i62', ['https://researchers.cedars-sinai.edu/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
