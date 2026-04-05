import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_en.lemontreeopinions.com_820', ['https://en.lemontreeopinions.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
