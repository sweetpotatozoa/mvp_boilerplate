const express = require('express')
const app = express()
const compression = require('compression')
const nunjucks = require('nunjucks')
const cors = require('cors')
const path = require('path')

const configs = require('./src/utils/configs')
const mongodb = require('./src/utils/mongodb')
const indexRouter = require('./src/routes/index')
const exampleRouter = require('./src/routes/Example_Route')
const authRouter = require('./src/routes/Auth_Route')
const buyerRouter = require('./src/routes/Buyer_Route')
const traceTransactionRouter = require('./src/routes/TraceTransaction_Route')

// CORS 설정: 모든 출처를 허용하도록 설정
app.use(
  cors({
    origin: '*', // 모든 출처 허용
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 허용할 HTTP 메소드 명시
    allowedHeaders: ['Content-Type', 'x-access-token'], // 허용할 헤더 명시
    credentials: true, // 쿠키를 포함시키기 위한 설정
  }),
)

app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

nunjucks.configure('./src/views', {
  express: app,
  watch: true,
})

app.use(compression())
app.use(express.json({ limit: '200mb' }))
app.use(
  express.urlencoded({
    limit: '200mb',
    extended: false,
    parameterLimit: 50000,
  }),
)
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/example', exampleRouter)
app.use('/auth', authRouter)
app.use('/buyer', buyerRouter)
app.use('/traceTransaction', traceTransactionRouter)

mongodb.runAfterAllConnected(() => {
  app.listen(configs.port, () => {
    console.log(`Server is running on port ${configs.port}`)
  })
})
