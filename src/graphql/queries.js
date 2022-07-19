const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, PostType } = require('./types')
const { User, Post } = require('../models')

const users = {
    type: new GraphQLList(UserType),
    description: 'Query for all users in server',
    resolve(parent,args){
        return User.find()
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Query for all posts in server',
    resolve(parent,args){
        return Post.find()
    }
}

const userByID = {
    type: UserType,
    description: 'Return user by ID',
    args: {
        id: {type: GraphQLID}
    },
    resolve(parent, args){
        return User.findById({ id:args.id})
    }
}

const postsByUserID = {
    type: new GraphQLList(PostType),
    description: 'Query all post by user id',
    args: {
        userID: {type:GraphQLString}
    },
    resolve(parent,args){
        return Post.findOne({userID: args.userID})
    }
}

module.exports = {users,posts,userByID,postsByUserID}