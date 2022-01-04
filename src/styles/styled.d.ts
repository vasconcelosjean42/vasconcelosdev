import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            background: string,

            primary: string,
            primaryLess: string,

            text: string,
            hoverText: string,

            sidebar: string,
        },
    }
}