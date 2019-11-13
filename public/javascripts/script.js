var app = new Vue({
    el: '#app',
    data: {
        places: [],
    },
    
    methods: {
        show() {
            let url = "getplaces?=";
            fetch(url) 
            .then((data) => {
                return (data.json());
            })
            .then((placelist) => {
                console.log("Placelist");
                console.log(placelist);
                this.places = [];
                for (let i = 0; i < placelist.length; i++) {
                    this.places.push({ name: placelist[i].place });
                }
            })
        },
        
    },
    
    
});