import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogVideoService {

	public videoUrl: string;

  	constructor() { }

  	setDialog(videoUrl: string){
	  	this.videoUrl = videoUrl;
	}

	getVideoUrl(){
	  	return this.videoUrl;
	  }
}
