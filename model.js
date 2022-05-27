class Element {
    constructor(index, name, url){
        this.index = index;
        this.name = name;
        this.url = url
    }
    static fromDbObj(obj){
        const race = new Element(obj.index, obj.name, obj.url);
        return race
    }
    
}

class Race extends Element{
    constructor(index, name,alignement, url){
        super(index, name, url)
        this.alignement = alignement;
        
    }

    static fromDbObj(obj){
        const race = new Race(obj.index, obj.name, obj.alignement, obj.url);
        return race
    }
}