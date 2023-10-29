



module.exports.FilterByLang = (req, doc, res, model) => {

    let lang = req.params.lang
    if (lang && doc) {
        if (doc instanceof Array) {
            for (let i = 0; i < doc.length; i++) {
                this.filterElt(lang, doc[i], model)

            }
        } else {
            this.filterElt(lang, doc, model)

        }
    }
    res.status(200).json(doc);

}



module.exports.filterElt = (lang, doc, model) => {
    if (doc.translations) {
        const translation = doc.translations.find(t => t.language === lang)
        if (translation) {
            doc.translations = translation;
        } else {
            doc.translations = []
        }

    }
    if (model) {
        model.forEach(element => {
            this.filterNestedElt(lang, doc[element])
        });
    }
}
module.exports.filterNestedElt = (lang, doc) => {
    if (doc instanceof Array)
        for (let key in doc) {

            if (doc[key].translations) {
                let dt = doc[key].translations.find(x => x.language === lang);
                if (dt)
                    doc[key].translations = dt;
                else
                    doc[key].translations = []

            }
        }
    else {
        if (doc.translations) {
            let dt = doc.translations.find(x => x.language === lang);
            if (dt)
                doc.translations = dt;
            else
                doc.translations = []

        }
    }
}





module.exports.updateData = async (req, res, Model, next) => {


    let list = { "translations.$": req.body.translations }
    let lang = req.body.translations.language;
    const idd = req.params.id;
    let _translations = req.body.translations;
    delete req.body.translations;
    delete req.body._id;
    let key;
    const result = {};
    for (key in list) {

        if (list.hasOwnProperty(key)) {
            result[key] = list[key]
        }
    }

    for (key in req.body) {

        // if (req.body.hasOwnProperty(key)) {
        result[key] = req.body[key]
        //  }
    }



    Model.findOne({
        "$and": [{ _id: idd }, {
            "translations.language": lang
        }]
    }, (err, doc) => {
        if (!err) {
            if (doc) {

                Model.findOneAndUpdate(
                    {
                        "$and": [{ _id: idd }, {
                            "translations.language": lang
                        }]
                    },
                    {
                        $set: result
                    }
                ).then((result) => {
                    if (result) {
                        if (!next)
                            res.status(200).json({ message: "the object was updated successfully" });
                    }
                    else {
                        res.status(404).json({ message: "can't updated data, element was not found" });
                    }
                }).catch((error) => {
                    console.log("errooor", error)
                    res.status(404).json({ message: "An error occurred while updating data", error: error });
                })
            } else {
                Model.findOneAndUpdate({ _id: idd },
                    {
                        $push: { translations: _translations },
                        $set: req.body
                    },

                    { new: true, useFindAndModify: false }
                ).then((result) => {
                    if (result) {
                        if (!next)
                            res.status(200).json({ message: "translation was added successfully", data: result });

                    }
                    else {
                        res.status(404).json({ message: "can't add translation, provided id of object was not found" });
                    }
                }).catch((error) => {
                    console.log("errrrrorrrrr", error)
                    res.status(404).json({ message: "An error occurred while updating data", error: error, model: Model });
                })
            }
        }
        else {
            res.status(404).json({ message: "An error occurred while updating data", error: err });

        }
    });

}


