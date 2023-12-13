
// Creating first controller
const randomNumGen = async(req, res) => {
    try {
        const randomNumber = Math.floor(Math.random() * 11);
        res.status(200).json({
            success: true,
            randomNumber
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        })
    }
}

module.exports = {
    randomNumGen
}