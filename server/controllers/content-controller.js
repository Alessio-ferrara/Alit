
const HttpError = require("../http-error");

const Content = require("../models").Content;

const getPageContent = async (req, res, next) => {
    const { page } = req.params;
    try {
        let content = await Content.getContentByPage(page);
        res.status(200).json(content);
    } catch (err) {
        return next(
            new HttpError(err, 500)
        );
    }
};

exports.getPageContent = getPageContent;
