import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_researchers.arts.ac.uk_d4o', ['https://researchers.arts.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
