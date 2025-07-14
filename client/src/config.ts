function getRequiredEnv(key: string): string {
    const value = import.meta.env[key];
    if (!value || value === "") {
        throw new Error(`The environment variable ${key} is not set`);
    }
    return value;
}

const config = {
    apiEndpoint: getRequiredEnv("VITE_API_URL")
};

export default config;
