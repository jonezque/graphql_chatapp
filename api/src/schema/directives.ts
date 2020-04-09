import { GraphQLDirective, DirectiveLocation, GraphQLNonNull, GraphQLString, GraphQLSkipDirective, GraphQLIncludeDirective } from 'graphql';

const InstrumentDirective = new GraphQLDirective({
    name: 'instrument',
    description: 'Instrument the time it takes to resolve the field',
    locations: [DirectiveLocation.FIELD],
    args: {
        tag: {
            type: new GraphQLNonNull(GraphQLString),
            description: 'A tag to store in the metrics store',
        },
    },
});

const AuthDirective = new GraphQLDirective({
    name: 'auth',
    description: 'Allowed only to authorized users',
    locations: [DirectiveLocation.QUERY, DirectiveLocation.MUTATION, DirectiveLocation.SUBSCRIPTION],
});

export const directives = [InstrumentDirective, AuthDirective, GraphQLSkipDirective, GraphQLIncludeDirective];
