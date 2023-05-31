const { createUserPostService, getUserPostService, getUserPostByIdService } = require("../Services/userPostservice");


exports.crateUserPost = async (req, res, next) => {

    try {
        const data = req.body;
        const result = await createUserPostService(data);

        res.status(200)
            .json({
                status: 'success',
                message: 'Data inserted successfully',
                data: result
            })
    } catch (error) {
        res.status(400)
            .json({
                status: 'failed',
                message: 'Data is not inserted successfully',
                error: error.message
            })
    }
};

exports.getUserPost = async (req, res, next) => {

    try {

        const result = await getUserPostService();

        res.send(result)

    } catch (error) {
        res.status(400)
            .json({
                status: 'failed',
                message: 'Data is not inserted successfully',
                error: error.message
            })
    }
};

exports.getUserPostById = async (req, res, next) => {

    try {

        const id = req.params.id;
        const result = await getUserPostByIdService(id);

        res.send(result)

    } catch (error) {
        res.status(400)
            .json({
                status: 'failed',
                message: 'Data is not inserted successfully',
                error: error.message
            })
    }
};
