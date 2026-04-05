import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_consumentenbond.nl_tlv', ['https://www.consumentenbond.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
