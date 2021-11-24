import { Bundle } from '@lisa-env/type';
import gnu from '@binary/gcc-arm-none-eabi-10.3';

export default <Bundle>{
  binaries: [
    'gcc-arm-none-eabi-10.3',
  ],
  env: {
    ZEPHYR_TOOLCHAIN_VARIANT: 'gnuarmemb',
    GNUARMEMB_TOOLCHAIN_PATH: gnu.homeDir,
  },
};
