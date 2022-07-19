// Import built in GraphQL data types
const { GraphQLObjectType, GraphQLInputObjectType, 
	GraphQLID, GraphQLString, GraphQLList} = require('graphql')
const { User, Post } = require('../models')

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type',
    fields: () => ({
        id: { type: GraphQLID },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        post: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userId: parent.id })
            }
        }
    })
})

const PostType = new GraphQLObjectType({
    name:'Post',
    description: 'Post Type',
    fields: () => ({
        id: { type: GraphQLID },
        userID: {type: GraphQLString},
        content: {type: GraphQLString}
    })
})

module.exports = {
    UserType,
    PostType
}