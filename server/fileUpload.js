module.exports = fileUpload

function fileUpload(req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.')
    }

    const fileToProccess = req.files.file
    let parsedData

    try {
        parsedData = JSON.parse(fileToProccess.data.toString())
        res.json(parsedData)
    } catch (err) {
        res.status(412).json('Uploaded file is not a valid JSON file')
    }

}
