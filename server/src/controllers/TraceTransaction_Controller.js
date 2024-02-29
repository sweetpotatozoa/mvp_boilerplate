const TraceTransacionService = require('../services/TraceTransaction_Service')

class TraceTransactionController {
  async getTransactionProgress(userId) {
    const isIdvalid = await TraceTransacionService.isIdvalid(userId)
    if (!isIdvalid) {
      return { status: 400, message: 'Invalid ID' }
    } else {
      try {
        const result = await TraceTransacionService.getTransactionProgress(
          userId,
          console.log('userId', userId),
        )
        if (result === null) {
          return { status: 404, message: 'Transaction not found' }
        } else {
          return { status: 200, ...result }
        }
      } catch (err) {
        return { status: 500, message: err.message }
      }
    }
  }
}

module.exports = new TraceTransactionController()
