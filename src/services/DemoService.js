
class DemoService {

    data = "ford";

    setData(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }

}

export default new DemoService();