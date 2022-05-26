class RACE {
    constructor(index, name, url){
        this.index = index;
        this.name = name;
        this.url = url
    }

    static fromDbObj(obj){
        const race = new RACE(obj.name, obj.url);
        race.index = obj.index;
        return race
    }
}