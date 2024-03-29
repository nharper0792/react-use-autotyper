import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import {terser} from "rollup-plugin-terser";

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [
    {
        external: ['react', 'react-dom',"usehooks-ts"],
        input: 'src/index.ts', // Changed extension to .tsx
        output: {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: devMode ? 'inline' : false,
        },
        plugins: [
            typescript(), // TypeScript plugin added first
            sass({ insert: true }),
            terser({
                ecma: 2020,
                mangle: { toplevel: true },
                compress: {
                    module: true,
                    toplevel: true,
                    unsafe_arrows: true,
                    drop_console: !devMode,
                    drop_debugger: !devMode
                },
                output: { quote_style: 1 }
            })
        ]

    }
]
