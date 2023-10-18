import axios from "axios";

class kiAxios {
    constructor() {
        this.dafault = new Object()
    }
    create(config) {
        this.dafault = config
        return this
    }
    // 统一接口
    request(config) {
        return new Promise((resolve, reject) => {
            axios.request({ ...config, ...this.dafault }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
    all(arr) {
        if (arr instanceof Array !== true) { new Error('传入参数应为数组') }
        return Promise.all([...arr])
    }
}

export default new kiAxios()