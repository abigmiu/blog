export default {
    // 数据库
    db: {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'blog',
        charset: 'utf8mb4',
        entities: [__dirname + '/db/**/*.entity{.js,.ts}'],
        synchronize: true,
    },
    port: 3005, // 端口
    globalPrefix: '/api', // api 前缀
    swaggerPrefix: '/doc', // 文档前缀
};