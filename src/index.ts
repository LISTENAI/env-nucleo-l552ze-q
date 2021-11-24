import { Bundle } from '@lisa-env/type';
import gnu from '@binary/gnu-arm-embedded-toolchain';

export default <Bundle>{
  binaries: [
    'gnu-arm-embedded-toolchain',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gnu.homeDir,
  },
};
