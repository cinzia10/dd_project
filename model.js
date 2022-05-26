class Race {
    constructor(index, name, url){
        this.index = index;
        this.name = name;
        this.url = url
    }

    static fromDbObj(obj){
        const race = new Race(obj.index, obj.name, obj.url);
        return race
    }
}