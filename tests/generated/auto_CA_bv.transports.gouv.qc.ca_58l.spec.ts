import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_bv.transports.gouv.qc.ca_58l', ['https://www.cubiq.ribg.gouv.qc.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
