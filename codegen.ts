import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: './gql/sdl.gql',
    documents: ['operations/**/*.ts'],
    ignoreNoDocuments: true,
    generates: {
        './gql/': {
            preset: 'client',
            plugins: [],
        },
    },
}

export default config
