const Joi = require('joi');

// Job related Models Validation


module.exports= {
    schemas: {
        // Job Validation
        jobSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the job should be a type of 'string'.`,
                    "string.empty": `"the language" of the job cannot be an empty field.`,
                    "any.required": `"language" of the job is required.`,
                }),
                title: Joi.string().required().messages({
                    "string.base": `"title" of the job should be a type of 'string'.`,
                    "string.empty": `"title" of the job cannot be an empty field.`,
                    "any.required": `"title" of the job is required.`,
                }),
                description: Joi.string().required().messages({
                    "string.base": `"description" of the job should be a type of 'string'.`,
                    "string.empty": `"description" of the job cannot be an empty field.`,
                    "any.required": `"description" of the job is required.`,
                }),
                category: Joi.string().required().messages({
                    "string.base": `"title" of the job should be a type of 'string'.`,
                    "string.empty": `"title" of the job cannot be an empty field.`,
                    "any.required": `"title" of the job is required.`,
                }),
                subCategory: Joi.string().required().messages({
                    "string.base": `"description" of the job should be a type of 'string'.`,
                    "string.empty": `"description" of the job cannot be an empty field.`,
                    "any.required": `"description" of the job is required.`,
                }),
            }).required().messages({
                "any.required": `"the translations of the freelancer" is required.`,
            }),
            deadline: Joi.string().required().messages({
                "string.base": `"deadline" of the job should be a type of 'string'.`,
                "string.empty": `"deadline" of the job cannot be an empty field.`,
                "any.required": `"deadline" of the job is required.`,
            }),
            // tasks: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            //     "string.base": `"the classe id" of tasks  should be a type of 'string'.`,
            //     "string.regex": `"the classe id" of tasks  doesn't mutch the patern.`,
            // })),
            documentTitle: Joi.string().allow(null, ''),
            document: Joi.string().allow(null, ''),
            linkTitle: Joi.string().allow(null, ''),
            link: Joi.string().allow(null, ''),
            // classification: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
            client: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the client" of job  should be a type of 'string'.`,
                "string.regex": `"the client" of job  doesn't match the pattern.`,
                "any.required": `"the client" of job  cannot be an empty field.`
            }),
            budget: Joi.number().required().messages({
                "string.base": `"budget" of the job should be a type of 'string'.`,
                "string.empty": `"budget" of the job cannot be an empty field.`,
                "any.required": `"budget" of the job is required.`,
            })
        }),

        jobOptionalSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the job should be a type of 'string'.`,
                    "string.empty": `"the language" of the job cannot be an empty field.`,
                }),
                title: Joi.string().required().messages({
                    "string.base": `"title" of the job should be a type of 'string'.`,
                    "string.empty": `"title" of the job cannot be an empty field.`,
                }),
                description: Joi.string().required().messages({
                    "string.base": `"description" of the job should be a type of 'string'.`,
                    "string.empty": `"description" of the job cannot be an empty field.`,
                }),
                category: Joi.string().required().messages({
                    "string.base": `"title" of the job should be a type of 'string'.`,
                    "string.empty": `"title" of the job cannot be an empty field.`,
                }),
                subCategory: Joi.string().required().messages({
                    "string.base": `"description" of the job should be a type of 'string'.`,
                    "string.empty": `"description" of the job cannot be an empty field.`,
                }),
            }),
            deadline: Joi.string().required().messages({
                "string.base": `"deadline" of the job should be a type of 'string'.`,
                "string.empty": `"deadline" of the job cannot be an empty field.`,
            }),
            // tasks: Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
            //     "string.base": `"the classe id" of tasks  should be a type of 'string'.`,
            //     "string.regex": `"the classe id" of tasks  doesn't mutch the patern.`,
            // })),
            documentTitle: Joi.string().allow(null, ''),
            document: Joi.string().allow(null, ''),
            linkTitle: Joi.string().allow(null, ''),
            link: Joi.string().allow(null, ''),
            client: Joi.string().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the client" of job  should be a type of 'string'.`,
                "string.regex": `"the client" of job  doesn't match the pattern.`,
                "string.empty": `"the client" of job  cannot be an empty field.`
            }),
            budget: Joi.number().required().messages({
                "string.base": `"budget" of the job should be a type of 'string'.`,
                "string.empty": `"budget" of the job cannot be an empty field.`,
            })
        }),
        // Suggestion Validation

        suggestionSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the suggestion should be a type of 'string'.`,
                    "string.empty": `"the language" of the suggestion cannot be an empty field.`,
                    "any.required": `"language" of the job suggestion required.`,
                }),
                textQuestion: Joi.string().required().messages({
                    "string.base": `"textQuestion" of the suggestion should be a type of 'string'.`,
                    "string.empty": `"textQuestion" of the suggestion cannot be an empty field.`,
                    "any.required": `"textQuestion" of the suggestion is required.`,
                }),
            }).messages({
                "any.required": `"the translations of the suggestion" is required.`,
            }),
            job: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the job" of suggestion  should be a type of 'string'.`,
                "string.regex": `"the job" of suggestion  doesn't match the pattern.`,
                "string.empty": `"the job" of suggestion  cannot be an empty field.`
            }),
            author: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the author" of suggestion  should be a type of 'string'.`,
                "string.regex": `"the author" of suggestion  doesn't match the pattern.`,
                "string.empty": `"the author" of suggestion  cannot be an empty field.`
            }),
        }),
        suggestionOptionalSchema: Joi.object().keys({
            translations: Joi.array().items({
                language: Joi.string().required().messages({
                    "string.base": `"the language" of the suggestion should be a type of 'string'.`,
                    "string.empty": `"the language" of the suggestion cannot be an empty field.`,

                }),
                textQuestion: Joi.string().required().messages({
                    "string.base": `"textQuestion" of the suggestion should be a type of 'string'.`,
                    "string.empty": `"textQuestion" of the suggestion cannot be an empty field.`,
                }),
            }),
            job: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the job" of suggestion  should be a type of 'string'.`,
                "string.regex": `"the job" of suggestion  doesn't match the pattern.`,
            }),
            author: Joi.string().required().regex(/^[0-9a-fA-F]{24}$/).messages({
                "string.base": `"the author" of suggestion  should be a type of 'string'.`,
                "string.regex": `"the author" of suggestion  doesn't match the pattern.`,
            }),
        }),



        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required().messages({
                "string.base": `"the id" should be a type of 'string'.`,
                "string.regex": `"the id" doesn't match the pattern.`,
                "string.empty": `"the id" cannot be an empty field.`,
                "any.required": `"the of is required.`,
            })
        })
    }
}
