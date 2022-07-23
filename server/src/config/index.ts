import local from './local';

const config = {
    development: local,
};

const env = process.env.NODE_ENV;
export default () => config[env];
