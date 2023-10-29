const Joi = require('joi');

// user Related Schemas
/*
this file contains idSchema freelancerSchema , clientSchema  Validation
 */

module.exports= {

    schemas: {
        // freelancer validation
        freelancerSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().messages({
                    "string.base": `"the language" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"the language" of the freelancer cannot be an empty field.`,
                }),
                firstName: Joi.string().required().messages({
                    "string.base": `"firstName" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"firstName" of the freelancer cannot be an empty field.`,
                    "any.required": `"firstName" of the freelancer is required.`,
                }),
                lastName: Joi.string().required().messages({
                    "string.base": `"lastName" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"lastName" of the freelancer cannot be an empty field.`,
                    "any.required": `"lastName" of the freelancer is required.`,
                }),
                expertise: Joi.string().messages({
                    "string.base": `"the expertise" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"expertise" of the freelancer cannot be an empty field.`,
                    "any.required": `"expertise" of the freelancer is required.`,

                }),
                bio: Joi.string().messages({
                    "string.base": `"bio" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"bio" of the freelancer cannot be an empty field.`,
                    "any.required": `"bio" of the freelancer is required.`,
                }),
            }).required().messages({
                "any.required": `"the translations of the freelancer" is required.`,
            }),
            email: Joi.string().required().lowercase().messages({
                "string.base": `"email" of the freelancer should be a type of 'string'.`,
                "string.empty": `"email" of the freelancer cannot be an empty field.`,
                "any.required": `"email" of the freelancer is required.`,
            }),
            phoneNumber: Joi.number().allow(null, ''),
            image: Joi.string().allow(null, ''),
            password: Joi.string().required().messages({
                "string.base": `"password" of the freelancer should be a type of 'string'.`,
                "string.empty": `"password" of the freelancer cannot be an empty field.`,
                "any.required": `"password" of the freelancer is required.`,
            }),
            passwordConfirm: Joi.string().required().messages({
                "string.base": `"password" of the freelancer should be a type of 'string'.`,
                "string.empty": `"password" of the freelancer cannot be an empty field.`,
                "any.required": `"password" of the freelancer is required.`,
            }),
            address: Joi.string().messages({
                "string.base": `"address" of the freelancer should be a type of 'string'.`,
            }),
            city: Joi.string().messages({
                "string.base": `"city" of the freelancer should be a type of 'string'.`,
            }),
            country: Joi.string().messages({
                "string.base": `"country" of the freelancer should be a type of 'string'.`,
            }),
            role: Joi.string().messages({
                "string.base": `"role" of the freelancer should be a type of 'string'.`,
            }),
            hourlyRate: Joi.number().messages({
                "string.base": `"Hourly Rate" of the freelancer should be a type of 'string'.`,
            }),
        }),
        freelancerOptionalSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().messages({
                    "string.base": `"the language" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"the language" of the freelancer cannot be an empty field.`,
                }),
                firstName: Joi.string().required().messages({
                    "string.base": `"firstName" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"firstName" of the freelancer cannot be an empty field.`,
                }),
                lastName: Joi.string().required().messages({
                    "string.base": `"lastName" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"lastName" of the freelancer cannot be an empty field.`,
                }),
                expertise: Joi.string().messages({
                    "string.base": `"the expertise" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"expertise" of the freelancer cannot be an empty field.`,

                }),
                bio: Joi.string().messages({
                    "string.base": `"bio" of the freelancer should be a type of 'string'.`,
                    "string.empty": `"bio" of the freelancer cannot be an empty field.`,
                }),
            }),
            email: Joi.string().required().lowercase().messages({
                "string.base": `"email" of the freelancer should be a type of 'string'.`,
                "string.empty": `"email" of the freelancer cannot be an empty field.`,
            }),
            phoneNumber: Joi.string().allow(null, ''),
            image: Joi.string().allow(null, ''),
            password: Joi.string().required().messages({
                "string.base": `"password" of the freelancer should be a type of 'string'.`,
                "string.empty": `"password" of the freelancer cannot be an empty field.`,
            }),
            address: Joi.string().messages({
                "string.base": `"address" of the freelancer should be a type of 'string'.`,
            }),
            city: Joi.string().messages({
                "string.base": `"city" of the freelancer should be a type of 'string'.`,
            }),
            country: Joi.string().messages({
                "string.base": `"country" of the freelancer should be a type of 'string'.`,
            }),
            role: Joi.string().messages({
                "string.base": `"role" of the freelancer should be a type of 'string'.`,
            }),
            hourlyRate: Joi.number().required().messages({
                "string.base": `"hourlyRate" of the freelancer should be a type of 'number.`,
            }),
        }),
        // client validation
        clientSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the client should be a type of 'string'.`,
                    "string.empty": `"the language" of the client cannot be an empty field.`,
                    "any.required": `"the language" of the client is required.`,
                }),
                firstName: Joi.string().required().messages({
                    "string.base": `"the firstName" of the client should be a type of 'string'.`,
                    "string.empty": `"the firstName" of the client cannot be an empty field.`,
                    "any.required": `"the firstName" of the client is required.`,
                }),
                lastName: Joi.string().required().messages({
                    "string.base": `"the lastName" of the client should be a type of 'string'.`,
                    "string.empty": `"the lastName" of the client cannot be an empty field.`,
                    "any.required": `"the lastName" of the client is required.`,
                })
            }).required().messages({
                "any.required": `"the translations of the client" is required.`,
            }),
            email: Joi.string().required().email().lowercase().messages({
                "string.base": `"email" of the client should be a type of 'string'.`,
                "string.empty": `"email" of the client cannot be an empty field.`,
                "any.required": `"email" of the client is required.`,
            }),
            phoneNumber: Joi.number().allow(null, ''),
            image: Joi.string().allow(null, ''),
            password: Joi.string().required().messages({
                "string.base": `"password" of the client should be a type of 'string'.`,
                "string.empty": `"password" of the client cannot be an empty field.`,
                "any.required": `"password" of the client is required.`,
            }),
            passwordConfirm: Joi.string().required().messages({
                "string.base": `"passwordConfirm" of the client should be a type of 'string'.`,
                "string.empty": `"passwordConfirm" of the client cannot be an empty field.`,
                "any.required": `"passwordConfirm" of the client is required.`,
            }),
            address: Joi.string().messages({
                "string.base": `"address" of the client should be a type of 'string'.`,
            }),
            city: Joi.string().messages({
                "string.base": `"city" of the client should be a type of 'string'.`,
            }),
            country: Joi.string().messages({
                "string.base": `"country" of the client should be a type of 'string'.`,
            }),
            role: Joi.string().messages({
                "string.base": `"role" of the client should be a type of 'string'.`,
            }),
            Jobs: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the class id" of client  should be a type of 'string'.`,
            }))
        }),
        clientOptionalSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the client should be a type of 'string'.`,
                    "string.empty": `"the language" of the client cannot be an empty field.`,
                }),
                firstName: Joi.string().required().messages({
                    "string.base": `"the firstName" of the client should be a type of 'string'.`,
                    "string.empty": `"the firstName" of the client cannot be an empty field.`,
                }),
                lastName: Joi.string().required().messages({
                    "string.base": `"the lastName" of the client should be a type of 'string'.`,
                    "string.empty": `"the lastName" of the client cannot be an empty field.`,
                })
            }),
            email: Joi.string().required().lowercase().messages({
                "string.base": `"email" of the client should be a type of 'string'.`,
                "string.empty": `"email" of the client cannot be an empty field.`,
            }),
            phoneNumber: Joi.string().allow(null, ''),
            image: Joi.string().allow(null, ''),
            password: Joi.string().required().messages({
                "string.base": `"password" of the client should be a type of 'string'.`,
                "string.empty": `"password" of the client cannot be an empty field.`,
            }),
            address: Joi.string().messages({
                "string.base": `"address" of the client should be a type of 'string'.`,
            }),
            city: Joi.string().messages({
                "string.base": `"city" of the client should be a type of 'string'.`,
            }),
            country: Joi.string().messages({
                "string.base": `"country" of the client should be a type of 'string'.`,
            }),
            role: Joi.string().messages({
                "string.base": `"role" of the client should be a type of 'string'.`,
            }),
            Jobs: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the class id" of client  should be a type of 'string'.`,
            }))

        }),

        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
                "string.base": `"the id" of should be a type of 'string'.`,
                "string.regex": `"the id" of doesn't match the pattern.`,
                "string.empty": `"the id" of cannot be an empty field.`,
                "any.required": `"the id" of is required.`,
            })
        })
    }
}
