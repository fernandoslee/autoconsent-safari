import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_info-clipper.com_lxp', ['https://www.info-clipper.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
