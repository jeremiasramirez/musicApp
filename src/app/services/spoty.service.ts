import { Injectable} from "@angular/core"
 

@Injectable()


export class SpotyService{
 
    
 
    getNewRelease(){
        
        return [{
            "id": 1,
            "name": "Funeral",
            "image": "1.jpeg",
            "artist": 1
    
        },
        {
    
            "id": 2,
            "name": "Only The Young",
            "image": "2.jpeg",
            "artist": 2
    
        },
        {
    
            "id": 3,
            "name": "Get Me",
            "image": "3.jpeg",
            "artist": 3
    
        },
        {
    
            "id": 4,
            "name": "Anyone",
            "image": "4.jpeg",
            "artist": 4
    
        },
        {
    
            "id": 5,
            "name": "Definitivamente",
            "image": "5.jpeg",
            "artist": 5
    
        },
        {
    
            "id": 6,
            "name": "Shake The Snow Globe",
            "image": "6.jpeg",
            "artist": 6
    
        },
        {
    
            "id": 7,
            "name": "Sometimes",
            "image": "7.jpeg",
            "artist": 7
    
        },
        {
    
            "id": 8,
            "name": "Physical",
            "image": "8.jpeg",
            "artist": 8
    
        },
        {
    
            "id": 9,
            "name": "The Best Ones of the Best Ones",
            "image": "9.jpeg",
            "artist": 9
    
        },
        {
    
            "id": 10,
            "name": "Song Machine",
            "image": "10.jpeg",
            "artist": 10
    
        },
        {
    
            "id": 11,
            "name": "High Road",
            "image": "11.jpeg",
            "artist": 11
    
        },
        {
    
            "id": 12,
            "name": "You Kissed Me First",
            "image": "12.jpeg",
            "artist": 12
    
        },
        {
    
            "id": 13,
            "name": "Treat Myself",
            "image": "13.jpeg",
            "artist": 13
    
        },
        {
    
            "id": 14,
            "name": "King Of My City",
            "image": "14.jpeg",
            "artist": 14
    
        },
        {
    
            "id": 15,
            "name": "Walls",
            "image": "15.jpeg",
            "artist": 15
    
        },
        {
    
            "id": 16,
            "name": "Hang In There Girl",
            "image": "16.jpeg",
            "artist": 16
    
        },
        {
    
            "id": 17,
            "name": "Fkn Around",
            "image": "17.jpeg",
            "artist": 17
    
        },
        {
    
            "id": 18,
            "name": "Never Come Back",
            "image": "18.jpeg",
            "artist": 18
    
        },
        {
    
            "id": 19,
            "name": "Fade Away",
            "image": "19.jpeg",
            "artist": 19
    
        },
        {
    
            "id": 20,
            "name": "Smash Shit Up",
            "image": "20.jpeg",
            "artist": 20
    
        }
    ]
   
   
    }
    getAlbum(){
        return [{

            "id": 1,
            "name": "Romeo santos",
            "image": "1.jpeg",
            "playlist": [{
                    "id": 1,
                    "title": "Payasos",
                    "audio": ["1.mp3"]
                },
                {
                    "id": 2,
                    "title": "La demanda",
                    "audio": ["2.mp3"]
                },
        
                {
                    "id": 3,
                    "title": "Amor enterrado",
                    "audio": ["3.mp3"]
                }
            ]
        
        
        
        }]
    }


}