const Joi = require('joi');

// Jobs Related Schemas
/*
this file contains idSchema classificationSchema , reviewSchema , Validation
 */


module.exports= {

    schemas: {
        // Classification Model
        classificationSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the classification should be a type of 'string'.`,
                    "string.empty": `"the language" of the classification cannot be an empty field.`,
                    "any.required": `"the language" of the classification is required.`,
                }),
                category: Joi.string().required().messages({
                    "string.base": `"the category" of the classification should be a type of 'string'.`,
                    "string.empty": `"the category" of the classification cannot be an empty field.`,
                    "any.required": `"the category" of the classification is required.`,
                }),
                subCategory: Joi.string().required().messages({
                    "string.base": `"the subCategory" of the classification should be a type of 'string'.`,
                    "string.empty": `"the subCategory" of the classification cannot be an empty field.`,
                    "any.required": `"the subCategory" of the classification is required.`,
                })
            }).required().messages({
                "any.required": `"the translations of the classification" is required.`,
            })
        }),
        classificationOptionalSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the classification should be a type of 'string'.`,
                    "string.empty": `"the language" of the classification cannot be an empty field.`
                }),
                category: Joi.string().required().messages({
                    "string.base": `"the category" of the classification should be a type of 'string'.`,
                    "string.empty": `"the category" of the classification cannot be an empty field.`
                }),
                subCategory: Joi.string().required().messages({
                    "string.base": `"the subCategory" of the classification should be a type of 'string'.`,
                    "string.empty": `"the subCategory" of the classification cannot be an empty field.`
                })
            })
        }),
        // Review Validation
        reviewSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the review should be a type of 'string'.`,
                    "string.empty": `"the language" of the review cannot be an empty field.`,
                    "any.required": `"the language" of the review is required.`,
                }),
                title: Joi.string().required().messages({
                    "string.base": `"the title" of the review should be a type of 'string'.`,
                    "string.empty": `"the title" of the review cannot be an empty field.`,
                    "any.required": `"the title" of the review is required.`,
                }),
                commentary: Joi.string().required().messages({
                    "string.base": `"the commentary" of the review should be a type of 'string'.`,
                    "string.empty": `"the commentary" of the review cannot be an empty field.`,
                    "any.required": `"the commentary" of the review is required.`,
                })
            }).required().messages({
                "any.required": `"the translations of the review" is required.`,
            }),
            rating: Joi.number().required().min(1).max(5).messages({
                "number.base": `"the rating of the review should be a number"`,
                "number.empty": `"the rating of the review cannot be empty"`,
                "any.required": `"the rating" of the review is required.`,
            }),
            Client: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the Client" who posted the Review  should be a type of 'string'.`,
                "string.regex": `"the Client" who posted the  doesn't match the pattern.`,
                "string.empty": `"the Client" who posted the  cannot be an empty field.`
            }),
            Freelancer: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the Freelancer" of the Review  should be a type of 'string'.`,
                "string.regex": `"the Freelancer"  of the the Review  doesn't match the pattern.`,
                "string.empty": `"the Freelancer"  of the the Review  cannot be an empty field.`
            }),
        }),
            reviewOptionalSchema: Joi.object().keys({
                translations: Joi.array().items({
                    language: Joi.string().messages({
                        "string.base": `"the language" of the review should be a type of 'string'.`,
                        "string.empty": `"the language" of the review cannot be an empty field.`,
                    }),
                    title: Joi.string().messages({
                        "string.base": `"the title" of the review should be a type of 'string'.`,
                        "string.empty": `"the title" of the review cannot be an empty field.`,
                    }),
                    commentary: Joi.string().messages({
                        "string.base": `"the commentary" of the review should be a type of 'string'.`,
                        "string.empty": `"the commentary" of the review cannot be an empty field.`,
                    })
                }),
                rating: Joi.number().min(1).max(5).messages({
                    "number.base": `"the rating of the review should be a number"`,
                    "number.empty": `"the rating of the review cannot be empty"`,
                }),
                Client: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                    "string.base": `"the Client" who posted the Review  should be a type of 'string'.`,
                    "string.regex": `"the Client" who posted the Review  doesn't match the pattern.`,
                    "string.empty": `"the Client" who posted the Review cannot be an empty field.`
                }),
                Freelancer: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                    "string.base": `"the Freelancer" of the Review  should be a type of 'string'.`,
                    "string.regex": `"the Freelancer"  of the the Review  doesn't match the pattern.`,
                    "string.empty": `"the Freelancer"  of the the Review  cannot be an empty field.`
                })

        }),

        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
                "string.base": `"the  id" should be a type of 'string'.`,
                "string.regex": `"the  id"  doesn't match the pattern.`,
                "string.empty": `"the  id" cannot be an empty field.`,
                "any.required": `"the  id"   is required.`,
            })
        })
    }
}
