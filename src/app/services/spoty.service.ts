import { Injectable} from "@angular/core"
import { HttpClient , HttpHeaders} from "@angular/common/http"


@Injectable()


export class SpotyService{

    constructor(public http: HttpClient){

    }
 
    getNewRelease(){
        let headers = new HttpHeaders({
            'Authorization' : 'Bearer BQCOj3BvTgGahIcAB-BGo9pGPmpiI1WywUboXuXt9CWkgrDkSjqHJMMB-vzTwYgll_FlzL8iUfJwUFq_kRTucxu_anSBzeU3VBFr8DmenvF6AstBs9KMlFVA3APLP-awAdnRLhsjIW75stlKg2YKz-ozMlJG70ACI0q2'
        });

       return this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers })
    }


}