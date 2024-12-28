import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';


const package_json = require('./package.json');
export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: package_json.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: package_json.module,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            PeerDepsExternalPlugin(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            terser(),
        ],
        external: ['react', 'react-dom'],
    },
    {
        input: "src/index.ts",
        output: [{ file: package_json.types }],
        plugins: [dts.default()],
    }
]