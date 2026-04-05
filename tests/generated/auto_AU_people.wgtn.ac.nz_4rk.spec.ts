import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_people.wgtn.ac.nz_4rk', ['https://people.wgtn.ac.nz/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
