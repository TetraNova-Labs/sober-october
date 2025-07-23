


export default () => ({
    NODE_ENV: process.env.NODE_ENV || 'dev',
    DB_URL: process.env.DATABASE_URL,
})
