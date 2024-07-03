const logRequest = (req, res, next) => {
    console.log('terjadi request oleh middleware', req.url, req.method)
    console.log('terjadi request oleh middleware PATH', req.path)
    next()
}

module.exports = logRequest