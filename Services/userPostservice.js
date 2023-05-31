const User = require("../Model/User")


exports.createUserPostService = async (data) => {
    const result = await User.create(data);
    return result;
};

exports.getUserPostService = async () => {
    const result = await User.find({});
    return result;
}

exports.getUserPostByIdService = async (id) => {
    const result = await User.findById({id})
    return result;
}