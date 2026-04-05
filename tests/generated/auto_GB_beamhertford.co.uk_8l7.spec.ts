import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_beamhertford.co.uk_8l7', ['https://beamhertford.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
