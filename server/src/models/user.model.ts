import {Schema, model, Document} from 'mongoose'
import { UserModelType } from '../types.def'


export interface UserDocument extends UserModelType, Document {}

const userSchema = new Schema<UserDocument>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    verificationTokenExpiration: {
        type: Date,
        default: null
    }
})


export const UserModel = model<UserDocument>('User', userSchema)