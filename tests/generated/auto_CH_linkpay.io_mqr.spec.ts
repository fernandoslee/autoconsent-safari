import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_linkpay.io_mqr', ['https://linkpay.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
